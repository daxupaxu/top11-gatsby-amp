import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import { BrowsePageQuery } from '../../types/graphql-types'


const Item = styled.div`
    :hover {
        background-color: #89888a;
    }
    a {
        text-decoration: none;
        justify-content: space-between;
        width: 100%;
        display: flex;
        color: #000000;
        :hover {
            color: #FFFFFF;
        }
    }
    h2 {
        padding: 15px;
    }
    p {
        padding: 2rem;
    }
`

export const data = graphql `
query BrowsePage {
    allContentfulSingleTop(
        sort: {
            fields: dateAdded,
            order: DESC
        }
    ) {
        edges { 
            node { 
                title
                dateAdded(fromNow: true)
                slug
            }
        }
    }
}
`
interface Props {
    data: BrowsePageQuery
}

const Browse = (props: Props) => {
    const { data } = props;

    return (
        <Layout>
           {data.allContentfulSingleTop.edges.map((edge) => {
               return (
                   <Item key={edge.node.slug}>
                        <Link to={`/browse/${edge.node.slug}`}>
                            <h2>{edge.node.title}</h2>
                            <p>{edge.node.dateAdded}</p>
                        </Link>
                    </Item>
               )
           })}
        </Layout>
    )
}

export default Browse
