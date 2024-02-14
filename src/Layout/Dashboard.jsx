import { BiSolidFoodMenu } from "react-icons/bi";
import { FaBook, FaBookDead, FaHome, FaShoppingCart, FaUsers, FaUtensils } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from "../hocks/useAdmin";
import useCart from "../hocks/useCart";

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [cart] = useCart();
    return (
        <div className='flex'>
            <div className='w-52 min-h-screen bg-gray-400'>

                {isAdmin ?

                    <ul className='menu'>
                        <li><NavLink to="/dashboard/adminHome"><FaHome></FaHome>Admin Home</NavLink></li>
                        <li><NavLink to="/dashboard/additems"><FaUtensils></FaUtensils>Add Items</NavLink></li>
                        <li><NavLink to="/dashboard/manageitems"><FaBookDead></FaBookDead>Manage Items</NavLink></li>
                        <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers>All User</NavLink></li>
                    </ul>
                    :
                    <ul className='menu'>
                        <li><NavLink to="/dashboard/userHome"><FaHome></FaHome>User Home</NavLink></li>
                        <li><NavLink to="/dashboard/cart"><FaShoppingCart></FaShoppingCart>My Carts <span className="text-white bg-black px-2 rounded font-bold">+{cart.length}</span></NavLink></li>
                        <li><NavLink to="/dashboard/paymentsHistory"><FaBook></FaBook>Payments History</NavLink></li>
                    </ul>

                }
                <div className="divider"></div>

                <ul className='menu'>
                    <li><NavLink to="/"><FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to="/menu"><BiSolidFoodMenu></BiSolidFoodMenu>Menu List</NavLink></li>
                    <li><NavLink to="/order/green-coffee"><FaBook></FaBook>Order Now</NavLink></li>

                </ul>
            </div>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;