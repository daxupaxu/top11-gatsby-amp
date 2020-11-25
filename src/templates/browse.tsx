import React from 'react';
import { graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import styled from 'styled-components';

import Layout from '../components/layout';
import { SingleTopQuery } from '../../types/graphql-types';


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
interface Props {
    data: SingleTopQuery
}

export const data = graphql`
query singleTop($slug: String!) {
    contentfulSingleTop( slug: {eq: $slug }) {
        title
        dateAdded(formatString: "MMMM Do YYYY")
        description {
            raw 
        }
    }
}
`

const SingleTopPage = (props: Props) => {

    const { title, dateAdded, description }: any = props.data.contentfulSingleTop
    
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
