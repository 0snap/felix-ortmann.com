module.exports = {
    extends: ['google', 'react-app'],
    root: true,
    ignorePatterns: ["public/**", ".eslintrc.js"],
    rules: {
      "react-hooks/exhaustive-deps": [
        "error"
      ],
      "max-len": [
        "warn",
        120
      ],
    },
  };