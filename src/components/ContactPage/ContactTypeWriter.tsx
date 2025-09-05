'use client';

import { delay, wrap } from 'motion';
import { Typewriter } from 'motion-plus/react';
import { useState } from 'react';

export default function ContactTypeWriter({
	text = ['Contact', 'Contact Form'],
}: {
	text?: string[];
}) {
	const [index, setIndex] = useState(0);

	const getCursorStyle = (): React.CSSProperties => ({
		background: '#ffffffff',
		width:
			window.innerWidth < 640 ? 12 : window.innerWidth < 1024 ? 16 : 16,
		height:
			window.innerWidth < 640 ? 20 : window.innerWidth < 1024 ? 30 : 70,
	});

	const getAnimatingTextStyle = (): React.CSSProperties => ({
		fontSize:
			window.innerWidth < 640 ? 36 : window.innerWidth < 1024 ? 48 : 72,
		fontWeight: 700,
		lineHeight: 1,
		color: '#fbbf24',
	});

	return (
		<div className='text-center px-4 py-0 flex items-center justify-center'>
			<Typewriter
				as='div'
				cursorStyle={getCursorStyle()}
				onComplete={() => {
					delay(() => setIndex(wrap(0, text.length, index + 1)), 1);
				}}
				textStyle={getAnimatingTextStyle()}>
				{text[index]}
			</Typewriter>
		</div>
	);
}
