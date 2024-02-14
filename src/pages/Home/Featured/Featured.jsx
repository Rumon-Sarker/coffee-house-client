import img1 from "../../../assets/category/ColdBrewCoffee.jpg";
import backgroundImage from "../../../assets/banner/banner4.jpg";
const Featured = () => {
    return (
        <div>
            <div className='justify-center mx-auto my-16'>
                <h1 className='text-3xl items-center text-center border-b-4 w-96 mx-auto font-bold uppercase text-orange-800'>--------Featured-------</h1>
            </div>
            <div className="md:flex bg-cover bg-fixed overflow-scroll rounded-lg bg-center h-96 text-white" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="w-4/12 my-auto mx-auto" >
                    <img className="rounded" src={img1} alt="" />
                </div>
                <div className="w-6/12  backdrop-blur-md my-auto mx-auto">
                    <h1 className="font-bold text-2xl ">It amet consectetur adipisicing elit. Illum, quo.</h1>
                    <p className="my-5">Ipsum dolor sit amet consectetur adipisicing elit. Debitis rem dolorum voluptas beatae praesentium, repellat eius doloremque in quam a. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, sed adipisci modi rerum, blanditiis dolores, quis odio non vitae cum veritatis incidunt placeat! Sed error quod quasi fuga obcaecati soluta?</p>
                    <p>Dolor sit amet consectetur adipisicing elit. Debitis rem dolorum voluptas beatae praesentium, repellat eius doloremque in quam a. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, sed adipisci modi rerum, blanditiis </p>
                </div>
            </div>

        </div>
    );
};

export default Featured;