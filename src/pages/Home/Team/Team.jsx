import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';


import team1 from '../../../assets/team/team1.jpg'
import team2 from '../../../assets/team/team2.jpg'
import team3 from '../../../assets/team/team3.jpg'
import team4 from '../../../assets/team/team4.jpg'

const Team = () => {
    return (
        <div className='my-12'>
            <div className='justify-center mx-auto my-16'>
                <h1 className='text-3xl items-center text-center border-b-4 w-96 mx-auto font-bold uppercase text-orange-800'>--Our Team Members--</h1>
            </div>
            <div>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'4'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 1,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide >
                        <img className='rounded-md' src={team4} />
                        <p className='text-xl  font-bold'>Most Kely</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={team2} />
                        <p className='text-xl font-bold'>Faysal Sarker</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={team3} />
                        <p className='text-xl font-bold'>Shumona</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={team1} />
                        <p className='text-xl font-bold'>Hredoy Khan</p>
                    </SwiperSlide>


                </Swiper>
            </div>
        </div>
    );
};

export default Team;