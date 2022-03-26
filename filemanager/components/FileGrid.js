import {useState} from "react";
import useSwr from "swr";
const axios = require("axios");
import FileTable from "./FileTable";
import { useMoralis } from "react-moralis";
let qs = require("qs");


// const fetcher = (url, appId, apiKey,encoded_data) =>
//   axios
//     .get(url, {
//       headers: {
//         "X-Parse-Application-Id": appId,
//         "X-Parse-REST-API-Key": apiKey,
//       }
//     }
//     )
//     .then((res) => res.data);

const FileGrid = ({data}) => {
  const {user,isAuthenticated} =useMoralis();
  console.log(data)
  // console.log(isAuthenticated)
  // const { data, error } = useSwr(
  //   [
  //     process.env.NEXT_MORALIS_SERVER_URL,
  //     process.env.NEXT_MORALIS_APP_ID,
  //     process.env.NEXT_MORALIS_REST_KEY,
  //   ],
  //   fetcher
  // );
  if (!data) return <div>Loading...</div>;
  if (data && isAuthenticated){
    data.results = data.results.filter((i)=>i.uploader===user.attributes.accounts[0])
  }

  return (
    <div className="relative overflow-x-auto sm:rounded-lg mt-20">
      
      <FileTable files={data.results} />
    </div>
  );
};

export async function getServerSideProps(context){
  const data = await axios.get(process.env.NEXT_MORALIS_SERVER_URL, {
      headers: {
        "X-Parse-Application-Id": process.env.NEXT_MORALIS_APP_ID,
        "X-Parse-REST-API-Key": process.env.NEXT_MORALIS_REST_KEY,
      }
    }
    )
    .then((res) => res.data);

  return {
    props:{data}
  }
}

export default FileGrid;
