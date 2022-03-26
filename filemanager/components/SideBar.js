import { useState } from "react";
import { useMoralis } from "react-moralis";
import React from 'react';
import Link from 'next/Link'
import { useRouter } from 'next/router'



const SideBar = () => {
  const router = useRouter();
  const { logout, isAuthenticating } = useMoralis();
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Accounts", src: "User", gap: true },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Upload", src: "Chat" },
  ];
  return (
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-purple-900 h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src="/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
             border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="/logo.png"
            className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Designer
          </h1>
        </div>
        <ul className="pt-6">
          <Link href="/dashboard">
            <a>
              <li
              key={0}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-white hover:text-black text-white  text-sm items-center gap-x-4 
                ${false ? "mt-9" : "mt-2"} ${0 === 0 && "bg-gray-600"} `}>
              <img src={`/Chart_fill.png`} />

                <span className={`${!open && "hidden"} origin-left duration-200`}>
                  Dashboard
                </span> 
            </li>

            </a>
          </Link>

          <Link href="/upload">
            <a>
              <li
              key={1}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-white hover:text-black text-white  text-sm items-center gap-x-4 
                ${true ? "mt-9" : "mt-2"} ${1 === 0 && "bg-gray-600"} `}>
              <img src={`/Chat.png`} />

                <span className={`${!open && "hidden"} origin-left duration-200`}>
                  Upload
                </span> 
            </li>
            </a>
          </Link>

          <Link href="/files">
            <a>
              <li
              key={2}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-white hover:text-black text-white  text-sm items-center gap-x-4 
                ${false ? "mt-9" : "mt-2"} ${2 === 0 && "bg-gray-600"} `}>
              <img src={`/Folder.png`} />

                <span className={`${!open && "hidden"} origin-left duration-200`}>
                  Files
                </span> 
            </li>
            </a>
          </Link>

          <li
              key={10}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-white hover:text-black text-white  text-sm items-center gap-x-4 
                ${true ? "mt-9" : "mt-2"} ${10 === 0 && "bg-gray-600"} `}
            >
              <img src={`/Setting.png`} />

             <button onClick={()=>{logout();router.push('/')}}> 
                <span className={`${!open && "hidden"} origin-left duration-200`}>
                  logout
                </span> 
              </button>
            </li>
        </ul>
       
      </div>

  );
};

export default SideBar;
