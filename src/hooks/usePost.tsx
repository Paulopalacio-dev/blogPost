import {useState, useCallback} from 'react'
import { IPosts } from '../interfaces'
import { PostService } from '../services'

export const usePost = () => {
const [posts, setPosts] = useState<IPosts[]>([])

  const getAllPosts = useCallback(async () => {
    const {status, data} = await PostService.getAllPosts();
  
    if (status !== 200) throw new Error();

    setPosts(data)

  }, [])

  const createPost = useCallback(async (post: Pick<IPosts, 'title' | 'body' >) => {
    const {status} = await PostService.createPost(post)
  
    if (status !== 200) throw new Error();

  }, [])

  const searchPost = useCallback(async (post: Pick<IPosts, 'title' | 'body' >) => {
    const {status, data} = await PostService.searchPost(post)
  
    if (status !== 200) throw new Error();


  }, [])

  return {
      posts,
      getAllPosts,
      createPost,
      searchPost,
    }
}