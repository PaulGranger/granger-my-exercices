export const my_array_alpha = (str) => {
	if (typeof str != 'string')
	{
		return [];
	}

	let i = 0;
	let res = [];
	while (str[i]) 
	{
		res[i]=str[i];
		i++;
	}

	return res;
}
