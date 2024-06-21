import Question from "@/components/Question";
import Link from "next/link";
import React from "react";

interface questionProps {
  question: string;
  answer: string;
}

export const Questions: questionProps[] = [
  {
    question: "What is EnhancifAI?",
    answer: `EnhancifAI is an AI-driven platiorm that transforms, enhances, and creates new data from your existing
        datasets. It applies row-based AI operations to generate actionable insights and automate data
        processing tasks, making data analysis more eﬃcient and comprehensive.`,
  },
  {
    question: `How does EnhancifAI work?`,
    answer: `Users upload their data in CSV, Excel, or Google Sheets format along with a custom prompt ﬁle.
        EnhancifAI then processes each row of the dataset based on these prompts, performing speciﬁed
        operations such as analysis, transformation, and the creation of new data columns.`,
  },
  {
    question: `What types of data can EnhancifAI process?`,
    answer: `EnhancifAI is versatile and can process data from any source as long as it is structured in a compatible
        format (CSV, Excel, Google Sheets). This includes ﬁnancial data, customer feedback, operational metrics,
        and much more.`,
  },
  {
    question: `Can EnhancifAI handle large datasets?`,
    answer: `While EnhancifAI is designed with scalability in mind, the actual performance with large datasets may
        vary depending on the complexity of the tasks and the capabilities of the underlying AI platform. We are
        commited to optimizing performance and accommodating large volumes of data eﬀectively.`,
  },
  {
    question: `How does EnhancifAI ensure data privacy and security?`,
    answer: `Data privacy and security are paramount at EnhancifAI. We employ robust encryption for data in transit
        and at rest, adhere to strict access controls, and comply with relevant data protection regulations to
        safeguard your information.`,
  },
  {
    question: `Can I automate Excel tasks with EnhancifAI?`,
    answer: `Yes, one of EnhancifAI's powerful features is its ability to generate Excel formulas based on your data
        analysis needs. These formulas can automate tasks like calculating growth rates, adjusting for seasonal
        trends, and predicting future metrics directly within your Excel datasets.`,
  },
  {
    question: `How can EnhancifAI improve my data analysis process?`,
    answer: `EnhancifAI enhances your data analysis by adding depth and precision to your datasets. It automates the
        generation of insights and the creation of new data columns, enabling more accurate models and
        informed decision-making. Its row-based operations oﬀer tailored analysis and scalability, making it a
        valuable tool across various domains.`,
  },
  {
    question: `Who can beneﬁt from using EnhancifAI?`,
    answer: `EnhancifAI is designed for professionals and data scientists across all industries, including ﬁnance,
        healthcare, retail, academia, and more. Anyone looking to leverage AI for data analysis, automate Excel
        tasks, or gain deeper insights from their data can beneﬁt from EnhancifAI.`,
  },
  {
    question: `How do I create and format the prompt ﬁle for EnhancifAI?`,
    answer: `Creating a prompt ﬁle is a crucial step in utilizing EnhancifAI to analyze your data. The prompt ﬁle
        instructs the plaftorm on how to process each row of your dataset. For detailed instructions, examples,
        and best practices on creating an eﬀective prompt ﬁle, please visit our dedicated page: How to Build and
        Format Your Prompt File for EnhancifAI.`,
  },
  {
    question: `Is my uploaded data retained on EnhancifAI's servers after processing?`,
    answer: `No, your uploaded data is not retained on our servers. At EnhancifAI, we prioritize your data's privacy
        and security. Once your data has been processed and the results have been delivered to you, the
        uploaded data is automatically deleted from our servers. This ensures that your information remains
        conﬁdential and is only used for the purpose of providing the services you've requested.`,
  },
  {
    question: `How do I get started with EnhancifAI?`,
    answer: `Getting started is simple. Sign up on our plaftorm, upload your data ﬁle along with a custom prompt ﬁle
        detailing the operations you want to perform, and let EnhancifAI do the rest. For detailed instructions
        and tips on creating eﬀective prompts, visit our Getting Started guide on the website.`,
  },
];

const FAQs = () => {
  return (
    <div
    id="faq"
    className=" flex flex-col py-12 relative items-center justify-between w-11/12 md:w-3/5 mt-72 md:mt-0  "
  >
    <div className="font-semibold  text-secondary-500">
      <span className=" text-primary-500 mr-2">FAQ</span>
    </div>
    <div className="md:w-4/5 font-medium text-secondary-500 text-lg md:text-center my-6  md:text-2xl">
      Get answers to popular user questions in this section
    </div>
    <div className=" bg-white rounded-2xl p-5 flex flex-col   w-full h-96 md:h-96 overflow-auto items-center  md:mt-10 ">
      {Questions.map((question: questionProps, index: number) => (
        <div key={index} className=" w-full mt-4">
          <Question question={question.question} answer={question.answer} />
        </div>
      ))}
    </div>
    <Link href="/get-started">
      <div className="mt-7 text-white w-fit flex flex-row items-center gap-2 text-sm font-semibold bg-primary-500 px-7 py-3 cursor-pointer rounded-full">
        <div>Learn more</div>
        <div>
          <img src="rightarrow.png" alt="" />
        </div>
      </div>
    </Link>
  </div>
  );
};

export default FAQs;
