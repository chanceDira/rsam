"use client";

import { loadGoogleAnalytic } from "@/utils/GoogleAnalytics";
import Link from "next/link";
import React, { useEffect } from "react";

interface TableDataType {
  number: number;
  data: string;
  columns: string;
  aiPromptOutputHeading: string;
}

const page = () => {
  const data = [
    {
      number: 1,
      data: "Classify the sentiment of the following customer feedback:",
      columns: "B",
      aiPromptOutputHeading: "Sentiment Analysis",
    },
    {
      number: 2,
      data: `Based on the customer's age in column C and purchase
          history in column E, recommend a product category:`,
      columns: "C+E",
      aiPromptOutputHeading: "Product Recommendation",
    },
    {
      number: 3,
      data: `Summarize the main points of the following project proposal,
          considering the objectives in column D and the expected
          outcomes in column F:`,
      columns: "D+F", // Assuming all columns are relevant
      aiPromptOutputHeading: "Proposal Summary",
    },
    {
      number: 4,
      data: `Provide a comprehensive analysis using all available data:`,
      columns: "*", // Assuming all columns are relevant
      aiPromptOutputHeading: "Comprehensive Analysis",
    },
  ];


  return (
    <div className="flex min-h-screen flex-col items-center w-full bg-primary-100 ">
      <div className=" bg-primary-500 w-full flex justify-center items-center">
        <div className=" w-9/12 my-16">
          <Link href="/execution">
            <div className=" flex flex-row cursor-pointer">
              <span>{/* <img src="ep_back.svg" alt="" /> */}</span>
              <span className=" text-white font-bold">{"<-"} Back To Execution</span>
            </div>
          </Link>

          <div className=" flex flex-col gap-4 my-6">
            <div className=" text-white   font-bold text-4xl">
              Welcome to Crafting Your Prompt File for EnhancifAI!
            </div>
            <div className=" font-light text-white">
              Embarking on your EnhancifAI journey opens a world of
              possibilities, allowing you to dive deeper into your data with
              AI-driven insights. The ﬁrst step? Creating a prompt ﬁle that
              guides our AI in analyzing your data. Here’s a friendly guide to
              get you started:
            </div>
          </div>
        </div>
      </div>
      <div className=" w-9/12 my-10 text-secondary-500 font-light flex flex-col gap-3">
        <div className=" font-bold">Step 1: Grab the Template</div>
        <div>
          Begin by downloading our prompt ﬁle template. This is where you'll map
          out how EnhancifAI will interact with your data.
        </div>
        <div className=" font-bold">Step 2: Get to Know Your Template</div>

        <div className="">
          Our template is designed for simplicity and effectiveness, with each
          column playing a crucial role:
        </div>
        <div>
          <ul>
            <li className="  mt-4">
              <div className="mt-2">
                Column A (Prompt Number): Each prompt is sequentially numbered,
                starting from 1, to keep things organized.
              </div>
            </li>
            <li className=" mt-2">
              <div className="mt-2">
                Column B (Data Columns): Specify the data columns EnhancifAI
                should analyze. Use a plus sign (+) to combine multiple columns
                (e.g., "B+D+F"), or an asterisk (*) to indicate all columns
                should be used.
              </div>
            </li>
            <li className=" mt-2">
              <div className="mt-2">
                Column C (AI Prompt): This is where you clearly state your
                analysis request to the AI. The clearer, the better!
              </div>
            </li>
            <li className=" mt-2">
              <div className="mt-2">
                Column D (Output Heading): Name your new insight column here,
                reﬂecting the essence of your AI Prompt.
              </div>
            </li>
          </ul>
        </div>

        <div className=" font-bold">Step 3: Dive into Prompt Crafting</div>
        <div>
          <ul>
            <li className="  mt-4">
              <div className="mt-2">
                Clarity is Key: Direct and speciﬁc prompts will yield the most
                relevant insights. • Think Big: Frame your prompts around the
                insights that would be most valuable to
              </div>
            </li>
            <li className=" mt-2">
              <div className="mt-2">
                Think Big: Frame your prompts around the insights that would be
                most valuable to you or your organization.
              </div>
            </li>
          </ul>
        </div>
        <div>Examples to Spark Your Imagination</div>
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border border-gray-200 rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Prompt number
                      </th>

                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Data Columns
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        AI Prompt
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Output Heading
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {data.map((row) => (
                      <tr key={row.number}>
                        <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium text-gray-900">
                          {row.number}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium text-gray-900">
                          {row.columns}
                        </td>
                        <td className="px-6  py-4 whitespace-nowrap text-left text-sm text-gray-500 break-words">
                          {row.data}
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap text-left text-sm text-gray-500 break-words">
                          {row.aiPromptOutputHeading}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className=" font-bold mt-2">Step 4: Save, Upload, and Explore</div>
        <div>
          Once your prompts are ready, save your document. You can save it
          either as a CSV or Excel ﬁle, whichever you prefer. Then, upload it
          along with your data ﬁle to EnhancifAI and let our AI start generating
          insights.
        </div>
        <div>
          <hr />
        </div>
      </div>

      <div>
        We're here to help you every step of the way. If you have any questions
        or need further assistance, don't hesitate to reach out. Welcome to the
        EnhancifAI community – where data meets possibilities!
      </div>
    </div>
  );
};

export default page;
