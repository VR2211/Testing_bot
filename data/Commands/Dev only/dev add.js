module.exports = {
 	name: "deva",
    code: `
    $setGlobalUserVar[Cash;$sum[$getGlobalUserVar[Cash;$authorID;economy];$random[1.49999999999998e+26;1.49999999999998e+27]];$authorID;economy]
    I have add to you account $random[1.49999999999998e+26;1.49999999999998e+27] 
    $onlyForIDs[745691705390399590;822525798065373265;This can be used only by the developer only]`
}