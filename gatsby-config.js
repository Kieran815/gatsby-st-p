module.exports = {
  siteMetadata: {
    title: `St. Peter's United Church of Christ, Frankfort, IL`,
    // hosting for gatsby cloud url
    siteUrl: `https://stpetersfrankfort.gtsb.io/`,
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
        display: `minimal-ui`,
        icon: `src/images/Rooster.jpg`,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // update if church removes url service from WP, get default wp url
        url: `https://stpetersucc.org/graphql`,
        verbose: true,
        schema: {
          timeout: 1000000,
          perPage: 10,
          requestConcurrency: 5,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-robots-txt',
    `gatsby-plugin-sass`
  ],
}
