import React, {useState, useEffect} from 'react'
import moment from 'moment';
import Link from 'next/link';

import { getCategories } from '../services';

const Recentposts = ({posts}) => {
  return (
    <div>
      <div className='pb-12 px-4'>
        <div className='flex items-center justify-between gap-2'>
          <div className='flex-col'>
            <div className='text-xs mb'>
              {moment(posts.createdAt).format('MMM DD, YYYY')}
            </div>
            <div className='text-2xl mb-2'>
              {posts.title}
            </div>
          </div>
            {<img 
            src={posts.contentfoto.url}
            alt={posts.title}
            className="rounded-full object-top w-16 h-16 object-cover  "
            />}
        </div>
          {posts.teaser}
          {posts.categories.map((category) => {
            category
          })}
  </div>
    </div>
  )
}

export default Recentposts