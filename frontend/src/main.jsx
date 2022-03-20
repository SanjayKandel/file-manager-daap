//external imports
import React from "react";
import ReactDOM from "react-dom";
import {MoralisProvider} from "react-moralis";

//internal imports
import App from "./App";
import "./index.css";

// IMP : Dont use hardcoded values
const moralisAppId = "TB3hFSbs20LtUCQgdiolte1O9GujtcpDTzR5mVUx";
const moralisServerURL = "https://hj2l8fsvhhqj.usemoralis.com:2053/server";

// reactDom.render(<App />, document.getElementById("root"));

ReactDOM.render(
	<React.StrictMode>
		<MoralisProvider appId={moralisAppId} serverUrl={moralisServerURL}>
			<App />
		</MoralisProvider>
	</React.StrictMode>,
	document.getElementById("root")
);