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
    messageId: '001',
    totalSpend: '$450',
    purchase: '3',
    recency: '30 days',
    product: 'Electronics'
  },
  {
    number: 2,
    messageId: '002',
    totalSpend: '$200',
    purchase: '2',
    recency: '60 days',
    product: 'Home Kitchen'
  },
  {
    number: 3,
    messageId: '003',
    totalSpend: '$50',
    purchase: '1',
    recency: '90 days',
    product: 'Apparel'
  }
];

const datav2 = [
  {
    number: 1,
    product: `Calculate predictive CLV based on total spend, purchase frequency, recency of purchase, and product categories.`
  },
  {
    number: 2,
    product: `Segment customers into high, medium,and low CLV tiers for targeted marketing strategies.`
  }
]

const datav3 = [
  {
    number: 1,
    msgId: "001",
    total: '$450',
    purchase: '3',
    recency: '30 days',
    top: 'Electronics',
    predictive: "$720",
    clv: "High"
  },
  {
    number: 2,
    msgId: "002",
    total: '$200',
    purchase: '2',
    recency: '60 days',
    top: 'Home c kitchen',
    predictive: "$300",
    clv: "Medium"
  },
  {
    number: 3,
    msgId: "003",
    total: '$50',
    purchase: '1',
    recency: '90 days',
    top: 'Apparel',
    predictive: "$75",
    clv: "Low"
  }
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
        Predictive    <span className=" text-primary-500 mx-2">CLV Segmentation</span> for Email Campaigns
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
          E-commerce businesses, particularly those utilizing a drop shipping model, accumulate vast amounts of customer data. The challenge lies in leveraging this data to predict future purchasing behaviors and effectively segment customers based on their predicted Customer Lifetime Value (CLV). This segmentation is crucial for crafting targeted email marketing campaigns that resonate with each customer segment's unique characteristics and anticipated future interactions.
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
          EnhancifAI processes historical sales data to intelligently segment customers into distinct CLV tiers. This enables businesses to execute finely tuned email marketing campaigns, enhancing customer engagement and maximizing the efficiency of marketing expenditures.
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
          EnhancifAI differentiates itself by employing predictive analytics to forecast future customer value from historical transaction patterns. This capability allows for advanced customer segmentation, beyond what conventional analytics can offer, enabling businesses to engage in proactive rather than reactive marketing strategies.
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
                        Customer ID
                      </th>

                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                         Total Spend
                      </th>

                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Purchase Frequency
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Recency of Purchase
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                       Product Categories Purchased
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
                          {row.totalSpend}
                        </td>

                        <td className="px-6  py-4 whitespace-nowrap text-left text-sm text-gray-500 break-words">
                          {row.purchase}
                        </td>

                        <td className="px-6  py-4 whitespace-nowrap text-left text-sm text-gray-500 break-words">
                          {row.recency}
                        </td>
                        <td className="px-6  py-4 whitespace-nowrap text-left text-sm text-gray-500 break-words">
                          {row.product}
                        </td>

                      
                      </tr>
                    ))}
                  </tbody>
                </table>
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
                       Customer ID
                      </th>

                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                    Product Categories Purchased
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
                          {row.product}
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
          EnhancifAI analyzes the uploaded data, applying machine learning models to predict the future value of each customer. It segments customers into CLV tiers (high, medium, low) based on their predicted purchasing behavior, creating two new columns in the output file: one for the predictive CLV and another for the CLV tier.
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
          The output file includes the original data with two additional columns indicating the predictive CLV and the corresponding CLV tier for each customer.

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
                        Customer ID
                      </th>

                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                          Total Spend
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                          Purchase Frequency
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                          Recency (days)
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                          Top Category
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                          Predictive CLV
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                          CLV Tier
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
                          {row.total}
                        </td>
                        <td className="px-6  py-4 whitespace-nowrap text-left text-sm text-gray-500 break-words">
                          {row.purchase}
                        </td>
                        <td className="px-6  py-4 whitespace-nowrap text-left text-sm text-gray-500 break-words">
                          {row.recency}
                        </td>
                        <td className="px-6  py-4 whitespace-nowrap text-left text-sm text-gray-500 break-words">
                          {row.top}
                        </td>
                        <td className="px-6  py-4 whitespace-nowrap text-left text-sm text-gray-500 break-words">
                          {row.predictive}
                        </td>
                        <td className="px-6  py-4 whitespace-nowrap text-left text-sm text-gray-500 break-words">
                          {row.clv}
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
         EnhancifAI's approach to predictive CLV segmentation offers e-commerce businesses a powerful tool for enhancing marketing ROI and fostering customer loyalty. By generating detailed insights into each customer's future value, businesses can tailor their email campaigns with unprecedented precision. This not only ensures that marketing resources are allocated where they're most effective but also significantly improves the customer experience by delivering personalized content that aligns with individual preferences and behaviors. EnhancifAI's ability to add predictive insights directly into existing datasets as new columns streamlines the process, making advanced data analytics accessible to businesses without the need for specialized technical expertise. 
         </p>
    
          </div>
        </div>



  
      </div>

<Footerv2 />
     
    </div>
  );
};

export default page;
