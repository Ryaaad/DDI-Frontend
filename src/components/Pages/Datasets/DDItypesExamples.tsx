("use client");
import { useState, type FC } from "react";
import { DDIS_TYPE_EXAMPLE } from "../../../data/ddi_examples";
import type { DDI2013TYPES } from "../../../type/ddi";
import { DDI_TYPE_NAMES } from "../../../data/ddi_historgram";

interface DrugPairSentenceProps {
  sentence: string;
  drugPairs: { drug1: string; drug2: string };
  xml: string;
  bg: string;
}

const DrugPairSentence: FC<DrugPairSentenceProps> = ({
  sentence,
  drugPairs,
  xml,
  bg,
}) => {
  const words = sentence.split(" ").map((word) => word + " ");
  return (
    <div className="p-4 w-full">
      <div className="grid grid-cols-[1fr_1.2fr] items-start gap-10">
        <div>
          <div className="mb-4 space-y-2">
            <h2 className=" font-semibold text-gray-700">Example Sentence</h2>
            <div className="bg-gray-100 flex items-center flex-wrap p-4 py-3 gap-1 rounded-lg">
              {words.map((word) => {
                return (
                  <p
                    className={`${
                      word.trim().toLowerCase() ===
                        drugPairs.drug1.trim().toLowerCase() ||
                      word.trim().toLowerCase() ===
                        drugPairs.drug2.trim().toLowerCase()
                        ? `${bg} text-black font-medium px-1`
                        : "text-gray-800"
                    }   py-1 rounded  min-w-max`}
                  >
                    {word + "  "}
                  </p>
                );
              })}
            </div>
            <h2 className="font-semibold text-gray-700">Drug Pairs:</h2>
            <div className="flex font-medium text-black space-x-2 mt-1">
              <span className={`${bg} px-3 py-1 rounded-full`}>
                {drugPairs.drug1}
              </span>
              <span className={` ${bg} px-3 py-1 rounded-full`}>
                {drugPairs.drug2}
              </span>
            </div>
          </div>
        </div>
        <div className="space-y-2 w-full">
          <h2 className="font-semibold text-gray-700">XML Representation</h2>
          <pre className="bg-gray-100 text-gray-800 p-3 px-4 pr-24 rounded mt-1 text-xs">
            {xml}
          </pre>
        </div>
      </div>
    </div>
  );
};

export const DDITypeExamples = () => {
  const [type, setType] = useState<DDI2013TYPES>("None");
  const changeTab = (type: DDI2013TYPES) => {
    setType(type);
  };
  return (
    <div className="p-4">
      <div className="flex space-x-4 mb-4 border-b-1 border-gray-300">
        {DDI_TYPE_NAMES.map((ddi_type) => (
          <button
            className={`hover:cursor-pointer  pb-2 ${
              type === ddi_type
                ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                : "text-gray-600"
            } `}
            key={ddi_type}
            onClick={() => changeTab(ddi_type as DDI2013TYPES)}
          >
            {ddi_type}
          </button>
        ))}
      </div>

      <DrugPairSentence {...DDIS_TYPE_EXAMPLE[type]} />
    </div>
  );
};
