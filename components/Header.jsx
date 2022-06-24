import React from 'react'
import Link from 'next/link';

const Header = () => {
  return (
    <div className='bg-landingtext'>
        <div className='container mx-auto mb-12 px-4 md:px-0 py-6'>
            <div className='w-full inline-block'>
                <div className='md-float-left block flex justify-between items-center'>
                    <Link href='/'>
                        <span className='cursor-pointer md:text-4xl text-2xl'>
                            drapetomania.
                        </span>
                    </Link>
                    <div className='hidden md:inline-block'>
                        <Link href='/newestPage'>
                            <span className='cursor-pointer font-bold text-lg text-gray-600 hover:text-text pr-4'>
                                Neuster Post
                            </span>
                        </Link>
                        <Link href='/posts' >
                            <span className='cursor-pointer font-bold text-lg text-gray-600 hover:text-text pr-4'>
                                Alle posts
                            </span>
                        </Link>
                        <Link href='/aboutUs'>
                            <span className='cursor-pointer font-bold text-lg text-gray-600 hover:text-text'>
                                About Us
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
  )
}

export default Header