"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="glass fixed right-4 top-4 z-50 flex size-10 items-center justify-center rounded-full text-muted-foreground shadow-sm transition-colors hover:text-foreground sm:right-6 sm:top-6"
    >
      {/* Evita divergência entre servidor e cliente antes da hidratação */}
      {mounted ? (
        isDark ? (
          <Sun className="size-[1.05rem]" />
        ) : (
          <Moon className="size-[1.05rem]" />
        )
      ) : (
        <span className="size-[1.05rem]" />
      )}
    </button>
  );
}
