import React from 'react'

const Searchbox = () => {
  return (
    <>
    <div className="searchbox hidden flex flex-col items-center justify-center text-center gap-4">
      <h2 className=' font-semibold text-2xl'>Search properties <br />to rent</h2>
      <form action="#" className='flex items-center justify-center text-center bg-white px-4 py-2 border-2 border-violet-400 rounded-lg w-2/5'>
        <input type="text" name='search' placeholder='Search with Search Bar'/>
        <i class="ri-arrow-drop-down-line"></i>
      </form>
    </div>
    </>
  )
}

export default Searchbox