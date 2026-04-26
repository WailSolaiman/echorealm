import { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'

const ScrollToTopButton = () => {
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		const onScroll = () => {
			setVisible(window.scrollY > 480)
		}

		onScroll()
		window.addEventListener('scroll', onScroll, { passive: true })
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	return (
		<button
			type='button'
			tabIndex={visible ? 0 : -1}
			className={[
				'fixed bottom-6 right-6 z-[45] inline-flex h-12 w-12 items-center justify-center rounded-full',
				'border border-orange-500/35 bg-gradient-to-r from-orange-500 to-orange-800 text-white shadow-[0_14px_50px_rgba(249,115,22,0.22)]',
				'transition duration-200 hover:shadow-[0_16px_60px_rgba(249,115,22,0.28)] active:translate-y-px',
				visible ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0 translate-y-2',
			].join(' ')}
			aria-label='Back to top'
			onClick={() => {
				window.scrollTo({ top: 0, behavior: 'smooth' })
			}}>
			<ChevronUp className='h-6 w-6' strokeWidth={1.75} />
		</button>
	)
}

export default ScrollToTopButton
