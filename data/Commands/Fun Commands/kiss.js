module.exports = ({
    name: "kiss",
    code: `$title[1;$username kissed $username[$mentioned[1]]]
    $image[1;$jsonRequest[https://nekos.best/api/v1/kiss; url;An error occurred]]
$color[1;RANDOM]
$footer[1;Powered by nekos.best api]
$argsCheck[1;Mention the person you want to kiss]`
   })