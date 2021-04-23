import React from "react"

import Page from "../components/page"
import Seo from "../components/seo"

import { graphql } from "gatsby"

const ImprintPage = ({ data }) => {
  const contact = data.dataYaml.contact
  return (
    <Page>
      <Seo title="Legal Disclosure" />
      <section className="section is-medium">
        <div className="container">
          <div className="content">
            <header>
              <h1 className="title is-2">Legal Disclosure</h1>
            </header>
          </div>

          <div className="content">
            <h3 className="title">
              Information in accordance with Section 5 TMG
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
            </p>
          </div>

          <div className="content">
            <h3 className="title">Accountability for Content</h3>
            <p>
              The contents of these web pages have been created with the utmost
              care. Nonetheless, we cannot guarantee the contents' correctness,
              completeness, accuracy, or topicality. According to statutory
              provisions as per § 7 of the Telemedia Act (TMG), we are
              responsible for our own content on these web pages. Please note
              that we are not obliged to monitor the transmitted or saved
              information of third parties, or investigate circumstances
              pointing to illegal activity as per §§ 8 to 10 of the Telemedia
              Act (TMG). Our obligations to block or remove the use of
              information under generally applicable law remain unaffected by
              this.
            </p>
          </div>
          <div className="content">
            <h3 className="title">Accountability for Links</h3>
            <p>
              Our web pages contain links to third party websites (external
              links), for which's contents we are not responsible.
              Responsibility for the content of external links lies solely with
              the operators of the linked pages. No violations or fraudulent
              activity were evident to us at the time of linking. We will remove
              links immediately from our web pages should any legal infringement
              become known to us.
            </p>
          </div>
          <div className="content">
            <h3 className="title">Copyright</h3>
            <p>
              Our web pages and their contents are created by the website owner
              and are subject to German copyright law. Every form of utilizing,
              reproducing, or processing works subject to copyright protection
              on our web pages requires the prior consent of the respective
              owner of the rights, unless expressly permitted by law. Individual
              reproductions of a work are only allowed for private use. The
              materials from these pages are copyrighted and any unauthorized
              use may violate copyright laws.
            </p>
          </div>
        </div>
      </section>
    </Page>
  )
}

export const query = graphql`
  query {
    dataYaml {
      contact {
        name
        street
        postCode
        city
        country
        phone
        mail
      }
    }
  }
`

export default ImprintPage
