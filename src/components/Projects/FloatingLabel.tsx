import { motion } from 'motion/react';
const FloatingLabel = ({ label }: { label: string }) => {
	return (
		<div className='text-center text-yellow-500 text-bold md:text-4xl text-2xl'>
			<motion.div
				initial={{ scale: 0.99, opacity: 1 }}
				animate={{ scale: 1, opacity: 1 }}
				transition={{
					repeat: Infinity,
					repeatType: 'reverse',
					duration: 0.1,
					ease: 'easeInOut',
				}}>
				↓{label}↓
			</motion.div>
		</div>
	);
};

export default FloatingLabel;
