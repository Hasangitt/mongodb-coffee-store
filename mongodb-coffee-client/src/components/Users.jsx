import { useLoaderData } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";
import Swal from "sweetalert2";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);


  const handleDetele = id => {
    console.log(id);
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`http://localhost:5000/users/${id}`, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount === 1){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                const remaining = users.filter(user => user._id !== id);
                setUsers(remaining)
                }
            })
        }
      });
   
  }

  return (
    <div className="md:w-2/3 md:mx-auto ">
      <h1 className="text-4xl maamli text-center py-5">MongoDB Coffee House</h1>
      <Header></Header>
      <div>
        <h1>Number of Users: {loadedUsers.length}</h1>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Email</th>
                <th>Created At</th>
                <th>Last Logged In</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map(user =>  <tr key={user._id}>
                    <th>{1}</th>
                    <td>{user.email}</td>
                    <td>{user.createdAt}</td>
                    <td>{user.lastLoggedAt}</td>
                    <td><button onClick={() => handleDetele (user._id)} className="btn">x</button></td>
                  </tr>)
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
