import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { ChakraProvider, theme } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import ServerProvider from '../contexts/ServerContext'
import '../styles/globals.css'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  credentials: 'include',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          me: {
            read() {
              return null
            },
          },
        },
      },
    },
  }),
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ApolloProvider client={client}>
        <ServerProvider>
          <Component {...pageProps} />
        </ServerProvider>
      </ApolloProvider>
    </ChakraProvider>
  )
}

export default MyApp
