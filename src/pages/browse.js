import React from 'react';

import { graphql, useStaticQuery, Link } from 'gatsby';
import styled from 'styled-components';


import Layout from '../components/layout';

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

const Browse = () => {
    const data = useStaticQuery(graphql `
    query {
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
`)
    return (
        <Layout>
           {data.allContentfulSingleTop.edges.map((edge) => {
               return (
                   <Item>
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
