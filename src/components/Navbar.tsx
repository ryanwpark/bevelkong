'use client';

import { motion } from 'motion/react';

interface Page {
	title: string;
}

const pages: Page[] = [
	{ title: 'about me' },
	{ title: 'projects' },
	{ title: 'contact' },
];

function NavBarItem({
	page,
	isHighlighted,
}: {
	page: Page;
	isHighlighted: boolean;
}) {
	return (
		<motion.li
			className={`text-4xl leading-[0.4] text-black capitalize ${
				isHighlighted ? 'font-bold' : 'font-semi-bold'
			}`}
			initial={false}
			animate={{
				opacity: isHighlighted ? 1 : 0.2,
				scale: isHighlighted ? 1 : 0.9,
			}}
			transition={{
				duration: 0.1,
				ease: 'linear',
			}}>
			<span className={`${isHighlighted ? 'text-yellow-500' : ''}`}>
				{page.title}
			</span>
		</motion.li>
	);
}

export default function Navbar({ activeIndex }: { activeIndex: number }) {
	return (
		<div
			id='navbar'
			className='fixed top-5 left-10 z-50 flex flex-row items-start gap-4'>
			<h1 className='text-lg text-yellow-500 fixed p-0 ml-[-30px] left-0 top-12 font-semi-bold uppercase rotate-[-90deg]'>
				Directory
			</h1>
			<ul className='m-0 p-0 flex flex-col gap-5'>
				{pages.map((page, index) => (
					<NavBarItem
						key={page.title}
						page={page}
						isHighlighted={activeIndex === index}
					/>
				))}
			</ul>
		</div>
	);
}
