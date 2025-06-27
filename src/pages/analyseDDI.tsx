import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { extractSentenceDDIsHandler, extractSentenceDrugsHandler } from "../backend/extractions";
import type { AxiosError } from "axios";
import type { DDI_Extraction_result_I } from "../types/ddi_extraction_result";
import { FaFlaskVial } from "react-icons/fa6";
import ResultsTable from "../components/Pages/Analyse_DDI/ResultsTable"

const AnalyzeDDi = () => {
  const [inputText, setInputText] = useState<string>();
  const [results, setResults] = useState<DDI_Extraction_result_I[]>([
    // {
    //   drug1: "beta blockers",
    //   drug2: "benzodiazepenes",
    //   label: "int",
    // },
    // {
    //   drug1: "beta blockers",
    //   drug2: "benzodiazepenes",
    //   label: "advise",
    // },
    // {
    //   drug1: "beta blockers",
    //   drug2: "benzodiazepenes",
    //   label: "mechanism",
    // },
    // {
    //   drug1: "beta blockers",
    //   drug2: "benzodiazepenes",
    //   label: "none",
    // },
    // {
    //   drug1: "beta blockers",
    //   drug2: "benzodiazepenes",
    //   label: "none",
    // },
    // {
    //   drug1: "beta blockers",
    //   drug2: "benzodiazepenes",
    //   label: "none",
    // },
    // {
    //   drug1: "beta blockers",
    //   drug2: "benzodiazepenes",
    //   label: "effect",
    // },
    // {
    //   drug1: "beta blockers",
    //   drug2: "benzodiazepenes",
    //   label: "none",
    // },
    // {
    //   drug1: "beta blockers",
    //   drug2: "benzodiazepenes",
    //   label: "none",
    // },
    // {
    //   drug1: "beta blockers",
    //   drug2: "benzodiazepenes",
    //   label: "int",
    // },
    // {
    //   drug1: "beta blockers",
    //   drug2: "benzodiazepenes",
    //   label: "none",
    // },
    // {
    //   drug1: "beta blockers",
    //   drug2: "benzodiazepenes",
    //   label: "none",
    // },
    // {
    //   drug1: "beta blockers",
    //   drug2: "benzodiazepenes",
    //   label: "advise",
    // },
    // {
    //   drug1: "beta blockers",
    //   drug2: "benzodiazepenes",
    //   label: "none",
    // },
    // {
    //   drug1: "beta blockers",
    //   drug2: "benzodiazepenes",
    //   label: "none",
    // },
    // {
    //   drug1: "beta blockers",
    //   drug2: "benzodiazepenes",
    //   label: "none",
    // },
    // {
    //   drug1: "beta blockers",
    //   drug2: "benzodiazepenes",
    //   label: "none",
    // },
    // {
    //   drug1: "beta blockers",
    //   drug2: "benzodiazepenes",
    //   label: "none",
    // },
    // {
    //   drug1: "beta blockers",
    //   drug2: "benzodiazepenes",
    //   label: "none",
    // },
    // {
    //   drug1: "beta blockers",
    //   drug2: "benzodiazepenes",
    //   label: "advise",
    // },
    // {
    //   drug1: "beta blockers",
    //   drug2: "benzodiazepenes",
    //   label: "none",
    // },
    // {
    //   drug1: "beta blockers",
    //   drug2: "benzodiazepenes",
    //   label: "none",
    // },
    // {
    //   drug1: "beta blockers",
    //   drug2: "benzodiazepenes",
    //   label: "none",
    // },
    // {
    //   drug1: "beta blockers",
    //   drug2: "benzodiazepenes",
    //   label: "none",
    // },
    // {
    //   drug1: "beta blockers",
    //   drug2: "benzodiazepenes",
    //   label: "none",
    // },
    // {
    //   drug1: "beta blockers",
    //   drug2: "benzodiazepenes",
    //   label: "none",
    // },
  ]);

  const [extractedDrugs, setExtractedDrugs] = useState<string[]>([

  ]);

    const clearResults=()=>{
    setResults([])
    setExtractedDrugs([])
  }
  const [isLoading, setIsLoading] = useState(false);
  const extract_sentence_ddis = useMutation({
    mutationFn: async (data: string) => {
      setIsLoading(true);

      const result = await extractSentenceDDIsHandler(data);
      return result;
    },
    onSuccess: (data: DDI_Extraction_result_I[] | null) => {
      toast.success("ddi extracted succesfully");
      console.log("data res :", data);
      setResults(data || []);
      setIsLoading(false);
    },
    onError: (error: AxiosError) => {
      toast.error(`Failed : ${error.message}`);
      setIsLoading(false);
    },
  });
  const extract_sentence_drugs = useMutation({
    mutationFn: async (data: string) => {
      setIsLoading(true);

      const result = await extractSentenceDrugsHandler(data);
      return result;
    },
    onSuccess: (data: string[] | null) => {
      toast.success("ddi extracted succesfully");
      console.log("data res :", data);
      setExtractedDrugs(data || []);
      setIsLoading(false);
    },
    onError: (error: AxiosError) => {
      toast.error(`Failed : ${error.message}`);
      setIsLoading(false);
    },
  });


  const handleAnalyze = () => {
    if (inputText) {
      extract_sentence_ddis.mutate(inputText);
      extract_sentence_drugs.mutate(inputText)
      setResults([])
      setExtractedDrugs([])
    }
  };

  return (
    <main>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Analyze Drug-Drug Interactions
      </h2>
      <p className="text-gray-600 mb-4">
        Enter a sentence or upload a file to extract drug pairs and their
        interaction types.
      </p>
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-lg font-medium text-gray-700 mb-2">Input</h3>
        <label className="block text-gray-600 mb-2">
          Enter a sentence containing drug interactions:
        </label>
        <textarea
          className="w-full p-3 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
          rows={3}
          value={inputText}
          placeholder="e.g., Aspirin may interact with Warfarin causing increased risk of bleeding."
          onChange={(e) => setInputText(e.target.value)}
        />
        {/* <label className="block text-gray-600 mb-2">
          Or upload a text file:
        </label>
        <div className="flex items-center space-x-2">
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">
            Upload .txt file
          </button>
          <span className="text-gray-500">No file selected</span>
        </div> */}
        <div className="w-full flex justify-end ">
          <button
            className=" flex items-center gap-2 justify-center px-6 py-2 cursor-pointer  bg-[#1e40af] text-white rounded-md duration-300 hover:bg-[#1e40afd0] "
            onClick={handleAnalyze}
            disabled={!inputText}
          >
            <FaFlaskVial />
            Analyse
          </button>
        </div>
      </div>
      <ResultsTable clearResults={clearResults} ddi_interactions={results} isLoading={isLoading} extractedDrugs={extractedDrugs}  />
    </main>
  );
};

export default AnalyzeDDi;
