import stagger from "@/components/ui/stagger";

export default function animateTypewriter(
  element: HTMLElement,
  text: string,
  speed: number = 150,
) {
  element.textContent = "";
  element.setAttribute("aria-label", text);
  stagger(text.length + 1, speed, (i) => {
    element.textContent = text.slice(0, i);
  });
}
