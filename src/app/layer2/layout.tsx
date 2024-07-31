

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (

      <div>
        <nav>Hello</nav>
        {children}
        </div>

  );
}
