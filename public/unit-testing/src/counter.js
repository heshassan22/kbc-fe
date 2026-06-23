// counter.js — a tiny DOM component to test in jsdom.
// Markup:
//   <div class="counter">
//     <button class="counter__btn">+</button>
//     <span class="counter__value">0</span>
//   </div>
// Clicking the button increments the value. Dispatching a "counter:reset"
// event on window resets it to 0.
export default class Counter {
  constructor(element, { step = 1 } = {}) {
    this.element = element;
    this.step = step;
    this.value = 0;
    this.valueEl = element.querySelector('.counter__value');

    element
      .querySelector('.counter__btn')
      .addEventListener('click', () => this.increment());
    window.addEventListener('counter:reset', () => this.reset());

    this.render();
  }

  increment() {
    this.value += this.step;
    this.render();
  }

  reset() {
    this.value = 0;
    this.render();
  }

  render() {
    this.valueEl.textContent = String(this.value);
  }
}
