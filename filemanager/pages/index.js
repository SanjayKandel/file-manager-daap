import Head from "next/head";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useMoralis } from "react-moralis";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
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
      signingMessage: "welcome",
    });

    console.log(user);
  }

  useEffect(() => {
    window.document.addEventListener("visibilitychange", () => {
      if (window.document.visibilityState === "hidden") {
        window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
      }
    });
  }, []);
  if (user && isAuthenticated) {
    router.push("/dashboard");
  }

  return (
    <div className="flex h-screen bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
      <div className="m-auto">
        <div className="p-4 max-w-sm bg-white rounded-lg border shadow-md sm:p-6 dark:bg-gray-800 dark:border-gray-700 mx-auto my-auto">
          <h5 className="mb-3 text-base font-semibold text-gray-900 lg:text-xl dark:text-white">
            Connect wallet
          </h5>
          <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
            Connect with one of our available wallet providers or create a new
            one.
          </p>
          <ul className="my-4 space-y-3">
            <li>
              <button
                className="w-full"
                onClick={() =>
                  authenticate({ chainId: 80001, signingMessage: "welcome" })
                }
              >
                <a className="flex p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-5 "
                    viewBox="0 0 40 38"
                  >
                    <path
                      fill="#E17726"
                      d="M39.073 0L21.909 12.7l3.192-7.485L39.073 0z"
                    ></path>
                    <path
                      fill="#E27625"
                      d="M.967.015L14.9 5.217l3.031 7.582L.967.015zM32.166 27.01l7.586.144L37.1 36.16l-9.256-2.548 4.322-6.603zM7.834 27.01l4.306 6.602-9.241 2.548-2.635-9.006 7.57-.145z"
                    ></path>
                    <path
                      fill="#E27625"
                      d="M17.52 10.868l.31 10.013-9.276-.422 2.638-3.981.034-.039 6.294-5.571zM22.383 10.756l6.39 5.684.034.038 2.639 3.98-9.275.423.212-10.125zM12.412 27.038l5.065 3.947-5.884 2.84.819-6.787zM27.59 27.038l.801 6.788-5.868-2.841 5.066-3.947z"
                    ></path>
                    <path
                      fill="#D5BFB2"
                      d="M22.652 30.613l5.955 2.883-5.54 2.632.058-1.74-.473-3.775zM17.346 30.614l-.455 3.746.038 1.766-5.552-2.63 5.969-2.882z"
                    ></path>
                    <path
                      fill="#233447"
                      d="M15.626 22.188l1.556 3.27-5.297-1.552 3.741-1.718zM24.374 22.188l3.759 1.717-5.315 1.552 1.556-3.27z"
                    ></path>
                    <path
                      fill="#CC6228"
                      d="M12.817 27.005l-.856 7.037-4.59-6.883 5.446-.154zM27.184 27.005l5.446.154-4.607 6.883-.84-7.037zM31.58 20.06l-3.963 4.04-3.056-1.397-1.463 3.076-.96-5.289 9.442-.43zM8.418 20.06l9.443.43-.96 5.289-1.463-3.075-3.04 1.396-3.98-4.04z"
                    ></path>
                    <path
                      fill="#E27525"
                      d="M8.15 19.231l4.484 4.55.156 4.493-4.64-9.043zM31.854 19.224l-4.648 9.058.175-4.5 4.473-4.558zM17.641 19.509l.18 1.136.447 2.83-.287 8.691-1.356-6.982v-.072l1.016-5.603zM22.356 19.493l1.02 5.619-.001.072-1.36 7-.053-1.751-.212-7.01.606-3.93z"
                    ></path>
                    <path
                      fill="#F5841F"
                      d="M27.78 23.601l-.152 3.903-4.73 3.685-.957-.675 1.072-5.521L27.78 23.6zM12.237 23.601l4.75 1.392 1.072 5.52-.956.676-4.73-3.686-.136-3.902z"
                    ></path>
                    <path
                      fill="#C0AC9D"
                      d="M10.472 32.634l6.052 2.867-.026-1.224.506-.445h5.99l.525.443-.039 1.224 6.014-2.858-2.927 2.418-3.538 2.43h-6.073l-3.536-2.44-2.948-2.415z"
                    ></path>
                    <path
                      fill="#161616"
                      d="M22.22 30.231l.855.604.501 4.001-.725-.613h-5.7l-.712.626.485-4.013.856-.605h4.44z"
                    ></path>
                    <path
                      fill="#763E1A"
                      d="M37.94.352L40 6.532l-1.287 6.25.916.707-1.24.946.932.72-1.233 1.123.757.548-2.01 2.348-8.246-2.4-.071-.039-5.942-5.012L37.94.352zM2.06.352l15.364 11.371-5.942 5.012-.071.038-8.246 2.401-2.01-2.348.757-.548-1.233-1.124.93-.719-1.259-.948.951-.707L0 6.533 2.06.352z"
                    ></path>
                    <path
                      fill="#F5841F"
                      d="M28.186 16.248l8.737 2.544 2.838 8.748h-7.488l-5.16.065 3.753-7.314-2.68-4.043zM11.814 16.248l-2.68 4.043 3.753 7.314-5.157-.065H.255l2.822-8.748 8.737-2.544zM25.528 5.174l-2.443 6.6-.519 8.915-.198 2.795-.016 7.138h-4.705l-.015-7.125-.2-2.81-.518-8.913-2.443-6.6h11.057z"
                    ></path>
                  </svg>
                  <span className="ml-3 whitespace-nowrap">MetaMask</span>
                </a>
              </button>
            </li>

            <li>
              <button className="w-full " onClick={authWalletConnect}>
                <a className="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    className="h-5"
                    viewBox="0 0 512 512"
                  >
                    <defs>
                      <radialGradient
                        id="radialGradient-1"
                        cx="0%"
                        cy="50%"
                        r="100%"
                        fx="0%"
                        fy="50%"
                      >
                        <stop offset="0%" stopColor="#5D9DF6"></stop>
                        <stop offset="100%" stopColor="#006FFF"></stop>
                      </radialGradient>
                    </defs>
                    <g
                      fill="none"
                      fillRule="evenodd"
                      stroke="none"
                      strokeWidth="1"
                    >
                      <g>
                        <rect
                          width="512"
                          height="512"
                          x="0"
                          y="0"
                          fill="url(#radialGradient-1)"
                          rx="256"
                        ></rect>
                        <path
                          fill="#FFF"
                          fillRule="nonzero"
                          d="M169.21 184.531c47.933-46.93 125.648-46.93 173.58 0l5.77 5.648a5.92 5.92 0 010 8.498l-19.735 19.321a3.115 3.115 0 01-4.34 0l-7.938-7.773c-33.439-32.74-87.655-32.74-121.094 0l-8.502 8.324a3.115 3.115 0 01-4.34 0l-19.733-19.321a5.92 5.92 0 010-8.498l6.332-6.199zm214.392 39.958l17.563 17.196a5.92 5.92 0 010 8.498l-79.193 77.539c-2.397 2.346-6.283 2.346-8.68 0l-56.207-55.032a1.558 1.558 0 00-2.17 0l-56.205 55.032c-2.397 2.346-6.283 2.346-8.68 0l-79.195-77.54a5.92 5.92 0 010-8.498l17.563-17.196c2.396-2.346 6.282-2.346 8.679 0l56.208 55.033c.599.586 1.57.586 2.17 0l56.205-55.033c2.396-2.346 6.282-2.346 8.679 0l56.208 55.033c.599.586 1.57.586 2.17 0l56.206-55.032c2.397-2.346 6.283-2.346 8.68 0z"
                        ></path>
                      </g>
                    </g>
                  </svg>
                  <span className=" ml-3 whitespace-nowrap">Walletconnect</span>
                </a>
              </button>
            </li>
          </ul>
          <div>
            <a className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="mr-2 w-3 h-3"
                data-icon="question-circle"
                data-prefix="far"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z"
                ></path>
              </svg>
              Why do I need to connect with my wallet?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
