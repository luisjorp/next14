import './ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <footer className="flex items-center justify-center py-10">
          Hecho con ❤️ por <a href="https://github.com/luisjorp"> LuisJo</a>
        </footer>
      </body>
    </html>
  );
}
