import React, { useState, useEffect } from "react";
import UploadFile from "../components/UploadFile";
import { useMoralis } from "react-moralis";
import { useRouter } from 'next/router'


export default function Upload(){
	const router = useRouter();
    const {isAuthenticated} = useMoralis();
    async function getInitialProps(){
	    if(!isAuthenticated){
	        router.push('/')
	    }
    }
	return (
		<div className="h-screen flex-1 p-7">
		      {/*<LogoutButton/>   */}
		      <h1 className="text-2xl font-semibold text-">Upload File</h1>		      
		      <UploadFile />
	    </div>
	)

}