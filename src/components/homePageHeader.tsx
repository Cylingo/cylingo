"use client";

import { FC } from "react";
import Image from "next/image";
import { Button, NavButton } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";

export const HomePageHeader: FC = () => {
	const router = useRouter();
	const pathname = usePathname();
	const headerMap: { [key: string]: { title: string; subtitle: string } } = {
		"/": { title: "Home", subtitle: "Explore Cypriot Words" },
		"/lexicon": { title: "Cypriot Lexicon", subtitle: "Explore Cypriot Words" },
		"/learn_cypriot": { title: "Learn Cypriot", subtitle: "Start your language journey" },
		"/about_us": { title: "About Us", subtitle: "Learn more about our mission" },
		"/cypriot_idioms": { title: "Cypriot Idioms", subtitle: "Discover unique expressions" },
		"/fun_facts": { title: "Fun Facts", subtitle: "Enjoy interesting tidbits" },
		"/support_us": { title: "Support Us", subtitle: "Help us grow" }
	};

	const headerDetails = headerMap[pathname] || { title: "Cylingo Dictionary", subtitle: "Explore Cypriot Words" };

	return (
		<div className={"flex flex-col items-center justify-center h-full p-4 gap-4 bg-primary"}>
			<Button onClick={() => {
				router.push("/");
			}}>
				<Image src={"/cylingo_logo.png"} alt={"cylingo logo"} width={200} height={200} />
			</Button>
			<div className="flex flex-col items-center justify-center gap-2">
				<h1 className="text-4xl font-bold">{headerDetails.title === "Home" ? "Cylingo Dictionary" : headerDetails.title}</h1>
				<h2 className="text-2xl font-bold">{headerDetails.subtitle}</h2>
			</div>
			<div className={"flex items-center justify-center gap-2 flex-wrap w-full"}>
				{Object.entries(headerMap).map(([route, details], i) => {
					return (
						<NavButton
							key={i}
							onClick={() => {
								if (route === "/support_us") {
									console.log("Custom logic executed for support_us");
								} else {
									router.push(route);
								}
							}}
						>
							{details.title}
						</NavButton>
					);
				})}
			</div>
		</div>
	);
};