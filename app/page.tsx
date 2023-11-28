import Image from 'next/image'
import Container from './components/Container'
import HomeBanner from './components/HomeBanner'

export default function Home() {
  return (
    <div>
      <Container>
        <HomeBanner />
      </Container>
    </div>
  )
}
