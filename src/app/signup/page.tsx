// src/app/signup/page.tsx

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

export default function SignUpPage() {
  return (
    <main className="flex items-center justify-center min-h-screen">
    <Card className="overflow-hidden m-30">
    <div className="w-full max-w-md space-y-6 p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">회원가입</h1>
          <p className="text-gray-500 dark:text-gray-400">
            몇 가지 정보만 입력하고 시작해보세요.
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">이름</Label>
            <Input id="name" type="text" placeholder="홍길동" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">이메일</Label>
            <Input id="email" type="email" placeholder="m@example.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">비밀번호</Label>
            <Input id="password" type="password" required />
          </div>
          {/* <div className="space-y-2">
            <Label htmlFor="confirm-password">비밀번호 확인</Label>
            <Input id="confirm-password" type="password" required />
          </div> */}
          <Button type="submit" className="w-full">
            가입하기
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          이미 계정이 있으신가요?{" "}
          <Link href="/login" className="underline hover:text-primary">
            로그인
          </Link>
        </div>
      </div>
      </Card>
    </main>
  );
}