import Link from 'next/link'

const Home = () => {
  return (
    <div>
      <p>Homepage</p>

      <Link href="/contact">
        <a>Go to contact page</a>
      </Link>
    </div>
  )
}

export default Home
