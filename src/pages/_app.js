import React from 'react'
import { useRouter } from 'next/router'
import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

import '../../styles/globals.css'
import styles from '../../styles/Home.module.css'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Breadcrumb, Breadcrumbs } from 'react-rainbow-components'

// Navigation Component
import Navigation from '../components/Navigation'
import routes from '../config/routes'

/**
 * Intentionally masking the routes variable
 * Setting it equal to itself sets it in the higher scope
 * so that passing the routes variable is optional and the
 * usage can be the same as in the render method scope
 */
const getPageTitleFromPath = (path, routes) => {
  if (!routes) return null
  if (routes.routes && routes.routes.length > 0) {
    const title = routes.routes.map(route => {
      if (route.path === path) return route.title
      if (route.routes) return getPageTitleFromPath(path, route)
    }).filter(route => !!route)

    return title[0] || null
  }
  return null
}
const getPageFolderFromPath = (path, routes, containingFolder = {}) => {
  if (!routes) return containingFolder
  if (routes.routes && routes.routes.length > 0) {
    const title = routes.routes.map(route => {
      if (route.path === path) return containingFolder
      if (route.routes) return getPageFolderFromPath(path, route, route)
    }).filter(route => !!route)

    return title[0] || null
  }
  return null
}

export default function xyz({ Component, pageProps }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter()
  const isHomePage = router.pathname === '/'
  const folder = getPageFolderFromPath(router.pathname, routes)
  const title = getPageTitleFromPath(router.pathname, routes)

  console.log({ pageProps, router, title, folder })

  return (
    <React.Fragment>
      <div style={{ background: 'black' }} className={styles.banner} />
      <div style={{ top: 8 }} className={styles.banner} />
      <div className={isHomePage ? styles.containerHome : styles.container}>
        <Head>
          <title>Jake Mitchell{!isHomePage ? ` - ${title}` : ''}</title>
          <meta name="description" content="Solutions Architect; Software Engineer; Cloud Engineer; Cloud Architect; App Developer; Freelance Artisan" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Header */}
        <div className={isHomePage ? styles.headerHome : styles.header}>
          {/* profile pic, name, media tags */}
          <div className={isHomePage ? styles.nameTagHome : styles.nameTag}>
            <Image className={styles.topImage} src="/cartoon-face.png" alt="Cartoon drawing of my face" width={isHomePage ? 300 : 75} height={isHomePage ? 300 : 75} />
            <h1 className={isHomePage ? styles.titleHome : styles.title}>
              Jake Mitchell
            </h1>
            <p className={isHomePage ? styles.descriptionHome : styles.description}>
              @jakemitchellxyz
            </p>

            <div className={[styles.socialIcons, isHomePage ? '' : styles.small].join(' ')}>
              <Link passHref href="https://www.github.com/jakemitchellxyz">
                <a className={styles.socialIcon} title="GitHub @jakemitchellxyz">
                  <FaGithub />
                </a>
              </Link>
              <Link passHref href="https://www.instagram.com/jakemitchell.xyz">
                <a className={styles.socialIcon} title="Instagram @jakemitchell.xyz">
                  <FaInstagram />
                </a>
              </Link>
              <Link passHref href="https://www.linkedin.com/in/jakemitchellxyz/">
                <a className={styles.socialIcon} title="LinkedIn @jakemitchellxyz">
                  <FaLinkedinIn />
                </a>
              </Link>
              <a
                href="mailto:jake@jakemitchell.xyz"
                title="Email jake@jakemitchell.xyz"
                className={styles.socialIcon}
              >
                <HiOutlineMail />
              </a>
            </div>
          </div>

          {/* Breadcrumb Navigation */}
          {
            router.pathname.split('/').length >= 2
            && router.pathname !== '/'
            && (
              <Breadcrumbs>
                <Breadcrumb label="Home" onClick={() => router.push('/')} className={styles.breadcrumb} />
                {
                  router.pathname.split('/').length >= 3
                  && (
                    <Breadcrumb
                      label={folder.title}
                      onClick={()=> router.push(folder.path)}
                      className={styles.breadcrumb}
                    />
                  )
                }
                <Breadcrumb label={getPageTitleFromPath(router.pathname, routes)} />
              </Breadcrumbs>
            )
          }
        </div>

        {!isHomePage ? (
          <div className={styles.contentWithNavigation}>
            <Navigation routes={routes} />

            {/* Render the Page itself */}
            <main className={styles.content}>
              <Component {...pageProps} />
            </main>
          </div>
        ) : (
          <main className={styles.contentHome}>
            <Component {...pageProps} />
          </main>
        )}
      </div>
    </React.Fragment>
  )
}
