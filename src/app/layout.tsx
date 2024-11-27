import "~/styles/globals.css";
import "@uploadthing/react/styles.css";
import { ClerkProvider } from "@clerk/nextjs";
import { TopNav } from "./_component/TopNav";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "T3 Gallery",
  description:
    "Gallery App built with Next.JS, Typescript, Tailwind CSS, ShadcnUI, Clerk, Drizzle, Sentry, Posthog, Upstash, following The Modern React Tutorial by Theo (T3dotgg) && Initialized by pnpm create t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable} hydrated`}>
        <body className="vsc-initialized flex flex-col gap-4">
          <TopNav />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
