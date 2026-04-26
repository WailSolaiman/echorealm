import { navItems } from '../constants'

export const Footer = () => {
	const handleScroll = (event, targetId) => {
		event.preventDefault()
		const targetElement = document.getElementById(targetId)
		if (targetElement) {
			const offsetTop = targetElement.offsetTop - 80
			window.scrollTo({ top: offsetTop, behavior: 'smooth' })
		}
	}

	return (
		<footer className='relative left-1/2 right-1/2 -translate-x-1/2 w-screen border-t border-neutral-800/80 bg-neutral-950 px-6 pb-10 pt-14'>
			<div className='mx-auto max-w-6xl'>
				<div className='grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12'>
					<div className='md:col-span-5'>
						<div className='wordmark text-2xl font-semibold tracking-tight text-neutral-50'>
							Echo
							<span className='bg-gradient-to-r from-orange-400 to-red-600 text-transparent bg-clip-text'>
								Realm
							</span>
						</div>
						<p className='mt-4 max-w-md text-sm leading-relaxed text-neutral-400 sm:text-base'>
							Immersive VR creation, collaboration, and publishing—built for
							teams who care about speed, security, and polish.
						</p>
					</div>

					<div className='md:col-span-4'>
						<div className='text-sm font-semibold tracking-wide text-neutral-200'>
							Product
						</div>
						<ul className='mt-3 space-y-1.5'>
							{navItems.map((item) => (
								<li key={item.href}>
									<a
										href={`#${item.href}`}
										className='block text-sm leading-snug text-neutral-400 transition-colors hover:text-orange-400'
										onClick={(e) => handleScroll(e, item.href)}>
										{item.label}
									</a>
								</li>
							))}
						</ul>
					</div>

					<div className='md:col-span-3'>
						<div className='text-sm font-semibold tracking-wide text-neutral-200'>
							Legal
						</div>
						<ul className='mt-3 space-y-1.5'>
							<li>
								<a
									href='#'
									className='block text-sm leading-snug text-neutral-400 transition-colors hover:text-orange-400'>
									Privacy
								</a>
							</li>
							<li>
								<a
									href='#'
									className='block text-sm leading-snug text-neutral-400 transition-colors hover:text-orange-400'>
									Terms
								</a>
							</li>
							<li>
								<a
									href='#'
									className='block text-sm leading-snug text-neutral-400 transition-colors hover:text-orange-400'>
									Security
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className='mt-12 flex flex-col items-center gap-3 border-t border-neutral-800/80 pt-8 text-center text-sm text-neutral-600 sm:flex-row sm:items-center sm:justify-between sm:text-left'>
					<p className='w-full sm:w-auto'>© 2026 EchoRealm. All rights reserved.</p>
					<p className='w-full text-neutral-600 sm:w-auto'>
						Built for immersive experiences.
					</p>
				</div>
			</div>
		</footer>
	)
}
