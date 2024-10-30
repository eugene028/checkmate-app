module.exports = {
  root: true,
  requireConfigFile: false,
  extends: [
    "@react-native",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "plugin:import/recommended",
    "eslint-config-prettier",
    "plugin:prettier/recommended",
  ],
  plugins: [
    "react-refresh",
    "react",
    "react-hooks",
    "@typescript-eslint",
    "prettier",
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "react/react-in-jsx-scope": "off",
    "react/no-unstable-nested-components": "off",
    "react-native/no-inline-styles": "off",
    "react-hooks/exhaustive-deps": "off",
    "react-refresh/only-export-components": [
      "warn",
      {allowConstantExport: true},
    ],
    "react/display-name": "off",
    "import/no-unresolved": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
