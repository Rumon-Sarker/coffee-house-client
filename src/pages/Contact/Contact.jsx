import { useForm } from "react-hook-form";
import imgbg from "../../assets/login/contact2.jpg";
import useAxiosNoSecure from "../../hocks/useAxiosNoSecure";
import Swal from "sweetalert2";



const Contact = () => {
    const axiosNoSecure = useAxiosNoSecure();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        const res = await axiosNoSecure.post("/contact", data)
        if (res.data.insertedId) {
            reset()
            Swal.fire("Thnak you for message sending");
        }


    }
    return (
        <div>
            <section style={{ backgroundImage: `url(${imgbg})` }} className="hero  min-h-screen">
                <div className="py-8 lg:py-16 px-4 mt-24 text-white mx-auto  max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight uppercase font-bold text-center text-gray-900 ">Contact <span className='text-orange-500'>Us</span></h2>
                    <p className="mb-8 lg:mb-16 font-light text-center  text-black sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                            <input name="name" {...register("name")} type="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 " placeholder="name@flowbite.com" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">Subject</label>
                            <input name="email" {...register("email")} type="text" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Let us know how we can help you" required />
                        </div>
                        <div className="sm:col-span-2">
                            <label className="block mb-2 text-sm font-medium text-gray-900 ">Your message</label>
                            <textarea name="message"{...register("message")} rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Leave a comment..."></textarea>
                        </div>
                        <input type="submit" value="Send Message" className="py-3 px-5 text-sm font-medium bg-blue-900 text-center rounded-lg sm:w-fit" />
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;