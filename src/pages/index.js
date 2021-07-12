import styles from '../../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.grid}>
      <Link passHref href="/projects">
        <div className={styles.card}>
          <h2>Projects &rarr;</h2>
          <p>A few highlights of my previous projects</p>
        </div>
      </Link>

      <Link passHref href="/resumes">
        <div className={styles.card}>
          <h2>Resumes &rarr;</h2>
          <p>Position-specific summaries of my technical toolbox</p>
        </div>
      </Link>
    </div>
  )
}
