'use client';

import { delay, wrap } from 'motion';
import { Typewriter } from 'motion-plus/react';
import { useState } from 'react';

export default function ContactTypeWriter({
	text = ['Build', 'Learn', 'Connect'],
}: {
	text?: string[];
}) {
	const [index, setIndex] = useState(0);

	const getLabelStyle = (): React.CSSProperties => ({
		fontSize:
			window.innerWidth < 640 ? 24 : window.innerWidth < 1024 ? 36 : 48,
	});

	const getCursorStyle = (): React.CSSProperties => ({
		background: '#ffffffff',
		width: 3,
		height:
			window.innerWidth < 640 ? 20 : window.innerWidth < 1024 ? 30 : 40,
	});

	const getAnimatingTextStyle = (): React.CSSProperties => ({
		fontSize:
			window.innerWidth < 640 ? 48 : window.innerWidth < 1024 ? 72 : 96,
		fontWeight: 700,
		lineHeight: 1,
		color: '#fbbf24',
	});

	return (
		<div className='text-center px-4'>
			<h2 className='flex flex-col sm:flex-row items-center justify-center'>
				<span style={getLabelStyle()}>Let's</span>
				<span className='sm:hidden'>&nbsp;</span>
				<span className='hidden sm:inline'>&nbsp;&nbsp;&nbsp;</span>
				<Typewriter
					as='div'
					cursorStyle={getCursorStyle()}
					onComplete={() => {
						delay(
							() => setIndex(wrap(0, text.length, index + 1)),
							1
						);
					}}
					textStyle={getAnimatingTextStyle()}>
					{text[index]}
				</Typewriter>
			</h2>
		</div>
	);
}
