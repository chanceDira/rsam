"use client";

import Notify from "@/components/Notify";
import ExecutionNav from "@/containers/ExecutionNav";
import Footer from "@/containers/Footer";
import Footerv2 from "@/containers/Footerv2";
import Navbar from "@/containers/Navbar";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Toaster } from "react-hot-toast";
import { useRouter } from 'next/navigation'
import Navbarv2 from "@/containers/Navbarv2";
import { loadGoogleAnalytic } from "@/utils/GoogleAnalytics";



interface AcceptedFile {
  name: string;
  type: string;
  path: string | undefined;
}

type AcceptedFileTypes = ".csv";

interface ErrorType {
  response?: {
    data?: {
      detail?: string;
    };
  };
}

const Execution = () => {
  const router = useRouter();
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [engine, setEngine] = useState("gpt-3.5-turbo");
  const [maxRecords, setMaxRecords] = useState(false);
  const [dataFile, setDataFile] = useState<any | null>(null);
  const [promptFile, setPromptFile] = useState<any | null>(null);
  const [fileUrl, setFileUrl] = useState("");
  const [processedRecords, setProcessedRecords] = useState<number>(0);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [totalRecords, setTotalRecords] = useState<number>(0);
  const [totalTokensSum, setTotalTokensSum] = useState<number>(0);
  const [showProcessedData, setShowProcessedData] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [fileType, setFileType] = useState("");
  const [fileExtension, setFileExtension] = useState("");
  const [fileName, setFileName] = useState("");
  const [showOpenAPIkeyInput, setShowOpenAPIKeyInput] = useState(false);
  const [openAPIKey, setOpenAPIKey] = useState("");

  const [progress, setProgress] = useState(0);
  const [remark, setRemark] = useState("0% Completed.");
  const [status, setStatus] = useState("Loading");
  const [showPromptForm, setShowPromptForm] = useState(false);
  const [showAISettingModel, setShowAISettingModel] = useState(false)
  const [savingAISetting, setSavingAISetting] = useState(false)
  const [executing, setExecuting] = useState(false)
  const [isAdvanced, setIsAdvanced] = useState(false)

  const handleDataFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("event.target.files?.[0]: ", event.target.files?.[0]);
    setDataFile(event.target.files?.[0]);
  };

  const handlePromptFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPromptFile(event.target.files?.[0]);
  };

  const handleShowOpenAPIKeyInput = () => {
    setShowOpenAPIKeyInput(!showOpenAPIkeyInput);
  };

  const handleShowAISettingModel = () => {
    setShowAISettingModel(!showAISettingModel)
  }


  const handleIsAdvanced = () => {
    setIsAdvanced(!isAdvanced)
    setShowPromptForm(false);
  }



  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "text/*": [".csv", ".xlsx"],
    },
    onDrop: (acceptedFiles) => {
      console.log("acceptedFiles[0]: ", acceptedFiles[0]);
      console.log("ext: ", acceptedFiles[0].name.split(".")[1]);
      setDataFile(acceptedFiles[0]);
      setFileType(acceptedFiles[0].type);
      setFileExtension(acceptedFiles[0].name.split(".")[1]);
      setFileName(acceptedFiles[0].name.split(".")[0]);
    },
  });

  const { getRootProps: getRootPropsv2, getInputProps: getInputPropsv2 } =
    useDropzone({
      accept: {
        "text/*": [".csv", ".txt", ".xlsx", ".xlsm", ".xls"],
      },
      onDrop: (acceptedFiles) => {
        console.log("acceptedFiles[0]: ", acceptedFiles[0]);
        setPromptFile(acceptedFiles[0]);
      },
    });

  const handleRecordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMaxRecords(event.target.checked);
  };

  const handleAISettings = async () => {
    // if(openAPIKey == '') {
    //   Notify('Please provide your Open API Key', 'info')
    //   return;
    // }

    if (engine == '' || openAPIKey == '') {
      Notify("Please provide your data", "info");
      return;
    }
   

    try {
      setStatus("Processing");
      setSavingAISetting(true)
      const formData = new FormData();

      formData.append("ai_engine", engine);
      formData.append("api_key", openAPIKey);

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/admin/ai-settings`,
        formData,
        {
          headers: {
            accept: "application/json",
            "x-api-key": `${process.env.NEXT_PUBLIC_API_TOKEN}`,
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            token: window.localStorage.getItem("token")
          },
        }
      );

      if(response) {
        // console.log('response ai setting: ', response)
        setShowAISettingModel(false)
        setEngine('gpt-3.5-turbo')
        setOpenAPIKey('')
        Notify('Success', 'success')
      setSavingAISetting(false)
      }

  


   
   

      // console.log('formDta', formData);
      // return 'response';
    } catch (error: ErrorType | any) {
      console.log("error", error);
      Notify(error?.response?.data?.detail, "error");
      setLoading(false);
      setSavingAISetting(false)
    }
  };

  const executeUpload = async () => {
    // if(openAPIKey == '') {
    //   Notify('Please provide your Open API Key', 'info')
    //   return;
    // }

    if (dataFile == null || promptFile == null) {
      Notify("Please select file(s)", "info");
      return;
    }
    setShowProcessedData(false);
    setLoading(true);

    try {
      setStatus("Processing");
      const formData = new FormData();

      formData.append("data_file", dataFile);
      formData.append("prompt_file", promptFile);
      formData.append("max_records", `${maxRecords}`);
      // formData.append("engine", engine);
      // formData.append("openai_api_key", openAPIKey);

      const responsev2 = await axios.post(
        // `https://enhancifai-backend-vmkobip5sa-uc.a.run.ap
        `${process.env.NEXT_PUBLIC_BASE_URL}/execution/upload/`,
        formData,
        {
          headers: {
            accept: "application/json",
            // "x-api-key": `vyNfHcGdsHplKuyBPVfPJgcnUBtZonYg`,
            "x-api-key": `${process.env.NEXT_PUBLIC_API_TOKEN}`,
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Origin": "*",
            token: window.localStorage.getItem("token")
          },
        }
      );

      if (responsev2?.status == 401) {
        Notify("Session expired, Please login again", "error");
        setTimeout(() => {
          window.localStorage.clear()
          router.push('/signin')
        }, 3000);
        return;
      }

      console.log('responsev2: ', responsev2)


      // progressFormData.append("run_id", responsev2?.data?.run_id);

      // console.log("run_id", responsev2?.data?.run_id);
      const progressFormData = new FormData();
      // progressFormData.append('run_id', '51');
      progressFormData.append("run_id", responsev2?.data?.run_id);
      console.log("run_id", responsev2?.data?.run_id);

      let response: any;
      let intervalId: any;

      // Start the interval
      intervalId = setInterval(async () => {
        try {
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_BASE_URL}/execution/progress`,
            progressFormData,
            {
              headers: {
                accept: "application/json",
                "x-api-key": `${process.env.NEXT_PUBLIC_API_TOKEN}`,
                "Content-Type": "application/json",
                token: window.localStorage.getItem("token")
              },
            }
          );


      if (response?.status == 401) {
        Notify("Session expired, Please login again", "error");
        setTimeout(() => {
          window.localStorage.clear()
          router.push('/signin')
        }, 3000);
        return;
      }

          console.log("response progress: ", response?.data);
          if (response?.data?.progress) {
            setProgress(response?.data?.progress);
            // setProgress(parseInt(response?.data?.progress));
          } else {
            setProgress(0);
          }
          setRemark(response?.data?.remark);
          setStatus(
            response?.data?.status == "new"
              ? "Processing"
              : response?.data?.status
          );

          if (response?.data?.status === "completed") {
            // Handle the response data for completed status
            setFileUrl(response?.data?.file_url);
            setProcessedRecords(response?.data?.results?.processed_records);
            setTimeElapsed(response?.data?.results?.time_elapsed);
            setTotalRecords(response?.data?.results?.total_records);
            setTotalTokensSum(response?.data?.results?.total_tokens_sum);
            setShowProcessedData(true);
            Notify("Successfully Processed", "success");

            // Stop the interval when status is completed
            clearInterval(intervalId);
            setDataFile(null);
            setPromptFile(null);
            setRemark("0% Completed.");
            setProgress(0);
            setLoading(false);

          } else {
            // Handle the response data for other statuses
            console.log("response: ", response?.data);
            setDataFile(null);
            setPromptFile(null);
          }
        } catch (error) {
          console.error("Error", error);
          setLoading(false);
          Notify("Please check the types of your files", "error");
          clearInterval(intervalId);
          setDataFile(null);
          setPromptFile(null);
          setProgress(0);
          setRemark("0% Completed.");
        }
      }, 1000);

      // console.log('formDta', formData);
      // return 'response';
    } catch (error: ErrorType | any) {
      console.log("error", error);
      Notify(error?.response?.data?.detail, "error");
      setLoading(false);
      if(error?.response?.status == 401) {
        setTimeout(() => {
          router.push('/login')
        }, 1000)
      }
    
    }
  };

  const handleDownload = async (e: any) => {
    e.preventDefault();
    console.log("fileUrl: ", fileUrl);
    try {
      const response = await axios.get(fileUrl, {
        headers: {
          accept: "application/json",
          "x-api-key": `${process.env.NEXT_PUBLIC_API_TOKEN}`,
          "Access-Control-Allow-Origin": "*",
          token: window.localStorage.getItem("token")
        },
        responseType: "arraybuffer",
      });

      if (response) {
        const blob = new Blob([response.data], { type: fileType });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${fileName}_processed`;
        a.click();
        window.URL.revokeObjectURL(url);
      }
    } catch (error) {
      console.log(error);
      Notify("Something went wrong", "error");
    }
  };

  const handleShowPromptForm = () => {
    setShowPromptForm(!showPromptForm);
  };

  function formatTime(seconds: number) {
    // Calculate hours, minutes, and remaining seconds
    let hours: string | number = Math.floor(seconds / 3600);
    let minutes: string | number = Math.floor((seconds % 3600) / 60);
    let remainingSeconds: string | number = Math.round(seconds % 60);

    // Add leading zeros if necessary
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    remainingSeconds =
      remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;

    // Return formatted time
    return hours + ":" + minutes + ":" + remainingSeconds;
  }


  const handleDownloadTemplates = async (e: any) => {
    e.preventDefault();
    // console.log("fileUrl: ", fileUrl);
    try {
      const response = await axios.get(
        // `https://enhancifai-backend-vmkobip5sa-uc.a.run.app/downloads/prompts-template`,
        `${process.env.NEXT_PUBLIC_BASE_URL}/downloads/prompts-template`,
        {
          headers: {
            accept: "application/json",
            // "x-api-key": `vyNfHcGdsHplKuyBPVfPJgcnUBtZonYg`,
            "x-api-key": `${process.env.NEXT_PUBLIC_API_TOKEN}`,
            "Access-Control-Allow-Origin": "*",
            token: window.localStorage.getItem("token")
          },
          responseType: "arraybuffer",
        }
      );

      if (response?.status == 401) {
        Notify("Session expired, Please login again", "error");
        setTimeout(() => {
          window.localStorage.clear()
          router.push('/signin')
        }, 3000);
        return;
      }


      // if (response) {
      //   const blob = new Blob([response.data], { type: "text/csv" });
      //   const url = window.URL.createObjectURL(blob);
      //   const a = document.createElement("a");
      //   a.href = url;
      //   a.download = `Sample_prompt`;
      //   a.click();
      //   window.URL.revokeObjectURL(url);
      // }
      if (response) {
        const arrayBuffer = response.data;
        const data = new Uint8Array(arrayBuffer);
        const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `Sample_prompt.xlsx`; 
        a.click();
        window.URL.revokeObjectURL(url);
      }
    } catch (error) {
      console.log(error);
      Notify("Something went wrong", "error");
    }
  };

  const containerWidth = 400



  return (
    <>
      <Toaster position="top-right" reverseOrder={true} />
      <div className=" relative flex min-h-screen flex-col items-center ju w-full bg-primary-100">
        <Navbarv2 />

        <div className=" z-20 font-bold text-center  text-primary-500 text-3xl mt-44 mb-6">
          EnhancifAI Data Submission Portal
        </div>

        <div className=" hidden bg-gray-200 border-b-2 border-secondary-200 w-2/5 ">
          <div className=" flex flex-col justify-center items-center m-4">
            <div className=" flex flex-col gap-8 md:gap-2 md:flex-row items-center justify-between w-full ">
              <div className="flex flex-row items-center gap-4">
                <div className="flex flex-col-reverse items-center gap-2">
                  <select
                    className="p-2 text-white bg-primary-500 px-4 rounded-md  outline-none"
                    value={engine}
                    onChange={(e) => setEngine(e.target.value)}
                  >
                    {/* <option value="">AI Model</option> */}
                    <option value="gpt-3.5-turbo">GPT-3.5</option>
                    <option value="gpt-4-turbo-preview">GPT-4</option>
                    <option value="gemini">Gemini</option>
                  </select>
                  <label
                    htmlFor=""
                    className="ml-2 text-secondary-500 font-bold"
                  >
                    AI Model
                  </label>
                </div>
                <div className=" hidden">
                  <select className=" p-2">
                    <option value="option1">Rows</option>
                    <option value="option2">1</option>
                    <option value="option3">2</option>
                    <option value="option3">3</option>
                    <option value="option3">4</option>
                    <option value="option3">5</option>
                    <option value="option3">6</option>
                    <option value="option3">7</option>
                    <option value="option3">8</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="flex flex-col-reverse gap-2 items-center justify-center">
                  <input
                    type="checkbox"
                    checked={maxRecords}
                    onChange={handleRecordChange}
                  />
                  <span className=" text-secondary-500 ml-2 font-bold">
                    Limit to 10 Rows
                  </span>
                </label>
              </div>

              <div className=" flex flex-col gap-2 ">
                <div className="flex flex-row gap-4">
                  <div
                    onClick={handleShowOpenAPIKeyInput}
                    className={`${
                      openAPIKey == "" ? "bg-red-500" : "bg-primary-500"
                    }  px-4 py-2 rounded-md cursor-pointer text-white`}
                  >
                    Update API Key
                  </div>
                </div>

                <div
                  className={`${
                    showOpenAPIkeyInput ? "" : "hidden"
                  } flex flex-row items-center gap-4 mt-2`}
                >
                  <input
                    type="text"
                    name={openAPIKey}
                    onChange={(e) => setOpenAPIKey(e.target.value)}
                    className=" outline-none py-2 px-4 rounded-md text-xs"
                    placeholder="Please type your Open API Key"
                  />
                  <div
                    onClick={() => {
                      if (openAPIKey == "") {
                        Notify("Please type your Open API Key", "error");
                      } else {
                        setShowOpenAPIKeyInput(false);
                      }
                    }}
                    className="bg-green-500 px-4 py-1 rounded-md cursor-pointer text-white"
                  >
                    Save
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="  z-30 w-10/12 md:w-2/3  mt-10 mb-20 flex flex-col justify-center items-center gap-4 ">
          <div className="  w-full flex justify-end">
          
          <div className=" flex flex-col md:flex-row gap-4">
            <div className=" flex flex-row justify-center items-center">
              <span className=" text-secondary-450">Getting started? D/L a sample prompt file</span>
              <span><img src="brightarrow.svg" alt="" className=" h-3 ml-2" /></span>
            </div>
            <div>
            <div className=" w-fit mx-auto hover:shadow-lg  cursor-pointer border  from-[#8FEEFC] to-[#0048FF] bg-gradient-to-r rounded-full p-0.5 text-sm  text-black">
                      <div
                        onClick={handleDownloadTemplates}
                        className=" bg-white px-6 py-2 text-secondary-400 rounded-full"
                      >
                        D/L sample prompt file
                      </div>
                    </div>
            </div>
          </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-[400px] h-[250px] md:w-[500px] md:h-[300px]  bg-opacity-50 rounded-2xl p-4">
              <div
                {...getRootProps()}
                className=" cursor-pointer flex flex-col pt-10  border-2 bg-white border-primary-500 rounded-2xl border-dashed items-center h-full "
              >
                {/* <input type="file" onChange={handleDataFileChange} /> */}
                <input {...getInputProps()} />
                <div className=" text-black  my-2">Data File</div>
                <div>
                  <img src="Vector.svg" alt="" />
                </div>
                <div className="   cursor-pointer rounded-md  text-center text-secondary-400">
                  {dataFile != null
                    ? dataFile?.name
                    : "Choose a file or drag and drop"}
                </div>
              </div>
            </div>

            <div className=" relative w-[400px] h-[250px] md:w-[500px] md:h-[300px]  rounded-md p-4">
              <div {...getRootPropsv2()} className=" cursor-pointer flex flex-col pt-10  bg-white border-2 border-primary-500 rounded-2xl  border-dashed items-center h-full ">
                {/* <input type="file" onChange={handlePromptFileChange} /> */}
                  <input {...getInputPropsv2()} />
                <div className="  text-black my-2">Prompt File</div>
                <div >
                  <img src="Vector.svg" alt="" />
                </div>
                <div className=" bg-white px-2 cursor-pointer rounded-md text-secondary-400 text-center w-72">
                  {/* {promptFile != null ? promptFile?.name : "Choose a file, drag drop or press the button to enter prompts on a form"} */}
                  {promptFile != null
                    ? promptFile?.name
                    : "Choose a file or drag and drop"}
                </div>

                <div className=" flex flex-row gap-5 mt-4">
                  <div>
                    <div className=" hidden text-white w-fit flex flex-row items-center gap-2 text-sm font-semibold bg-primary-500 px-7 py-3 cursor-pointer rounded-full">
                      <div onClick={handleShowPromptForm} className="">
                        Prompt form
                      </div>
                    </div>
                  </div>
            
                </div>
              </div>
              <div>
                    <div className=" hidden w-fit mx-auto absolute left-1/3 top-2/3 cursor-pointer border  from-[#8FEEFC] to-[#0048FF] bg-gradient-to-r rounded-full p-0.5 text-sm  text-black">
                      <div
                        onClick={handleDownloadTemplates}
                        className=" bg-white px-6 py-2 text-secondary-400 rounded-full"
                      >
                        D/L sample prompt file
                      </div>
                    </div>
                  </div>
            </div>
          </div>

          <div className=" w-full ">
            <div className=" flex flex-row justify-start">

            <div onClick={handleIsAdvanced} className={`  cursor-pointer ${isAdvanced ? 'bg-primary-500' : ' bg-gray-400'}  flex items-center h-6 w-10 rounded-full p-0.5`}>
              <div className={`${isAdvanced ? 'bg-primary-500' : ' bg-white'} h-5 w-5 bg-primary-500 rounded-full `}>

              </div>
              <div className={`${isAdvanced ? 'bg-white' : ' bg-gray-400'} h-5 w-5  rounded-full flex justify-end `}>

              </div>

            </div>

            <div className=" text-secondary-450 text-sm font-light ml-2">
            Advanced features
            </div>
            </div>
          </div>

          <div className={`${isAdvanced ? '' : 'hidden'} grid grid-cols-1 md:grid-cols-3 gap-8 w-full`}>
            <div className="">
            <div className="flex flex-col  gap-1">
            <label
                    htmlFor=""
                    className="ml-2 text-secondary-450 text-sm font-light"
                  >
                    AI Engine
                  </label>
                  <select
                    className="outline-none bg-white py-2 px-2 rounded-md text-xs border"
                    value={engine}
                    onChange={(e) => setEngine(e.target.value)}
                  >
                    {/* <option value="">AI Model</option> */}
                    <option value="gpt-3.5-turbo">GPT-3.5</option>
                    <option value="gpt-4-turbo-preview">GPT-4</option>
                    <option value="gemini">Gemini</option>
                  </select>
               
                </div>
            </div>
            <div className="">
            <div
                  className={`flex flex-col gap-1 `}
                >
                  <label htmlFor="" className="text-secondary-450 text-sm font-light">AI API Key</label>
                  <input
                    type="text"
                    name='openAPIKey'
                    value={openAPIKey}
                    onChange={(e) => setOpenAPIKey(e.target.value)}
                    className=" outline-none py-2 px-2 rounded-md text-xs border"
                    placeholder="Enter your AI API Key"
                  />
                  </div>
            </div>
            <div className=" relative flex justify-start w-full">
            <div className=" md:absolute md:right-0 md:bottom-0 w-fit md:mx-auto   cursor-pointer border  from-[#8FEEFC] to-[#0048FF] bg-gradient-to-r rounded-full p-0.5 text-sm  text-black">
                      <div
                        onClick={handleShowPromptForm}
                        className=" bg-white px-6 py-2 text-secondary-400 rounded-full"
                      >
                        Prompt form
                      </div>
                    </div>
            </div>
          </div>

          <div className={`${showPromptForm ? "" : "hidden"}  w-full overflow-x-auto`}>
            <table className="min-w-full divide-y   divide-gray-200 border rounded-lg">
              <thead className="bg-white ">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-sm font-medium text-secondary-450 tracking-wider"
                  >
                    Number
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-sm font-medium text-secondary-450 tracking-wider"
                  >
                    Columns being referenced
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-sm font-medium text-secondary-450 tracking-wider"
                  >
                    Prompt
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-sm font-medium text-secondary-450 tracking-wider"
                  >
                    Header for the new column
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium text-gray-500">
                    001
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium text-gray-900">
                    <input
                      type="text"
                      placeholder="Enter number of column"
                      className=" outline-none"
                    />
                  </td>
                  <td className="px-6  py-4 whitespace-nowrap text-left text-sm text-gray-500 break-words">
                    <input
                      type="text"
                      placeholder="Enter your prompt"
                      className="  outline-none"
                    />
                  </td>
                  <td className="px-6  py-4 whitespace-nowrap text-left text-sm text-gray-500 break-words">
                    <input
                      type="text"
                      placeholder="Enter header for the new column"
                      className="  outline-none"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div
            className={`${
              showPromptForm ? "" : "hidden"
            } flex justify-start w-full`}
          > 
          <div className=" flex flex-row items-center gap-2">
            <div>
            <img src="add.svg" alt="" className=" cursor-pointer" />
            </div>
            <div className=" text-secondary-450 text-sm font-light">
            add new prompt
            </div>
          </div>
          </div>

          <div className="flex flex-col gap-4 md:flex-row items-center justify-between w-full">
          <div className="flex flex-col-reverse w-full md:flex-row gap-4 items-center justify-start">
            <button
              onClick={executeUpload}
              disabled={loading}
              className={`${loading ? ' cursor-not-allowed bg-gray-400' : 'cursor-pointer bg-primary-500'} hover:bg-blue-400 w-full  md:w-fit  gap-2  flex   flex-row justify-center items-center py-2 px-10 rounded-full`}
            >
              <span className={`${loading ? "hidden" : ""} text-white`}>
                Generate
              </span>
              <span className={`${loading ? "hidden" : ""}`}>
                <img src="arrow-right.svg" alt="" className=" h-10" />
              </span>
              <span
                className={`${
                  !loading && "hidden"
                } italic animate-pulse text-white`}
              >
                Processing...
              </span>
            </button>

            <div className=" md:ml-2  flex justify-start w-full">
              <label className="flex flex-row gap-2 items-center justify-center">
                <input
                  type="checkbox"
                  checked={maxRecords}
                  onChange={handleRecordChange}
                />
                <span className=" text-secondary-450 text-sm font-light">
                  Limit to 10 Rows
                </span>
              </label>
            </div>
          </div>

          <div
              onClick={handleShowAISettingModel}
              className="hidden bg-primary-500 w-fit  gap-2 cursor-pointer flex   flex-row items-center py-2 px-6 rounded-full"
            >
              <span className={` text-white`}>
                AI Settings
              </span>
              <span className={` text-white`}>
                <img src="setting.svg" alt="" className=" text-white w-5 h-5" />
              </span>
              </div>

          </div>

          <div
            className={`${
              !showProcessedData && "hidden"
            } flex flex-col border border-[#] bg-white w-full`}
          >
            <div className=" flex px-4 items-center text-xl py-4   text-secondary-500 border-b w-full">
              Processing Summary
            </div>
            <div className="p-4 flex flex-col gap-4 md:gap-0 md:flex-row justify-between">
              <div className=" flex flex-col text-sm text-secondary-500">
                {/* <span>Number of rows in the data file: 10</span> */}
                <span>Number of rows processed: {processedRecords}</span>
                <span>Elapsed time: {formatTime(timeElapsed)}</span>
                <span> Total Number of Rows: {totalRecords}</span>
                <span className=" hidden">Number of Tokens Used: {totalTokensSum}</span>
                <span className=" hidden">Number of EnhanciFai Tokens remaining:</span>
                <span className=" hidden">Number of API tokens remaining:</span>
              </div>
              <div>
                <div
                  onClick={handleDownload}
                  className=" bg-primary-500 hover:bg-blue-400 flex  flex-row items-center justify-center gap-2 w-fit text-white px-6 text-sm rounded-full cursor-pointer py-2"
                >
                  <span>Download processed file</span>
                  <span>
                    <img src="download.svg" alt="" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="flex flex-col items-center text-white w-full  bg-secondary-600 ">
          <div className=" w-10/12 flex  flex-row items-center justify-between gap-10 my-6">
            <div className=" font-bold text-3xl">EnhancifAI</div>
            <div className=" font-light text-sm">
              EnhancifAI transforms and "enhancifies" your data with AI
            </div>
          </div>
        </div> */}
        <Footerv2 />
        <div className="  absolute top-72 md:-top-36 min-h-screen  w-full">
          <img src="wave.svg" alt="" />
        </div>

        {/* Loading Model */}
        <div
          className={` ${
            loading ? "" : "hidden"
          } bg-primary-100  bg-opacity-70 shadow-lg fixed top-0 left-0 h-screen w-full z-30 flex justify-center items-center overflow-hidden`}
        >
          <div className="bg-white w-4/5 md:w-2/5 text-xl shadow-lg flex flex-col gap-6 p-6 rounded-2xl">
            <div className=" font-bold italic animate-pulse">
              {status == "completed" ? "Completed" : "Processing..."}
            </div>
            <div className=" text-sm font-light">
              {remark ? remark : "0% Completed."}
            </div>

            <div>{/* {progress} */}</div>

            <div className="bg-gray-400 rounded-full">
              {/* <div style={{ width: `${progress}%` }} className={`w-[${progress}%] bg-primary-500 p-4 rounded-full`}></div> */}
              <div
                style={{ width: `${progress}%` }}
                className={`progress-bar bg-primary-500 p-4 rounded-full`}
              ></div>
            </div>
          </div>
        </div>
        {/* AI Settings Model */}
              <div
          className={` ${
            showAISettingModel ? "" : "hidden"
          } bg-primary-100  bg-opacity-70 shadow-lg fixed top-0 left-0 h-screen w-full z-30 flex justify-center items-center overflow-hidden`}
        >
          <div className="bg-white w-4/5 md:w-2/5 text-xl shadow-lg flex flex-col gap-6 px-10 py-6 rounded-2xl">
              <div className=" border-b pb-2 flex flex-row items-center justify-between">
                <div className=" font-bold text-primary-500">
                AI Settings
                </div>
                <div onClick={handleShowAISettingModel}>
                  <img src="close.svg" alt="" className=" w-4 h-4 cursor-pointer" />
                </div>
              </div>
             <div className=" flex flex-col gap-8 md:gap-4  justify-between w-full ">
            
              <div className="flex flex-row items-center gap-4">
                <div className="flex flex-col-reverse  gap-2">
                  <select
                    className="p-2 text-white text-xs bg-primary-500 px-4 rounded-md  outline-none"
                    value={engine}
                    onChange={(e) => setEngine(e.target.value)}
                  >
                    {/* <option value="">AI Model</option> */}
                    <option value="gpt-3.5-turbo">GPT-3.5</option>
                    <option value="gpt-4-turbo-preview">GPT-4</option>
                    <option value="gemini">Gemini</option>
                  </select>
                  <label
                    htmlFor=""
                    className="ml-2 text-secondary-400 text-sm font-semibold"
                  >
                    AI Model
                  </label>
                </div>
                <div className=" hidden">
                  <select className=" p-2">
                    <option value="option1">Rows</option>
                    <option value="option2">1</option>
                    <option value="option3">2</option>
                    <option value="option3">3</option>
                    <option value="option3">4</option>
                    <option value="option3">5</option>
                    <option value="option3">6</option>
                    <option value="option3">7</option>
                    <option value="option3">8</option>
                  </select>
                </div>
              </div>

              <div className=" hidden  w-fit">
                <label className="flex flex-row gap-2">
                  <input
                    type="checkbox"
                    checked={maxRecords}
                    onChange={handleRecordChange}
                  />
                  <span className=" text-secondary-400 ml-2 text-sm font-semibold">
                    Limit to 10 Rows
                  </span>
                </label>
              </div>

              <div className=" flex flex-col gap-2 w-fit ">
          

                <div
                  className={`flex flex-col gap-4 mt-2`}
                >
                  <label htmlFor="" className="text-secondary-400 text-sm font-semibold">Open API Key</label>
                  <input
                    type="text"
                    name='openAPIKey'
                    value={openAPIKey}
                    onChange={(e) => setOpenAPIKey(e.target.value)}
                    className=" outline-none py-2 px-4 rounded-md text-xs border"
                    placeholder="Please type your Open API Key"
                  />
                  <div
                    onClick={handleAISettings}
                    className={` ${savingAISetting ? ' italic animate-pulse' : ''} bg-primary-500 px-8 py-2 rounded-full cursor-pointer text-sm  text-white w-fit`}
                  >
                    {savingAISetting ? 'Loading...' : 'Save' }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Execution;
