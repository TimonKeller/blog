import React from 'react'
import {useRouter} from 'next/router'

import { getNewestPost, getPost, getRecentPost } from '../../services';

import {Recentposts, Newestpost} from '../../components';

const Post = ({post, recentPosts}) => {
  return (
    <div className="container mx-auto mb-8">
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-x-24 lg:divide-x-2 lg:divide-slate-700 px-4'>
            <div className='lg:col-span-7 col-span-1'>
            {post.map((post, index) => <Newestpost newPost={post} key={post.title}/>)}
            </div>
            <div className='lg:col-span-5  col-span-1 px-20'>
            <span className='text-xl border-b-2 border-text'>
                Vergangene Posts
            </span>
            <div className='relative top-8 '>
                {recentPosts.map((recentPosts, index) => <Recentposts recentPosts={recentPosts} key={recentPosts.title}/>)}
            </div>
            </div>
        </div>
    </div>
  )
}


export default Post

export async function getServerSideProps( {params} ){
    const data = await getPost(params.slug)
    const recentPosts = (await getRecentPost()) || [];
    return {
      props: {post: data, recentPosts},
    }
}