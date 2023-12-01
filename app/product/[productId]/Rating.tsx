'use client'

import moment from "moment"
import Heading from "./Heading"
import { Rating } from "@mui/material"
import Avatar from "@/app/components/Avatar"

interface ListRatingProps {
    product: any
}

const ListRating: React.FC<ListRatingProps> = ({ product }) => {
    return (
        <div>
            <Heading title="Product review" />
            <div className="text-sm mt-2">
                {
                    product.reviews.map((rv: any) => {
                        return <div key={rv.id} className="max-w-300px">
                            <div className="flex gap-2 items-center">
                                <Avatar src={rv?.user.image} />
                                <div className="font-semibold">{rv?.user.name}</div>
                                <div className=" font-light">{moment(rv.createdDate).fromNow()}</div>
                            </div>
                            <div className="mt-2">
                                <Rating value={rv.rating} readOnly />
                                <div className="ml-2">{rv.comment}</div>
                                <hr className="mt-4 mb-4" />
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default ListRating