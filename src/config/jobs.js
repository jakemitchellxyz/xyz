import React from 'react'

import Keyword from '../components/Keyword'

import { types } from './skills'

export const useJobExperiences = () => {
  const jobs = [
    {
      title: 'Senior Software Engineer',
      company: 'The College Board',
      technologies: [ types.backend, types.frontend, types.qa, types.operations, types.serverless, types.tooling ],
      projects: [{
        name: 'Digital SAT',
        logo: '/logos/college-board.png',
        start: 'Aug. 2021',
        end: 'Present'
      }]
    },
    {
      title: 'Solutions Architect & Senior Full-Stack Engineer',
      company: 'ProMazo, Inc.',
      technologies: [ types.backend, types.frontend, types.qa, types.operations, types.security, types.serverless, types.tooling ],
      projects: [
        {
          name: '100k Mentor Challenge',
          logo: '/logos/100k.png',
          start: 'May 2020',
          end: 'Sept. 2021',
          victories: [
            <>Contributed over <Keyword>220k additions</Keyword> and <Keyword>140k deletions</Keyword> (lines of code) on a <Keyword>React Native</Keyword> codebase</>,
            <>Trained more than <Keyword>15 developers</Keyword> on <Keyword>how to contribute</Keyword> to the codebase efficiently and <Keyword>problem-solve</Keyword> within the technology stack</>,
            <>Implemented more than <Keyword>20 pages</Keyword> of a <Keyword>cross-platform app</Keyword> using <Keyword>React Native</Keyword> and <Keyword>Expo</Keyword></>,
            <>Implemented an <Keyword>app-wide navigation system</Keyword> on the frontend using <Keyword>React Navigation</Keyword> & <Keyword>Redux</Keyword></>,
            <>Managed the <Keyword>CI/CD Pipeline</Keyword> of the <Keyword>React Native</Keyword> app to the <Keyword>iOS</Keyword>/<Keyword>Android</Keyword> app stores</>,
            <>Managed the <Keyword>CI/CD Pipeline</Keyword> of all deployed environments of an <Keyword>AWS Cloud Infrastructure</Keyword> using <Keyword>AWS Amplify</Keyword></>,
            <>Implemented <Keyword>quality-assurance</Keyword> and <Keyword>living-documentation</Keyword> tools including <Keyword end=",">Jest</Keyword> <Keyword end=",">Storybook</Keyword> <Keyword end=",">Prettier</Keyword> and <Keyword>Docsify</Keyword></>
          ]
        },
        {
          name: 'Mimino',
          logo: '/logos/promazo-small.png',
          logoWidth: 13,
          start: 'July 2019',
          end: 'Sept. 2021',
          victories: [
            <>Contributed over <Keyword>270k additions</Keyword> and <Keyword>243k deletions</Keyword> (lines of code) on a <Keyword>React PWA</Keyword> codebase</>,
            <>Modeled a <Keyword>GraphQL schema</Keyword> that has grown to <Keyword>60+ models</Keyword> and <Keyword>150+ connections</Keyword> and is still scaling</>,
            <>Implemented the mentioned <Keyword>GraphQL schema</Keyword> as an API in <Keyword>AWS</Keyword> using <Keyword end=",">AppSync</Keyword> <Keyword end=",">CloudFormation</Keyword> <Keyword end=",">Amplify</Keyword> and <Keyword>DynamoDB</Keyword></>,
            <>Built an internal <Keyword>CLI tool</Keyword> to automate boilerplate <Keyword>code generation</Keyword> and <Keyword>improve developer efficiency by ~30%</Keyword></>,
            <>Designed and implemented a scalable <Keyword>Aspect-Oriented frontend architecture</Keyword> to support complex data manipulations with <Keyword end=",">React</Keyword> <Keyword end=",">Redux</Keyword> <Keyword end=",">Redux-Thunk</Keyword> and the <Keyword>Amplify SDK</Keyword></>
          ]
        }
      ]
    },
    {
      title: 'Software Architect Intern',
      company: 'Looker Data Sciences, Inc.',
      technologies: [ types.backend, types.tooling, types.qa, types.operations ],
      projects: [{
        name: 'Developer Tools',
        logo: '/logos/looker.png',
        start: 'June 2019',
        end: 'Aug. 2019',
        victories: [
          <>Used <Keyword>Node.js</Keyword> with <Keyword>TypeScript</Keyword> to build a developer <Keyword>CLI tool</Keyword> that shows the differences in <Keyword>Webpack bundles</Keyword> to track frontend <Keyword>payload size changes</Keyword> due to the code changes in a given PR</>,
          <>Integrated developer <Keyword>CLI tool</Keyword> into the existing <Keyword>CI/CD</Keyword> stack by working with <Keyword end=",">GitHub</Keyword> <Keyword end=",">Jenkins</Keyword> and <Keyword>AWS S3</Keyword></>,
          <>Developed dozens of <Keyword>integration tests</Keyword> using <Keyword>Puppeteer</Keyword> and an in-house tool built on top of <Keyword>Cucumber</Keyword></>
        ]
      }]
    },
    {
      title: 'Cloud Backend Engineer',
      company: 'The Bank of New York Mellon Corp.',
      technologies: [ types.backend, types.operations, types.cryptography, types.security, types.serverless ],
      projects: [{
        name: 'Viking',
        logo: '/logos/bny.png',
        start: 'Sept. 2018',
        end: 'Dec. 2019',
        victories: [
          <>Designed a <Keyword>SQL database</Keyword> with <Keyword>8 tables</Keyword> and implemented via <Keyword>AWS RDS</Keyword> with <Keyword>encryption</Keyword> and <Keyword>disaster-recovery</Keyword> backups</>,
          <>Created a <Keyword>REST API</Keyword> using <Keyword>API Gateway</Keyword> and connected to the <Keyword>RDS</Keyword> databases via <Keyword>AWS Lambda</Keyword> serverless functions</>,
          <>Used <Keyword>AWS Cognito</Keyword> to implement a <Keyword>federated authentication</Keyword> system that conforms to the bank&apos;s <Keyword>strict security standards</Keyword></>,
          <>Built a <Keyword>big-data processing</Keyword> system using <Keyword end=",">AWS Lambda</Keyword> <Keyword end=",">Kinesis</Keyword> <Keyword end=",">CloudWatch</Keyword> <Keyword end=",">S3</Keyword> and <Keyword>Step Functions</Keyword> to ingest financial data</>
        ]
      }]
    },
    {
      title: 'Software Engineer Intern',
      company: 'Looker Data Sciences, Inc.',
      technologies: [ types.backend, types.tooling, types.qa, types.operations, types.cryptography ],
      projects: [{
        name: 'Admin Tools',
        logo: '/logos/looker.png',
        start: 'June 2018',
        end: 'Aug. 2018',
        victories: [
          <>Used <Keyword>Javascript</Keyword> and <Keyword>Node.js</Keyword> to build a <Keyword>Chrome Extension</Keyword> for internal developers</>,
          <>Configured and deployed <Keyword>Node.js</Keyword> <Keyword>REST API</Keyword> to handle requests on <Keyword>Heroku</Keyword></>,
          <>Integrated a developer <Keyword>CLI tool</Keyword> into the existing <Keyword>CI/CD</Keyword> stack by working with <Keyword end=",">GitHub</Keyword> <Keyword end=",">Jenkins</Keyword> and <Keyword>AWS S3</Keyword></>,
          <>Developed dozens of <Keyword>integration tests</Keyword> using <Keyword>Puppeteer</Keyword> and an in-house tool built on top of <Keyword>Cucumber</Keyword></>,
        ]
      }]
    }
  ]

  const filterJobs = (filter) => {
    return jobs.filter(filter)
  }

  return {
    filterJobs,
    allJobs: jobs
  }
}

export default useJobExperiences
