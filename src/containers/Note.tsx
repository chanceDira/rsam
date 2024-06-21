import React from "react";

const Note = () => {
  return (
    <div className="flex flex-col py-24 relative items-center justify-center w-11/12 md:w-3/5   ">
      <div className="font-bold text-3xl md:text-4xl text-secondary-500 mb-10 md:mb-20">
        Please <span className=" text-primary-500">Note</span>
      </div>
      <div className=" text-secondary-500 font-light ">
        <p>
          EnhancifAI leverages AI for advanced data analysis. However, the
          quality of AI outputs greatly depends on the quality of the input data
          and the precision of your prompts.
        </p>
        <p className="my-4">
          Consider EnhancifAI's insights as part of a broader decision-making
          process, supplemented by expert evaluation.
        </p>
        <p>
          By using EnhancifAI, you acknowledge the importance of careful prompt
          design and the need for due diligence in using AI-generated data.
          EnhancifAI is not responsible for the accuracy of the output
          generated. Users assume full responsibility for the interpretation and
          application of the results, including any decisions made based on
          these insights.
        </p>
      </div>
    </div>
  );
};

export default Note;
