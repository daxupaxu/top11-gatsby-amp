import React from 'react'

import { graphql} from 'gatsby';

import Layout from '../components/layout'

export const data = graphql`
    query {
        allContentfulSingleTop{
            edges { 
                node { 
                    title
                    dateAdded(fromNow: true)
                    description {
                        raw
                    }
                }
            }
        }
    }
`
const RandomPage = (props) => {


    const items = props.data.allContentfulSingleTop.edges;

    const randomItem = items[Math.floor(Math.random() * items.length)];
    const { title, dateAdded, description } = randomItem.node;

    return (
        <Layout>
            <h1>Random Top for you is :</h1>
            <p>{title}</p>
            <p>{dateAdded}</p>
            <p>{description.raw}</p>
        </Layout>
    )
}

export default RandomPage
