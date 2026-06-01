import styles from '../../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.grid}>
      <Link href="/projects" className={[styles.card, styles.cardLeft].join(' ')} title="Projects">
        <h2>Projects &rarr;</h2>
        <p>Highlights from past software and engineering projects</p>
      </Link>

      <Link href="/resumes" className={styles.card} title="Resumes">
        <h2>Resumes &rarr;</h2>
        <p>Position-oriented summaries of my technical experience</p>
      </Link>
    </div>
  )
}
