// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OneCloudPlanet\'s Documentation',
  // tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',
  // Set the production url of your site here
  url: 'https://docs.ocplanet.cloud/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'onecloudplanet', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ua'],
    localeConfigs: {
      en: {
        label:'English',
        direction: 'ltr',
        path:'en'
      },
      ua:{
        label:'Українська',
        direction: 'ltr',
        path:'ua'
      }
    }
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: ({versionDocsDirPath, docPath}) =>
            `https://github.com/OnePointCollab/onecloudplanet_docs/edit/main/${versionDocsDirPath}/${docPath}`,
        },

        
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic",
        config: {
          petstore_versioned: {
            specPath: "examples/petstore.yaml",
            outputDir: "docs/petstore_versioned", // No trailing slash
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
            version: "2.0.0", // Current version
            label: "v2.0.0", // Current version label
            baseUrl: "/petstore_versioned/swagger-petstore-yaml", // Leading slash is important
            versions: {
              "1.0.0": {
                specPath: "examples/petstore-1.0.0.yaml",
                outputDir: "docs/petstore_versioned/1.0.0", // No trailing slash
                label: "v1.0.0",
                baseUrl: "/petstore_versioned/1.0.0/swagger-petstore-yaml", // Leading slash is important
              },
            },
          },
          api: {
            specPath: "api/CloudOpenAPI.json",
            proxy: "https://cors.pan.dev",
            outputDir: "docs/api",
            version: "2.0.0",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
            template: "api.mustache", // Customize API MDX with mustache template
            // downloadUrl:
            //   "https://raw.githubusercontent.com/PaloAltoNetworks/docusaurus-openapi-docs/main/demo/examples/petstore.yaml",
            hideSendButton: false,
            // showSchemas: true,
          },
          // cos: {
          //   specPath: "examples/openapi-cos.json",
          //   outputDir: "docs/cos",
          //   sidebarOptions: {
          //     groupPathsBy: "tag",
          //   },
          // },
        },
      },
    ],
  ],
  themes: ["docusaurus-theme-openapi-docs"],
  stylesheets: [
    {
      href: "https://use.fontawesome.com/releases/v5.11.0/css/all.css",
      type: "text/css",
    },
  ],
  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  ({
    algolia: {
      appId: 'NQO6IXTPQW',
      apiKey: 'a96759f341966142e7b893daa53a61a1',
      indexName: 'onecloudplanet',
      contextualSearch: true,
      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      // externalUrlRegex: 'https://docs.ocplanet.cloud',
      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      // replaceSearchResultPathname: {
      //   from: '/docs/', // or as RegExp: /\/docs\//
      //   to: '/',
      // },

    },

    //   searchPagePath: false,

    // },
    // Replace with your project's social card
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    metadata:[
      {name:'og:image', content:'https://i.imgur.com/uoDPdKD.png'},
    ],
    image: 'https://i.imgur.com/uoDPdKD.png',
    navbar: {
      title: 'OneCloudPlanet',

      logo: {
        alt: 'OneCloudPlanet',
        src: 'img/logo.svg',
      },
      
      items: [
        {
          type: 'docSidebar',
          to: '/documentation',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          type: 'docSidebar',
          to: '/category/api',
          sidebarId: 'api',
          position: 'left',
          label: 'API Documentation',
        },
        {
          type: 'search',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        // {to: '/documentation', label: 'Documentation', position: 'left'},
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} OneCloudPlanet. Documentation for users`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ["ruby", "csharp", "php", "java", "powershell"],
    },
    languageTabs: [
      {
        highlight: "bash",
        language: "curl",
        logoClass: "bash",
      },
      {
        highlight: "python",
        language: "python",
        logoClass: "python",
        variant: "requests",
      },
      {
        highlight: "go",
        language: "go",
        logoClass: "go",
      },
      {
        highlight: "javascript",
        language: "nodejs",
        logoClass: "nodejs",
        variant: "axios",
      },
      {
        highlight: "ruby",
        language: "ruby",
        logoClass: "ruby",
      },
      {
        highlight: "csharp",
        language: "csharp",
        logoClass: "csharp",
        variant: "httpclient",
      },
      {
        highlight: "php",
        language: "php",
        logoClass: "php",
      },
      {
        highlight: "java",
        language: "java",
        logoClass: "java",
        variant: "unirest",
      },
      {
        highlight: "powershell",
        language: "powershell",
        logoClass: "powershell",
      },
    ],
  }),
};

module.exports = config;
