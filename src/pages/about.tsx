import Section from "../components/shared/section";
import { BsFileEarmarkTextFill } from "react-icons/bs";

const DDIInfoPage = () => {
  return (
    <main>
      <h2 className="text-2xl font-semibold text-gray-800 ">About the Model</h2>
      <p className="text-gray-600 mb-4">
        Learn about the DDI extraction model, its architecture, and performance
      </p>

      <Section>
        <div className="">
          <h2 className="text-xl font-semibold">Motivation</h2>
          <p>
            Drug-Drug Interactions (DDIs) occur when one drug affects another
            when administered together, potentially decreasing effectiveness,
            increasing side effects, or in some cases causing life-threatening
            conditions.
          </p>
        </div>
        <ul className="list-disc list-inside mt-2">
          <li>Key benefits of automated DDI extraction:</li>
          <li>
            Supporting clinical decision-making with timely interaction alerts
          </li>
          <li>Enhancing drug development and pharmacovigilance processes</li>
          <li>Updating knowledge bases with newly discovered interactions</li>
        </ul>
      </Section>

      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold">DDI Extraction Pipeline</h2>
        <div className="flex justify-center items-center space-x-4 mt-4">
          <span>Drug NER</span>
          <span>→</span>
          <span>Relation Extraction</span>
          <span>→</span>
          <span>DDI Classification</span>
        </div>
        <p className="mt-2 text-gray-600">
          Our model implements a two-stage process: First identifying drug
          entities through Named Entity Recognition (NER), then determining the
          relationship between them from Relation Extraction (RE) to classify
          interaction types.
        </p>
      </div>

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
          <div className="text-blue-900">Decision Support</div>
          <p>
            Clinical decision support with real-time alerts about potential drug
            interactions during prescription, improving patient care.
          </p>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg text-center">
          <div className="text-blue-900">Pharmacovigilance</div>
          <p>
            Monitor medical literature and clinical reports to identify new or
            previously undocumented drug interactions.
          </p>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg text-center">
          <div className="text-blue-900">Knowledge Base Updates</div>
          <p>
            Automate updates and categorization of interactions from scientific
            literature to keep pharmaceutical databases current.
          </p>
        </div>
      </div>

      <div className="text-center w-full flex  justify-center">
        <a
          href="#"
          className="hover:bg-blue-800 bg-blue-900 duration-500 flex font-medium items-center gap-2 justify-center w-max text-white px-4 py-3 rounded-lg"
        >
          <BsFileEarmarkTextFill className="text-white" />
          Learn more in our thesis paper
        </a>
      </div>
    </main>
  );
};

export default DDIInfoPage;
