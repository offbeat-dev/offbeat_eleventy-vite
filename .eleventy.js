const EleventyVitePlugin = require("@11ty/eleventy-plugin-vite");
module.exports = function (eleventyConfig) {
  // Copy/pass-through files
  eleventyConfig.addPassthroughCopy("src/assets/css");
  eleventyConfig.addPassthroughCopy("src/assets/js");

  eleventyConfig.addPlugin(EleventyVitePlugin, {
    tempFolderName: ".11ty-vite", // Default name of the temp folder
    // Vite options (equal to vite.config.js inside project root)
    viteOptions: {
      publicDir: "public",
      clearScreen: false,
      server: {
        mode: "development",
        middlewareMode: true,
      },
      appType: "custom",
      assetsInclude: ["**/*.xml", "**/*.txt"],
      build: {
        mode: "production",
        sourcemap: "true",
        manifest: true,
      },
    },
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
    templateFormats: ["md", "html", "hbs"],
    htmlTemplateEngine: "hbs",
    markdownTemplateEngine: "hbs",
    dataTemplateEngine: "hbs",
    passthroughFileCopy: true,
  };
};
