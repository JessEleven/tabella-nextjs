import { LoginWithGitHub } from './social-buttons'

export default function AuthCard() {
	return (
		<div className='flex w-full items-center justify-center md:w-xs'>
			<div className='w-full text-center text-neutral'>
				<h2 className='mb-5 font-semibold text-2xl'>Log in to Tabella</h2>
				<p className='mb-3 text-normal'>Create an account to get started.</p>

				<div className='font-normal text-neutral-800'>
					{/* Button for GitHub */}
					<LoginWithGitHub />
				</div>
			</div>
		</div>
	)
}
