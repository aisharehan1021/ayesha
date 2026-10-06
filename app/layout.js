import './globals.css';

export const metadata = { title: 'Threads | Clothing Shop' };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
