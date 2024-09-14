import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import WorkflowSection from './components/WorkflowSection'
import PricingSection from './components/PricingSection'

function App() {
	return (
		<div>
			<Navbar />
			<div className='max-w-7xl mx-auto pt-20 px-6'>
				<HeroSection />
				<FeatureSection />
				<WorkflowSection />
				<PricingSection />
			</div>
		</div>
	)
}

export default App
