import React from 'react'
import styles from '../../styles/Resumes.module.css'
import EmploymentHistory from './EmploymentHistory'
import RelevantProjects from './RelevantProjects'
import ResumeSummary from './ResumeSummary'

import useJobExperiences from '../config/jobs'
import { useSkills } from '../config/skills'
import { useProjects } from '../config/projects'

export const Resume = ({ isFullScreen, experienceFilter, skillFilter, summaryStatements, projectFilter }) => {
  const { filterJobs } = useJobExperiences()
  const { filterSkills } = useSkills()
  const { getTopProjects } = useProjects()

  const isRelevantExperience = (job) => {
    return !experienceFilter ? true : !!job.technologies && job.technologies.length > 0 ? job.technologies.some(type => experienceFilter.includes(type)) : false
  }

  const orderedSkills = skillFilter
    ? skillFilter.flatMap(type => filterSkills(skill => skill.type === type))
    : filterSkills(() => true)

  const topProjects = getTopProjects(projectFilter !== undefined ? projectFilter : experienceFilter)

  return (
    <div className={[styles.container, isFullScreen ? styles.fullScreen : ''].join(' ')}>
      <h1 className={styles.summaryHeader}>
        Overview
      </h1>
      <ResumeSummary
        isFullScreen={isFullScreen}
        statements={summaryStatements}
        skills={orderedSkills}
      />

      <h1>Relevant Projects</h1>
      <RelevantProjects projects={topProjects} />

      <h1>Employment History</h1>
      <EmploymentHistory experiences={filterJobs(isRelevantExperience)} />
    </div>
  )
}

export default Resume
