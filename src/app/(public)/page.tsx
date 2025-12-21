import pkg from '@/../package.json'
import BgSvg from '@/components/bg-svg'
import Footer from '@/components/footer'
import Header from '@/components/header'

export default function HomePage() {
	return (
		<main className='relative mx-5 flex h-screen flex-col items-center justify-center overflow-hidden text-neutral md:mx-14 lg:mx-0'>
			<Header />

			{/* Background SVG */}
			<BgSvg />

			{/* Content */}
			<section className='relative z-10 flex max-w-2xl flex-col items-center gap-y-5 text-center'>
				<span className='text-teal-500/75 text-xs uppercase tracking-widest'>
					Version: {pkg.version}
				</span>

				<h1 className='font-semibold text-3xl leading-tight sm:text-4xl'>
					Design databases visually.
					<br />
					Write SQL confidently.
				</h1>

				<p className='max-w-md text-neutral-400 text-sm sm:text-base'>
					Write SQL and instantly see your schema come to life. No friction. No guessing. Just
					structure.
				</p>
			</section>

			{/* Footer */}
			<Footer />
		</main>
	)
}
