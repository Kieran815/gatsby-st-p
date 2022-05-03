module.exports = {
  siteMetadata: {
    title: `St. Peter's United Church of Christ, Frankfort, IL`,
    description: `Messages, News, and Information from St. Peters United Church of Christ in Frankfort, IL`,
    author: `@kmilligan`,
    // update site url
    siteUrl: `https://kmilligan.info/`,
  },
  pathPrefix: '/gatsby-st-p',
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
        name: `st-peters-ucc`,
        short_name: `St. Peter's UCC`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/Rooster.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // *** URL FOR WORDPRESS SITE, TO BE UPDATED
        url: `https://stpetersucc.org/graphql`,
        // protocol: `https`,
        // hostingWPCOM: true,
        // useACF: true,
        schema: {
          timeout: 1000000,
          perPage: 10,
          requestConcurrency: 5,
        },
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
