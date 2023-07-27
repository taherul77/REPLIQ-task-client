"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/lib/components/Footer";
import { AuthProvider } from "@/lib/context/AuthProvider";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";
import Nav from "@/lib/components/Nav";

const inter = Inter({ subsets: ["latin"] });
const queryClient = new QueryClient();
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <Toaster position="top-center" reverseOrder={false} />
          <AuthProvider>
            <Nav></Nav>
            <div className="min-h-screen">{children}</div>
            <Footer></Footer>
          </AuthProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
