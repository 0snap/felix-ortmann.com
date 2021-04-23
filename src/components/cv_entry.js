import React from "react"

const CvEntry = ({ entry }) => (
  <div className="columns mb-6">
    <div className="column is-two-fifths">{entry.image}</div>
    <div className="column is-three-fifths content box">
      <p className="is-size-4 my-3">
        <a href={entry.link} target="_blank" rel="noopener noreferrer">
          {entry.company}
        </a>
      </p>
      <p className="is-size-5">{entry.jobTitle}</p>
      <p dangerouslySetInnerHTML={{ __html: entry.duration }} />
      <ul className="mb-3">
        {entry.description.map((paragraph, idx) => (
          <li key={idx} dangerouslySetInnerHTML={{ __html: paragraph }} />
        ))}
      </ul>
    </div>
  </div>
)

export default CvEntry
