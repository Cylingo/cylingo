import { HomePageHeader } from "@/components/homePageHeader";
import { Footer } from "@/components/footer";
import { AboutUsBody } from "@/components/aboutUsPage/aboutUsPageBody";

export default function AboutUs() {
	return (
		<div className="flex flex-col h-full">
			<HomePageHeader />
			<AboutUsBody />
			<Footer />
		</div>
	);
}
