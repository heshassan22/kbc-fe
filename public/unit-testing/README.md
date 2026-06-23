# Unit Testing — Checkpoint Assignment

Apply lessons **01–05** of the Unit Testing track: test pure logic, mocks, and async code.
Jest is **already set up** for you.

**Spec:** https://heshassan22.github.io/netcentric-academy/#/unit-testing/checkpoint-assignment

## Run the tests

```bash
npm install          # first time only
npm test             # run once
npm run test:watch   # re-run on save
```

## What's here

```
src/
  money.js / money.test.js        formatPrice(cents)   — Part A
  users.js / users.test.js        loadUser(id) -> fetch — Part B (mock fetch)
  debounce.js / debounce.test.js  debounce(fn, ms)     — Part B (fake timers)
```

The source files are written for you. Each `*.test.js` has **one worked example** — add the
remaining cases listed in its comments (and in the spec). Test **behaviour**, not implementation.
