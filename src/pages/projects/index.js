import Image from 'next/image'
import Link from 'next/link'

import { projects } from '../../config/projects'
import { types } from '../../config/skills'
import styles from '../../../styles/Projects.module.css'

const categories = [
  {
    title: 'Enterprise Cloud Infrastructure',
    tag: types.cloudInfrastructure,
  },
  {
    title: 'Multi-Platform Apps',
    tag: types.multiPlatform,
  },
  {
    title: 'Python & AI Workflows',
    tag: types.ai,
  },
  {
    title: 'C++ & Game Development',
    tag: types.gameDevelopment,
  },
  {
    title: 'OS & IoT',
    tag: types.operations,
  },
]

function ProjectCard({ project }) {
  const initial = project.name.charAt(0).toUpperCase()

  return (
    <Link href={project.link} className={styles.card}>
      <div className={styles.cardLogoWrapper}>
        {project.logo ? (
          <Image
            src={project.logo}
            alt={`${project.name} logo`}
            width={28}
            height={28}
            style={{ objectFit: 'contain' }}
          />
        ) : (
          <div className={styles.cardLogoPlaceholder}>{initial}</div>
        )}
      </div>
      <div className={styles.cardBody}>
        <h3 className={styles.cardName}>
          {project.name}
          <span className={styles.cardArrow}>→</span>
        </h3>
        <p className={styles.cardTagline}>{project.tagline}</p>
      </div>
    </Link>
  )
}

export default function ProjectsIndex() {
  return (
    <div className={styles.page}>
      <h1>Projects</h1>
      {categories.map(({ title, tag }) => {
        const matching = projects
          .filter(p => p.technologies.includes(tag))
          .sort((a, b) => a.defaultRank - b.defaultRank)

        if (matching.length === 0) return null

        return (
          <section key={tag} className={styles.category}>
            <h2 className={styles.categoryHeader}>{title}</h2>
            <div className={styles.grid}>
              {matching.map(project => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}
