import { BotMessageSquare } from 'lucide-react'
import { BatteryCharging } from 'lucide-react'
import { Fingerprint } from 'lucide-react'
import { ShieldHalf } from 'lucide-react'
import { PlugZap } from 'lucide-react'
import { GlobeLock } from 'lucide-react'

import user1 from '../assets/profile-pictures/user1.jpg'
import user2 from '../assets/profile-pictures/user2.jpg'
import user3 from '../assets/profile-pictures/user3.jpg'
import user4 from '../assets/profile-pictures/user4.jpg'
import user5 from '../assets/profile-pictures/user5.jpg'
import user6 from '../assets/profile-pictures/user6.jpg'

export const navItems = [
	{ label: 'Features', href: 'features' },
	{ label: 'Workflow', href: 'workflow' },
	{ label: 'Pricing', href: 'pricing' },
	{ label: 'Testimonials', href: 'testimonials' },
]

export const sloganPart1 = 'Echo Your'

export const sloganPart2 = 'Reality'

export const homeMainDescription =
	'EchoRealm transforms your imagination into immersive virtual experiences. With powerful yet intuitive tools, seamless collaboration, and stunning realism, creating interactive worlds has never been easier. Whether for entertainment, education, or business, EchoRealm elevates your vision and connects you to limitless possibilities.'

export const testimonials = [
	{
		user: 'Liam Carter',
		company: 'Nebula Enterprises',
		image: user1,
		text: "EchoRealm's VR platform allowed us to create stunning, interactive environments that improved both our creative process and client presentations. It's truly the future of digital interaction.",
	},
	{
		user: 'Sophia Turner',
		company: 'Eclipse Dynamics',
		image: user2,
		text: 'The immersive quality of EchoRealm blew us away. Our virtual reality simulations were seamless, giving us a competitive edge in demonstrating our technology to stakeholders.',
	},
	{
		user: 'Ethan Bennett',
		company: 'Astra Technologies',
		image: user3,
		text: 'Working with EchoRealm felt like stepping into another dimension. The realism and fluidity of their VR environments made our project a massive success.',
	},
	{
		user: 'Ava Wilson',
		company: 'Lunar Horizons',
		image: user4,
		text: 'The EchoRealm team delivered an unparalleled experience. Their attention to detail and ability to craft immersive worlds has taken our business operations to new heights.',
	},
	{
		user: 'Noah Mitchell',
		company: 'Cosmic Innovations',
		image: user5,
		text: "EchoRealm's platform exceeded all expectations. Their VR tools empowered us to create more engaging experiences for our customers, helping us stand out in a competitive market.",
	},
	{
		user: 'Isabella Reed',
		company: 'Galaxy Interactive',
		image: user6,
		text: "EchoRealm's VR technology redefined how we engage with our clients. Their intuitive platform made it easy for our team to create captivating virtual experiences that resonate.",
	},
]

export const features = [
	{
		icon: <BotMessageSquare />,
		text: 'Smart Messaging Integration',
		description:
			'Engage users with automated messaging features that can be integrated into your virtual environments for enhanced interaction.',
	},
	{
		icon: <Fingerprint />,
		text: 'Biometric Security Access',
		description:
			'Ensure secure entry to your virtual spaces with advanced biometric authentication, keeping your environments safe.',
	},
	{
		icon: <ShieldHalf />,
		text: 'Advanced Security Protocols',
		description:
			'Protect your VR assets and data with industry-leading security measures, including encryption and real-time monitoring.',
	},
	{
		icon: <BatteryCharging />,
		text: 'Optimized Performance',
		description:
			'Maximize the performance of your VR experiences with energy-efficient tools that keep everything running smoothly.',
	},
	{
		icon: <PlugZap />,
		text: 'Seamless Connectivity',
		description:
			'Connect your virtual environments with real-world applications and tools for a seamless workflow and enhanced collaboration.',
	},
	{
		icon: <GlobeLock />,
		text: 'Global Data Privacy',
		description:
			'Safeguard user data across the globe with compliance to international privacy standards and secure data storage.',
	},
]

export const checklistItems = [
	{
		title: 'Effortless Code Integration',
		description:
			'Easily integrate your VR apps into existing systems with EchoRealm’s flexible coding options.',
	},
	{
		title: 'Streamlined Code Review',
		description:
			'Ensure seamless performance with efficient code review processes tailored for VR projects.',
	},
	{
		title: 'AI-Enhanced VR Tools',
		description:
			'Leverage AI-driven tools to expedite content creation and optimize user engagement in virtual environments.',
	},
	{
		title: 'Instant Project Sharing',
		description:
			'Share your VR creations with clients and collaborators instantly, right from the EchoRealm dashboard.',
	},
]

export const pricingOptions = [
	{
		title: 'Free',
		price: '$0',
		features: [
			'Basic VR environments',
			'1 GB Storage',
			'Community support',
			'Basic analytics',
		],
	},
	{
		title: 'Pro',
		price: '$25',
		features: [
			'Advanced VR environments',
			'10 GB Storage',
			'Priority support',
			'Detailed analytics',
		],
	},
	{
		title: 'Enterprise',
		price: '$100',
		features: [
			'Custom VR environments',
			'Unlimited Storage',
			'Dedicated account manager',
			'Full analytics and insights',
		],
	},
]
