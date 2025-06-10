
import { Check } from "lucide-react";
import { BsFileEarmarkTextFill } from "react-icons/bs";
import { FaExclamationTriangle, FaPills } from "react-icons/fa";
import Section from "../components/shared/section";
import { FaFileLines } from "react-icons/fa6";

const DDIInfoPage = () => {
  return (
    <main >
 <h2 className="text-2xl font-semibold text-gray-800 ">About the Model</h2>
      <p className="text-gray-600 mb-4">
        Learn about the DDI extraction model, its architecture, and performance
      </p>
  
        <div  className="w-full h-full flex gap-2 pr-2 bg-white rounded-lg shadow-md my-6">
        <div className="bg-blue-600 flex-1/4 rounded-l-lg flex flex-col gap-5 px-10 justify-center w-full ">
      <div className="flex justify-center gap-0.5 items-center">
        <FaPills size={40} color="#ffffff" />
        <FaExclamationTriangle size={40} color="#ffffff" />
      </div>
      <h2 className="text-white text-center w-full text-xl">
         DDis can lead to serious health risks if not properly identified and managed
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
       <h3  className="font-medium mb-1" >Key benefits of automated DDI extraction:</h3>
        <ul className=" mt-2 ml-1 space-y-3 ">
          <li className="flex items-center gap-2 ">
            <Check className="text-blue-600 self-end" size={18} />
            Supporting clinical decision-making with timely interaction alerts
          </li>
          <li className="flex items-center gap-2 ">
            <Check className="text-blue-600 self-end" size={18} />
            Enhancing drug development and pharmacovigilance processes</li>
          <li className="flex items-center gap-2 ">
            <Check className="text-blue-600 self-end" size={18} />
            Updating knowledge bases with newly discovered interactions</li>
           <li className="flex items-center gap-2 ">
            <Check className="text-blue-600 self-end" size={18} />
            Updating knowledge bases with newly discovered interactions</li>
        </ul>
   
      </div>
        </div>

     <Section>
      <div className=" mb-6">
        <h2 className="text-xl font-semibold">DDI Extraction Pipeline</h2>
        <div className="flex justify-center items-center space-x-4 mt-4">
          <div className="flex flex-col gap-2 items-center font-medium ">
            <div className="rounded-full bg-blue-50 w-10 h-10 flex justify-center items-center ">
<FaFileLines className="text-blue-500" />
            </div>
            Text Input
          </div>

          <span>→</span>

      <div className="flex flex-col gap-2 items-center font-medium ">
            <div className="rounded-full bg-blue-50 w-10 h-10 flex justify-center items-center ">
<FaFileLines className="text-blue-500" />
            </div>
            Drug NER
          </div>

          <span>→</span>

          
      <div className="flex flex-col gap-2 items-center font-medium ">
            <div className="rounded-full bg-blue-50 w-10 h-10 flex justify-center items-center ">
<FaFileLines className="text-blue-500" />
            </div>
           Relation Extraction
          </div>

          <span>→</span>
                <div className="flex flex-col gap-2 items-center font-medium ">
            <div className="rounded-full bg-blue-50 w-10 h-10 flex justify-center items-center ">
<FaFileLines className="text-blue-500" />
            </div>
        DDI Classification
          </div>
        </div>
        <p className="mt-2 text-gray-600">
          Our model implements a two-stage process: First identifying drug
          entities through Named Entity Recognition (NER), then determining the
          relationship between them from Relation Extraction (RE) to classify
          interaction types.
        </p>
      </div>
     </Section>

      <div className="mb-6">
        <h2 className="text-xl font-semibold">State-of-the-Art Context</h2>
        <p>
          Our model ranks in current benchmarks, closely trailing top performers
          with room to grow. While not the absolute state-of-the-art, it strikes
          an excellent balance of accuracy and computational efficiency, making
          it suitable for real-world applications.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold">Performance Metrics</h2>
        <div className="flex flex-col space-y-2">
          <div>
            Global F1 Score: <span className="font-bold">0.78</span>
          </div>
          <div>
            Interaction:{" "}
            <span className="w-1/3 bg-gray-200 h-2 rounded">
              <span
                className="bg-blue-500 h-2 rounded"
                style={{ width: "81%" }}
              ></span>
            </span>{" "}
            0.81
          </div>
          <div>
            Mechanism:{" "}
            <span className="w-1/3 bg-gray-200 h-2 rounded">
              <span
                className="bg-blue-500 h-2 rounded"
                style={{ width: "72%" }}
              ></span>
            </span>{" "}
            0.72
          </div>
          <div>
            Effect:{" "}
            <span className="w-1/3 bg-gray-200 h-2 rounded">
              <span
                className="bg-blue-500 h-2 rounded"
                style={{ width: "79%" }}
              ></span>
            </span>{" "}
            0.79
          </div>
          <div>
            Advice:{" "}
            <span className="w-1/3 bg-gray-200 h-2 rounded">
              <span
                className="bg-blue-500 h-2 rounded"
                style={{ width: "64%" }}
              ></span>
            </span>{" "}
            0.64
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg text-center">
          <div className="text-blue-600">Decision Support</div>
          <p>
            Clinical decision support with real-time alerts about potential drug
            interactions during prescription, improving patient care.
          </p>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg text-center">
          <div className="text-blue-600">Pharmacovigilance</div>
          <p>
            Monitor medical literature and clinical reports to identify new or
            previously undocumented drug interactions.
          </p>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg text-center">
          <div className="text-blue-600">Knowledge Base Updates</div>
          <p>
            Automate updates and categorization of interactions from scientific
            literature to keep pharmaceutical databases current.
          </p>
        </div>
      </div>

      <div className="text-center w-full flex  justify-center">
        <a
          href="#"
          className="hover:bg-blue-800 bg-blue-600 duration-500 flex font-medium items-center gap-2 justify-center w-max text-white px-4 py-3 rounded-lg"
        >
          <BsFileEarmarkTextFill className="text-white" />
          Learn more in our thesis paper
        </a>
      </div>
      
     
    </main>
  );
};

export default DDIInfoPage;
