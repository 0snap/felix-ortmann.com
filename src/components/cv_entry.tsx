import * as React from 'react';

// import a bunch of icons (languages & tools I've worked with) and put them in a lookup table by name
import {
  SiApachekafka,
  SiArgo,
  SiCoffeescript,
  SiElastic,
  SiGithubactions,
  SiGitlab,
  SiGooglecloud,
  SiGrafana,
  SiHelm,
  SiKubernetes,
  SiNginx,
  SiRabbitmq,
  SiRedhatopenshift,
  SiScaleway,
  SiTeamcity,
  SiTerraform,
  SiTypescript,
  SiWireguard,
} from 'react-icons/si';
import {FaAws, FaDocker, FaNodeJs, FaPhp, FaReact} from 'react-icons/fa';
import {DiAtlassian, DiGo, DiJava, DiPython} from 'react-icons/di';
import {TbBrandKotlin} from 'react-icons/tb';
import {VscTerminalLinux} from 'react-icons/vsc';
import {IconContext} from 'react-icons'; // icon styling
import {CvEntryData} from '../types';
import {InView} from 'react-intersection-observer';


// these keys are used in the data.yaml
const lookup = new Map<string, JSX.Element>([
  ['atlassian', <DiAtlassian title="Atlassian" />],
  ['argocd', <SiArgo title="ArgoCD" />],
  ['kafka', <SiApachekafka title="Kafka" />],
  ['coffeescript', <SiCoffeescript title="Coffeescript" />],
  ['elastic', <SiElastic title="Elastic" />],
  ['grafana', <SiGrafana title="Grafana" />],
  ['github-ci', <SiGithubactions title="GitHub Actions" />],
  ['gitlab-ci', <SiGitlab title="Gitlab Pipelines" />],
  ['gcp', <SiGooglecloud title="GCP" />],
  ['go', <DiGo style={{strokeWidth: '1'}} title="Go" />],
  ['helm', <SiHelm title="Helm" />],
  ['java', <DiJava title="Java" />],
  ['kotlin', <TbBrandKotlin title="Kotlin" />],
  ['kubernetes', <SiKubernetes title="Kubernetes" />],
  ['linux', <VscTerminalLinux title="Linux &amp; Shell" />],
  ['nginx', <SiNginx title="Nginx" />],
  ['openshift', <SiRedhatopenshift title="Openshift" />],
  ['python', <DiPython title="Python" />],
  ['aws', <FaAws title="AWS" />],
  ['docker', <FaDocker title="Docker" />],
  ['nodejs', <FaNodeJs title="NodeJS" />],
  ['php', <FaPhp title="Php" />],
  ['rabbitmq', <SiRabbitmq title="Rabbit MQ" />],
  ['react', <FaReact title="ReactJS" />],
  ['scaleway', <SiScaleway title="Scaleway" />],
  ['teamcity', <SiTeamcity title="Teamcity" />],
  ['terraform', <SiTerraform title="Terraform" />],
  ['typescript', <SiTypescript title="Typescript" />],
  ['wireguard', <SiWireguard title="Wireguard" />],
]);

type CvEntryProps = {
  entry: CvEntryData;
}

type IconColProps = {
  icons: string[];
  inView: boolean;
}

const CvEntryIconCol = ({icons, inView}: IconColProps) => (
  <div className="cv-icon-column column is-one-fifths">
    <div className={`cv-icon-box ${inView ? 'cv-icon-box-visible' : ''}`}>
      {icons.map((icon: string, idx: number) => (
        <div key={idx} className='cv-icon-container'>
          <IconContext.Provider value={{className: 'cv-icon'}}>
            {lookup.get(icon)}
          </IconContext.Provider>
          <p className="is-hidden-tablet">{lookup.get(icon)?.props.title}</p>
        </div>
      ))}
    </div>
  </div>
);

const CvEntry = ({entry}: CvEntryProps) => {
  const icons = entry.icons.sort();
  return (
    <InView>
      {({inView, ref}) => (
        <div ref={ref} className="columns is-variable is-0-mobile">
          <CvEntryIconCol icons={icons} inView={inView} />
          <div className="column is-four-fifths">
            <div className={`content box cv-entry ${inView ? 'cv-entry-visible' : ''}`} >
              <p className="is-size-4 my-3">
                <a href={entry.link} target="_blank" rel="noopener noreferrer">
                  {entry.company}
                </a>
              </p>
              <p className="is-size-5">{entry.jobTitle}</p>
              <p dangerouslySetInnerHTML={{__html: entry.duration}} />
              <ul className="mb-4">
                {entry.description.map((paragraph: string, idx: number) => (
                  <li key={idx} dangerouslySetInnerHTML={{__html: paragraph}} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </InView>
  );
};

export default CvEntry;
