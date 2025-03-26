"use client";

import { FC, useEffect, useMemo, useRef, useState } from "react";
import { Word } from "@/types/word";
import { useCreateClient } from "@/hooks/supabaseHook";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CaretDown, CaretUp } from "@phosphor-icons/react";

export const LexiconPageBody: FC = () => {
	const [lexicon, setLexicon] = useState<Word[]>();
	const supabase = useCreateClient();
	const [isSticky, setIsSticky] = useState(false);
	const navRef = useRef<HTMLDivElement>(null);
	const [openDetailId, setOpenDetailId] = useState<string | null>(null);

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

	const groupedLexicon = useMemo(() => {
		if (!lexicon) return {};

		const unsortedGroups = lexicon.reduce((groups, word) => {
			const letter = word.cypriot.charAt(0).toUpperCase();
			if (!groups[letter]) groups[letter] = [];
			groups[letter].push(word);
			return groups;
		}, {} as Record<string, Word[]>);

		const sortedGroups: Record<string, Word[]> = {};

		Object.keys(unsortedGroups)
			.sort((a, b) => a.localeCompare(b))
			.forEach((letter) => {
				sortedGroups[letter] = unsortedGroups[letter].sort((a, b) =>
					a.cypriot.localeCompare(b.cypriot)
				);
			});

		return sortedGroups;
	}, [lexicon]);

	const letters = useMemo(() => Object.keys(groupedLexicon).sort(), [groupedLexicon]);

	useEffect(() => {
		const handleScroll = () => {
			if (navRef.current) {
				const rect = navRef.current.getBoundingClientRect();
				setIsSticky(rect.bottom < 0);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Function to handle smooth scroll to the selected letter
	const scrollToLetter = (letter: string) => {
		const element = document.getElementById(`letter-${letter}`);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	// Render nav links as buttons for smooth scrolling
	const NavLinks = ({ className }: { className?: string }) => (
		<>
			{letters.map(letter => (
				<a
					key={letter}
					onClick={(e) => {
						e.preventDefault();
						scrollToLetter(letter);
					}}
					className={`mr-4 text-xl text-primary underline cursor-pointer ${className || ""}`}
				>
					{letter}
				</a>
			))}
		</>
	);

	return (
		<div className="flex flex-col gap-4 p-12 bg-secondary min-h-[1000px]">
			{/* Original navigation card wrapped with ref */}
			<div ref={navRef}>
				<h2 className="text-4xl font-bold text-primary">Navigation</h2>
				<div className={"border-solid border-2 border-primary my-2"}></div>
				<Card className="bg-white border-primary border-solid border-2 flex flex-row flex-wrap">
					<NavLinks />
				</Card>
			</div>

			<AnimatePresence>
				{isSticky && (
					<motion.div
						initial={{ opacity: 0, translateY: 100 }}
						animate={{ opacity: 1, translateY: 0 }}
						exit={{ opacity: 0, translateY: 100 }}
						transition={{ duration: 0.5 }}
						className="flex gap-2 fixed bottom-0 left-0 right-0 z-50 p-4"
					>
						<Card
							className="bg-white border-primary border-solid border-2 flex flex-row flex-wrap shadow-lg">
							<NavLinks />
						</Card>
						<Card className={"bg-white text-white-content border-primary border-solid border-2"}>
							<Button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
								<CaretUp size={32} />
							</Button>
						</Card>
					</motion.div>
				)}
			</AnimatePresence>

			{Object.keys(groupedLexicon)
				.sort()
				.map((letter) => (
					<div key={letter} id={`letter-${letter}`} className="mb-8">
						<h2 className="text-4xl font-bold text-primary">{letter}</h2>
						<div className={"border-solid border-2 border-primary my-2"}></div>
						<div className="grid grid-cols-1 gap-4">
							{groupedLexicon[letter].map((word) => (
								<div key={word.id}
									 className="bg-white border-2 border-primary border-solid p-4 rounded-lg text-white-content uppercase">
									<div
										className="flex justify-between items-center list-none cursor-pointer"
										onClick={(e) => {
											e.preventDefault();
											setOpenDetailId(openDetailId === word.id ? null : word.id);
										}}
									>
										<span>{word.cypriot}</span>
										{openDetailId === word.id ? <CaretUp size={16} /> : <CaretDown size={16} />}
									</div>
									<AnimatePresence>
										{openDetailId === word.id && (
											<motion.div
												initial={{ height: 0, opacity: 0 }}
												animate={{ height: "auto", opacity: 1 }}
												exit={{ height: 0, opacity: 0 }}
												transition={{ duration: 0.2 }}
												className="mt-2 overflow-hidden"
											>
												{word.english} - {word.turkish} - {word.greek}
											</motion.div>
										)}
									</AnimatePresence>
								</div>
							))}
						</div>
					</div>
				))}
		</div>
	);
};