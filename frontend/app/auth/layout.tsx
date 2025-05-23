// app/components/AuthLayout.tsx
import { ReactNode } from "react";

type AuthLayoutProps = {
  title: string;
  children: ReactNode;
};

const AuthLayout = ({ title, children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">{title}</h1>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
