module.exports = {
	name: "<@!$clientID>",
	code: `
	$title[1;I see you pined]
    $description[1;
    My Global Prefix is: a!
     and the server prefix is $getServerVar[prefix;$clientID;prefix]]
	`,
	nonPrefixed: true
	}	