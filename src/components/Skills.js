import styles from '../../styles/Resumes.module.css'
import Image from 'next/image'

import { skillAgeColors, skillLevelColors } from '../config/skills'

export const Skills = ({ skills, isFullScreen }) => {
  return (
    <div className={[styles.skills, isFullScreen ? styles.fullScreen : ''].join(' ')}>
      <table>
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
        {skills.map((skill, i) => (
          <tr className={styles.skillCard} key={`skill_${i}`}>
            <td>
              <h5>
                {!!skill.logo && <Image src={skill.logo} alt={`${skill.name} logo`} width={16} height={16} />}
                {skill.name}
              </h5>
            </td>
            <td>
              <p style={{ color: skillAgeColors[skill.years - 1] }}>{`${skill.years || 1} year${skill.years > 1 ? 's' : ''}`}</p>
            </td>
            <td>
              <p style={{ color: skillLevelColors[skill.level] }}>{skill.level}</p>
            </td>
          </tr>
        ))}
      </table>
    </div>
  )
}

export default Skills
