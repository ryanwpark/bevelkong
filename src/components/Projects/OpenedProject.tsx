import type { ProjectDetails } from '../../assets/projectData';

export default function OpenedProject({
	project,
}: {
	project: ProjectDetails;
}) {
	return (
		<div className='w-full'>
			<h2 className='text-4xl text-yellow-500 text-center font-bold text-black p-5'>
				{project.title}
			</h2>
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
