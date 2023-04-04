import React from "react";

const Paginations = () => {
  return (
    <>
      <div className="w-[90%] md:w-2/5 mx-auto flex items-center justify-center mb-7 text-white ">
        <div className="border w-1/3 rounded-l-3xl hover:bg-fuchsia-700">
          <p className="text-center">Tab 1</p>
        </div>
        <div className="border w-1/3 hover:bg-fuchsia-700">
          <p className="text-center">Tab 2</p>
        </div>
        <div className="border w-1/3 rounded-r-3xl hover:bg-fuchsia-700">
          <p className="text-center">Tab 3</p>
        </div>
      </div>
    </>
  );
};

export default Paginations;
