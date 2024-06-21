'use client';

import Link from "next/link";
import { usePathname, useSearchParams } from 'next/navigation'
import React, { useState } from "react";

type CardType = {
  id: number;
  title: string;
  scenario: string;
  contribution: string;
};

const Cards: CardType[] = [
  {
    id: 0,
    title: "Customer Segmentation",
    scenario: `In today's digital age, a marketing team faces the challenge of understanding a diverse customer
        base to tailor campaigns effectively. With data from various touchpoints, including online
        purchases, social media interactions, and customer service engagements, the team needs a
        sophisticated approach to segment customers accurately and efficiently.`,
    contribution: `EnhancifAI leverages advanced AI algorithms to analyze customer interaction data, identifying
        distinct segments based on behavior, preferences, and purchase history. This enables the creation
        of targeted marketing strategies that signiﬁcantly improve campaign effectiveness and customer
        engagement. By utilizing tailored prompts, segmentation captures dynamic customer interactions,
        facilitating personalized marketing efforts that resonate with each segment.`,
  },
  {
    id: 1,
    title: "Customer Feedback Analysis",
    scenario: `A company collects a vast amount of feedback across multiple channels, including social media,
        customer surveys, and support tickets. The challenge lies in efficiently categorizing this feedback
        and extracting actionable insights to improve products and services, a task that traditional manual
        methods struggle to accomplish due to the volume and complexity of the data.`,
    contribution: `EnhancifAI automates the classiﬁcation and sentiment analysis of customer feedback, enabling
        companies to quickly gauge customer sentiment and identify areas for improvement. This
        comprehensive analysis enhances product development and customer service strategies, ensuring
        that the company remains responsive to customer needs and market trends. Real-time analysis
        capabilities allow for agile adjustments to strategies, maintaining a competitive edge.`,
  },
  {
    id: 2,
    title: "Enhancing Patient Behavioral Health Programs",
    scenario: `A healthcare provider seeks to enhance the effectiveness of its behavioral health programs, facing
        the challenge of personalizing interventions for patients with chronic health issues. Traditional
        methods, which often rely on self-reported data, fail to capture the nuanced behaviors or triggers
        speciﬁc to individual patients, making it difficult to tailor programs effectively.`,
    contribution: `By analyzing healthcare data row by row, EnhancifAI offers personalized program
        recommendations, identifying patient behaviors that contribute to chronic health issues. This data-driven approach enables the creation of targeted interventions, signiﬁcantly improving patient
        outcomes. Continuous analysis and adaptation of health plans ensure they remain effective and
        responsive to patient needs, enhancing overall program effectiveness.`,
  },
  {
    id: 3,
    title: "Personalized Student Learning Pathways",
    scenario: `An educational institution aims to move beyond traditional grading systems to understand
        students' unique learning styles, strengths, and areas for improvement. The goal is to use this
        understanding to recommend personalized learning pathways, resources, and interventions,
        thereby improving academic outcomes and engagement in a nuanced and supportive manner.`,
    contribution: `EnhancifAI analyzes educational data at an individual level, delivering personalized assessments
        and learning recommendations. This facilitates the creation of dynamic, personalized learning
        pathways that evolve with students' needs, fostering an environment of continuous engagement
        and improvement. The approach enhances academic success and personal growth, preparing
        students for future challenges.`,
  },
  {
    id: 4,
    title: "Streamlining Research Data Analysis",
    scenario: `A research team embarks on a large-scale environmental study, collecting data from diverse
        sources such as satellite imagery, ground sensor readings, and historical climate records. The
        challenge is to efficiently classify this data into meaningful categories and identify anomalies that
        could indicate signiﬁcant environmental changes, a task that requires sophisticated analysis tools.`,
    contribution: `EnhancifAI streamlines the research process by providing granular classiﬁcation and anomaly
        detection, enhancing the accuracy and efficiency of environmental studies. Automated analysis
        tools accelerate research timelines, allowing researchers to focus on interpreting ﬁndings and
        developing solutions. This approach enriches research outcomes with precise, data-driven
        insights, advancing environmental understanding and conservation efforts.`,
  },
  {
    id: 5,
    title: "Enhancing Employee Development with AI-Driven Insights",
    scenario: `A Human Resources (HR) department aims to optimize its employee development programs by
        leveraging annual performance evaluations. The challenge is to identify strengths, areas forimprovement, and potential career advancement opportunities for each employee in a way that
        traditional analysis methods, which are often time-consuming, cannot adequately address.`,
    contribution: `EnhancifAI processes performance evaluation data row by row, enabling personalized development
        recommendations for each employee. This targeted approach maximizes employee engagement
        and retention by aligning development plans with individual strengths and career aspirations.
        Continuous learning and improvement are facilitated, aligning employee growth with organizational
        goals and fostering a culture of excellence.`,
  },
  {
    id: 6,
    title: "Demand Forecasting for Amazon Sellers",
    scenario: `An Amazon seller specializing in home and kitchen gadgets faces the dual challenge of keeping
        best-selling items in stock and managing the inventory of slower-moving products. Seasonal buying
        patterns, Amazon search algorithm changes, and competitor pricing strategies further complicate
        inventory management, necessitating a predictive approach to optimize stock levels.`,
    contribution: `EnhancifAI leverages detailed sales data and external market factors to provide precise demand
        forecasts and inventory recommendations for Amazon sellers. This solution helps align inventory
        levels with consumer demand, optimizing stock management and reducing storage costs.
        Enhanced forecasting accuracy supports strategic decision-making, driving sales and proﬁtability
        in the competitive Amazon marketplace.`,
  },
  {
    id: 7,
    title: "Excel Replacement: Financial Modeling and Forecasting",
    scenario: `A ﬁnancial analyst regularly relies on complex Excel models to forecast quarterly revenue and
        analyze ﬁnancial scenarios. The manual data entry and formula adjustments required by these
        models are time-consuming and prone to errors, presenting a signiﬁcant challenge in maintaining
        accuracy and efficiency in ﬁnancial forecasting.`,
    contribution: `EnhancifAI streamlines the ﬁnancial analysis process, allowing analysts to upload ﬁnancial data
        directly for AI-driven forecasting and scenario analysis. This approach reduces reliance on manual
        Excel modeling, saving time and enhancing the accuracy of ﬁnancial forecasts. Strategic planningand decision-making are empowered with deep, data-driven insights, enhancing ﬁnancial
        performance and strategic agility.`,
  },
  {
    id: 8,
    title: "Monitoring Monthly Transaction Volumes",
    scenario: `A ﬁnancial services company tracks monthly transactions across various metrics, such as loan
        disbursements, account openings, and customer inquiries. Understanding whether these volumes
        fall within a normal range is crucial for maintaining operational stability and identifying potential
        issues or opportunities, a task made challenging by the sheer volume and complexity of the data.`,
    contribution: `EnhancifAI offers a precise solution for monitoring transaction volumes, analyzing monthly data
        across different metrics to assess whether volumes are within expected ranges. This analysis helps
        identify deviations, ensuring business stability and supporting proactive management of
        transaction volumes. Customized alerts and predictive insights maintain operational efficiency,
        safeguarding against potential disruptions.`,
  }
];


const page = () => {

  const [allCards, setAllCards] = useState<CardType[]>(Cards)


  const pathname = usePathname()
  const idString = pathname.split('/')[2];
  const id: number = Number(idString);


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
            {allCards[id]?.title}
            </div>
          </div>
        </div>
      </div>
      <div className=" w-9/12 my-10 text-secondary-500 font-light flex flex-col gap-3">
        <div className=" font-bold">Scenario:</div>
        <div>
        {allCards[id]?.scenario}
        </div>
        <div className=" font-bold">EnhancifAI's Contribution:</div>
        <div>
        {allCards[id]?.contribution}
        </div>
      </div>
    </div>
  );
};

export default page;
