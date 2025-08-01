"use client"
import { Button } from '@/components/ui/button';
import { FC } from 'react';
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useSearchParams } from "next/navigation";
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';

interface SocialProps {
  className?: string;
}

const Social: FC<SocialProps> = () => {

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  // console.log("callbackUrl ",callbackUrl);
  

  const onClick = (provider:string) => {
    signIn(provider, {
      callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div className="flex flex-col items-center w-full gap-2 ">
      <Button
        size="lg"
        className="w-full cursor-pointer"
        variant="outline"
        onClick={() => onClick("google")}
      >
        <FcGoogle className="h-5 w-5" />
      </Button>
      <Button
        size="lg"
        className="w-full cursor-pointer"
        variant="outline"
        onClick={() => onClick("github")}
      >
        <FaGithub className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default Social;