import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../../components/FormInput";
import "./signin.css";
import { MyContext } from "../../contextApi/myContext";

export default function Signin() {
  const navigate = useNavigate();
  const { state } = useContext(MyContext);
  //    state={
  // name:'bonny',
  // email:'test@gmail.com',
  // password:'123@abc'
  //   }
  const [formState, setFormState] = useState({});
  // formState={
  //   email:'test@gmail.com',
  //   password:'123@abc'
  // }

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormState((formState) => ({ ...formState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      state.email === formState.email &&
      state.password === formState.password
    ) {
      navigate("/");
    } else {
      alert("Invalid password or email!");
    }
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-7 col_background" />
        <div className="col-md-5">
          <div className="mx-5 px-5 pt-5">
            <div className="my-5">
              <h1>Welcome!</h1>
              <small>Please sign into your account</small>
            </div>
            <form onSubmit={handleSubmit}>
              <FormInput
                name="email"
                type="email"
                onChange={handleOnChange}
                label="Email Address"
              />
              <FormInput
                name="password"
                type="password"
                onChange={handleOnChange}
                label="Password"
              />
              <button type="submit" className="btn w-100  btn-warning">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
