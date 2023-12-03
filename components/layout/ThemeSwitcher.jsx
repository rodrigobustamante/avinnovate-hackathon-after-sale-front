"use client";

import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isSelected, setIsSelected] = useState(theme === "dark");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isSelected) setTheme("dark");
    else setTheme("light");
  }, [isSelected]);

  if (!mounted) return null;

  return (
    <Switch
      isSelected={isSelected}
      onValueChange={setIsSelected}
      color="success"
    />
    // <div>
    //   The current theme is: {theme}
    //   <button onClick={() => setTheme("light")}>Light Mode</button>
    //   <button onClick={() => setTheme("dark")}>Dark Mode</button>
    // </div>
  );
}
