import {MoralisProvider} from "react-moralis";
import '../styles/globals.css'

const moralisAppId = "TB3hFSbs20LtUCQgdiolte1O9GujtcpDTzR5mVUx";
const moralisServerURL = "https://hj2l8fsvhhqj.usemoralis.com:2053/server";

import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MoralisProvider appId={moralisAppId} serverUrl={moralisServerURL}>
         <Layout>
          <Component {...pageProps} />
         </Layout>
      </MoralisProvider>
      </>
   
  )
}

export default MyApp
