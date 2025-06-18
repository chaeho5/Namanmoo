// src/app/login/page.tsx

import { LoginForm } from "@/components/login-form"

// 1. 함수가 export default로 선언되었는지 확인
export default function LoginPage() { 
  // 2. return 키워드와 괄호()가 있는지 확인
  return (
    <div className="flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <LoginForm />
      </div>
    </div>
  );
}