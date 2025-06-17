export interface Comment {
  id: number;
  author: string;
  content: string;
}

export interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  likes: number;
  comments: Comment[];
}