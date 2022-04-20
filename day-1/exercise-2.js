import { my_display_alpha } from "./exercise-1.js"
export const my_display_alpha_reverse = () => {
	let i = 25;
	let reverse = "";
	for (i; i >= 0; i--)
	{
		reverse += my_display_alpha()[i];
	}
	return reverse;
}
