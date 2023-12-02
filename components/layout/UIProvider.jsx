"use client";
import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const UIProvider = ({ children }) => {
  const router = useRouter();
  return <NextUIProvider navigate={router.push}>{children}</NextUIProvider>;
};

export default UIProvider;
