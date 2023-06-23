import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "ALOK KUMAR PANDEY",
	description: "Lawyer Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="es" suppressHydrationWarning>
			<body className={`${inter.className} bg-white dark:bg-neutral-900`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
