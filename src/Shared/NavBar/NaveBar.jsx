import { AwesomeButton } from 'react-awesome-button';
import { Link } from 'react-router-dom';
import { FaCartPlus } from "react-icons/fa";
import useCart from '../../hocks/useCart';
import useAuth from '../../hocks/useAuth';


const NaveBar = () => {
    const [cart] = useCart();
    const { user, SignOut } = useAuth();
    const handaleSignout = () => {
        SignOut()
            .then(() => { })
            .catch(error => { console.log(error) })
    }

    const navItems = <>
        <li className='text-md font-bold'><Link to="/">HOME</Link></li>
        <li className='text-md font-bold'><Link to="/menu">MENU</Link></li>
        <li className='text-md font-bold'><Link to="/contact">CONTACT</Link></li>
        <li className='text-md font-bold'><Link to="/dashboard">DASHBOARD</Link></li>
        <li className='text-md rounded bg-slate-300 font-bold'><Link to="/dashboard/cart">
            <p><FaCartPlus /></p>
            <div className="badge badge-secondary">+{cart.length}</div>
        </Link></li>
    </>
    return (
        <div className="navbar fixed z-10 max-w-7xl mx-auto bg-opacity-30 bg-base-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to={"/"} className="btn sm:text-sm btn-ghost md:text-2xl font-bold bg-gray-600 lg:text-md"><span className='text-green-500'>Green</span> Coffee <span className='text-orange-900'>House</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div >
            </div>
            <div className="navbar-end">
                <div className="avatar mr-1">
                    <div className="w-8 rounded-full">
                        <img src={user?.photoURL} />
                    </div>
                </div>
                <h1 className='mr-2'>{user?.displayName}</h1>
                {
                    user ? <AwesomeButton type="secondary"><Link onClick={handaleSignout} to={"/login"} className="btn font-bold text-lg">LogOut</Link></AwesomeButton> :
                        <AwesomeButton type="secondary"><Link to={"/login"} className="btn font-bold text-lg">Login</Link></AwesomeButton>
                }
            </div>
        </div>
    );
};

export default NaveBar;