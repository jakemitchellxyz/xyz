import styles from '../../styles/Resumes.module.css'

export const Victory = ({ children }) => {
  return (
    <div className={styles.employmentAchievement}>
      <p>
        {children}
      </p>
    </div>
  )
}

export default Victory
