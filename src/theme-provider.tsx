"use client";

import { ThemeProvider } from "next-themes";
import { ChildrenProps } from "./types";

export default function Theme({ children }: ChildrenProps) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
