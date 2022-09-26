import { IPosts } from "../interfaces"
import { Api } from "../providers"

const getAllPosts = () => Api.get<IPosts[]>('/posts')

const createPost = (post: Pick<IPosts, 'title' | 'body' >) => Api.post<IPosts>('/posts', post)

const searchPost = () => Api.get<IPosts[]>('/posts?title=qui%20est%20esse')

const deletePost = (post: Pick<IPosts, 'id' >) => Api.delete<IPosts>('/posts')

export const PostService ={
  getAllPosts, createPost, searchPost, deletePost
}