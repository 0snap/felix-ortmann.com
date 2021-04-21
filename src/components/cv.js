import React from "react"

import CVEntry from "./cv_entry"

const CV = ({ journey }) => (
  <section className="section is-medium">
    <div className="container">
      {journey &&
        journey.map((cvEntry, idx) => <CVEntry key={idx} entry={cvEntry} />)}
    </div>
  </section>
)

export default CV
