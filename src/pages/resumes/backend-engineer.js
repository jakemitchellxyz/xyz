import React from 'react'

import Keyword from '../../components/Keyword'
import Resume from '../../components/Resume'

import { types } from '../../config/skills'

import { yearsWritingCode, yearsProfessional } from '../../config/experience'

export const BackendEngineer = ({ isFullScreen }) => {
  return (
    <Resume
      isFullScreen={isFullScreen}
      experienceFilter={null}
      skillFilter={[ types.backend, types.language, types.operations ]}
      summaryStatements={[
        <>I have <Keyword>6+ years</Keyword> of hands-on experience building and operating cloud backend systems on <Keyword>AWS</Keyword>: serverless architectures, GraphQL and REST APIs, NoSQL databases at <Keyword>billions-of-records scale</Keyword>, and cross-region active-active infrastructure.</>,
        <>I&apos;ve been building software <Keyword>professionally</Keyword> for <Keyword end=",">{yearsProfessional} years</Keyword> each project increasing in complexity and sophistication. I&apos;ve been <Keyword>writing</Keyword> code for <Keyword end=".">{yearsWritingCode} years</Keyword></>,
        <>In the last year I&apos;ve written over <Keyword>500k lines of code</Keyword> implementing dozens of backend features and hundreds of bug-fixes across <Keyword>high-availability production systems</Keyword> with strict correctness requirements.</>,
      ]}
    />
  )
}

export default BackendEngineer
