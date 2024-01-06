"use client"
import React from 'react'
import Link from 'next/link'
import "@/app/stylesheets/header.css"

const Header = (dets) => {
    const openMenu = function () {
        console.log("clicked");
    }
    return (
        <>
            


            <nav class="bg-white border-gray-200 py-2.5 ">
                <div class="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                    <a href="#" class="flex items-center">
                        <i class="ri-mail-open-fill text-2xl text-violet-500 sm:h-9"></i>
                        Estatery
                    </a>
                    <div class="flex items-center lg:order-2">
                        <div class="hidden mt-2 mr-4 sm:inline-block">
                            <span></span>
                        </div>
                        <div className="right_btns flex gap-2 ">
                            <button className='py-1 px-4 bg-gray100 text-black font-semibold rounded-md shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75'>
                                Login
                            </button>
                            <button className='py-1 px-4 bg-violet-500 text-white font-semibold rounded-md shadow-md hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-opacity-75'>
                                Sign up
                            </button>
                        </div>
                        <button data-collapse-toggle="mobile-menu-2" type="button"
                            class="inline-flex items-center p-1 ml-1 text-sm text-white rounded-lg lg:hidden hover:bg-violet-100 focus:outline-none focus:ring-2 focus:ring-violet-200 dark:text-gray-400 dark:hover:bg-violet-700 dark:focus:ring-violet-600"
                            aria-controls="mobile-menu-2" aria-expanded="true">
                            <span class="sr-only">Open main menu</span>
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <div class="items-center justify-between w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <a href="#"
                                    class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-black lg:dark:hover:text-violet-500 dark:hover:bg-gray-200 dark:hover:text-violet-500 lg:dark:hover:bg-transparent dark:border-violet-200">Rent</a>
                            </li>
                            <li>
                                <a href="#"
                                    class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-black lg:dark:hover:text-violet-500 dark:hover:bg-gray-200 dark:hover:text-violet-500 lg:dark:hover:bg-transparent dark:border-violet-200">Buy</a>
                            </li>
                            <li>
                                <a href="#"
                                    class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-black lg:dark:hover:text-violet-500 dark:hover:bg-gray-200 dark:hover:text-violet-500 lg:dark:hover:bg-transparent dark:border-violet-200">Sell</a>
                            </li>
                            <li>
                                <a href="#"
                                    class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-black lg:dark:hover:text-violet-500 dark:hover:bg-gray-200 dark:hover:text-violet-500 lg:dark:hover:bg-transparent dark:border-violet-200">Manage Property <i class="ri-arrow-down-s-line"></i></a>
                            </li>
                            <li>
                                <a href="#"
                                    class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-black lg:dark:hover:text-violet-500 dark:hover:bg-gray-200 dark:hover:text-violet-500 lg:dark:hover:bg-transparent dark:border-violet-200">Resources <i class="ri-arrow-down-s-line"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {<script src="https://unpkg.com/flowbite@1.4.1/dist/flowbite.js"></script>}

        </>
    )
}

export default Header