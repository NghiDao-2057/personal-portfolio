import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Đào Nguyễn Uyển Nghi — Intern QA/QC Engineer Portfolio",
  description:
    "Portfolio cá nhân của Đào Nguyễn Uyển Nghi — Sinh viên năm 4 Kỹ thuật Phần mềm, ứng tuyển vị trí Intern QA/QC Engineer.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={inter.variable}>
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
