import Image from 'next/image'
import Container from './components/Container'
import HomeBanner from './components/HomeBanner'
import { products } from '@/utils/products'
import ProductBox from './components/products/ProductBox'

export default function Home() {
  return (
    <div>
      <Container>
        <HomeBanner />
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>

          {products.map(d => (
            <ProductBox data={d} />
          ))}
        </div>
      </Container>
    </div>
  )
}
