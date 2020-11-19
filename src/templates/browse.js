import React from 'react';

import { graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import Layout from '../components/layout';

export const query = graphql`
query($slug: String!) {
    contentfulSingleTop( slug: {eq: $slug }) {
        title
        dateAdded(formatString: "MMMM Do YYYY")
        description {
            raw 
        }
    }
}
`

const SingleTopPage = (props) => {

    const data = props.data.contentfulSingleTop
    const { title, dateAdded, description } = data 
    
    return (
        <Layout>
            <h1>{title}</h1>
            <p>{dateAdded}</p>
            {renderRichText(description)}
        </Layout>
    )
}

export default SingleTopPage
