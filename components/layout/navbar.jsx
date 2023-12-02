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
      <Navbar>
        <NavbarBrand>
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
        <NavbarContent className="hidden gap-4 lg:flex" justify="center">
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
          <NavbarItem>
            <Link color="foreground" href="#">
              Notifications
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
      </Navbar>
    </>
  );
}
