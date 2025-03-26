import { FC, InputHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

type InputProps = InputHTMLAttributes<HTMLInputElement>

export const Input: FC<InputProps> = ({ ...props }) => {
	return (
		<input className={cn("rounded-lg h-8 p-2 border-solid border-2 border-primary", props.className)}
			   placeholder={props.placeholder} value={props.value}
			   onChange={props.onChange} />
	);
};