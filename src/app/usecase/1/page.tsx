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
    messageId: 'M001',
    customerMsg: [
      {
        msg: `I don't understand why my order is taking so long?? `
      },
      {
        msg: `I'm really not happy and just want to know what's happening. I ordered weeks   ago!`
      },
    ],
  },
  {
    number: 2,
    messageId: 'M002',
    customerMsg: [
      {
        msg: `Hey, I gotta say, your products are absolutely amazing!!`
      },
      {
        msg: `I've already bought my third one, and I'm not stopping. Keep it up :)`
      },
    ],
  },
  {
    number: 3,
    messageId: 'M003',
    customerMsg: [
      {
        msg: `This is ridiculous, I received a broken item. How does this even happen? `
      },
      {
        msg: `I paid good money and expect better. I demand a refund right now!`
      },
    ],
  },
  {
    number: 4,
    messageId: 'M004',
    customerMsg: [
      {
        msg: `Can someone explain how I track my order?`
      },
      {
        msg: `I've been trying to figure out your website for ages, and it's not clear at all.`
      },
    ],
  },
  {
    number: 5,
    messageId: 'M005',
    customerMsg: [
      {
        msg: `Big thanks to your support team, `
      },
      {
        msg: `they were super quick to respond to my issue.`
      },
      {
        msg: `Really appreciate it, thanks!`
      },
    ],
  },
  {
    number: 6,
    messageId: 'M006',
    customerMsg: [
      {
        msg: `Just watched the game, and while I'm here, wanted to ask,`
      },
      {
        msg: `how long does shipping usually take?`
      },
      {
        msg: `Ordered some gear last   week.`
      },
    ],
  },
  {
    number: 7,
    messageId: 'M007',
    customerMsg: [
      {
        msg: `Your checkout process is a bit confusing, tbh.`
      },
      {
        msg: `Managed to place my order, but you guys should really look into simplifying it. `
      },
      {
        msg: `Anyway, excited for my products!`
      },
    ],
  },
  {
    number: 8,
    messageId: 'M008',
    customerMsg: [
      {
        msg: `Had a bit of a mix-up with my last order but sorted it out.`
      },
      {
        msg: `Also, curious, do you guys offer any loyalty discounts?`
      },
      {
        msg: `Been shopping here for a while.`
      },
    ],
  },
  {
    number: 9,
    messageId: 'M009',
    customerMsg: [
      {
        msg: `Saw your ad on Instagram and decided to give it a try. `
      },
      {
        msg: `Order placed, but I'm wondering about your return policy, just   in case.`
      },
    ],
  },
  {
    number: 10,
    messageId: 'M010',
    customerMsg: [
      {
        msg: `I'm planning a big camping trip next month,`
      },
      {
        msg: `so I ordered some gear from you guys`
      },
      {
        msg: `Hope it arrives soon.`
      },
      {
        msg: `Also, do you sponsor events? `
      },
      {
        msg: `just curious!`
      },
    ],
  },
];

const datav2 = [
  {
    number: 1,
    desc: `Classify each customer message into 'Inquiry,' 'Feedback,' 'Complaint,' or 'Praise'.`,
  },
  {
    number: 2,
    desc: `Identify urgent messages that require immediate attention.`,
  }
]

