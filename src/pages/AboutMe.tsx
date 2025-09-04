import NameTyping from '../components/LandingPage/AboutMe/NameTyping';
import MessageTyping from '../components/LandingPage/AboutMe/MessageTyping';

const AboutMe = () => {
	return (
		<div
			id='about-me'
			className='flex flex-col h-screen w-full justify-center items-center text-6xl font-bold'>
			<NameTyping />
			<MessageTyping />
		</div>
	);
};

export default AboutMe;
