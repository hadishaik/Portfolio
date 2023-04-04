import Carousel from "@/components/Carousel";
import React from "react";

const Body = () => {
  return (
    <>
      <div className="md:w-[90%] max-w-screen-2xl h-[450px] rounded-lg my-10 mx-auto flex flex-wrap">
        <div className="w-[70%] h-full mx-auto">
          <div className="text-white text-center">
            <h3 className="text-5xl custom-font2 text-white">Skills</h3>
            <p className="text-base py-5 text-justify mx-3">
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
              velit quia ea voluptatem adipisci ratione. Voluptate ut atque
              aperiam voluptatibus, dignissimos accusantium enim amet quo
              recusandae error dolorem fugit distinctio! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Voluptatem animi quidem quas
              reiciendis, non error ad accusamus. Repellat at reiciendis fugit
              reprehenderit maiores perspiciatis consequatur eaque sint corporis
              deserunt? Nihil?
            </p>
          </div>
          <Carousel />
        </div>
      </div>
    </>
  );
};

export default Body;
