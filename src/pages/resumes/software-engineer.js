import Image from 'next/image'
import styles from '../../../styles/Resumes.module.css'

import skills from '../../config/skills'

export default function SoftwareEngineer () {
  return (
    <div className={styles.container}>
      <h1>Summary</h1>
      <p>I have written over 300k lines of code in the last year alone, implementing dozens of features and hundreds of bug fixes.</p>
      
      <h2>Toolbox</h2>
      <div className={styles.skills}>
        {skills.map((skill, i) => (
          <div className={styles.skillCard} key={`skill_${i}`}>
            <Image src={skill.logo} alt={`${skill.name} Logo`} width={25} height={25} />
            <h5>{skill.name}</h5>
          </div>
        ))}
      </div>
      <h1>Employment History</h1>
      <div className={styles.jobExperience}>
        <h2>Cross-Platform Software Engineer</h2>
        <div className={styles.employmentDetails}>
          <div>
            <Image src="/logos/100k.png" alt="100k Logo" width={25} height={25} />
            <h3>100k Mentor Challenge by ProMazo, Inc.</h3>
          </div>
          <p>May 2020-Present</p>
        </div>
        <p>Contributed over 220k additions and 140k deletions (lines of code added/removed) on a React Native codebase</p>
        <p>Implemented app-wide navigation system on the frontend of the app using React Navigation & Redux</p>
        <p>Scaffolded and implemented over 25 pages of a cross-platform app using React Native and Expo</p>
        <p>Expanded a GraphQL schema by 10+ models to support new frontend features</p>
        <p>Managed the deployment process to the app stores, delivering the native apps to iOS and Android customers</p>
        <p>Managed the deployment process of the production environment of the serverless cloud using AWS Amplify</p>
      </div>
      <div className={styles.jobExperience}>
        <h2>Solutions Architect & Full-Stack Engineer</h2>
        <div className={styles.employmentDetails}>
          <div>
            <Image src="/logos/promazo-small.png" alt="ProMazo Logo" width={18} height={25} />
            <h3>Mimino by ProMazo, Inc.</h3>
          </div>
          <p>July 2019-Present</p>
        </div>
        <p>Contributed over 270k additions and 243k deletions (lines of code added/removed) on a React PWA codebase</p>
        <p>Trained more than 15 developers on how to contribute to the codebase efficiently and problem-solve within the technology stack</p>
        <p>Modeled a GraphQL schema that has grown to 60+ models and 150+ connections and is still scaling</p>
        <p>Implemented the mentioned GraphQL schema as an API in AWS using AppSync, CloudFormation, Amplify, and DynamoDB</p>
        <p>Designed scalable frontend architecture to support complex data manipulations with React, Redux, Redux-Thunk, and the Amplify SDK</p>
        <p>Implemented Aspect-Oriented design on a large React codebase to protect development velocity from significant developer churn</p>
        <p>Implemented living-documentation and quality-assurance tools including Jest, Storybook, Prettier, and Docsify</p>
        <p>Built an internal CLI tool to automate boilerplate code generation and improve developer efficiency by ~40% when building new features</p>
      </div>
      <div className={styles.jobExperience}>
        <h2>Hybrid Cloud Backend Engineer</h2>
        <div className={styles.employmentDetails}>
          <div>
            <Image src="/logos/bny.png" alt="BNY Logo" width={25} height={25} />
            <h3>Viking by The Bank of New York Mellon</h3>
          </div>
          <p>Sept. 2018-Dec. 2019</p>
        </div>
        <p>Designed SQL database with 8 tables and implemented with AWS RDS</p>
        <p>Created a REST API using API Gateway and connected to RDS via Lambda</p>
        <p>Used AWS Cognito to implement an authentication system that conforms to the bank&apos;s security standards</p>
        <p>Built a big-data processing system using AWS Lambda, Kinesis, CloudWatch, S3, and Step Functions to ingest financial data</p>
      </div>
      <div className={styles.jobExperience}>
        <h2>Software Architect Intern</h2>
        <div className={styles.employmentDetails}>
          <div>
            <Image src="/logos/looker.png" alt="Looker Logo" width={25} height={25} />
            <h3>Looker Data Sciences, Inc.</h3>
          </div>
          <p>June 2019-Aug. 2019</p>
        </div>
        <p>Used Node.js with TypeScript to build a developer CLI tool that shows the differences in Webpack bundles to track frontend file size changes in a PR</p>
        <p>Integrated developer CLI tool into the existing CI/CD stack by working with GitHub, Jenkins, and AWS S3</p>
        <p>Developed dozens of integration tests using Puppeteer and an in-house tool built on top of Cucumber</p>
      </div>
      <div className={styles.jobExperience}>
        <h2>Software Engineer Intern</h2>
        <div className={styles.employmentDetails}>
          <div>
            <Image src="/logos/looker.png" alt="Looker Logo" width={25} height={25} />
            <h3>Looker Data Sciences, Inc.</h3>
          </div>
          <p>June 2018-Aug. 2018</p>
        </div>
        <p>Used ES6 and Node.js to build a Chrome Extension to authenticate security hashes and compute versioning hashes of tutorial documents</p>
        <p>Integrated developer CLI tool into the existing CI/CD stack by working with GitHub, Jenkins, and AWS S3</p>
        <p>Developed dozens of integration tests using Puppeteer and an in-house tool built on top of Cucumber</p>
        <p>Configured and deployed Node.js REST API to handle requests on Heroku</p>
      </div>
      {/* <div className={styles.imageRow}>
        <Image src="/github/janus.png" alt="Janus Commit History" layout="fill" objectFit="contain" />
        <Image src="/github/mimino.png" alt="Mimino Commit History" layout="fill" objectFit="contain" />
      </div> */}
    </div>
  )
}