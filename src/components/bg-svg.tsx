export default function BgSvg() {
	return (
		<div className='pointer-events-none absolute inset-0 flex items-center justify-center'>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
				className='h-130 w-130 text-stone-700/10'
			>
				<path
					stroke='none'
					d='M0 0h24v24H0z'
					fill='none'
				/>
				<path d='M4 8l4 -4' />
				<path d='M14 4l-10 10' />
				<path d='M4 20l16 -16' />
				<path d='M20 10l-10 10' />
				<path d='M20 16l-4 4' />
			</svg>
		</div>
	)
}
