import React from "react";
import { useState } from "react";

const AddUserForm = (props) => {
  const initial = { id: null, name: "", UserName: "" };
  const [user, setUser] = useState(initial);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!user.name || !user.UserName) return;
        props.addUser(user);
        setUser(initial);
      }}
    >
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control "
          id="floatingInput"
          name="name"
          placeholder="Name"
          
          alue={user.name}
          onChange={(event) => {
            setUser({ ...user, name: event.target.value });
          }}
        />
        <label for="floatingInput">Name</label>
      </div>
      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          placeholder="User Name"
          name="username"
          value={user.UserName}
          onChange={(event) => {
            setUser({ ...user, UserName: event.target.value });
          }}
        />
        <label for="floatingInput">User Name</label>
      </div>
      <button className="btn btn-success mt-3 w-100 ms-5">Add new user</button>
    </form>
  );
};

export default AddUserForm;
