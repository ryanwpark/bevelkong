// import { useState } from 'react';

// export default function ContactForm() {
// 	const [form, setForm] = useState({ name: '', email: '', message: '' });

// 	const handleChange = (event) => {
// 		setForm({ ...form, [event.target.name]: event.target.value });
// 	};

// 	const handleSubmit = (event) => {
// 		event.preventDefault();
// 		// Handle form submission (e.g., send to API or email)
// 		alert(JSON.stringify(form));
// 	};

// 	return (
// 		<form
// 			onSubmit={handleSubmit}
// 			className='bg-white rounded-xl shadow-xl p-8 max-w-md mx-auto flex flex-col gap-6 text-black w-[90vw] h-[60vh]'>
// 			<input
// 				name='name'
// 				type='text'
// 				placeholder='Your Name'
// 				value={form.name}
// 				onChange={handleChange}
// 				className='rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400'
// 				required
// 			/>
// 			<input
// 				name='email'
// 				type='email'
// 				placeholder='Your Email'
// 				value={form.email}
// 				onChange={handleChange}
// 				className='rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400'
// 				required
// 			/>
// 			<textarea
// 				name='message'
// 				placeholder='Your Message'
// 				value={form.message}
// 				onChange={handleChange}
// 				className='rounded-lg border border-gray-300 p-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400'
// 				required
// 			/>
// 			<button
// 				type='submit'
// 				className='bg-yellow-500 text-white font-bold py-3 rounded-lg shadow hover:bg-yellow-400 transition'>
// 				Send Message
// 			</button>
// 		</form>
// 	);
// }
import * as formik from 'formik';
import * as yup from 'yup';
import { useState } from 'react';
import { motion } from 'motion/react';

function isValidEmail(email: string) {
	const emailRegex = /^[\w.-]+@[\w.-]+\.\w+$/;
	return emailRegex.test(email);
}
export default function ContactForm() {
	const [pendingSubmit, setPendingSubmit] = useState(false);
	const [submitMessage, setSubmitMessage] = useState('');
	const { Formik } = formik;
	const schema = yup.object().shape({
		emailfullname: yup.string().required(),
		emailsender: yup
			.string()
			.email()
			.required()
			.test('is-valid-email', 'Invalid email address', (value) =>
				isValidEmail(value || '')
			),
		emailmsg: yup.string().required(),
	});
	return (
		<div>
			<motion.div
				initial={{ opacity: 0, y: 24 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: false, amount: 0.2 }}
				transition={{ duration: 1, delay: 0.3 }}>
				<Formik
					validationSchema={schema}
					validateOnChange={false}
					onSubmit={(values, { resetForm }) => {
						setPendingSubmit(true);
						alert(JSON.stringify(values));
						setSubmitMessage('');
						fetch(
							'https://gmailsenderapi.onrender.com/send-email',
							{
								method: 'POST',
								headers: {
									'Content-Type': 'Application/JSON',
								},
								body: JSON.stringify(values),
							}
						)
							.then((res) => {
								setTimeout(() => {
									setPendingSubmit(false);
									if (res.ok) {
										setSubmitMessage(
											'Message sent successfully!'
										);
										resetForm();
									} else {
										setSubmitMessage(
											'Error sending message.'
										);
									}
								}, 500);
								return res.json();
							})
							.catch(() => {
								setTimeout(() => {
									setPendingSubmit(false);
									setSubmitMessage('Error sending message.');
								}, 500);
							});
					}}
					initialValues={{
						emailsender: '',
						emailmsg: '',
						emailfullname: '',
					}}>
					{({ values, handleChange, handleSubmit, isSubmitting }) => (
						<form
							onSubmit={handleSubmit}
							className='bg-white rounded-xl shadow-xl p-4 sm:p-6 max-w-sm sm:max-w-md flex flex-col gap-4 sm:gap-6 text-black w-[95vw] sm:w-[90vw] lg:w-[400px] h-auto max-h-[80vh] overflow-y-auto'>
							<h1 className='text-center text-yellow-500 font-bold text-2xl sm:text-3xl lg:text-4xl'>
								Questions?
							</h1>
							<h1 className='text-center font-semibold text-sm sm:text-base lg:text-lg'>
								Don't hesitate to reach out!
							</h1>
							<div className='relative'>
								<input
									type='email'
									name='emailsender'
									onChange={handleChange}
									className='rounded-lg border border-gray-300 p-2 sm:p-3 pt-4 sm:pt-5 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full peer placeholder-transparent'
									value={values.emailsender}
									required
									placeholder='Email'
								/>
								<label
									htmlFor='emailsender'
									className='absolute left-2 sm:left-3 text-xs text-gray-500 transition-all duration-200 peer-placeholder-shown:text-sm sm:peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 sm:peer-placeholder-shown:top-3 peer-focus:!top-1 peer-focus:!text-xs peer-focus:!text-yellow-500 top-1'>
									Email
								</label>
							</div>
							<div className='relative'>
								<input
									type='text'
									name='emailfullname'
									onChange={handleChange}
									className='rounded-lg border border-gray-300 p-2 sm:p-3 pt-4 sm:pt-5 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full peer placeholder-transparent'
									value={values.emailfullname}
									required
									placeholder='Name'
								/>
								<label
									htmlFor='emailfullname'
									className='absolute left-2 sm:left-3 text-xs text-gray-500 transition-all duration-200 peer-placeholder-shown:text-sm sm:peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 sm:peer-placeholder-shown:top-3 peer-focus:!top-1 peer-focus:!text-xs peer-focus:!text-yellow-500 top-1'>
									Name
								</label>
							</div>
							<div className='relative'>
								<textarea
									name='emailmsg'
									value={values.emailmsg}
									onChange={handleChange}
									className='rounded-lg border border-gray-300 p-2 sm:p-3 pt-4 sm:pt-5 h-32 sm:h-40 lg:h-48 resize-none text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full peer placeholder-transparent'
									required
									placeholder='Message'
								/>
								<label
									htmlFor='emailmsg'
									className='absolute left-2 sm:left-3 text-xs text-gray-500 transition-all duration-200 peer-placeholder-shown:text-sm sm:peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 sm:peer-placeholder-shown:top-3 peer-focus:!top-1 peer-focus:!text-xs peer-focus:!text-yellow-500 top-1'>
									Message
								</label>
							</div>
							<button
								type='submit'
								disabled={isSubmitting || pendingSubmit}
								className='bg-yellow-500 text-white font-bold py-2 sm:py-3 text-sm sm:text-base rounded-lg shadow hover:bg-yellow-400 transition flex items-center justify-center gap-2'>
								{pendingSubmit && (
									<span className='inline-block w-4 h-4 sm:w-5 sm:h-5 border-2 border-yellow-300 border-t-transparent rounded-full animate-spin'></span>
								)}
								<span>Submit</span>
							</button>
						</form>
					)}
				</Formik>
				{submitMessage && (
					<p
						className={
							submitMessage.includes('success')
								? 'text-green-700 text-center pt-10'
								: 'text-red-700 text-center pt-10'
						}>
						{submitMessage}
					</p>
				)}
			</motion.div>
		</div>
	);
}
