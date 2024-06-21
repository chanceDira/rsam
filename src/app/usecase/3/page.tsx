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
    product: 'Multi-purpose cleaners',
    jan: '45',
    feb: '50',
    mar: '55',
    apr: '60',
    may: '65',
    jun: '55',
    jul: '50',
    aug: '45',
    sep: '60',
    oct: '65',
    nov: '70',
    dev: '75',
    current: '100'
  },
  {
    number: 2,
    messageId: '002',
    product: 'Gourmet coffee beans',
    jan: '80',
    feb: '85',
    mar: '90',
    apr: '95',
    may: '85',
    jun: '80',
    jul: '75',
    aug: '70',
    sep: '95',
    oct: '100',
    nov: '105',
    dev: '110',
    current: '150'
  },
  {
    number: 3,
    messageId: '003',
    product: 'Smart home devices',
    jan: '65',
    feb: '60',
    mar: '55',
    apr: '50',
    may: '45',
    jun: '70',
    jul: '75',
    aug: '80',
    sep: '85',
    oct: '80',
    nov: '75',
    dev: '70',
    current: '120'
  },
  {
    number: 4,
    messageId: '004',
    product: 'Indoor plant pots',
    jan: '30',
    feb: '32',
    mar: '40',
    apr: '45',
    may: '50',
    jun: '55',
    jul: '60',
    aug: '65',
    sep: '70',
    oct: '75',
    nov: '80',
    dev: '85',
    current: '90'
  },
  {
    number: 5,
    messageId: '005',
    product: 'Reusable water bottles',
    jan: '100',
    feb: '95',
    mar: '90',
    apr: '85',
    may: '80',
    jun: '105',
    jul: '110',
    aug: '115',
    sep: '90',
    oct: '85',
    nov: '80',
    dev: '75',
    current: '130'
  },
  {
    number: 6,
    messageId: '006',
    product: 'Wireless earbuds',
    jan: '75',
    feb: '80',
    mar: '85',
    apr: '90',
    may: '95',
    jun: '70',
    jul: '65',
    aug: '60',
    sep: '55',
    oct: '50',
    nov: '45',
    dev: '40',
    current: '110'
  },
  {
    number: 7,
    messageId: '007',
    product: 'Portable power banks',
    jan: '50',
    feb: '55',
    mar: '60',
    apr: '65',
    may: '70',
    jun: '75',
    jul: '80',
    aug: '85',
    sep: '90',
    oct: '95',
    nov: '100',
    dev: '105',
    current: '140'
  },
  {
    number: 8,
    messageId: '008',
    product: 'Eco-friendly cleaning sprays',
    jan: '40',
    feb: '45',
    mar: '50',
    apr: '55',
    may: '60',
    jun: '65',
    jul: '70',
    aug: '75',
    sep: '80',
    oct: '85',
    nov: '90',
    dev: '95',
    current: '115'
  },
  {
    number: 9,
    messageId: '009',
    product: 'High-efficiency light bulbs',
    jan: '85',
    feb: '90',
    mar: '95',
    apr: '100',
    may: '105',
    jun: '110',
    jul: '115',
    aug: '120',
    sep: '125',
    oct: '130',
    nov: '135',
    dev: '140',
    current: '160'
  },
  {
    number:10,
    messageId: '010',
    product: 'Organic spices set',
    jan: '60',
    feb: '65',
    mar: '70',
    apr: '75',
    may: '80',
    jun: '85',
    jul: '90',
    aug: '95',
    sep: '100',
    oct: '105',
    nov: '110',
    dev: '115',
    current: '125'
  },
];

