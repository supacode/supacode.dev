module.exports = {
  siteMetadata: {
    title: `supacode`,
    description: ` Welcome to my little corner of the web, where I share notes, code snippets, and resources on topics that interest me.`,
    author: `@supacode`,
    twitterUsername: '@supacode',
    siteUrl: 'https://www.supacode.dev',
    image: '/preview.png', // Path to your image you placed in the
    // 'static' folder
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/static/blog-images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `supacode | Maverick's Portfolio`,
        short_name: `supacode`,
        start_url: `/`,
        background_color: `#1f2029`,
        theme_color: ` #1f2029`,
        display: `minimal-ui`,
        icon: `src/images/supacode.png`, // This path is relative to the
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
