import { testimonials } from '../constants'

const TestimonialsSection = () => {
	return (
		<section
			id='testimonials'
			className='relative left-1/2 right-1/2 -translate-x-1/2 w-screen scroll-mt-28 border-b border-neutral-800/80 bg-neutral-900 px-6 pb-20 pt-16 lg:pt-20'>
			<div className='pointer-events-none absolute inset-x-0 top-0 h-px bg-neutral-800/80' />

			<div className='mx-auto max-w-6xl'>
				<div className='text-center'>
					<div className='inline-flex items-center gap-2 rounded-full bg-neutral-950/60 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-orange-400 ring-1 ring-orange-500/20'>
						Testimonials
					</div>

					<h2 className='mx-auto mt-7 max-w-4xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl'>
						What people are{' '}
						<span className='bg-gradient-to-r from-orange-400 via-orange-500 to-red-700 text-transparent bg-clip-text'>
							saying
						</span>
					</h2>

					<p className='mx-auto mt-5 max-w-2xl text-pretty text-sm text-neutral-400 sm:text-base'>
						Real feedback from teams building immersive experiences with EchoRealm.
					</p>
				</div>

				<div className='mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
					{testimonials.map((testimonial) => (
						<figure
							key={`${testimonial.user}-${testimonial.company}`}
							className='group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/35 p-7 shadow-[0_18px_70px_rgba(0,0,0,0.35)] transition duration-200 hover:-translate-y-0.5 hover:border-orange-500/25 hover:bg-neutral-950/55 hover:shadow-[0_22px_90px_rgba(0,0,0,0.45)]'>
							<div className='pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
								<div className='absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-red-600/10' />
							</div>

							<div className='relative'>
								<div className='flex items-center justify-between gap-4'>
									<div
										className='select-none text-4xl leading-none text-orange-500/25'
										aria-hidden='true'>
										“
									</div>
									<div className='flex items-center gap-1 text-orange-400'>
										{Array.from({ length: 5 }).map((_, i) => (
											<span key={i} className='text-base'>
												★
											</span>
										))}
									</div>
								</div>

								<blockquote className='mt-4 text-sm leading-relaxed text-neutral-200 sm:text-base'>
									{testimonial.text}
								</blockquote>
							</div>

							<figcaption className='relative mt-8 flex items-center gap-4'>
								<img
									className='h-12 w-12 rounded-full border border-neutral-700 object-cover'
									src={testimonial.image}
									alt={`${testimonial.user} headshot`}
								/>
								<div className='min-w-0 text-left'>
									<div className='truncate text-sm font-semibold tracking-tight text-neutral-100'>
										{testimonial.user}
									</div>
									<div className='truncate text-sm text-neutral-500'>
										{testimonial.company}
									</div>
								</div>
							</figcaption>
						</figure>
					))}
				</div>
			</div>
		</section>
	)
}

export default TestimonialsSection
