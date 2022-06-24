import React from 'react';
import { Layout } from '../components'

const aboutUs = () => {
    return (
        <div div className='container mx-auto mb-8'>
            <h1 className='text-text text-6xl text-center pb-8'>
                About us
            </h1>
            <p className='text-text text-xl text-center pb-6'>
            </p>
        </div>
    )
}

export default aboutUs

aboutUs.getLayout = function getLayout(page) {
    return (
      <Layout>
        {page}
      </Layout>
    )
}