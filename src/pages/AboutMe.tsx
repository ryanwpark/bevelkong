import NameTyping from '../components/AboutMe/NameTyping';
import MessageTyping from '../components/AboutMe/MessageTyping';

const AboutMe = () => {
	return (
		<div
			id='about-me'
			className='flex flex-col h-screen w-full text-6xl font-bold'>
			<span className='h-1/2 flex items-end justify-center'>
				<NameTyping />
			</span>
			<span className='h-1/2 h-1/2 flex items-start justify-center'>
				<MessageTyping />
			</span>
		</div>
	);
};

export default AboutMe;
