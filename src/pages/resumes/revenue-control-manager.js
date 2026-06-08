import React from 'react'

import Keyword from '../../components/Keyword'
import Resume from '../../components/Resume'

import { types } from '../../config/skills'
import { yearsEmployed } from '../../config/experience'

export const RevenueControlManager = ({ isFullScreen }) => {
  return (
    <Resume
      isFullScreen={isFullScreen}
      experienceFilter={null}
      skillFilter={[ types.soft ]}
      projectFilter={[ types.finances ]}
      disableProjectHighlights
      summaryStatements={[
        <>Throughout my {yearsEmployed}-year career I have managed and mentored teams, including <Keyword>onboarding and training 15+ developers</Keyword>, interfacing directly with <Keyword>executive stakeholders</Keyword> to align engineering execution with business priorities, and navigating <Keyword>conflict resolution</Keyword> and <Keyword>expectation management</Keyword> across cross-functional teams to deliver on tight deadlines without sacrificing quality.</>,
        <>My customer-service experience spans both <Keyword>finance</Keyword> and <Keyword>technology</Keyword>: as a bank teller I directly handled <Keyword>over $50,000 in cash daily</Keyword>, processed checks and loans under strict legal procedures, and resolved financial discrepancies for customers, while in a university <Keyword>digital media lab</Keyword> I served as a front-desk representative for a high-volume technical support environment.</>,
        <>I studied <Keyword>business at the University of Rochester</Keyword> and have spent my career building on that foundation: from processing transactions and managing customer accounts as a <Keyword>bank teller</Keyword>, to engineering financial data infrastructure at <Keyword>BNY Mellon</Keyword>, to independently building <Keyword>Money Studio</Keyword>, a personal finance platform, and <Keyword>QuantPy</Keyword>, a portfolio optimization library implementing Modern Portfolio Theory. I bring genuine <Keyword>financial literacy</Keyword> to every role, not just technical competence.</>,
      ]}
    />
  )
}

export default RevenueControlManager
