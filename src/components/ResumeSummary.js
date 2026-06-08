import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'

import Skills from './Skills'
import styles from '../../styles/Resumes.module.css'

const CertificationsContent = ({ isFullScreen, achievementClass }) => (
  <>
    <h2>Certifications / Awards</h2>
    <div className={[styles.achievements, isFullScreen ? styles.fullScreen : ''].join(' ')}>
      <div className={achievementClass}>
        <Image src="/logos/university-of-rochester.png" alt="University of Rochester Logo" width={60} height={60} />
        <div className={styles.achievementText}>
          <h5>Full-Ride Merit Scholarship</h5>
          <p>University of Rochester (2016)</p>
          <a title="Learn about the Scholarship" href="https://educationusa.state.gov/scholarships/alan-and-jane-handler-scholarship" target="_blank" rel="noreferrer" style={{ marginTop: 5 }}>
            View Scholarship &rarr;
          </a>
        </div>
      </div>
      <div className={achievementClass}>
        <Image src="/certifications/aws-architect-associate.png" alt="AWS Solutions Architect Certification" width={60} height={60} />
        <div className={styles.achievementText}>
          <h5>AWS Solutions Architect</h5>
          <p>Associate-level Certification (2020)</p>
          <a title="Verify Certificate" href="https://www.credly.com/badges/e4a502c8-00d3-40cf-b281-a29d48b6f239/public_url" target="_blank" rel="noreferrer" style={{ marginTop: 5 }}>
            View Certificate &rarr;
          </a>
        </div>
      </div>
      <div className={achievementClass}>
        <Image src="/certifications/emagine-media-festival.png" alt="eMagine Media Festival" width={60} height={60} />
        <div className={styles.achievementText}>
          <h5>eMagine Media Festival</h5>
          <p>1st Place Website Design (2015)</p>
          <a title="Learn about eMagine Media Festival" href="https://emaginefestival.com/" target="_blank" rel="noreferrer" style={{ marginTop: 5 }}>
            View Festival &rarr;
          </a>
        </div>
      </div>
      <div className={achievementClass}>
        <Image src="/certifications/promazo-fellow.png" alt="ProMazo Fellow Program" width={60} height={60} />
        <div className={styles.achievementText}>
          <h5>ProMazo Fellow</h5>
          <p>Top 5% of University Talent (2018)</p>
          <a title="Learn about ProMazo Fellows" href="https://workforce.promazo.com/talent/" target="_blank" rel="noreferrer" style={{ marginTop: 5 }}>
            View Workforce &rarr;
          </a>
        </div>
      </div>
    </div>
  </>
)

export const ResumeSummary = ({ isFullScreen, statements, skills }) => {
  const statementsRef = useRef(null)
  const skillsWrapperRef = useRef(null)
  const [certFullWidth, setCertFullWidth] = useState(false)

  useEffect(() => {
    const check = () => {
      if (!statementsRef.current || !skillsWrapperRef.current) return
      setCertFullWidth(statementsRef.current.offsetHeight >= skillsWrapperRef.current.offsetHeight)
    }
    const ro = new ResizeObserver(check)
    if (statementsRef.current) ro.observe(statementsRef.current)
    if (skillsWrapperRef.current) ro.observe(skillsWrapperRef.current)
    check()
    return () => ro.disconnect()
  }, [])

  const achievementClass = [styles.achievement, isFullScreen ? styles.fullScreen : ''].join(' ')

  return (
    <div className={styles.summary}>
      <div className={styles.summaryColumn}>
        <div
          ref={statementsRef}
          className={[styles.summaryText, isFullScreen ? styles.fullScreen : ''].join(' ')}
        >
          {statements.map((statement, i) => (
            <p key={`statemtent_${i}`}>{statement}</p>
          ))}
        </div>
        {!certFullWidth && (
          <div className={styles.certificationsSection}>
            <CertificationsContent isFullScreen={isFullScreen} achievementClass={achievementClass} />
          </div>
        )}
      </div>

      <div ref={skillsWrapperRef} className={styles.skillsWrapper}>
        <Skills skills={skills} isFullScreen={isFullScreen} />
      </div>

      {certFullWidth && (
        <div className={styles.certificationsSectionFullWidth}>
          <CertificationsContent isFullScreen={isFullScreen} achievementClass={achievementClass} />
        </div>
      )}
    </div>
  )
}

export default ResumeSummary
