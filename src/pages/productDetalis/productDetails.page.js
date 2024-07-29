import React from "react";
import Layout from "../../components/Layout";
import { Link, useParams } from "react-router-dom";
import data from "../../data";
import Parent from "../../components/Parent";

export default function ProductDetails() {
  const { id } = useParams();

  const MY_PRODUCT = data.find((item) => item.id === id);

  return (
    <Layout>
      <div className="container-fluid mt-5">
        <h2>Product Details</h2>
        <div className="row">
          <div className="col-6 mt-5 mb-5">
            <img
              src={MY_PRODUCT.image}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="col-5 mt-5 mr-4">
            <h2>{MY_PRODUCT.name}</h2>
            <div>
              <p>{MY_PRODUCT.price}</p>
              <hr />
              <p>
                <span style={{ fontWeight: "bold" }}>Description</span>: <br />
                <small>{MY_PRODUCT.description}</small>
              </p>
            </div>

            <Link
              to={`/checkout/${MY_PRODUCT.id}`}
              className="btn btn-warning rounded px-5"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
