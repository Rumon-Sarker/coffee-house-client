
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import blackCoffee from "../../../assets/category/blackCoffee.jpg"
import ColdBrewCoffee from "../../../assets/category/ColdBrewCoffee.jpg"
import ColdCoffeeVariety from "../../../assets/category/ColdCoffeeVariety.jpg"
import GreenCoffee from "../../../assets/category/GreenCoffee.jpg"
import IcedCoffee from "../../../assets/category/IcedCoffee.jpg"

const Category = () => {
    return (
        <div>
            <div className='ml-10 my-16'>
                <h1 className='text-3xl border-b-4 w-4/12 font-bold uppercase text-orange-800'>Category_.</h1>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='rounded' src={GreenCoffee} alt="" />
                    <h1 className='text-center text-2xl uppercase -mt-16 text-white font-bold'>GREEN-COFFE</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='rounded' src={ColdBrewCoffee} alt="" />
                    <h1 className='text-center text-2xl uppercase -mt-16 text-white font-bold'>ColdBrew-Coffee</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='rounded' src={ColdCoffeeVariety} alt="" />
                    <h1 className='text-center text-2xl uppercase -mt-16 text-white font-bold'>ColdCoffee-Variety</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='rounded' src={blackCoffee} alt="" />
                    <h1 className='text-center text-2xl uppercase -mt-16 pb-5 text-white font-bold'>Black-Coffee</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='rounded' src={IcedCoffee} alt="" />
                    <h1 className='text-center text-2xl uppercase -mt-16 pb-5 text-white font-bold'>Iced-Coffee</h1>
                </SwiperSlide>

            </Swiper>

        </div>
    );
};

export default Category;