import React from "react"

import CvEntry from "./cv_entry"

const Cv = ({ journey }) => (
  <div className="container">
    {journey &&
      journey.map((cvEntry, idx) => <CvEntry key={idx} entry={cvEntry} />)}
  </div>
)

export default Cv
