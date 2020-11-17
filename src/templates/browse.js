import React from 'react';

import { graphql } from 'gatsby';

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
            {description.raw}
        </Layout>
    )
}

export default SingleTopPage
