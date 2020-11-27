const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const topsTemplate = path.resolve('./src/templates/browse.tsx');
    const ampTemplate = path.resolve('./src/templates/browse.amp.tsx');
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
        createPage({
            component: ampTemplate,
            path: `browse/${edge.node.slug}/amp`,
            context: {
              slug: edge.node.slug,
            },
          })
    })
}