import { ButtonHTMLAttributes, FC } from "react";
import { cn } from "@/utils/cn";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<ButtonProps> = ({ ...props }) => {
	return (
		<button
			className={cn("rounded-xl p-2 flex items-center justify-center cursor-pointer", props.className)}
			onClick={props.onClick}>{props.children}</button>
	);
};

export const NavButton: FC<ButtonProps> = ({ ...props }) => {
	return (
		<Button
			className={cn("bg-headerButton h-12 w-56 p-4 flex items-center justify-center font-bold uppercase hover:-translate-y-1 hover:shadow-md transition transform", props.className)}
			onClick={props.onClick}>{props.children}</Button>
	);
};