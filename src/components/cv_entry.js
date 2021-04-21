import React from "react"

const CVEntry = ({ entry }) => (
  <div className="columns">
    <div className="column is-two-fifths">IMAGE</div>
    <div className="column is-three-fifths">
      <p className="bg-notification is-primary">{entry}</p>
    </div>
  </div>
)

export default CVEntry
