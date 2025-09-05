import { motion } from 'motion/react';
const FloatingLabel = ({ label }: { label: string }) => {
	return (
		<motion.div
			initial={{ y: 0 }}
			animate={{ y: 10 }}
			transition={{
				repeat: Infinity,
				repeatType: 'reverse',
				duration: 2,
				ease: 'easeInOut',
			}}>
			<h1 className='text-center text-yellow-500 text-bold md:text-4xl text-2xl'>
				↓{label}↓
			</h1>
		</motion.div>
	);
};

export default FloatingLabel;
