import React from 'react';
import Footer from "./Footer";
import Navbar from "./Navbar";
import 'animate.css';
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { MdSubject } from "react-icons/md";
import { GiTreehouse } from "react-icons/gi";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const Home = () => {
   return (
    <div>
        <Navbar/>
        <div>
            <header className="grid md:grid-cols-2 md:p-24 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% animate__animated animate__fadeIn">
                <div>
                    <img 
                      src="./photo/student.jpg" 
                      alt="Student" 
                      className='w-48 h-48 rounded-full object-cover animate__animated animate__pulse border border-2 shadow-xl'
                    />
                </div>
                <div className='flex flex-col gap-8 justify-center' >
                    <h1 className='text-7xl font-bold text-white'>"Say Hello !</h1>
                    <p className='text-2xl font-semibold'>Enjoy complete digital learning experience with codeByMe by codingott</p>
                    <div className='flex gap-6'>
                    <button type="button" className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-12 py-4 text-center me-2 mb-2">Learn More</button>
                        <button className='border border-3 border-[#100d22] text-[#100d22] px-12 py-4 rounded-md text-lg font-semibold'>Watch Videos</button>
                    </div>
                </div>
            </header>

            <div className='p-24'>
                <h1 className='text-center text-4xl font-bold'>Benifits & Advantages</h1>
                <p className='text-gray-600 text-center-mt-4 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum beatae esse veniam incidunt ad. Cum aperiam eum debitis, mollitia voluptates earum fugiat porro assumenda ea!</p>
                <div className='w-11/12 mx-auto mt-12 grid grid-cols-3 gap-8'>
                    <div className='shadow-lg border rounded-md p-4 text-center flex flex-col items-center justify-center'>
                        <LiaChalkboardTeacherSolid className='text-6xl mb-2' />
                        <h1 className='text-2xl font-semibold mb-2'>Great Faculty</h1>
                        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elits.</p>
                    </div>

                    <div className='shadow-lg border rounded-md p-4 text-center flex flex-col items-center justify-center'>
                    <MdSubject className='text-6xl mb-2' />
                        <h1 className='text-2xl font-semibold mb-2'>Latest Curriculum</h1>
                        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elits.</p>
                    </div>

                    <div className='shadow-lg border rounded-md p-4 text-center flex flex-col items-center justify-center'>
                        <GiTreehouse className='text-6xl mb-2' />
                        <h1 className='text-2xl font-semibold mb-2'>Green Enviroment</h1>
                        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elits.</p>
                    </div>

            </div>
            </div>

            <div className='grid grid-cols-2 p-12 gap-6'>
                <div>
                    <Swiper className="mySwiper w-8/12 ">
                        <SwiperSlide><img src="./photo/student-1.jpg" alt="student" /></SwiperSlide>
                        <SwiperSlide><img src="./photo/student-2.jpg" alt="student" /></SwiperSlide>
                        <SwiperSlide><img src="./photo/student-3.jpg" alt="student" /></SwiperSlide>
                        <SwiperSlide><img src="./photo/student-4.jpg" alt="student" /></SwiperSlide>
                        <SwiperSlide><img src="./photo/student-5.jpg" alt="student" /></SwiperSlide>
                        <SwiperSlide><img src="./photo/student-6.jpg" alt="student" /></SwiperSlide>
                    </Swiper>
                </div>

                <div>
                    <h1 className='text-7xl font-bold text-orange-300 mb-3'>"Say Hello"</h1>
                    <p className='text-2xl font-semibold'>Enjoy complete digital learning experience with VKV Public School</p>
                </div>

            </div>

        </div>
        <Footer/>
    </div>
   )
}

export default Home;