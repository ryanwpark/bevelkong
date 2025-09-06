import type { ProjectDetails } from '../../assets/projectData';
import returnIcon from '../../assets/returnicon.png';

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
		<div className='w-full p-4' onClick={() => simulateEscapeKey()}>
			<span className='flex flex-row'>
				<img
					onClick={() => simulateEscapeKey()}
					src={returnIcon}
					alt='Return Icon'
					className='inline-block mr-2'
					style={{ width: '24px', height: '24px' }}
				/>
				<h2 className='text-4xl text-yellow-500 font-bold text-black p-5'>
					{project.title}
				</h2>
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
