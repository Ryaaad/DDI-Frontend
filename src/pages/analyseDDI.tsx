import { useState } from "react";
import ResultsTable from "../components/ResultsTable";
import { DDIS_PAIRS } from "../data/ddi_pairs";
import { Search } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { extractSentenceDDIsHandler } from "../backend/extract_ddis";
import type { AxiosError } from "axios";

interface Result {
  drugPair: string;
  interactionType: string;
  confidenceScore: number;
}

const AnalyzeDDi = () => {
  const [inputText, setInputText] = useState<string>();
  const [results, _setResults] = useState<Result[]>(DDIS_PAIRS);

  //  const queryClient = useQueryClient();
  const extract_sentence_ddis = useMutation({
    mutationFn: async (data: string) => await extractSentenceDDIsHandler(data),
    onSuccess: (data: string) => {
      toast.success("ddi extracted succesfully");
      console.log("data res :", data);
      // setResults(data)
    },
    onError: (error: AxiosError) => {
      toast.error(`Failed : ${error.message}`);
    },
  });

  const handleAnalyze = () => {
    if (inputText) {
      extract_sentence_ddis.mutate(inputText);
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
        <label className="block text-gray-600 mb-2">
          Or upload a text file:
        </label>
        <div className="flex items-center space-x-2">
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">
            Upload .txt file
          </button>
          <span className="text-gray-500">No file selected</span>
        </div>
        <div className="w-full flex justify-end ">
          <button
            className=" flex items-center gap-2 justify-center px-6 py-2 cursor-pointer font-semibold bg-[#1e40af] text-white rounded-md duration-300 hover:bg-[#1e40afd0] "
            onClick={handleAnalyze}
            disabled={!inputText}
          >
            <Search size={15} />
            Submit
          </button>
        </div>
      </div>
      <ResultsTable results={results} />
    </main>
  );
};

export default AnalyzeDDi;
