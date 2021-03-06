import React from 'react'

import Keyword from '../../components/Keyword'
import Resume from '../../components/Resume'

export const SoftwareEngineer = ({ isFullScreen }) => {
  return (
    <Resume
      isFullScreen={isFullScreen}
      experienceFilter={null}
      skillFilter={null}
      summaryStatements={[
        <>I think of code as a <Keyword>craft</Keyword> and an amazing way to express ideas. I love <Keyword>designing</Keyword> and developing <Keyword>systems that scale</Keyword> to thousands of users and dozens of developers.</>,
        <>I&apos;ve been building software <Keyword>professionally</Keyword> for <Keyword end=",">6 years</Keyword> each project increasing in complexity and sophistication. I&apos;ve been <Keyword>writing</Keyword> code for <Keyword end=".">11 years</Keyword></>,
        <>In the <Keyword end=",">last year</Keyword> I&apos;ve written over <Keyword>500k lines of code</Keyword> implementing dozens of features and hundreds of bug-fixes, primarily in <Keyword>React</Keyword>/<Keyword>Redux</Keyword> codebases.</>,
      ]}
    />
  )
}

export default SoftwareEngineer
