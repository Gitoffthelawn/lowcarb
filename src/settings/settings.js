
const webext = require('../webExtApi').webext;
const SelectorList = require('./selectorlist').SelectorList;
const WhilteListModel = require('./whitelistmodel').WhilteListModel;

new SelectorList(
        document.getElementById('whitelist'),
        new WhilteListModel());


function removeCookies() {
    webext.sendMessage({"command": "removeCookies"}).catch((reason) => {
        console.log('sending message was rejected: ' + reason);
    });
}

function logCookies() {
    console.log('# Cookiiiiis #');
    let Cookie = require('../cookie').Cookie;
    webext.getAllCookies().then((cookies) => {
        for (let cookieDef of cookies) {
            let cookie = new Cookie(cookieDef);
            console.log(`# Cookie: ${cookie.url} :: ${cookie.cookieDef.name} :: ${cookie.cookieDef.value}`);
        }
    })
}

document.getElementById('removeCookies').addEventListener('click', removeCookies);
document.getElementById('logCookies').addEventListener('click', logCookies);

