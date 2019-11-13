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

