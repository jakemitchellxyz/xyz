import styles from '../../styles/Resumes.module.css'

export const Keyword = ({ children, end = '' }) => {
  return (
    <>
      <span className={styles.keyword}>{' '}{children}{!end && ' '}</span>
      {end}
    </>
  )
}

export default Keyword
