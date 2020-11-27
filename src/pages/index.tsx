import React from 'react';
import '../images/freelunch.jpg';

import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout>
      <h1>This is the home page</h1>
      <p>Content?</p>
      <img width="300" height="300" src="../images/freelunch.jpg" />
    </Layout>
  )
}

export default IndexPage
