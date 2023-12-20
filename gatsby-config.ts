import type {GatsbyConfig} from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Felix Ortmann - Freelance Cloud Engineering & Cloud Architecture',
    /* eslint-disable max-len*/
    description: 'Do you want to scale your business as you grow? Consider moving to the cloud with me! I have strong experience with public cloud providers like Scaleway, AWS and GCP. I specialize in designing microservice architectures, and provide proficiency with many programming languages.',
    author: 'github.com/0snap',
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'content',
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/,
          omitKeys: ['xmlnsDc', 'xmlnsCc', 'xmlnsRdf', 'xmlnsSvg', 'xmlnsSodipodi', 'xmlnsInkscape'],
        },
      },
    },
  ],
};

export default config;
