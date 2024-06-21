import React from "react";

type StepType = {
  step: string;
  title: string;
  subtitle: string;
  description: string;
};

export const steps: StepType[] = [
  {
    step: "01",
    title: "Data Preparation",
    subtitle: "Ready Your Data",
    description: `Organize your data into a CSV or Excel file, setting the stage for AI analysis without complex setups`,
  },
  {
    step: "02",
    title: "Create Prompts",
    subtitle: "Prepare Your Prompts",
    description:
      "Craft prompts in a separate file to direct the AI, transforming your analysis goals into clear, actionable instructions",
  },
  {
    step: "03",
    title: "Upload to EnhancifAI",
    subtitle: "Initiate AI",
    description:
      "Effortlessly upload your data and prompt files through our intuitive interface, kick-starting your AI-powered analysis",
  },
  {
    step: "04",
    title: "Download New File",
    subtitle: "Unlock Insights",
    description:
      "Receive your data file, now enriched with AI-generated insights and additional columns, ready for your next steps. ",
  },
];

const HowItWorks = () => {
  return (
    <div className="  flex relative items-center justify-between w-10/12   py-24 ">
      <div className=" grid grid-cols-1 md:grid-cols-5 gap-4 z-20">
        <div className="font-bold text-4xl text-secondary-500">
          How It Works
        </div>
        {steps.map((step: StepType, index: number) => (
          <div key={index} className=" flex flex-col items-center  h-72 text-secondary-500">
            <div className="  ">{step.step}</div>
            <div className="font-bold text-primary-500 text-lg">
              {step.title}
            </div>
            <div className=" font-semibold italic">{step.subtitle}</div>
            <div className=" font-light text-center">{step.description}</div>
          </div>
        ))}
      </div>
      <div className=" absolute text-white font-bold text-[200px] bottom-20">
        EnhancifAI
      </div>
    </div>
  );
};

export default HowItWorks;
