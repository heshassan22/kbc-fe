import Counter from './counter.js';

// Assignment Part 1 (DOM) — https://heshassan22.github.io/netcentric-academy/#/unit-testing/assignment
// Render markup in jsdom, instantiate the component, dispatch real events, and
// assert on what the user sees (text/attributes) — not internal fields.
function mount() {
  document.body.innerHTML = `
    <div class="counter">
      <button class="counter__btn">+</button>
      <span class="counter__value">0</span>
    </div>`;
  const el = document.querySelector('.counter');
  new Counter(el, { step: 1 });
  return el;
}

describe('Counter', () => {
  it('increments the displayed value on click', () => {
    const el = mount();
    el.querySelector('.counter__btn').click();
    expect(el.querySelector('.counter__value')).toHaveTextContent('1');
  });

  // Add a test for:
  // - resets to 0 on a 'counter:reset' custom event
  //     window.dispatchEvent(new CustomEvent('counter:reset'))
});
