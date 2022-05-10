import { MoralisProvider } from "react-moralis";
import "../styles/globals.css";

const moralisAppId = "ozg9YGbHjA3M7lCUwKvEvRUNl7FWMczH2BuJbPio";
const moralisServerURL = "https://xltsia2htgq6.usemoralis.com:2053/server";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <MoralisProvider appId={moralisAppId} serverUrl={moralisServerURL}>
      {getLayout(<Component {...pageProps} />)}
    </MoralisProvider>
  );
}

export default MyApp;
