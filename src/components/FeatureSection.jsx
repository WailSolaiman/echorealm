import { cloneElement, isValidElement } from 'react'

import { features } from '../constants'

const FeatureSection = () => {
	return (
		<section
			id='features'
			className='scroll-mt-28 border-t border-neutral-800/80 bg-neutral-950 pb-20 pt-10 lg:pt-16'>
			<div className='mx-auto max-w-6xl text-center'>
				<div className='inline-flex items-center gap-2 rounded-full bg-neutral-950/80 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-orange-400 ring-1 ring-orange-500/20'>
					Features
				</div>

				<h2 className='mx-auto mt-7 max-w-4xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl'>
					Build immersive VR experiences{' '}
					<span className='bg-gradient-to-r from-orange-400 via-orange-500 to-red-700 text-transparent bg-clip-text'>
						faster
					</span>
				</h2>

				<p className='mx-auto mt-5 max-w-2xl text-pretty text-sm text-neutral-400 sm:text-base'>
					Design, publish, and iterate with the fundamentals handled—so your
					team can focus on the world, not the wiring.
				</p>
			</div>

			<div className='mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
				{features.map((feature, index) => {
					const icon = isValidElement(feature.icon)
						? cloneElement(feature.icon, {
								className: 'h-5 w-5',
								strokeWidth: 1.75,
							})
						: feature.icon

					return (
						<div
							key={index}
							className='group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/40 p-6 shadow-[0_18px_70px_rgba(0,0,0,0.35)] transition duration-200 hover:-translate-y-0.5 hover:border-orange-500/35 hover:bg-neutral-950/60 hover:shadow-[0_22px_90px_rgba(0,0,0,0.45)]'>
							<div className='pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
								<div className='absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-red-600/10' />
							</div>

							<div className='relative flex items-start gap-4'>
								<div className='flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-neutral-900/80 text-orange-400 ring-1 ring-white/10'>
									{icon}
								</div>

								<div className='min-w-0 text-left'>
									<h3 className='text-base font-semibold tracking-tight text-neutral-100'>
										{feature.text}
									</h3>
									<p className='mt-3 text-sm leading-relaxed text-neutral-400 sm:text-base'>
										{feature.description}
									</p>
								</div>
							</div>
						</div>
					)
				})}
			</div>
		</section>
	)
}

export default FeatureSection
