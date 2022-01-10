module.exports = {
	name: "exec",
	code: `
	$title[1;Exec Used]
	$description[1;
		**Input**
		\`\`\`$message\`\`\`
       **Output**
		\`\`\`$exec[$message]\`\`\`]
	$onlyForIDs[745691705390399590;This can only be used by the developer]`
	}