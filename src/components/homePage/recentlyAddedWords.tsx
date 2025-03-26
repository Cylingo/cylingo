import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FC, useState } from "react";

export const RecentlyAddedWords: FC = () => {
	const [showMeaning, setShowMeaning] = useState(false);
	const [wordIndex, setWordIndex] = useState(0);


	const [recentlyAddedWordsList, setRecentlyAddedWordsList] = useState([
		{
			word: "Chofta/Cohftes",
			meaning: "bullshit or lies"
		},
		{
			word: "Ariya",
			meaning: "Drill"
		}
	]);

	return <Card className={"bg-white border-solid border-2 border-primary w-[600px] text-white-content"}>
		<h2 className={"text-black text-2xl font-bold"}>
			Recently Added Words
		</h2>
		<Card className={"border-2 border-primary border-solid p-4 w-[200px]"}>
			<p className={"text-2xl"}>{recentlyAddedWordsList[wordIndex].word}</p>
			{showMeaning &&
				<p className={"mt-2 text-base text-black"}>{recentlyAddedWordsList[wordIndex].meaning}</p>}
		</Card>
		<Button className={"bg-primary text-primary-content w-[200px]"}
				onClick={() => setShowMeaning(!showMeaning)}>
			{showMeaning ? "Hide Meaning" : "Show Meaning"}
		</Button>
		<div className={"grid grid-cols-2 gap-4"}>
			<Button className={"bg-primary text-primary-content w-[200px]"}
					onClick={() => setWordIndex((i) => (i === 0 ? recentlyAddedWordsList.length - 1 : i - 1))}>
				Previous Word
			</Button>
			<Button className={"bg-primary text-primary-content w-[200px]"}
					onClick={() => setWordIndex((i) => (i === recentlyAddedWordsList.length - 1 ? 0 : i + 1))}>
				Next Word
			</Button>
		</div>
	</Card>;
};