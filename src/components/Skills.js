import styles from '../../styles/Resumes.module.css'
import Image from 'next/image'

import { skillAgeColors, skillLevelColors } from '../config/skills'

export const Skills = ({ skills, isFullScreen }) => {
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
            const skillDuration = !!skill.yearEnded ? skill.yearEnded - skill.yearStarted : (new Date).getFullYear() - skill.yearStarted
            const skillColorIndex = Math.min(skillDuration || 1, skillAgeColors.length) - 1

            return (
              <tr className={styles.skillCard} key={`skill_${i}`}>
                <td>
                  <h5>
                    {!!skill.logo && <Image src={skill.logo} alt={`${skill.name} logo`} width={16} height={16} />}
                    {skill.name}
                  </h5>
                </td>
                <td>
                  <p style={{ color: skillAgeColors[skillColorIndex] }}>
                    {`${skillDuration || 1} year${skillDuration > 1 ? 's' : ''}`}
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
