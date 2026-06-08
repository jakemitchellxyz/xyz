import React from 'react'

import Keyword from '../../components/Keyword'
import Resume from '../../components/Resume'

import { types } from '../../config/skills'
import { yearsProfessional } from '../../config/experience'

export const AIEngineer = ({ isFullScreen }) => {
  return (
    <Resume
      isFullScreen={isFullScreen}
      experienceFilter={null}
      skillFilter={[ types.ai, types.language, types.backend ]}
      projectFilter={[ types.ai ]}
      summaryStatements={[
        <>I design and build <Keyword>production AI systems</Keyword> end-to-end: <Keyword>LangGraph orchestration pipelines</Keyword>, <Keyword>RAG architectures</Keyword> with fuzzy entity resolution, <Keyword>WebLLM</Keyword> on-device inference over WebGPU/WASM, and structured state extraction using JSON-mode reasoning models grounded in persistent vector stores.</>,
        <>My AI work is backed by <Keyword>{yearsProfessional} years</Keyword> of cloud engineering on <Keyword>AWS</Keyword>: serverless architectures, cross-region active-active infrastructure, GraphQL and REST APIs, and NoSQL databases at <Keyword>billions-of-records scale</Keyword>. I build AI systems that are integrated into real cloud infrastructure, not isolated experiments.</>,
        <>As a <Keyword>Solutions Architect</Keyword> I have a consistent track record of taking <Keyword>stakeholder ideas from concept to shipped product</Keyword> without hand-holding: translating ambiguous requirements into concrete system designs, owning the architecture decisions, and delivering across the full stack independently.</>,
      ]}
    />
  )
}

export default AIEngineer
