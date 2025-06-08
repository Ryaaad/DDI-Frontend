import type { FC } from "react";
import type { DDI_Extraction_result_I } from "../../../types/ddi_extraction_result";
import { FaCheckCircle, FaEraser, FaPills } from "react-icons/fa";
import { RiTestTubeFill } from "react-icons/ri";

interface ResultsTableProps {
  results: DDI_Extraction_result_I[];
  isLoading: boolean;
}

const ResultsTable: FC<ResultsTableProps> = ({ results, isLoading }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-700">Results</h3>
        <button className="text-sm text-black  flex items-center cursor-pointer border border-solid border-gray-300 font-medium rounded-lg p-2 px-3 gap-2 ">
          <FaEraser />
          Clear
        </button>
      </div>

      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-10">
          <div className="flex space-x-2">
            <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-4 h-4 bg-green-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-4 h-4 bg-red-500 rounded-full animate-bounce"></div>
          </div>
          <p className="mt-4 text-gray-500 text-sm">
            Analyzing interactions...
          </p>
        </div>
      ) : results.length === 0 ? (
        <div className="flex flex-col w-full items-center justify-center gap-2">
          <div style={{ position: "relative", display: "inline-block" }}>
            <RiTestTubeFill size={32} color="#808A9D" />
            <div className="absolute top-[75%] left-[80%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center p-[1px] bg-white rounded-full ">
              <FaCheckCircle size={15} color="#808A9D" />
            </div>
          </div>
          <p className="text-center text-gray-500">No results yet.</p>
        </div>
      ) : (
        <div className="max-h-64 overflow-y-scroll">
          <table className="min-w-full border border-gray-200 text-left">
            <thead className="bg-gray-100 text-gray-700 text-lg sticky top-0 ">
              <tr>
                <th className="px-4 py-2">Drug Pair</th>
                <th className="px-4 py-2">Drug 1</th>
                <th className="px-4 py-2">Drug 2</th>
                <th className="px-4 py-2">Interaction Type</th>
              </tr>
            </thead>
            <tbody>
              {results.map((result, index) => (
                <tr key={index} className="border-t  ">
                  <td className="px-4 py-3">
                    <div className="flex items-center space-x-2">
                      <span className="w-7 h-7 bg-blue-50 flex items-center justify-center rounded-full">
                        <FaPills fill="#155dfc" />
                      </span>
                      <span>
                        {result.drug1} - {result.drug2}{" "}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center space-x-2">
                      <span>{result.drug1}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center space-x-2">
                      <span>{result.drug2}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-3 py-1 rounded-full font-medium ${
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
