import React from 'react'
import styled from 'styled-components'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import CityscapeGreen from '../images/cityscapeGreen.svg'

const ContentContainer = styled.section`
  height: 100vh;
  min-height: 563px;
  width: 100%;
  min-width: 100vw;
  background-color: #ECF9E8;
  position: relative;
  z-index: 1;
  .citycape-green {
    height: 210px;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 5;
  }
  .container {
    height: 100%;
    position: relative;
    z-index: 1;
  }
  .when-i-work {
    &-container {
      height: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .cta-button {
        font-weight: 600;
        border: solid #51a33d 1px;
        color: #51a33d;
        cursor: pointer;
        position: relative;
        z-index: 3;
      }
    }
    &-logo {
      width: 100%;
      max-width: 550px;
      height: auto;
    }
  }
  @media screen and (max-width: 768px) {
    .when-i-work-logo {
      width: 467px !important;
      height: 85px !important;
    }
  }
  @media screen and (max-width: 550px) {
    .when-i-work-logo {
      width: 347px !important;
      height: 63px !important;
    }
  }
  @media screen and (max-width: 400px) {
    .when-i-work-logo {
      width: 280px !important;
      height: 51px !important;
    }
  }
`

const Wheniwork = () => {
  const data = useStaticQuery(graphql`
  {
    file(relativePath: {eq: "when-i-work-logo-lrg.png"}) {
      childImageSharp {
        fixed(width: 528, height: 97, pngQuality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
  `)
  const wiwLogo = data.file.childImageSharp.fixed;
  return (
    <ContentContainer className="section when-i-work">
      <div className="container">
        <div className="when-i-work-container is-flex">
          <Img
            fixed={wiwLogo}
            objectFit="cover"
            objectPosition="50% 30%"
            alt="When I Work Logo"
            className="when-i-work-logo mb-4"
          />
          <a href="https://wheniwork.com/" target="_blank" className="cta-button">View Project</a>
        </div>
      </div>
      <CityscapeGreen className="citycape-green" />
    </ContentContainer>
  )
}

export default Wheniwork
