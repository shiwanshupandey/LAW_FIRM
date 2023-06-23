import Image from "next/image";

function About() {
	
	return (
		<section id="about">
			<div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
					<div
						className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
						data-aos="fade-right"
						data-aos-delay="200">
						<Image src="/about.jpg" alt="about" width={700} height={500} className="absolute inset-0 h-full w-full object-cover" />
					</div>

					<div className="lg:py-24" data-aos="fade-right">
					<p className="mt-4 text-neutral-600 dark:text-neutral-400">Supreme Court Bar Association Member (SCBA)</p>
						
						<h2 className="text-3xl font-bold sm:text-4xl">ALOK KUMAR PANDEY</h2>
						<p className="mt-4 text-neutral-600 dark:text-neutral-400">LL.B. (Hons.) Lucknow University (2002)</p>
						
						<p className="mt-4 text-neutral-600 dark:text-neutral-400">
							lawyer with substantial presence in corporate and commercial law. 
							The firm is a full service legal firm with Advocates, Chartered Accountants, Company Secretaries. 
							A vibrant and enthusiastic professionals with a good academic and practice background.
							our team of professionals is ably assisted by the experience of former Judges of the Supreme Court of India and other State High Courts, leading Senior Advocates and professionals, who have been nationally and internationally recognized 
							and honoured for their outstanding contribution to the society and profession.
							The aim and objectives is to provide its clients a numero uno services with a practical and result oriented business approach.
							The firm has continuously provided innovative legal services and is able to provide advice to clients from each of its associates office; 
							having an integrated network of offices in various cities with independent offices headed by resident partners in each of these jurisdictions. 
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
