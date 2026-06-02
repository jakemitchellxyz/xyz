import React from 'react'

import Keyword from '../../components/Keyword'
import Resume from '../../components/Resume'

import { types } from '../../config/skills'

import { yearsWritingCode, yearsProfessional } from '../../config/experience'

export const SecurityEngineer = ({ isFullScreen }) => {
  return (
    <Resume
      isFullScreen={isFullScreen}
      experienceFilter={null}
      skillFilter={[ types.security ]}
      summaryStatements={[
        <>I&apos;ve <Keyword>remediated 31 critical vulnerabilities</Keyword> in production, implemented <Keyword>JScrambler</Keyword> obfuscation pipelines, designed a <Keyword>blockchain integrity ledger</Keyword> for exam fraud detection, and built a <Keyword>federated authentication</Keyword> system to bank-grade security standards.</>,
        <>My security work spans <Keyword>application security</Keyword> (SAST, SCA, DAST, Prototype Pollution, Template Injection), <Keyword>cloud security</Keyword> (encrypted RDS, Cognito, IAM, IaC scanning with Checkov and OpenSSF Scorecard), and <Keyword>operational security</Keyword> (Qubes OS homelab with zero public internet exposure via WireGuard mesh VPN).</>,
        <>I&apos;ve been building software <Keyword>professionally</Keyword> for <Keyword end=",">{yearsProfessional} years</Keyword> each project increasing in complexity and sophistication. I&apos;ve been <Keyword>writing</Keyword> code for <Keyword end=".">{yearsWritingCode} years</Keyword></>,
      ]}
    />
  )
}

export default SecurityEngineer
