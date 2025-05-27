import React, { useEffect, useState } from "react";

const UserTable = (props) => {
  const [data, setData] = useState([]);
  const usersData = async () => {
    let response = await fetch("http://localhost:4000/Data").then((res) =>
      res.json()
    );
    // console.log("object", response);
    setData(response);
  };

  useEffect(() => {
    usersData();
  }, []);
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
          {data?.map((user, index) => (
            <tr key={index}>
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
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserTable;
