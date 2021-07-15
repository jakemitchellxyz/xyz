import React, { useState } from 'react'

// Styling imports
import '../../styles/globals.css'
import styles from '../../styles/Home.module.css'

// Custom Logic
import routes from '../config/routes'
import { getPageTitleFromPath, getPageFolderFromPath } from '../helpers'
import useWindowDimensions from '../effects/useWindowDimensions'

// 3rd-party components
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { HiOutlineMail, HiOutlineMenu } from 'react-icons/hi'
import { Breadcrumb, Breadcrumbs } from 'react-rainbow-components'

// Custom Components
import Navigation from '../components/Navigation'

/**
 * Xyz
 * ======
 * The primary app that runs on every page and rehydrates
 */
export default function Xyz({ Component, pageProps }) {
  const router = useRouter()
  const { width } = useWindowDimensions()
  const [ navIsOpen, setNavIsOpen ] = useState(width > 700)

  const isHomePage = router.pathname === '/'
  const folder = getPageFolderFromPath(router.pathname, routes)
  const title = getPageTitleFromPath(router.pathname, routes)

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
          {/* Menu Button */}
          {!isHomePage && width <= 700 && (
            <div
              className={[ styles.socialIcon, styles.menuButton].join(' ')}
              onClick={() => setNavIsOpen(!navIsOpen)}
            >
              <HiOutlineMenu />
            </div>
          )}

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
                <Breadcrumb label="Jake" onClick={() => router.push('/')} className={styles.breadcrumb} />
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
            <Navigation routes={routes} isOpen={navIsOpen} />

            {/* Render the Page itself */}
            <main className={[ styles.content, navIsOpen ? styles.open : '' ].join(' ')}>
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
