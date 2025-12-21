import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import '../assets/globals.css'

const roboto = Roboto({
	variable: '--font-roboto',
	subsets: ['latin'],
	weight: ['400', '500', '700', '900'],
	display: 'swap',
})

export const metadata: Metadata = {
	title: 'Tabella',
	description: 'Tabella created with next.js',
	icons: [{ rel: 'icon', url: '/favicon.svg' }],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='en'>
			<body
				className={`${roboto.className} bg-matte-black antialiased`}
				suppressHydrationWarning
			>
				{children}
			</body>
		</html>
	)
}
