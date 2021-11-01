// *** Original Gatsby NPX Code
// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions
//   createPage({
//     path: "/using-dsg",
//     component: require.resolve("./src/templates/using-dsg.js"),
//     context: {},
//     defer: true,
//   })
// }

const path = require("path");

exports.createPages = async({ graphql, actions, reporter }) => {
  
  const { createPage } = actions;

  const archiveTemplate = path.resolve("./src/templates/archive.js");

  const result = await graphql(`
    query wpCategoriesQuery {
      wp {
        readingSettings {
          postsPerPage
        }
      }
      allWpCategory {
        edges {
          node {
            id
            name
            count
            uri
            slug
          }
        }
      }
    }
  `)

  // error checking
  if (result.errors) {
    reporter.panicOnBuild(`Something Went Wrong: `, result.errors);
    return;
  }

  const {wp, allWpCategory } = result.data;
  
  // Create Category Pages
  allWpCategory.edges.forEach(category => {
    const postsPerPage = wp.readingSettings.postsPerPage;
    const numberOfPosts = category.node.count;
    // round up for total number of pages
    const numPages = Math.ceil(numberOfPosts / postsPerPage);
    // prevent category page creation for empty categories and uncategorized posts
    if(numberOfPosts > 0 || category.node.name !== "uncategorized") {
      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? category.node.uri : `${category.node.uri}${i + 1}`,
          component: archiveTemplate,
          context: {
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages,
            currentPage: i + 1,
            catId: category.node.id,
            catName: category.node.name,
            catUri: category.node.uri,
            categories: allWpCategory
          }
        })
      })
    }
  })
}