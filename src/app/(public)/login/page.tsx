import Link from 'next/link'
import { ChevronLeftIcon } from '@/assets/icons/general-icons'
import AuthCard from '@/components/login/auth-card'
import AppLogo from '@/components/ui/app-logo'

export default function LoginPage() {
	return (
		<main className='items-cente relative mx-5 flex h-screen flex-col items-center justify-center text-neutral md:mx-14 lg:mx-0'>
			<Link
				href='/'
				className='app-transition absolute top-4 left-0 flex w-fit items-center gap-x-0.5 rounded-full border border-stone-500 py-1.25 pr-3.75 pl-2.5 hover:bg-stone-500/30 lg:left-5'
			>
				<ChevronLeftIcon />
				<span className='text-sm'>Back</span>
			</Link>

			<div className='mb-7'>
				<AppLogo iconSize={58} />
			</div>

			{/* Login content */}
			<AuthCard />
		</main>
	)
}
