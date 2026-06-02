import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Victory from './Victory'
import styles from '../../styles/EmploymentHistory.module.css'
import resumeStyles from '../../styles/Resumes.module.css'

export const ProjectEntry = ({ name, logo, link, tagline, victories }) => {
  return (
    <div className={styles.jobExperience}>
      <h2>
        <Link href={link} className={resumeStyles.projectLink}>
          {name}
        </Link>
      </h2>
      <div className={styles.employmentDetails}>
        <div>
          {logo && (
            <Image src={logo} alt={`${name} Logo`} width={20} height={20} />
          )}
          <h3 style={{ marginLeft: logo ? 12 : 30 }}>{tagline}</h3>
        </div>
        <p>Personal Project</p>
      </div>
      {victories && victories.map((victory, i) => (
        <Victory key={`pv_${i}`}>{victory}</Victory>
      ))}
    </div>
  )
}

export const RelevantProjects = ({ projects }) => (
  <div className={styles.jobHistory}>
    {projects.map((project, i) => (
      <ProjectEntry key={`proj_${i}`} {...project} />
    ))}
  </div>
)

export default RelevantProjects
