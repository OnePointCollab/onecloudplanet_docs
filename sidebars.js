/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
 const fs = require('fs');
 const path = require('path');
 
 // Путь к вашим документам (обычно это папка docs в корне проекта)
 const docsDirPath = path.join(__dirname, '.', 'docs');
 const excludeDirName = 'api'; // Замените на имя папки, которую хотите исключить
 
function generateSidebarItems(dirPath, basePath = '') {
  const items = fs.readdirSync(dirPath, { withFileTypes: true });
  return items.reduce((acc, item) => {
    if (item.isDirectory() && item.name === excludeDirName) {
      return acc;
    }

    const itemPath = path.join(dirPath, item.name);
    const relativeItemPath = path.relative(docsDirPath, itemPath).replace(/\\/g, '/');

    if (item.isDirectory()) {
      const categoryFilePath = path.join(itemPath, '_category_.json');
      let label = item.name;

      if (fs.existsSync(categoryFilePath)) {
        const categoryData = JSON.parse(fs.readFileSync(categoryFilePath));
        label = categoryData.label || label;
      }

      const nestedItems = generateSidebarItems(itemPath);
      if (nestedItems.length > 0) {
        acc.push({
          type: 'category',
          label: label,
          items: nestedItems,
        });
      }
    } else if (item.isFile() && path.extname(item.name) === '.md') {
      acc.push(relativeItemPath.replace(/\.md$/, ''));
    }

    return acc;
  }, []);
}

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  // tutorialSidebar: [{
  //   type: "category",
  //   label: "Documentation",
  //   link: {
  //     type: "doc",
  //     id: "index"
  //   },
  //   items: [
  //     {
  //       type: "autogenerated",
  //       dirName: "js",
  //       exclude: ["index"]
  //     }
  //   ]
  // }],
  tutorialSidebar: generateSidebarItems(docsDirPath),
  api: [
    {
      type: "category",
      label: "API",
      link: {
        type: "generated-index",
        title: "API",
        description:
          "This is a sample server. You can find out more about Swagger at http://swagger.io or on irc.freenode.net, #swagger. For this sample, you can use the api key special-key to test the authorization filters.",
        slug: "/category/api",
      },
      items: require("./docs/api/sidebar.js"),
    },
  ],

};

module.exports = sidebars;
