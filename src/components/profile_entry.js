import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGamepad,
  faBusinessTime,
  faGraduationCap,
  faChartLine,
  faAddressCard,
  faRobot,
} from "@fortawesome/free-solid-svg-icons"
import { library } from "@fortawesome/fontawesome-svg-core"

const ProfileEntry = ({ idx, entry }) => {
  library.add(
    faGamepad,
    faGraduationCap,
    faChartLine,
    faAddressCard,
    faRobot,
    faBusinessTime
  )

  const iconCol = (
    <div
      className={`column is-one-fifths is-hidden-mobile ${
        idx % 2 == 1 && "has-text-right"
      }`}
    >
      <span className="icon is-large">
        <FontAwesomeIcon
          size="4x"
          icon={["fa", entry.icon]}
          transform={{ rotate: -20 * (-idx % 2 || 1) }}
          color={entry.color}
        />
      </span>
    </div>
  )
  const emptyCol = <div className="column is-one-fifths is-hidden-mobile" />
  return (
    <div className="columns mb-4 is-vcentered">
      {idx % 2 == 0 && iconCol}
      {idx % 2 == 1 && emptyCol}
      <div
        className="column is-three-fifths content mb-0 has-text-justified"
        key={idx}
        dangerouslySetInnerHTML={{ __html: entry.text }}
      />
      {idx % 2 == 1 && iconCol}
      {idx % 2 == 0 && emptyCol}
    </div>
  )
}

export default ProfileEntry
