import React from "react"
import ProfileEntry from "./profile_entry"

const AboutMe = ({ profile }) => {
  return (
    <div className="container">
      {profile &&
        profile.map((entry, idx) => (
          <ProfileEntry key={idx} idx={idx} entry={entry} />
        ))}
    </div>
  )
}

export default AboutMe
