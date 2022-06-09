import React from 'react'
import moment from 'moment';
import Link from 'next/link';

const AllPosts = ({allPosts}) => {
  return (
    <div className='pb-12'>
      <div>
        <div>
          <div>
            <div className='text-xs mb'>
              {moment(allPosts.createdAt).format('MMM DD, YYYY')}
            </div>
            {<img 
            src={allPosts.contentfoto.url}
            alt={allPosts.title}
            className="object-top w-full lg:h-64 md:h-64 object-cover py-4 "
            />}
            <div className='text-2xl mb-2'>
              {allPosts.title}
            </div>
          </div>  
        </div>
            {allPosts.teaser}
            {allPosts.categories.map((category) => {
            category
          })}
          <div className='cursor-pointer pt-2 text-2xs '>
            <Link href={`/post/${allPosts.slug}`} key={allPosts.title}>
                <p className='border-b-2 inline-block'>
                  Mehr lesen
                </p>
            </Link>
          </div>
      </div>
    </div>
  )
}

export default AllPosts
