import React from "react";

const Navbar = () => {
  return (
    <>
      <header className=" body-font custom-font">
        <div className="sticky top-0 flex flex-wrap p-5 flex-col md:flex-row items-center bg-black w-full max-w-screen-2xl mx-auto">
          <div className="h-full text-3xl text-center">
            <p className="items-center custom-font-2">LOGO</p>
          </div>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-50 cursor-pointer">Home</a>
            <a className="mr-5 hover:text-gray-50 cursor-pointer">Skills</a>
            <a className="mr-5 md:mr-24 hover:text-gray-50 cursor-pointer">
              Projects
            </a>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 flex-wrap px-5 justify-center text-gray-200 sm:justify-start">
              <a className=" cursor-pointer hover:text-blue-300">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 cursor-pointer hover:text-blue-300">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 cursor-pointer hover:text-blue-300">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 cursor-pointer hover:text-blue-300">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </nav>
          <button className="inline-flex items-center border-2 border-gray-200 py-3 px-3 focus:outline-none hover:text-gray-50 rounded text-base mt-4 md:mt-0">
            Lets Connect
          </button>
        </div>
      </header>

      {/* <header className=" text-gray-300 body-font custom-font h-[210px] sm:h-[70px] flex justify-center">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-black">
          <div className="h-full text-3xl text-center">
            <p className="items-center">LOGO</p>
          </div>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-50 cursor-pointer">Home</a>
            <a className="mr-5 hover:text-gray-50 cursor-pointer">Skills</a>
            <a className="mr-5 md:mr-24 hover:text-gray-50 cursor-pointer">
              Projects
            </a>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center  sm:justify-start">
              <a className="text-gray-300 cursor-pointer">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-300 cursor-pointer">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-300 cursor-pointer">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-300 cursor-pointer">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </nav>
          <button className="inline-flex items-center border-2 border-gray-200 py-3 px-3 focus:outline-none hover:text-gray-50 rounded text-base mt-4 md:mt-0">
            Lets Connect
          </button>
        </div>
      </header> */}
    </>
  );
};

export default Navbar;
