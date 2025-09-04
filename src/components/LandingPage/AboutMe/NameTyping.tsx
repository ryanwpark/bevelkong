'use client';
import { delay, wrap } from 'motion';
import { useInView } from 'motion/react';
import { Typewriter } from 'motion-plus/react';
import { useState, useEffect, useRef } from 'react';

interface ScriptSegment {
	text: string;
	endDelay?: number;
	backspace?: 'character' | 'word' | 'all';
	textcolor?: string;
	backspaceFactor?: number;
}
const NameTyping = ({
	name = [
		{ text: '' },
		{ text: 'RYAN PARK' },
		{ text: 'RYAN PARK', endDelay: 5 },
	],
}: {
	name?: ScriptSegment[];
}) => {
	const [paragraphIndex, setParagraphIndex] = useState(0);
	const {
		text,
		endDelay = 0.4,
		backspace = 'character',
		backspaceFactor = 1,
		textcolor = 'text-yellow-500',
	} = name[paragraphIndex];
	const ref = useRef(null);
	const inView = useInView(ref, { amount: 0.5, once: false });

	useEffect(() => {
		setParagraphIndex(0);
	}, [inView]);

	return (
		<div
			ref={ref}
			id='full-name'
			className='flex flex-col sm:h-[200px] justify-center items-center text-center md:text-8xl sm:text-6xl font-bold'>
			<Typewriter
				as='p'
				speed='slow'
				cursorStyle={cursor}
				textStyle={monospace}
				backspace={backspace}
				backspaceFactor={backspaceFactor}
				className={`${textcolor}`}
				onComplete={() => {
					delay(() => {
						setParagraphIndex(
							wrap(0, name.length, paragraphIndex + 1)
						);
					}, endDelay);
				}}>
				{text}
			</Typewriter>
		</div>
	);
};

export default NameTyping;

const monospace: React.CSSProperties = {
	fontFamily: `monospace`,
	textAlign: 'left',
};

const cursor: React.CSSProperties = {
	background: '#ffffffff',
	width: 2,
};
