import Navbar from "@/containers/Navbar";
import Link from "next/link";
import React from "react";

import d_tick_circle from '../../../assets/d_tick_circle.svg'
import Image from "next/image";
import Footerv2 from "@/containers/Footerv2";

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

const data = [
  {
    number: 1,
    email: 'jane.doe@example.com',
    last: '2023-01-15',
    open: '80%',
    click: '25%',
    status: 'Subscribed'
  },
  {
    number: 2,
    email: 'john.smith@example.com',
    last: '2022-12-10',
    open: '40%',
    click: '15%',
    status: 'Unsubscribed'
  },
  {
    number: 3,
    email: 'emily.jones@example.com',
    last: '2023-02-01',
    open: '60%',
    click: '15%',
    status: 'Subscribed'
  },
  {
    number: 4,
    email: 'michael.brown@example.com',
    last: '2023-03-12',
    open: '50%',
    click: '5%',
    status: 'Subscribed'
  },
  {
    number: 5,
    email: 'chloe.taylor@example.com',
    last: '2022-11-23',
    open: '30%',
    click: '2%',
    status: 'Subscribed'
  },
  {
    number: 6,
    email: 'daniel.wilson@example.com',
    last: '2023-01-20',
    open: '75%',
    click: '20%',
    status: 'Subscribed'
  },
  {
    number: 7,
    email: 'sophia.moore@example.com',
    last: '2022-10-15',
    open: '20%',
    click: '1%',
    status: 'Subscribed'
  },
  {
    number: 8,
    email: 'ethan.clark@example.com',
    last: '2023-02-18',
    open: '65%',
    click: '18%',
    status: 'Subscribed'
  },
  {
    number: 9,
    email: 'olivia.harris@example.com',
    last: '2023-01-05',
    open: '85%',
    click: '30%',
    status: 'Subscribed'
  },
  {
    number:10,
    email: 'noah.lee@example.com',
    last: '2022-09-30',
    open: '10%',
    click: '0%',
    status: 'Subscribed'
  },
];

const datav2 = [
  {
    number: 1,
    desc: [
      {
        msg: 'Analyze email open rates,  click-through rates, and recent purchase history'
      },
      {
        msg: `to calculate an 'Engagement Score' for each customer.`
      }
    ]
  },
  {
    number: 2,
    desc: [
      {
        msg: 'Segment customers into high,   medium, and low engagement'
      },
      {
        msg: `categories based on the 'Engagement Score'.`
      }
    ]
  },
  {
    number: 3,
    desc: [
      {
        msg: `Recommend actions for each segment   to optimize email marketing efforts`
      },
    ]
  }
]

const datav3 = [
  {
    number: 1,
    email: 'jane.doe@example.com',
    status: 'Subscribed',
    score: '95',
    segment: 'Hight',
    click: 'Target with personalized offers',
  },
  {
    number: 2,
    email: 'john.smith@example.com',
    status: 'Unsubscribed',
    score: '25',
    segment: 'Low',
    click: 'Send re-engagement or feedback survey',
  },
  {
    number: 3,
    email: 'emily.jones@example.com',
    status: 'Subscribed',
    score: '70',
    segment: 'Medium',
    click: 'Send targeted re-engagement campaign',
  },
  {
    number: 4,
    email: 'michael.brown@example.com',
    status: 'Subscribed',
    score: '55',
    segment: 'Medium',
    click: 'Send content of interest to increase   engagement',
  },
  {
    number: 5,
    email: 'chloe.taylor@example.com',
    status: 'Subscribed',
    score: '35',
    segment: 'Low',
    click: 'Send survey to understand preferences',
  },
  {
    number: 6,
    email: 'daniel.wilson@example.com',
    status: 'Subscribed',
    score: '90',
    segment: 'Hight',
    click: 'Target with VIP content and offers',
  },
  {
    number: 7,
    email: 'sophia.moore@example.com',
    status: 'Subscribed',
    score: '20',
    segment: 'Low',
    click: 'Send re-engagement or feedback survey',
  },
  {
    number: 8,
    email: 'ethan.clark@example.com',
    status: 'Subscribed',
    score: '80',
    segment: 'Hight',
    click: 'Target with early access to new products',
  },
  {
    number: 9,
    email: 'olivia.harris@example.com',
    status: 'Subscribed',
    score: '98',
    segment: 'Hight',
    click: 'Use for referral program promotion',
  },
  {
    number: 10,
    email: 'noah.lee@example.com',
    status: 'Subscribed',
    score: '10',
    segment: 'Low',
    click: 'Send educational content to build   interest',
  },
]

