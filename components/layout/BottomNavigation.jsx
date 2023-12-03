"use client";
import { Link } from "@nextui-org/react";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const BottomNavigation = () => {
  const pathname = usePathname();
  return (
    <div className="fixed bottom-0 left-0 z-50 h-16 w-full border-t border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-700 lg:hidden">
      <div className="mx-auto grid h-full max-w-lg grid-cols-4 font-medium">
        <Link
          href="/"
          className={clsx(
            "group inline-flex flex-col items-center justify-center px-5 text-inherit hover:bg-gray-100 dark:hover:bg-gray-800",
            { "bg-gray-100": pathname === "/" },
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-6 w-6"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            ></path>
          </svg>

          <span className="hidden text-sm text-gray-500 group-hover:text-blue-600 dark:text-gray-400 dark:group-hover:text-blue-500 sm:block">
            Home
          </span>
        </Link>
        <Link
          href="/events"
          className={clsx(
            "group inline-flex flex-col items-center justify-center px-5 text-inherit hover:bg-gray-100 dark:hover:bg-gray-800",
            { "bg-gray-100": pathname === "/events" },
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-6 w-6"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
            ></path>
          </svg>

          <span className="hidden text-sm text-gray-500 group-hover:text-blue-600 dark:text-gray-400 dark:group-hover:text-blue-500 sm:block">
            Events
          </span>
        </Link>
        <Link
          href="/notifications"
          className={clsx(
            "group inline-flex flex-col items-center justify-center px-5 text-inherit hover:bg-gray-100 dark:hover:bg-gray-800",
            { "bg-gray-100": pathname === "/notifications" },
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-6 w-6"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
            ></path>
          </svg>

          <span className="hidden text-sm text-gray-500 group-hover:text-blue-600 dark:text-gray-400 dark:group-hover:text-blue-500 sm:block">
            Notifications
          </span>
        </Link>
      </div>
    </div>
  );
};

export default BottomNavigation;
