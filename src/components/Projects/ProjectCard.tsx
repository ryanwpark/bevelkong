import type { ProjectDetails } from '../../assets/projectData';

const ProjectCard = ({ project }: { project: ProjectDetails }) => {
	return (
		<div className='h-[4rem] w-[4rem] md:h-[8rem] md:w-[8rem] lg:h-[12rem] lg:w-[12rem] bg-yellow-500 flex justify-center items-center rounded-xl shadow-sm'>
			{/*  <div className='h-[4rem] w-[4rem] md:h-[8rem] md:w-[8rem] lg:h-[12rem] lg:w-[12rem] border text-yellow-500 bg-white border-yellow-500 flex justify-center items-center rounded-xl shadow-sm'> */}
			<span className='sm:text-xs md:text-2xl lg:text-4xl'>
				{project.title}
			</span>
		</div>
	);
};

export default ProjectCard;

// w-[100px] h-[100px] sm:w-[20px] sm:h-[20px]
