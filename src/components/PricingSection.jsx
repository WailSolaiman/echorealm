import { CheckCircle2 } from 'lucide-react'

import { pricingOptions } from '../constants'

const PricingSection = () => {
	return (
		<section
			id='pricing'
			className='relative left-1/2 right-1/2 -translate-x-1/2 w-screen scroll-mt-28 border-b border-neutral-800/80 bg-neutral-950 px-6 pb-20 pt-16 lg:pt-20'>
			<div className='pointer-events-none absolute inset-x-0 top-0 h-px bg-neutral-800/80' />

			<div className='mx-auto max-w-6xl'>
				<div className='text-center'>
					<div className='inline-flex items-center gap-2 rounded-full bg-neutral-950/80 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-orange-400 ring-1 ring-orange-500/20'>
						Pricing
					</div>

					<h2 className='mx-auto mt-7 max-w-3xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl'>
						Plans that scale with your{' '}
						<span className='bg-gradient-to-r from-orange-400 via-orange-500 to-red-700 text-transparent bg-clip-text'>
							worlds
						</span>
					</h2>

					<p className='mx-auto mt-5 max-w-2xl text-pretty text-sm text-neutral-400 sm:text-base'>
						Start free, upgrade when you need more performance, storage, and
						priority support.
					</p>
				</div>

				<div className='mt-12 grid grid-cols-1 items-stretch gap-5 lg:grid-cols-3 lg:gap-6'>
					{pricingOptions.map((option) => {
						const isPro = option.title === 'Pro'

						return (
							<div
								key={option.title}
								className={[
									'relative overflow-hidden rounded-2xl border bg-neutral-950/35 p-7 shadow-[0_18px_70px_rgba(0,0,0,0.35)] transition duration-200',
									isPro
										? 'border-orange-500/35 lg:-translate-y-1 lg:scale-[1.03] lg:shadow-[0_26px_110px_rgba(0,0,0,0.55)]'
										: 'border-neutral-800 hover:-translate-y-0.5 hover:border-orange-500/25 hover:bg-neutral-950/55',
								].join(' ')}>
								{isPro && (
									<div className='pointer-events-none absolute inset-0'>
										<div className='absolute inset-0 bg-gradient-to-br from-orange-500/12 via-transparent to-red-600/12' />
									</div>
								)}

								<div className='relative'>
									<div className='flex items-start justify-between gap-4'>
										<div>
											<h3 className='text-base font-semibold tracking-tight text-neutral-100'>
												{option.title}
											</h3>
											<p className='mt-1 text-sm text-neutral-500 sm:text-base'>
												{option.title === 'Free' && 'Try EchoRealm with core tools.'}
												{option.title === 'Pro' && 'Best for teams shipping regularly.'}
												{option.title === 'Enterprise' &&
													'For organizations with custom needs.'}
											</p>
										</div>

										{isPro && (
											<div className='shrink-0 rounded-full bg-orange-500/15 px-3 py-1 text-xs font-semibold text-orange-300 ring-1 ring-orange-500/25'>
												Most popular
											</div>
										)}
									</div>

									<div className='mt-8 flex items-end gap-2'>
										<div className='text-5xl font-semibold tracking-tight text-neutral-50'>
											{option.price}
										</div>
										<div className='pb-1 text-sm text-neutral-500'>/month</div>
									</div>

									<ul className='mt-8 space-y-3'>
										{option.features.map((feature) => (
											<li key={`${option.title}-${feature}`} className='flex gap-3'>
												<div
													className={[
														'mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-lg ring-1',
														isPro
															? 'bg-orange-500/10 text-orange-300 ring-orange-500/25'
															: 'bg-neutral-900/70 text-orange-300 ring-white/10',
													].join(' ')}>
													<CheckCircle2 className='h-4 w-4' strokeWidth={1.75} />
												</div>
												<span className='text-sm leading-snug text-neutral-300 sm:text-base'>
													{feature}
												</span>
											</li>
										))}
									</ul>

									<div className='mt-10'>
										{option.title === 'Free' && (
											<a
												href='#'
												className='inline-flex h-12 w-full items-center justify-center rounded-xl border border-neutral-800 bg-neutral-950/40 text-sm font-semibold text-neutral-100 transition hover:border-orange-500/35 hover:bg-neutral-950/70'>
												Get started
											</a>
										)}

										{option.title === 'Pro' && (
											<a
												href='#'
												className='inline-flex h-12 w-full items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-orange-800 text-sm font-semibold text-white shadow-[0_14px_50px_rgba(249,115,22,0.22)] transition hover:shadow-[0_16px_60px_rgba(249,115,22,0.28)]'>
												Start Pro trial
											</a>
										)}

										{option.title === 'Enterprise' && (
											<a
												href='#'
												className='inline-flex h-12 w-full items-center justify-center rounded-xl border border-orange-500/35 bg-orange-500/10 text-sm font-semibold text-orange-100 transition hover:bg-orange-500/15'>
												Talk to sales
											</a>
										)}
									</div>
								</div>
							</div>
						)
					})}
				</div>

			</div>
		</section>
	)
}

export default PricingSection
