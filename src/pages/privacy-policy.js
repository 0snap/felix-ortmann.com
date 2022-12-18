import React from "react"

import Page from "../components/page"
import Seo from "../components/seo"

import contact from "../../content/contact.yaml"

const PrivacyPolicyPage = () => {
  return (
    <Page>
      <Seo title="Privacy Policy" />
      <section className="section is-medium bg-one">
        <div className="container">
          <div className="content">
            <header>
              <h1 className="title is-2">Privacy Policy</h1>
            </header>
          </div>
          <div className="content">
            <p>
              In this privacy statement, we inform you about the personal data
              we collect from you while using our website, how we use your data,
              and for what purpose we store the recorded information.
            </p>
            <p>
              We keep this privacy policy under regular review and place any
              updates on this website. This privacy policy was last updated on
              March 25th, 2021.
            </p>
            <p>
              Please find the definitions of the terms used (e.g., "personal
              data" or "processing") in{" "}
              <a href="https://gdpr-info.eu/art-4-gdpr/">
                Article 4 EU GDPR "Definitions"
              </a>
              .
            </p>
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
          <div className="content">
            <h3 className="title">General Data</h3>
            <p>
              We use <a href="https://pages.github.com/">GitHub Pages</a> to
              host our website. By visiting our website, GitHub collects
              personal information (e.g., in the form of server log files),
              including, but not limited to, your IP address, the date and time
              of your request, your web browser, the referring site, language
              preferences, and additional websites requested. GitHub needs this
              information to ensure functionality and security of the service.
              GitHub is certified to the{" "}
              <a href="https://docs.github.com/en/github/site-policy/global-privacy-practices#privacy-shield-framework">
                Privacy Shield Framework
              </a>{" "}
              . Please consult{" "}
              <a href="https://docs.github.com/en/github/site-policy/github-privacy-statement">
                GitHub's Privacy Notice
              </a>{" "}
              for details on their privacy statement.
            </p>
          </div>
          <div className="content">
            <h3 className="title">Personal Data</h3>
            <p>
              We, the website operator, do not collect personal data about our
              users directly. You can visit out website without disclosing
              personal information to us. Personal data relates to all
              informations that can be used for personal identification, such as
              your contact details, your E-Mail address, or telephone number.
            </p>
            <p>
              If you contact me, the website operator, via E-Mail, I will store
              and use your E-Mail address only to answer you inquiry. All
              personal information that was collected in the process of
              answering your inquiry will be deleted once your inquiry has been
              resolved.
            </p>
            <p>
              We will not use your data for other purposes nor transfer it to a
              third party without having obtained your prior consent.
            </p>
          </div>
          <div className="content">
            <h3 className="title">Data Security</h3>
            <p>
              We deploy technical measures to ensure the security of your data
              and to prevent unauthorized access and changes or loss of your
              data. Your connection to the server hosting this website is
              encrypted via TLS. You can verify the encrypted connection by
              checking the address bar of your browser, which should show a
              green lock symbol. The measures reflect the state of the art and
              are reviewed and updated at regular intervals.
            </p>
          </div>
          <div className="content">
            <h3 className="title">Your Rights</h3>
            <p>
              You are at any time entitled to request information on what
              personal data we store about you, request deletion (entirely or
              partially), rectification, or blocking of your personal data. You
              can at any time object to further use of your personal data. If
              applicable, you can use your right to data portability. Please
              address your concern using my contact details from the top of this
              page. Should you consider the processing of your personal data as
              unlawful, you can directly submit your complaint with the
              responsible supervisory authority.
            </p>
          </div>
          <div className="content">
            <h3 className="title">Data Retention</h3>
            Unless legal requirements oblige us to retain your data for a longer
            period (e.g., storage periods according to trade or tax
            regulations), we retain your data only for as long as it is
            necessary to perform the service that you have requested or for
            which you have granted your permission.
          </div>
        </div>
      </section>
    </Page>
  )
}

export default PrivacyPolicyPage
