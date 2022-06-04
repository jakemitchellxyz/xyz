import React from 'react'

import Keyword from '../../components/Keyword'
import Resume from '../../components/Resume'

import { types } from '../../config/skills'

export const ServerlessEngineer = ({ isFullScreen }) => {
  return (
    <Resume
      isFullScreen={isFullScreen}
      experienceFilter={[ types.serverless ]}
      skillFilter={[ types.serverless, types.backend ]}
      summaryStatements={[
        <>My experience building <Keyword>full-stack applications</Keyword> includes dozens of different paradigms and technology stacks, from <Keyword>Laravel</Keyword> and <Keyword>Django</Keyword> to <Keyword>AWS</Keyword> and <Keyword end=".">React Native</Keyword></>,
        <>I&apos;ve been building software <Keyword>professionally</Keyword> for <Keyword end=",">6 years</Keyword> each project increasing in complexity and sophistication. I&apos;ve been <Keyword>writing</Keyword> code for <Keyword end=".">11 years</Keyword></>,
        <>In the <Keyword end=",">last year</Keyword> I&apos;ve written over <Keyword>500k lines of code</Keyword> implementing dozens of features and hundreds of bug-fixes, primarily in <Keyword>React</Keyword>/<Keyword>Redux</Keyword> codebases.</>,
      ]}
    />
  )
}

export default ServerlessEngineer
