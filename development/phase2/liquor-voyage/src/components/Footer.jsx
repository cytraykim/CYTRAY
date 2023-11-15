import React from 'react';
import { IoLogoTwitter } from "react-icons/io";
import { FaFacebook,FaInstagramSquare } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className='bg-black pt-10 sm:mt-10'>
      <div className="max-w-6xl m-auto text-red-800 flex flex-wrap justify-center space-evenly">
        <div className='p-5 w-full sm:w-4/12 md:w-3/12'>
          <div className='text-xs uppercase text-red-400 font-medium mb-6'> Location </div>
          <p className='my-3 block text-red-300 text-sm font-medium duration-700'>
            Nairobi, Kenya
          </p>
        </div>
        <div className='p-5 w-full sm:w-4/12 md:w-3/12'>
          <div className='text-xs uppercase text-red-400 font-medium mb-6'> Contact Us </div>
          <a href='tracydecy@gmail.com' className='block text-red-300 text-sm font-medium duration-700 hover:text-red-400'>
            ghalake@gmail.com </a>
          <a href='tel:+254797281961' className='block text-red-300 text-sm font-medium duration-700 hover:text-red-400'>
            +254 704 890 205</a>
        </div>
        <div className='p-5 w-full sm:w-4/12 md:w-3/12'>
          <div className='text-xs uppercase text-red-400 font-medium mb-6'> Business Hours </div>
          <p className='my-3 block text-red-300 text-sm font-medium duration-700'>
            Mon - Sunday: 10 AM - 11 PM
          </p>
        </div>
        <div className='p-5 w-full sm:w-4/12 md:w-3/12'>
          <div className='text-xs uppercase text-red-400 font-medium mb-6'> Follow Us </div>
          <div className='flex space-x-4'>
            <a href='www.facebook.com' className='text-red-300 hover:text-red-400'><FaFacebook /></a>
            <a href='www.twitter.com' className='text-red-300 hover:text-red-400'><IoLogoTwitter /></a>
            <a href='www.insagram.com' className='text-red-300 hover:text-red-400'><FaInstagramSquare /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}