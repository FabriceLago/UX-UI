export const INTRO_DURATION = 90;
export const FACT_DURATION = 90;
export const OUTRO_DURATION = 90;

export const FACTS: { text: string; bg: [string, string]; catColor: string }[] = [
  {
    text: "Un chat dort en moyenne 12 à 16 heures par jour.",
    bg: ["#a1c4fd", "#c2e9fb"],
    catColor: "#4a4a4a",
  },
  {
    text: "Il peut sauter jusqu'à 6 fois sa propre taille !",
    bg: ["#84fab0", "#8fd3f4"],
    catColor: "#e07a5f",
  },
  {
    text: "Chaque truffe de chat est unique, comme une empreinte digitale.",
    bg: ["#fbc2eb", "#a6c1ee"],
    catColor: "#f4a261",
  },
];

export const TOTAL_DURATION =
  INTRO_DURATION + FACTS.length * FACT_DURATION + OUTRO_DURATION;
