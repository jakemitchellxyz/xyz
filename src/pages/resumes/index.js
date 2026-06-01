import Link from 'next/link'
import { routes } from '../../config/routes'

const resumes = routes.routes.filter((route) => route.title === 'Resumes')[0].routes
export default function Resumes() {
  return (
    <div>
      <h1>Resumes</h1>
      <ul>
        {!!resumes && resumes.map(
          (resume, index) => (
            <li key={index}>
              <Link href={resume.path}>
                <h3>{resume.title} &rarr;</h3>
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  )
}
