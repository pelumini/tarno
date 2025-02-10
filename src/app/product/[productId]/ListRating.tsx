import Avatar from "@/components/Avatar";
import Heading from "@/components/Heading";
import { Rating } from "@mui/material";
import moment from "moment";
import React from "react";

type ListRatingProps = {
  product: any;
};

const ListRating = ({ product }: ListRatingProps) => {
  return (
    <div>
      <Heading title="Product Review" />
      <div>
        {product.reviews.map((review: any) => (
          <div key={review.id} className="max-w-[300px]">
            <div className="flex gap-2 items-center">
              <Avatar src={review.user.image} />
              <div className="font-semibold">{review?.user.name}</div>
              <div className="font-light">
                {moment(review.createdDate).fromNow()}
              </div>
            </div>
            <div className="mt-2">
              <Rating value={review.rating} readOnly />
              <div className="ml-2">{review.comment}</div>
              <hr className="my-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListRating;
