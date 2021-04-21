import React from "react"

import Cover from "../components/cover"
import CV from "../components/cv"
import Page from "../components/page"
import SEO from "../components/seo"

import { graphql } from "gatsby"

const IndexPage = ({ data }) => (
  <Page>
    <SEO title="Felix Ortmann" />
    <Cover />
    <section className="section is-medium">
      <h4 className="title is-3 has-text-centered">&mdash;My journey&mdash;</h4>
      <div className="container">
        <CV journey={data.dataYaml.cv.en.journey} />
      </div>
      <h4 className="title is-3 has-text-centered">About me</h4>
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
    <CV />
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
          journey
        }
      }
    }
  }
`

export default IndexPage
