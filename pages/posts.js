import React, {useEffect, useState} from 'react'
import AllPosts from '../components/AllPosts';
import { Header, Layout } from '../components';

import { getAllPost } from '../services';
import LoadingPage from '../components/LoadingPage';

const posts = ({allPosts}) => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoading(false), 9000)
  }, [])

  return (
    <>
    {loading === true ? (
      <>
      <Header/>
        <div className="container mx-auto mb-8">
          <div className='lg:divide-y-2 lg:divide-slate-700'>
            <div>
                <h1 className='text-text text-6xl text-center pb-8'>
                  Unsere Posts
                </h1>
                <p className='text-text text-xl text-center pb-6'>
                  In diesem Bereich finden Sie die neuesten Artikel, die von uns verfasst wurden. Wir laden Sie zum Lesen ein. Besuchen Sie unsere Website jeden Tag und es wird sicherlich eine nützliche und angenehme Zeit für Sie sein.
                </p>
            </div>
            <div className=' grid grid-cols-1 lg:grid-cols-3 col-span-1 gap-x-24 px-4 pt-12'>
                {allPosts.map((allPosts, index) => <AllPosts allPosts={allPosts} key={allPosts.title} setLoading={() => setLoading(true)} />)}
            </div>
          </div>
        </div>
      </>
    ) : (
      <div className="h-full">
        <LoadingPage/>
      </div>
    )}
    </>
  )
}

export default posts

export async function getStaticProps(){
    const data = await getAllPost()
    return {
      props: {allPosts: data}
    }
}

