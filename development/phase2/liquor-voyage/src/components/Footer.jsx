import React from 'react'

export default function Footer() {
  return (
    <div>
        <footer className='bg-gray-800 pt-10 sm:mt-10'>
            <div className="max-w-6xl m auto text-gray-800 flex flex-wrap justify-left">
                <div className='p-5 w-1/2 sm:w-4/12 md:w-3/12'>
                    <div className='text-xs uppercase text-gray-400 font-medium mb-6'> Location </div>
                    <p className='my-3 block text-gray-300 text-sm font-medium duration -700 '>
                    Nairobi, Kenya </p>
                </div>
            <div className='p-5 w-1/2 sm:w-4/12 md:w-3/12'>
                <div className='text-xs uppercase text-gray-400 font-medium mb-6'>
                    Contact Us
                </div>
                <a href='tracydecy@gmail.com'
                className='my-3 block text-gray-300 text-sm font-medium duration-700 hover:text-gray-400'>
                   tracydecy@gmail.com </a>
                <a href='tel:+254-797281961'
                className='my-3 block text-gray-300 text-sm font-medium duration-700 hover:text-gray-400'>
                +254-797 281 961 </a>
            </div>
            <div className='p-5 w-1/2 sm:w-4/12 md:w-3/12'>
                <div className='text-xs uppercase text-gray-400 font-medium mb-6'>
                    Location
                </div>
                <a href='tracydecy@gmail.com'
                className='my-3 block text-gray-300 text-sm font-medium duration-700 hover:text-gray-400'>
                   2nd Floor, Lavington Mall </a>
                <a href='tel:+254-797281961'
                className='my-3 block text-gray-300 text-sm font-medium duration-700 hover:text-gray-400'>
                Lavington, Nairobi </a>
            </div>
            </div>
        </footer>
    </div>
  )
}
