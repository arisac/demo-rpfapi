import React, { useEffect, useState } from 'react'
const devTo = 'https://dev.to/api/articles'

const Post = ({post}) => (
  <a href={post.url} key={post.id} className="post">
    <article>
      <img src={post.social_image} alt={post.title} />
      <div>
        <h1>{post.title}</h1>
        <p>{post.description}</p>
      </div>
    </article>
  </a>
)

const Posts = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch(devTo).then(r=> r.json()).then(setPosts)
  }, [])

  return posts.map(post => <Post post={post} />)
}

export default Posts