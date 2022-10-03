import React from "react"

// import a bunch of icons (languages & tools I've worked with) and put them in a lookup table by name
import {
  SiCoffeescript,
  SiElastic,
  SiGithubactions,
  SiGitlab,
  SiGooglecloud,
  SiGrafana,
  SiHelm,
  SiJava,
  SiKubernetes,
  SiNginx,
  SiRedhatopenshift,
  SiTeamcity,
  SiTypescript,
} from "react-icons/si"
import { FaAws, FaDocker, FaNodeJs, FaPhp, FaReact } from "react-icons/fa"
import { DiAtlassian, DiGo, DiPython } from "react-icons/di"
import { TbBrandKotlin } from "react-icons/tb"
import { VscTerminalLinux } from "react-icons/vsc"
import { IconContext } from "react-icons" // icon styling

// these keys are used in the data.yaml
const lookup = {
  atlassian: <DiAtlassian title="Atlassian" />,
  coffeescript: <SiCoffeescript title="Coffeescript" />,
  elastic: <SiElastic title="Elastic" />,
  grafana: <SiGrafana title="Grafana" />,
  "github-ci": <SiGithubactions title="GitHub Actions" />,
  "gitlab-ci": <SiGitlab title="Gitlab Pipelines" />,
  gcp: <SiGooglecloud title="GCP" />,
  go: <DiGo title="Go" />,
  helm: <SiHelm title="Helm" />,
  java: <SiJava title="Java" />,
  kotlin: <TbBrandKotlin title="Kotlin" />,
  kubernetes: <SiKubernetes title="Kubernetes" />,
  linux: <VscTerminalLinux title="Linux &amp; Shell" />,
  nginx: <SiNginx title="Nginx" />,
  openshift: <SiRedhatopenshift title="Openshift" />,
  python: <DiPython title="Python" />,
  aws: <FaAws title="AWS" />,
  docker: <FaDocker title="Docker" />,
  nodejs: <FaNodeJs title="NodeJS" />,
  php: <FaPhp title="Php" />,
  react: <FaReact title="ReactJS" />,
  teamcity: <SiTeamcity title="Teamcity" />,
  typescript: <SiTypescript title="Typescript" />,
}

const CvEntry = ({ entry }) => {
  const icons = entry.icons.sort()
  const iconCol = (
    <div className="cv-icon-column column is-one-fifths">
      <div className="cv-icon-box box">
        <p className="is-size-6 my-4 is-hidden-tablet-only is-hidden-mobile is-hidden-desktop-only">
          Primary tech stack
        </p>
        {icons.map((icon) => (
          <div className="cv-icon-container">
            <IconContext.Provider title={icon} value={{ className: "cv-icon" }}>
              {lookup[icon]}
            </IconContext.Provider>
            <p className="is-hidden-tablet">{lookup[icon].props.title}</p>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className="columns is-variable is-0-mobile">
      {iconCol}
      <div className="column is-four-fifths ">
        <div className="content box cv-entry">
          <p className="is-size-4 my-3">
            <a href={entry.link} target="_blank" rel="noopener noreferrer">
              {entry.company}
            </a>
          </p>
          <p className="is-size-5">{entry.jobTitle}</p>
          <p dangerouslySetInnerHTML={{ __html: entry.duration }} />
          <ul className="mb-4">
            {entry.description.map((paragraph, idx) => (
              <li key={idx} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CvEntry
