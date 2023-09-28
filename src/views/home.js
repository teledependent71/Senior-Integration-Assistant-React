import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Senior Integration Assistant</title>
        <meta property="og:title" content="Senior Integration Assistant" />
      </Helmet>
    </div>
  )
}

export default Home
