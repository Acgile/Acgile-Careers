/** @type {import('tailwindcss').Config} */

// Screen Names:
// t: Tablet
// sd: Small Desktop
// md: Medium Desktop
// ld: Large Desktop

export const content = [
  "./app//*.{js,jsx,ts,tsx}",
  "./components//*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    colors: {
      primary: "#00B4F1",
      secondary: "#052039",
      "grey-5f": "#344A5F",
      "grey-71": "#4B5F71",
      "grey-97": "#7A8997",
      "grey-aa": "#919EAA",
      "grey-bc": "#A8B3BC",
      "grey-cf": "#BFC7CF",
      "grey-e2": "#D7DCE2",
      "grey-eb": "#E2E7EB",
      "grey-f5": "#EEF1F5",
      "grey-fa": "#F4F7FA",
      "grey-fd": "#F2FAFD",
      "grey-fe": "#FAFCFE",
    },
  },
  screens: {
    t: { min: "768px" },
    tMax: { min: "767px", max: "1249px" },
    sd: { min: "1250px" },
    md: { min: "1366px" },
    ld: { min: "1601px" },
  },
};
export const plugins = [
  function ({ addUtilities }) {
    const newUtilities = {
      ".before:content": {
        content: "''",
      },
      ".after:content": {
        content: "''",
      },
    };
    addUtilities(newUtilities, ["before", "after"]);
  },
];
