import React from 'react'

import Keyword from '../../components/Keyword'
import Resume from '../../components/Resume'

import { types } from '../../config/skills'

import { yearsWritingCode, yearsProfessional } from '../../config/experience'

export const FullStackEngineer = ({ isFullScreen }) => {
  return (
    <Resume
      isFullScreen={isFullScreen}
      experienceFilter={null}
      skillFilter={[ types.language, types.backend, types.frontend, types.operations, types.tooling ]}
      summaryStatements={[
        <>I&apos;ve built <Keyword>full-stack systems</Keyword> across dozens of paradigms and stacks, from <Keyword>Laravel</Keyword> and <Keyword>Django</Keyword> to <Keyword>AWS serverless</Keyword> and <Keyword>React Native</Keyword>, taking products from initial architecture through production at scale.</>,
        <>I&apos;ve been building software <Keyword>professionally</Keyword> for <Keyword end=",">{yearsProfessional} years</Keyword> each project increasing in complexity and sophistication. I&apos;ve been <Keyword>writing</Keyword> code for <Keyword end=".">{yearsWritingCode} years</Keyword></>,
        <>In the last year I&apos;ve written over <Keyword>500k lines of code</Keyword> implementing dozens of features and hundreds of bug-fixes, primarily in <Keyword>React</Keyword>/<Keyword>Redux</Keyword> codebases.</>,
      ]}
    />
  )
}

export default FullStackEngineer
