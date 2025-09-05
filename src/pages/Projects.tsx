import ProjectCatalog from '../components/Projects/ProjectCatalog';
import {
	ReactProjects,
	PythonProjects,
	JavaProjects,
	SwiftProjects,
} from '../assets/projectData';
import FloatingLabel from '../components/Projects/FloatingLabel';

const Projects = () => {
	return (
		<div className='bg-[oklch(85.063%_0.08406_217.226)] grid grid-cols-2 grid-rows-2 gap-1 min-h-screen w-screen flex justify-center items-center'>
			<span className='items-end'>
				{/* animation for ↓Projects↓ */}
				<FloatingLabel label='React' />
				<ProjectCatalog projects={ReactProjects} />
			</span>
			<span>
				<FloatingLabel label='Java' />
				<ProjectCatalog projects={JavaProjects} />
			</span>
			<span>
				<FloatingLabel label='Python' />
				<ProjectCatalog projects={PythonProjects} />
			</span>
			<span>
				<FloatingLabel label='Swift' />
				<ProjectCatalog projects={SwiftProjects} />
			</span>
		</div>
	);
};

export default Projects;
