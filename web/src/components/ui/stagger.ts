export default function stagger(
  count: number,
  delay: number,
  onStep: (i: number) => void,
) {
  let i = 0;
  const tick = () => {
    if (i >= count) return;
    onStep(i);
    i++;
    setTimeout(tick, delay);
  };
  tick();
}
