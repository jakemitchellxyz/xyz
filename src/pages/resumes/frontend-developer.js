import React from 'react'

import Keyword from '../../components/Keyword'
import Resume from '../../components/Resume'

import { types } from '../../config/skills'

import { yearsWritingCode, yearsProfessional } from '../../config/experience'

export const FrontendDeveloper = ({ isFullScreen }) => {
  return (
    <Resume
      isFullScreen={isFullScreen}
      experienceFilter={[ types.frontend ]}
      skillFilter={[ types.frontend ]}
      projectFilter={[ types.frontend, types.mobile ]}
      summaryStatements={[
        <>I specialize in <Keyword>React</Keyword> and <Keyword>React Native</Keyword>, building component architectures, state management systems, and cross-platform UIs that ship to web, iOS, and Android from a single codebase.</>,
        <>I&apos;ve been building software <Keyword>professionally</Keyword> for <Keyword end=",">{yearsProfessional} years</Keyword> each project increasing in complexity and sophistication. I&apos;ve been <Keyword>writing</Keyword> code for <Keyword end=".">{yearsWritingCode} years</Keyword></>,
        <>In the last year I&apos;ve written over <Keyword>500k lines of code</Keyword> implementing dozens of features and hundreds of bug-fixes, primarily in <Keyword>React</Keyword>/<Keyword>Redux</Keyword> codebases.</>,
      ]}
    />
  )
}

export default FrontendEngineer
