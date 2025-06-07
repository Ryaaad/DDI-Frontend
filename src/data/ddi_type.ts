export const DDI_TYPES = [
  {
    name: "None",
    describtion:
      "No interaction is present between the drug entities mentioned in the text.",
    bg: "bg-gray-300",
  },
  {
    name: "Mechanism",
    describtion:
      "Describes how drugs affect each other's biochemical processes or pharmacokinetics.",
    bg: "bg-blue-600",
  },
  {
    name: "Effect",
    describtion:
      "Describes changes in drug effects or pharmacodynamics due to interaction.",
    bg: "bg-green-500",
  },
  {
    name: "Advice",
    describtion:
      "Provides recommendations regarding drug use when potential interactions exist.",
    bg: "bg-yellow-400",
  },
  {
    name: "Int",
    describtion:
      "General interaction between drugs without specific details about mechanism, effect, or advice.",
    bg: "bg-red-500",
  },
];
