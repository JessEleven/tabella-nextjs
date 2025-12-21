'use client'

import { GitHubIcon } from '@/assets/icons/brand-icons'
import { authClient } from '@/libs/better-auth/auth-client'

export function LoginWithGitHub() {
	const signInWithGithub = async () => {
		try {
			await authClient.signIn.social({
				provider: 'github',
				callbackURL: '/all-projects',
			})
		} catch (err) {
			console.error('Unexpected error:', err)
		}
	}

	return (
		<button
			type='submit'
			aria-label='GitHub'
			className='app-transition flex w-full cursor-pointer items-center justify-center gap-x-1.5 rounded-[7px] bg-neutral-100 py-2 hover:bg-neutral-200/90'
			onClick={signInWithGithub}
		>
			<GitHubIcon className='text-neutral-900' />
			<span className='font-medium'>Continue with GitHub</span>
		</button>
	)
}
