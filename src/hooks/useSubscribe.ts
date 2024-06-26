import { useToast } from '@chakra-ui/react'
import {
    useManageSubscription,
    useSubscription,
    useW3iAccount,
    useInitWeb3InboxClient,
    useMessages
} from '@web3inbox/widget-react'
import { useCallback, useEffect } from 'react'
import { useSignMessage, useAccount } from 'wagmi'
import { PROJECT_ID } from '../configuration/Config'

export const useSubscribe = () => {
    const toast = useToast();
    const { address } = useAccount()
    const { signMessageAsync } = useSignMessage()

    // Initialize the Web3Inbox SDK
    const isReady = useInitWeb3InboxClient({
        // The project ID and domain you setup in the Domain Setup section
        projectId: PROJECT_ID,
        domain: 'eth-global-istanbul-rwa-infra.vercel.app',

        // Allow localhost development with "unlimited" mode.
        // This authorizes this dapp to control notification subscriptions for all domains (including `app.example.com`), not just `window.location.host`
        isLimited: false
    })

    const { account, setAccount, isRegistered, isRegistering, register } = useW3iAccount()
    useEffect(() => {
        if (!address) return
        // Convert the address into a CAIP-10 blockchain-agnostic account ID and update the Web3Inbox SDK with it
        setAccount(`eip155:1:${address}`)
    }, [address, setAccount])

    // In order to authorize the dapp to control subscriptions, the user needs to sign a SIWE message which happens automatically when `register()` is called.
    // Depending on the configuration of `domain` and `isLimited`, a different message is generated.
    const performRegistration = useCallback(async () => {
        if (!address) return
        try {
            await register(message => signMessageAsync({ message }))
        } catch (registerIdentityError) {
            alert(registerIdentityError)
        }
    }, [signMessageAsync, register, address])

    const { isSubscribed, isSubscribing, subscribe } = useManageSubscription()

    const performSubscribe = useCallback(async () => {
        if (isSubscribed) return
        // Register again just in case
        await performRegistration()
        await subscribe()
        toast({
            title: 'Success',
            description: "WalletInbox Subscribed",
            status: 'success',
            duration: 9000,
            isClosable: true,
        })
    }, [subscribe, isSubscribed, performRegistration, toast])

    const { subscription } = useSubscription()
    const { messages } = useMessages()

    return {
        isSubscribed,
        subscribe: performSubscribe,
        isSubscribing: isSubscribing || isRegistering,
        subscription,
        messages
    }
}