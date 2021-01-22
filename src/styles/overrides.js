import { css } from 'styled-components'

export default css`
  #___gatsby {
    .button {
      border-radius: 0.2rem;
      border-width: 2px;
      font-weight: 400;
    }
    .input,
    input,
    .select,
    select {
      height: 50px;
      border-radius: 0.2rem;
    }
    .is-transparent {
      background-color: transparent;
    }
    .is-justified-center {
      justify-content: center;
    }
    .is-column {
      flex-direction: column;
      &-mobile {
        @media screen and (max-width: 768px) {
          flex-direction: column;
        }
      }
    }
    .is-row {
      flex-direction: row;
    }
    .section {
      padding: 4rem 5%;
    }
    // * COLOR HELPERS
    .bg-dark {
      background: #111317;
    }
    .dark {
      color: #111317;
    }
    .bg-color {
      background: #fff;
    }
    .light {
      color: #fff;
    }
    .bg-dark-blue {
      background: #043353;
    }
    .dark-blue {
      color: #043353;
    }
    .bg-light-blue {
      background: #18a4e0;
    }
    .light-blue {
      color: #18a4e0;
    }
    .bg-off-white {
      background: #faf8f0;
    }
    .off-white {
      color: #faf8f0;
    }
    .bg-grey {
      background: #d3dde6;
    }
    .grey {
      color: #d3dde6;
    }
  }
`
