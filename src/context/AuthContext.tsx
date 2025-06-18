// src/context/AuthContext.tsx
//변경점 - 새로 생성한 파일

"use client";

import { createContext, useState, useContext, ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";

// User 타입 정의 (types/index.ts 옮겨도 됨)
interface User {
  name: string;
  email: string;
}

// Context가 제공할 값들의 타입 정의
interface AuthContextType {
  user: User | null;
  login: (userData: User) => void; // 임시 로그인 함수
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  // 로그아웃 함수 구현
  const logout = async () => {
    try {
      // 1. 백엔드에 로그아웃 API를 호출.
      //    session을 사용, credentials를 포함해야 서버가 세션을 인식.
      const response = await fetch('http://localhost:8081/api/members/logout', {
        method: 'POST',
        credentials: 'include', 
      });

      if (response.ok) {
        // 2. 프론트엔드의 사용자 상태를 null로 만들어 로그아웃 상태로 변경.
        setUser(null);
        alert("로그아웃 됬다.");
        router.push("/"); // 홈페이지로 이동
      } else {
        //에러 처리
        alert("로그아웃 실패했다.");
      }
    } catch (error) {
      console.error("로그아웃 중 에러 발생:", error);
      alert("로그아웃 중 에러가 발생.");
    }
  };
  
  // 임시 로그인 함수 (나중에 로그인 페이지에서 실제 API 호출로 대체)
  const login = (userData: User) => {
    setUser(userData);
  };


  const value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// 다른 컴포넌트에서 쉽게 사용할 수 있도록 커스텀 훅 생성
export function useAuth() {
  return useContext(AuthContext);
}