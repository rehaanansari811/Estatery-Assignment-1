import React from 'react'

const Testimonials = () => {
  return (
    <>
        <div className="testimonials bg-slate-100 w-full h-[65vh] flex flex-col items-center justify-center text-center gap-[2vw]">
            <h2 className='text-[2.5vw] font-semibold'>Testimonials</h2>
            <p className='text-[15px] text-slate-400'>See what our property managers, landlords, and tenants have to say</p>
            <p className='w-[40%] text-[17px]'>"Estatery is the platform I go to on almost a daily basis for 2nd home and vacation condo shopping, or to just look at dream homes in new areas. Thanks for fun home shopping and comparative analyzing, Estatery!"</p>
            <p className='text-1xl'>Mira Culos,<span className='text-slate-400'>Renter</span></p>
            <div className="testi-img-box flex gap-4">
                <img className='rounded-full border-2 border-violet-500 p-[2px] w-[70px] h-[70px]' src="https://images.unsplash.com/photo-1624561172888-ac93c696e10c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww" alt="" />
                <img className='rounded-full w-[70px] h-[70px]' src="https://images.unsplash.com/photo-1463453091185-61582044d556?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww" alt="" />
                <img className='rounded-full w-[70px] h-[70px]' src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D" alt="" />
            </div>
        </div>
    </>
  )
}

export default Testimonials