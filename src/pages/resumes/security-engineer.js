import React from 'react'

import Keyword from '../../components/Keyword'
import Resume from '../../components/Resume'

import { types } from '../../config/skills'

export const SecurityEngineer = ({ isFullScreen }) => {
  return (
    <Resume
      isFullScreen={isFullScreen}
      experienceFilter={[ types.security ]}
      skillFilter={[ types.security ]}
      summaryStatements={[
        <>I have 2 years of hands-on experience working on enterprise cloud systems in <Keyword end=",">AWS</Keyword> taking advantage of <Keyword end=",">GraphQL</Keyword> <Keyword end=",">SQL</Keyword> <Keyword end=",">Serverless</Keyword> and other modern techniques. Before <Keyword end=",">AWS</Keyword> I had 4 years of experience provisioning and scripting servers for various software.</>,
        <>I&apos;ve been building software <Keyword>professionally</Keyword> for <Keyword end=",">6 years</Keyword> each project increasing in complexity and sophistication. I&apos;ve been <Keyword>writing</Keyword> code for <Keyword end=".">11 years</Keyword></>,
        <>In the <Keyword end=",">last year</Keyword> I&apos;ve written over <Keyword>500k lines of code</Keyword> implementing dozens of features and hundreds of bug-fixes, primarily in <Keyword>React</Keyword>/<Keyword>Redux</Keyword> codebases.</>,
      ]}
    />
  )
}

export default SecurityEngineer
