"use client";

import { useScroll } from "../../lib/hooks/use-scroll";
import { useSignInModal } from "./sign-in-modal";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";

export default function NavBar() {
  const { SignInModal } = useSignInModal();

  return (
    <>
      <SignInModal />
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
