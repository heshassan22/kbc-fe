// counter.js — a small functional DOM component (no framework, no dependencies).
// Markup:
//   <div class="counter">
//     <button class="counter__inc">+</button>
//     <button class="counter__reset">reset</button>
//     <span class="counter__value">0</span>
//   </div>
// Clicking "+" increments the value; clicking "reset" sets it back to 0.
export default function Counter(element, { step = 1 } = {}) {
  let value = 0;
  const valueEl = element.querySelector('.counter__value');

  const render = () => {
    valueEl.textContent = String(value);
  };

  element.querySelector('.counter__inc').addEventListener('click', () => {
    value += step;
    render();
  });

  element.querySelector('.counter__reset').addEventListener('click', () => {
    value = 0;
    render();
  });

  render();
}
