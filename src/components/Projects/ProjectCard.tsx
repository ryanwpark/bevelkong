import type { ProjectDetails } from '../../assets/projectData';

const ProjectCard = ({ project }: { project: ProjectDetails }) => {
	return (
		<div className='w-[100px] h-[100px] bg-yellow-500 text-black font-semibold text-base flex justify-center items-center rounded-xl shadow-sm'>
			{/* <div className='md:h-full bg-yellow-500 text-black font-semibold md:text-base md:w-[10vw] flex justify-center items-center rounded-xl shadow-sm'> */}
			<span className=''>{project.title}</span>
		</div>
	);
};

export default ProjectCard;
