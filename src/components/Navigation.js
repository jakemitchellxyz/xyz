/* eslint-disable react/no-unknown-property */
import styles from '../../styles/Navigation.module.css'
import Link from 'next/link'

export default function Navigation({ routes }) {
  console.log({ routes })

  const buildNestedRoutes = (routes, key) => {
    return (
      <>
        {routes.map((route, i) => {
          if (!route.routes) {
            return (
              <div className={styles.navigationLink} key={`navigation_link_${key}_${i}`}>
                <Link pathname href={route.path}>{route.title}</Link>
              </div>
            )
          }

          return (
            <div className={styles.navigationDropdown} key={`navigation_link_${key}_${i}`}>
              <a
                className={`${styles.navigationDropdownTitle}${route.open ? ' ' + styles.open : ''}`}
                onClick={() => console.log(route.title)}
              >
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.4 8.56L4.67 5M1.4 1.23L4.66 4.7" stroke="#999" strokeLinecap="square"></path>
                  </svg>
                {route.title}
              </a>

              <div className={`${styles.navigationDropdownContents}${route.open ? ' ' + styles.open : ''}`}>
                {!!route.routes && route.routes.length > 0 &&
                  buildNestedRoutes(route.routes, `${key}_${i}`)
                }
              </div>
            </div>
          )
        })}
      </>
    )
  }

  return (
    <nav className={styles.navigation}>
      {routes.routes.map((route, i) => {
        if (route.heading) {
          return (
            <div key={`navigation_section_${i}`}>
              <Link passHref href={route.path}>
                <h4 className={styles.navigationHeader}>{route.title}</h4>
              </Link>
              {!!route.routes && route.routes.length > 0 &&
                buildNestedRoutes(route.routes, i)
              }
            </div>
          )
        }
      })}
    </nav>
  )
}