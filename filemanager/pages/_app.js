import { MoralisProvider } from "react-moralis";
import "../styles/globals.css";

const moralisAppId = "TB3hFSbs20LtUCQgdiolte1O9GujtcpDTzR5mVUx";
const moralisServerURL = "https://hj2l8fsvhhqj.usemoralis.com:2053/server";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <MoralisProvider appId={moralisAppId} serverUrl={moralisServerURL}>
      {getLayout(<Component {...pageProps} />)}
    </MoralisProvider>
  );
}

export default MyApp;
