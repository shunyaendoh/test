module.exports = {
  siteMetadata: {
    title: `shunyaendoh1215`,
    author: `Shunya Endoh`,
    description: `A portfolio site created by shunyaendoh1215.`,
    keywords: `gatsby, gatsbyjs blog, gatsby bootstrap, shunyaendoh, shunya endoh`
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'shunyaendoh',
        short_name: 'shunyaendoh',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: './src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    { resolve: `gatsby-transformer-remark` },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
  ],
}
