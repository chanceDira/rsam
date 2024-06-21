import React from "react";

const FirstNum = () => {
  return (
    <div className=" bg-[#FDF3EA]  w-full z-50 flex justify-center items-center">
      <div className=" text-[#02529B] font-bold  flex flex-row items-center justify-between my-20  w-11/12 md:w-4/5">
        <div className=" text-2xl w-2/3">
          Music Is An Agreeable Harmony For The Honor Of God And The Permissible
          Delights Of The Soul."
        </div>

        <div className=" flex flex-row gap-4">
          <div className=" flex flex-col">
            <span className=" text-2xl">6+</span>
            <span className=" font-light text-sm">years of experince</span>
          </div>
          <div className=" flex flex-col">
            <span className=" text-2xl">4000+</span>
            <span className=" font-light text-sm">graduated students</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstNum;
