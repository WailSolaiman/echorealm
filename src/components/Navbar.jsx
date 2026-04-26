import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

import { navItems } from '../constants'

const Navbar = () => {
	const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)

	const toggleNavbar = () => {
		setMobileDrawerOpen((open) => !open)
	}

	const closeMobileMenu = () => setMobileDrawerOpen(false)

	useEffect(() => {
		if (!mobileDrawerOpen) return

		const previousOverflow = document.body.style.overflow
		document.body.style.overflow = 'hidden'

		return () => {
			document.body.style.overflow = previousOverflow
		}
	}, [mobileDrawerOpen])

	useEffect(() => {
		const media = window.matchMedia('(min-width: 1024px)')

		const onChange = () => {
			if (media.matches) closeMobileMenu()
		}

		media.addEventListener('change', onChange)
		return () => media.removeEventListener('change', onChange)
	}, [])

	useEffect(() => {
		if (!mobileDrawerOpen) return

		const onKeyDown = (event) => {
			if (event.key === 'Escape') closeMobileMenu()
		}

		window.addEventListener('keydown', onKeyDown)
		return () => window.removeEventListener('keydown', onKeyDown)
	}, [mobileDrawerOpen])

	const handleScroll = (event, targetId) => {
		event.preventDefault()
		const targetElement = document.getElementById(targetId)
		if (targetElement) {
			const offsetTop = targetElement.offsetTop - 80
			window.scrollTo({
				top: offsetTop,
				behavior: 'smooth',
			})
		}
		closeMobileMenu()
	}

	const handleScrollToTop = (event) => {
		event.preventDefault()
		window.scrollTo({ top: 0, behavior: 'smooth' })
		closeMobileMenu()
	}

	return (
		<nav className='relative sticky top-0 z-[80] border-b border-neutral-800/80 bg-neutral-950'>
			<div className='mx-auto max-w-7xl px-6'>
				<div className='grid h-16 grid-cols-2 items-center gap-3'>
					<div className='flex items-center justify-self-start'>
						<a
							href='#top'
							onClick={handleScrollToTop}
							className='wordmark text-2xl font-semibold tracking-tight text-neutral-50 lg:text-3xl'>
							Echo
							<span className='bg-gradient-to-r from-orange-400 to-red-600 text-transparent bg-clip-text'>
								Realm
							</span>
						</a>
					</div>
					<div className='hidden justify-self-end lg:flex'>
						<div className='flex items-center gap-1 rounded-full border border-neutral-800 bg-neutral-900 p-1'>
							{navItems.map((item) => (
								<a
									key={item.href}
									href={`#${item.href}`}
									className='rounded-full px-4 py-2 text-sm font-medium text-neutral-300 transition-colors hover:bg-neutral-950 hover:text-orange-400'
									onClick={(e) => handleScroll(e, item.href)}>
									{item.label}
								</a>
							))}
						</div>
					</div>
					<div className='flex justify-self-end lg:hidden'>
						<button
							type='button'
							className='inline-flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-950 text-neutral-100 shadow-sm transition hover:border-orange-500/35 hover:bg-neutral-900'
							aria-label={mobileDrawerOpen ? 'Close menu' : 'Open menu'}
							aria-expanded={mobileDrawerOpen}
							onClick={toggleNavbar}>
							{mobileDrawerOpen ? <X className='h-5 w-5' /> : <Menu className='h-5 w-5' />}
						</button>
					</div>
				</div>
			</div>

			{mobileDrawerOpen && (
				<div className='lg:hidden'>
					<button
						type='button'
						className='fixed inset-0 z-40 bg-black/60 backdrop-blur-sm'
						aria-label='Close menu'
						onClick={closeMobileMenu}
					/>

					<div
						id='mobile-menu'
						role='dialog'
						aria-modal='true'
						className='fixed inset-x-0 top-16 z-[90] px-4 pb-6'>
						<div
							className='mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 shadow-[0_24px_90px_rgba(0,0,0,0.55)]'
							onClick={(e) => e.stopPropagation()}>
							<div className='flex items-center justify-between border-b border-neutral-800/80 px-5 py-4'>
								<div className='wordmark text-lg font-semibold tracking-tight text-neutral-50'>
									Echo
									<span className='bg-gradient-to-r from-orange-400 to-red-600 text-transparent bg-clip-text'>
										Realm
									</span>
								</div>
								<button
									type='button'
									className='inline-flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-950 text-neutral-100 transition hover:border-orange-500/35 hover:bg-neutral-900'
									aria-label='Close menu'
									onClick={closeMobileMenu}>
									<X className='h-5 w-5' />
								</button>
							</div>

							<div className='px-2 py-2'>
								<ul className='divide-y divide-neutral-800/80'>
									{navItems.map((item) => (
										<li key={item.href}>
											<a
												href={`#${item.href}`}
												className='block px-4 py-4 text-lg font-semibold tracking-tight text-neutral-100 transition-colors hover:text-orange-400 active:text-orange-400'
												onClick={(e) => handleScroll(e, item.href)}>
												{item.label}
											</a>
										</li>
									))}
								</ul>
							</div>

						</div>
					</div>
				</div>
			)}
		</nav>
	)
}

export default Navbar
