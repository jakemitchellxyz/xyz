import styles from '../../styles/Resumes.module.css'
import Image from 'next/image'

import { skillAgeColors, skillLevelColors } from '../config/skills'

export const Skills = ({ skills, isFullScreen }) => {
  const computeYears = (periods) => {
    const currentYear = new Date().getFullYear()
    const segs = periods
      .map(p => [p.start, p.end ?? currentYear])
      .sort((a, b) => a[0] - b[0])
    let total = 0, s = null, e = null
    for (const [start, end] of segs) {
      if (s === null) { s = start; e = end }
      else if (start <= e) { e = Math.max(e, end) }
      else { total += e - s; s = start; e = end }
    }
    if (s !== null) total += e - s
    return Math.max(total, 1)
  }

  return (
    <div className={[styles.skills, isFullScreen ? styles.fullScreen : ''].join(' ')}>
      <table>
        <tbody>
          <tr>
            <th>
              <p>Skills</p>
            </th>
            <th>
              <p>Experience</p>
            </th>
            <th>
              <p>Level</p>
            </th>
          </tr>
          {skills.map((skill, i) => {
            const skillDuration = computeYears(skill.periods)
            const skillColorIndex = Math.min(skillDuration, skillAgeColors.length) - 1

            return (
              <tr className={styles.skillCard} key={`skill_${i}`}>
                <td>
                  <h5>
                    {!!skill.logo && <><Image src={skill.logo} alt={`${skill.name} logo`} width={16} height={16} />&nbsp;</>}
                    {skill.name}
                  </h5>
                </td>
                <td>
                  <p style={{ color: skillAgeColors[skillColorIndex] }}>
                    {`${skillDuration} year${skillDuration > 1 ? 's' : ''}`}
                  </p>
                </td>
                <td>
                  <p style={{ color: skillLevelColors[skill.level] }}>{skill.level}</p>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Skills
