module.exports = ({
 name: "avatar",
 aliases: ['av', 'pfp'],
 code: `$color[1;RANDOM]
 $title[1;$username[$findUser[$message]]' avatar]
 $description[1;install for remembrance ❤️
 [png]($replaceText[$userAvatar[$findUser[$message]];webp;png]) | [webp]($replaceText[$userAvatar[$findUser[$message]];png;webp]) | [jpeg]($replaceText[$replaceText[$userAvatar[$findUser[$message]];webp;jpeg];png;jpeg])]
 $image[1;$userAvatar[$findUser[$message]]]`
})