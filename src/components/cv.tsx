import * as React from "react"
import { CvEntryData } from "../types"

import CvEntry from "./cv_entry"

interface CvProps {
  journey: CvEntryData[];
}

const Cv = ({ journey }: CvProps) => (
  <div className="container">
    <p className="is-size-3 has-text-centered has-title-line mb-6">
      My journey
    </p>
    {journey &&
      journey.map((cvEntry, idx) => <CvEntry key={idx} entry={cvEntry} />)}
  </div>
)

export default Cv
