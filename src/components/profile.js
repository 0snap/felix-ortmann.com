import React from "react"
import ProfileEntry from "./profile_entry"

const AboutMe = ({ profile }) => {
  return (
    <div className="container">
      <p className="is-size-3 has-text-centered has-title-line my-6">
        About me
      </p>
      {profile &&
        profile.map((entry, idx) => (
          <ProfileEntry key={idx} idx={idx} entry={entry} />
        ))}
    </div>
  )
}

export default AboutMe
