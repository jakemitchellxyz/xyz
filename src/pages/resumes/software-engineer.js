import Image from 'next/image'
import styles from '../../../styles/Resumes.module.css'

export default function SoftwareEngineer () {
  return (
    <div className={styles.container}>
      <h1>Software Engineer Resume</h1>
      <h2>TL;DR</h2>
      <p>I have written over 300k lines of code in the last year alone, implementing dozens of features and hundreds of bug fixes.</p>
      <div className={styles.imageRow}>
        <Image src="/github/janus.png" alt="Janus Commit History" layout="fill" objectFit="contain" />
        <Image src="/github/mimino.png" alt="Mimino Commit History" layout="fill" objectFit="contain" />
      </div>
    </div>
  )
}