var _0x6be3=["\x70\x6C\x61\x74\x6E\x6F","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x32\x64","\x67\x65\x74\x43\x6F\x6E\x74\x65\x78\x74","\x6F\x6E\x6C\x6F\x61\x64","\x64\x72\x61\x77\x49\x6D\x61\x67\x65","\x73\x72\x63","\x69\x6D\x67\x2F\x73\x70\x61\x63\x65\x2E\x70\x6E\x67","\x6F\x66\x66\x73\x65\x74\x58","\x6F\x66\x66\x73\x65\x74\x59","\x68\x74\x6D\x6C","\x23\x78\x53\x70\x61\x6E","\x23\x79\x53\x70\x61\x6E","\x6D\x6F\x75\x73\x65\x64\x6F\x77\x6E","\x23\x70\x6C\x61\x74\x6E\x6F","\x78","\x79","\x72\x79\x63\x68\x6C\x6F\x73\x74","\x70\x6F\x6C\x6F\x6D\x65\x72","\x79\x65\x6C\x6C\x6F\x77","\x62\x6C\x75\x65","\x50\x49","\x73\x69\x6E","\x63\x6F\x73","\x62\x65\x67\x69\x6E\x50\x61\x74\x68","\x66\x69\x6C\x6C\x53\x74\x79\x6C\x65","\x61\x72\x63","\x66\x69\x6C\x6C","\x63\x6C\x6F\x73\x65\x50\x61\x74\x68","\x77\x69\x64\x74\x68","\x63\x61\x6E\x76\x61\x73","\x68\x65\x69\x67\x68\x74","\x63\x6C\x65\x61\x72\x52\x65\x63\x74","\x72\x61\x6E\x64\x6F\x6D","\x66\x6C\x6F\x6F\x72"];$(function (){var _0x27a9x1=document[_0x6be3[1]](_0x6be3[0]);var _0x27a9x2=_0x27a9x1[_0x6be3[3]](_0x6be3[2]);var _0x27a9x3= new Image();_0x27a9x3[_0x6be3[4]]=function (){_0x27a9x2[_0x6be3[5]](_0x27a9x3,0,0);} ;_0x27a9x3[_0x6be3[6]]=_0x6be3[7];setInterval(function (){gameloop(_0x27a9x2);} ,30);$(_0x6be3[14])[_0x6be3[13]](function (_0x27a9x4){var _0x27a9x5,_0x27a9x6;_0x27a9x5=_0x27a9x4[_0x6be3[8]];_0x27a9x6=_0x27a9x4[_0x6be3[9]];$(_0x6be3[11])[_0x6be3[10]](_0x27a9x5);$(_0x6be3[12])[_0x6be3[10]](_0x27a9x6);} );} );var Planeta=function (_0x27a9x8,_0x27a9x9,_0x27a9xa,_0x27a9xb){this[_0x6be3[15]]=_0x27a9x8;this[_0x6be3[16]]=_0x27a9x9;this[_0x6be3[17]]=_0x27a9xa;this[_0x6be3[18]]=_0x27a9xb;} ;var slunce= new Planeta(400,400,4,20);var zeme= new Planeta(0,0,5,10);var uhel=0;function gameloop(_0x27a9x2){render(_0x27a9x2);update();} ;function render(_0x27a9x2){clear(_0x27a9x2);kruh(_0x27a9x2,slunce[_0x6be3[15]],slunce[_0x6be3[16]],slunce[_0x6be3[18]],_0x6be3[19]);kruh(_0x27a9x2,zeme[_0x6be3[15]],zeme[_0x6be3[16]],zeme[_0x6be3[18]],_0x6be3[20]);} ;function update(){uhel+=(Math[_0x6be3[21]]*2)/100;if(uhel>=Math[_0x6be3[21]]*2){uhel=0;} ;zeme[_0x6be3[15]]=Math[_0x6be3[22]](uhel)*100+slunce[_0x6be3[15]];zeme[_0x6be3[16]]=Math[_0x6be3[23]](uhel)*100+slunce[_0x6be3[16]];} ;function kruh(_0x27a9x2,_0x27a9x8,_0x27a9x9,_0x27a9x13,_0x27a9x14){_0x27a9x2[_0x6be3[24]]();_0x27a9x2[_0x6be3[25]]=_0x27a9x14;_0x27a9x2[_0x6be3[26]](_0x27a9x8,_0x27a9x9,_0x27a9x13,0,Math[_0x6be3[21]]*2);_0x27a9x2[_0x6be3[27]]();_0x27a9x2[_0x6be3[28]]();} ;function clear(_0x27a9x2){_0x27a9x2[_0x6be3[32]](0,0,_0x27a9x2[_0x6be3[30]][_0x6be3[29]],_0x27a9x2[_0x6be3[30]][_0x6be3[31]]);} ;function randNum(_0x27a9x17,_0x27a9x18){return (Math[_0x6be3[34]](Math[_0x6be3[33]]()*_0x27a9x18)+_0x27a9x17);} ;