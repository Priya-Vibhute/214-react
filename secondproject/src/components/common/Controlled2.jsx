import React, { useState } from "react";

function Controlled2() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({ ...formData, [name]: value });
    // console.log(formData);
  };

  return (
    <div>
      <form action="" onSubmit={(e) => submitHandler(e)}>
        <label htmlFor="">Enter name</label>
        <input
          type="text"
          value={formData.name}
          name="name"
          onChange={(e) => onChangeHandler(e)}
        />
        <br />

        <label htmlFor="">Enter email</label>
        <input
          type="email"
          value={formData.email}
          name="email"
          onChange={(e) => onChangeHandler(e)}
        />
        <br />

        <label htmlFor="">password</label>
        <input
          type="password"
          value={formData.password}
          name="password"
          onChange={(e) => onChangeHandler(e)}
        />
        <br />

        <input type="submit" />
      </form>
    </div>
  );
}

export default Controlled2;
