import Footer from "@/containers/Footer";
import Navbar from "@/containers/Navbar";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center w-full bg-primary-100 ">
      <div className=" bg-primary-500 w-full flex justify-center items-center">
        <div className=" hidden w-9/12 my-16">
          <Link href="/">
            <div className=" flex flex-row cursor-pointer">
              <span>{/* <img src="ep_back.svg" alt="" /> */}</span>
              <span className=" text-white font-bold">{"<-"} Back To Home</span>
            </div>
          </Link>

          <div className=" flex flex-row items-center  my-6">
            <div className=" text-white   font-bold text-4xl">
              Privacy Policy for EnhancifAI
            </div>
          </div>
        </div>
      </div>
      <Navbar />
      <div className=" w-9/12 my-10 text-secondary-500 font-light flex flex-col gap-3 mt-40">
        <div className=" text-4xl font-bold flex justify-center items-center">
          <span className=" text-primary-500 mr-2">Privacy Policy </span> For
          EnhancifAI
        </div>
        <div className="  w-4/5 text-center text-lg mx-auto my-4">
          Welcome to EnhancifAI, accessible from EnhancifAI.com. Your privacy is critically important to us, and this policy is designed to inform you about how we collect, use, and protect your information.
        </div>
        <div className="  text-sm mx-auto">
          Eﬀective Date: February 20, 2024
        </div>

        <div className=" flex flex-col md:flex-row w-full gap-8 text-secondary-500 mt-20">
          <div className=" flex flex-row   text-xl  w-full md:w-1/3">
            <div className=" flex flex-row  ">
              <div className=" p-2 ">
                <img src="d_tick_circle.svg" alt="" />
              </div>
              <div>Information Collection and Use</div>
            </div>
          </div>
          <div className=" flex flex-col w-2/3">
            <div className=" text-lg">Types of Data Collected:</div>
            <div>
              <ul>
                <li className="  mt-4">
                  <div className="mt-2">
                    <span className="  ">
                      Personal Identiﬁcation Information:
                    </span>{" "}
                    We may ask for personal information, such as your name and
                    email address, for the purposes of providing our service,
                    identifying and communicating with you, responding to your
                    requests/inquiries, and improving our services.
                  </div>
                </li>
                <li className=" mt-2">
                  <div className="mt-2">
                    <span className=" ">Usage Data:</span> We collect
                    information that your browser sends whenever you visit our
                    service. This may include details like your computer's
                    Internet Protocol (IP) address, browser type, browser
                    version, our service pages that you visit, the time and date
                    of your visit, the time spent on those pages, and other
                    diagnostic data.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full gap-8 text-secondary-500 mt-10">
          <div className=" flex flex-row   text-xl  w-full md:w-1/3">
            <div className=" flex flex-row  ">
              <div className=" p-2 ">
                <img src="d_tick_circle.svg" alt="" />
              </div>
              <div>How We Use Your Information</div>
            </div>
          </div>
          <div className=" flex flex-col w-2/3">
            <div>We use the collected data for various purposes:</div>
            <div>
              <ul>
                <li className="  mt-4">
                  <div className="mt-2">
                    To provide and maintain our service
                  </div>
                </li>
                <li className=" mt-2">
                  <div className="mt-2">
                    To notify you about changes to our service
                  </div>
                </li>
                <li className=" mt-2">
                  <div className="mt-2">
                    To allow you to participate in interactive features when you
                    choose to do so
                  </div>
                </li>
                <li className=" mt-2">
                  <div className="mt-2">
                    To provide customer care and support
                  </div>
                </li>
                <li className=" mt-2">
                  <div className="mt-2">
                    To provide analysis or valuable information so that we can
                    improve the service
                  </div>
                </li>
                <li className=" mt-2">
                  <div className="mt-2">
                    To monitor the usage of the service
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className=" flex flex-col md:flex-row w-full gap-8 text-secondary-500 mt-10">
          <div className=" flex flex-row   text-xl  w-full md:w-1/3">
            <div className=" flex flex-row  ">
              <div className=" p-2 ">
                <img src="d_tick_circle.svg" alt="" />
              </div>
              <div>Data Retention</div>
            </div>
          </div>
          <div className="w-2/3">
            We retain your Personal Identiﬁcation Information only for as long
            as is necessary for the purposes set out in this Privacy Policy. We
            will retain and use your information to the extent necessary to
            comply with our legal obligations, resolve disputes, and enforce our
            policies.
          </div>
        </div>

        <div className=" flex flex-col md:flex-row w-full gap-8 text-secondary-500 mt-10">
          <div className=" flex flex-row   text-xl  w-full md:w-1/3">
            <div className=" flex flex-row  ">
              <div className=" p-2 ">
                <img src="d_tick_circle.svg" alt="" />
              </div>
              <div>Transfer of Data</div>
            </div>
          </div>
          <div className="w-2/3">
            Your information, including Personal Data, may be transferred to —
            and maintained on — computers located outside of your state,
            province, country, or other governmental jurisdiction where the data
            protection laws may diﬀer from those from your jurisdiction.
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full gap-8 text-secondary-500 mt-10">
          <div className=" flex flex-row   text-xl  w-full md:w-1/3">
            <div className=" flex flex-row  ">
              <div className=" p-2 ">
                <img src="d_tick_circle.svg" alt="" />
              </div>
              <div>Disclosure of Data</div>
            </div>
          </div>
          <div className=" flex flex-col w-2/3">
            <div>
              We may disclose your personal information in the good faith belief
              that such action is necessary to:
            </div>
            <div>
              <ul>
                <li className="  mt-4">
                  <div className="mt-2">To comply with a legal obligation</div>
                </li>
                <li className=" mt-2">
                  <div className="mt-2">
                    To protect and defend the rights or property of EnhancifAI
                  </div>
                </li>
                <li className=" mt-2">
                  <div className="mt-2">
                    To prevent or investigate possible wrongdoing in connection
                    with the service
                  </div>
                </li>
                <li className=" mt-2">
                  <div className="mt-2">
                    To protect the personal safety of users of the service or
                    the public
                  </div>
                </li>
                <li className=" mt-2">
                  <div className="mt-2">To protect against legal liability</div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className=" flex flex-col md:flex-row w-full gap-8 text-secondary-500 mt-10">
          <div className=" flex flex-row   text-xl  w-full md:w-1/3">
            <div className=" flex flex-row  ">
              <div className=" p-2 ">
                <img src="d_tick_circle.svg" alt="" />
              </div>
              <div>Changes to This Privacy Policy</div>
            </div>
          </div>
          <div className="w-2/3">
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
            You are advised to review this Privacy Policy periodically for any
            changes.
          </div>
        </div>

        <div className=" flex flex-col md:flex-row w-full gap-8 text-secondary-500 mt-10">
          <div className=" flex flex-row   text-xl  w-full md:w-1/3">
            <div className=" flex flex-row  ">
              <div className=" p-2 ">
                <img src="d_tick_circle.svg" alt="" />
              </div>
              <div>Contact Us</div>
            </div>
          </div>
          <div className="w-2/3">
            If you have any questions about this Privacy Policy, please contact
            us via info@enhancifai.com
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
