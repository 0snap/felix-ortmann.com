import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import TextContent from "../components/textContent"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <TextContent>
    <h2>Not found.</h2>
    </TextContent>
  </Layout>
)

export default NotFoundPage
