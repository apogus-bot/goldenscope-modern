import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Golden Scope Inspections | Houston Home Inspection',
  description:
    'Modern Houston home inspections with 24-hour reports, foundation elevation readings, phase inspections, and clear answers from licensed inspectors.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
