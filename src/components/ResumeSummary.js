import React from 'react'
import Image from 'next/image'

import Skills from './Skills'
import styles from '../../styles/Resumes.module.css'

export const ResumeSummary = ({ isFullScreen, statements, skills }) => {
  return (
    <div className={styles.summary}>
      <div className={[styles.summaryText, isFullScreen ? styles.fullScreen : ''].join(' ')}>
        {statements.map((statement, i) => (
          <p key={`statemtent_${i}`}>{statement}</p>
        ))}

        <h2>Certifications / Awards</h2>
        <div className={[styles.achievements, isFullScreen ? styles.fullScreen : ''].join(' ')}>
          <div className={[styles.achievement, isFullScreen ? styles.fullScreen : ''].join(' ')}>
            <Image
              src="/logos/university-of-rochester.png"
              alt="University of Rochester Logo"
              width={60}
              height={60}
            />
            <div className={styles.achievementText}>
              <h5>Full-Ride Merit Scholarship</h5>
              <p>University of Rochester</p>
              <a
                title="Learn about the Scholarship"
                href="https://educationusa.state.gov/scholarships/alan-and-jane-handler-scholarship"
                target="_blank"
                rel="noreferrer"
                style={{ marginTop: 5 }}
                >
                View Scholarship &rarr;
              </a>
            </div>
          </div>
          <div className={[styles.achievement, isFullScreen ? styles.fullScreen : ''].join(' ')}>
            <Image
              src="/certifications/aws-architect-associate.png"
              alt="AWS Solutions Architect Certification"
              width={60}
              height={60}
            />
            <div className={styles.achievementText}>
              <h5>AWS Solutions Architect</h5>
              <p>Associate-level Certification</p>
              <a
                title="Verify Certificate"
                href="https://www.credly.com/badges/e4a502c8-00d3-40cf-b281-a29d48b6f239/public_url"
                target="_blank"
                rel="noreferrer"
                style={{ marginTop: 5 }}
                >
                View Certificate &rarr;
              </a>
            </div>
          </div>
          <div className={[styles.achievement, isFullScreen ? styles.fullScreen : ''].join(' ')}>
            <Image
              src="/certifications/emagine-media-festival.png"
              alt="ProMazo Fellow Program"
              width={60}
              height={60}
            />
            <div className={styles.achievementText}>
              <h5>eMagine Media Festival</h5>
              <p>1st Place Website Design</p>
              <a
                title="Learn about eMagine Media Festival"
                href="https://emaginefestival.com/"
                target="_blank"
                rel="noreferrer"
                style={{ marginTop: 5 }}
                >
                View Festival &rarr;
              </a>
            </div>
          </div>
          <div className={[styles.achievement, isFullScreen ? styles.fullScreen : ''].join(' ')}>
            <Image
              src="/certifications/promazo-fellow.png"
              alt="ProMazo Fellow Program"
              width={60}
              height={60}
            />
            <div className={styles.achievementText}>
              <h5>ProMazo Fellow</h5>
              <p>Top 5% of University Talent</p>
              <a
                title="Learn about ProMazo Fellows"
                href="https://workforce.promazo.com/talent/"
                target="_blank"
                rel="noreferrer"
                style={{ marginTop: 5 }}
                >
                View Workforce &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>

      <Skills skills={skills} isFullScreen={isFullScreen} />
    </div>
  )
}

export default ResumeSummary
