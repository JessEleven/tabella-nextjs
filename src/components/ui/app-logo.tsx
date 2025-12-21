import Image from 'next/image'
import { tv } from 'tailwind-variants'
import Logo from '../../../public/favicon.svg'

const appLogo = tv({
	base: 'flex items-center',
	variants: {
		display: {
			flex: 'flex-row items-center gap-x-1',
			block: 'flex-col items-center gap-y-1',
		},
		iconSize: {
			18: 'h-[18px] w-[18px]',
			28: 'h-[28px] w-[28px]',
			38: 'h-[38px] w-[38px]',
			58: 'h-[58px] w-[58px]',
		},
		fontSize: {
			12: 'text-sm',
			20: 'text-xl',
			24: 'text-2xl',
		},
	},
})

type AppLogoProps = {
	display?: 'flex' | 'block'
	showText?: boolean
	iconSize?: 18 | 28 | 38 | 58
	fontSize?: 12 | 20 | 24
}

export default function AppLogo({ display, showText, iconSize, fontSize }: AppLogoProps) {
	return (
		<div className={appLogo({ display })}>
			<Image
				src={Logo}
				alt='Logo'
				className={appLogo({ iconSize })}
				priority
			/>
			{showText && <h3 className={appLogo({ fontSize }) + ' ' + 'font-medium'}>Tabella</h3>}
		</div>
	)
}
