import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const ContentContainer = styled.section`
  width: 100%;
  min-width: 100vw;
  margin: 0px;
  background-color: var(--off-white); 
  padding: 0 0 4rem !important;
  &.about {
    min-height: 100vh;
    .img-container {
      height: 100%;
      width: 100%;
      position: relative;
      display: flex;
      justify-content: center;
      &:after {
        content: '';
        background-color: var(--off-white);
        border-top-left-radius: 50%;
        border-top-right-radius: 50%;
        position: absolute;
        bottom: 0;
        left: 50%;
        margin-left: -1100px;
        width: 2200px;
        height: 40%;
      }
      .img-mpls {
        picture {
          img {
            top: -115px !important;
          }
        }
      }
    }
    .about-container {
      position: relative;
      z-index: 2;
      margin-top: -200px;
      .title {
        font-size: 3rem;
        color: #4C3F0D;
      }
      .sub-title {
        font-size: 1.25rem;
        line-height: 1.7;
        font-weight: 500;
        color: #4C3F0D;
        max-width: 900px;
        margin: auto;
      }
      .columns {
        flex-direction: column;
      }
      .interest-img-container {
        .img {
          &-newyork {
            margin-right: 20px;
          }
          &-newyork, &-marathon, &-dancing {
            border-radius: 10px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    &.about {
      .img-container {
        .img-mpls {
          picture {
            img {
              object-position: 54% !important;
            }
          }
        }
      }
      .about-container {
        margin-top: -300px;
        .title {
          font-size: 2rem;
          color: #4C3F0D;
        }
        .sub-title {
          font-size: 1rem;
          line-height: 1.7;
          font-weight: 500;
          color: #4C3F0D;
        }
        .interest-img-container {
          .column {
            > div {
              align-items: center;
            }
          }
          .img {
            &-newyork {
              margin-right: 0px;
              margin-bottom: 20px;
              max-width: 95vw;
            }
          }
          .img {
            &-marathon {
              max-width: 95vw;
            }
          }
          .img {
            &-dancing {
              max-width: 95vw;
            }
          }
        }
      }
    }
  }
`

const About = () => {
  const data = useStaticQuery(graphql`
  {
    mpls: file(relativePath: {eq: "mpls-prod-2000.jpg"}) {
      childImageSharp {
        fixed(width: 2000, height: 968, jpegQuality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    dancing: file(relativePath: {eq: "dancing.jpg"}) {
      childImageSharp {
        fixed(width: 620, height: 414, jpegQuality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    newyork: file(relativePath: {eq: "ny-escalator.jpg"}) {
      childImageSharp {
        fixed(width: 300, height: 375, jpegQuality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    marathon: file(relativePath: {eq: "tc-marathon.jpg"}) {
      childImageSharp {
        fixed(width: 300, height: 375, jpegQuality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
  `)
  const mpls = data.mpls.childImageSharp.fixed;
  const dancing = data.dancing.childImageSharp.fixed;
  const newyork = data.newyork.childImageSharp.fixed;
  const marathon = data.marathon.childImageSharp.fixed;
  return (
    <ContentContainer className="section about" id="about" mpls={mpls}>
      <div className="img-container">
        <Img
          fixed={mpls}
          objectFit="cover"
          objectPosition="50% 30%"
          alt="minneapolis"
          className="img-mpls"
        />
      </div>
      <div className="container px-5 about-container">
        <h2 className="title mb-3 has-text-centered">About</h2>
        <h3 className="sub-title mb-5">While I do enjoy spending some of my free time learning and coding, I do have other interests. I try to run at least one race a year, usually shooting for a half marathon, I tried the full marathon and am not interested in another one any time soon. I recently got back into cycling and I love rock climbing. My weirdest hobby is probably building and programming mechanical keyboards. My fiance loves animals, so I love animals and get to help take care of a cat, a hamster, fish and a gecko.
          </h3>
        <div className="columns interest-img-container">
          <div className="column">
            <div className="is-flex is-justified-center is-column-mobile">
              <Img
                fixed={newyork}
                objectFit="cover"
                objectPosition="50% 30%"
                alt="minneapolis"
                className="img-newyork"
              />
              <Img
                fixed={marathon}
                objectFit="cover"
                objectPosition="50% 30%"
                alt="minneapolis"
                className="img-marathon"
              />
            </div>
          </div>
          <div className="column">
            <div className="is-flex is-justified-center is-column-mobile">
              <Img
                fixed={dancing}
                objectFit="cover"
                objectPosition="50% 30%"
                alt="minneapolis"
                className="img-dancing"
              /></div>
          </div>
        </div>
      </div>
    </ContentContainer>
  )
}

export default About
