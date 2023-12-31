"use client";
import Navbar from "@/lib/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/lib/components/Footer";
import { AuthProvider } from "@/lib/context/AuthProvider";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";




const inter = Inter({ subsets: ["latin"] });
const queryClient = new QueryClient();
 const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-white">
        <QueryClientProvider client={queryClient}>
          <Toaster position="top-center" reverseOrder={false} />
          <AuthProvider>
            <Navbar></Navbar>
            <div className="min-h-screen">{children}</div>
            <Footer></Footer>
          </AuthProvider>
        </QueryClientProvider>
        </div>
      </body>
    </html>
  );
}
