import React from 'react'
import Image from 'next/image'
import styles from '../../styles/EmploymentHistory.module.css'

import Victory from './Victory'

export const Experience = ({ title, company, projects }) => {
  return (
    <div className={styles.jobExperience}>
      <h2>{title}</h2>
      {projects.map((project, i) => (
        <div key={`project_${i}`}>
          <div className={styles.employmentDetails}>
            <div>
              <Image src={project.logo} alt={`${project.name} Logo`} width={project.logoWidth || 20} height={20} />
              <h3>{project.name} by {company}</h3>
            </div>
            <p>{project.start}-{project.end.toLowerCase() === 'present' ? (<i>{project.end}</i>) : project.end}</p>
          </div>
          {!!project.victories && project.victories.length > 0 && project.victories.map((victory, j) => (
            <Victory key={`victory_${j}`}>{victory}</Victory>
          ))}
        </div>
      ))}
    </div>
  )
}

export const EmploymentHistory = ({ experiences }) => (
  <div className={styles.jobHistory}>
    {experiences.map((experience, i) => (
      <Experience
        key={`experience_${i}`}
        title={experience.title}
        company={experience.company}
        projects={experience.projects}
      />
    ))}
  </div>
)

export default EmploymentHistory
