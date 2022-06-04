import React from 'react'
import styles from '../../styles/Resumes.module.css'
import EmploymentHistory from './EmploymentHistory'
import ResumeSummary from './ResumeSummary'

import useJobExperiences from '../config/jobs'
import { useSkills } from '../config/skills'

export const Resume = ({ isFullScreen, experienceFilter, skillFilter, summaryStatements }) => {
  const { filterJobs } = useJobExperiences()
  const { filterSkills } = useSkills()

  const isRelevantExperience = (job) => {
    return !experienceFilter ? true : !!job.technologies && job.technologies.length > 0 ? job.technologies.some(type => experienceFilter.includes(type)) : false
  }
  const isRelevantSkill = (skill) => {
    return !skillFilter ? true : skillFilter.includes(skill.type)
  }

  return (
    <div className={[styles.container, isFullScreen ? styles.fullScreen : ''].join(' ')}>
      <h1 className={styles.summaryHeader}>
        Overview
      </h1>
      <ResumeSummary
        isFullScreen={isFullScreen}
        statements={summaryStatements}
        skills={filterSkills(isRelevantSkill)}
      />

      <h1>Employment History</h1>
      <EmploymentHistory experiences={filterJobs(isRelevantExperience)} />
    </div>
  )
}

export default Resume
