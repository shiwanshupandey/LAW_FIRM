"use client"
import { Hero, Faq, Footer, Popup, About, Services, Whatsapp, Experience, Photo} from "@/components";



export default function Home() {
	return (
		<>
			<Hero />
			<About />
			<Experience />
			<Faq />
			<Services />
			<Photo/>
			<Footer />
			<Whatsapp />
		</>
	);
}
