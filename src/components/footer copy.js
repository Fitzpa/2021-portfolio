import React from 'react'
import styled from 'styled-components'
import LouieLogo from '../images/louie-logo.svg'
import GithubLogo from '../images/github-square-brands.svg'
import LinkedIndLogo from '../images/linkedin-brands.svg'

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  background-color: var(--blue);
  position: relative;
  min-width: 100vw;
  .container {
    flex-direction: row;
    justify-content: center;
    .contact-links {
      margin-bottom: 1rem;
      background-color: var(--blue);
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 152px;
      position: relative;
      z-index: 3;
      a.contact-link {
        position: relative;
        z-index: 3;
        padding: 20px;
        border-radius: 50%;
        height: 64px;
        width: 64px;
        background-color: rgba(16,33,41,0.6);
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        transition: all ease 0.5s;
        :before {
          content: "";
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: var(--light-blue);
          transition: .5s;
          z-index: 2;
        }
        &:hover {
          &:before {
            top: 0;
          }
          .github, .linked-in {
            transform: rotateY(360deg);
          }
        }
        .github, .linked-in {
          position: relative;
          z-index: 3;
          height: auto;
          min-width: 28px;
          transition: all ease 0.5s;
        }
      }
    }
  }
  .columns {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .logo-container { 
    margin-bottom: 1rem;
    .footer-logo {
      width: 222px;
      height: auto;
    }
  }
  .footer-legal {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      color: var(--light);
      font-size: 1rem;
      font-weight: 600;
      &.legal {
        font-weight: 400;
        color: rgba(255,255,255,0.5);
      }
    }
  }
  @media screen and (max-width: 768px) {
    .container {
      flex-direction: column-reverse;
      .contact-links {
        width: 222px;
        margin: 0 auto 30px;

        a.contact-link {
          background-color: rgba(16,33,41,0);
          :before {
            background-color: rgba(16,33,41,0.6);
          }
          &:hover {
            &:before {
            }
            .github, .linked-in {
              transform: rotateY(0);
            }
          }
        }
      }
      .columns {
        margin-bottom: 0;
        .logo-container {
          display: flex;
          justify-content: center;
          margin-bottom: 30px;
        }
        .footer-legal {
          p {
            font-weight: 400;
            width: 235px;
          }
        }
      }
    }
  }
`

const Footer = () => {
  return (
    <FooterContainer role="navigation" className="section">
      <div className="container is-flex">
        <div className="columns">
          <div className="logo-container column">
            <LouieLogo className="footer-logo" />
          </div>
          <div className="contact-links">
            <a href="https://github.com/Fitzpa" target="_blank" className="contact-link" >
              <GithubLogo className="github" />
            </a>
            <a href="https://github.com/Fitzpa" target="_blank" className="contact-link" >
              <LinkedIndLogo className="linked-in" />
            </a>
          </div>
          <div className="footer-legal column">
            <p className="mb-1">Copyright &copy; Louie Fitzpatrick {new Date().getFullYear()}. All Rights Reserved</p>
            <p className="legal">Unless mentioned otherwise, all designs are the copyright of their respective owners.</p>
          </div>
        </div>
      </div>
    </FooterContainer>
  )
}

export default Footer;