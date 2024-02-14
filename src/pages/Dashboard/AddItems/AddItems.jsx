import { useForm } from "react-hook-form";
import useAxiosNoSecure from "../../../hocks/useAxiosNoSecure";
import useAxionSecure from "../../../hocks/useAxionSecure";
import Swal from "sweetalert2";
const imgBibi_img_uploaded_key = import.meta.env.VITE_IMGEBIBI_API_KEY;
const imgBibi_img_uploaded_api = `https://api.imgbb.com/1/upload?key=${imgBibi_img_uploaded_key}`;
const AddItems = () => {
    const axiosNoSecure = useAxiosNoSecure();
    const axiosSecure = useAxionSecure();
    const { register, handleSubmit, reset } = useForm();

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
        const addItem = await axiosSecure.post("/menu", itemsData)

        if (addItem.data.insertedId) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Items added success",
                showConfirmButton: false,
                timer: 1000,
            });
            reset()
        }

        console.log("img uploaded after data", addItem.data);

    }
    return (
        <div className="mx-auto bg-gray-100 p-4">
            <h1 className="text-2xl text-center my-5 font-bold">Add-Itmes</h1>
            <div className="ml-5 ">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="lg:flex md:flex-row  sm:flex-col gap-2">
                        <div className="w-full">
                            <div className=" w-full max-w-md">
                                <label className="label"><p>Name<span className="text-red-500">*</span></p></label>
                                <input placeholder="Itmes Name" className="w-full p-2 border-2 rounded" {...register("name")} required />
                            </div>
                            <div>
                                <label className="label"><p>Caregory<span className="text-red-500">*</span></p> </label>
                                <select defaultValue={"default"} {...register("category")} required className="select select-bordered w-full max-w-md">
                                    <option disabled value={"default"}>Type..</option>
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
                                <label className="label"><p>Price<span className="text-red-500">*</span></p></label>
                                <input {...register("price")} placeholder="Price" required className="w-full p-2 border-2 rounded" />
                            </div>
                            <div>
                                <label className="label"><p>Image<span className="text-red-500">*</span></p></label>
                                <input {...register("image")} required type="file" className="file-input file-input-bordered w-full max-w-md" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="label"><p>Discription<span className="text-red-500">*</span></p></label>
                        <textarea {...register("discription")} required placeholder="Items Discriptions" className="textarea textarea-bordered textarea-lg w-full max-w-md" ></textarea>
                    </div>
                    <input className="btn btn-ghost bg-slate-400 mt-5 w-full max-w-md text-center" value={"Add"} type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddItems;