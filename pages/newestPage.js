import React, {useState} from 'react'
import {Recentposts, Newestpost, Layout} from '../components/';

import { getNewestPost, getRecentPost } from '../services';

const newestPage = ({newPost, recentPosts }) => {
 
  return (
    <div className="container mx-auto mb-8">
        <div className='grid grid-cols-1 lg:grid-cols-12 md:gap-x-24 lg:divide-x-2 lg:divide-slate-700 lg:px-4'>
            <div className='lg:col-span-7'>
            {newPost.map((newPost, index) => <Newestpost newPost={newPost} key={newPost.title}/>)}
            </div>
            <div className='lg:col-span-5 md:px-20 px-10'>
                <div className='lg:sticky top-8 mt-12'>
                    <p className='lg:sticky text-xl border-b-2 border-text inline-block mb-12'>Vergangene Posts</p>
                    {recentPosts.map((recentPosts, index) => <Recentposts recentPosts={recentPosts} key={recentPosts.title}/>)}
                </div>
            </div>
        </div>
    </div>
  )
}

export default newestPage


newestPage.getLayout = function getLayout(page) {
    return (
      <Layout>
        {page}
      </Layout>
    )
}

export async function getStaticProps(){
    const newPost = (await getNewestPost()) || [];
    const recentPosts = (await getRecentPost(newPost[0].slug)) || [];
    return {
      props: {newPost: newPost, recentPosts: recentPosts},     
    }
}

   