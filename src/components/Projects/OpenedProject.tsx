import type { ProjectDetails } from '../../assets/projectData';
import returnIcon from '../../assets/returnicon.png';
import docsIcon from '../../assets/docs.png';

export default function OpenedProject({
	project,
}: {
	project: ProjectDetails;
}) {
	function simulateEscapeKey() {
		const escapeEvent = new KeyboardEvent('keydown', {
			key: 'Escape',
			code: 'Escape',
			bubbles: true,
			cancelable: true,
		});

		document.dispatchEvent(escapeEvent);
		// or window.dispatchEvent(escapeEvent);
	}
	return (
		<div
			className='w-full p-4 will-change-transform will-change-0'
			onClick={() => simulateEscapeKey()}>
			<span className='flex flex-row'>
				<img
					src={returnIcon}
					alt='Return Icon'
					className='inline-block w-1/10'
					style={{ width: '24px', height: '24px' }}
				/>
				<h2 className='flex text-4xl text-center text-yellow-500 inline-block font-bold text-black p-5 w-8/10'>
					{project.title}
				</h2>
				{project.link && (
					<a
						href={project.link}
						target='_blank'
						rel='noopener noreferrer'>
						<img
							src={docsIcon}
							alt='Return Icon'
							className='inline-block w-1/10'
							style={{ width: 'auto', height: 'auto' }}
						/>
					</a>
				)}
			</span>
			<ul className='mb-4'>
				{project.tasks.map((task, idx) => (
					<li key={idx} className='mb-2 text-gray-700'>
						• {task}
					</li>
				))}
			</ul>
			<div className='text-sm text-gray-500'>
				{project.company} — {project.location}
			</div>
			<div className='mt-2 text-xs text-gray-400'>
				{project.startDate} – {project.endDate}
			</div>
		</div>
	);
}
