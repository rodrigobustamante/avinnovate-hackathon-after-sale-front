"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useScroll } from "../../lib/hooks/use-scroll";
import { useSignInModal } from "./sign-in-modal";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  useAuth,
  UserButton,
} from "@clerk/nextjs";
import { loadOneSignal } from '../../services';

export default function NavBar() {
  const { isLoaded, isSignedIn, userId } = useAuth();

  useEffect(() => {
    if (isSignedIn && userId && !window.OneSignal) {
      console.log({userId});
      loadOneSignal(userId);
    }
  }, [isLoaded]);
  const { SignInModal } = useSignInModal();
  const scrolled = useScroll(50);

  return (
    <>
      <SignInModal />
      <div
        className={`fixed top-0 flex w-full justify-center ${
          scrolled
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 w-full max-w-screen-xl items-center justify-between">
          <Link href="/" className="flex items-center font-display text-2xl">
            <Image
              src="/logo.png"
              alt="Precedent logo"
              width="30"
              height="30"
              className="mr-2 rounded-sm"
            ></Image>
            <p>Precedent</p>
          </Link>
          <div>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton />
            </SignedOut>
          </div>
        </div>
      </div>
    </>
  );
}
