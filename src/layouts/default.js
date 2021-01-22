import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Head from '../components/head'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import { GlobalStyle } from '../styles/global'
import { Link } from 'gatsby'

const ContentContainer = styled.div`
min-width: 100vw;
  ${GlobalStyle}
  header {
    ul {
      flex-direction: row;
    }
  }
`

const Layout = ({ children }) => {
  return (
    <ContentContainer>
      <Head />
      <Navigation />
      <div role="main">{children}</div>
      <Footer />
    </ContentContainer>
  )
}

export default Layout
