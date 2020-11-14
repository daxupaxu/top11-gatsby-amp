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
      }
  ]
}