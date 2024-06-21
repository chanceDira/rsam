"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

type CardType = {
  id: number;
  title: string;
  scenario: string;
  contribution: string;
};

export const cards: CardType[] = [
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
  },
];

const Ways = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && !hasAnimated) {
      controls.start({ scale: 1 });
      setHasAnimated(true);
    }
  }, [controls, inView, hasAnimated]);

  const initialScale =
    typeof window !== "undefined" && window.innerWidth <= 768 ? 1 : 0;

  return (
    <div
      ref={ref}
      id="usecase"
      className="flex flex-col py-12 relative items-center justify-between w-11/12 md:w-11/12  "
    >
      <div className="font-bold  text-secondary-500">
        Example <span className=" text-primary-500">Use Cases</span>
      </div>
      <div className="md:w-4/5 text-secondary-500 text-lg  mt-8 md:text-center  md:text-2xl font-medium">
        Examples of how EnhancifAI can propel your business forward
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5 md:mt-12 ">
        <div className=" grid grid-cols-1 gap-4">
          <motion.div
            ref={ref}
            animate={controls}
            initial={{ scale: initialScale }}
            transition={{ duration: 0.5 }}
            className=" bg-white shadow-md flex flex-col  justify-between  p-8 rounded-2xl text-secondary-500"
          >
            <div className=" flex flex-col">
              <div className="   font-semibold text-xl my-2">
                Enhancing Customer Service with AI-Powered Text Classification
              </div>
              <div className="   font-light text-sm">
                EnhancifAI transforms customer service for small businesses by
                efficiently processing and classifying a wide range of customer
                messages, ensuring every communication is accurately understood
                and actioned.{" "}
              </div>
            </div>
            <div className="font-bold mt-6 text-primary-500 cursor-pointer">
              <Link href={`/usecase/1`}>
                <span>Learn more</span>
              </Link>
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            animate={controls}
            initial={{ scale: initialScale }}
            transition={{ duration: 0.5 }}
            className=" bg-white shadow-md flex flex-col  justify-between  p-8 rounded-2xl text-secondary-500"
          >
            <div className=" flex flex-col">
              <div className=" font-semibold text-xl my-2">
                Predictive CLV Segmentation for Email Campaigns
              </div>
              <div className="   font-light text-sm ">
                EnhancifAI's approach to predictive CLV segmentation offers
                e-commerce businesses a powerful tool for enhancing marketing
                ROI and fostering customer loyalty.
              </div>
            </div>
            <div className="font-bold mt-6 text-primary-500 cursor-pointer">
              <Link href={`/usecase/2`}>
                <span>Learn more</span>
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          animate={controls}
          initial={{ scale: initialScale }}
          transition={{ duration: 0.5 }}
          className=" flex justify-center items-center"
        >
          <img src="usecase.svg" alt="" />
        </motion.div>

        <div className=" grid grid-cols-1 gap-4">
          <motion.div
            ref={ref}
            animate={controls}
            initial={{ scale: initialScale }}
            transition={{ duration: 0.5 }}
            className=" bg-white shadow-md flex flex-col  justify-between  p-8 rounded-2xl text-secondary-500"
          >
            <div className=" flex flex-col">
              <div className=" font-semibold text-xl my-2">
                Unlocking Advanced Seasonal Insights for Retail Inventory with
                EnhancifAI
              </div>
              <div className="   font-light text-sm">
                EnhancifAI empowers retailers, especially those without
                technical expertise, to derive advanced insights from basic
                sales data.
              </div>
            </div>
            <div className="font-bold  mt-6 text-primary-500 cursor-pointer">
              <Link href={`/usecase/3`}>
                <span>Learn more</span>
              </Link>
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            animate={controls}
            initial={{ scale: initialScale }}
            transition={{ duration: 0.5 }}
            className=" bg-white shadow-md flex flex-col  justify-between  p-8 rounded-2xl text-secondary-500"
          >
            <div className=" flex flex-col">
              <div className=" font-semibold text-xl my-2">
                Optimizing Email Marketing with EnhancifAI's Engagement Scoring
              </div>
              <div className="   font-light text-sm">
                EnhancifAI's has ability to transform raw email interaction data
                into strategic insights for email marketing optimization.
              </div>
            </div>
            <div className="font-bold mt-6 text-primary-500 cursor-pointer">
              <Link href={`/usecase/4`}>
                <span>Learn more</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Ways;
