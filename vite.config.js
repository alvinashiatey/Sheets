const path = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  build: {
    target: "esnext",
    minify: "terser",
    lib: {
      entry: path.resolve(__dirname, "lib/main.js"),
      name: "Sheets",
      fileName: (format) => `sheets.${format}.js`,
    },
  },
});
