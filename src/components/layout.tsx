import React, { ReactNode } from 'react'
import { createGlobalStyle } from 'styled-components';


import Header from './header'
import Footer from './footer'


interface Props {
    children: ReactNode
}

const Main = createGlobalStyle`
    body {
        margin: 0px;
        font-family: 'Indie Flower', cursive;
    }
`

const Layout = ({ children }: Props) => {
    return (
        <React.Fragment>
            <Main />
                <Header />
                    {children}
                <Footer />
        </React.Fragment>
    )
}

export default Layout
