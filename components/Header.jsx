import React, {useContext} from 'react'
import Link from 'next/link';

const Header = () => {
  return (
    <div className='container mx-auto mb-8'>
        <div className='w-full inline-block py-8'>
            <div className='md-float-left block'>
                <Link href='/'>
                    <span className='cursor-pointer font-bold text-4xl'>
                        BlogName
                    </span>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Header