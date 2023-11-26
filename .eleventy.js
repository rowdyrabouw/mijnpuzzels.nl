module.exports = (eleventyConfig) => {
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
