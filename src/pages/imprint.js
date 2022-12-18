import React from "react"

import Page from "../components/page"
import Seo from "../components/seo"

import contact from "../../content/contact.yaml"
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

          <div className="content">
            <h3 className="title">
              {imprint.contact_headline}
            </h3>
            <p>
              {contact.name}
              <br />
              {contact.street}
              <br />
              {contact.postCode} {contact.city}
              <br />
              {contact.country}
              <br />
              {contact.phone}
              <br />
              <a href={"mailto:" + contact.mail}>{contact.mail}</a>
              <br />
              {contact.ustid}
            </p>
          </div>

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
