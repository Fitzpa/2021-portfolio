import React from 'react'
import styled from 'styled-components'
import Hero from '../components/hero'
import Wheniwork from '../components/wheniwork'
import Skills from '../components/skills'
import About from '../components/about'
import Contact from '../components/contact'

import Layout from '../layouts/default'

const ContentContainer = styled.div`
  min-width: 100vw;
`

const Home = () => {
  return (
    <Layout>
      <title>Louie Fitzpatrick Full-Stack Developer</title>
      <ContentContainer>
        <Hero />
        <Wheniwork />

        <About />
        <Contact />
      </ContentContainer>
    </Layout>
  )
}

export default Home
