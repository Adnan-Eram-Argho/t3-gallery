import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

 function Topnav() {
  return (
       <nav className="flex items center justify-between w-full p-4 text-xl font-semibold border-b">
        <div>Gallery</div>
        <div>sign in</div>
        </nav>
 
  );
}


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="flex-col gap-4 flex">
        <Topnav></Topnav>
        {children}
      </body>
    </html>
  );
}
