import React from 'react'

const Section1 = () => {
    return (
        <>
            <div className='section1 w-full h-screen flex'>
                <div className="section-left w-[50%] h-full flex items-center justify-center">
                    <div className="section-img-box relative rounded-md w-[30vw] h-[75vh] bg-[url('https://images.unsplash.com/photo-1589129140837-67287c22521b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGhvdXNlfGVufDB8fDB8fHww')]">
                        <div className="virtual border-2 border-violet-200 rounded-md absolute -left-[70px] top-4 px-2 py-4 w-[17vw] bg-white flex items-center gap-4">
                            <div className="vir-left w-[40px] h-[40px] border-2 border-violet-200 rounded-full bg-violet-100 flex items-center justify-center"><i class=" text-violet-500 ri-video-line"></i></div>
                            <div className="vir-right">
                                <h4>Virtual home tour</h4>
                                <p className='text-gray-400 text-[13px]'>We provide you with virtual tour</p>
                            </div>
                        </div>
                        <div className="find border-2 border-violet-200 absolute bottom-[-30px] left-[80px]  px-4 py-4 w-[19vw] bg-white rounded-md flex items-center justify-center gap-4">
                            <div className="find-left relative">
                                <h4>Find the best deal</h4>
                                <p className='text-gray-400 text-[13px]'>Browse thousands of properties</p>
                            </div>
                            <div className=" absolute -top-[20px] right-[20px] vir-right w-[40px] h-[40px] border-2 border-white rounded-full bg-violet-500 flex items-center justify-center"><i class="ri-home-smile-line text-white"></i></div>
                        </div>
                    </div>
                </div>
                <div className="section-right w-[50%] h-full  flex items-center justify-center">
                    <div className="section-right-box flex flex-col gap-4">
                        <div className="section-right-top flex items-center justify-evenly border-2 py-1 border-violet-200 rounded-md bg-violet-100 w-[16vw] ">
                            <div className="r-t-info bg-white px-3 py-1 rounded-md"><p>For tenants</p></div>
                            <div className="r-t-info px-2 py-1 rounded-md"><p>For landlords</p></div>
                        </div>
                        <h2 className='text-4xl font-semibold'>We make it easy for <br /> tenants and landlords.</h2>
                        <p className='text-gray-400'>Whether it's selling your current home, getting <br />financing, or buying  a new home, we make it easy and <br />efficient. The best part? you'll save a bunch of money and time with our services.</p>
                        <button className='py-2 w-[9vw] bg-violet-500 text-white font-semibold rounded-md shadow-md hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-opacity-75'>
                            See more <i class="ri-arrow-right-s-line"></i>
                        </button>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Section1