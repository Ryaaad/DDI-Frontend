import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
}

const Section = ({ children }: SectionProps) => {

  return (
    <div
      className={`bg-white rounded-lg shadow-md mb-6 space-y-8 p-6 `}
    >
      {children}
    </div>
  );
};

export default Section;
