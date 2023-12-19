import * as React from 'react';


// import a bunch of icons (languages & tools I've worked with) and put them in a lookup table by name
import {AiFillCode, AiOutlineCloudServer, AiOutlineSecurityScan} from 'react-icons/ai';
import {CiServer} from 'react-icons/ci';
import {DiAtlassian, DiGo, DiJava, DiPython} from 'react-icons/di';
import {FaAward, FaDocker, FaGraduationCap, FaNodeJs, FaPhabricator, FaReact} from 'react-icons/fa6';
import {GiProcessor} from 'react-icons/gi';
import {HiOutlineRocketLaunch} from 'react-icons/hi2';
import {IoMdCheckmarkCircleOutline} from 'react-icons/io';
import {MdOutlineInsights} from 'react-icons/md';
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
  SiWireguard} from 'react-icons/si';
import {TbBrandKotlin, TbZoomQuestion} from 'react-icons/tb';
import {VscTerminalLinux} from 'react-icons/vsc';


// these keys are used in the data.yaml
export const iconLookup = (icon: string, color?: string, size?: string, style?: React.CSSProperties): JSX.Element | undefined => {
  const lookup = new Map<string, JSX.Element>([
    ['no-insights', <TbZoomQuestion title="No insights" color={color} size={size} style={style} />],
    ['code', <AiFillCode title="Code" color={color} size={size} style={style} />],
    ['insights', <MdOutlineInsights title="Insights" color={color} size={size} style={style} />],
    ['kubernetes', <SiKubernetes title="Kubernetes" color={color} size={size} style={style} />],
    ['rocket', <HiOutlineRocketLaunch title="Rocket" color={color} size={size} style={style} />],
    ['server', <CiServer title="On-Premise" color={color} size={size} style={style} />],
    ['graduation-cap', <FaGraduationCap title="University Graduation" color={color} size={size} style={style} />],
    ['concurrency', <GiProcessor title="Concurrency" color={color} size={size} style={style} />],
    ['security', <AiOutlineSecurityScan title="Security" color={color} size={size} style={style} />],
    ['cloud', <AiOutlineCloudServer title="Cloud" color={color} size={size} style={style} />],
    ['checkmark', <IoMdCheckmarkCircleOutline title="Checkmark" color={color} size={size} style={style} />],
    ['atlassian', <DiAtlassian title="Atlassian" color={color} size={size} style={style} />],
    ['argocd', <SiArgo title="ArgoCD" color={color} size={size} style={style} />],
    ['kafka', <SiApachekafka title="Kafka" color={color} size={size} style={style} />],
    ['coffeescript', <SiCoffeescript title="Coffeescript" color={color} size={size} style={style} />],
    ['elastic', <SiElastic title="Elastic" color={color} size={size} style={style} />],
    ['grafana', <SiGrafana title="Grafana" color={color} size={size} style={style} />],
    ['github-ci', <SiGithubactions title="GitHub Actions" color={color} size={size} style={style} />],
    ['gitlab-ci', <SiGitlab title="Gitlab Pipelines" color={color} size={size} style={style} />],
    ['gcp', <SiGooglecloud title="GCP" color={color} size={size} style={style} />],
    ['go', <DiGo title="Go" color={color} size={size} style={{...style, ...{strokeWidth: 1}}} />],
    ['helm', <SiHelm title="Helm" color={color} size={size} style={style} />],
    ['java', <DiJava title="Java" color={color} size={size} style={style} />],
    ['kotlin', <TbBrandKotlin title="Kotlin" color={color} size={size} style={style} />],
    ['kubernetes', <SiKubernetes title="Kubernetes" color={color} size={size} style={style} />],
    ['linux', <VscTerminalLinux title="Linux &amp; Shell" color={color} size={size} style={style} />],
    ['nginx', <SiNginx title="Nginx" color={color} size={size} style={style} />],
    ['openshift', <SiRedhatopenshift title="Openshift" color={color} size={size} style={style} />],
    ['python', <DiPython title="Python" color={color} size={size} style={style} />],
    ['aws', <FaAward title="AWS" color={color} size={size} style={style} />],
    ['docker', <FaDocker title="Docker" color={color} size={size} style={style} />],
    ['nodejs', <FaNodeJs title="NodeJS" color={color} size={size} style={style} />],
    ['php', <FaPhabricator title="Php" color={color} size={size} style={style} />],
    ['rabbitmq', <SiRabbitmq title="Rabbit MQ" color={color} size={size} style={style} />],
    ['react', <FaReact title="ReactJS" color={color} size={size} style={style} />],
    ['scaleway', <SiScaleway title="Scaleway" color={color} size={size} style={style} />],
    ['teamcity', <SiTeamcity title="Teamcity" color={color} size={size} style={style} />],
    ['terraform', <SiTerraform title="Terraform" color={color} size={size} style={style} />],
    ['typescript', <SiTypescript title="Typescript" color={color} size={size} style={style} />],
    ['wireguard', <SiWireguard title="Wireguard" color={color} size={size} style={style} />],
  ]);
  return lookup.get(icon);
};

