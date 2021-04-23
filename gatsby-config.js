module.exports = {
  siteMetadata: {
    title: `Felix Ortmann`,
    description: `My personal web page.`,
    author: `github.com/0snap`,
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
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          esModule: false,
          modules: {
            namedExport: false,
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Felix Ortmann Website`,
        short_name: `Felix`,
        start_url: `/`,
        background_color: `#48c774`,
        theme_color: `#48c774`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
        typeName: `Yaml`,
      },
    },
    {
      resolve: `gatsby-plugin-i18n`,
      options: {
        langKeyDefault: "en",
        langKeyForNull: "de",
        prefixDefault: false,
        useLangKeyLayout: false,
      },
    },
  ],
}
