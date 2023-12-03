"use client";
import { Link } from "@nextui-org/react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

const BottomNavigation = () => {
  const pathname = usePathname();
  const { theme } = useTheme();
  return (
    <div className="fixed bottom-0 left-0 z-50 h-16 w-full border-t border-gray-200 bg-white  lg:hidden ">
      <div className="mx-auto grid h-full max-w-lg grid-cols-3 font-medium">
        <Link
          href="/"
          className={clsx(
            "group inline-flex flex-col items-center justify-center px-5 text-inherit hover:bg-purple-300",
            { "bg-purple-300": pathname === "/" && theme === "light" },
            { "bg-purple-500": pathname === "/" && theme === "dark" },
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
            "group inline-flex flex-col items-center justify-center px-5 text-inherit hover:bg-purple-300 dark:hover:bg-gray-800",
            { "bg-purple-300": pathname === "/events" && theme === "light" },
            { "bg-purple-500": pathname === "/events" && theme === "dark" },
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
            />
          </svg>

          <span className="hidden text-sm text-gray-500 group-hover:text-blue-600 dark:text-gray-400 dark:group-hover:text-blue-500 sm:block">
            Events
          </span>
        </Link>
        <Link
          href="/notifications"
          className={clsx(
            "group inline-flex flex-col items-center justify-center px-5 text-inherit hover:bg-purple-300 dark:hover:bg-gray-800",
            {
              "bg-purple-300":
                pathname === "/notifications" && theme === "light",
            },
            {
              "bg-purple-500":
                pathname === "/notifications" && theme === "dark",
            },
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
