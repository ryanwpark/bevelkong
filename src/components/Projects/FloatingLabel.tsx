import { motion } from 'motion/react';
const FloatingLabel = ({ label }: { label: string }) => {
	return (
		<div className='text-center text-yellow-500 text-bold md:text-4xl text-2xl'>
			<motion.div
				initial={{ y: 0 }}
				animate={{ y: 10 }}
				transition={{
					repeat: Infinity,
					repeatType: 'reverse',
					duration: 2,
					ease: 'easeInOut',
				}}>
				↓{label}↓
			</motion.div>
		</div>
	);
};

export default FloatingLabel;
