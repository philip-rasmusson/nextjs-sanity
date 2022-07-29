import "../styles/globals.css"
import type { AppProps } from "next/app"
import { Flex, Footer, Header } from "../components"
import Head from "next/head"

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Flex
      px={4}
      py={0}
      maxw={141}
      flexDirection="column"
      justifyContent="space-between"
      minh="100vh"
      m="auto"
    >
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Flex>
  )
}

export default MyApp
