import { HomePageHeader } from "@/components/homePageHeader";
import { HomePageBody } from "@/components/homePage/homePageBody";
import { Footer } from "@/components/footer";

export default function Home() {
	return (
		<div className="flex flex-col h-full">
			<HomePageHeader />
			<HomePageBody />
			<Footer />
		</div>
	);
}
