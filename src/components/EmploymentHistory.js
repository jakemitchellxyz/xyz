import React from 'react'
import Image from 'next/image'
import styles from '../../styles/EmploymentHistory.module.css'

import Victory from './Victory'

const MONTH_MAP = {
  jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6,
  jul: 7, aug: 8, sep: 9, oct: 10, nov: 11, dec: 12,
}

const parseDate = (str) => {
  if (str.toLowerCase() === 'present') {
    const now = new Date()
    return { year: now.getFullYear(), month: now.getMonth() + 1 }
  }
  const [monthPart, yearPart] = str.replace('.', '').trim().split(' ')
  return {
    year: parseInt(yearPart, 10),
    month: MONTH_MAP[monthPart.slice(0, 3).toLowerCase()],
  }
}

const getDuration = (start, end) => {
  const s = parseDate(start)
  const e = parseDate(end)
  const total = (e.year - s.year) * 12 + (e.month - s.month)
  const yrs = Math.floor(total / 12)
  const mos = total % 12
  if (yrs === 0) return `${mos} mo${mos !== 1 ? 's' : ''}`
  if (mos === 0) return `${yrs} yr${yrs !== 1 ? 's' : ''}`
  return `${yrs} yr${yrs !== 1 ? 's' : ''} ${mos} mo${mos !== 1 ? 's' : ''}`
}

export const Experience = ({ title, company, projects }) => {
  return (
    <div className={styles.jobExperience}>
      <h2>{title}</h2>
      {projects.map((project, i) => (
        <div key={`project_${i}`}>
          <div className={styles.employmentDetails}>
            <div>
                {project.logo && <Image src={project.logo} alt={`${project.name || company} Logo`} width={project.logoWidth || 20} height={20} />}
              <h3>{project.name ? `${project.name} by ${company}` : company}</h3>
            </div>
            <p>({getDuration(project.start, project.end)}) {project.start}–{project.end.toLowerCase() === 'present' ? (<i>{project.end}</i>) : project.end}</p>
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
