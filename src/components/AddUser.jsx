import { Link } from "react-router-dom";
import { FaAnglesLeft } from "react-icons/fa6";
import Swal from "sweetalert2";

const AddUser = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const gender = form.gender.value;
    const status = form.status.value;
    const user = { name, email, gender, status };

    fetch("http://localhost:5000/addUser", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire("Data Inserted Successfully!");
      });
  };
  return (
    <div className=" mt-20">
      <Link to="/users" className="text-blue-600 ml-20 flex items-center gap-1">
        <FaAnglesLeft /> All Users
      </Link>
      <div className="w-1/2 mx-auto flex flex-col items-center justify-center ">
        <div className="text-center">
          <h3 className="font-bold text-2xl">New User</h3>
          <h4 className="text-gray-400">
            Use the below form to create your account
          </h4>
        </div>
        <div className="card bg-base-100 w-full  shrink-0 ">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered input-accent w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                className="input input-bordered input-accent w-full"
                required
              />
            </div>
            <div className="space-x-12 mt-4">
              <label>Gender</label>
              <input type="radio" name="gender" value="Male" /> Male
              <input
                type="radio"
                name="gender"
                value="Female"
                className="ml-2"
              />
              Female
            </div>
            <div className="space-x-14 mt-4">
              <label>Status</label>
              <input type="radio" name="status" value="Active" /> Active
              <input type="radio" name="status" value="Inactive" /> Inactive
            </div>

            <div className="form-control mt-6 ">
              <button className="btn bg-[#06D6A0]">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
