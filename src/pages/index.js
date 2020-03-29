import React from "react"

import Page from "../components/page"
import Cover from "../components/cover"
import AboutMe from "../components/aboutme"
import SEO from "../components/seo"

const IndexPage = () => (
  <>
  <Page>
    <SEO title="Felix Ortmann" />
    <Cover />
    <AboutMe />
  </Page>
  </>
)

export default IndexPage
