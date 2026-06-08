import React from 'react'

import Keyword from '../../components/Keyword'
import Resume from '../../components/Resume'

import { types } from '../../config/skills'
import { yearsProfessional } from '../../config/experience'

export const RevenueControlManager = ({ isFullScreen }) => {
  return (
    <Resume
      isFullScreen={isFullScreen}
      experienceFilter={null}
      skillFilter={[ types.backend, types.operations, types.security, types.cryptography ]}
      projectFilter={[ types.finances ]}
      summaryStatements={[
        <>I&apos;ve led and mentored engineering teams throughout my {yearsProfessional}-year career: onboarding and <Keyword>training 15+ developers</Keyword>, driving architectural decisions as a <Keyword>Solutions Architect</Keyword>, and owning cross-team delivery across <Keyword>high-availability production systems</Keyword>.</>,
        <>Across every role, from customer-service roles in a <Keyword>digital media lab</Keyword> and as a bank teller to managing engineering teams, I&apos;ve consistently prioritized <Keyword>clear communication</Keyword>, <Keyword>accountability</Keyword>, and getting the right outcome for the people I serve.</>,
        <>I built and operated <Keyword>financial data systems</Keyword> at enterprise scale for <Keyword>BNY Mellon</Keyword>, an encrypted SQL database, a big-data ingestion pipeline, and a <Keyword>federated authentication</Keyword> system conforming to the bank&apos;s strict security standards, and my background as a <Keyword>bank teller</Keyword> gives me a ground-level understanding of the revenue operations those systems support.</>,
      ]}
    />
  )
}

export default RevenueControlManager
