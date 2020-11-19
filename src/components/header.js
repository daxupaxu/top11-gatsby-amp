import React from 'react'

import { Link, graphql, useStaticQuery } from 'gatsby';

import styled  from 'styled-components';

const Main = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    background-color: #23262b;
    font-family: 'Dancing Script', cursive;

    a {
        text-decoration: none;
        color: #FFFFFF;
        :hover {
            background-color: #89888a;
        }
    }
    a:hover {
            cursor: pointer;
        }
    h1 {
        padding: 0 4rem;
    }
`
const List = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 40%;
    list-style-type: none;

    :last-child{
        padding-right: 2rem;
    }
`
const ListItem = styled.li`
    text-decoration: none;
`
const Header = () => {
    const data = useStaticQuery(graphql`
     query {
         site {
             siteMetadata {
                title
             }
         }
     }
    `)
    return (
        <Main>
            <Link to='/'><h1>{data.site.siteMetadata.title}</h1></Link>
            <List>
                <ListItem><Link to="/">Top</Link></ListItem>
                <ListItem><Link to="/browse">Browse</Link></ListItem>
                <ListItem><Link to="/random">Random</Link></ListItem>
                <ListItem><Link to="/addTop">Add Top 11</Link></ListItem>
                <ListItem><Link to="/search">Search</Link></ListItem>
            </List>
        </Main>
    )
}

export default Header
