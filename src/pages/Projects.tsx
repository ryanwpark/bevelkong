import ProjectCatalog from '../components/Projects/ProjectCatalog';
import {
	ReactProjects,
	PythonProjects,
	JavaProjects,
	SwiftProjects,
} from '../assets/projectData';
import * as motion from 'motion/react-client';

const Projects = () => {
	return (
		<div className='flex justify-center items-center md:pt-25 sm:pt-10 h-screen w-screen'>
			<div className='bg-[oklch(85.063%_0.08406_217.226)] w-[95vw] h-[80vh] flex items-center justify-center'>
				<div className='grid grid-cols-2 grid-rows-2 w-full h-full place-items-center'>
					<span>
						<motion.div
							initial={{ y: 0 }}
							animate={{ y: 30 }}
							transition={{
								repeat: Infinity,
								repeatType: 'reverse',
								duration: 2,
								ease: 'easeInOut',
							}}>
							<h1 className='text-center text-yellow-500 text-bold md:text-6xl text-4xl'>
								↓React↓
							</h1>
						</motion.div>
						<ProjectCatalog projects={ReactProjects} />
					</span>
					<span>
						<motion.div
							initial={{ y: 0 }}
							animate={{ y: 20 }}
							transition={{
								repeat: Infinity,
								repeatType: 'reverse',
								duration: 2,
								ease: 'easeInOut',
							}}>
							<h1 className='text-center text-yellow-500 text-bold md:text-6xl text-4xl'>
								↓Java↓
							</h1>
						</motion.div>
						<ProjectCatalog projects={JavaProjects} />
					</span>
					<span>
						<motion.div
							initial={{ y: 0 }}
							animate={{ y: 30 }}
							transition={{
								repeat: Infinity,
								repeatType: 'reverse',
								duration: 2,
								ease: 'easeInOut',
							}}>
							<h1 className='text-center text-yellow-500 text-bold md:text-6xl text-4xl'>
								↓Python↓
							</h1>
						</motion.div>
						<ProjectCatalog projects={PythonProjects} />
					</span>
					<span>
						<motion.div
							initial={{ y: 0 }}
							animate={{ y: 30 }}
							transition={{
								repeat: Infinity,
								repeatType: 'reverse',
								duration: 2,
								ease: 'easeInOut',
							}}>
							<h1 className='text-center text-yellow-500 text-bold md:text-6xl text-4xl'>
								↓Swift↓
							</h1>
						</motion.div>
						<ProjectCatalog projects={SwiftProjects} />
					</span>
				</div>
			</div>
		</div>
	);
};

export default Projects;
