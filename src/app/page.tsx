// src/app/page.tsx
"use client";

import Link from "next/link"
// import { MOCK_POSTS } from "@/data/mockData";
// import { Post } from "@/types";
import { PostItem } from "@/components/PostItem";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { usePosts } from "@/context/PostContext";


export default function HomePage() {

  const { posts } = usePosts();

  return (
    <main className="container mx-auto max-w-screen-xl p-4 md:p-8 flex gap-8">
      
      {/* 사이드 바 */}
      <aside className="w-80 shrink-0 hidden md:block">
        {/* 인기 게시글 카드 */}
        <Card>
          {/* <CardHeader>
            <CardTitle>인기 게시글</CardTitle>
          </CardHeader> */}
          <CardContent className="p-4">
            <Link href="/write" className="w-full">
            <Button className="w-full" variant="link">글쓰기</Button>
            </Link>
          </CardContent>
        </Card>

        {/* 광고 카드
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>광고</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-secondary h-32 flex items-center justify-center rounded-md">
              <p className="text-sm text-muted-foreground">광고 배너</p>
            </div>
          </CardContent>
        </Card> */}
      </aside>

      {/* 2. 메인 콘텐츠 코드를 아래로 내립니다. */}
      <div className="flex-grow">
        {/* <h1 className="text-3xl font-bold mb-8">전체 게시물</h1> */}
        <div className="space-y-4">
          {posts.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </div>
      </div>

    </main>
  );
}