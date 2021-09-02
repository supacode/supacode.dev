module.exports = {
  siteMetadata : {
    title : `Maverick`,
    description : `Maverick's Portfolio`,
    author : `@supacode`,
  },
  plugins : [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    {
      resolve : `gatsby-source-filesystem`,
      options : {
        name : `images`,
        path : `${__dirname}/src/images`,
      },
    },
    {
      resolve : `gatsby-source-filesystem`,
      options : {
        name : `content`,
        path : `${__dirname}/content/`,
      },
    },
    {
      resolve : `gatsby-plugin-manifest`,
      options : {
        name : `gatsby-starter-default`,
        short_name : `starter`,
        start_url : `/`,
        background_color : `#663399`,
        theme_color : `#663399`,
        display : `minimal-ui`,
        icon : `src/images/gatsby-icon.png`, // This path is relative to the
        // root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline
    // functionality To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-typescript`,
  ],
};
