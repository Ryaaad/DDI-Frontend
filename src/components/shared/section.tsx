import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  customclass?: string;
}

const Section = ({ children, customclass }: SectionProps) => {
  return (
    <div
      className={`bg-white p-6 rounded-lg shadow-md mb-6 space-y-8 ${customclass} `}
    >
      {children}
    </div>
  );
};

export default Section;
