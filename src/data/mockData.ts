// src/data/mockData.ts

import { Post } from "@/types"; // 이전에 우리가 types/index.ts에 만들었던 Post 타입을 가져옵니다.

// MOCK_POSTS 라는 이름으로 가짜 게시물 데이터 배열을 만듭니다.
export const MOCK_POSTS: Post[] = [
  {
    id: 1,
    title: "나 너무 많은 일이 잇엇어",
    content: "힘들다 진짜",
    author: "룰루랄라 조로",
    createdAt: "2025-06-16",
    likes: 0,
    comments: [
      { id: 1, author: "김명석", content: "응원합니다!" },
      { id: 2, author: "밀짚모자", content: "너 해고" },
    ]
  },
  {
    id: 2,
    title: "아 분명 방구였는데",
    content: "아",
    author: "똥쟁이",
    createdAt: "2025-06-15",
    likes: 0,
    comments: []
  },
  {
    id: 3,
    title: "라라아 슨은 내 어머니가 되어 줬을지도 모르는 여성이었다",
    content: "유언",
    author: "샤아",
    createdAt: "2025-06-14",
    likes: 0,
    comments: [
        { id: 1, author: "안문호", content: "..!"}
    ]
  },
  {
    id: 4,
    title: "워씽시",
    content: "우도신치 유도나치 워도치",
    author: "워씽시",
    createdAt: "2025-06-17",
    likes: 0,
    comments: [
        { id: 1, author: "덩샤오핑", content: "..!"}
    ]
  },
];