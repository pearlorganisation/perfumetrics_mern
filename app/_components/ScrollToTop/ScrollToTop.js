"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(pathname, "pathname");
  }, [pathname]);
  // Disable native scroll restoration (optional but recommended)
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  return null;
};
export default ScrollToTop;
