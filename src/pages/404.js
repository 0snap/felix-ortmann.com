import React from "react"

import SEO from "../components/seo"
import Page from "../components/page"
import TextContent from "../components/textContent"

const NotFoundPage = () => (
  <Page>
    <SEO title="404: Not found" />
    <TextContent>
    <h2>Not found.</h2>
    </TextContent>
  </Page>
)

export default NotFoundPage
