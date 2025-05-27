import React, { useEffect, useState } from "react";

const EditUser = (props) => {
  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!user.name || !user.UserName) return;
        props.updateUser(user.id, user);
       
      }}
    >
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control "
          id="floatingInput"
          name="name"
          placeholder="Name"
          value={user.name}
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
      <button className="btn btn-success mt-3  ms-5">Update User</button>
      <button
        className="btn btn-success mt-3  ms-5"
        onClick={() => {
          props.setEditing(false);
          setUser({ id: null, name: "", UserName: "" });
        }}
      >
        Cancel
      </button>
    </form>
  );
};

export default EditUser;
