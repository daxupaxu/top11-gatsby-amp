import React from 'react'

import { graphql} from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import styled from 'styled-components';

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

const Header = styled.header`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    h2 {
        padding: 2rem;
    }
    span {
        padding: 2rem;
    }
`
const Main = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Paragraph = styled.p`
    width: 60%;
    text-align: center;
`
const List = styled.ol`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`
const ListItem = styled.li`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const H1 = styled.h1`
    text-align: center;
`


const options = {
  renderMark: {
    [MARKS.BOLD]: text => <bold>{text}</bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Paragraph>{children}</Paragraph>,
    [BLOCKS.OL_LIST]: (node, children) => <List>{children}</List>,
    [BLOCKS.LIST_ITEM]: (node, children) => <ListItem>{children}</ListItem>
  },
} 
const RandomPage = (props) => {

    const items = props.data.allContentfulSingleTop.edges;
    let randomItem = items[Math.floor(Math.random() * items.length)];
    const { title, dateAdded, description } = randomItem.node;

    return (
        <Layout>
                <H1>Random Top for you is :</H1>
            <Header>
                <h2>{title}</h2>
                <span>{dateAdded}</span>
            </Header>
            <Main>
                {renderRichText(description, options)}
            </Main>
        </Layout>
    )
}

export default RandomPage
