import React from 'react'
import { graphql} from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import styled from 'styled-components';


import Layout from '../components/layout'
import { RandomPageQuery } from '../../types/graphql-types'


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

export const data = graphql`
    query RandomPage {
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
interface Props {
    data: RandomPageQuery
}

const RandomPage = ({data}: Props) => {
    const items = data.allContentfulSingleTop.edges;
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
                {renderRichText(description as any)}
            </Main>
        </Layout>
    )
}

export default RandomPage
