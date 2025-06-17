// src/context/PostContext.tsx

"use client";

import { createContext, useState, useContext, ReactNode } from "react";
import { Post, Comment } from "@/types";
import { MOCK_POSTS } from "@/data/mockData";


interface PostContextType {
  posts: Post[];
  addComment: (postId: number, commentContent: string) => void;
  toggleLike: (postId: number) => void; //좋아요
  editPost: (postId: number, newTitle: string, newContent: string) => void; // 수정
  deletePost: (postId: number) => void; // 삭제
}


const PostContext = createContext<PostContextType>({} as PostContextType);


export function PostProvider({ children }: { children: ReactNode }) {
  const [posts, setPosts] = useState<Post[]>(MOCK_POSTS);

  const addComment = (postId: number, commentContent: string) => {
    const newComment: Comment = {
      id: Date.now(),
      author: "현재사용자",
      content: commentContent,
    };

    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        
        return { ...post, comments: [...post.comments, newComment] };
      }
      return post;
    });

    setPosts(updatedPosts);
  };

  const toggleLike = (postId: number) => {
    const updatedPosts = posts.map((post)=>{
      if(post.id === postId){
        return {...post, likes: post.likes + 1};
      }
      return post;
    });
    setPosts(updatedPosts);
  }
  // 2. 게시물 수정 함수 구현
  const editPost = (postId: number, newTitle: string, newContent: string) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        // id가 일치하면 제목과 내용만 바꿔서 새 객체 반환
        return { ...post, title: newTitle, content: newContent };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  // 3. 게시물 삭제 함수 구현
  const deletePost = (postId: number) => {
    // filter를 사용해 id가 일치하지 않는 게시물만 남겨서 새 배열 생성
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
  };
  
  const value = { posts, addComment, toggleLike, editPost, deletePost  };

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
}

export function usePosts() {
  return useContext(PostContext);
}