import React from "react";

interface Result {
  drugPair: string;
  interactionType: string;
  confidenceScore: number;
}

interface ResultsTableProps {
  results: Result[];
}

const ResultsTable: React.FC<ResultsTableProps> = ({ results }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-gray-700">Results</h3>
        <button className="text-gray-500 hover:text-gray-700">Clear</button>
      </div>
      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-600">
            <th className="p-2">DRUG PAIR</th>
            <th className="p-2">INTERACTION TYPE</th>
            <th className="p-2">CONFIDENCE SCORE</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr key={index} className="border-t">
              <td className="p-2 flex items-center space-x-2">
                <span className="w-4 h-4 bg-blue-200 rounded-full"></span>
                <span>{result.drugPair}</span>
              </td>
              <td className="p-2">
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    result.interactionType === "Antagonistic"
                      ? "bg-red-100 text-red-600"
                      : result.interactionType === "Inhibitory"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-green-100 text-green-600"
                  }`}
                >
                  {result.interactionType}
                </span>
              </td>
              <td className="p-2">
                <div className="w-24 bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-gray-400 h-2.5 rounded-full"
                    style={{ width: `${result.confidenceScore * 100}%` }}
                  ></div>
                </div>
                <span className="ml-2 text-gray-600">
                  {result.confidenceScore}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultsTable;
