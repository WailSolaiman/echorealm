import { homeMainDescription, sloganPart1, sloganPart2 } from '../constants'
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'

const HeroSection = () => {
	const handleScrollTo = (event, targetId) => {
		event.preventDefault()
		const targetElement = document.getElementById(targetId)
		if (targetElement) {
			const offsetTop = targetElement.offsetTop - 80
			window.scrollTo({ top: offsetTop, behavior: 'smooth' })
		}
	}

	return (
		<section className='relative isolate overflow-x-clip pt-24 pb-10 lg:pt-28 lg:pb-14'>
			{/* ambient background */}
			<div className='pointer-events-none absolute inset-0 -z-10'>
				<div className='absolute -top-28 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-orange-500/30 via-red-600/20 to-fuchsia-500/20 blur-3xl' />
				<div className='absolute top-24 -left-24 h-64 w-64 rounded-full bg-orange-500/15 blur-3xl' />
				<div className='absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-red-500/10 blur-3xl' />
				<div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.15),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(185,28,28,0.12),transparent_55%)]' />
			</div>

			<div className='mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 text-center'>
				<div className='inline-flex max-w-[22rem] flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-full bg-neutral-950/80 px-3 py-1.5 text-xs text-neutral-200 ring-1 ring-white/10 sm:max-w-none sm:flex-nowrap sm:px-4 sm:py-2 sm:text-sm'>
					<span className='inline-flex h-2 w-2 rounded-full bg-orange-500 ring-2 ring-orange-500/25' />
					<span className='text-neutral-300'>New</span>
					<span className='text-neutral-500'>•</span>
					<span className='text-neutral-200'>
						Build immersive worlds in minutes
					</span>
				</div>

				<h1 className='text-balance text-3xl font-semibold tracking-tight sm:text-5xl lg:text-6xl'>
					{sloganPart1}{' '}
					<span className='bg-gradient-to-r from-orange-400 via-orange-500 to-red-700 text-transparent bg-clip-text'>
						{sloganPart2}
					</span>
				</h1>

				<p className='text-pretty text-sm text-neutral-400 max-w-2xl leading-relaxed sm:text-base'>
					{homeMainDescription}
				</p>

				<div className='flex w-full max-w-xl flex-col items-stretch justify-center gap-3 sm:max-w-none sm:flex-row sm:items-center'>
					<a
						href='#'
						className='w-full bg-gradient-to-r from-orange-500 to-orange-800 px-6 py-3 rounded-md text-center text-sm sm:w-auto sm:text-base font-medium shadow-[0_12px_40px_rgba(249,115,22,0.25)] hover:shadow-[0_14px_50px_rgba(249,115,22,0.32)] transition-shadow'>
						Start for free
					</a>
					<a
						href='#features'
						onClick={(e) => handleScrollTo(e, 'features')}
						className='w-full px-6 py-3 rounded-md text-center text-sm sm:w-auto sm:text-base font-medium border border-neutral-800 bg-neutral-900/40 hover:bg-neutral-900/70 transition-colors'>
						Explore features
					</a>
				</div>

				<div className='flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm text-neutral-400'>
					<div className='flex items-center gap-2'>
						<span className='font-semibold text-neutral-200'>
							120+
						</span>
						<span>templates</span>
					</div>
					<div className='h-4 w-px bg-neutral-800 hidden sm:block' />
					<div className='flex items-center gap-2'>
						<span className='font-semibold text-neutral-200'>
							Real‑time
						</span>
						<span>collaboration</span>
					</div>
					<div className='h-4 w-px bg-neutral-800 hidden sm:block' />
					<div className='flex items-center gap-2'>
						<span className='font-semibold text-neutral-200'>
							Secure
						</span>
						<span>by design</span>
					</div>
				</div>

				<div className='mt-2 grid w-full grid-cols-1 gap-5 md:grid-cols-2'>
					<div className='relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/40 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur'>
						<div className='absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-transparent to-red-500/10' />
						<video
							autoPlay
							loop
							muted
							playsInline
							className='relative h-full w-full object-cover'>
							<source src={video1} type='video/mp4' />
							Your browser does not support the video tag.
						</video>
					</div>
					<div className='relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/40 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur'>
						<div className='absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-transparent to-red-500/10' />
						<video
							autoPlay
							loop
							muted
							playsInline
							className='relative h-full w-full object-cover'>
							<source src={video2} type='video/mp4' />
							Your browser does not support the video tag.
						</video>
					</div>
				</div>
			</div>

			<div className='pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-neutral-950/70 to-transparent' />
		</section>
	)
}

export default HeroSection
