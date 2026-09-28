import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
 title: 'Лесно — ландшафтное бюро в Екатеринбурге',
 description: 'Сады с характером Урала. Лесные, камерные и природные сады — коллекция концепций ландшафтного бюро Лесно.',
 robots: { index: false, follow: false },
};
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
 return <html lang="ru"><body>{children}</body></html>;
}
