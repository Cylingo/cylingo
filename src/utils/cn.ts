import { twMerge } from "tailwind-merge";

export const cn = (...args: (string | undefined | null | false)[]): string => {
	return twMerge(...args);
};