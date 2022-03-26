import { useState } from "react";
import { ethers } from "ethers";
import { create as ipfsHttpsClient } from "ipfs-http-client";
import Web3Modal from "web3modal";
import {useRouter} from 'next/router';

const client = ipfsHttpsClient("https://ipfs.infura.io:5001/api/v0");

import { filemanagerContractAddress } from "../config";
import FileManager from "../abis/FileManager.json";
import { Router } from "next/router";

const UploadFile = () => {
  const router = useRouter();
  const [fileType, setFileType] = useState("");
  const [fileSize, setFileSize] = useState(0);
  const [fileCID, setFileCID] = useState("");
  const [formInput, updateFormInput] = useState({
    fileName: "",
    fileDescription: "",
    fileType: "",
    fileSize: 0,
  });

  async function onChange(e) {
    const file = e.target.files[0];
    try {
      const added = await client.add(file, {
        progress: (prog) => console.log(`received: ${prog}`),
      });
      let fileName = file["name"];
      let fileType = fileName.slice(fileName.indexOf(".") + 1);
      let fileSize = parseInt(file["size"]);
      setFileType(fileType);
      setFileSize(fileSize);
      setFileCID(added.path);
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  }

  async function uploadFile() {
    const { fileName, fileDescription } = formInput;
    console.log(fileName, fileDescription, fileCID, fileType, fileSize);
    if (!fileName || !fileDescription || !fileType || !fileSize || !fileCID) {
      console.error("Please enter every value or check ipfs connection");
      console.log(fileName, fileDescription, fileCID, fileType, fileSize);
      return;
    }
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    let contract = new ethers.Contract(
      filemanagerContractAddress,
      FileManager.abi,
      signer
    );
    let transaction = await contract.uploadFile(
      fileCID,
      fileSize,
      fileType,
      fileName,
      fileDescription
    );
    let tx = await transaction.wait();
    router.push('/files')
  }

  return (
    <div className="flex justify-center">
      <div className="w-1/2 flex flex-col pb-12">
        <input
          placeholder="File Name"
          className="mt-8 border rounded p-4"
          onChange={(e) =>
            updateFormInput({ ...formInput, fileName: e.target.value })
          }
        />
        <textarea
          placeholder="File Description"
          className="mt-2 border rounded p-4"
          onChange={(e) =>
            updateFormInput({ ...formInput, fileDescription: e.target.value })
          }
        />
        <input type="file" name="File" className="my-4" onChange={onChange} />

        {fileCID && (
          <button
            onClick={uploadFile}
            className="font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg"
          >
            Upload File
          </button>
        )}
        {!fileCID && (
          <button
            disabled
            className="font-bold mt-4 bg-pink-300 text-white rounded p-4 shadow-lg"
          >
            Uploading...
          </button>
        )}
      </div>
    </div>
  );
};

export default UploadFile;
