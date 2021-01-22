import { createGlobalStyle } from 'styled-components'
import Overrides from './overrides'
import Helpers from './helpers'

export const GlobalStyle = createGlobalStyle`

${Overrides}
${Helpers}

:root {
  font-size: 16px;
  --dark: #111317;
  --light: #ffffff;
  --dark-blue: #111317;
  --blue: #053354;
  --light-blue: #18a4e0;
  --off-white: #faf8f0;
  --grey: #d3dde6;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
}

body {
  background: #fff;
  color: #666;
  padding: 0;
  margin: 0;
  font-weight: 300;
  line-height: 1.5;
  font-family: Montserrat;
  font-style: normal;
  position: relative;
  cursor: default;
  height: 100%;
}

#___gatsby {
  overflow: hidden;
}

li {
  list-style: none;
}

strong {
  font-weight: bold;
}

button {
  background: transparent;
  border: 0;
}

a, button {
  cursor: pointer;
}

.cta-button {
  padding: 10px 20px;
  border-radius: 30px;
}

.container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
}
`
