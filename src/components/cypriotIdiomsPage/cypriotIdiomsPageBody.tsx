"use client";

import { FC, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card } from "@/components/ui/card";


interface CypriotIdiomsPageBodyProps {
}

export const CypriotIdiomsPageBody: FC<CypriotIdiomsPageBodyProps> = () => {
	return (
		<div
			className="grid grid-cols-2 p-12 gap-12 bg-secondary min-h-[1000px]">
		</div>
	);
};