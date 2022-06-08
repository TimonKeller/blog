import React from 'react';
import moment from 'moment';
import Link from 'next/link';



const Newestpost = ({posts}) => {
  return (
    <div className='p-0 lg:p-8 pb-12 mb-8'>
      <div className='mb-2'>
        {moment(posts.createdAt).format('MMM DD, YYYY')}
      </div>
      <div className='text-5xl mb-10'>
        {posts.title}
      </div>
     {/*  <div>
        {posts.categories[0].name}
      </div> */}
      <div className='relative overflow-hidden pb-80 mb-6'>
          <img 
          src={posts.contentfoto.url}
          alt={posts.title}
          className="object-top absolute h-80 w-full object-cover"
          />
      </div>
    </div>

  )
}

export default Newestpost