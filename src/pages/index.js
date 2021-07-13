import styles from '../../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.grid}>
      <Link passHref href="/projects">
        <a className={[ styles.card, styles.cardLeft].join(' ')} title="Projects">
          <h2>Projects &rarr;</h2>
          <p>Highlights from past software and engineering projects</p>
        </a>
      </Link>

      <Link passHref href="/resumes">
        <a className={styles.card} title="Resumes">
          <h2>Resumes &rarr;</h2>
          <p>Position-oriented summaries of my technical experience</p>
        </a>
      </Link>
    </div>
  )
}
