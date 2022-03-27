import React, { useState, useEffect } from "react";
import { useMoralis } from "react-moralis";
import { useRouter } from "next/router";
import FileTable from "../components/FileTable";
const axios = require("axios");
import Layout from "../components/Layout";
import SideBar from "../components/SideBar";

export default function File({ data }) {
  const router = useRouter();
  const { isAuthenticated, user } = useMoralis();
  async function getInitialProps() {
    if (!isAuthenticated) {
      router.push("/");
    }
  }
  if (!data) return <div>Loading...</div>;
  if (data && isAuthenticated) {
    data.results = data.results.filter(
      (i) => i.uploader === user.attributes.accounts[0]
    );
  }
  return (
    <div className="flex">
      <SideBar />
      <div className="h-screen flex-1 p-7">
        {/*<LogoutButton/>   */}
        <h1 className="text-2xl font-semibold text-">Your Files</h1>
        <div className="relative overflow-x-auto sm:rounded-lg mt-20">
          <FileTable files={data.results} />
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const data = await axios
    .get(process.env.NEXT_MORALIS_SERVER_URL, {
      headers: {
        "X-Parse-Application-Id": process.env.NEXT_MORALIS_APP_ID,
        "X-Parse-REST-API-Key": process.env.NEXT_MORALIS_REST_KEY,
      },
    })
    .then((res) => res.data);

  return {
    props: { data },
  };
}
