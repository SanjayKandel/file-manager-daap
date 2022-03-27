import { useMoralis } from "react-moralis";
import { useRouter } from "next/router";
const axios = require("axios");

import SizeChart from "../components/SizeChart";
import FileNumberChart from "../components/FileNumberChart";
import SideBar from "../components/SideBar";
import { MoralisProvider } from "react-moralis";

export default function Dashboard({ data }) {
  const router = useRouter();
  const { user, isAuthenticated, logout } = useMoralis();
  async function getInitialProps() {
    if (!isAuthenticated) {
      router.push("/");
    }
  }

  const files = data.results;

  //calculate total uploaded file size
  let totalFileSize = 0;
  let totalFiles = files.length;
  files.forEach((i) => {
    totalFileSize += parseInt(i.fileSize);
  });

  //caculate user uploaded file size
  let userFileSize = 0;
  let userFiles = 0;
  if (isAuthenticated) {
    const userData = files.filter(
      (i) => i.uploader == user.attributes.accounts[0]
    );
    userFiles = userData.length;
    userData.forEach((i) => {
      userFileSize += parseInt(i.fileSize);
    });
  }

  console.log(totalFileSize, userFileSize, userFiles, totalFiles);

  return (
    <div className="flex">
      <SideBar logout={logout} />
      <div className="h-screen flex-1 p-7">
        <h1 className="text-xl font-bold mb-10">User Dashboard</h1>

        <div className="grid overflow-hidden lg grid-cols-2 grid-rows-2 gap-4 w-full mb-10">
          <div className="box flex flex-col items-center">
            <span className="flex-1 font-bold text-xl mt-2">
              Total Files in Network
            </span>
            <h1 className="flex-1 font-bold text-4xl ">{totalFiles}</h1>
          </div>
          <div className="box flex flex-col items-center">
            <span className="flex-1 font-bold text-xl mt-2">
              Current Network Size
            </span>
            <h1 className="flex-1 font-bold text-4xl ">
              {totalFileSize / 1000}KB
            </h1>
          </div>
          <div className="box flex flex-col items-center">
            <span className="flex-1 font-bold text-xl mt-2">Your Files</span>
            <h1 className="flex-1 font-bold text-4xl ">{userFiles}</h1>
          </div>
          <div className="box flex flex-col items-center">
            <span className="flex-1 font-bold text-xl mt-2">
              Your Current Space
            </span>
            <h1 className="flex-1 font-bold text-4xl ">
              {userFileSize / 1000}KB
            </h1>
          </div>
        </div>
        <div className="mt-10 grid overflow-hidden lg grid-cols-4 grid-rows-2 gap-4 w-full h-auto">
          <div className="row-span-2 col-span-2">
            <h1 className="text-xl font-bold ">Uploaded Size Stats:</h1>

            <SizeChart
              totalFileSize={totalFileSize}
              userFileSize={userFileSize}
            />
          </div>
          <div className=" row-span-2 col-span-2">
            <h1 className="text-xl font-bold ">
              Number of Files Uploaded Stats:
            </h1>
            <FileNumberChart userFiles={userFiles} totalFiles={totalFiles} />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  console.log(process.env.NEXT_MORALIS_SERVER_URL);
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