const datav3 = [
  {
    number: 1,
    msgId: "M001",
    msg: `I don't understand why my order is taking so long??...`,
    classification: 'Complaint',
    urgency: 'high'
  },
  {
    number: 2,
    msgId: "M002",
    msg: `Hey, I gotta say, your products are absolutely amazing!!...`,
    classification: 'Praise',
    urgency: 'Low'
  },
  {
    number: 3,
    msgId: "M003",
    msg: `This is ridiculous, I received a broken item...`,
    classification: 'Complaint',
    urgency: 'high'
  },
  {
    number: 4,
    msgId: "M004",
    msg: `Can someone explain how I track my order!...`,
    classification: 'Inquiry',
    urgency: 'Medium'
  },
  {
    number: 5,
    msgId: "M005",
    msg: `Big thanks to your support team, they were super quick...`,
    classification: 'Praise',
    urgency: 'Low'
  },
  {
    number: 6,
    msgId: "M006",
    msg: `Just watched the game, and while I'm here, wanted to ask...`,
    classification: 'Inquiry',
    urgency: 'Medium'
  },
  {
    number: 7,
    msgId: "M007",
    msg: `Your checkout process is a bit confusing, tbh...`,
    classification: 'Feedback',
    urgency: 'Medium'
  },
  {
    number: 8,
    msgId: "M008",
    msg: `Has a bit of a mix-up with my last order but sorted it out...`,
    classification: 'Feedback',
    urgency: 'Low'
  },
  {
    number: 9,
    msgId: "M009",
    msg: `Saw your ad on Instagram and decided to give it a try...`,
    classification: 'Inquiry',
    urgency: 'Medium'
  },
  {
    number: 10,
    msgId: "M010",
    msg: `I'm planning a big camping trip next month, so I ordered...`,
    classification: 'Inquiry',
    urgency: 'Medium'
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
        Enhancing Customer Service with AI-Powered
        </div>
        <div className=" text-primary-500 text-4xl font-bold flex justify-center items-center">
        Text Classification
        </div>

        <div className=" flex flex-col md:flex-row w-full gap-8 text-secondary-500 mt-20">
          <div className=" flex flex-row   text-xl  w-full md:w-1/3">
            <div className=" flex flex-row  ">
              <div className=" p-2 ">
                <Image src={d_tick_circle} alt="" />
              </div>
              <div>Scenario:</div>
            </div>
          </div>
          <div className=" flex flex-col w-2/3">
          A small online retail business is overwhelmed by the volume of customer messages received through various channels. Many of these messages are verbose, contain non-relevant information, or are poorly phrased, making manual categorization for appropriate responses inefficient and prone to errors.
          </div>
        </div>


        <div className=" flex flex-col md:flex-row w-full gap-8 text-secondary-500 mt-10">
          <div className=" flex flex-row   text-xl  w-full md:w-1/3">
            <div className=" flex flex-row  ">
              <div className=" p-2 ">
                <Image src={d_tick_circle} alt="" />
              </div>
              <div>Solution:</div>
            </div>
          </div>
          <div className=" flex flex-col w-2/3">
          A small online retail business is overwhelmed by the volume of customer messages received through various channels. Many of these messages are verbose, contain non-relevant information, or are poorly phrased, making manual categorization for appropriate responses inefficient and prone to errors.
          </div>
        </div>

        <div className=" flex flex-col md:flex-row w-full gap-8 text-secondary-500 mt-10">
          <div className=" flex flex-row   text-xl  w-full md:w-1/3">
            <div className=" flex flex-row  ">
              <div className=" p-2 ">
                <Image src={d_tick_circle} alt="" />
              </div>
              <div>Unique Advantage</div>
            </div>
          </div>
          <div className=" flex flex-col w-2/3">
          EnhancifAI's NLP technology is specifically designed to interpret and classify text data accurately, even when messages are grammatically incorrect or contain a mix of relevant and irrelevant information. This capability is crucial for small businesses that lack the resources for extensive customer service teams or sophisticated AI tools, ensuring that all customer communications are understood and appropriately actioned.
          </div>
        </div>

        <div className="  mt-10">
        Data Inputs
        </div>

        <div className="shadow  border border-gray-200 rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Message ID
                      </th>

                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                         Customer Message
                      </th>
                  
                 
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {data.map((row) => (
                      <tr key={row.number}>
                        <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium text-gray-900">
                          {row.messageId}
                        </td>
                     
                        <td className="px-6  py-4 whitespace-nowrap text-left text-sm text-gray-500 break-words">
                          {row.customerMsg.map((msg) => (
                            <div>
                              {msg.msg}
                            </div>
                          ))}
                        </td>

                      
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="  mt-10">
              Prompts for EnhancifAI
        </div>

        <div className="shadow  border border-gray-200 rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Prompt #
                      </th>

                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
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
                     
                        <td className="px-6  py-4 whitespace-nowrap text-left text-sm text-gray-500 break-words">
                          {row.desc}
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
              <div>EnhancifAI Processing</div>
            </div>
          </div>
          <div className=" flex flex-col w-2/3">
         EnhancifAI processes the uploaded messages, appying NLP models to classify each accurately. It discerns the 
         intent and sentiment behind even the most complex texts, adding two new columns to the output file for classification and urgency.
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
         The output file includes the original messages with additional columns indicating the classification and urgency level.
          </div>
        </div>

        <div className="  mt-10">
              Data Inputs
        </div>

        <div className="shadow  border border-gray-200 rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Message ID
                      </th>

                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                          Customer Message
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                          Classification
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                          Urgency
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {datav3.map((row) => (
                      <tr key={row.number}>
                        <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium text-gray-900">
                          {row.msgId}
                        </td>
                     
                        <td className="px-6  py-4 whitespace-nowrap text-left text-sm text-gray-500 break-words">
                          {row.msg}
                        </td>
                        <td className="px-6  py-4 whitespace-nowrap text-left text-sm text-gray-500 break-words">
                          {row.classification}
                        </td>
                        <td className="px-6  py-4 whitespace-nowrap text-left text-sm text-gray-500 break-words">
                          {row.urgency}
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
              <div>Value Added</div>
            </div>
          </div>
          <div className=" flex flex-col gap-4 w-2/3">
         <p>
            EnhancifAI transforms customer service for small businesses by efficiently processing and classifying a wide range
            of customer messages, ensuring every communication is accurately understood and actioned. this level of text
            analysis and classification allows businesses to manage  customer interactions effectively, akin to having a
            dedicated, 24/7 digital customer service team.      
         </p>
         <p>
                      EnhancifAI's precision in handling real-world, complex customer messages makes it an invaluable tool for 
                      maintaining high customer satisfaction and loyalty, providing a completitive edge in the digital marketplace.
         </p>
          </div>
        </div>



  
      </div>

<Footerv2 />
     
    </div>
  );
};

export default page;
