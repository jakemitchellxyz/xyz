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
import { HiOutlineMail, HiOutlineMenu, HiOutlinePhone } from 'react-icons/hi'
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
  const [ isNavOpen, setIsNavOpen ] = useState(width > 850)
  const [ isDetailViewOpen, setIsDetailViewOpen ] = useState(false)

  const isHomePage = router.pathname === '/'
  const folder = getPageFolderFromPath(router.pathname, routes)
  const title = getPageTitleFromPath(router.pathname, routes)

  return (
    <React.Fragment>
      <div className={isHomePage ? styles.containerHome : styles.container}>
        <Head>
          <title>Jake Mitchell{!isHomePage ? ` - ${title}` : ''}</title>
          <meta name="description" content="Solutions Architect; Software Engineer; Cloud Engineer; Cloud Architect; App Developer; Freelance Artisan" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Header */}
        {(!isDetailViewOpen || isHomePage) && (
          <div className={isHomePage ? styles.headerHome : styles.header}>
            {/* Menu Button */}
            {!isHomePage && width <= 850 && (
              <div
                className={[ styles.socialIcon, styles.menuButton].join(' ')}
                onClick={() => setIsNavOpen(!isNavOpen)}
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
              router.pathname !== '/'
              && router.pathname.split('/').length >= 2
              && (
                <div className={styles.toolbar}>
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

                  {
                    router.pathname.split('/').length >= 3
                    && router.pathname.includes('resumes')
                    && width > 650
                    && (
                      <a
                        className={styles.ctaButton}
                        onClick={() => setIsDetailViewOpen(true)}
                      >
                        &darr; Download as PDF
                      </a>
                    )
                  }
                </div>
              )
            }
          </div>
        )}

        {!isHomePage ? (
          isDetailViewOpen ? (
            <main className={styles.contentFullScreen}>
              {/* Header for Print */}
              {(isDetailViewOpen && !isHomePage) && (
                <div className={styles.headerForPrint}>
                  {/* profile pic, name, media tags */}
                  <div className={styles.nameTagForPrint}>
                    <Image className={styles.topImage} src="/cartoon-face.png" alt="Cartoon drawing of my face" width={75} height={75} />
                    
                    <div className={styles.nameTagText}>
                      <h1 className={styles.title}>
                        Jake Mitchell
                      </h1>
                      <p className={styles.nameTagResumeTitle}>
                        as {getPageTitleFromPath(router.pathname, routes)}
                      </p>
                    </div>
      
                    <a
                      className={styles.ctaButton}
                      onClick={() => setIsDetailViewOpen(false)}
                    >
                      &larr; Exit PDF View
                    </a>
                  </div>
      
                  <div className={[styles.socialIcons, styles.small, styles.print].join(' ')}>
                    <Link passHref href="https://www.github.com/jakemitchellxyz">
                      <a className={styles.socialIcon} title="GitHub @jakemitchellxyz">
                        <FaGithub />
                        jakemitchellxyz
                      </a>
                    </Link>
                    <Link passHref href="https://www.linkedin.com/in/jakemitchellxyz/">
                      <a className={styles.socialIcon} title="LinkedIn @jakemitchellxyz">
                        <FaLinkedinIn />
                        jakemitchellxyz
                      </a>
                    </Link>
                    <a
                      href="tel:9132128996"
                      title="Phone Number"
                      className={styles.socialIcon}
                    >
                      <HiOutlinePhone />
                      913.212.8996
                    </a>
                    <a
                      href="mailto:jake@jakemitchell.xyz"
                      title="Email jake@jakemitchell.xyz"
                      className={styles.socialIcon}
                    >
                      <HiOutlineMail />
                      jake@jakemitchell.xyz
                    </a>
                  </div>
                </div>
              )}

              <Component isFullScreen={isDetailViewOpen} {...pageProps} />
            </main>
          ) : (
            <div className={styles.contentWithNavigation}>
              <Navigation routes={routes} isOpen={isNavOpen} />

              {/* Render the Page itself */}
              <main className={[ styles.content, isNavOpen ? styles.open : '' ].join(' ')}>
                <Component {...pageProps} />
              </main>
            </div>
          )
        ) : (
          <main className={styles.contentHome}>
            <Component {...pageProps} />
          </main>
        )}

        {/* Top Design Banner */}
        <div style={{ background: 'black' }} className={styles.banner} />
        <div style={{ top: 8 }} className={styles.banner} />

        {/* Github Link */}
        {!isDetailViewOpen && (
          <a href="https://github.com/jakemitchellxyz/xyz" className={styles.githubCorner} title="View Source Code on GitHub" aria-label="View source on GitHub">
            <svg width="80" height="80" viewBox="0 0 250 250" style={{ fill: '#151513', color:'#fff', position: 'absolute', top: 0, border: 0, right: 0 }} aria-hidden="true">
              <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
              <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style={{ transformOrigin: '130px 106px'}} className={styles.octoArm}></path>
              <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" className={styles.octoBody}></path>
            </svg>
          </a>
        )}
      </div>
    </React.Fragment>
  )
}
