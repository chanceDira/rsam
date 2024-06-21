import Link from "next/link";
import React from "react";

interface Prompt {
  prompt: string;
  purpose: string;
}

const prompts: Prompt[] = [
  {
    prompt: "Identify common themes in customer feedback post-purchase.",
    purpose:
      "To understand customer sentiment and satisfaction drivers post-purchase.",
  },
  {
    prompt:
      "Correlate support interaction outcomes with customer satisfaction ratings.",
    purpose:
      "To assess the impact of support interactions on overall satisfaction.",
  },
  {
    prompt:
      "Extract key factors from negative feedback that led to support cases.",
    purpose:
      "To identify areas for improvement in products or services that frequently result in support cases.",
  },
];

const page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center w-full bg-primary-100 ">
      <div className=" bg-primary-500 w-full flex justify-center items-center">
        <div className=" w-9/12 my-16">
          <Link href="/">
            <div className=" flex flex-row cursor-pointer">
              <span>
                <img src="ep_back.svg" alt="" />
              </span>
              <span className=" text-white font-bold">{"<-"} Back To Home</span>
            </div>
          </Link>

          <div className=" flex flex-row items-center my-6">
            <div className=" text-white   font-bold text-4xl">
              Customer Feedback Analysis
            </div>
          </div>
        </div>
      </div>
      <div className=" w-9/12 my-10 text-secondary-500 font-light flex flex-col gap-3">
        <div className=" font-bold">Scenario:</div>
        <div>
          A company collects a vast amount of feedback across multiple channels,
          including social media, customer surveys, and support tickets. The
          challenge lies in efficiently categorizing this feedback and
          extracting actionable insights to improve products and services, a
          task that traditional manual methods struggle to accomplish due to the
          volume and complexity of the data.
        </div>
        <div className=" font-bold">EnhancifAI's Contribution:</div>
        <div>
          EnhancifAI automates the classiﬁcation and sentiment analysis of
          customer feedback, enabling companies to quickly gauge customer
          sentiment and identify areas for improvement. This comprehensive
          analysis enhances product development and customer service strategies,
          ensuring that the company remains responsive to customer needs and
          market trends. Real-time analysis capabilities allow for agile
          adjustments to strategies, maintaining a competitive edge.
        </div>
      </div>
    </div>
  );
};

export default page;
