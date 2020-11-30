import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html amp {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, shrink-to-fit=no" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <script async src="https://cdn.ampproject.org/v0.js"></script>
        <link rel="canonical" href="http://localhost:8000"></link>
        

        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
      <amp-analytics config="https://www.googletagmanager.com/amp.json?id=GTM-5456W49&gtm.url=SOURCE_URL" data-credentials="include"></amp-analytics>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
