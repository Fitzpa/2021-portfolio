import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import LogoLouie from '../images/louie-logo.svg'

const NavContainer = styled.nav`
  background-color: var(--dark);
  padding: 2rem 5% 0 !important;
  min-width: 100vw;
  .container {
    display: flex;
    justify-content: space-between;
    .logo-image {
      width: 222px;
      height: auto;
    }
    .nav {
      &-buttons {
        width: 310px;
        justify-content: space-between;
        align-items: center;
      }
      &-button {
        font-size: 1.25rem;
        font-weight: 600;
        width: auto;
        color: var(--light);
        &.cta-button {
          background-color: var(--light-blue);
        }
      }
    }
  }
  
  @media screen and (max-width: 1024px) {
    &.navigation-section {
      display: none;
    }
  }
  
  @media screen and (max-width: 768px) {

  }
`

const Navigation = () => {
  return (
    <NavContainer role="navigation" className="section navigation-section">
      <div className="container">
        <div className="logo-container">
          <LogoLouie className="logo-image" />
        </div>
        <ul className="nav-buttons is-flex is-hidden">
          <li>
            <Link to="#about" className="nav-button">About</Link>
          </li>
          <li>
            <Link to="#contact" className="nav-button cta-button">Hire Me</Link>
          </li>
        </ul>
      </div>
    </NavContainer >
  )
}

export default Navigation;