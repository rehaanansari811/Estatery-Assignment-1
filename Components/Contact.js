import React from 'react'

const Contact = () => {
    return (
        <>
            <div className="contact bg-[#100a55] w-full h-[55vh] flex flex-col items-center text-center justify-center gap-4">
                <p className='text-violet-500 font-semibold text-3xl'>No Spam Promise</p>
                <h4 className='font-semibold text-[3vw] text-white'>Are you a landlord?</h4>
                <p className='text-white text-center'>Discover ways to increase your home's value and get listed. No Spam.</p>
                <form action="#" className='py-3 px-2 bg-white w-[30%] rounded-md flex items-center justify-between' >
                    <input className='py-[8px] w-[20vw]' type="email" name="email" id="email" required placeholder='Enter your email address' />
                    <button className='py-[8px] w-[7vw] bg-violet-500 text-white font-semibold rounded-md shadow-md hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-opacity-75'>
                        Submit
                    </button>
                </form>
                <p className='text-white'>Join 10,000+ other landlords in our estatery community.</p>
            </div>
        </>
    )
}

export default Contact