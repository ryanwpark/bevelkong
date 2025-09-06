import NameTyping from '../components/AboutMe/NameTyping';
import MessageTyping from '../components/AboutMe/MessageTyping';
import GoDown from '../components/AboutMe/goDown';

const AboutMe = () => {
	return (
		<div
			id='about-me'
			className='flex flex-col h-dvh w-full text-6xl font-bold'>
			<span className='h-1/2 flex items-end justify-center'>
				<NameTyping />
			</span>
			<span className='h-1/4 flex items-start justify-center'>
				<MessageTyping />
			</span>
			<span className='h-1/4 flex items-end justify-center'>
				<GoDown />
			</span>
		</div>
	);
};

export default AboutMe;
