import React from 'react'
import {Layout} from '../../components'

import {getPost, getRecentPost } from '../../services';

import {Recentposts, Newestpost} from '../../components';

const Post = ({post, recentPosts}) => {
  return (
    <div className="container mx-auto mb-8">
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-x-24 lg:divide-x-2 lg:divide-slate-700 px-4'>
            <div className='lg:col-span-7 col-span-1'>
            {post.map((post, index) => <Newestpost newPost={post} key={post.title}/>)}
            </div>
            <div className='lg:col-span-5  col-span-1 px-10'>
              <div className='lg:sticky top-8 mt-12'>
                <p className='lg:sticky text-xl border-b-2 border-text inline-block mb-12'>Vergangene Posts</p>
                {recentPosts.map((recentPosts, index) => <Recentposts recentPosts={recentPosts} key={recentPosts.title}/>)}
              </div>  
            </div>
        </div>
    </div>
  )
}

export default Post

export async function getStaticProps( {params} ){
    const data = await getPost(params.slug)
    const recentPosts = (await getRecentPost(data[0].slug)) || [];
    return {
      props: {post: data, recentPosts},
    }
}

Post.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}