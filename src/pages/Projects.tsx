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
		<div
			id='projects'
			className='min-h-dvh w-screen bg-[oklch(85.063%_0.08406_217.226)] flex flex-col'>
			<div className='flex h-1/2 items-end lg:relative lg:top-15 md:space-x-40 justify-center'>
				<span className=''>
					<FloatingLabel label='React' />
					<ProjectCatalog projects={ReactProjects} />
				</span>
				<span className=''>
					<FloatingLabel label='Java' />
					<ProjectCatalog projects={JavaProjects} />
				</span>
			</div>
			<div className='flex h-1/2 items-start md:space-x-40 justify-center'>
				<span className=''>
					<FloatingLabel label='Python' />
					<ProjectCatalog projects={PythonProjects} />
				</span>
				<span className=''>
					<FloatingLabel label='Swift' />
					<ProjectCatalog projects={SwiftProjects} />
				</span>
			</div>
		</div>
	);
};

export default Projects;
