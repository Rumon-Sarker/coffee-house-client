

const MEnuItems = ({ item }) => {
    const { name, recipe, image, price } = item;
    return (

        <div className="flex bg-gray-100 mx-4 rounded-xl gap-5">
            <div>
                <div>
                    <img className="w-[100px] p-2 rounded-sm shadow-2xl shadow-gray-500" src={image} alt="" />
                </div>
                <div>
                    <div>
                        <h1 className="text-xl font-bold">{name}</h1>
                        <p className="text-gray-500">{recipe}</p>
                    </div>
                    <p className="text-orange-600">${price}</p>
                </div>
            </div>
        </div>


    );
};

export default MEnuItems;