import { Box, Text, Textarea, Divider, AbsoluteCenter, Flex } from "@chakra-ui/react"
import { createRef, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import useGlobalState, { nft } from "../hooks/useGlobalState";
import { FaCloudUploadAlt } from "react-icons/fa";

export const AttestForm = () => {
    const [nftData, setNftData] = useGlobalState(nft)
    const dropZoneRef: React.LegacyRef<HTMLDivElement> | undefined = createRef();
    const onDrop = useCallback(async (upload: any) => {
        console.log('onDrop')
        setNftData({ ...nftData, attestation: { pdf: upload } })
    }, [setNftData, nftData]);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return <Box mt={4}>
        <Text mb='8px'>Freeform Attestation:</Text>
        <Textarea
            rows={8}
            value={nftData.attestation?.freeform}
            onChange={(e) => setNftData({ ...nftData, attestation: { freeform: e.target.value } })}
            backgroundColor={'white'}
            placeholder="Decleration of the opportunities, rights and/or obligations that are associated with this token."
        />
        <Box position='relative' padding='10'>
            <Divider />
            <AbsoluteCenter px='4'>
                or
            </AbsoluteCenter>
        </Box>
        <input
            style={{ display: "none" }}
            {...getInputProps()}
            type="file"
            accept="*"
        />
        <Flex
            {...getRootProps()}
            w="full"
            cursor="pointer"
            ref={dropZoneRef}
            p="0"
            backdropFilter="blur(20px)"
            border="2px dashed #000"
            rounded="45px"
            minH={{ base: "20vh" }}
            bg="rgba(255, 255, 255, 0.09)"
            direction="column"
            transitionDuration="300ms"
            alignItems="center"
            _hover={{ background: "blackAlpha.100" }}
            justify="center"
            // py="10"
            mb="10"
        >
            <FaCloudUploadAlt size="60px" />
            <Text fontWeight="normal" mt="2">
                Legal Contract PDF
            </Text>
        </Flex>
    </Box>

}