import React from 'react';
import MEnuItems from '../../../Shared/MenuItmes/MEnuItems';
import { Link } from 'react-router-dom';

const MenuCategory = ({ title, category }) => {
    return (
        <>
            <div className=' my-16'>
                <h1 className='text-3xl  border-b-4 w-96  font-bold uppercase text-orange-800'>{title}:</h1>
            </div>
            <div className="grid  md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-5">
                {
                    category.map((item, index) => (
                        <MEnuItems key={index} item={item}>
                        </MEnuItems>
                    ))
                }
            </div>
            <Link to={`/order/${title}`}><button className="btn bg-green-800 my-6 font-bold text-center ml-5 text-white">Order Now...</button></Link>

        </>
    );
};

export default MenuCategory;