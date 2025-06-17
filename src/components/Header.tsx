// src/components/Header.tsx
import Link from "next/link";
import { LogIn } from "lucide-react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">

      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block ml-10">게시판</span>
          </Link>
        </div>
        
        <div className="flex flex-1 items-center justify-end space-x-1">
              {/* 테마 토글 버튼 */}
              <ThemeToggle />
              {/* 로그인 아이콘 버튼 */}
              <Link href="/login">
                <Button variant="ghost" size="icon">
                  <LogIn className="size-5" />
                </Button>
              </Link>
        </div>
      </div>
    </header>
  );
}