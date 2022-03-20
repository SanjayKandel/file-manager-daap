import React,{ useStatem,useEffect } from "react";
import { useMoralis } from "react-moralis";

import SideBar from './components/SideBar'



const App = () => {
  const {
    authenticate,
    isWeb3Enabled,
    isAuthenticated,
    user,
    enableWeb3,
    Moralis,
  } = useMoralis();

  async function authWalletConnect() {
    const user = await authenticate({
      provider: "walletconnect",
      chainId: 80001,
      signingMessage: "welcome"
    });
    
    console.log(user);
  }

  useEffect(()=>{
    if (!isWeb3Enabled && isAuthenticated){
      enableWeb3({provider: "walletconnect",chainId:80001});
      console.log("web3 activated");
    }
  },[isWeb3Enabled,isAuthenticated,enableWeb3]);

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
    }
  });

  if(!isAuthenticated && !user){
    console.log(user);
    return (
      <div>
        <h1> Wallet Authentication </h1>
        <div>
          <button className="bg-green-500 rounded-xl p-2 mb-3" onClick={()=>authenticate({signingMessage: "Welcome"})}>
            Signin Using Metamask
          </button>
        </div>
        <div>
          {/*<button className="bg-teal-500 rounded-xl p-2" onClick={()=>authWalletConnect()}>
            Signin Using Wallet Connect
          </button>*/}
        </div>
      </div>
    )
  }
  return (
    <div className="flex">
      <SideBar/>
      <div className="h-screen flex-1 p-7">
        {/*<LogoutButton/>   */}     
        <h1 className="text-2xl font-semibold ">Home Page</h1>
      </div>
    </div>
  );
};


export default App;