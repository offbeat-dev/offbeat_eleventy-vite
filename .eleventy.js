module.exports = function (eleventyConfig) {
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
  };
};
