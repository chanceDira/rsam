import React from "react";

const Contactus = () => {
  return (
    <div
    id="contactus"
  
    className=" flex flex-col items-center  w-11/12 md:w-9/12   py-24   ">
 
      <div className="md:w-4/5 font- text-lg md:text-center  md:text-2xl my-6">
        Have any questions? Please leave your message, and we'll be happy to
        assist. We value your feedback and aim to respond promptly.
      </div>

      <form
        action=""
        className=" md:mt-10 w-11/12 md:w-3/5 bg-white shadow-md p-10"
      >
        <div className="  text-[#02529B] text-xl font-bold">
          Keep in touch
        </div>
        <div className=" flex flex-col mt-4 gap-2">
          <label htmlFor="" className=" font-light ">
            Name
          </label>
          <input
            type="text"
            className=" bg-white w-full bgop border rounded-md py-2 px-4 outline-none border-secondary-200"
            placeholder="Enter your name"
          />
        </div>

        <div className=" flex flex-col mt-4 gap-2">
          <label htmlFor="" className=" font-light ">
            Phone number
          </label>
          <input
            type="text"
            className=" bg-white w-full border rounded-md py-2 px-4 outline-none border-secondary-200"
            placeholder="Enter your phone number"
          />
        </div>

        <div className=" flex flex-col mt-4 gap-2">
          <label htmlFor="" className=" font-light ">
            Email
          </label>
          <input
            type="text"
            className=" bg-white w-full border rounded-md py-2 px-4 outline-none border-secondary-200"
            placeholder="Enter your email address"
          />
        </div>

        <div className="flex flex-col mt-4 gap-2">
          <label htmlFor="" className=" font-light ">
            Question
          </label>
          <textarea
            rows={8}
            className=" bg-white w-full border rounded-md py-2 px-4 outline-none border-secondary-200 mb-8"
            placeholder="Type your message ..."
          />
        </div>
        <div>
          <div className=" text-white w-fit flex flex-row items-center justify-center gap-2 text-sm font-semibold bg-[#02529B] px-7 py-2 cursor-pointer rounded-full">
            <div>Send</div>
            <div>
              <img src="rightarrow.png" alt="" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contactus;