const page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center w-full bg-primary-100 ">
      <div className=" bg-primary-500 w-full flex justify-center items-center">
        <div className=" hidden w-9/12 my-16">
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
              Customer Feedback Analysis 111111
            </div>
          </div>
        </div>
      </div>
      <Navbar />
      <div className=" w-9/12 my-10 text-secondary-500 font-light flex flex-col gap-3 mt-40">
        <div className=" text-4xl font-bold flex justify-center items-center">
        <span className=" text-primary-500 mx-2">Optimizing Email Marketing</span>
        </div>
     
        <div className=" text-4xl font-bold flex justify-center items-center">
        With EnhancifAI's Engagement Scoring
        </div>
     

        <div className=" flex flex-col md:flex-row w-full gap-8 text-secondary-500 mt-20">
          <div className=" flex flex-row   text-xl  w-full md:w-1/3">
            <div className=" flex flex-row  ">
              <div className=" p-2 ">
                <Image src={d_tick_circle} alt="" />
              </div>
              <div>Scenario and Solution Description</div>
            </div>
          </div>
          <div className=" flex flex-col w-2/3">
          A small online retail business seeks to enhance its email marketing strategy by ensuring its mailing list is dynamically updated to reflect customer engagement accurately. The goal is to segment the mailing list based on engagement levels derived from email interactions, enabling personalized marketing campaigns. The business turns to EnhancifAI to analyze email open rates, click-through rates, and recent purchase history to generate an "Engagement Score" for each customer.
          </div>
        </div>


   

  
        <div className="  mt-10">
        Data Inputs
        </div>
        <div className=" text-sm">
        Data Preparation: Email Interaction data
        </div>

        <div className="shadow  border border-gray-200 rounded-lg ">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                       Email Address
                      </th>

                      <th
                        scope="col"
                        className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Last Purchase Date
                      </th>

                      <th
                        scope="col"
                        className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                      Email Open Rate
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Click-through Rate
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                      Subscription Status
                      </th>
                      </tr>
                
      
             
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {data.map((row) => (
                      <tr key={row.number}>
                        <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium text-gray-900">
                          {row.email}
                        </td>
                     
                        <td className="px-2  py-4 whitespace-nowrap text-left text-sm text-gray-500 break-words">
                          {row.last}
                        </td>

                        <td className="px-2  py-4 whitespace-nowrap text-left text-sm text-gray-500 break-words">
                          {row.open}
                        </td>

                        <td className="px-2  py-4 whitespace-nowrap text-left text-sm text-gray-500 break-words">
                          {row.click}
                        </td>
                        <td className="px-2  py-4 whitespace-nowrap text-left text-sm text-gray-500 break-words">
                          {row.status}
                        </td>
                       
                      

                      
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>


      

              <div className="  mt-10">
              Prompt for EnhancifAI:
        </div>

    
        <div className="shadow  border border-gray-200 rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                     Prompt ID
                      </th>

                      <th
                        scope="col"
                        className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                Description
                      </th>
           
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {datav2.map((row) => (
                      <tr key={row.number}>
                        <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium text-gray-900">
                          {row.number}
                        </td>
                     
                   
                        <td className="px-2  py-4 whitespace-nowrap text-left text-sm text-gray-500 break-words">
                          {row.desc.map((res) => (
                            <div>{res.msg}</div>
                          ))}
                        </td>
                     
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className=" flex flex-col md:flex-row w-full gap-8 text-secondary-500 mt-10">
          <div className=" flex flex-row   text-xl  w-full md:w-1/3">
            <div className=" flex flex-row  ">
              <div className=" p-2 ">
                <Image src={d_tick_circle} alt="" />
              </div>
              <div>EnhancifAI Processing and Expected Output</div>
            </div>
          </div>
          <div className=" flex flex-col w-2/3">
          EnhancifAI processes the data, applying AI analysis to generate engagement scores and segment recommendations.
          </div>
        </div>

        <div className=" flex flex-col md:flex-row w-full gap-8 text-secondary-500 mt-10">
          <div className=" flex flex-row   text-xl  w-full md:w-1/3">
            <div className=" flex flex-row  ">
              <div className=" p-2 ">
                <Image src={d_tick_circle} alt="" />
              </div>
              <div>Expected Output</div>
            </div>
          </div>
          <div className=" flex flex-col w-2/3">
          The output file includes the original data, augmented with an "Engagement Score" and recommendations for each customer based on their engagement segment.
          </div>
        </div>

        <div className="shadow  border border-gray-200 rounded-lg mt-10 ">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                       Email Address
                      </th>

                      <th
                        scope="col"
                        className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                       Subscription Status
                      </th>

                      <th
                        scope="col"
                        className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                     Engagement Score
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Engagement Segment
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                     Click-through Rate
                      </th>
                      </tr>
                
      
             
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {datav3.map((row) => (
                      <tr key={row.number}>
                        <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium text-gray-900">
                          {row.email}
                        </td>
                     
                        <td className="px-2  py-4 whitespace-nowrap text-left text-sm text-gray-500 break-words">
                          {row.status}
                        </td>

                        <td className="px-2  py-4 whitespace-nowrap text-left text-sm text-gray-500 break-words">
                          {row.score}
                        </td>

                        <td className="px-2  py-4 whitespace-nowrap text-left text-sm text-gray-500 break-words">
                          {row.segment}
                        </td>
                        <td className="px-2  py-4 whitespace-nowrap text-left text-sm text-gray-500 break-words">
                          {row.click}
                        </td>
                       
                      

                      
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className=" flex flex-col md:flex-row w-full gap-8 text-secondary-500 mt-10">
          <div className=" flex flex-row   text-xl  w-full md:w-1/3">
            <div className=" flex flex-row  ">
              <div className=" p-2 ">
                <Image src={d_tick_circle} alt="" />
              </div>
              <div>Summary of Value Added</div>
            </div>
          </div>
          <div className=" flex flex-col w-2/3">
          This use case clearly demonstrates EnhancifAI's ability to transform raw email interaction data into strategic insights for email marketing optimization. By calculating an "Engagement Score" based on customer interactions and segmenting the mailing list accordingly, EnhancifAI enables the business to tailor its marketing efforts more effectively. High-engagement customers can receive personalized content to further enhance their loyalty, while low-engagement customers can be targeted with re-engagement campaigns or removed to maintain list health. This approach ensures marketing resources are allocated efficiently, improving campaign ROI and fostering stronger customer relationships.
          </div>
        </div>




  
      </div>

<Footerv2 />
     
    </div>
  );
};

export default page;
