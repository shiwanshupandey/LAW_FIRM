import Image from "next/image";
import Acordeon from "./Acordeon";

function Faq() {
	return (
		<section id="faq">
			<div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
					<div className="space-y-3">
						<p className="mt-4 text-neutral-600 dark:text-neutral-400" data-aos="fade-down">
							Frequently Asked Questions:
						</p>
						<h2 className="text-3xl font-bold sm:text-4xl" data-aos="fade-down">
							FAQS
						</h2>
						<Acordeon />
					</div>
					<div
						className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-first lg:h-full"
						data-aos="fade-down"
						data-aos-delay="300">
						<Image src="/faq.png" alt="about" width={700} height={500} className="h-full object-cover" />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Faq;
