import { HomePageHeader } from "@/components/homePageHeader";
import { Footer } from "@/components/footer";
import { LearnCypriotBody } from "@/components/learnCypriotPage/LearnCypriotPageBody";

export default function LearnCypriot() {
	return (
		<div className="flex flex-col h-full">
			<HomePageHeader />
			<LearnCypriotBody />
			<Footer />
		</div>
	);
}
