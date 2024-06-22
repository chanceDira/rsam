import React from "react";

const ExplainerVideo = () => {
  return (
    // <div>
    //   <div className="laptop-frame relative flex justify-center items-center">
    //     <img src="preview.jpg" alt="" className=" h-[150vh] rounded-xl border" />
    //     <div className="absolute top-80 w-[65%] h-[43%]">

    //     <iframe
    //       src="https://res.cloudinary.com/dlzsibwl6/video/upload/v1715847656/EnhancifAI_May2024_u4chrq.mp4"
    //       className=" w-full h-full ml-2 "
    //       frameBorder={0}
    //       allowFullScreen
    //       ></iframe>
    //       </div>
    //   </div>
    // </div> 

    <div className="flex flex-col justify-center items-center w-11/12 md:w-full my-2 md:my-20 bg-white  ">
    <div className=" text-[#02529B] font-bold text-2xl w-3/5 text-center mt-10">
    Music Is An Agreeable Harmony For The Honor Of God And The Permissible Delights Of The Soul.
    </div>
    
    <div className=" mt-10 laptop-frame relative flex justify-center items-center w-full h-full mb-8 ">
      <iframe
        src="https://res.cloudinary.com/dlzsibwl6/video/upload/v1718987954/30_SELECTED_FOR_3rd_INTAKE_AT_NYUNDO_SCHOOL_OF_MUSIC_online-video-cutter.com_mwpmy7.mp4"
        className="w-[800px] h-[200px]  md:w-[800px] md:h-[453px]   rounded-2xl   "
        frameBorder={0}
        allowFullScreen
        ></iframe>

    </div>
  </div>
  );
};

export default ExplainerVideo;
