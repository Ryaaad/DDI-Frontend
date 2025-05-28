import { useState } from "react";
import ResultsTable from "../components/ResultsTable";
import { DDIS_PAIRS } from "../data/ddi_pairs";

interface Result {
  drugPair: string;
  interactionType: string;
  confidenceScore: number;
}

const AnalyzeDDi = () => {
  const [inputText, setInputText] = useState<string>();
  const [results, setResults] = useState<Result[]>(DDIS_PAIRS);

  const handleAnalyze = () => {
    // Placeholder for API call or analysis logic
    console.log("Analyzing:", inputText);
  };

  return (
    <div className="flex-1 p-6">
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
        </div>
        <ResultsTable results={results} />
      </main>
    </div>
  );
};

export default AnalyzeDDi;
