import Counter from './counter.js';

// Assignment Part 1 (DOM) — https://heshassan22.github.io/netcentric-academy/#/unit-testing/assignment
// Render markup in jsdom, instantiate the component, dispatch real events, and
// assert on what the user sees (text) — not internal fields.
function mount() {
  document.body.innerHTML = `
    <div class="counter">
      <button class="counter__inc">+</button>
      <button class="counter__reset">reset</button>
      <span class="counter__value">0</span>
    </div>`;
  const el = document.querySelector('.counter');
  Counter(el, { step: 1 });
  return el;
}

describe('Counter', () => {
  it('increments the displayed value on click', () => {
    const el = mount();
    el.querySelector('.counter__inc').click();
    expect(el.querySelector('.counter__value')).toHaveTextContent('1');
  });

  // Add a test for:
  // - resets to 0 when the reset button is clicked
  //     el.querySelector('.counter__reset').click()
});
