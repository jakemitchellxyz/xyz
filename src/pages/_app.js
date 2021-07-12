import React from 'react'

import '../../styles/globals.css'
import styles from '../../styles/Home.module.css'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Breadcrumb, Breadcrumbs } from 'react-rainbow-components'

const pageNames = {
  [`/projects`]: 'Projects',
  [`/resumes`]: 'Resumes',
}

export default function xyz({ Component, pageProps }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter()
  const isHomePage = router.pathname === '/'

  console.log({ pageProps, router })
  return (
    <React.Fragment>
      <div className={isHomePage ? styles.containerHome : styles.container}>
        <div className={styles.banner} />
        <Head>
          <title>Jake Mitchell{!isHomePage ? ` - ${pageNames[router.pathname]}` : ''}</title>
          <meta name="description" content="Simple Next.js site deployed through Vercel to serve as a CV." />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Header */}
        <div className={isHomePage ? styles.headerHome : styles.header}>
          {/* profile pic, name, media tags */}
          <div className={isHomePage ? styles.nameTagHome : styles.nameTag}>
            <Image className={styles.topImage} src="/cartoon-face.png" alt="Cartoonized drawing of my face" width={isHomePage ? 300 : 75} height={isHomePage ? 300 : 75} />
            <h1 className={isHomePage ? styles.titleHome : styles.title}>
              Jake Mitchell
            </h1>

            <p className={isHomePage ? styles.descriptionHome : styles.description}>
              @jakemitchellxyz
            </p>
          </div>

          {/* Breadcrumb Navigation */}
          {!isHomePage && (
            <Breadcrumbs>
              <Breadcrumb label="Home" onClick={() => router.push('/')} />
              <Breadcrumb label={pageNames[router.pathname]} />
            </Breadcrumbs>
          )}
        </div>

        {!isHomePage ? (
          <div className={styles.contentWithNavigation}>
            <div className={styles.navigation}>
              <h4 className={styles.navigationHeader}>Projects</h4>
              <div className={styles.navigationLink}>
                <Link pathname href="/projects/mr-bartender">Mr. Bartender</Link>
              </div>
              <div className={styles.navigationLink}>
                <Link pathname href="/projects/100k-mentor-challenge">100k Mentor Challenge</Link>
              </div>
              <div className={styles.navigationLink}>
                <Link pathname href="/projects/mimino">Mimino</Link>
              </div>
              <div className={styles.navigationLink}>
                <Link pathname href="/projects/viking">Viking</Link>
              </div>
              <h4 className={styles.navigationHeader}>Resumes</h4>
              <div className={styles.navigationLink}>
                <Link pathname href="/resumes/software-engineer">Software Engineer</Link>
              </div>
              <div className={styles.navigationLink}>
                <Link pathname href="/resumes/solutions-architect">Solutions Architect</Link>
              </div>
              <div className={styles.navigationLink}>
                <Link pathname href="/resumes/cloud-engineer">Cloud Engineer</Link>
              </div>
              <div className={styles.navigationLink}>
                <Link pathname href="/resumes/full-stack-engineer">Full-Stack Engineer</Link>
              </div>
              <div className={styles.navigationLink}>
                <Link pathname href="/resumes/react-developer">React Developer</Link>
              </div>
            </div>

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
