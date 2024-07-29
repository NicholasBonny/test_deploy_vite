import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../contextApi/myContext";

export default function State() {
  // const [formState, setFormState] = useState()
  const navigate = useNavigate();
  const { state, setState } = useContext(MyContext);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <div className="container pt-5">
      {/* <h4>Name: {name}</h4>
      <h4>Email: {email}</h4>
      <h4>Phone: {phone}</h4> */}

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="User Name" onChange={handleChange} />
        <input
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
        />
        <input
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
