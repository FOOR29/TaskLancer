import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/utils/ThemeProvider";
import { getTheme } from "@/utils/theme";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Tasklancer",
    description: "Tasklancer es una plataforma de gestión de tareas que te permite crear, asignar y gestionar tus tareas de manera eficiente.",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const initialTheme = await getTheme();
    return (
        <html lang="es" data-scroll-behavior="smooth">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <ThemeProvider initialTheme={initialTheme}>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
