"use client";

import { FC, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card } from "@/components/ui/card";


interface LearnCypriotBodyProps {
}

export const LearnCypriotBody: FC<LearnCypriotBodyProps> = () => {
	return (
		<div
			className="grid grid-cols-2 p-12 gap-12 bg-secondary min-h-[1000px]">
			<Card className={"bg-white text-white-content border-primary border-2 border-solid h-96 justify-start p-4"}>
				<h2 className={"text-2xl font-bold"}>Learn Cypriot Turkish</h2>
				<Button className={"bg-primary text-primary-content w-full h-16"}>
					Quiz
				</Button>
				<Button className={"bg-primary text-primary-content w-full h-16"}>
					Vocabulary
				</Button>
				<Button className={"bg-primary text-primary-content w-full h-16"}>
					Hangman
				</Button>
			</Card>
			<Card className={"bg-white text-white-content border-primary border-2 border-solid h-96 justify-start p-4"}>
				<h2 className={"text-2xl font-bold"}>Learn Cypriot Greek</h2>
				<Button className={"bg-primary text-primary-content w-full h-16"}>
					Quiz
				</Button>
			</Card>
		</div>
	);
};