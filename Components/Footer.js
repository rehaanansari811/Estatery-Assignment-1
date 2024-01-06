"use client"
import React from 'react'
import Link from 'next/link'
const Footer = () => {
    return (
        <>
            <footer className=' h-[80vh] w-full px-[10vw] py-[4vw]' >
                <div className="f-top flex justify-evenly ">
                    <div className="f-data flex flex-col gap-3">
                        <Link className="text-2xl text-violet-800 flex items-center gap-1" href="">
                            <i class="ri-mail-open-fill text-2xl font-semibold text-violet-500"></i>
                            Estatery
                        </Link>
                    </div>
                    <div className="f-data flex flex-col gap-3">
                        <p className='text-[1vw] mb-2 font-semibold'>SELL A HOME</p>
                        <Link href="" className='text-slate-500 text-1xl'>Request an offer</Link>
                        <Link href="" className='text-slate-500 text-1xl'>Pricing</Link>
                        <Link href="" className='text-slate-500 text-1xl'>Reviews</Link>
                        <Link href="" className='text-slate-500 text-1xl'>Stories</Link>
                        <p className='text-[1vw] mb-2 font-semibold'>BUY A HOME</p>
                        <Link href="" className='text-slate-500 text-1xl'>Buy</Link>
                        <Link href="" className='text-slate-500 text-1xl'>Finance</Link>
                    </div>
                    <div className="f-data flex flex-col gap-3">
                        <p className='text-[1vw] mb-2 font-semibold'>BUY,RENT AND SELL</p>
                        <Link href="" className='text-slate-500 text-1xl'>Buy and sell properties</Link>
                        <Link href="" className='text-slate-500 text-1xl'>Rent home</Link>
                        <Link href="" className='text-slate-500 text-1xl'>Builder trade-up</Link>
                        <p className='text-[1vw] mb-2 font-semibold'>TERMS & PRIVACY</p>
                        <Link href="" className='text-slate-500 text-1xl'>Trust & Safety</Link>
                        <Link href="" className='text-slate-500 text-1xl'>Terms of Servive</Link>
                        <Link href="" className='text-slate-500 text-1xl'>Privacy Policy</Link>
                    </div>
                    <div className="f-data flex flex-col gap-3">
                        <p className='text-[1vw] mb-2 font-semibold'>ABOUT</p>
                        <Link href="" className='text-slate-500 text-1xl'>Company</Link>
                        <Link href="" className='text-slate-500 text-1xl'>How it works</Link>
                        <Link href="" className='text-slate-500 text-1xl'>Contact</Link>
                        <Link href="" className='text-slate-500 text-1xl'>Investors</Link>
                        <p className='text-[1vw] mb-2 font-semibold'>RESOURCES</p>
                        <Link href="" className='text-slate-500 text-1xl'>Blog</Link>
                        <Link href="" className='text-slate-500 text-1xl'>Guides</Link>
                        <Link href="" className='text-slate-500 text-1xl'>FAQ</Link>
                        <Link href="" className='text-slate-500 text-1xl'>Help Center</Link>
                    </div>

                </div>
                <div className='h-[2px] bg-slate-400 w-full mb-[2vw] mt-[10px]'></div>
                <div className="f-bottom text-slate-400 flex justify-between px-[9vw]">
                    <p><i class="ri-copyright-line"></i>2021 Estatery, All rights reserved</p>
                    <div className="social-links flex gap-4">
                        <i class=" text-2xl ri-facebook-line"></i>
                        <i class=" text-2xl ri-instagram-line"></i>
                        <i class=" text-2xl ri-twitter-line"></i>
                        <i class=" text-2xl ri-linkedin-line"></i>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer