import { Noto_Sans_Georgian } from "next/font/google";
import "./globals.css";
import { ChildrenProps } from "../types";
import Theme from "../theme-provider";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import CartContextProvider from "../context/CartContext";

const noto_Sans_Georgian = Noto_Sans_Georgian({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <UserProvider>
        <CartContextProvider>
          <body className={noto_Sans_Georgian.className}>
            <Theme>{children}</Theme>
          </body>
        </CartContextProvider>
      </UserProvider>
    </html>
  );
}
