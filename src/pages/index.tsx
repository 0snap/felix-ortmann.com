import React from "react"

import Cover from "../components/cover"
import Cv from "../components/cv"
import AboutMe from "../components/profile"
import Page from "../components/page"
import Seo from "../components/seo"

import aboutme from "../../content/about-me.yaml"
import cv from "../../content/cv.yaml"

const IndexPage = () => (
  <Page>
    <Seo title="Felix Ortmann" />

    <Cover />

    <section className="section bg-one" id="about_me">
      <AboutMe profile={aboutme.profile} />
    </section>
    <section className="section bg-two" id="cv">
      <Cv journey={cv.journey} />
    </section>
  </Page>
)

export default IndexPage


// export const Head: HeadFC = () => <title>Home Page</title>