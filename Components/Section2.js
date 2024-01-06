import React from 'react'

const Section2 = () => {
  return (
    <>
      <div className='section2 w-full h-[80vh] flex items-center justify-center'>
        <div className="section2-inner border-2 border-violet-200 rounded-md flex w-[80%] h-[80%] items-center justify-center bg-slate-100">
          <div className="section2-left py-[3vw] px-[4vw] h-full w-[50%] flex flex-col gap-[3vw]">
            <h2 className='text-5xl font-semibold'>The new way to find <br />your new home</h2>
            <p>Find your dream place to live in with <br />more than 10k+ properties listed</p>
            <div className="section2-icons flex gap-4">
              <div className="icon-box flex flex-col items-center justify-center gap-2">
                <div className=" relative  w-[45px] h-[45px] border-2 border-violet-200 rounded-full bg-violet-100 flex items-center justify-center"><i class="  text-violet-500 ri-exchange-funds-line"></i>
                  <div className=" absolute bottom-[-3px] right-[-6px] w-[18px] h-[18px] rounded-full bg-violet-500 text-white flex items-center justify-center"><i class="ri-signal-tower-line"></i></div>
                </div>
                <h4 className='text-1xl font-semibold'>7.4%</h4>
                <p className='text-[12px] text-slate-400'>Property Return Rate</p>
              </div>
              <div className="icon-box flex flex-col items-center justify-center gap-2">
                <div className=" relative  w-[45px] h-[45px] border-2 border-violet-200 rounded-full bg-violet-100 flex items-center justify-center"><i class="ri-database-line text-violet-500"></i>
                  <div className=" absolute bottom-[-3px] right-[-6px] w-[18px] h-[18px] rounded-full bg-violet-500 text-white flex items-center justify-center"><i class="ri-search-2-line"></i></div>
                </div>
                <h4 className='text-1xl font-semibold'>3,856</h4>
                <p className='text-[12px] text-slate-400'>Property in Sell & Rent</p>
              </div>
              <div className="icon-box flex flex-col items-center justify-center gap-2">
                <div className=" relative  w-[45px] h-[45px] border-2 border-violet-200 rounded-full bg-violet-100 flex items-center justify-center"><i class="ri-money-dollar-circle-line text-violet-500"></i>
                  <div className=" absolute bottom-[-3px] right-[-6px] w-[18px] h-[18px] rounded-full bg-violet-500 text-white flex items-center justify-center"><i class="ri-check-line"></i></div>
                </div>
                <h4 className='text-1xl font-semibold'>2,540</h4>
                <p className='text-[12px] text-slate-400'>Daily Completed Transactions</p>
              </div>

            </div>
          </div>
          <div className="section2-right bg-violet-200 h-full w-[50%] bg-center bg-no-repeat bg-[url('https://freepngimg.com/save/156959-house-vector-modern-free-download-png-hq/512x512')]"></div>
        </div>
      </div>
    </>
  )
}

export default Section2