"use client";

import { memo, type ReactNode } from "react";
import { usePathname } from "next/navigation";

export const PageTransition = memo(function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <div key={pathname} className="animate-enter-in">
      {children}
    </div>
  );
});
