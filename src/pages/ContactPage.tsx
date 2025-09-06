import ContactForm from '../components/ContactPage/ContactForm';
import ContactTypeWriter from '../components/ContactPage/ContactTypeWriter';

export default function ContactPage() {
	return (
		<div
			id='contact page'
			className='min-h-dvh w-screen flex flex-col lg:flex-row'>
			<div className='w-full lg:w-1/2 h-1/3 lg:h-full md:visible invisible flex items-end lg:items-center justify-center md:justify-end pb-4 '>
				<ContactTypeWriter />
			</div>
			<div className='w-full lg:w-1/2 md:h-2/3 h-dvh lg:h-full sm:h-full flex items-start lg:items-center justify-center md:justify-start md:p-8 pt-0 pb-4 lg:pt-4'>
				<ContactForm />
			</div>
		</div>
	);
}
