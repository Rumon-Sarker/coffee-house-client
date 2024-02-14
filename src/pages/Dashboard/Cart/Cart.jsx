
import Swal from "sweetalert2";
import useCart from "../../../hocks/useCart";
import useAxionSecure from "../../../hocks/useAxionSecure";
import { Link } from "react-router-dom";

const Cart = () => {
    const [cart, refetch] = useCart();
    const totalPriceSum = cart.reduce((item, dish) => item + dish.price, 0);
    const total = totalPriceSum.toFixed(2);
    const axiosSecure = useAxionSecure();


    const handleDelete = (id) => {
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
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted Success",
                                text: "Your itmes has been deleted.",
                                icon: "success"
                            });
                        }
                        console.log(res.data)
                    })


            }
        });
    }

    return (
        <div className="p-4">
            <div className="flex justify-evenly">
                <h1 className="text-2xl">Total Items: <span className="font-bold">{cart.length}</span></h1>
                <h1 className="text-2xl">Total price: $<span className="font-bold">{total}</span></h1>
                {cart.length ? <Link to="/dashboard/payments"><button className="btn btn-warning">Pay</button></Link> : <button disabled className="btn btn-warning">Pay</button>}

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
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, index) => <tr key={index}>
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
                                <button onClick={() => handleDelete(item._id)} className="btn btn-circle btn-outline">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </th>
                        </tr>)}



                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Cart;