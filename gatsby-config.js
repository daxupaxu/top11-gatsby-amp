module.exports = {
  siteMetadata: {
      title: 'Top11',
      author: 'Devzone LTD'
  },
  plugins: [
      {
        resolve: 'gatsby-source-contentful',
        options: {
          spaceId: process.env.CONTENTFUL_SPACE_ID,
          accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
        }
      },
      {
        resolve: 'gatsby-plugin-styled-components',
        options: {
          displayName: false
        }
      },
      {
        resolve: `gatsby-plugin-ts`,
        options: {
          tsLoader: {
            logLevel: 'warn',
          },
          forkTsCheckerPlugin: {
            eslint: true,
          },
          fileName: `types/graphql-types.ts`,
          codegen: true,
          codegenDelay: 250,
          alwaysCheck: false,
        }
      },
  ]
}