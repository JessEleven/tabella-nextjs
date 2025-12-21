import { headers } from 'next/headers'
import Link from 'next/link'
import { auth } from '@/libs/better-auth/auth'
import AppLogo from './ui/app-logo'

function Linkpage({ href, label }: { href: string; label: string }) {
	return (
		<Link
			href={href}
			className='app-transition rounded-full border border-stone-500 px-4 py-1.25 text-sm hover:bg-stone-500/30'
		>
			{label}
		</Link>
	)
}

export default async function Header() {
	const session = await auth.api.getSession({
		headers: await headers(),
	})
	// console.log('session data:', session)

	return (
		<header className='absolute top-0 w-full text-neutral lg:w-7/12'>
			<div className='flex h-16 items-center justify-between'>
				<AppLogo
					display='flex'
					showText
					iconSize={28}
					fontSize={20}
				/>

				<Linkpage
					href={session ? '/all-projects' : '/login'}
					label={session ? 'Go to projects' : 'Log in'}
				/>
			</div>
		</header>
	)
}
