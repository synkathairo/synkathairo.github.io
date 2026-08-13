import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import markdownIt from "markdown-it";
import footnote from "markdown-it-footnote";
import markdownItMathTemml from "markdown-it-math/temml";
import wikilinksPlus from "markdown-it-wikilinks-plus";

export default function (eleventyConfig) {
  eleventyConfig.setTemplateFormats(["md", "markdown", "html", "liquid"]);
  eleventyConfig.addExtension("markdown", { key: "md" });
  eleventyConfig.addPlugin(syntaxHighlight);
  let options = {
    html: true,
    breaks: true,
    linkify: true,
  };
  eleventyConfig.setLibrary("md", markdownIt(options));
  eleventyConfig.amendLibrary("md", (markdownIt) => {
    markdownIt
      .use(footnote)
      .use(markdownItMathTemml, {
        temmlOptions: {
          throwOnError: false,
          annotate: true,
        },
      })
      .use(wikilinksPlus, {
        pageLink: {
          absoluteBaseURL: "/glossary/",
          forceAllLinksAbsolute: true,
          uriSuffix: "/",
        },
        imageEmbed: {
          absoluteBaseURL: "/assets/images/",
          forceAllImageUrlsAbsolute: true,
          defaultAltText: true,
        },
      });
  });

  eleventyConfig.amendLibrary("md", (mdLib) => {
    mdLib.set({ linkify: true });
  });

  eleventyConfig.ignores.add("README.md");

  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("llms.txt");
  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi
      .getAll()
      .filter((item) => item.inputPath.includes("posts/"))
      .filter((post) => post.data.published !== false)
      .sort((a, b) => b.date - a.date);
  });
  eleventyConfig.addCollection("glossary", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("./glossary/*.{md,markdown}")
      .sort((a, b) =>
        String(a.data.title ?? a.page.fileSlug).localeCompare(
          String(b.data.title ?? b.page.fileSlug),
        ),
      );
  });

  eleventyConfig.addGlobalData("eleventyComputed.permalink", function () {
    return (data) => {
      if (data.published === false) {
        return false;
      }

      return data.permalink;
    };
  });
}
