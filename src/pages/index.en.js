import React from "react"

import Cover from "../components/cover"
import Cv from "../components/cv"
import AboutMe from "../components/profile"
import Page from "../components/page"
import Seo from "../components/seo"

import { graphql } from "gatsby"

const IndexPage = ({ data }) => (
  <Page>
    <Seo title="Felix Ortmann" />

    <Cover />

    <section className="section bg-one" id="about_me">
      <AboutMe profile={data.dataYaml.aboutme.en.profile} />
    </section>

    <section className="section bg-two">
      <Cv journey={data.dataYaml.cv.en.journey} />
    </section>
  </Page>
)

export const query = graphql`
  query ProfileQuery {
    dataYaml {
      aboutme {
        en {
          profile {
            icon
            text
            color
          }
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
