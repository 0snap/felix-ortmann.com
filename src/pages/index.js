import React from "react"

import Page from "../components/page"
import Cover from "../components/cover"
import SEO from "../components/seo"

import { graphql } from "gatsby"

const IndexPage = ({ data }) => (
  <Page>
    <SEO title="Felix Ortmann" />
    <Cover />
    <section className="section is-medium">
      <h4 className="title is-4 has-text-centered">Profile</h4>
      <div className="container">
        <p>{data.dataYaml.content.de.profile}</p>
      </div>
    </section>
  </Page>
)

export const query = graphql`
  query AboutMeQuery {
    dataYaml {
      content {
        de {
          profile
        }
      }
    }
  }
`

export default IndexPage
