// src/app/write/page.tsx
import Link from "next/link"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function WritePage() {
  return (
    <main className="container mx-auto max-w-4xl p-4 md:p-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">새 글 작성하기</CardTitle>
          <CardDescription>
            적당히 씁시다.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">제목</Label>
              <Input id="title" placeholder="글의 제목을 입력하세요." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="content">내용</Label>
              <Textarea
                id="content"
                placeholder="글의 내용을 입력하세요."
                className="min-h-[300px]" // 내용 입력란의 최소 높이를 지정
              />
            </div>
            

            <div className="flex justify-end gap-1">
                <Link href="/">
                <Button variant="outline" type="button">취소</Button>
                </Link>
                <Button type="submit">작성 완료</Button>
            </div>
            
          </form>
        </CardContent>
      </Card>
    </main>
  );
}