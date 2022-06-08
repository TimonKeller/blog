import Head from 'next/head'
import {Recentposts, Newestpost} from '../components/';
import { getNewestPost, getPosts } from '../services';

export default function Home({ posts, newPost }) {
  return (
    <div className="container mx-auto mb-8">
      <Head>
        <title>Hier kommt noch einen Blog Namen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-x-24 divide-x-2 divide-slate-700 px-4'>
        <div className='lg:col-span-8 col-span-1'>
          {newPost.map((newPost, index) => <Newestpost newPost={newPost} key={newPost.title}/>)}
        </div>
        <div className='lg:col-span-4 col-span-1 px-20'>
        <span className='text-2xl border-b-2 border-text'>
          Vergangene Posts
        </span>
          <div className='relative top-8'>
            {posts.map((posts, index) => <Recentposts posts={posts.node} key={posts.title}/>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps(){
  const newPost = (await getNewestPost()) || [];
  const posts = (await getPosts()) || [];
  return {
    props: {posts, newPost}
  }
}


