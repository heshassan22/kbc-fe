# Unit Testing — Assignment (DOM Tests & Coverage)

This extends the **checkpoint** project. It applies lessons **06–08**: test a component in
the DOM, organize the suite, and make coverage **meaningful**. Jest is **already set up** for you
(including the coverage threshold).

**Spec:** https://heshassan22.github.io/netcentric-academy/#/unit-testing/assignment
(If you skipped the checkpoint, do https://heshassan22.github.io/netcentric-academy/#/unit-testing/checkpoint-assignment first.)

## Run the tests

```bash
npm install             # first time only
npm test                # run once
npm run test:watch      # re-run on save
npm run test:coverage   # with a coverage report (enforces the 80% threshold)
```

## What's here

```
src/
  money.js / users.js / debounce.js   checkpoint logic + tests
  counter.js                          a DOM component         — under test (provided)
  counter.test.js                     Part 1 — DOM + custom event
```

## Your job

1. **Part 1 (DOM):** in `counter.test.js`, the click test is filled in — add the test for the
   `counter:reset` custom event (dispatch it on `window`, assert the display went back to `0`).
2. **Part 2 (coverage):** run `npm run test:coverage`. The config already enforces an 80%
   threshold — write tests until it passes, and make sure each test asserts something real (find
   any "vanity" test that runs code but asserts nothing, and make it real).

Assert on what the user sees, keep the suite grouped and readable, and gut-check coverage by
breaking a line of production code — if no test goes red, that line isn't meaningfully covered.
