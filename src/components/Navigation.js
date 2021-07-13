/* eslint-disable react/no-unknown-property */
import React, { useState } from 'react'
import styles from '../../styles/Navigation.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Navigation({ routes }) {
  const router = useRouter()
  const [dropdowns, setDropdowns] = useState({})
  console.log({ dropdowns })

  const buildNestedRoutes = (routes, key) => {
    return (
      <>
        {routes.map((route, i) => {
          if (!route.routes) {
            return (
              <Link pathname href={route.path} key={`navigation_link_${key}_${i}`}>
                <a
                  key={`navigation_link_${key}_${i}`}
                  className={[
                    styles.navigationLink,
                    route.logo ? styles.noBullet : '',
                    route.path === router.pathname ? styles.active : '',
                  ].join(' ')}
                >
                  {!!route.logo && (
                    <Image
                      src={route.logo}
                      alt={`Logo of ${route.title}`}
                      height={route.path === router.pathname ? 24 : 18}
                      width={route.path === router.pathname ? 24 : 18}
                      className={styles.navigationLinkLogo}
                    />
                  )}
                  {route.title}
                </a>
              </Link>
            )
          }

          // This is a dropdown, should be expandable
          return (
            <div
              key={`navigation_link_${key}_${i}`}
              className={styles.navigationDropdown}
            >
              <a
                className={[
                  styles.navigationLink,
                  styles.navigationDropdownTitle,
                  route.path === router.pathname ? styles.active : '',
                  (dropdowns[route.title] || route.open) ? styles.open : '',
                ].join(' ')}
                onClick={() => {
                  setDropdowns({ ...dropdowns, [route.title]: !dropdowns[route.title] })
                }}
              >
                <svg width="6" height="10" viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.4 8.56L4.67 5M1.4 1.23L4.66 4.7" strokeLinecap="square"></path>
                  </svg>
                {route.title}
              </a>

              <div
                className={[
                  styles.navigationDropdownContents,
                  (dropdowns[route.title] || route.open) ? styles.open : '',
                ].join(' ')}
              >
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
                <a
                  className={[
                    styles.navigationHeader,
                    route.path === router.pathname ? styles.active : '',
                  ].join(' ')}
                >
                  {route.title}
                </a>
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