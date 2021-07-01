/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "TruBudget",
  tagline: "Dinosaurs are cool",
  url: "https://mayrmartin.github.io/TrubudgetWebsite/",
  baseUrl: "/TrubudgetWebsite/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "mayrmartin", // Usually your GitHub org/user name.
  projectName: "TrubudgetWebsite", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "TruBudget",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
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
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
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
      apiKey: "YOUR_API_KEY",
      indexName: "YOUR_INDEX_NAME",

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: see doc section below
      appId: "YOUR_APP_ID",

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
