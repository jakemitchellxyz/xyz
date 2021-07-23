import Image from 'next/image'
import styles from '../../../styles/Resumes.module.css'
import { skills } from '../../config/skills'

import Skills from '../../components/Skills'
import Victory from '../../components/Victory'
import Keyword from '../../components/Keyword'

export default function SoftwareEngineer ({ isFullScreen }) {
  return (
    <div className={[styles.container, isFullScreen ? styles.fullScreen : ''].join(' ')}>
      <h1 className={styles.summaryHeader}>
        Overview
      </h1>
      <div className={styles.summary}>
        <div className={[styles.summaryText, isFullScreen ? styles.fullScreen : ''].join(' ')}>
          <p>
            I&apos;ve been building software <Keyword>professionally</Keyword> for <Keyword end=",">6 years</Keyword> each project increasing in complexity and sophistication. I&apos;ve been <Keyword>writing</Keyword> code for <Keyword end=".">11 years</Keyword>
          </p>
          <p>
            In the last year, I&apos;ve written over <Keyword>400k lines of code</Keyword> implementing dozens of <Keyword>features</Keyword> and hundreds of <Keyword end=",">bug-fixes</Keyword> primarily in <Keyword>React</Keyword>/<Keyword>Redux</Keyword> repositories.
          </p>
          <p>
            I have <Keyword>trained</Keyword> and <Keyword>mentored more than 20 engineers</Keyword> on how to use this particular <Keyword>technology stack</Keyword> and I not only understand it thoroughly, but I am quite skilled at <Keyword end=".">explaining it simply</Keyword>
          </p>
          <h2>Education / Certifications</h2>
          <div className={styles.achievements}>
            <div className={styles.achievement}>
              <Image
                src="/logos/university-of-rochester.png"
                alt="University of Rochester Logo"
                width={60}
                height={60}
                />
              <div className={styles.achievementText}>
                <h5>University of Rochester</h5>
                <p>Full-Ride Merit Scholarship</p>
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
            <div className={styles.achievement}>
              <Image
                src="/certifications/aws-architect-associate.png"
                alt="AWS Solutions Architect Certification"
                width={60}
                height={60}
                />
              <div className={styles.achievementText}>
                <h5>AWS Certified Solutions Architect</h5>
                <p>Associate-level Certified</p>
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
          </div>
        </div>

        <Skills skills={skills} isFullScreen={isFullScreen} />
      </div>

      <h1>Employment History</h1>
      <div className={styles.jobHistory}>
        <div className={styles.jobExperience}>
          <h2>Senior Software Engineer</h2>
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
            Implemented an <Keyword>app-wide navigation system</Keyword> on the frontend using <Keyword>React Navigation</Keyword> & <Keyword>Redux</Keyword>
          </Victory>
          <Victory>
            Implemented more than <Keyword>20 pages</Keyword> of a <Keyword>cross-platform app</Keyword> using <Keyword>React Native</Keyword> and <Keyword>Expo</Keyword>
          </Victory>
          <Victory>
            Trained more than <Keyword>15 developers</Keyword> on <Keyword>how to contribute</Keyword> to the codebase efficiently and <Keyword>problem-solve</Keyword> within the technology stack
          </Victory>
          <Victory>
            Managed the <Keyword>deployment process</Keyword> of the native app to the <Keyword>iOS</Keyword>/<Keyword>Android</Keyword> app stores
          </Victory>
          <Victory>
            Implemented <Keyword>living-documentation</Keyword> and quality-assurance tools including <Keyword end=",">Jest</Keyword> <Keyword end=",">Storybook</Keyword> <Keyword end=",">Prettier</Keyword> and <Keyword>Docsify</Keyword>
          </Victory>
          <Victory>
            Managed the <Keyword>deployment process</Keyword> of the production environment of a <Keyword>AWS-based serverless cloud</Keyword> using <Keyword>AWS Amplify</Keyword>
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
            Contributed over <Keyword>270k additions</Keyword> and <Keyword>243k deletions</Keyword> (lines of code added/removed) on a <Keyword>React PWA</Keyword> codebase
          </Victory>
          <Victory>
            Modeled a <Keyword>GraphQL schema</Keyword> that has grown to <Keyword>60+ models</Keyword> and <Keyword>150+ connections</Keyword> and is still scaling
          </Victory>
          <Victory>
            Implemented the mentioned <Keyword>GraphQL schema</Keyword> as an API in <Keyword>AWS</Keyword> using <Keyword end=",">AppSync</Keyword> <Keyword end=",">CloudFormation</Keyword> <Keyword end=",">Amplify</Keyword> and <Keyword>DynamoDB</Keyword>
          </Victory>
          <Victory>
            Designed and implemented <Keyword>scalable frontend architecture</Keyword> to support complex data manipulations with <Keyword end=",">React</Keyword> <Keyword end=",">Redux</Keyword> <Keyword end=",">Redux-Thunk</Keyword> and the <Keyword>Amplify SDK</Keyword>
          </Victory>
          <Victory>
            Built an internal <Keyword>CLI tool</Keyword> to automate boilerplate <Keyword>code generation</Keyword> and <Keyword>improve developer efficiency by ~40%</Keyword> when building new features
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
            Designed <Keyword>SQL database</Keyword> with <Keyword>8 tables</Keyword> and implemented with <Keyword>AWS RDS</Keyword>
          </Victory>
          <Victory>
            Created a <Keyword>REST API</Keyword> using <Keyword>API Gateway</Keyword> and connected to <Keyword>RDS</Keyword> via <Keyword>Lambda</Keyword>
          </Victory>
          <Victory>
            Used <Keyword>AWS Cognito</Keyword> to implement a <Keyword>federated authentication system</Keyword>that conforms to the multi-billion-dollar-bank&apos;s <Keyword>security standards</Keyword>
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
            Used <Keyword>Node.js</Keyword> with <Keyword>TypeScript</Keyword> to build a developer <Keyword>CLI tool</Keyword> that shows the differences in <Keyword>Webpack bundles</Keyword> to track frontend <Keyword>file size changes</Keyword> in a PR
          </Victory>
          <Victory>
            Integrated developer <Keyword>CLI tool</Keyword> into the existing <Keyword>CI/CD</Keyword> stack by working with <Keyword end=",">GitHub</Keyword> <Keyword end=",">Jenkins</Keyword> and <Keyword>AWS S3</Keyword>
          </Victory>
          <Victory>
            Developed dozens of <Keyword>integration tests</Keyword> using <Keyword>Puppeteer</Keyword> and an in-house tool built on top of <Keyword>Cucumber</Keyword>
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
            Used <Keyword>Javascript</Keyword> and <Keyword>Node.js</Keyword> to build a <Keyword>Chrome Extension</Keyword> to authenticate <Keyword>security hashes</Keyword> and compute <Keyword>versioning hashes</Keyword> of tutorial documents
          </Victory>
          <Victory>
            Integrated developer <Keyword>CLI tool</Keyword> into the existing <Keyword>CI/CD</Keyword> stack by working with <Keyword end=",">GitHub</Keyword> <Keyword end=",">Jenkins</Keyword> and <Keyword>AWS S3</Keyword>
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
