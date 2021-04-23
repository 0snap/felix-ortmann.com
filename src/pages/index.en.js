import React from "react"

import Cover from "../components/cover"
import Cv from "../components/cv"
import Page from "../components/page"
import Seo from "../components/seo"

import { graphql } from "gatsby"

const IndexPage = ({ data }) => (
  <Page>
    <Seo title="Felix Ortmann" />
    <Cover />
    <section className="section">
      <h3 className="title is-3 has-text-centered">About me</h3>
      <div className="container">
        {data.dataYaml.aboutme.en.profile.map((entry, idx) => (
          <div
            key={idx}
            className="content"
            dangerouslySetInnerHTML={{ __html: entry }}
          />
        ))}
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
      cv {
        en {
          journey {
            image
            company
            jobTitle
            description
            link
          }
        }
      }
    }
  }
`

export default IndexPage
