import React from "react";
import Link from "next/link";

function Contact() {
	return (
		<div className="grid h-screen px-4 bg-white place-content-center dark:bg-neutral-900">
			<div className="text-center">
				<h1 className="font-black text-9xl text-neutral-700">Hello There!</h1>
				<p className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">Looking Forward To Help You</p>
				<Link
					href="tel:+919899499375"
					className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-neutral-600 rounded hover:bg-neutral-700 focus:outline-none focus:ring">
					CAll NOW
				</Link>
			</div>
		</div>
	);
}

export default Contact;
