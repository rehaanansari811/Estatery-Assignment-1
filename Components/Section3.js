import React from 'react'

const Section3 = () => {
    return (
        <>
            <div className="section3 w-full min-h-screen bg-slate-100 ">
                <div className="section3-box py-[4vw] px-[8vw]">
                    <div className="section3-box-up px-[6.5vw] flex items-center justify-between">
                        <div className="up-box-left">
                            <h2 className='text-[2.4vw] font-semibold'>Based on your location</h2>
                            <p className='text-[16px] text-slate-400'>Some of our picked properties near your location</p>
                        </div>
                        <div className="up-box-right">
                            <button className='py-2 w-[15vw] bg-violet-500 text-white font-semibold rounded-md shadow-md hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-opacity-75'>
                                Browse more properties
                            </button>
                        </div>
                    </div>
                    <div className="section3-box-down flex flex-wrap gap-[5vw] items-center justify-center">
                        <div className="right-top mt-[2vw] w-[20vw] h-[50vh] bg-white rounded-lg overflow-hidden">
                            <div className="img bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2V8ZW58MHx8MHx8fDA%3D')] h-[50%]"></div>
                            <div className="img-info py-2 px-4 flex flex-col gap-1">
                                <div className="data flex items-center">
                                    <p className='text-gray-400 tracking-wider'><span className='text-violet-500 text-[18px] font-semibold'>$2,095</span>/month</p>
                                    <div className="data-icon ml-[130px] w-[30px] h-[30px] border-2 border-violet-200 rounded-full bg-violet-100 flex items-center justify-center"><i class=" text-violet-500 ri-heart-line"></i></div>
                                </div>
                                <h4 className='font-semibold'>Palm Harbor</h4>
                                <p className='text-gray-400 text-[14px]'>2821 Lake Sevilla, Palm Harbor, TX</p>
                                <div className='h-[1px] bg-gray-200'></div>
                                <div className="icon flex gap-4">
                                    <div className="inner-icons text-gray-400 text-[14px]"><i class="text-[18px] ri-hotel-bed-line text-violet-500"></i> 4</div>
                                    <div className="inner-icons text-gray-400 text-[14px]"><i class="text-[18px] ri-window-2-line text-violet-500"></i> 2</div>
                                    <div className="inner-icons text-gray-400 text-[14px]"><i class="text-[18px] ri-shape-line text-violet-500"></i> 6x7.5m <sup>2</sup></div>
                                </div>
                            </div>
                        </div>
                        <div className="right-top mt-[2vw] w-[20vw] h-[50vh] bg-white rounded-lg overflow-hidden">
                            <div className="img bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdXNlfGVufDB8fDB8fHww')] h-[50%]"></div>
                            <div className="img-info py-2 px-4 flex flex-col gap-1">
                                <div className="data flex items-center">
                                    <p className='text-gray-400 tracking-wider'><span className='text-violet-500 text-[18px] font-semibold'>$2,700</span>/month</p>
                                    <div className="data-icon ml-[130px] w-[30px] h-[30px] border-2 border-violet-200 rounded-full bg-violet-100 flex items-center justify-center"><i class=" text-violet-500 ri-heart-line"></i></div>
                                </div>
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
                        <div className="right-top mt-[2vw] w-[20vw] h-[50vh] bg-white rounded-lg overflow-hidden">
                            <div className="img bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdXNlfGVufDB8fDB8fHww')] h-[50%]"></div>
                            <div className="img-info py-2 px-4 flex flex-col gap-1">
                                <div className="data flex items-center">
                                    <p className='text-gray-400 tracking-wider'><span className='text-violet-500 text-[18px] font-semibold'>$4,550</span>/month</p>
                                    <div className="data-icon ml-[130px] w-[30px] h-[30px] border-2 border-violet-200 rounded-full bg-violet-100 flex items-center justify-center"><i class=" text-violet-500 ri-heart-line"></i></div>
                                </div>
                                <h4 className='font-semibold'>Faulker Awe</h4>
                                <p className='text-gray-400 text-[14px]'>2821 Lake Sevilla, Palm Harbor, TX</p>
                                <div className='h-[1px] bg-gray-200'></div>
                                <div className="icon flex gap-4">
                                    <div className="inner-icons text-gray-400 text-[14px]"><i class="text-[18px] ri-hotel-bed-line text-violet-500"></i> 4</div>
                                    <div className="inner-icons text-gray-400 text-[14px]"><i class="text-[18px] ri-window-2-line text-violet-500"></i> 2</div>
                                    <div className="inner-icons text-gray-400 text-[14px]"><i class="text-[18px] ri-shape-line text-violet-500"></i> 6x7.5m <sup>2</sup></div>
                                </div>
                            </div>
                        </div>
                        <div className="right-top mt-[2vw] w-[20vw] h-[50vh] bg-white rounded-lg overflow-hidden">
                            <div className="img bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdXNlfGVufDB8fDB8fHww')] h-[50%]"></div>
                            <div className="img-info py-2 px-4 flex flex-col gap-1">
                                <div className="data flex items-center">
                                    <p className='text-gray-400 tracking-wider'><span className='text-violet-500 text-[18px] font-semibold'>$2,700</span>/month</p>
                                    <div className="data-icon ml-[130px] w-[30px] h-[30px] border-2 border-violet-200 rounded-full bg-violet-100 flex items-center justify-center"><i class=" text-violet-500 ri-heart-line"></i></div>
                                </div>
                                <h4 className='font-semibold'>St. Crystal</h4>
                                <p className='text-gray-400 text-[14px]'>2821 Lake Sevilla, Palm Harbor, TX</p>
                                <div className='h-[1px] bg-gray-200'></div>
                                <div className="icon flex gap-4">
                                    <div className="inner-icons text-gray-400 text-[14px]"><i class="text-[18px] ri-hotel-bed-line text-violet-500"></i> 4</div>
                                    <div className="inner-icons text-gray-400 text-[14px]"><i class="text-[18px] ri-window-2-line text-violet-500"></i> 2</div>
                                    <div className="inner-icons text-gray-400 text-[14px]"><i class="text-[18px] ri-shape-line text-violet-500"></i> 6x7.5m <sup>2</sup></div>
                                </div>
                            </div>
                        </div>
                        <div className="right-top mt-[2vw] w-[20vw] h-[50vh] bg-white rounded-lg overflow-hidden">
                            <div className="img bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdXNlfGVufDB8fDB8fHww')] h-[50%]"></div>
                            <div className="img-info py-2 px-4 flex flex-col gap-1">
                                <div className="data flex items-center">
                                    <p className='text-gray-400 tracking-wider'><span className='text-violet-500 text-[18px] font-semibold'>$1,500</span>/month</p>
                                    <div className="data-icon ml-[130px] w-[30px] h-[30px] border-2 border-violet-200 rounded-full bg-violet-100 flex items-center justify-center"><i class=" text-violet-500 ri-heart-line"></i></div>
                                </div>
                                <h4 className='font-semibold'>Cove Red</h4>
                                <p className='text-gray-400 text-[14px]'>2821 Lake Sevilla, Palm Harbor, TX</p>
                                <div className='h-[1px] bg-gray-200'></div>
                                <div className="icon flex gap-4">
                                    <div className="inner-icons text-gray-400 text-[14px]"><i class="text-[18px] ri-hotel-bed-line text-violet-500"></i> 4</div>
                                    <div className="inner-icons text-gray-400 text-[14px]"><i class="text-[18px] ri-window-2-line text-violet-500"></i> 2</div>
                                    <div className="inner-icons text-gray-400 text-[14px]"><i class="text-[18px] ri-shape-line text-violet-500"></i> 6x7.5m <sup>2</sup></div>
                                </div>
                            </div>
                        </div>
                        <div className="right-top mt-[2vw] w-[20vw] h-[50vh] bg-white rounded-lg overflow-hidden">
                            <div className="img bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1430285561322-7808604715df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGhvdXNlfGVufDB8fDB8fHww')] h-[50%]"></div>
                            <div className="img-info py-2 px-4 flex flex-col gap-1">
                                <div className="data flex items-center">
                                    <p className='text-gray-400 tracking-wider'><span className='text-violet-500 text-[18px] font-semibold'>$1,600</span>/month</p>
                                    <div className="data-icon ml-[130px] w-[30px] h-[30px] border-2 border-violet-200 rounded-full bg-violet-100 flex items-center justify-center"><i class=" text-violet-500 ri-heart-line"></i></div>
                                </div>
                                <h4 className='font-semibold'>Tarpon Bay</h4>
                                <p className='text-gray-400 text-[14px]'>2821 Lake Sevilla, Palm Harbor, TX</p>
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
            </div>
        </>
    )
}

export default Section3