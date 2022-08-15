/** @type {import('@docusaurus/types').DocusaurusConfig} */
require("dotenv").config();
module.exports = {
  title: "TruBudget",
  tagline: "TruBudget - a trusted public expenditure tool",
  url: "https://trubudget.net/",
  baseUrl: "/",
  onBrokenLinks: "ignore",
  favicon: "img/favicon.ico",
  onBrokenMarkdownLinks: "ignore",
  organizationName: "openkfw",
  projectName: "trubudget-website",
  plugins: [require.resolve("docusaurus-lunr-search")],
  themeConfig: {
    navbar: {
      title: "TruBudget",
      items: [
        {
          type: "doc",
          docId: "README",
          position: "left",
          label: "Documentation",
        },
        {
          href: "https://github.com/openkfw/TruBudget/discussions",
          label: "Community",
          position: "left",
        },
        {
          href: "https://taas.trubudget.net",
          label: "TruBudget as a Service",
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
              to: "/docs/README",
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
            {
              label: "TruBudget as a Service",
              href: "https://taas.trubudget.net",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TruBudget`,
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
          customCss: [require.resolve("./src/css/custom.css")],
        },
      },
    ],
  ],
};
