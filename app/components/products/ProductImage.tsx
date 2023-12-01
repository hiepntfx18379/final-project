'use client'

import Image from "next/image";

interface ProductImageProps {
    cartProduct: CartProductType;
    product: any;
}

const ProductImage: React.FC<ProductImageProps> = ({
    cartProduct, product
}) => {

    return (
        <div>
            <div className="grid grid-cols-6 gap-2 h-full max-h-[500px] min-h-[300px] sm:min-h-[400px] ">
                <div className="flex flex-col col-span-1 items-center justify-center gap-4 cursor-pointer border h-full max-h-[500px] min-h-[300px] sm:max-h-[400px]">
                    {product.images.map((img: SelectedImgType) => {
                        return <div className={` relative w-[80%] aspect-square rounded border-teal-300 ${cartProduct.selectedImg.color === img.color ? "border-[1.5px]" : "border-none"}`} key={img.color} >
                            <Image src={img.image} alt={img.color} fill className="object-contain" />
                        </div>
                    })}
                </div>
                <div className="col-span-5 relative aspect-square">
                    <Image fill src={cartProduct.selectedImg.image} alt={cartProduct.name} className="h-full object-contain max-h-[500px] min-h-[300px] sm:min-h-[400px]"
                    />
                </div>
            </div>

        </div>
    )
}
export default ProductImage