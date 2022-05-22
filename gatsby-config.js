module.exports = {
  siteMetadata: {
    title: `St. Peter's United Church of Christ, Frankfort, IL`,
    description: `Messages, News, and Information from St. Peters United Church of Christ in Frankfort, IL`,
    author: `@kmilligan`,
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
        name: `st-peters-ucc`,
        short_name: `St. Peter's UCC`,
        start_url: `/`,
        background_color: `#663399`,
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/Rooster.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `https://stpetersucc.org/graphql`,
        verbose: true,
        protocol: https,
        hostingWPCOM: false,
        useACF: true,
        schema: {
          timeout: 1000000,
          perPage: 10,
          requestConcurrency: 5,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-robots-txt'
  ],
}
