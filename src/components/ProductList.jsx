import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import ProductItem from "./ProductItem";

const PostList = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const observer = useRef();

  const last = (node) => {
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setProducts((prevProducts) => [...prevProducts, ...prevProducts]);
      }
    });

    if (node) {
      observer.current.observe(node);
    }
  };

  console.log({ products });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await axios.get("https://fakestoreapi.com/products");

        setProducts(res.data);

        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {products.map((item, index) => {
        if (index + 1 === products.length) {
          return (
            <ProductItem key={item.id} productItem={item} refValue={last} />
          );
        } else {
          return <ProductItem key={item.id} productItem={item} />;
        }
      })}
    </div>
  );
};

export default PostList;
