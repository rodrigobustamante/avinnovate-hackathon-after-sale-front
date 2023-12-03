"use client";

import { useEffect } from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  useAuth,
  UserButton,
} from "@clerk/nextjs";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";

import { loadOneSignal } from '../../services';

export default function NavBar() {
  const { isLoaded, isSignedIn, userId } = useAuth();

  useEffect(() => {
    if (isSignedIn && userId && !window.OneSignal) {
      loadOneSignal(userId);
    }
  }, [isLoaded]);

  return (
    <>
      <Navbar className="lg:items-center">
        <NavbarBrand>
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
        <div className="flex justify-between lg:items-center">
          <NavbarContent className="hidden gap-4 lg:flex lg:justify-end lg:mx-3" justify="end">
            <NavbarItem>
              <Link color="foreground" href="#">
                Settings
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href="#" aria-current="page">
                Events
              </Link>
            </NavbarItem>
            <NavbarItem className="flex">
              <Link color="foreground" href="#">
                Notifications
                <div className="flex mx-1">
                  <button class="inline-block relative">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                    </svg>
                    <span class="animate-ping absolute top-1 right-0.5 block h-1 w-1 rounded-full ring-2 ring-green-400 bg-green-600"></span>
                  </button>
                </div>
              </Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end">
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton />
            </SignedOut>
          </NavbarContent>
        </div>

      </Navbar>
    </>
  );
}
