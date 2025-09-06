import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import type { ProjectDetails } from '../../assets/projectData';
import ProjectCard from './ProjectCard';
import OpenedProject from './OpenedProject';

export default function ProjectCatalog({
	projects,
}: {
	projects: ProjectDetails[];
}) {
	const [selected, setSelected] = useState<number | null>(null);
	useEscToClose(selected !== null, () => setSelected(null));

	return (
		<div className='flex justify-center items-center h-1/2 w-auto will-change-0'>
			<div className='bg-[oklch(85.063% 0.08406 217.226)] flex items-center p-8 rounded-xl w-full max-w-full'>
				<div className='grid grid-cols-2 grid-rows-2 gap-8 lg:gap-12 w-full h-[20vw]'>
					{projects.map((project, i) => (
						<div
							key={project.id}
							className='w-full h-full flex items-center justify-center'>
							<button
								onClick={() => setSelected(i)}
								className='w-full h-full'>
								<ProjectCard project={project} />
							</button>
							<AnimatePresence>
								{selected === i && (
									<motion.div
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										className='fixed inset-0 flex items-center justify-center bg-opacity-40 backdrop-blur-xl z-50'
										onClick={() => setSelected(null)}>
										<motion.div
											initial={{
												scale: 0.5,
												opacity: 0,
											}}
											animate={{ scale: 1, opacity: 1 }}
											exit={{ scale: 0.1, opacity: 1 }}
											className='bg-white p-2 sm:p-4 rounded-lg shadow-lg w-[95vw] max-w-full sm:w-[90vw] sm:max-w-md'
											onClick={(e) =>
												e.stopPropagation()
											}>
											<OpenedProject project={project} />
										</motion.div>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

function useEscToClose(isOpen: boolean, close: () => void) {
	useEffect(() => {
		function handleKeyDown(e: KeyboardEvent) {
			if (e.key === 'Escape' && isOpen) {
				close();
			}
		}

		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [isOpen, close]);
}
