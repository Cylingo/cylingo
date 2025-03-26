import { HomePageHeader } from "@/components/homePageHeader";
import { Footer } from "@/components/footer";
import { LexiconPageBody } from "@/components/lexiconPage/lexiconPageBody";

export default function Lexicon() {
	return (
		<div className="flex flex-col h-full">
			<HomePageHeader />
			<LexiconPageBody />
			<Footer />
		</div>
	);
}
