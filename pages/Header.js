import React from "react";

const Header = () => {
  return (
    <div className="md:w-full w-screen h-[200px] max-w-screen-2xl sm:h-[600px] bg-img bg-cover mx-auto">
      <div className="sm:w-[90%] max-w-screen-2xl flex">
        <div className="w-full items-end">
          <div className="sm:w-3/5 w-full h-[40px] text-white sm:px-3 md:px-10 mt-44">
            <h1 className="font-medium text-center text-2xl md:w-4/5 w-screen  bg-sky-600">
              {" "}
              Welcome to my Portfolio{" "}
            </h1>
            <h1 className="text-2xl pt-9 px-2">
              I am,
              <div className="inner-headings text-red-600 text-3xl w-full sm:w-[400px] px-2">
                <span>
                  UI/UX Designer <br />
                  Front-End Developer <br />
                  Back-End Developer <br />
                  Full-Stack Developer <br />
                </span>
              </div>
            </h1>
            <h3 className="px-2">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              ipsa blanditiis nisi eius recusandae tempore repudiandae commodi?
              Repudiandae rem saepe consequuntur deserunt in beatae voluptas,
              similique, nisi sint odio fugit?
            </h3>
            <div className="my-8 ml-7 font-medium font-serif cursor-pointer hover:scale-110 text-white absolute">
              <h5 className="flex">
                {" "}
                Lets Connect <p className="flex-col ml-2">&#8594;</p>{" "}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
