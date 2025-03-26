import { HomePageHeader } from "@/components/homePageHeader";
import { Footer } from "@/components/footer";
import { FunFactsPageBody } from "@/components/funFactsPage/funFactsPageBody";

export default function FunFacts() {
	return (
		<div className="flex flex-col h-full">
			<HomePageHeader />
			<FunFactsPageBody />
			<Footer />
		</div>
	);
}
