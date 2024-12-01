import { Link, useLoaderData } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { MdModeEditOutline } from "react-icons/md";
import { TbXboxXFilled } from "react-icons/tb";
import Swal from "sweetalert2";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            Swal.fire({
              title: "Deleted!",
              text: "User has been deleted.",
              icon: "success",
            });
            const filter = users.filter((user) => user._id !== id);
            setUsers(filter);
          });
      }
    });
  };
  return (
    <div className="w-8/12 mx-auto mt-12">
      <Link to="/addUsers" className="btn text-blue-600 mb-6">
        New User <FaUser />
      </Link>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-slate-700 text-white">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <th>1</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.status}</td>
                <td className="flex items-center">
                  <Link
                    to={`/updateUser/${user._id}`}
                    className="border p-2 rounded-lg text-blue-600"
                  >
                    <MdModeEditOutline size={20} />
                  </Link>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="border p-2 rounded-lg text-blue-600 ml-2"
                  >
                    <TbXboxXFilled size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
