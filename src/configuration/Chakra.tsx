import { ChakraProvider as ChakraUiProvider, extendTheme, StyleFunctionProps, withDefaultColorScheme } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const theme = extendTheme({
  fonts: {
    heading: `'Avenir', Avenir`,
    body: `'Avenir', Avenir`,
  },
  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        bg: '#000',
        color: '#fff',
        rounded: 'full',
        _hover: {
          bg: 'gray.700',
        },
        _loading: {
          bg: 'gray.700',
        }
      },
      // 2. We can add a new button size or extend existing
      sizes: {
      },
      // 6. We can overwrite defaultProps
      defaultProps: {
        variant: 'sm', // default is solid
      },
    },
  },
})

export function ChakraProvider(props: Props) {
  return <ChakraUiProvider theme={theme}>{props.children}</ChakraUiProvider>
}
