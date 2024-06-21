import Link from "next/link";
import React from "react";

const Pricing = () => {
  return (
    <div
    id="pricing"
    className="flex flex-col py-12 h-full md:min-h-screen items-center justify-center  w-10/12 md:w-9/12    "
  >
    <div className="font-bold  text-secondary-500">
      <span className=" text-primary-500 mr-2">Pricing</span>Tiers
    </div>
    <div className="md:w-4/5 font-medium text-secondary-500 text-lg md:text-center my-6  md:text-2xl">
      Begin for free, scale as you grow: tailored tiers for every stage of
      your journey
    </div>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-[60vh]  mt-6 w-full ">
      <div className=" bg-white shadow-md flex flex-col   justify-between p-6 rounded-2xl text-secondary-500">
        <div className=" flex flex-col">
        <div className=" font-bold">Free</div>
        <div className="  my-2 text-primary-500">
          <span className=" font-bold text-4xl">$0/</span>
          <span>month</span>
        </div>
        <div className=" text-secondary-400">Features</div>
        <div className=" flex flex-col text-sm gap-1 mt-2 border-t-2 pt-4">
          <div className="flex flex-row items-center ">
            <span className=" w-3 h-3">
              <img src="d_tick_circle.svg" alt="" />
            </span>
            <span className=" text-secondary-500 font-light ml-2">
            Rows per File: 20
            </span>
          </div>
          <div className="flex flex-row items-center">
            <span className=" w-3 h-3">
              <img src="d_tick_circle.svg" alt="" />
            </span>
            <span className=" text-secondary-500 font-light ml-2">
            Prompts (=NewColumns) 4
            </span>
          </div> 
          <div className="flex flex-row items-center">
            <span className=" w-3 h-3">
              <img src="d_tick_circle.svg" alt="" />
            </span>
            <span className=" text-secondary-500 font-light ml-2">
            Ideal For Trial and light use
            </span>
          </div>  
        </div>
        </div>
        
        <Link href="/signup">
          <div className=" text-center  font-light w-full my-2 pt-5">
            <div className=" text-white w-full flex flex-row items-center justify-center gap-2 text-xs font-semibold bg-primary-500 px-7 py-2 cursor-pointer rounded-full">
              <div>Start now</div>
              <div>
                <img src="rightarrow.png" alt="" className=" h-3" />
              </div>
            </div>
          </div>
        </Link>
      </div>

      <div className=" bg-white shadow-md flex flex-col  justify-between p-6 rounded-2xl text-secondary-500">
        <div className=" flex flex-col">
        <div className=" font-bold">Basic</div>
        <div className=" hidden my-2 text-primary-500">
          <span className=" font-bold text-4xl">$0/</span>
          <span>month</span>
        </div>
        <div className=" hidden text-secondary-400">Features</div>
        <div className=" hidden flex flex-col text-sm gap-1 mt-2 border-t-2 pt-4">
          <div className="flex flex-row items-center ">
            <span className=" w-3 h-3">
              <img src="d_tick_circle.svg" alt="" />
            </span>
            <span className=" text-secondary-500 font-light ml-2">
            Rows per File: 20
            </span>
          </div>
          <div className="flex flex-row items-center">
            <span className=" w-3 h-3">
              <img src="d_tick_circle.svg" alt="" />
            </span>
            <span className=" text-secondary-500 font-light ml-2">
            Prompts (=NewColumns) 4
            </span>
          </div> 
          <div className="flex flex-row items-center">
            <span className=" w-3 h-3">
              <img src="d_tick_circle.svg" alt="" />
            </span>
            <span className=" text-secondary-500 font-light ml-2">
            Ideal For Trial and light use
            </span>
          </div>  
        </div>
        </div>
        
        <div className=" text-center  font-light w-full my-2 pt-5">
          <div className="  w-full flex flex-row items-center justify-center gap-2 text-xs font-semibold bg-primary-500 bg-opacity-5 text-primary-500 px-7 py-2 cursor-pointer rounded-full">
            <div>Coming soon</div>
            <div className=" hidden">
              <img src="rightarrow.png" alt="" className=" h-3" />
            </div>
          </div>
        </div>
      </div>


      <div className=" bg-white shadow-md flex flex-col   justify-between p-6 rounded-2xl text-secondary-500">
        <div className=" flex flex-col">
        <div className=" font-bold">Pro</div>
        <div className=" hidden my-2 text-primary-500">
          <span className=" font-bold text-4xl">$0/</span>
          <span>month</span>
        </div>
        <div className=" hidden text-secondary-400">Features</div>
        <div className=" hidden flex flex-col text-sm gap-1 mt-2 border-t-2 pt-4">
          <div className="flex flex-row items-center ">
            <span className=" w-3 h-3">
              <img src="d_tick_circle.svg" alt="" />
            </span>
            <span className=" text-secondary-500 font-light ml-2">
            Rows per File: 20
            </span>
          </div>
          <div className="flex flex-row items-center">
            <span className=" w-3 h-3">
              <img src="d_tick_circle.svg" alt="" />
            </span>
            <span className=" text-secondary-500 font-light ml-2">
            Prompts (=NewColumns) 4
            </span>
          </div> 
          <div className="flex flex-row items-center">
            <span className=" w-3 h-3">
              <img src="d_tick_circle.svg" alt="" />
            </span>
            <span className=" text-secondary-500 font-light ml-2">
            Ideal For Trial and light use
            </span>
          </div>  
        </div>
        </div>
        
        <div className=" text-center  font-light w-full my-2 pt-5">
          <div className="  w-full flex flex-row items-center justify-center gap-2 text-xs font-semibold bg-primary-500 bg-opacity-5 text-primary-500 px-7 py-2 cursor-pointer rounded-full">
            <div>Coming soon</div>
            <div className=" hidden">
              <img src="rightarrow.png" alt="" className=" h-3" />
            </div>
          </div>
        </div>
      </div>


      <div className=" bg-white shadow-md  flex flex-col  justify-between p-6 rounded-2xl text-secondary-500">
        <div className=" flex flex-col">
        <div className=" font-bold">Enterprise</div>
        <div className=" hidden my-2 text-primary-500">
          <span className=" font-bold text-4xl">$0/</span>
          <span>month</span>
        </div>
        <div className=" hidden text-secondary-400">Features</div>
        <div className=" hidden flex flex-col text-sm gap-1 mt-2 border-t-2 pt-4">
          <div className="flex flex-row items-center ">
            <span className=" w-3 h-3">
              <img src="d_tick_circle.svg" alt="" />
            </span>
            <span className=" text-secondary-500 font-light ml-2">
            Rows per File: 20
            </span>
          </div>
          <div className="flex flex-row items-center">
            <span className=" w-3 h-3">
              <img src="d_tick_circle.svg" alt="" />
            </span>
            <span className=" text-secondary-500 font-light ml-2">
            Prompts (=NewColumns) 4
            </span>
          </div> 
          <div className="flex flex-row items-center">
            <span className=" w-3 h-3">
              <img src="d_tick_circle.svg" alt="" />
            </span>
            <span className=" text-secondary-500 font-light ml-2">
            Ideal For Trial and light use
            </span>
          </div>  
        </div>
        </div>
        
        <div className=" text-center  font-light w-full my-2 pt-5">
          <div className="  w-full flex flex-row items-center justify-center gap-2 text-xs font-semibold bg-primary-500 bg-opacity-5 text-primary-500 px-7 py-2 cursor-pointer rounded-full">
            <div>Coming soon</div>
            <div className=" hidden">
              <img src="rightarrow.png" alt="" className=" h-3" />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
  );
};

export default Pricing;
