import type { ReactNode } from "react";

interface ContentBoxprops {
  title: string;
  description: string;
  icon: ReactNode;
}
const ContentBox = ({ description, icon, title }: ContentBoxprops) => {
  return (
    <div className="rounded-lg bg-blue-50 p-4 flex-1 space-y-2">
      <div className="flex items-center gap-2">
        {icon}
        <h4 className="font-medium text-gray-700">{title}</h4>
      </div>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default ContentBox;
