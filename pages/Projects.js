import Paginations from "@/components/Paginations";
import React from "react";

const Projects = () => {
  return (
    <>
      <section className=" body-font">
        <div className="container w-[85%] px-5 py-5 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white ">
              Projects
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white">
              The Projects which are made for Practice purpose and Tasks which
              was assigned in the training period.
            </p>
          </div>
          <Paginations />
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4 rounded-2xl">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-xl"
                  src="https://static.wixstatic.com/media/592466_85ae3ac8717248fa91c77432ea850cd5~mv2.png/v1/fill/w_1200,h_627,al_c/592466_85ae3ac8717248fa91c77432ea850cd5~mv2.png"
                />
                <div className="px-8 py-10 relative z-10 w-full bg-blue-300 opacity-0 hover:opacity-100 rounded-xl">
                  <h2 className="tracking-widest text-2xl title-font font-medium text-red-400 mb-1">
                    CodeHunter
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Docs for the Learning JavaScript
                  </h1>
                  <p className="leading-relaxed">
                    CodeHunter is Made with the React.Js & Next.Js Technologies
                    in this the data rendering from the Json File i.e, DataBase
                    interaction using API in Next.Js
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-center rounded-xl"
                  src="https://pbs.twimg.com/profile_images/470632818653921280/l5V_RKUu_400x400.png"
                />
                <div className="px-8 py-10 relative z-10 w-full  bg-blue-300 opacity-0 hover:opacity-100 rounded-xl">
                  <h2 className="tracking-widest text-2xl title-font font-medium text-red-400 mb-1">
                    TextUtils
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Text Formatter Website
                  </h1>
                  <p className="leading-relaxed">
                    Text-Utils.com multiple text tools such as to convert case,
                    remove accents, line breaks, extra space, also regular
                    expressions tools for extracting elements from text such as
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative ">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-xl"
                  src="https://images.tijd.be/view?iid=dc:66572028&context=ONLINE&ratio=16/9&width=640&u=1464200700000"
                />
                <div className="px-8 py-10 relative z-10 w-full  bg-blue-300 opacity-0 hover:opacity-100 rounded-xl">
                  <h2 className="tracking-widest text-2xl title-font font-medium text-red-400 mb-1">
                    NewsTechie
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    The News App
                  </h1>
                  <p className="leading-relaxed">
                    Newsmonkey is hét nieuwsmerk van generation Y: journalistiek
                    en entertainment die domineren via sociale media. all
                    Entertainment, science, general category news will available
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover rounded-xl"
                  src="https://cdn1.designhill.com/uploads/personal_designs/2e8ded21c375319f1f3d1f69dbc1accb-9ab68cf3c57d9d12cc2058b2d4cde90416401618262184.jpg?ver=2.12.43"
                />
                <div className="px-8 py-10 relative z-10 w-full  bg-blue-300 opacity-0 hover:opacity-100 rounded-xl">
                  <h2 className="tracking-widest text-2xl title-font font-medium text-red-400 mb-1">
                    The Plants UI/UX
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    The Artificial Plants App
                  </h1>
                  <p className="leading-relaxed">
                    Plants UI. Inspirational designs, illustrations, and graphic
                    elements from the world's best designers. Want more
                    inspiration? Browse our search results. Plants UI.
                    Inspirational designs, illustrations, and graphic elements
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-xl"
                  src="/bgimage1.png"
                />
                <div className="px-8 py-10 relative z-10 w-full  bg-blue-300 opacity-0 hover:opacity-100 rounded-xl">
                  <h2 className="tracking-widest text-2xl title-font font-medium text-red-400 mb-1">
                    Haadi
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Personal Portfolio App
                  </h1>
                  <p className="leading-relaxed">
                    A stand-out portfolio website is essential for landing a job
                    as a web developer. However, creating one isn't easy, even
                    for experienced web developers. Whether you're looking to
                    build your first online portfolio or improve an existing
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-xl"
                  src="/company.png"
                />
                <div className="px-8 py-10 relative z-10 w-full  bg-blue-300 opacity-0 hover:opacity-100 rounded-xl">
                  <h2 className="tracking-widest text-2xl title-font font-medium text-red-400 mb-1">
                    Tro Infotech.
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Software development Company Website
                  </h1>
                  <p className="leading-relaxed">
                    Tro Infotech is the Leading Software Development Co. in
                    India Tro Infotech is the Leading Software Development Co.
                    in India Tro Infotech is the Leading Software Development
                    Co. in India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
