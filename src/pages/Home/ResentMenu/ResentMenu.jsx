

import { useEffect, useState } from "react";

const ResentMenu = () => {
    const [items, setItem] = useState([]);
    useEffect(() => {
        fetch("resentMenu.json")
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])
    return (
        <div>
            <div className='justify-center mx-auto my-16'>
                <h1 className='text-3xl items-center text-center border-b-4 w-96 mx-auto font-bold uppercase text-orange-800'>--Resent Menu Items--</h1>
            </div>
            <div className="grid md:grid-cols-3 items-center justify-center sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    items.map((item, index) => (
                        <div key={index} className="card w-72 bg-base-100 shadow-xl">
                            <figure><img src={item.image} alt="menu-Items" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {item.name}
                                    <div className="badge badge-secondary">Now</div>
                                </h2>
                                {/* <p>{item.recipe}</p> */}

                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default ResentMenu;