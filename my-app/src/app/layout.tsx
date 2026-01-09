import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={"bg-neutral-900 text-gray-300 "}
      >
        {children}
      </body>
    </html>
  );
}
