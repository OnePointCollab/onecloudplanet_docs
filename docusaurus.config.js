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
  onBrokenLinks: 'throw',
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

      themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        algolia: {
          appId: 'O02PSVESHZ',
          apiKey: '3f61da548f823e3d2e4b9e90d7a0cfda',
          indexName: 'docs.ocplanet.cloud',
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
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
          title: 'OneCloudPlanet',
          logo: {
            alt: 'OneCloudPlanet',
            src: 'img/logo.svg',
          },
          
          items: [
            // {
            //   type: 'docSidebar',
            //   to: '/documentation',
            //   sidebarId: 'tutorialSidebar',
            //   position: 'left',
            //   label: 'Documentation',
            // },
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
        },
      }),
};

module.exports = config;
