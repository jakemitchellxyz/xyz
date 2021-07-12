import Link from 'next/link'

export default function Portfolio() {
  return (
    <div>
      <h1>Projects</h1>
      <Link passHref href="/projects/mr-bartender">
        <h3>Mr. Bartender &rarr;</h3>
      </Link>
    </div>
  )
}
