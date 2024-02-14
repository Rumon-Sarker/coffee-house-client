import { useQuery } from "@tanstack/react-query";
import useAxionSecure from "../../../hocks/useAxionSecure";
import Swal from "sweetalert2";
import { FaUser } from "react-icons/fa";

const Allusers = () => {
    const axiosSecure = useAxionSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosSecure.get("/users", {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("access-token")}`
                }
            })
            return res.data;
        }
    });

    const handaleDelete = (id) => {
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
                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted Success",
                                text: "User hase been deleted.",
                                icon: "success"
                            });
                        }
                        console.log(res.data)
                    })

            }
        });

    }
    const handaleAdmin = (id) => {
        Swal.fire({
            title: "Are you sure is Admin?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Admin"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/${id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            refetch()
                        }
                        console.log(res.data)
                    })


            }
        });

    }


    return (
        <div className="p-4">
            <div className="flex justify-evenly">
                <h1 className="text-2xl">All Users: <span className="font-bold">0{users.length}</span></h1>
            </div>
            <div className="overflow-x-auto mt-5 ">
                <table className="table">
                    {/* head */}
                    <thead >
                        <tr className="font-bold bg-gray-100 text-lg">
                            <th>
                                #
                            </th>

                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((users, index) => <tr key={index}>
                            <th>
                                <label>
                                    {index + 1}
                                </label>
                            </th>

                            <td>{users.name}</td>
                            <td>
                                {users.email}
                            </td>
                            <td>
                                {users.role == "admin" ? "Admin" : <button onClick={() => handaleAdmin(users._id)} className="bg-orange-200 p-2 rounded">
                                    <FaUser></FaUser>
                                </button>}

                            </td>
                            <th>
                                <button onClick={() => handaleDelete(users._id)} className="btn bg-red-400 text-white btn-outline">
                                    Delete
                                </button>
                            </th>
                        </tr>)}

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Allusers;