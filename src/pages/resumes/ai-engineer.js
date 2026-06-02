import React from 'react'

import Keyword from '../../components/Keyword'
import Resume from '../../components/Resume'

import { types } from '../../config/skills'
import { yearsWritingCode, yearsProfessional } from '../../config/experience'

export const AIEngineer = ({ isFullScreen }) => {
  return (
    <Resume
      isFullScreen={isFullScreen}
      experienceFilter={[ types.backend, types.language ]}
      skillFilter={[ types.language, types.backend, types.tooling ]}
      projectFilter={[ types.ai ]}
      summaryStatements={[
        <>I build <Keyword>local-first AI systems</Keyword>: multi-model LLM pipelines, <Keyword>RAG architectures</Keyword>, structured state extraction, and on-device inference</>,
        <>My AI work spans <Keyword>LangGraph orchestration pipelines</Keyword>, <Keyword>ChromaDB vector stores</Keyword> with fuzzy entity resolution, <Keyword>WebLLM</Keyword> (WebGPU/WASM) on-device inference, financial RAG systems, and quantitative portfolio optimization via <Keyword>SciPy SLSQP</Keyword>.</>,
        <>I&apos;ve been writing code for <Keyword>{yearsWritingCode} years</Keyword> and building software <Keyword>professionally</Keyword> for <Keyword end=".">{yearsProfessional} years</Keyword> My full-stack and cloud engineering background gives me the foundation to build AI systems that are <Keyword>production-ready</Keyword>, not just prototype-grade.</>,
      ]}
    />
  )
}

export default AIEngineer
