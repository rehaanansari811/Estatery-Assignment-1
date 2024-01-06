import React from 'react'
import Link from 'next/link'
const Hero = () => {
    return (
        <>
            <div className="heroSection bg-right  bg-slate-100 w-full h-[91vh] flex">
                <div className="left-main w-[60%] h-full px-[9vw] py-[4vw]">
                    <h1 className='text-7xl  font-bold'>Buy, rent, or sell</h1>
                    <h1 className='text-7xl  font-bold'>your property</h1>
                    <h1 className='text-7xl  font-bold'>easily</h1>
                    <p className='text-[20px] mt-6'>A great platform to buy, sell, or even rent your <br />properties without any commisions </p>
                    <div className="info flex gap-4 mt-4">
                        <div className="inner-info">
                            <h4 className='text-violet-400 text-3xl'>50k+</h4>
                            <p className='text-gray-400 text-[20px]'>renters</p>
                        </div>
                        <div className="inner-info">
                            <h4 className='text-violet-400 text-3xl'>10k+</h4>
                            <p className='text-gray-400 text-[20px]'>properties</p>
                        </div>
                    </div>
                    <div className="bottom-info mt-4">
                        <div className="bottom-info-top flex rounded-md overflow-hidden">
                            <Link href="" className='bg-white py-1 px-3 text-violet-500  border-2 border-indigo-000 border-b-indigo-500'>Rent</Link>
                            <Link href="" className='bg-white py-1 px-3 rounded-sm '>Buy</Link>
                            <Link href="" className='bg-white py-1 px-3 rounded-sm '>Sell</Link>
                        </div>
                        <div className="bottom-info-bottom rounded-md flex">
                            <div className="s-box bg-white rounded-md px-6 py-2">
                                <p className='text-gray-400'>Location</p>
                                <p className='font-semibold'>Barcelona, Spain</p>
                            </div>
                            <div className="s-box bg-white rounded-md px-6 py-2">
                                <p className='text-gray-400'>When</p>
                                <p className='font-semibold'>Select Move-in Date <i class="ri-calendar-2-line"></i></p>
                            </div>
                            <div className="s-box rounded-md px-3 py-2 bg-white flex items-center">
                                <button className='py-1 px-4 bg-violet-500 text-white font-semibold rounded-md shadow-md hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-opacity-75'>
                                    Browse Properties
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-main w-[40%] h-full">
                    <div className="right-top mt-[2vw] w-[17vw] h-[45vh] bg-white rounded-lg overflow-hidden">
                        <div className="img bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8fDA%3D')] h-[50%]"></div>
                        <div className="img-info py-2 px-4 flex flex-col gap-1">
                            <p className='text-gray-400 tracking-wider'><span className='text-violet-500 text-[18px] font-semibold'>$2,700</span>/month</p>
                            <h4 className='font-semibold'>Baverly Springfield</h4>
                            <p className='text-gray-400 text-[14px]'>2821 Lake Sevilla, Palm Harbor, TX</p>
                            <div className='h-[1px] bg-gray-200'></div>
                            <div className="icon flex gap-4">
                                <div className="inner-icons text-gray-400 text-[14px]"><i class="text-[18px] ri-hotel-bed-line text-violet-500"></i> 4</div>
                                <div className="inner-icons text-gray-400 text-[14px]"><i class="text-[18px] ri-window-2-line text-violet-500"></i> 2</div>
                                <div className="inner-icons text-gray-400 text-[14px]"><i class="text-[18px] ri-shape-line text-violet-500"></i> 6x7.5m <sup>2</sup></div>
                            </div>
                        </div>
                    </div>
                    <div className="right-bottom w-[14vw] h-[40vh] bg-white rounded-lg overflow-hidden ml-[20vw] border-2 border-violet-500" >
                        <div className="img bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2V8ZW58MHx8MHx8fDA%3D')] h-[50%]"></div>
                        <div className="img-info py-2 px-4 flex flex-col gap-1">
                            <p className='text-gray-400 tracking-wider'><span className='text-violet-500 text-[16px] font-semibold'>$1,600</span>/month</p>
                            <h4 className='font-semibold'>Tarpon Bay</h4>
                            <p className='text-gray-400 text-[12px]'>Palm Harbor, TX</p>
                            <div className='h-[1px] bg-gray-200'></div>
                            <div className="icon flex gap-4">
                                <div className="inner-icons text-gray-400 text-[14px]"><i class="text-[18px] ri-hotel-bed-line text-violet-500"></i> 4</div>
                                <div className="inner-icons text-gray-400 text-[14px]"><i class="text-[18px] ri-window-2-line text-violet-500"></i> 2</div>
                                <div className="inner-icons text-gray-400 text-[14px]"><i class="text-[18px] ri-shape-line text-violet-500"></i> 6x7.5m <sup>2</sup></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero