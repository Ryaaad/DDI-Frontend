import { type FC } from "react";

const ProgressCircle: FC<{ value: number }> = ({ value }) => {
  // const dashArray = 251.2; // Circumference for a 40px radius
  // const dashOffset = dashArray - value * dashArray;

  return (
    <div
      className="relative w-18 h-18 flex items-center justify-center rounded-full border-6 border-custom-purple border-tr-red "
      // style={{ borderTopRight: "2px solid red" }}
    >
      <span className="absolute text-custom-purple text-xl font-bold">
        0.815
      </span>
    </div>
  );
};

export default ProgressCircle;
