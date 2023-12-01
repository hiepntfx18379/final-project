import Container from "@/app/components/Container"
import ProductDetail from "./ProductDetail"
import { product } from "@/utils/product"
import Rating from "./Rating"
import ListRating from "./Rating"

interface IParams {
    productId?: string
}

const Product = ({ params }: { params: IParams }) => {

    return (
        <div className="p-8">
            <Container>
                <ProductDetail product={product} />
                <div className="felx flex-col mt-20 gap-4">
                    <div>Add rating</div>
                    <ListRating product={product} />
                </div>
                <div><h1>List recommended</h1></div>
            </Container>
        </div>
    )
}

export default Product