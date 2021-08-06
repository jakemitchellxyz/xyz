import Image from 'next/image'
import styles from '../../../styles/Resumes.module.css'
import { skills } from '../../config/skills'

import Skills from '../../components/Skills'
import Victory from '../../components/Victory'
import Keyword from '../../components/Keyword'

export default function CloudEngineer ({ isFullScreen }) {
  return (
    <div className={[styles.container, isFullScreen ? styles.fullScreen : ''].join(' ')}>
      <h1 className={styles.summaryHeader}>
        Overview
      </h1>
      <div className={styles.summary}>
        <div className={[styles.summaryText, isFullScreen ? styles.fullScreen : ''].join(' ')}>
          <p>
            I have 2 years of hands-on experience working on enterprise cloud systems in <Keyword end=",">AWS</Keyword> taking advantage of <Keyword end=",">GraphQL</Keyword> <Keyword end=",">SQL</Keyword> <Keyword end=",">Serverless</Keyword> and other modern techniques. Before <Keyword end=",">AWS</Keyword> I had 4 years of experience provisioning and scripting servers for various software.
          </p>
          <p>
            I&apos;ve been building software <Keyword>professionally</Keyword> for <Keyword end=",">6 years</Keyword> each project increasing in complexity and sophistication. I&apos;ve been <Keyword>writing</Keyword> code for <Keyword end=".">11 years</Keyword>
          </p>
          <p>
            In the <Keyword end=",">last year</Keyword> I&apos;ve written over <Keyword>500k lines of code</Keyword> implementing dozens of features and hundreds of bug-fixes, primarily in <Keyword>React</Keyword>/<Keyword>Redux</Keyword> codebases.
          </p>

          <h2>Certifications / Awards</h2>
          <div className={[styles.achievements, isFullScreen ? styles.fullScreen : ''].join(' ')}>
            <div className={[styles.achievement, isFullScreen ? styles.fullScreen : ''].join(' ')}>
              <Image
                src="/logos/university-of-rochester.png"
                alt="University of Rochester Logo"
                width={60}
                height={60}
              />
              <div className={styles.achievementText}>
                <h5>Full-Ride Merit Scholarship</h5>
                <p>University of Rochester</p>
                <a
                  title="Learn about the Scholarship"
                  href="https://educationusa.state.gov/scholarships/alan-and-jane-handler-scholarship"
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginTop: 5 }}
                  >
                  View Scholarship &rarr;
                </a>
              </div>
            </div>
            <div className={[styles.achievement, isFullScreen ? styles.fullScreen : ''].join(' ')}>
              <Image
                src="/certifications/aws-architect-associate.png"
                alt="AWS Solutions Architect Certification"
                width={60}
                height={60}
              />
              <div className={styles.achievementText}>
                <h5>AWS Solutions Architect</h5>
                <p>Associate-level Certification</p>
                <a
                  title="Verify Certificate"
                  href="https://www.credly.com/badges/e4a502c8-00d3-40cf-b281-a29d48b6f239/public_url"
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginTop: 5 }}
                  >
                  View Certificate &rarr;
                </a>
              </div>
            </div>
            <div className={[styles.achievement, isFullScreen ? styles.fullScreen : ''].join(' ')}>
              <Image
                src="/certifications/emagine-media-festival.png"
                alt="ProMazo Fellow Program"
                width={60}
                height={60}
              />
              <div className={styles.achievementText}>
                <h5>eMagine Media Festival</h5>
                <p>1st Place Website Design</p>
                <a
                  title="Learn about eMagine Media Festival"
                  href="https://emaginefestival.com/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginTop: 5 }}
                  >
                  View Festival &rarr;
                </a>
              </div>
            </div>
            <div className={[styles.achievement, isFullScreen ? styles.fullScreen : ''].join(' ')}>
              <Image
                src="/certifications/promazo-fellow.png"
                alt="ProMazo Fellow Program"
                width={60}
                height={60}
              />
              <div className={styles.achievementText}>
                <h5>ProMazo Fellow</h5>
                <p>Top 5% of University Talent</p>
                <a
                  title="Learn about ProMazo Fellows"
                  href="https://workforce.promazo.com/talent/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginTop: 5 }}
                  >
                  View Workforce &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>

        <Skills skills={skills} isFullScreen={isFullScreen} />
      </div>

      <h1>Employment History</h1>
      <div className={styles.jobHistory}>
        <div className={styles.jobExperience}>
          <h2>Senior Full-Stack Engineer</h2>
          <div className={styles.employmentDetails}>
            <div>
              <Image src="/logos/100k.png" alt="100k Logo" width={20} height={20} />
              <h3>100k Mentor Challenge by ProMazo, Inc.</h3>
            </div>
            <p>May 2020-<i>Present</i></p>
          </div>

          <Victory>
            Contributed over <Keyword>220k additions</Keyword> and <Keyword>140k deletions</Keyword> (lines of code) on a <Keyword>React Native</Keyword> codebase
          </Victory>
          <Victory>
            Trained more than <Keyword>15 developers</Keyword> on <Keyword>how to contribute</Keyword> to the codebase efficiently and <Keyword>problem-solve</Keyword> within the technology stack
          </Victory>
          <Victory>
            Implemented more than <Keyword>20 pages</Keyword> of a <Keyword>cross-platform app</Keyword> using <Keyword>React Native</Keyword> and <Keyword>Expo</Keyword>
          </Victory>
          <Victory>
            Implemented an <Keyword>app-wide navigation system</Keyword> on the frontend using <Keyword>React Navigation</Keyword> & <Keyword>Redux</Keyword>
          </Victory>
          <Victory>
            Managed the <Keyword>CI/CD Pipeline</Keyword> of the <Keyword>React Native</Keyword> app to the <Keyword>iOS</Keyword>/<Keyword>Android</Keyword> app stores
          </Victory>
          <Victory>
            Managed the <Keyword>CI/CD Pipeline</Keyword> of all deployed environments of an <Keyword>AWS Cloud Infrastructure</Keyword> using <Keyword>AWS Amplify</Keyword>
          </Victory>
          <Victory>
            Implemented <Keyword>quality-assurance</Keyword> and <Keyword>living-documentation</Keyword> tools including <Keyword end=",">Jest</Keyword> <Keyword end=",">Storybook</Keyword> <Keyword end=",">Prettier</Keyword> and <Keyword>Docsify</Keyword>
          </Victory>
        </div>
        <div className={styles.jobExperience}>
          <h2>Solutions Architect & Full-Stack Engineer</h2>
          <div className={styles.employmentDetails}>
            <div>
              <Image src="/logos/promazo-small.png" alt="ProMazo Logo" width={13} height={20} />
              <h3 style={{ marginLeft: 15 }}>Mimino by ProMazo, Inc.</h3>
            </div>
            <p>July 2019-<i>Present</i></p>
          </div>
          
          <Victory>
            Contributed over <Keyword>270k additions</Keyword> and <Keyword>243k deletions</Keyword> (lines of code) on a <Keyword>React PWA</Keyword> codebase
          </Victory>
          <Victory>
            Modeled a <Keyword>GraphQL schema</Keyword> that has grown to <Keyword>60+ models</Keyword> and <Keyword>150+ connections</Keyword> and is still scaling
          </Victory>
          <Victory>
            Implemented the mentioned <Keyword>GraphQL schema</Keyword> as an API in <Keyword>AWS</Keyword> using <Keyword end=",">AppSync</Keyword> <Keyword end=",">CloudFormation</Keyword> <Keyword end=",">Amplify</Keyword> and <Keyword>DynamoDB</Keyword>
          </Victory>
          <Victory>
            Built an internal <Keyword>CLI tool</Keyword> to automate boilerplate <Keyword>code generation</Keyword> and <Keyword>improve developer efficiency by ~30%</Keyword>
          </Victory>
          <Victory>
            Designed and implemented a scalable <Keyword>Aspect-Oriented frontend architecture</Keyword> to support complex data manipulations with <Keyword end=",">React</Keyword> <Keyword end=",">Redux</Keyword> <Keyword end=",">Redux-Thunk</Keyword> and the <Keyword>Amplify SDK</Keyword>
          </Victory>
        </div>
        <div className={styles.jobExperience}>
          <h2>Cloud Backend Engineer</h2>
          <div className={styles.employmentDetails}>
            <div>
              <Image src="/logos/bny.png" alt="BNY Logo" width={20} height={20} />
              <h3>Viking by The Bank of New York Mellon Corp.</h3>
            </div>
            <p>Sept. 2018-Dec. 2019</p>
          </div>

          <Victory>
            Designed a <Keyword>SQL database</Keyword> with <Keyword>8 tables</Keyword> and implemented via <Keyword>AWS RDS</Keyword> with <Keyword>encryption</Keyword> and <Keyword>disaster-recovery</Keyword> backups
          </Victory>
          <Victory>
            Created a <Keyword>REST API</Keyword> using <Keyword>API Gateway</Keyword> and connected to the <Keyword>RDS</Keyword> databases via <Keyword>AWS Lambda</Keyword> serverless functions
          </Victory>
          <Victory>
            Used <Keyword>AWS Cognito</Keyword> to implement a <Keyword>federated authentication</Keyword> system that conforms to the bank&apos;s <Keyword>strict security standards</Keyword>
          </Victory>
          <Victory>
            Built a <Keyword>big-data processing</Keyword> system using <Keyword end=",">AWS Lambda</Keyword> <Keyword end=",">Kinesis</Keyword> <Keyword end=",">CloudWatch</Keyword> <Keyword end=",">S3</Keyword> and <Keyword>Step Functions</Keyword> to ingest financial data
          </Victory>
        </div>
        <div className={styles.jobExperience}>
          <h2>Software Architect Intern</h2>
          <div className={styles.employmentDetails}>
            <div>
              <Image src="/logos/looker.png" alt="Looker Logo" width={20} height={20} />
              <h3>Looker Data Sciences, Inc.</h3>
            </div>
            <p>June 2019-Aug. 2019</p>
          </div>

          <Victory>
            Integrated developer <Keyword>CLI tool</Keyword> into the existing <Keyword>CI/CD</Keyword> stack by working with <Keyword end=",">GitHub</Keyword> <Keyword end=",">Jenkins</Keyword> and <Keyword>AWS S3</Keyword>
          </Victory>
          <Victory>
            Developed dozens of <Keyword>integration tests</Keyword> using <Keyword>Puppeteer</Keyword> and an in-house tool built on top of <Keyword>Cucumber</Keyword>
          </Victory>
          <Victory>
            Used <Keyword>Node.js</Keyword> with <Keyword>TypeScript</Keyword> to build a developer <Keyword>CLI tool</Keyword> that shows the differences in <Keyword>Webpack bundles</Keyword> to track frontend <Keyword>payload size changes</Keyword> due to the code changes in a given PR
          </Victory>
        </div>
        <div className={styles.jobExperience}>
          <h2>Software Engineer Intern</h2>
          <div className={styles.employmentDetails}>
            <div>
              <Image src="/logos/looker.png" alt="Looker Logo" width={20} height={20} />
              <h3>Looker Data Sciences, Inc.</h3>
            </div>
            <p>June 2018-Aug. 2018</p>
          </div>

          <Victory>
            Used <Keyword>Javascript</Keyword> and <Keyword>Node.js</Keyword> to build a <Keyword>Chrome Extension</Keyword> for internal developers
          </Victory>
          <Victory>
            Integrated a developer <Keyword>CLI tool</Keyword> into the existing <Keyword>CI/CD</Keyword> stack by working with <Keyword end=",">GitHub</Keyword> <Keyword end=",">Jenkins</Keyword> and <Keyword>AWS S3</Keyword>
          </Victory>
          <Victory>
            Developed dozens of <Keyword>integration tests</Keyword> using <Keyword>Puppeteer</Keyword> and an in-house tool built on top of <Keyword>Cucumber</Keyword>
          </Victory>
          <Victory>
            Configured and deployed <Keyword>Node.js</Keyword> <Keyword>REST API</Keyword> to handle requests on <Keyword>Heroku</Keyword>
          </Victory>
        </div>
      </div>
    </div>
  )
}
