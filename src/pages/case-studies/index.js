import Link from 'next/link'

export default function CaseStudies() {
  return (
    <div>
      <h1>Case Studies</h1>
      <Link passHref href="/case-studies/mr-bartender">
        <h3>Mr. Bartender &rarr;</h3>
      </Link>
    </div>
  )
}