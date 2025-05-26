import React from "react";

const UserTable = (props) => {
  return (
    <>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">User Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {props.users.length > 0 ? (
            props.users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.UserName}</td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => props.editRow(user)}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => props.deleteUser(user.id)}
                    className="btn btn-danger ms-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No User</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default UserTable;
