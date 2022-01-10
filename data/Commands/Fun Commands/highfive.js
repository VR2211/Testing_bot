module.exports = ({
    name: "highfive",
    code: `$title[1;$username[$mentioned[1]] got highfived by $username]
    $image[1;$jsonRequest[https://nekos.best/api/v1/highfive; url;An error occurred]]
$color[1;RANDOM]
$footer[1;Powered by nekos.best api]
$argsCheck[1;Mention the person you want to hivefive]`
   })