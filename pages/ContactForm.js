import React, { useState } from "react";

const ContactForm = () => {
  const [formState, SetFormState] = useState({});

  const changeHandler = (event) => {
    SetFormState({ ...formState, [event.target.name]: event.target.value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const config = {
      SecureToken: "1ab1dabb-7bd6-4747-8775-cfd81844534f",
      To: "hadishaik293@gmail.com",
      From: `${formState.email}`,
      Subject: "Email From the PortFolio Website",
      Body: `${formState.name} + ${formState.email} + ${formState.message}`,
    };
    if (window.Email) {
      window.Email.send(config).then((message) => alert(message));
    }
    SetFormState("");
  };

  return (
    <>
      <div className="lg:w-5/6 w-full  h-[500px] max-w-screen-2xl bg-cover bg-no-repeat mx-auto flex flex-wrap bg-img3 bg-center rounded-2xl">
        <div className="lg:w-1/2 w-screen"></div>
        <div className="lg:w-1/2 w-screen  rounded-xl">
          <form
            className="body-font relative text-white text-2xl"
            onSubmit={submitHandler}
          >
            <div className="container px-5 py-10 mx-auto">
              <div className="flex flex-col text-center w-full mb-12">
                <h1 className="sm:text-3xl text-4xl font-medium custom-font2 ">
                  Get in Touch
                </h1>
              </div>
              <div className="md:w-11/12 mx-auto">
                <div className="flex flex-wrap -m-2">
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label htmlFor="name" className="leading-7">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name || ""}
                        onChange={changeHandler}
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 text-black focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label htmlFor="email" className="leading-7" id="email">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email || ""}
                        onChange={changeHandler}
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out text-black"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label htmlFor="message" className="leading-7">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message || ""}
                        onChange={changeHandler}
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out text-black"
                      ></textarea>
                    </div>
                  </div>
                  <div className="p-5 w-full">
                    <button className="flex mx-auto border-2 border-black py-2 px-8 focus:outline-none hover:bg-blue-400 hover:text-white rounded-lg text-lg">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
