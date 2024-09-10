import React from 'react'

const getBlogArticle = async (id:string) => {
  const res = await fetch(`http://localhost:3000/api/blog/${id}`)

  const blogArticle = res.json();
  return blogArticle
}


const BlogArticlePage = async ({params}:{params:{id:string}}) => {
  const blogArticle = await getBlogArticle(params.id)

  return (
    <div className='container mx-auto py-5'>
      <div className='text-[50px]'>{blogArticle.title}</div>
      <p>{blogArticle.content}</p>
    </div>
  )
}

export default BlogArticlePage