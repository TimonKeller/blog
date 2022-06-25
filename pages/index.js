import Head from 'next/head'
import Link from 'next/link';

export default function Home() {
  return (
    <div className='bg-landingbg md:px-0 px-4'>
      <div className="container mx-auto">
        <Head>
          <title>Hier kommt noch einen Blog Namen</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='align-center justify-center flex flex-col h-screen overflow-hidden'>
          <h1 className='text-center font-bold text-landingtext text-6xl mb-8'>
            draptemonia.
          </h1>
          <div className='md:inline-block text-center'>
            <Link href='/newestPage'>
                <span className='cursor-pointer font-bold text-lg text-landingtext opacity-50 hover:opacity-100 pr-4'>
                    Neuster Post
                </span>
            </Link>
            <Link href='/posts' >
                <span className='cursor-pointer font-bold text-lg text-landingtext opacity-50 hover:opacity-100 pr-4'>
                    Alle posts
                </span>
            </Link>
            <Link href='/aboutUs'>
                <span className='cursor-pointer font-bold text-lg text-landingtext opacity-50 hover:opacity-100'>
                    About Us
                </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}



