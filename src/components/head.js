import React from 'react'
import { Helmet } from 'react-helmet'

import { Bulma } from '../../node_modules/bulma/css/bulma.min.css'

const Head = () => (
  <Helmet>
    <html lang='en' />
    <link rel='dns-prefetch' href={ Bulma } />
    <meta name="louie-fitzpatrick-auth-date" content={ new Date() } />
  </Helmet>
)

export default Head