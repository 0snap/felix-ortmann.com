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
    <section className="section" id="about_me">
      <p className="is-size-3 has-text-centered has-title-line my-6">
        About me
      </p>
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
    <section className="section">
      <p className="is-size-3 has-text-centered has-title-line mb-6">
        My journey
      </p>
      <Cv journey={data.dataYaml.cv.en.journey} />
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
            duration
          }
        }
      }
    }
  }
`

export default IndexPage
