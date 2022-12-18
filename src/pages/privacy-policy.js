import React from "react"

import Page from "../components/page"
import Seo from "../components/seo"

import contact from "../../content/contact.yaml"
import pp from "../../content/privacy-policy.yaml"

const PrivacyPolicyPage = () => {
  return (
    <Page>
      <Seo title={pp.headline}/>
      <section className="section is-medium bg-one">
        <div className="container">
          <div className="content">
            <header>
              <h1 className="title is-2">{pp.headline}</h1>
            </header>
          </div>
          <div className="content">
            {pp.disclaimer.map((d, idx) => {
              return <p key={idx} dangerouslySetInnerHTML={{ __html: d }}/>
            })}
          </div>
          <div className="content">
            <h3 className="title">Website Operator</h3>
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
          {pp.paragraphs.map((p, idx) => {
            return (
              <div key={idx} className="content">
                <h3 className="title">{p.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: p.text }}/>
              </div>);
          })}
        </div>
      </section>
    </Page>
  )
}

export default PrivacyPolicyPage
