"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
      >
        Current: {theme} | Toggle Theme
      </button>

      {/* Test div to see if dark mode styles are applied */}
      <div className="mt-2 p-4 bg-background text-foreground border border-border rounded-md">
        <p>Background should change color</p>
        <p className="text-muted-foreground">This text should be muted</p>
      </div>
    </div>
  );
}