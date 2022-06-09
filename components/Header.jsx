import React, {useContext} from 'react'
import Link from 'next/link';

const Header = () => {
  return (
    <div className='container mx-auto mb-8 px-4 md:px-0'>
        <div className='w-full inline-block py-8'>
            <div className='md-float-left block flex justify-between items-center'>
                <Link href='/'>
                    <span className='cursor-pointer font-bold text-4xl'>
                        BlogName
                    </span>
                </Link>
                <div className='hidden md:inline-block'>
                    <Link href='/'>
                        <span className='cursor-pointer font-bold text-lg text-gray-600 hover:text-text pr-4'>
                            Home
                        </span>
                    </Link>
                    <Link href='/'>
                        <span className='cursor-pointer font-bold text-lg text-gray-600 hover:text-text pr-4'>
                            About Us
                        </span>
                    </Link>
                    <Link href='/posts' >
                        <span className='cursor-pointer font-bold text-lg text-gray-600 hover:text-text'>
                            Alle posts
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header