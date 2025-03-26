"use client";

import { FC } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { WordOfTheDay } from "@/components/homePage/wordOfTheDay";
import { RecentlyAddedWords } from "@/components/homePage/recentlyAddedWords";
import { DictionarySearch } from "@/components/dictSearch";
import { useRouter } from "next/navigation";

export const HomePageBody: FC = () => {
	const router = useRouter();

	return (
		<div className={"flex flex-col items-center justify-center gap-8 bg-secondary h-full p-12"}>
			<DictionarySearch />
			<Button onClick={() => {
				router.push("/lexicon");
			}}>
				<Image src={"/dictionary.png"} alt={""} height={200} width={200} />
			</Button>
			<WordOfTheDay />
			<RecentlyAddedWords />
		</div>
	);
};