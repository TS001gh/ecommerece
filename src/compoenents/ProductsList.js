import { useEffect, useState } from "react";
import Product from "./Product";

function ProductsList() {
  const api_url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const getProducts = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  const getCategories = () => {
    fetch(`${api_url}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };

  const getProductInCategory = (catName) => {
    console.log(catName);
    fetch(`${api_url}/category/${catName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  return (
    <>
      <h2 className="text-center p-3"> Our Products </h2>
      <div className="container">
        <div className="row mb-3 d-sm-flex flex-sm-column">
          <div className="col d-flex gap-5">
            <button
              onClick={() => {
                getProducts();
              }}
              className="btn btn-info"
            >
              All
            </button>
            {categories.map((cat) => {
              return (
                <button
                  key={cat}
                  onClick={() => {
                    getProductInCategory(cat);
                  }}
                  className="btn btn-info"
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-lg-3 col-xm-12 col-md-6" key={product.id}>
                <Product product={product} showButton={true} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductsList;
