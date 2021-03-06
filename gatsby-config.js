module.exports = {
  siteMetadata: {
    title: `Trinity Cycling`,
    description: `Trinity Cycling is a Fort Worth, TX cycling team focused on improving our community through charitable activities and bicycle racing`,
    author: `@trinitycycling`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
  ],
}
