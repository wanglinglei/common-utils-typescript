export default [
  {
    ignores: ["__tests__/*", "html/*", "build/*"],
  },
  {
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
      "no-debugger": "error",
      "no-console": "error",
    },
  },
];
