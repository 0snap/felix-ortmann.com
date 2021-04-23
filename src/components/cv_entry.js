import React from "react"

const CVEntry = ({ entry }) => (
  <div className="columns">
    <div className="column is-two-fifths">{entry.image}</div>
    <div className="column is-three-fifths cventry__description mb-5">
      <h3 className="title is-h3">
        <a href={entry.link}>{entry.company}</a>
      </h3>
      <p className="mb-5">{entry.jobTitle}</p>
      {entry.description.map((paragraph, idx) => (
        <p key={idx}>{paragraph}</p>
      ))}
    </div>
  </div>
)

export default CVEntry
