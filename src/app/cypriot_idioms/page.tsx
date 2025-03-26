import { HomePageHeader } from "@/components/homePageHeader";
import { Footer } from "@/components/footer";
import { LearnCypriotBody } from "@/components/learnCypriotPage/LearnCypriotPageBody";
import { CypriotIdiomsPageBody } from "@/components/cypriotIdiomsPage/cypriotIdiomsPageBody";

export default function CypriotIdioms() {
	return (
		<div className="flex flex-col h-full">
			<HomePageHeader />
			<CypriotIdiomsPageBody />
			<Footer />
		</div>
	);
}
