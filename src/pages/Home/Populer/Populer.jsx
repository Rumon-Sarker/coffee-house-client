import { Link } from "react-router-dom";
import useMenu from "../../../hocks/useMenu";
import MEnuItems from "../../../Shared/MenuItmes/MEnuItems";


const Populer = () => {
    const [menu] = useMenu()
    const PopulerItems = menu.filter((item) => item.category == "popular");

    return (
        <div>
            <div className='justify-center mx-auto my-16'>
                <h1 className='text-3xl items-center text-center border-b-4 w-96 mx-auto font-bold uppercase text-orange-800'>--------Populer-------</h1>
            </div>
            <div className="grid  md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-5">
                {
                    PopulerItems.map((item, index) => (
                        <MEnuItems key={index} item={item}>
                        </MEnuItems>
                    ))
                }
            </div>
            <Link to={"/menu"}><button className="btn bg-green-800 my-6 font-bold text-center ml-5 text-white">Vew More...</button></Link>

        </div>
    );
};

export default Populer;