# Typescript-rollup-starter

This is a boiler-plate for both library authors and application developers targetting TypeScript, rollup.js bundler and jest for tests.

## Usage

Clone this repo and rename appropriately to your needs and update the name on the package.json.


In order to test React components, using enzyme, please install the following:

- enzyme
- @types/enzyme
- enzyme-adapter-react-16
- @types/enzyme-adapter-react-16

Also, ensure to register the `jest.setup.ts` inside `jest.config.js` by adding it like so:

```javascript

    "setupFilesAfterEnv": ["<rootDir>/jest.setup.ts"]

```

## Creating Tests

Write your tests inside the test folder using ** `[module_name].spec.ts` ** as test name template e.g ** `LoginModule.spec.ts or LoginModule.spec.tsx` ** Note `.tsx` for JSX e.g for react components.

## Running Tests

```cli

    npm run test

```

Check the scripts key in `package.json ` for the complete list of possible script targets.

