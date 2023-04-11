import React from "react";

const ProductItem = ({ productItem, refValue }) => {
  const { title, description, image } = productItem;
  return refValue ? (
    <div className="post-item" ref={refValue}>
      <p className="text-heading">{title}</p>
      <img src={image} alt="" className="product-image" />
      <p>{description}</p>
    </div>
  ) : (
    <div className="post-item">
      <p className="text-heading">{title}</p>
      <img src={image} alt="" className="product-image" />
      <p>{description}</p>
    </div>
  );
};

export default ProductItem;
