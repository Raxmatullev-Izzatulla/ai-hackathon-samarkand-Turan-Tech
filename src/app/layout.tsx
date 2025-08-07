// src/app/layout.tsx

import type { Metadata } from 'next';
import MuiThemeProvider from '@/components/MuiThemeProvider'; // Yangi komponentni import qildik

export const metadata: Metadata = {
  title: 'Samarkand Tour Generator',
  description: 'Your personalized tour of Samarkand',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MuiThemeProvider>
          {children}
        </MuiThemeProvider>
      </body>
    </html>
  );
}