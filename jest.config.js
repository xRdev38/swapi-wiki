module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.(vue|js)", "!**/node_modules/**"],
  coverageDirectory: "./coverage",
  coverageReporters: ["html", "text", "text-summary"],
};
