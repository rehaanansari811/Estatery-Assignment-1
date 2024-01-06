"use client"
import React, { useState } from 'react'
import Header from '@/Components/Header'
import Hero from '@/Components/Hero'
import Section1 from '@/Components/Section1'
import Section2 from '@/Components/Section2'
import Section3 from '@/Components/Section3'
import Testimonials from '@/Components/Testimonials'
import Contact from '@/Components/Contact'
import Footer from '@/Components/Footer'
import Searchbox from '@/Components/Searchbox'
const page = () => {

  return (
    <>
      <Header />
      <Searchbox/>
      <Hero/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  )

}

export default page