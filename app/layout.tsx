import Navbar from "@/components/layout/Navbar";
import Container from "@/components/layout/Container";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gray-50 text-gray-900">
        <Container>
          {children}
        </Container>
      </body>
    </html>
  );
}