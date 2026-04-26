import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import WorkflowSection from './components/WorkflowSection'
import PricingSection from './components/PricingSection'
import TestimonialsSection from './components/TestimonialsSection'
import { Footer } from './components/Footer'
import ScrollToTopButton from './components/ScrollToTopButton'

function App() {
	return (
		<div id='top'>
			<Navbar />
			<HeroSection />
			<div className='max-w-7xl mx-auto px-6'>
				<FeatureSection />
				<WorkflowSection />
				<PricingSection />
				<TestimonialsSection />
				<Footer />
			</div>
			<ScrollToTopButton />
		</div>
	)
}

export default App
