import React from "react";

type Props = {
	title: string;
	message: string;
};

const faqs: Props[] = [
	{
		title: "Is ALOK KUMAR PANDEY / PRATINIDHITV LAW FIRM the right law firm for me? / Why should I trust your firm with my case?",
		message:
		'Choosing a law firm to represent you and your case is one of the most important decisions you can make. We understand that your case is important to you and choosing the right firm and attorneys to represent you could make the difference for your case. Our Law Firm is a boutique law firm with three dedicated trial attorneys with over 40 years of combined experience. Being that we are a boutique firm, we are able to dedicate the appropriate resources and time to manage your case.',
		
	},
	{
		title: "How long have we been in business?",
		message:
			"PRATINIDHITV LAW FIRM was founded by Mr. Alok Kumar Pandey and mrs. kiran pandey in 2012 and since its inception it has maintained an unwavering commitment to trying cases and/or brokering favorable settlement agreements for our clients. 20 Years in the field of Litigation. Enrollment No. - D/1310-A/2002 ",
	},
	{
		title: "Do I need to come into your office and meet you in person to retain you, or to receive legal services?",
		message:
			"It is preferable for you to come to our office so that you can become acquainted with the staff who will be working diligently on your case. However, when it is not possible for you to come to our office, we can schedule a date and time to meet with you at a location that is more convenient for you. In addition, we can facilitate business electronically to save you time and money.",
	},
	{
		title: "What are your business hours?",
		message:
			"Our business hours are 8:30 am to 6:00 pm Monday through Friday. However, please feel free to call or email us after hours. We are committed to returning our client's and potential client's calls and emails within 24 hours or less. ",
	},
];

function Acordeon() {
	return (
		<>
			{faqs.map((faq, i) => (
				<details key={i} className="group [&_summary::-webkit-details-marker]:hidden">
					<summary
						data-aos="fade-down"
						data-aos-delay="100"
						className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-neutral-200 p-4 text-neutral-900 dark:bg-neutral-800 dark:text-white">
						<h2 className="font-medium">{faq.title}</h2>

						<svg
							className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
							data-aos="fade-down"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
						</svg>
					</summary>

					<p className="mt-4 px-4 leading-relaxed text-neutral-700 dark:text-neutral-200">{faq.message}</p>
				</details>
			))}
		</>
	);
}

export default Acordeon;
