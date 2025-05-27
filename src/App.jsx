import { useEffect, useState } from "react";
import UserTable from "./Table/UserTable";
import AddUserForm from "./Form/AddUserForm";
import EditUser from "./Form/editUser";

function App() {
  const [count, setCount] = useState([]);
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
  //ADD USER Pandra Function
  const addUser = (user) => {
    user.id = users.length + 1;
    // console.log("object", user);
    setUsers([...users, user]);
  };
  //DELETE Pandra Function
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // EDIT Pandra Function
  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);

  const initial = { id: null, name: "", UserName: "" };
  const [curentstate, setCurentState] = useState(initial);

  const editRow = (user) => {
    setEditing(true);
    setCurentState({ id: user.id, name: user.name, UserName: user.UserName });
  };

  const updateUser = (id, updateUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updateUser : user)));
    setCurentState(initial);
  };
  return (
    <>
      <div className="container text-center">
        <h1>CRUD App with Hooks</h1>
        <div className="d-flex justify-content-between">
          <div className="">
            {editing ? (
              <div>
                <h2>Edit User</h2>
                <EditUser
                  setEditing={setEditing}
                  currentUser={curentstate}
                  upadteUser={updateUser}
                />
              </div>
            ) : (
              <div>
                <h2>Add user</h2> <AddUserForm addUser={addUser} />
              </div>
            )}
          </div>
          <div className="">
            <h2>View users</h2>{" "}
            <UserTable
              editRow={editRow}
              deleteUser={deleteUser}
              users={users}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
