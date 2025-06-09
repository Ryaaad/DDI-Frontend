import React from "react";
import type { DDI_Extraction_result_I } from "../types/ddi_extraction_result";

interface ResultsTableProps {
  results: DDI_Extraction_result_I[];
  isLoading: boolean;
}

const ResultsTable: React.FC<ResultsTableProps> = ({ results, isLoading }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-700">Results</h3>
        <button className="text-sm text-gray-500 hover:text-gray-700">Clear</button>
      </div>

      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-10">
          <div className="flex space-x-2">
            <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-4 h-4 bg-green-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-4 h-4 bg-red-500 rounded-full animate-bounce"></div>
          </div>
          <p className="mt-4 text-gray-500 text-sm">Analyzing interactions...</p>
        </div>
      ) : results.length === 0 ? (
        <p className="text-center text-gray-500">No results yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 text-sm text-left">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-4 py-2">Drug 1</th>
                <th className="px-4 py-2">Drug 2</th>
                <th className="px-4 py-2">Interaction Type</th>
              </tr>
            </thead>
            <tbody>
              {results.map((result, index) => (
                <tr key={index} className={`border-t hover:bg-gray-50 ${result.label==="none" && "hidden"} `}>
                  <td className="px-4 py-2">
                    <div className="flex items-center space-x-2">
                      <span className="w-2.5 h-2.5 bg-blue-300 rounded-full"></span>
                      <span>{result.drug1}</span>
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex items-center space-x-2">
                      <span className="w-2.5 h-2.5 bg-blue-300 rounded-full"></span>
                      <span>{result.drug2}</span>
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        result.label === "int"
                          ? "bg-red-100 text-red-600"
                          : result.label !== "none"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-green-100 text-green-600"
                      }`}
                    >
                      {result.label}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ResultsTable;