const datav2 = [
  {
    number: 1,
    productId: '001',
    name: 'Multi-purpose cleaners',
    spring: 'Increase',
    summer: 'Decrease',
    fall: 'Increase',
    winter: 'Increase',
    reasons: [
      {
        msg: 'Increased cleaning in spring'
      },
      {
        msg: 'and winter; outdoor activities '
      },
      {
        msg: 'reduce usage in summer.'
      },
    ],
    inventory: [
      {
        msg: 'Increase stock in late winter for spring; '
      },
      {
        msg: 'maintain high levels into fall for winter.'
      },
      {
        msg: 'Reduce post-summer.'
      }
    ]
  },
  {
    number: 2,
    productId: '002',
    name: 'Gourmet coffee beans',
    spring: 'Stable',
    summer: 'Decline',
    fall: 'Stable',
    winter: 'Surge',
    reasons: [
      {
        msg: 'Coffee consumption spikes in'
      },
      {
        msg: 'cold weather; declines in'
      },
      {
        msg: 'summer.'
      }
    ],
    inventory: [
      {
        msg: 'Gradually increase inventory in fall for'
      },
      {
        msg: 'winter surge; decrease post-winter.'
      }
    ]
  },
  {
    number: 3,
    productId: '003',
    name: 'Smart home devices',
    spring: 'Decrease',
    summer: 'Surge',
    fall: 'Stable',
    winter: 'Decrease',
    reasons: [
      {
        msg: 'Interest in home upgrades'
      },
      {
        msg: 'peaks in summer; decreases as'
      },
      {
        msg: 'outdoor activities increase.'
      }
    ],
    inventory: [
      {
        msg: 'Increase stock in spring to prepare for '
      },
      {
        msg: 'summer surge; decrease post-summer'
      },
      {
        msg: 'for fall and winter.'
      }
    ]
  },
  {
    number: 4,
    productId: '004',
    name: 'Indoor plant pots',
    spring: 'Surge',
    summer: 'Stable',
    fall: 'Decrease',
    winter: 'Increase',
    reasons: [
      {
        msg: 'Spring planting season;'
      },
      {
        msg: 'increased indoor activity in'
      },
      {
        msg: 'winter.'
      }
    ],
    inventory: [
      {
        msg: 'Increase stock in late winter to prepare '
      },
      {
        msg: 'for spring surge; decrease post-'
      },
      {
        msg: 'summer. Increase slightly for winter.'
      }
    ]
  },
  {
    number: 5,
    productId: '005',
    name: 'Reusable water bottles',
    spring: 'Stable',
    summer: 'Surge',
    fall: 'Stable',
    winter: 'Decrease',
    reasons: [
      {
        msg: 'Surge in summer outdoor '
      },
      {
        msg: 'activities; decrease in winter.'
      }
    ],
    inventory: [
      {
        msg: 'Increase stock in spring to prepare for '
      },
      {
        msg: 'summer surge; decrease post-summer '
      },
      {
        msg: 'for winter.'
      }
    ]
  },
  {
    number: 6,
    productId: '006',
    name: 'Wireless earbuds',
    spring: 'Stable',
    summer: 'Increase',
    fall: 'Stable',
    winter: 'Decrease',
    reasons: [
      {
        msg: 'Summer travel and fitness'
      },
      {
        msg: 'activities boost use; less '
      },
      {
        msg: 'demand in winter.'
      }
    ],
    inventory: [
      {
        msg: 'Increase stock in late spring for '
      },
      {
        msg: 'summer increase; maintain stable for'
      },
      {
        msg: 'fall and decrease for winter.'
      }
    ]
  },
  {
    number: 7,
    productId: '007',
    name: 'Portable power banks',
    spring: 'Increase',
    summer: 'Stable',
    fall: 'Decrease',
    winter: 'Stable',
    reasons: [
      {
        msg: 'Increased travel in spring; '
      },
      {
        msg: 'stable demand for emergency '
      },
      {
        msg: 'power.'
      }
    ],
    inventory: [
      {
        msg: 'Increase stock in late winter to meet'
      },
      {
        msg: 'spring increase; decrease post-summer'
      },
      {
        msg: 'as demand stabilizes.'
      }
    ]
  },
  {
    number: 8,
    productId: '008',
    name: 'Eco-friendly cleaning sprays',
    spring: 'Increase',
    summer: 'Decrease',
    fall: 'Increase',
    winter: 'Stable',
    reasons: [
      {
        msg: 'Spring cleaning and fall '
      },
      {
        msg: 'preparation for holidays boost '
      },
      {
        msg: 'demand.'
      }
    ],
    inventory: [
      {
        msg: 'Increase stock in late winter for spring;'
      },
      {
        msg: 'decrease post-spring and increase '
      },
      {
        msg: 'again for fall.'
      }
    ]
  },
  {
    number: 9,
    productId: '009',
    name: 'High-efficiency light bulbs',
    spring: 'Decrease',
    summer: 'Stable',
    fall: 'Stable',
    winter: 'Surge',
    reasons: [
      {
        msg: 'Decreased daylight hours in '
      },
      {
        msg: 'winter increase usage.'
      }
    ],
    inventory: [
      {
        msg: 'Maintain stable through year and'
      },
      {
        msg: 'increase stock in late summer to '
      },
      {
        msg: 'prepare for winter surge.'
      }
    ]
  },
  {
    number: 10,
    productId: '010',
    name: 'Organic spices set',
    spring: 'Stable',
    summer: 'Decrease',
    fall: 'Increase',
    winter: 'Surge',
    reasons: [
      {
        msg: 'Holiday cooking drives winter '
      },
      {
        msg: 'surge; fall harvest influences'
      },
      {
        msg: 'increase.'
      }
    ],
    inventory: [
      {
        msg: 'Maintain stable in spring, decrease '
      },
      {
        msg: 'slightly post-spring, and increase in late'
      },
      {
        msg: 'summer for fall and winter surge.'
      }
    ]
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
        Unlocking    <span className=" text-primary-500 mx-2">Advanced Seasonal Insights</span>
        </div>
     
        <div className=" text-4xl font-bold flex justify-center items-center">
        for Retail Inventory with EnhancifAI
        </div>
     

        <div className=" flex flex-col md:flex-row w-full gap-8 text-secondary-500 mt-20">
          <div className=" flex flex-row   text-xl  w-full md:w-1/3">
            <div className=" flex flex-row  ">
              <div className=" p-2 ">
                <Image src={d_tick_circle} alt="" />
              </div>
              <div>Scenario and Solution Description:</div>
            </div>
          </div>
          <div className=" flex flex-col w-2/3">
          A diverse retailer, without a technical background, aims to optimize their inventory across various product categories by identifying hidden seasonal sales trends. The goal is to leverage EnhancifAI to transform basic sales data into actionable insights for strategic inventory management and marketing.
          </div>
        </div>


   

  
        <div className="  mt-10">
        Data Inputs
        </div>
        <div className=" text-sm">
        The retailer prepares an Excel file with straightforward sales data for a selection of products:
        </div>

        <div className="shadow  border border-gray-200 rounded-lg ">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Product ID
                      </th>

                      <th
                        scope="col"
                        className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                         Product Name
                      </th>

                      <th
                        scope="col"
                        className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Jan
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Feb
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                       Mar
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                       Apr
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                       May
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                       Jun
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                       jul
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                       Aug
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                       Sep
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                       Oct
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                       Nov
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                       Dec
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                       Current Inventory
                      </th>
                  
                 
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {data.map((row) => (
                      <tr key={row.number}>
                        <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium text-gray-900">
                          {row.messageId}
                        </td>
                     
                        <td className="px-2  py-4 whitespace-nowrap text-left text-sm text-gray-500 break-words">
                          {row.product}
                        </td>

                        <td className="px-2  py-4 whitespace-nowrap text-left text-sm text-gray-500 break-words">
                          {row.jan}
                        </td>

                        <td className="px-2  py-4 whitespace-nowrap text-left text-sm text-gray-500 break-words">
                          {row.feb}
                        </td>
                        <td className="px-2  py-4 whitespace-nowrap text-left text-sm text-gray-500 break-words">
                          {row.mar}
                        </td>
                        <td className="px-2  py-4 whitespace-nowrap text-left text-sm text-gray-500 break-words">
                          {row.apr}
                        </td>
                        <td className="px-2  py-4 whitespace-nowrap text-left text-sm text-gray-500 break-words">
                          {row.may}
                        </td>
                        <td className="px-2  py-4 whitespace-nowrap text-left text-sm text-gray-500 break-words">
                          {row.jun}
                        </td>
                        <td className="px-2  py-4 whitespace-nowrap text-left text-sm text-gray-500 break-words">
                          {row.jul}
                        </td>
                        <td className="px-2  py-4 whitespace-nowrap text-left text-sm text-gray-500 break-words">
                          {row.aug}
                        </td>
                        <td className="px-2  py-4 whitespace-nowrap text-left text-sm text-gray-500 break-words">
                          {row.sep}
                        </td>
                        <td className="px-2  py-4 whitespace-nowrap text-left text-sm text-gray-500 break-words">
                          {row.oct}
                        </td>
                        <td className="px-2  py-4 whitespace-nowrap text-left text-sm text-gray-500 break-words">
                          {row.nov}
                        </td>
                        <td className="px-2  py-4 whitespace-nowrap text-left text-sm text-gray-500 break-words">
                          {row.dev}
                        </td>
                        <td className="px-2  py-4 whitespace-nowrap text-left text-sm text-gray-500 break-words">
                          {row.current}
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
              <div>Prompt for EnhancifAI</div>
            </div>
          </div>
          <div className=" flex flex-col w-2/3">
            <div>
              <ul>
                <li className="  ">
                  <div className="">
                  Spring Trend Analysis Prompt: "Identify the spring sales trend for each product."
                  </div>
                </li>
                <li className=" mt-2">
                  <div className="mt-2">
                  Summer Trend Analysis Prompt: "Identify the summer sales trend for each product."
                  </div>
                </li>
                <li className=" mt-2">
                  <div className="mt-2">
                  Fall Trend Analysis Prompt: "Identify the fall sales trend for each product."
                  </div>
                </li>
                <li className=" mt-2">
                  <div className="mt-2">
                  Winter Trend Analysis Prompt: "Identify the winter sales trend for each product."
                  </div>
                </li>
                <li className=" mt-2">
                  <div className="mt-2">
                  Seasonality Reasons Prompt: "Provide reasons for the identified seasonal trends for each product."
                  </div>
                </li>
                <li className=" mt-2">
                  <div className="mt-2">
                  Inventory Recommendations Prompt: "Based on the seasonal trends, recommend inventory adjustments for each product."
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className=" flex flex-col md:flex-row w-full gap-8 text-secondary-500 mt-20">
          <div className=" flex flex-row   text-xl  w-full md:w-1/3">
            <div className=" flex flex-row  ">
              <div className=" p-2 ">
                <Image src={d_tick_circle} alt="" />
              </div>
              <div>EnhancifAI Processing (File-Based Analysis)</div>
            </div>
          </div>
          <div className=" flex flex-col w-2/3">
          EnhancifAI processes the uploaded data, applying AI to uncover seasonal trends, explain these trends, and suggest inventory adjustments for each product.
          </div>
        </div>


              <div className="  mt-10">
              Data Inputs
        </div>

        <div className=" text-sm">
        The retailer prepares an Excel file with straightforward sales data for a selection of products:
        </div>

        <div className="shadow  border border-gray-200 rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                      Product ID
                      </th>

                      <th
                        scope="col"
                        className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                  Product Name
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                  Spring Trend
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                  Summer Trend
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                   Fall Trend
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                   Winter Trend
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                   Reasons for Seasonality
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                   Inventory Recommendations
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {datav2.map((row) => (
                      <tr key={row.number}>
                        <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium text-gray-900">
                          {row.productId}
                        </td>
                     
                        <td className="px-2  py-4 whitespace-nowrap text-left text-sm text-gray-500 break-words">
                          {row.name}
                        </td>
                        <td className="px-2  py-4 whitespace-nowrap text-left text-sm text-gray-500 break-words">
                          {row.spring}
                        </td>
                        <td className="px-2  py-4 whitespace-nowrap text-left text-sm text-gray-500 break-words">
                          {row.summer}
                        </td>
                        <td className="px-2  py-4 whitespace-nowrap text-left text-sm text-gray-500 break-words">
                          {row.fall}
                        </td>
                        <td className="px-2  py-4 whitespace-nowrap text-left text-sm text-gray-500 break-words">
                          {row.winter}
                        </td>
                        <td className="px-2  py-4 whitespace-nowrap text-left text-sm text-gray-500 break-words">
                          {row.reasons.map((res) => (
                            <div>{res.msg}</div>
                          ))}
                        </td>
                        <td className="px-2  py-4 whitespace-nowrap text-left text-sm text-gray-500 break-words">
                          {row.inventory.map((inv) => (
                            <div>{inv.msg}</div>
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
              <div>Summary of Value Added</div>
            </div>
          </div>
          <div className=" flex flex-col w-2/3">
          This use case exemplifies how EnhancifAI empowers retailers, especially those without technical expertise, to derive advanced insights from basic sales data. By identifying seasonal trends across a diverse product range and providing actionable recommendations, EnhancifAI enables retailers to make informed decisions on inventory management and marketing strategies. The insights gained through EnhancifAI's analysis help retailers optimize stock levels, align product availability with consumer demand, and ultimately enhance sales and customer satisfaction. EnhancifAI transforms simple data into a strategic asset, showcasing the power of AI in unlocking the potential of retail data for businesses of all sizes.
          </div>
        </div>




  
      </div>

<Footerv2 />
     
    </div>
  );
};

export default page;
