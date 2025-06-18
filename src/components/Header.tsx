// src/components/Header.tsx
"use client";

import Link from "next/link";
import { LogIn, UserCircle, LogOut } from "lucide-react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";
// 변경점
import { useAuth } from "@/context/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// 변경점

export function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">

      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block ml-10">게시판</span>
          </Link>
        </div>
        
        <div className="flex flex-1 items-center justify-end space-x-2">
              {/* 테마 토글 버튼 */}
              <ThemeToggle />
              {/* 변경점 */}
    {user ? (
            // 👈 로그인이 된 경우: DropdownMenu를 보여줍니다.
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <UserCircle className="size-5" />
                  <span className="sr-only">Open user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>{user.name}님</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {/* <DropdownMenuItem className="cursor-pointer">
                  마이페이지
                </DropdownMenuItem> */}
                <DropdownMenuItem
                  className="cursor-pointer text-red-500"
                  onClick={logout}
                >
                  <LogOut className="mr-2 size-4" />
                  <span>로그아웃</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

          ) : (
            // 👈 로그아웃 된 경우: 기존과 동일한 로그인 아이콘
            // 변경점

            <Link href="/login">
              <Button variant="ghost" size="icon">
                <LogIn className="size-5" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}