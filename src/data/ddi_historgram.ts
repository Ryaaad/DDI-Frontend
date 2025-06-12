export const DDI_TYPE_NAMES = ["None", "Mechanism", "Effect", "Advice", "Int"];

const sizes = [
  {
    name: "None",
    nbr: 23772,
  },
  {
    name: "Mechanism",
    nbr: 1319,
  },
  {
    name: "Effect",
    nbr: 1667,
  },
  {
    name: "Advice",
    nbr: 826,
  },
  {
    name: "Int",
    nbr: 189,
  },
];

const DDI_TYPES_PERFORMANCE = [
  {
    name: "None",
    nbr: 0.95,
  },
  {
    name: "Mechanism",
    nbr: 0.7,
  },
  {
    name: "Effect",
    nbr: 0.8,
  },
  {
    name: "Advice",
    nbr: 0.8,
  },
  {
    name: "Int",
    nbr: 0.64,
  },
];
const ddiColors = [
  "rgba(209, 213, 219, 0.5)", // None
  "oklch(54.6% 0.245 262.881)", // Mechanism
  "oklch(72.3% 0.219 149.579)", // Effect
  "oklch(85.2% 0.199 91.936)", // Advice
  "oklch(63.7% 0.237 25.331)", // Int
];
export const DDI_HISTO_DATA = {
  labels: DDI_TYPE_NAMES,
  datasets: [
    {
      label: "Dataset 1",
      data: DDI_TYPE_NAMES.map((_, index) => sizes[index].nbr),
      backgroundColor: DDI_TYPE_NAMES.map((label) => {
        switch (label) {
          case "None":
            return ddiColors[0];
          case "Mechanism":
            return ddiColors[1];
          case "Effect":
            return ddiColors[2];
          case "Evidence":
            return ddiColors[3];
          case "Int":
            return ddiColors[4];
          default:
            return "rgba(0, 0, 0, 0.5)"; // Black fallback
        }
      }),
    },
  ],
};

export const DDI_PERFORMANCES_HIST = {
  labels: DDI_TYPE_NAMES,
  datasets: [
    {
      label: "Dataset 1",
      data: DDI_TYPE_NAMES.map((_, index) => DDI_TYPES_PERFORMANCE[index].nbr),
      backgroundColor: "#4B5EAA",
    },
  ],
};
