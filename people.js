let persons = "eyJscXZldHdzIjogIlJhcmVzIiwgIm1xYnR2b3AiOiAiTWFyaWEiLCAibWNmZ25lcyI6ICJCb3RleiIsICJ2bWZrenh2IjogIkFuZHJlZWEiLCAiZ2plZ3NlayI6ICJuYXNpaSBub3N0cmkgZHJhZ2kiLCAid3l2dW56biI6ICJUdXR1IiwgImRpZm5kaXYiOiAiU3RlZmFuaWEiLCAianplY2RkeiI6ICJGYW1pbGlhIEFuZHJlaSIsICJ4b2J1dWhsIjogIkFsZXgiLCAieXlma2t1diI6ICJBZGkiLCAiaXFneG1meSI6ICJBbGV4IiwgImprZ3Fka2oiOiAiRGFuaSIsICJzaXBjd2l5IjogIkJvZ2RhbiIsICJlYnFqcWVxIjogIk1pcmNlYSIsICJrYWFua21yIjogIkFuYSBzaSBMZW8iLCAibmN6Y3N2ZSI6ICJNaXRzdXJpIiwgImlubmNyeG0iOiAiR2lsbHkiLCAicmlnY3dtZCI6ICJDcmlzdGkiLCAicnVwY3JneiI6ICJBbmNhIHNpIFNlYmkiLCAiZmJwdXNndiI6ICJTb3JpbiIsICJnYWF5empmIjogIlN0ZWZhbiBzaSBFbmUiLCAidWV1cnlqYSI6ICJBbGV4IiwgImZuemZmYXkiOiAiT3ZpZGl1IiwgImx5a2p4aGEiOiAiTWF4aW0iLCAiZmF0eWdtZiI6ICJWYWxpIiwgInJmbWNleGoiOiAiQW5kcmVpIiwgInl0ZXhybXMiOiAiR3JpZ29yZSIsICJ0Ym1ydWZ5IjogIkNvc21pbiBzaSBBbmEiLCAiYmN0ZXphYyI6ICJWaW8iLCAib25nZHR0cyI6ICJBZGEiLCAicmpsYWZ4dSI6ICJSYWR1IHNpIEdhYmkifQ==";
let encoder={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=encoder._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=encoder._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/rn/g,"n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}

function getParameterByName(name) {
    url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function getPersonName() {
    let code = getParameterByName('code');
    let codes = eval('(' + encoder.decode(persons) + ')');
    let res = codes[code];
    return {personName: res, page: res ? "page_success.html" : "page_error.html"};
}