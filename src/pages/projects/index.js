import Link from 'next/link'
import { routes } from '../../config/routes'

const projects = routes.routes.filter((route) => route.title === 'Projects')[0].routes
console.log(projects)
export default function Portfolio() {
  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {!!projects && projects.map(
          (project, index) => (
            project.path && (
              <li key={index}>
                <Link href={project.path}>
                  <h3>{project.title} &rarr;</h3>
                </Link>
              </li>
            )
          )
        )}
      </ul>
    </div>
  )
}
