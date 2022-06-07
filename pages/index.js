import Head from 'next/head'
import {Recentposts, Newestpost} from '../components/';

const post = [
  { title: 'test', teaser: 'hallo das ist ein test teaser' },
  { title: 'test2', teaser: 'hallo das ist ein test teaser2' },
];

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Hier kommt noch einen Blog Namen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
        {post.map((post, index) => <Newestpost post={post} key={post.title}/>)}
        </div>
        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
            <Recentposts/>
          </div>
        </div>
      </div>
      
    </div>
  )
}

