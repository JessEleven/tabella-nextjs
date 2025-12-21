import { GitHubIcon } from '@/assets/icons/brand-icons'

export default function Footer() {
	return (
		<footer className='absolute bottom-0 w-full bg-linear-to-r from-stone-800/25 via-stone-500 to-stone-800/25 pt-0.5 lg:w-7/12'>
			<div className='flex h-8 items-center justify-between bg-matte-black text-neutral-400'>
				<a
					href='https://github.com/JessEleven/tabella-nextjs'
					rel='noreferrer'
					target='_blank'
					aria-label='GitHub'
				>
					<GitHubIcon className='h-4 w-4' />
				</a>
				<span className='text-xs'>Built by Jesús R.</span>
			</div>
		</footer>
	)
}
