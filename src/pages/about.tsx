import { Check } from "lucide-react";
import { BsFileEarmarkTextFill } from "react-icons/bs";
import { FaExclamationTriangle, FaPills } from "react-icons/fa";
import Section from "../components/shared/section";
import { FaFileLines } from "react-icons/fa6";
import PipelineElement from "../components/Pages/About/PipelineElement";
import { IoMdArrowForward } from "react-icons/io";
import { GiMedicines } from "react-icons/gi";
import { LuGitCompareArrows } from "react-icons/lu";
import { Bar } from "react-chartjs-2";
import { DDI_PERFORMANCES_HIST } from "../data/ddi_historgram";

const DDIInfoPage = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hides the legend completely
      },
    },
  };
  const piplineElements = [
    {
      title: "Text Input",
      icon: <FaFileLines className="text-custom-purple " size={30} />,
    },
    {
      title: "Drug NER",
      icon: <GiMedicines className="text-custom-purple" size={30} />,
      description: "Identify Drug entities",
    },
    {
      title: "Relation Extraction",
      icon: <LuGitCompareArrows className="text-custom-purple" size={30} />,
      description: "Classify Interaction",
    },
    {
      title: "DDI Classification",
      icon: <FaExclamationTriangle className="text-custom-purple" size={30} />,
      description: "Interaction type",
    },
  ];
  return (
    <main>
      <h2 className="text-2xl font-semibold text-gray-800 ">About the Model</h2>
      <p className="text-gray-600 mb-4">
        Learn about the DDI extraction model, its architecture, and performance
      </p>

      <div className="w-full h-full flex gap-2 pr-2 bg-white rounded-lg shadow-md my-6">
        <div className="bg-custom-purple flex-1/4 rounded-l-lg flex flex-col gap-5 px-10 justify-center w-full ">
          <div className="flex justify-center gap-0.5 items-center">
            <FaPills size={40} color="#ffffff" />
            <FaExclamationTriangle size={40} color="#ffffff" />
          </div>
          <h2 className="text-white text-center w-full text-xl">
            DDis can lead to serious health risks if not properly identified and
            managed
          </h2>
        </div>
        <div className=" flex-3/4 space-y-8 p-6 ">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold">Motivation</h2>
            <p>
              Drug-Drug Interactions (DDIs) occur when one drug affects another
              when administered together, potentially decreasing effectiveness,
              increasing side effects, or in some cases causing life-threatening
              conditions.
            </p>
          </div>
          <h3 className="font-medium mb-1">
            Key benefits of automated DDI extraction:
          </h3>
          <ul className=" mt-2 ml-1 space-y-3 ">
            <li className="flex items-center gap-2 ">
              <Check className="text-custom-purple  self-end" size={18} />
              Supporting clinical decision-making with timely interaction alerts
            </li>
            <li className="flex items-center gap-2 ">
              <Check className="text-custom-purple  self-end" size={18} />
              Enhancing drug development and pharmacovigilance processes
            </li>
            <li className="flex items-center gap-2 ">
              <Check className="text-custom-purple  self-end" size={18} />
              Updating knowledge bases with newly discovered interactions
            </li>
            <li className="flex items-center gap-2 ">
              <Check className="text-custom-purple  self-end" size={18} />
              Updating knowledge bases with newly discovered interactions
            </li>
          </ul>
        </div>
      </div>

      <Section>
        <div className="mb-6">
          <h2 className="text-xl font-semibold">DDI Extraction Pipeline</h2>
          <div className="flex justify-center items-center gap-6 mt-4">
            {piplineElements.map((piplineElement, index) => (
              <>
                {index > 0 && (
                  <IoMdArrowForward size={25} className="text-gray-400" />
                )}

                <PipelineElement {...piplineElement} />
              </>
            ))}
          </div>
          <p className="mt-6 text-md text-gray-600">
            Our model implements a two-stage process: First identifying drug
            entities through Named Entity Recognition (NER), then determining
            the relationship between them from Relation Extraction (RE) to
            classify interaction types.
          </p>
        </div>
      </Section>

      <div className="w-full text-center my-10">
        <h2 className="text-3xl font-semibold">Performance Metrics</h2>
        <p className="mt-2">
          {" "}
          Comprehensive evaluation results for our DNER and RE models{" "}
        </p>
      </div>

      <div className="flex w-full items-center gap-4  my-2 mb-8 ">
        <div className="bg-white p-6 py-8 rounded-xl h-[650px] w-full shadow-md">
          <div className="flex gap-4 items-center">
            <div className="w-10 h-10 rounded-lg flex justify-center items-center bg-custom-purple">
              <GiMedicines className="text-white" size={25} />
            </div>
            <div className="">
              <h1 className="font-semibold text-xl">Drug NER Model</h1>
              <p className="">Drug Named Entity Recognition </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 py-8 rounded-xl h-[650px] w-full shadow-md">
          <div className="flex gap-4 items-center">
            <div className="w-10 h-10 rounded-lg flex justify-center items-center bg-custom-purple">
              <LuGitCompareArrows className="text-white" size={25} />
            </div>
            <div className="">
              <h1 className="font-semibold text-xl">
                Relation Extraction Model
              </h1>
              <p className="">Multi-class Classification</p>
            </div>
          </div>
          <div className="w-full bg-blue-50 text-center rounded-lg p-4 px-5 my-8 ">
            <h1 className="text-custom-purple text-4xl font-bold ">0.81</h1>
            <p className="">Global F1 Score</p>
          </div>
          <div className=" w-full my-8">
            <Bar
              data={DDI_PERFORMANCES_HIST}
              options={options}
              className="w-full"
            />
          </div>
        </div>
      </div>

      <div className="text-center w-full flex  justify-center">
        <a
          href="#"
          className="hover:bg-blue-800 bg-custom-purple  duration-500 flex font-medium items-center gap-2 justify-center w-max text-white px-4 py-3 rounded-lg"
        >
          <BsFileEarmarkTextFill className="text-white" />
          Learn more in our thesis paper
        </a>
      </div>
    </main>
  );
};

export default DDIInfoPage;
