import React from 'react'

const Newestpost = ({post}) => {
  return (
    <div>
        {post.title}
        {post.teaser}
    </div>

  )
}

export default Newestpost