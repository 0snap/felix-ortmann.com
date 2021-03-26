import React from "react"

import Page from "../components/page"
import Cover from "../components/cover"
import SEO from "../components/seo"

import { graphql } from "gatsby"

const IndexPage = ({ data }) => (
  <Page lang="de">
    <SEO title="Felix Ortmann" />
    <Cover />
    <section className="section is-medium">
      <h4 className="title is-4 has-text-centered">Profile</h4>
      <div className="container">
        {data.dataYaml.aboutme.en.profile.map(entry => <div className="content" dangerouslySetInnerHTML={{__html: entry}} />)}
      </div>
    </section>
  </Page>
)

export const query = graphql`
  query ProfileQuery {
    dataYaml {
      aboutme {
        en {
          profile
        }
      }
    }
  }
`

export default IndexPage
