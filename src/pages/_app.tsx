import { ChakraProvider } from "@chakra-ui/react"
// import '../global-styles/main.css'
import '../style/style.css'



function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
    <Component {...pageProps} />
    </ChakraProvider>
  )
 
}

export default MyApp
