import './App.css';

import { useEffect, useMemo, useState } from "react";

// import thirdweb
import { useWeb3 } from "@3rdweb/hooks";

const App = () => {
  // Use the connectWallet hook thirdweb gives us.
  const { connectWallet, address, error, provider } = useWeb3();
  console.log("👋 Address:", address)

  // This is the case where the user hasn't connected their wallet
  // to your web app. Let them call connectWallet.
  if (!address) {
    return (
      <header>
        <div className='container-text'>
          <h1><span className='sharp text-white'>A</span>ntidAo</h1>
          <button onClick={() => connectWallet("injected")} className="button text-box-standard">
            <span className='sharp text-red text-standard'>connect your wallet</span>
          </button>
        </div>
      </header>
    );
  }
  
  // This is the case where we have the user's address
  // which means they've connected their wallet to our site!
  return (
    <header>
      <div className='container-text'>
        <h1><span className='sharp text-white'>A</span>ntidAo</h1>
        <div className='sharp text-standard text-box-standard'>wallet connected</div>
      </div>
    </header>
  );
};

export default App;
