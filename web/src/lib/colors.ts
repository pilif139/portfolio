export const COLORS = {
  pink: "#FF6B9D",
  teal: "#4ECDC4",
  yellow: "#FFE66D",
  green: "#95E76B",
  red: "#FF6B6B",
  lavender: "#B39DDB",
  coral: "#FF8A65",
  sky: "#4FC3F7",
  lime: "#DCE775",
  peach: "#FFAB91",
  mint: "#80CBC4",
  lilac: "#CE93D8",
  gold: "#FFD54F",
  turquoise: "#26C6DA",
  salmon: "#FF8A80",
} as const;

export const COLOR_LIST = Object.values(COLORS);

export function randomColor(): string {
  return COLOR_LIST[Math.floor(Math.random() * COLOR_LIST.length)];
}
