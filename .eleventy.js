module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.ignores.add("README.md");
  eleventyConfig.ignores.add("_templates/**");
  eleventyConfig.ignores.add("package.json");
  eleventyConfig.ignores.add("package-lock.json");

  eleventyConfig.addGlobalData("site", {
    title: "Zulu's Tours of Duty Chronicle",
    description: "A campaign chronicle for the Star Wars: Legion Tours of Duty league at Zulu's Board Game Cafe.",
    url: "https://wil-isaacs.github.io",
  });

  eleventyConfig.addGlobalData("navigation", [
    { title: "Paragons", url: "/paragons/" },
    { title: "Registers", url: "/registers/" },
    { title: "Battle Reports", url: "/battles/" },
    { title: "Agendas", url: "/agendas/" },
    { title: "About", url: "/about/" },
  ]);

  eleventyConfig.addFilter("sortByTitle", (items) =>
    [...items].sort((a, b) => (a.data.title || "").localeCompare(b.data.title || ""))
  );

  eleventyConfig.addFilter("sortByDateDesc", (items) =>
    [...items].sort((a, b) => new Date(b.data.date || 0) - new Date(a.data.date || 0))
  );

  eleventyConfig.addFilter("readableDate", (value) => {
    if (!value) {
      return "";
    }

    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      timeZone: "UTC",
    }).format(new Date(value));
  });

  eleventyConfig.addCollection("latestRecords", (collectionApi) => {
    const records = [
      ...collectionApi.getFilteredByGlob("_paragons/**/*.md"),
      ...collectionApi.getFilteredByGlob("_registers/**/*.md"),
      ...collectionApi.getFilteredByGlob("_battles/**/*.md"),
      ...collectionApi.getFilteredByGlob("_agendas/**/*.md"),
    ];

    return records
      .sort((a, b) => new Date(b.data.date || 0) - new Date(a.data.date || 0))
      .slice(0, 6);
  });

  eleventyConfig.addCollection("paragons", (collectionApi) =>
    collectionApi.getFilteredByGlob("_paragons/**/*.md")
  );

  eleventyConfig.addCollection("registers", (collectionApi) =>
    collectionApi.getFilteredByGlob("_registers/**/*.md")
  );

  eleventyConfig.addCollection("battles", (collectionApi) =>
    collectionApi.getFilteredByGlob("_battles/**/*.md")
  );

  eleventyConfig.addCollection("agendas", (collectionApi) =>
    collectionApi.getFilteredByGlob("_agendas/**/*.md")
  );

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    pathPrefix: "/zulus-tours-of-duty-chronicle/",
  };
};
