import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

const ContentContainer = styled.section`
  height: 100vh;
  width: 100%;
  min-width: 100vw;
  background-color: var(--off-white);
  
`

const Skills = () => {
  const data = useStaticQuery(graphql`
  {
    file(relativePath: {eq: "louie-square-626.jpg"}) {
      childImageSharp {
        fixed {
          src
        }
      }
    }
  }
  `)
  const headshot = data.file.childImageSharp.fixed.src;
  return (
    <ContentContainer className="section Skills">
      <div className="container">
        <div className="columns">
          <div className="column is-half is-flex hero-title-container">
            <h3 className="mb-4">Welcome<span>.</span></h3>
            <h1 className="title mb-1">
              <span>I'm</span> Louie Fitzpatrick,
            </h1>
            <h2 className="sub-title">a Full Stack Web Developer.</h2>
          </div>
          <div className="column is-half headshot-container">
            <div className="ring-1">
              <div className="ring-2">
                <img src={headshot} alt="Headshot of Louie Fitzpatrick" className="headshot" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentContainer>
  )
}

export default Skills
