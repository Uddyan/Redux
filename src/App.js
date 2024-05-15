import React from 'react'
import { useState } from 'react'
import { useGetPostQuery,useGetPostsQuery,useCreatePostMutation,useDeletePostMutation,useUpdatePostMutation } from './services/api'

function App() {

  const {data, error, isLoading, isSuccess, isFetching} = useGetPostsQuery();


 

  return (
    <div>
        <h1>React RTK Query</h1>
        {isLoading && <h2> Loading...</h2>}
        {isFetching && <h2> Fetching...</h2>}
        {error && <h2> Error...</h2>}
        {isSuccess && (
          <div>
            {data?.map((posts) => (
              <div key={posts.id}>
                <span>{posts.title}</span>
                <p>{posts.author}</p>
              </div>
            ))}
          </div>
        )
        }
        <div>
          <AddPost/>

        </div>
    
    </div>
  )
}

export const AddPost = () => {
 const [addPost] = useCreatePostMutation();
  const [deletePost] = useDeletePostMutation();
  const [updatePost] = useUpdatePostMutation();
 const posts = {
    title: "New Post",
    "id": 101,
    "author": "New Author"
 }
const postupdate = {
  title: "Updated Post",
  "id": 101,
  "author": "Updated Author"
} 
const postdelete = {
  id: 101
} 
const handler = async () => {
  await addPost(posts);
}
const handlerDelete = async () => {
  await deletePost(postdelete.id);
}
const handlerUpdate = async () => {
  await updatePost(postupdate.id);
}

return (
  <>
  <button onClick={handler}>Add Post</button>
  <button onClick={handlerDelete}>Delete Post</button>
  <button onClick={handlerUpdate}>Update Post</button>
  </>
)
}
export default App
