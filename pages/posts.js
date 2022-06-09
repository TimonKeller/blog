import React from 'react'
import AllPosts from '../components/AllPosts';

import { getAllPost } from '../services';

const posts = ({allPosts}) => {
  return (
    <div className="container mx-auto mb-8">
        <div className=' grid grid-cols-3 col-span-1 gap-x-24 px-4'>
            {allPosts.map((allPosts, index) => <AllPosts allPosts={allPosts} key={allPosts.title}/>)}
        </div>
    </div>
  )
}

export default posts

export async function getServerSideProps(){
    const data = await getAllPost()
    return {
      props: {allPosts: data}
    }
}