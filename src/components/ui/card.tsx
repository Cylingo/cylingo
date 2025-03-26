import { FC, HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
}

export const Card: FC<CardProps> = ({ ...props }) => {
	return (
		<div className={cn("p-2 rounded-lg flex flex-col gap-2 justify-center items-center", props.className)}>
			 {props.children}
		</div>
	);
};
