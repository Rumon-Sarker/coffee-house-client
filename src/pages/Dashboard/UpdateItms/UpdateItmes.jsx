import { useLoaderData } from "react-router-dom";
import useAxiosNoSecure from "../../../hocks/useAxiosNoSecure";
import useAxionSecure from "../../../hocks/useAxionSecure";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";


const imgBibi_img_uploaded_key = import.meta.env.VITE_IMGEBIBI_API_KEY;
const imgBibi_img_uploaded_api = `https://api.imgbb.com/1/upload?key=${imgBibi_img_uploaded_key}`;

const UpdateItmes = () => {
    const items = useLoaderData();
    const { _id, name, category, price, recipe } = items;

    const axiosNoSecure = useAxiosNoSecure();
    const axiosSecure = useAxionSecure();
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        const imgFile = { image: data.image[0] };
        const res = await axiosNoSecure.post(imgBibi_img_uploaded_api, imgFile, {
            headers: {
                "content-type": "multipart/form-data"
            }
        });

        const itemsData = {
            name: data.name,
            category: data.category,
            price: parseFloat(data.price),
            recipe: data.discription,
            image: res.data.data.display_url
        };
        const updateItems = await axiosSecure.patch(`/menu/${_id}`, itemsData)

        if (updateItems.data.modifiedCount > 0) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Items Update success",
                showConfirmButton: false,
                timer: 1000,
            });

        }

    }
    console.log("itmesss", items)
    return (
        <div className="mx-auto bg-gray-100 p-4">
            <h1 className="text-2xl text-center my-5 font-bold">Add-Itmes</h1>
            <div className="ml-5 ">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="lg:flex md:flex-row  sm:flex-col gap-2">
                        <div className="w-full">
                            <div className=" w-full max-w-md">
                                <label className="label"><p>Name</p></label>
                                <input defaultValue={name} placeholder="Itmes Name" className="w-full p-2 border-2 rounded" {...register("name")} required />
                            </div>
                            <div>
                                <label className="label"><p>Caregory</p> </label>
                                <select defaultValue={category} {...register("category")} required className="select select-bordered w-full max-w-md">
                                    <option value="greencoffee">Green Coffee</option>
                                    <option value="blackcoffee">Black Coffee</option>
                                    <option value="normalcoffee">Normal Coffee</option>
                                    <option value="offer">Offer</option>
                                    <option value="popular">Popular Coffee</option>
                                </select>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className=" w-full max-w-md">
                                <label className="label"><p>Price</p></label>
                                <input defaultValue={price} {...register("price")} placeholder="Price" required className="w-full p-2 border-2 rounded" />
                            </div>
                            <div>
                                <label className="label"><p>Image</p></label>
                                <input {...register("image")} type="file" className="file-input file-input-bordered w-full max-w-md" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="label"><p>Discription</p></label>
                        <textarea {...register("discription")} required defaultValue={recipe} placeholder="Items Discriptions" className="textarea textarea-bordered textarea-lg w-full max-w-md" ></textarea>
                    </div>
                    <input className="btn btn-ghost bg-slate-400 mt-5 w-full max-w-md text-center" value="Update" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default UpdateItmes;