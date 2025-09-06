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
const MessageTyping = ({
	message = [
		{ text: '' },
		{ text: 'Web' },
		{ text: 'Web Devle', endDelay: 0.4 },
		{ text: 'Web Dev', endDelay: 0.4 },
		{ text: 'Web Developer' },
		{ text: 'Web Developer', endDelay: 8 },
	],
}: {
	message?: ScriptSegment[];
}) => {
	const [showMessage, setShowMessage] = useState(false);
	const [paragraphIndex, setParagraphIndex] = useState(0);
	const {
		text,
		endDelay = 0.4,
		backspace = 'character',
		backspaceFactor = 1,
		textcolor = 'text-white',
	} = message[paragraphIndex];
	const ref = useRef(null);
	const inView = useInView(ref, { amount: 0.5, once: false });
	useEffect(() => {
		setParagraphIndex(0);
		if (inView && !showMessage) {
			const timerId = setTimeout(() => {
				setShowMessage(true);
			}, 3000);
			return () => clearTimeout(timerId);
		} else {
			setShowMessage(false);
		}
	}, [inView]);

	return (
		<div
			ref={ref}
			className='message flex flex-col justify-center items-center text-2xl font-semi-bold will-change-transform'>
			{showMessage && (
				<Typewriter
					as='p'
					speed='fast'
					cursorStyle={cursor}
					textStyle={monospace}
					backspace={backspace}
					backspaceFactor={backspaceFactor}
					className={`${textcolor}`}
					onComplete={() => {
						delay(() => {
							setParagraphIndex(
								wrap(0, message.length, paragraphIndex + 1)
							);
						}, endDelay);
					}}>
					{text}
				</Typewriter>
			)}
		</div>
	);
};

export default MessageTyping;

const monospace: React.CSSProperties = {
	fontFamily: `"Azeret Mono", monospace`,
	// fontSize: '20px',
	// lineHeight: '20px',
	// color: 'var(--accent)',
	textAlign: 'left',
};

const cursor: React.CSSProperties = {
	background: '#ffffffff',
	width: 2,
};
