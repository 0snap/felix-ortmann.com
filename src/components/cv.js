import React from "react"

import CvEntry from "./cv_entry"

const Cv = ({ journey }) => (
  <section className="section is-medium">
    <div className="container">
      {journey &&
        journey.map((cvEntry, idx) => <CvEntry key={idx} entry={cvEntry} />)}
    </div>
  </section>
)

export default Cv
