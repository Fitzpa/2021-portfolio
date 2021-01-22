import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const ContentContainer = styled.section`
  height: calc(100vh - 140px);
  min-height: 736px;
  width: 100%;
  min-width: 100vw;
  background-color: var(--dark);
  .container {
      display: flex;
      align-items: center;
      .columns {
        margin: 0 0 200px;
      }
  }
  .hero-title-container {
    flex-direction: column;
    justify-content: center;
    flex: none;
    width: 56.5%;
    h3 {
      font-size: 4.25rem;
      font-weight: 800;
      color: var(--light);
      letter-spacing: 1.3px;
      span {
        color: var(--light-blue);
      }
    }
    .title {
      font-size: 3.25rem;
      color: #fff;
      margin-bottom: 0.25rem;
      span {
        font-weight: 300;
      }
    }
    .sub-title {
      font-size: 3.25rem;
      font-weight: 300;
      color: #fff;
    }
  }
  .headshot {
    border-radius: 50%;
    border: solid 12px var(--light-blue);
    margin: -250px -250px 0;
    position: absolute;
    width: 440px;
    height: 100%;
    top: 50%;
    left: 50%;
    &-container {
      justify-content: center;
      align-items: center;
      position: relative;
    }
  }
  .ring {
    &-1 {
      background: #102129;
      margin-right: auto;
      border-radius: 50%;
      border: solid 12px 	#102129;
      position: relative;
      bottom: 0;
      height: 600px;
      width: 600px;
    }
    &-2 {
      background: #112d37;
      border-radius: 50%;
      border: solid 12px #112d37;
      position: relative;
      top: 50%;
      margin: -275px auto 0;
      height: 550px;
      width: 550px;
    }
  }

  @media screen and (max-width: 1408px) {
    .hero-title-container {
      width: 50%;
      .title, .sub-title {
        font-size: 3rem;
        white-space: nowrap;
      }
      .title {
        margin-bottom: 1.25rem;
      }
      .sub-title {
        line-height: 3.6875rem;
      }
    }
    .gatsby-image-wrapper {
      width: 400px !important;
      height: 400px !important;
      margin: -200px -200px 0;
    }
    .ring {
      &-1 {
        margin-right: 0;
        margin-left: auto;
        height: 500px;
        width: 500px;
      }
      &-2 {
        margin: -225px auto 0;
        height: 450px;
        width: 450px;
      }
    }
  }

  @media screen and (max-width: 1216px) {
    .hero-title-container {
      width: 45%;
      .title, .sub-title {
        font-size: 2.5rem;
        white-space: nowrap;
      }
      .title {
        margin-bottom: 1.25rem;
      }
      .sub-title {
        line-height: 3.6875rem;
      }
    }
    .ring {
      &-1 {
        margin-left: 0;
      }
    }
  }
  }

  @media screen and (max-width: 1024px) {
    .container {
      .columns {
        flex-direction: column;
        width: 100%;
      }
    }
    .hero-title-container {
      width: 100%;
      margin-top: 40px;
      margin-bottom: 35px;
      .sub-title, title {
        font-size: 2.5rem;
      }
      h3 {
        font-size: 3.5rem;
      }
    }
    .gatsby-image-wrapper {
      width: 400px !important;
      height: 400px !important;
      margin: -200px -200px 0;
    }
    .ring {
      &-1 {
        margin-right: auto;
        margin-left: auto;
        height: 500px;
        width: 500px;
      }
      &-2 {
        margin: -225px auto 0;
        height: 450px;
        width: 450px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .container {
      .columns {
        flex-direction: column;
      }
    }
    .hero-title-container {
      width: 100%;
      .sub-title {
        font-size: 1.875rem;
        margin: 0 auto;
      }
      .title {
        font-size: 1.875rem;
        margin: 0 auto;
      }
      h3 {
        font-size: 2.5rem;
        margin: 0 auto;
      }
    }
    .headshot-container {
      .gatsby-image-wrapper {
        width: 400px !important;
        height: 400px !important;
        margin: -200px -200px 0;
      }
      .ring {
        &-1 {
          margin-right: auto;
          height: 500px;
          width: 500px;
        }
        &-2 {
          margin: -225px auto 0;
          height: 450px;
          width: 450px;
        }
      }
    }
  }

  @media screen and (max-width: 565px) {
    .hero-title-container {
      margin-top: 0;
      .sub-title {
        font-size: 1.875rem;
      }
      .title {
        margin-bottom: 0;
      }
      h3 {
        font-size: 2.5rem;
      }
    }
    .headshot-container {
      .gatsby-image-wrapper {
        width: 200px !important;
        height: 200px !important;
        margin: -100px -100px 0;
      }
      .ring {
        &-1 {
          margin-right: auto;
          width: 250px;
          height: 250px;
        }
        &-2 {
          margin: -112.5px auto 0;
          height: 225px;
          width: 225px;
        }
      }
    }
  }
  @media screen and (max-width: 398px) {
    .hero-title-container {
      .title, .sub-title {
        font-size: 1.75rem;
        line-height: 1;
      }
      .title {
        margin-bottom: 1rem;
      }
    }
  }
`

const Hero = () => {
  const data = useStaticQuery(graphql`
  {
    file(relativePath: {eq: "louie-square-626.jpg"}) {
      childImageSharp {
        fixed(width: 500, height: 500, jpegQuality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
  `)
  const headshot = data.file.childImageSharp.fixed;
  return (
    <ContentContainer className="section hero bg-dark">
      <div className="container">
        <div className="columns">
          <div className="column is-flex hero-title-container">
            <h3 className="mb-4">Welcome<span>.</span></h3>
            <h1 className="title">
              <span>I'm</span> Louie Fitzpatrick,
            </h1>
            <h2 className="sub-title">a Full Stack Developer.</h2>
          </div>
          <div className="column is-two-fifths-fullhd is-half-widescreen headshot-container">
            <div className="ring-1">
              <div className="ring-2">
                <Img
                  fixed={headshot}
                  objectFit="cover"
                  objectPosition="50% 50%"
                  alt="Headshot of Louie Fitzpatrick"
                  className="headshot"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentContainer>
  )
}

export default Hero
