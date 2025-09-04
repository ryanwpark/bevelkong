import AboutMe from './AboutMe';
import Projects from './Projects';
import ContactPage from './ContactPage';
import NavBar from '../components/Navbar';
import { useRef } from 'react';
import { useInView } from 'motion/react';
import { useEffect, useState } from 'react';
import Links from '../components/Links';

const LandingPage = () => {
	const introRef = useRef(null);
	const aboutRef = useRef(null);
	const contactRef = useRef(null);

	const introInView = useInView(introRef, { amount: 0.5, once: false });
	const aboutInView = useInView(aboutRef, { amount: 0.5, once: false });
	const contactInView = useInView(contactRef, { amount: 0.5, once: false });
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		if (introInView) {
			setActiveIndex(0);
		} else if (aboutInView) {
			setActiveIndex(1);
		} else if (contactInView) {
			setActiveIndex(2);
		}
	}, [introInView, aboutInView, contactInView, activeIndex]);

	return (
		<div
			id='landing'
			className='snap-y snap-mandatory overflow-y-scroll h-screen flex flex-col'>
			<NavBar activeIndex={activeIndex} />
			<Links />
			<section
				id='intro'
				ref={introRef}
				className='flex h-screen snap-start'>
				<AboutMe />
			</section>
			<section
				id='about me'
				ref={aboutRef}
				className='flex h-screen snap-start'>
				<Projects />
			</section>
			<section
				id='contact'
				ref={contactRef}
				className='flex h-screen snap-start'>
				<ContactPage />
			</section>
		</div>
	);
};

export default LandingPage;
