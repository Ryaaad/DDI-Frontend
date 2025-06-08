import { FileText, Folder } from "lucide-react";
import ContentBox from "../components/Pages/Datasets/contentBox";
import { DDI_TYPES } from "../data/ddi_type";
import DDITypeCard from "../components/Pages/Datasets/intecationType";
import { Bar } from "react-chartjs-2";
import { FaCheckCircle, FaDatabase, FaPills } from "react-icons/fa";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { DDI_HISTO_DATA } from "../data/ddi_historgram";
import Section from "../components/shared/section";
import { LuGitCompareArrows } from "react-icons/lu";
import DocumentDisplay from "../components/Pages/Datasets/DocumentDisplay";
import { DDITypeExamples } from "../components/Pages/Datasets/DDItypesExamples";
import { PiLinkBold } from "react-icons/pi";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false, // Hides the legend completely
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Interaction Type",
      },
    },
    y: {
      title: {
        display: true,
        text: "Pair Number",
      },
      beginAtZero: true,
    },
  },
};

const DatasetsPage = () => {
  return (
    <main>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Dataset & Statistics
      </h2>
      <p className="text-gray-600 mb-4">
        Explore the dataset used for training our DDI extraction model.
      </p>
      <Section>
        <h3 className="text-xl font-semibold text-gray-700 mb-4">
          Dataset Overview
        </h3>
        <section className="flex items-stretch justify-center gap-6">
          <ContentBox
            description="DDI2013 Extraction"
            icon={
              <FaDatabase
                fill="#155dfc"
                strokeWidth={1}
                className="text-white"
              />
            }
            title="Name"
          />
          <ContentBox
            description=" 784 documents, 5,021 sentences, 18,502 drug entities, 25,600 pais"
            icon={
              <FileText fill="#155dfc" strokeWidth={1} className="text-white" />
            }
            title="Size"
          />
          <ContentBox
            description="SemEval 2013 Task 9.2: Drug-Drug Interaction Extraction"
            icon={<PiLinkBold fill="#155dfc" className="text-white" />}
            title="Source"
          />
        </section>

        <h4 className="text-md font-medium text-gray-700 mb-2 mt-4">
          Preprocessing Summary
        </h4>
        <label className="block text-gray-600 mb-2">
          The dataset has been preprocessed to identify drug entities and their
          interactions in biomedical texts. Sentences were tokenized, drug
          entities were annotated with unique identifiers, and interaction pairs
          were labeled according to their type. The dataset is split into
          training (80%) and testing (20%) sets.
        </label>
      </Section>

      <Section>
        <section className="">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Label Explanation
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {DDI_TYPES.map((DDI_TYPE) => (
              <DDITypeCard {...DDI_TYPE} key={DDI_TYPE.name} />
            ))}
          </div>
        </section>
        <section className="">
          <h3 className=" font-semibold text-gray-700 mb-4">
            Data Distribution
          </h3>
          <div className="h-[450px] w-full">
            <Bar data={DDI_HISTO_DATA} options={options} className="w-full" />
          </div>
        </section>
      </Section>
      <Section>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">
          Dataset Structure
        </h3>
        <p className="block text-gray-600 mb-2">
          The DDI2013 dataset is provided in XML format, with a hierarchical
          structure that organizes documents, sentences, drug entities, and
          their interactions.
        </p>
        <div className="grid grid-cols-[1fr_1.2fr] justify-between items-start mt-5">
          <div className="w-max">
            <h3 className="font-semibold text-gray-700 mb-2">Key Elements</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <FaCheckCircle color="#155dfc" />
                Drug entities with attributes like ID, name, and type
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle color="#155dfc" />
                Sentence boundaries containing drug mentions
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle color="#155dfc" />
                Interaction pairs linked by drug entity IDs
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle color="#155dfc" />
                Interaction types labeled for each valid interaction
              </div>
            </div>
          </div>
          <div className="w-full ">
            <h3 className="font-semibold text-gray-700 mb-2">
              Typical XML Structure
            </h3>
            <DocumentDisplay />
          </div>
        </div>
        <section>
          <h1 className="font-semibold text-gray-700 mb-2">
            Hierarchical Organization
          </h1>
          <div className="rounded-lg w-full bg-blue-50 p-4 ">
            <div className="space-y-3">
              <div className="flex item-center gap-2">
                <Folder fill="#155dfc" strokeWidth={0} size={20} />
                <p className="font-medium">Documents (XML files)</p>
              </div>
              <div className="ml-8 space-y-3">
                <div className="flex item-center gap-2">
                  <FileText
                    fill="#155dfc"
                    strokeWidth={1}
                    className="text-white"
                    size={20}
                  />
                  <p className="font-medium">Sentences</p>
                </div>
                <div className="ml-8 space-y-3">
                  <div className="flex item-center gap-2">
                    <FaPills size={20} color="#155dfc" />
                    <p className="font-medium">Drug Entities</p>
                  </div>
                  <div className="flex item-center gap-2">
                    <LuGitCompareArrows
                      fill="#155dfc"
                      strokeWidth={0}
                      size={20}
                    />
                    <p className="font-medium">Interaction Pairs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <h3 className="text-xl font-semibold text-gray-700 mb-2">
          Examples by Interaction Type
        </h3>

        <DDITypeExamples />
      </Section>
    </main>
  );
};

export default DatasetsPage;
