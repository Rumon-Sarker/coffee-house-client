import { Link } from "react-router-dom";
import useAxionSecure from "../../../hocks/useAxionSecure";
import useMenu from "../../../hocks/useMenu";
import { FaPenToSquare } from "react-icons/fa6";
import Swal from "sweetalert2";


const ManageItems = () => {
    const [menu, refetch] = useMenu();
    const axiosSecure = useAxionSecure();

    const handleDelete = (id) => {
        // axiosSecure.delete(`/menu/${id}`)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${id}`);
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Delete Success",
                        showConfirmButton: false,
                        timer: 1000
                    });
                }
            }
        })

    }
    return (
        <div className="p-4">
            <div className="flex justify-evenly">
                <h1 className="text-2xl font-bold bg-green-100 p-3 rounded-ss-badge">Manage All Items</h1>
            </div>
            <div className="overflow-x-auto mt-5 ">
                <table className="table">
                    {/* head */}
                    <thead >
                        <tr className="font-bold bg-gray-100 text-lg">
                            <th>
                                #
                            </th>
                            <th>Img</th>
                            <th>Name</th>
                            <th>price</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {menu.map((item, index) => <tr key={index}>
                            <th>
                                <label>
                                    {index + 1}
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask h-20 rounded">
                                            <img src={item.image} alt="img" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>{item.name}</td>
                            <td>${item.price}</td>
                            <th>
                                {/* to update itmes page link and then work */}
                                <Link to={`/dashboard/updateItems/${item._id}`} >
                                    <button>
                                        <FaPenToSquare />
                                    </button>
                                </Link>

                            </th>
                            <th>
                                <button onClick={() => handleDelete(item._id)} className="btn bg-red-400 btn-outline">
                                    delete
                                </button>
                            </th>
                        </tr>)}



                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default ManageItems;