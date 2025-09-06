import { motion } from 'motion/react';
const goDown = () => (
	<div className='flex justify-center items-center pb-20 w-full will-change-transform'>
		<motion.div
			initial={{ y: 0, scale: 1, opacity: 1 }}
			animate={{ y: 30, scale: 1, opacity: 1 }}
			transition={{
				repeat: Infinity,
				repeatType: 'reverse',
				duration: 1,
				ease: 'easeInOut',
			}}>
			<svg
				className='mx-auto'
				width='50vw'
				height='24'
				viewBox='0 0 180 24'>
				<polyline
					points='0,0 90,21 180,0'
					fill='none'
					stroke='#fbbf24'
					strokeWidth='4'
					strokeLinecap='round'
				/>
			</svg>
		</motion.div>
	</div>
);

export default goDown;
