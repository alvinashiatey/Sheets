const path = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  build: {
    target: "esnext",
    minify: "terser",
    lib: {
      entry: path.resolve(__dirname, "lib/main.js"),
      name: "sheets",
      fileName: (format) => `sheets.${format}.js`,
    },
  },
});
