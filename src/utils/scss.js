export async function extractVariablesFromSCSS(filePath) {
	try {
		const { default: scssContent } = await import(filePath);
		const exportRegex = /:export\s*{\s*([^}]*)\s*}/;
		const exportMatch = scssContent.match(exportRegex);

		if (exportMatch) {
			const exportContent = exportMatch[1];
			const variableRegex = /([a-zA-Z0-9_-]+)\s*:\s*([^;]+);/g;
			const variableMatches = exportContent.matchAll(variableRegex);
			const result = {};

			for (const match of variableMatches) {
				const [, key, value] = match;
				result[key.trim()] = value.trim();
			}

			return result;
		} else {
			console.log('No :export{} section found in the SCSS file.');
			return {};
		}
	} catch (error) {
		console.error('Error reading the SCSS file:', error);
		return {};
	}
}
