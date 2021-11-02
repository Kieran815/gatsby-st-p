module.exports = {
  siteMetadata: {
    title: `St. Peter's United Church of Christ, Frankfort, IL`,
    description: `Messages, News, and Information from St. Peters United Church of Christ in Frankfort, IL`,
    author: `@kmilligan`,
    // update site url
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // *** URL FOR WORDPRESS SITE, TO BE UPDATED
        url: `http://cakeit.local/graphql`,
        // url: 'https://stpetersuccfrankfortil.wordpress.com/graphql',
        protocol: `https`,
        hostingWPCOM: true,
        useACF: true,
      },
    },
    `gatsby-plugin-styled-components`,
    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     font: [`Teko\:200, 400, 500, 600, 700`],
    //     display: `swap`,
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
