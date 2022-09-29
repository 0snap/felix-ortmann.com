import React from "react"

import Page from "../components/page"
import Seo from "../components/seo"

import { graphql } from "gatsby"

const PrivacyPolicyPage = ({ data }) => {
  const contact = data.dataYaml.contact
  return (
    <Page>
      <Seo title="Datenschutzerklärung" />
      <section className="section is-medium bg-one">
        <div className="container">
          <div className="content">
            <header>
              <h1 className="title is-2">Datenschutzerklärung</h1>
            </header>
          </div>
          <div className="content">
            <h3 className="title">Website Betreiber</h3>
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
            <h3 className="title">Grundlegendes</h3>
            <p>
              Diese Datenschutzerklärung soll die Nutzer dieser Website über die
              Art, den Umfang und den Zweck der Erhebung und Verwendung
              personenbezogener Daten durch den Websitebetreiber informieren.
            </p>
            <p>
              Der Websitebetreiber nimmt Ihren Datenschutz sehr ernst und
              behandelt Ihre personenbezogenen Daten vertraulich und
              entsprechend der gesetzlichen Vorschriften. Da durch neue
              Technologien und die ständige Weiterentwicklung dieser Webseite
              Änderungen an dieser Datenschutzerklärung vorgenommen werden
              können, empfehlen wir Ihnen sich die Datenschutzerklärung in
              regelmäßigen Abständen wieder durchzulesen.
            </p>
            <p>
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand
              Mai 2018.
            </p>
            <p>
              Definitionen der verwendeten Begriffe (z.B. "personenbezogene
              Daten" oder "Verarbeitung") finden Sie in Art. 4 DSGVO.
            </p>
          </div>
          <div className="content">
            <h3 className="title">Zugriffsdaten</h3>
            <p>
              Wir, der Websitebetreiber, erheben selbst keine personenbezogenen
              Daten. Sie können diese Webseite nutzen, ohne personenbezogene
              Daten an den Webseitenbetreiber herauszugeben.
            </p>
            <p>
              Zum Hosting der Webseite verwenden wir GitHub Pages. Durch den
              Besuch auf dieser Webseite erhebt GitHub personenbezogene Daten
              (z.B. in Form von sog. Server Log Dateien). Diese Daten beinhalten
              die besuchte Website, Uhrzeit zum Zeitpunkt des Zugriffes, Menge
              der gesendeten Daten in Byte, Quelle/Verweis von welchem Sie auf
              diese Seite gelangten, verwendeter Browser, verwendetes
              Betriebssystem und verwendete IP-Adresse.
              <br />
              GitHub benötigt diese Daten, um die Funktionsfähigkeit und
              Sicherheit der Webseite gewährleisten zu können. Bitte
              konsultieren Sie{" "}
              <a href="https://help.github.com/de/github/site-policy/github-privacy-statement">
                GitHub's Datenschutzerklärung
              </a>{" "}
              für weitere Details.
            </p>
          </div>
          <div className="content">
            <h3 className="title">
              Erfassung und Verarbeitung personenbezogener Daten
            </h3>
            <p>
              Der Websitebetreiber erhebt, nutzt und gibt Ihre personenbezogenen
              Daten nur dann weiter, wenn dies im gesetzlichen Rahmen erlaubt
              ist oder Sie in die Datenerhebung einwilligen.
            </p>
            <p>
              Als personenbezogene Daten gelten sämtliche Informationen, welche
              dazu dienen, Ihre Person zu bestimmen und welche zu Ihnen
              zurückverfolgt werden können - also beispielsweise Ihre
              E-Mail-Adresse und Telefonnummer.
            </p>
            <p>
              Diese Website können Sie besuchen, ohne Angaben zu Ihrer Person zu
              machen.
            </p>
            <p>
              Nehmen Sie mit mir als Websitebetreiber per Email eine Verbindung
              auf, wird Ihre Email Adresse gespeichert, um Ihre Anfrage
              beantworten zu können. Ohne Ihre Einwilligung werden diese Daten
              nicht an Dritte weitergegeben. Die personenbezogenen Daten, welche
              durch das Senden einer Email erhoben wurden, werden nach
              Erledigung der von Ihnen gestellten Anfrage gelöscht.
            </p>
          </div>
          <div className="content">
            <h3 className="title">Datensicherheit</h3>
            <p>
              Innerhalb des Website-Besuchs werden Verbindungsdaten durch
              Verschlüsselung geschützt. Dabei kommt das TLS Verfahren zum
              Einsatz. Dass eine angefragte Seite verschlüsselt übertragen wird,
              erkennen Sie daran, dass in der Adresszeile des Browsers das
              Protokoll "https" verwendet wird und ein grünes Schloss-Symbol
              neben der Adresszeile zu sehen ist.
            </p>
            <p>
              Bitte bedenken Sie, dass keine Internetübertragung absolute
              Sicherheit garantiert oder fehlerfrei ist. Sie werden darauf
              hingewiesen, dass standard E-Mails auf dem Übertragungsweg
              unbefugt und unbemerkt mitgelesen oder verändert werden können.
            </p>
          </div>
          <div className="content">
            <h3 className="title">Rechte des Nutzers</h3>
            <p>
              Sie haben als Nutzer das Recht, auf Antrag eine kostenlose
              Auskunft darüber zu erhalten, welche personenbezogenen Daten über
              Sie gespeichert wurden. Sie haben außerdem das Recht auf
              Berichtigung falscher Daten und auf die Verarbeitungseinschränkung
              oder Löschung Ihrer personenbezogenen Daten. Falls zutreffend,
              können Sie auch Ihr Recht auf Datenportabilität geltend machen.
              Sollten Sie annehmen, dass Ihre Daten unrechtmäßig verarbeitet
              wurden, können Sie eine Beschwerde bei der zuständigen
              Aufsichtsbehörde einreichen.
            </p>
          </div>
          <div className="content">
            <h3 className="title">Löschung von Daten</h3>
            <p>
              Sofern Ihr Wunsch nicht mit einer gesetzlichen Pflicht zur
              Aufbewahrung von Daten (z. B. Vorratsdatenspeicherung) kollidiert,
              haben Sie ein Anrecht auf Löschung Ihrer Daten. Von uns
              gespeicherte Daten werden, sollten sie für ihre Zweckbestimmung
              nicht mehr vonnöten sein und es keine gesetzlichen
              Aufbewahrungsfristen geben, gelöscht. Falls eine Löschung nicht
              durchgeführt werden kann, da die Daten für zulässige gesetzliche
              Zwecke erforderlich sind, erfolgt eine Einschränkung der
              Datenverarbeitung. In diesem Fall werden die Daten gesperrt und
              nicht für andere Zwecke verarbeitet.
            </p>
          </div>
          <div className="content">
            <h3 className="title">Widerspruchsrecht</h3>
            <p>
              Nutzer dieser Webseite können von ihrem Widerspruchsrecht Gebrauch
              machen und der Verarbeitung ihrer personenbezogenen Daten zu jeder
              Zeit widersprechen.
            </p>
            <p>
              Wenn Sie eine Berichtigung, Sperrung, Löschung oder Auskunft über
              die zu Ihrer Person gespeicherten personenbezogenen Daten wünschen
              oder Fragen bzgl. der Erhebung, Verarbeitung oder Verwendung Ihrer
              personenbezogenen Daten haben oder erteilte Einwilligungen
              widerrufen möchten, wenden Sie sich bitte an mich unter Verwendung
              der oben stehenden Kontaktinformationen.
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
        ustid
      }
    }
  }
`

export default PrivacyPolicyPage
