import type { Metadata } from "next";
import { Montserrat } from "next/font/google"; 
import "./globals.css";

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
  preload: true
});

export const metadata: Metadata = {
  title: "Alisson Peixer",
  description: "Alisson Peixer - Desenvolvedor FullStack",
  icons: {
    other: [
      {rel:'stylesheet',url:'https://cdn.jsdelivr.net/gh/dheereshagrwal/coloured-icons@1.9.0/src/app/ci.min.css'},
      {rel:'stylesheet',url:'https://cdn.jsdelivr.net/gh/dheereshagrwal/coloured-icons@master/src/app/ci.min.css'},
    ]
  },
  keywords: [
    "alisson peixer",
    "description",
    "fullstack developer",
    "desenvolvedor fullstack javascript",
    "desenvolvedor fullstack typescript",
    "desenvolvedor fullstack react",
    "desenvolvedor fullstack nextjs",
    "desenvolvedor fullstack",
    "developer fullstack",
    "javascript developer",
    "typescript developer",
    "react developer",
    "nextjs developer",
    "tailwindcss",
    "javascript",
    "typescript",
    "react",
    "nextjs",
    "tailwindcss",
    "tailwindcss components",
    "tailwindcss utilities",
    "tailwindcss animations",
    "tailwindcss transitions",
    "tailwindcss responsive design",
    "tailwindcss custom properties",
    "tailwindcss custom utilities",
    "tailwindcss grid layout",
    "tailwindcss flexbox layout",
    "tailwindcss responsive design",
    "tailwindcss accessibility",
    "tailwindcss dark mode",
    "tailwindcss multi-class selectors",
    "tailwindcss pseudo-classes",
    "tailwindcss pseudo-elements",
    "tailwindcss nested selectors",
    "tailwindcss custom media queries",
    "tailwindcss custom breakpoints",
    "tailwindcss custom functions",
    "tailwindcss custom directives",
    "tailwindcss custom animations",
    "tailwindcss custom transitions",
    "tailwindcss custom keyframes",
    "tailwindcss custom utilities",
  ]  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={montserrat.className + " antialiased"}>
        {children}
      </body>
    </html>
  );
}
