"use client";

import { FC, useEffect, useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Word } from "@/types/word";
import Fuse from "fuse.js";
import { Card } from "@/components/ui/card";
import { useCreateClient } from "@/hooks/supabaseHook";

export const DictionarySearch: FC = () => {
	const [lexicon, setLexicon] = useState<Word[]>();
	const [searchQuery, setSearchQuery] = useState("");

	const supabase = useCreateClient();
	useEffect(() => {
		async function fetchData() {
			const { data, error } = await supabase.from("words").select();
			if (error) {
				console.error(error);
				return;
			}
			if (data) {
				setLexicon(data);
			}
		}

		fetchData();
	}, [supabase]);

	const filteredLexicon = useMemo(() => {
		if (!lexicon) return [];
		const fuse = new Fuse(lexicon, { keys: ["cypriot"], threshold: 0.4 });
		return searchQuery ? fuse.search(searchQuery).map(result => result.item) : "";
	}, [lexicon, searchQuery]);

	return (
		<>
			<div
				className="bg-white text-white-content h-16 w-3/4 rounded-lg border-solid border-2 border-primary flex items-center justify-start gap-2 p-4 transition-all transform focus-within:-translate-y-1 focus-within:shadow-md">
				<select>
					<option>English</option>
					<option>Turkish</option>
					<option>Greek</option>
				</select>
				<div className="border-primary border-1 h-full"></div>
				<Input
					placeholder="Type a Cypriot word..."
					className="border-none bg-white text-white-content h-12 w-full focus:outline-none"
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
				/>
			</div>
			<div className="w-full">
				{filteredLexicon && filteredLexicon.length > 0 && (
					<>
						<h2 className={"text-secondary-content text-2xl p-2"}>Results</h2>
						<Card
							className={"bg-white max-h-52 w-full overflow-y-scroll border-solid border-2 border-primary"}>
							{filteredLexicon.map(word => (
								<Card key={word.id}
									  className="text-white-content border-primary border-2 border-solid w-full font-bold items-start">
									{word.cypriot} - {word.english} - {word.turkish} - {word.greek}
								</Card>
							))}
						</Card>
					</>
				)}
			</div>
		</>
	);
};