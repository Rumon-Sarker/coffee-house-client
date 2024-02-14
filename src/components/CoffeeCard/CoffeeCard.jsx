import Swal from "sweetalert2";
import useAuth from "../../hocks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxionSecure from "../../hocks/useAxionSecure";
import useCart from "../../hocks/useCart";
const CoffeeCard = ({ items }) => {
    const [, refetch] = useCart();
    const { name, image, price, _id } = items;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecures = useAxionSecure();


    const handaleAddToCard = () => {
        if (user && user?.email) {
            // todo add to cart
            const menuItems = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }


            axiosSecures.post("/carts", menuItems)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Cart Added Success",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch()
                    }

                })
        }
        else {
            Swal.fire({
                title: "You haven't account!!",
                text: "Are you Login Now?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login"
            }).then((result) => {
                if (result?.isConfirmed) {
                    navigate("/login", { state: { from: location } })
                }
            });
        }
    }
    return (
        <div>
            <div className="card card-compact w-80 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className="card-title bg-gray-200 absolute mt-12 rounded p-2 ">$ {price}</p>
                    <div className="card-actions justify-end">
                        <button onClick={handaleAddToCard} className="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;