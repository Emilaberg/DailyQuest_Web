export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "\\.svg$": "jest-transform-stub",
    "\\.(mp4|webm|wav|mp3|m4a|aac|oga)$": "jest-transform-stub", // Add this line
  },
  testMatch: ["**/tests/**/*.test.jsx"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
