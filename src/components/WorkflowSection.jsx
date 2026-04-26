import { CheckCircle2 } from 'lucide-react'

import codeImg from '../assets/code.jpg'
import { checklistItems } from '../constants'

const WorkflowSection = () => {
	return (
		<section
			id='workflow'
			className='relative left-1/2 right-1/2 -translate-x-1/2 w-screen scroll-mt-28 border-b border-neutral-800/80 bg-neutral-900 px-6 pb-20 pt-16 lg:pt-20'>
			<div className='pointer-events-none absolute inset-x-0 top-0 h-px bg-neutral-800/80' />
			<div className='mx-auto max-w-6xl'>
				<div className='text-center'>
					<div className='inline-flex items-center gap-2 rounded-full bg-neutral-950/60 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-orange-400 ring-1 ring-orange-500/20'>
						Workflow
					</div>

					<h2 className='mx-auto mt-7 max-w-4xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl'>
						Accelerate your{' '}
						<span className='bg-gradient-to-r from-orange-400 via-orange-500 to-red-700 text-transparent bg-clip-text'>
							creation workflow
						</span>
					</h2>

					<p className='mx-auto mt-5 max-w-2xl text-pretty text-sm text-neutral-400 sm:text-base'>
						Move from idea to interactive world with a repeatable process—clear
						steps, fewer bottlenecks, and faster iteration cycles.
					</p>
				</div>

				<div className='mt-12 grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-12'>
					<div className='relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/40 shadow-[0_18px_70px_rgba(0,0,0,0.35)]'>
						<div className='pointer-events-none absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-transparent to-red-600/10' />
						<img
							src={codeImg}
							alt='Product workflow preview'
							className='relative h-full w-full object-cover'
							loading='lazy'
						/>
					</div>

					<div className='space-y-4'>
						{checklistItems.map((item, index) => (
							<div
								key={index}
								className='group rounded-2xl border border-neutral-800 bg-neutral-950/35 p-5 transition duration-200 hover:-translate-y-0.5 hover:border-orange-500/35 hover:bg-neutral-950/55 hover:shadow-[0_18px_70px_rgba(0,0,0,0.35)]'>
								<div className='flex items-start gap-4'>
									<div className='flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-orange-500/10 text-orange-400 ring-1 ring-orange-500/20'>
										<CheckCircle2 className='h-5 w-5' strokeWidth={1.75} />
									</div>

									<div className='min-w-0'>
										<h3 className='text-base font-semibold tracking-tight text-neutral-100'>
											{item.title}
										</h3>
										<p className='mt-2 text-sm leading-relaxed text-neutral-400 sm:text-base'>
											{item.description}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default WorkflowSection
