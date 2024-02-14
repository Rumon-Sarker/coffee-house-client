import React, { useEffect, useState } from 'react';
import '@smastrom/react-rating/style.css';
import { Rating } from '@smastrom/react-rating';

const Review = () => {
    const [items, setItem] = useState([]);
    useEffect(() => {
        fetch("review.json")
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])
    return (
        <div className='my-20'>
            <div className='justify-center mx-auto my-16'>
                <h1 className='text-3xl border-b-4 w-96 ml-5 font-bold uppercase text-orange-800'>Reviews-:</h1>
            </div>

            <div className="grid md:grid-cols-3 items-center mx-auto justify-center sm:grid-cols-1 lg:grid-cols-3">
                {
                    items.map((item, index) => (
                        <div key={index} className="flex bg-gray-100 my-2 rounded gap-12 mx-auto">
                            <div className="">
                                <img className='w-[100px] rounded-full ' src={item.img} alt="" />
                            </div>
                            <div className='mt-5'>
                                <div className="text-xl font-bold uppercase">{item.name}</div>
                                <div className="stat-value my-2 text-secondary">
                                    <Rating
                                        style={{ maxWidth: 100 }}
                                        value={item.star}
                                        readOnly
                                    /></div>
                                <div className="stat-desc">{item.comments}</div>
                            </div>
                        </div>
                    ))
                }

            </div>


        </div>
    );
};

export default Review;