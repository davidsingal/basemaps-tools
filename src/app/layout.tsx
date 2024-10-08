import { Inter } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';

import Providers from '@/app/providers';

import type { Metadata } from 'next';

import 'maplibre-gl/dist/maplibre-gl.css';
import '@maplibre/maplibre-gl-compare/dist/maplibre-gl-compare.css';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Basemaps Visualizer Tool',
  description: 'A tool to visualize a collection of basemaps for Maplibre and Mapbox projects.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
      {process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
      )}
    </html>
  );
}
