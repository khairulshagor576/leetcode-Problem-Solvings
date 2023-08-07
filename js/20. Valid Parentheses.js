var isValid = function(s) {
	const stack = [];
	
	for (const c of s) {
		if (c === '(')
			stack.push(')');
		
		else if (c === '{')
			stack.push('}');
		
		else if (c === '[')
			stack.push(']');
		
		else if (stack.length === 0 || stack.pop() !== c)
			return false;
	}
	
	return stack.length === 0;
};