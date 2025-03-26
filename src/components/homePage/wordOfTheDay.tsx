import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FC, useEffect, useMemo, useState } from "react";
import { useCreateClient } from "@/hooks/supabaseHook";

export const WordOfTheDay: FC = () => {
	const supabase = useCreateClient();

	useEffect(() => {
		async function fetchData() {
			const { data, error } = await supabase.from("words").select().limit(1);
			if (error) {
				console.error(error);
				return;
			}
			if (data && data.length > 0) {
				setWordOfTheDayQuiz({ word: data[0].cypriot, meaning: data[0].english, options: data[0].quiz_options });
			}
		}

		fetchData();
	}, [supabase]);

	const [showMeaning, setShowMeaning] = useState(false);

	const [wordOfTheDayQuiz, setWordOfTheDayQuiz] = useState({
		word: "Gondea",
		meaning: "Turkmenkoy (a place)",
		options: ["Turkmenkoy (a place)", "Mountain", "Market", "Sea"]
	});

	const randomizedOptions = useMemo(
		() => [...wordOfTheDayQuiz.options].sort(() => Math.random() - 0.5),
		[]
	);

	return <Card className={"bg-white border-solid border-2 border-primary w-[600px] text-white-content"}>
		<h2 className={"text-black text-2xl font-bold"}>
			Word of The Day
		</h2>
		<Card className={"border-2 border-primary border-solid p-4 w-[200px]"}>
			<p className={"text-2xl"}>{wordOfTheDayQuiz.word}</p>
			{showMeaning &&
				<p className={"mt-2 text-base text-black"}>{wordOfTheDayQuiz.meaning}</p>}
		</Card>
		<Button className={"bg-primary text-primary-content w-[200px]"}
				onClick={() => setShowMeaning(!showMeaning)}>
			{showMeaning ? "Hide Meaning" : "Show Meaning"}
		</Button>
		<div className={"grid grid-cols-2 gap-4"}>
			{randomizedOptions.map((o, i) => {
				return (
					<Button className={"bg-primary text-primary-content w-56"} key={i}>
						{o}
					</Button>
				);
			})}
		</div>
	</Card>;
};