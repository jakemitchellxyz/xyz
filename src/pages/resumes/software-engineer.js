import React from 'react'

import Keyword from '../../components/Keyword'
import Resume from '../../components/Resume'

import { yearsWritingCode, yearsProfessional } from '../../config/experience' = ({ isFullScreen }) => {
  return (
    <Resume
      isFullScreen={isFullScreen}
      experienceFilter={null}
      skillFilter={null}
      summaryStatements={[
        <>I build <Keyword>production software at scale</Keyword>, from a React PWA serving <Keyword>millions of concurrent students</Keyword> during the Digital SAT to a TypeScript monorepo shipping to <Keyword>5 platforms</Keyword> from a single codebase.</>,
        <>I&apos;ve been building software <Keyword>professionally</Keyword> for <Keyword end=",">{yearsProfessional} years</Keyword> each project increasing in complexity and sophistication. I&apos;ve been <Keyword>writing</Keyword> code for <Keyword end=".">{yearsWritingCode} years</Keyword></>,
        <>In the last year I&apos;ve written over <Keyword>500k lines of code</Keyword> implementing dozens of features and hundreds of bug-fixes across <Keyword>enterprise production systems</Keyword> with strict correctness and availability requirements.</>,
      ]}
    />
  )
}

export default SoftwareEngineer
