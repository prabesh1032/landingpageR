import React from 'react'
import Monitoriamge from '../assets/monitor-card.webp'
import { FaLongArrowAltRight } from "react-icons/fa";

const MonitorSection = () => {
    return (
        <section className='max-w-7xl mx-auto ml-24 px-4 sm:px-6 md:py-24 py-16' >
            <div className='flex flex-col md:flex-row items-center p-12 justify-between gap-12 md:gap-24'>
                {/* left */}
                <div className='md:w-1/2 w-full'>
                    <p className='text-green-500 font-semibold'> MONITOR</p>

                    <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-6 md:w-4/5'>
                        Introducing best mobile carousels
                    </h2>

                    <p className='text-gray-600 mb-8'>
                        Before the ship is really back. Round, round, all around the world. Round, all around the world. Round, all around the world. Round, all around the world.
                    </p>

                    <a href="#" className='text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all'>
                        Learn more about monitoring
                        <FaLongArrowAltRight className='w-5 h-5 relative top-[1px]' />
                    </a>
                </div>
                {/* right */}
                <div className='md:w-1/2 w-full'>
                    <img src={Monitoriamge} alt="ScheduleImage" className='w-full h-auto' />
                </div>
            </div>
        </section>
    )
}

export default MonitorSection