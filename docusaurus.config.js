/** @type {import('@docusaurus/types').DocusaurusConfig} */
require("dotenv").config();
module.exports = {
  title: "TruBudget",
  tagline: "TruBudget - a trusted public expenditure tool",
  url: "https://openkfw.github.io/trubudget-website/",
  baseUrl: "/trubudget-website/",
  onBrokenLinks: "warn",
  favicon: "img/favicon.ico",
  onBrokenMarkdownLinks: "throw",
  organizationName: "openkfw",
  projectName: "trubudget-website",
  themeConfig: {
    navbar: {
      title: "TruBudget",
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Documentation",
        },
        {
          href: "https://github.com/openkfw/TruBudget/discussions",
          label: "Community",
          position: "left",
        },
        {
          href: "https://github.com/openkfw/TruBudget",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Github Discussions",
              href: "https://github.com/openkfw/TruBudget/discussions",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/openkfw/TruBudget",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TruBudget`,
    },
    algolia: {
      apiKey: process.env.ALGOLIA_API_KEY,
      indexName: process.env.ALGOLIA_INDEX_NAME,

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: see doc section below
      appId: process.env.ALGOLIA_APP_ID,

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/DocItem",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
