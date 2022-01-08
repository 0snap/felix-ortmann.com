import React from "react"

import CvEntry from "./cv_entry"

const Cv = ({ journey }) => (
  <div className="container">
    <p className="is-size-3 has-text-centered has-title-line mb-6">
      My journey
    </p>
    {journey &&
      journey.map((cvEntry, idx) => <CvEntry key={idx} entry={cvEntry} />)}
  </div>
)

export default Cv
