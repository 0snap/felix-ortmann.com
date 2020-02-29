import React from "react"

import Layout from "../components/layout"
import Cover from "../components/cover"
import AboutMe from "../components/aboutme"
import SEO from "../components/seo"

const IndexPage = () => (
  <>
  <Layout>
    <SEO title="Felix Ortmann" />
    <Cover />
    <AboutMe />
  </Layout>
  </>
)

export default IndexPage
