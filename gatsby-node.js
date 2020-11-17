const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const topsTemplate = path.resolve('./src/templates/browse.js');
    const res = await graphql (`
        query{
            allContentfulSingleTop{
                edges {
                    node {
                        slug
                    }
                }
            } 
        }
    `) 

    res.data.allContentfulSingleTop.edges.forEach( (edge) => {
        createPage({
            component: topsTemplate,
            path: `/browse/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })
}