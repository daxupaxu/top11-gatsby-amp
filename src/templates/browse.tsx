import React from 'react';

import { graphql } from 'gatsby';
import { ContentfulRichTextGatsbyReference, renderRichText } from 'gatsby-source-contentful/rich-text'
import styled from 'styled-components';

import Layout from '../components/layout';

interface GraphQLData {
    contentfulSingleTop: {
        title: String,
        dateAdded: Date,
        description:  RenderRichTextData<ContentfulRichTextGatsbyReference>,
        raw: String
    }
}

interface Props {
    data: GraphQLData
}

export const query = graphql`
query singleTopQuery($slug: String!) {
    contentfulSingleTop( slug: {eq: $slug }) {
        title
        dateAdded(formatString: "MMMM Do YYYY")
        description {
            raw 
        }
    }
}
`
const Main = styled.section`
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
`

const Header = styled.h1`
    align-self: center;
`
const Body = styled.div`
    width: 70%;
    align-self: center;
    justify-content: center;
`
const Paragraph = styled.p`
    align-self: flex-end;
    padding: 2rem;
`

const SingleTopPage = (props: Props) => {

    const data = props.data.contentfulSingleTop
    const { title, dateAdded, description } = data 
    
    return (
        <Layout>
            <Main>
                <Header>{title}</Header>
                <Body>
                    {renderRichText(description)}
                </Body>
                <Paragraph>{dateAdded}</Paragraph>
            </Main>

        </Layout>
    )
}

export default SingleTopPage
