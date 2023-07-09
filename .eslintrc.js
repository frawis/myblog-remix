/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: [
    "@remix-run/eslint-config",
    "@remix-run/eslint-config/node",
    "prettier",
    "plugin:tailwindcss/recommended",
  ],
  plugins: ["tailwindcss"],
  rules: {
    "tailwindcss/class-order": "error",
    "tailwindcss/no-custom-classname": "off",
  },
  settings: {
    tailwindcss: {
      callees: ["cn", "cva"],
      config: "./tailwind.config.ts",
    },
  },
}
