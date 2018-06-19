const { decorateConfig } = require("./");

test("should compose and maintain config object with css", () => {
  const initialConfig = {
    updateChannel: "stable",
    fontSize: 12,
    cursorAccentColor: "#000",
    css: `
      body {
        font-weight: 400;
      }`
  };

  expect(decorateConfig(initialConfig)).toEqual({
    updateChannel: "stable",
    fontSize: 12,
    cursorAccentColor: "#000",
    css: `
      body {
        font-weight: 400;
      }
      .xterm-viewport {
        overflow: hidden !important;
      }
    `
  });
});
