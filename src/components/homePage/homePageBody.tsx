"use client";

import { FC, useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { WordOfTheDay } from "@/components/homePage/wordOfTheDay";
import { RecentlyAddedWords } from "@/components/homePage/recentlyAddedWords";
import { DictionarySearch } from "@/components/dictSearch";
import { useRouter } from "next/navigation";

interface HomePageBodyProps {
}

export const HomePageBody: FC<HomePageBodyProps> = ({}) => {
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