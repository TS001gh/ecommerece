import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

function ProductDetails() {
  const api_url = "https://fakestoreapi.com/products";
  const [product, setProduct] = useState({});
  const params = useParams();
  useEffect(() => {
    fetch(`${api_url}/${params.productId}`)
      .then((res) => res.json())
      .then((product) => setProduct(product));
  }, []);
  return (
    <div className="container">
      <div className="row d-flex justify-content-center mt-3">
        <div className="col-4">
          <Product product={product} showButton={false} />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
