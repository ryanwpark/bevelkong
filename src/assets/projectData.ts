export type ProjectDetails = {
	id: number;
	title: string;
	tasks: string[];
	startDate: string;
	endDate: string;
	technologies: string[];
	company: string;
	location: string;
};

export const ReactProjects: ProjectDetails[] = [
	{
		id: 0,
		title: 'Fuel Vendor App',
		tasks: [
			'Web application for fuel vendors and clients to manage and order through an intuitive interface.',
			"Calculated fuel prices based on distance, quantity, and delivery options based on clients' needs.",
			'Alerted vendors on low inventory via email allowing them to restock in a timely manner.',
			'Automated order processing and notifications for vendors and clients via email.',
			'Generated reports on fuel sales and inventory levels for vendors.',
		],
		startDate: 'Feb 2024',
		endDate: 'May 2024',
		technologies: [
			'React',
			'Postgres',
			'Azure',
			'REST API',
			'Jest',
			'Docker',
			'Tailwind',
			'Node.js',
		],
		company: 'University of Houston',
		location: 'Software Design Course',
	},
	{
		id: 1,
		title: 'Medical Clinic App',
		tasks: [
			'Web application for medical clinics and patients to manage appointments, medical records, and billing information.',
			'Implemented dynamic data reporting with customizable filters for staff to easily access and sort patient and appointment records.',
			'Allow patients to book, reschedule, and cancel appointments through a user-friendly interface.',
			'Automated email notifications to clients clarifying appointment details upon new appointments.',
		],
		startDate: 'Jan 2023',
		endDate: 'May 2023',
		technologies: [
			'Javascript',
			'React',
			'MySQL',
			'Azure',
			'REST API',
			'Github',
			'Chakra',
			'Heroku',
		],
		company: 'University of Houston',
		location: 'Database Systems Course',
	},
];

export const JavaProjects: ProjectDetails[] = [
	{
		id: 0,
		title: 'Midas API',
		tasks: [
			"Integrated Apache Kafka with Spring Boot application for communicating with JPMorgan Chase's data services.",
			'Ensured account balances were updated correctly in development with an H2 in-memory database.',
			'Validated transactions with external API and applied incentives to user balances.',
			'Exposed REST API endpoint for querying user balances with Kafka.',
		],
		startDate: 'Aug 2025',
		endDate: 'Aug 2025',
		technologies: ['Java', 'Spring Boot', 'SQL', 'H2', 'REST API'],
		company: 'JPMorgan Chase - Forage',
		location: 'SWE Training',
	},
];

export const SwiftProjects: ProjectDetails[] = [
	{
		id: 0,
		title: 'Kilter Board App',
		tasks: [
			'Revamping a rock climbing mobile application with the goal of offering an enhanced user experience with less navigation.',
			'Integrated Bluetooth connectivity for communication with the climbing board.',
			'Implemented a new user interface using SwiftUI for a more modern look and feel.',
		],
		startDate: 'Aug 2025',
		endDate: 'Current',
		technologies: ['Swift', 'SFSymbols', 'SQLite', 'GRDB', 'UIKit'],
		company: 'Personal',
		location: 'Katy, TX',
	},
	{
		id: 1,
		title: 'Black Jack 21 Trainer',
		tasks: [
			'IOS App for simulating blackjack giving users the ability to practice basic strategy and card counting techniques.',
			'Implemented a scoring system to track user performance and progress over time.',
			'Added customizable settings allowing users to customize rulesets based on the house.',
		],
		startDate: 'Jun 2025',
		endDate: 'Jul 2025',
		technologies: ['Swift', 'SFSymbols', 'SQLite', 'GRDB', 'UIKit'],
		company: 'Personal',
		location: 'Katy, TX',
	},
];

export const PythonProjects: ProjectDetails[] = [
	{
		id: 0,
		title: 'Car Accident Model',
		tasks: [
			'ETL & Data Preprocessing: Built a pipeline to predict accident likelihood in NYC, handling missing values, encoding categorical variables, and normalizing numerical features.',
			'Modeling & Evaluation: Trained Logistic Regression, Random Forest, and Gradient Boosting models; compared performance using accuracy, precision, recall, F1-score, and ROC–AUC.',
			'Insights & Selection: Selected Random Forest for its superior ROC–AUC and performed feature importance analysis to identify top predictors.',
		],
		startDate: 'Feb 2024',
		endDate: 'Apr 2024',
		technologies: [
			'JupyterNB',
			'PyTorch',
			'scikit-Learn',
			'NumPy',
			'Kaggle',
			'pandas',
			'matplotlib',
		],
		company: 'University of Houston',
		location: 'Data Science course',
	},
	{
		id: 1,
		title: 'Facial Ranking Model',
		tasks: [
			'Pipeline Design & Implementation: Developed a facial recognition system to improve recognition at extreme angles and long distances, integrating StyleGAN3 for image frontalization with AdaFace for quality-adaptive margin loss.',
			'Benchmarking & Evaluation: Conducted literature review and compared against SOTA methods (ArcFace, CurricularFace, PFE, URL) to assess strengths and limitations; applied the DroneFace dataset (1,364 images, 11 subjects) with 5-fold cross-validation.',
			'Performance & Analysis: Used cosine similarity for feature comparison between drone images and portraits, achieving 66.6% rank-1 accuracy.',
		],
		startDate: 'Nov 2024',
		endDate: 'Dec 2024',
		technologies: [
			'AdaFace',
			'StyleGAN3',
			'ResNet100',
			'Python',
			'Pytorch',
			'Tensorflow',
		],
		company: 'University of Houston',
		location: 'Physical Computing course',
	},
];
