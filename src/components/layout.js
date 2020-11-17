import React from 'react'

import Header from './header'
import Footer from './footer'

import { createGlobalStyle } from 'styled-components';

const Main = createGlobalStyle`
    body {
        margin: 0px;
        font-family: 'Indie Flower', cursive;
    }
`

const Layout = (props) => {
    return (
        <React.Fragment>
            <Main />
                <Header />
                    {props.children}
                <Footer />
        </React.Fragment>
    )
}

export default Layout
