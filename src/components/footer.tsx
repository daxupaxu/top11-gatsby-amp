import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components';

const Main = styled.footer`
    position: absolute;
    justify-content: center;
    display: flex;
    position: fixed;
    bottom: 0px;
    width: 100%;
    background-color: #23262b;
    color: #FFFFFF;
    font-family: 'Dancing Script', cursive;
`

const Footer = () => {
    const data = useStaticQuery(graphql`
     query {
         site {
             siteMetadata {
                 author
             }
         }
     }
    `)
    return (   
        <Main>
            <p>
                Created by {data.site.siteMetadata.author} © 2020
            </p>
        </Main>
    )
}

export default Footer
