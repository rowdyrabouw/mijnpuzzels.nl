// Pull in the environment variables. In dev, this comes from the `.env` file.
// In prod, this comes from Netlify
require("dotenv").config();

const pluginNavigation = require("@11ty/eleventy-navigation");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const embedCodePen = require("@manustays/eleventy-plugin-codepen-iframe");

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(pluginNavigation);
  eleventyConfig.addPlugin(syntaxHighlight);

  // https://github.com/manustays/eleventy-plugin-codepen-iframe
  eleventyConfig.addPlugin(embedCodePen, {
    tabs: "js,result",
    user: "rowdy"
  });

  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy({ "src/txt": "/" });
  eleventyConfig.addPassthroughCopy({ "src/favicon": "/" });

  eleventyConfig.addFilter("toCanonicalUrl", (url) => {
    if (url.slice(-1) === "/") {
      return url;
    } else {
      return `${url}/`;
    }
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "dist",
      templateFormats: ["md", "njk"],
      passthroughFileCopy: true,
    },
  };
};
