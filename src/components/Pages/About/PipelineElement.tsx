import type { JSX } from "react";

interface PipelineElementprops {
  title: string;
  description?: string;
  icon: JSX.Element;
}

const PipelineElement = ({
  icon,
  title,
  description,
}: PipelineElementprops) => {
  return (
    <div className="flex flex-col gap-2 items-center font-medium w-40 ">
      <div className="rounded-full bg-blue-50 w-18 h-18 flex justify-center items-center ">
        {icon}
      </div>
      <div className="w-full text-center">
        <h1>{title}</h1>
        {<p className="text-sm text-gray-400"> {description} </p>}
      </div>
    </div>
  );
};

export default PipelineElement;
