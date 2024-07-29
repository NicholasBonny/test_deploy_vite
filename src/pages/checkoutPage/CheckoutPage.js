import React from "react";
import { Link, useParams } from "react-router-dom";
import data from "../../data";
import "../homePage/home.css";
import FormInput from "../../components/FormInput";

export default function CheckoutPage() {
  const { id } = useParams();
  const MY_PRODUCT = data.find((item) => item.id === id);
  return (
    <div className="my-5 pt-5 ">
      <div className="container px-5">
        <h3>Your Product</h3>
        <hr />
        <div className="row pt-5">
          <div className="col-6 px-4">
            <div className="row d-flex align-items-center">
              <div className="col-6">
                <img
                  src={MY_PRODUCT.image}
                  style={{ width: 300, height: 300 }}
                />
              </div>
              <div className="col-6">
                <strong>{MY_PRODUCT.name}</strong>
                <p className="pt-2">
                  <small>{MY_PRODUCT.description}</small>
                </p>

                <p className="pt-3">
                  <strong>{MY_PRODUCT.price}</strong>
                </p>
                <div className="border pt-3 px-3 rounded">
                  <p>Qty: 1</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6" style={{ backgroundColor: "#eee" }}>
            <div className="p-3">
              <h5>Shipping Address</h5>
              <div className="row pt-3">
                <div className="col-6">
                  <FormInput
                    name="firstName"
                    // onChange={handleOnChange}
                    label="First Name"
                  />
                </div>
                <div className="col-6">
                  <FormInput
                    name="lastName"
                    // onChange={handleOnChange}
                    label="Last Name"
                  />
                </div>
              </div>
              <FormInput
                name="address"
                // onChange={handleOnChange}
                label="Street Address"
              />
              <div className="row">
                <div className="col-6">
                  <FormInput
                    name="city"
                    // onChange={handleOnChange}
                    label="City"
                  />
                </div>
                <div className="col-6">
                  <FormInput
                    name="phone"
                    // onChange={handleOnChange}
                    label="Phone Number"
                  />
                </div>
              </div>
              <Link to="/" className="btn btn-large btn-warning">
                Complete Order
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
