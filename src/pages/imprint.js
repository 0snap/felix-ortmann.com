import React from "react"

import Page from "../components/page"
import Seo from "../components/seo"

import ContactBlock from "../components/contact_block"

import imprint from "../../content/imprint.yaml"

const ImprintPage = () => {
  return (
    <Page>
      <Seo title={imprint.headline} />
      <section className="section is-medium bg-one">
        <div className="container">
          <div className="content">
            <header>
              <h1 className="title is-2">{imprint.headline}</h1>
            </header>
          </div>

          <ContactBlock title={imprint.contact_headline} />

          {imprint.paragraphs.map((p, idx) => {
            return (<div key={idx} className="content">
              <h3 className="title">{p.title}</h3>
              <p>{p.text}</p>
            </div>)
          })}
        </div>
      </section>
    </Page>
  )
}

export default ImprintPage
