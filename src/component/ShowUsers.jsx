import React, { useState } from "react";

export default function ShowUsers() {
  const [user, setUser] = useState([]);

  const getUserList = async () => {
    try {
      const usersList = await fetch("http://localhost:4000/getUsersList");
      if (!usersList.ok) {
        throw new Error("Not able to fetch users");
      }
      let showUsers = await usersList.json();
      console.log("userlist =>>", showUsers);
      setUser(showUsers);
    } catch (error) {
      console.error(error);
    }
  };

//   return (
//     <>
//       <div>
//         <button onClick={getUserList} id="showUser">Show All Users</button>
//       </div>
//       <div className="showUserList">

//         { user.length > 0 ? (
//           <table>

//           </table>
//         )}
//       </div>
//     </>
//   );
// }

return (
  <>
    <div>
      <h1>Hello</h1>
      <button onClick={getUserList} id="showUser">
        Show User
      </button>
    </div>
    <div className="showUserList">
      {user.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {user.map((user, index) => (
              <tr key={user._id}>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No users to display</p>
      )}
    </div>
  </>
);
      }