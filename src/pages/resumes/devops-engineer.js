import React from 'react'

import Keyword from '../../components/Keyword'
import Resume from '../../components/Resume'

import { types } from '../../config/skills'

import { yearsWritingCode, yearsProfessional } from '../../config/experience' = ({ isFullScreen }) => {
  return (
    <Resume
      isFullScreen={isFullScreen}
      experienceFilter={[ types.operations, types.serverless ]}
      skillFilter={[ types.operations, types.tooling, types.serverless, types.cloudInfrastructure, types.security ]}
      projectFilter={[ types.cloudInfrastructure, types.security ]}
      summaryStatements={[
        <>I design and operate <Keyword>cloud infrastructure at scale</Keyword>: cross-region active-active AWS architectures, <Keyword>observability-as-code</Keyword> monitoring pipelines, and <Keyword>IaC security scanning</Keyword> with SAST, SCA, DAST, Checkov, and OpenSSF Scorecard baked into every deployment.</>,
        <>My DevOps work spans <Keyword>CI/CD pipeline management</Keyword> to both app stores and cloud environments, <Keyword>stress testing</Keyword> and performance bottleneck resolution on live systems, and administering a production <Keyword>Qubes OS homelab</Keyword> with Docker Compose stacks, GPU passthrough, and zero public internet exposure via a WireGuard mesh VPN.</>,
        <>I&apos;ve been building software <Keyword>professionally</Keyword> for <Keyword end=",">{yearsProfessional} years</Keyword> each project increasing in complexity and operational scale. I&apos;ve been <Keyword>writing</Keyword> code for <Keyword end=".">{yearsWritingCode} years</Keyword></>,
      ]}
    />
  )
}

export default DevOpsEngineer
