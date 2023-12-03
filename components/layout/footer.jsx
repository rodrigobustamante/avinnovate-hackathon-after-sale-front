"use client";
import { Divider, Input, Textarea } from "@nextui-org/react";
import { useMediaQuery } from "../../lib/hooks/use-media-query";

export default function Footer() {
  const { isMobile, isTablet } = useMediaQuery();

  return (
    !isMobile &&
    !isTablet && (
      <div>
        <Divider className="my-4" />
        <footer className="flex w-full justify-evenly py-5 text-center">
          <div>
            <li className="list-none text-left">
              <ul className="mb-5">
                <a href="#" className="font-semibold">
                  Developers
                </a>
              </ul>
              <ul className="mb-5">
                <a href="#" className="text-gray-400">
                  @Dereemii
                </a>
              </ul>
              <ul className="mb-5">
                <a href="#" className="text-gray-400">
                  @Alais
                </a>
              </ul>
              <ul className="mb-5">
                <a href="#" className="text-gray-400">
                  @Rod
                </a>
              </ul>
              <ul className="mb-5">
                <a href="#" className="text-gray-400">
                  @Pancho
                </a>
              </ul>
              <ul>
                <a href="#" className="text-gray-400">
                  @Cris
                </a>
              </ul>
            </li>
          </div>

          <div>
            <li className="list-none text-left">
              <ul className="mb-5">
                <a href="#" className="font-semibold">
                  Company
                </a>
              </ul>
              <ul className="mb-5">
                <a href="#" className="text-gray-400">
                  About
                </a>
              </ul>
              <ul className="mb-5">
                <a href="#" className="text-gray-400">
                  Careers
                </a>
              </ul>
              <ul className="mb-5">
                <a href="#" className="text-gray-400">
                  Legal
                </a>
              </ul>
            </li>
          </div>

          <div>
            <li className="list-none text-left">
              <ul className="mb-5">
                <a href="#" className="font-semibold">
                  Social
                </a>
              </ul>
              <ul className="mb-5">
                <a href="#" className="text-gray-400">
                  Twitter
                </a>
              </ul>
              <ul className="mb-5">
                <a href="#" className="text-gray-400">
                  Instagram
                </a>
              </ul>
              <ul className="mb-5">
                <a href="#" className="text-gray-400">
                  GitHub
                </a>
              </ul>
            </li>
          </div>

          <div className="w-60 text-left">
            <label className="font-semibold">Contact Us</label>
            <Input
              className="my-5 border-transparent	"
              type="email"
              label="Email"
              style={{ border: "none", "--tw-ring-offset-shadow": "none" }}
            />
            <Textarea
              label="Subject..."
              disableAnimation
              disableAutosize
              style={{ border: "none", "--tw-ring-offset-shadow": "none" }}
              classNames={{
                base: "max-w-xs",
                input: "resize-y min-h-[70px]",
              }}
            />
          </div>
        </footer>
      </div>
    )
  );
}
