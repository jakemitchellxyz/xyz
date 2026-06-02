import React from 'react'

import Keyword from '../../components/Keyword'
import Resume from '../../components/Resume'

import { types } from '../../config/skills'
import { yearsWritingCode, yearsProfessional } from '../../config/experience'

export const GameDeveloper = ({ isFullScreen }) => {
  return (
    <Resume
      isFullScreen={isFullScreen}
      experienceFilter={[ types.backend, types.language, types.tooling ]}
      skillFilter={[ types.language, types.tooling, types.software ]}
      projectFilter={[ types.gameDevelopment, types.software ]}
      summaryStatements={[
        <>I build game systems from first principles; from a <Keyword>data-table-driven 11-tier size mechanic</Keyword> in UE5.3 to a fully custom <Keyword>C++ rendering engine</Keyword> using Vulkan and Signed Distance Fields with physically-accurate cone marching.</>,
        <>My background in <Keyword>software architecture</Keyword> carries directly into game development: I approach every game system as a scalable, data-driven design problem - parameters in tables, logic in code, nothing hardcoded in graph nodes or scene hierarchies.</>,
        <>I&apos;ve been writing code for <Keyword>{yearsWritingCode} years</Keyword> and building software <Keyword>professionally</Keyword> for <Keyword end=".">{yearsProfessional} years</Keyword> The engineering foundations I built across <Keyword>cloud systems</Keyword>, <Keyword>distributed backends</Keyword>, and <Keyword>real-time applications</Keyword> transfer directly to game systems work.</>,
      ]}
    />
  )
}

export default GameDeveloper
