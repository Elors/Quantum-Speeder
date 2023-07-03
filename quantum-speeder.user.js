// ==UserScript==
// @name         Quantum Speeder
// @version      0.0.1
// @description  A userscript that for internal use only.
// @license      MIT
// @author       ElorsAt
// @namespace    https://github.com/elorsat
// @match        https://web.chinahrt.com/index.html*
// @match        https://videoadmin.chinahrt.com/videoPlay/play*
// @run-at       document-end
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @grant        GM_addValueChangeListener
// ==/UserScript==

var foo = "https://web.chinahrt.com/index.html";
var bar = "https://videoadmin.chinahrt.com/videoPlay/play";
var k = "elorsat_change_limit_su";
var v = 9947624;
var d = false;
// let's go!
if (window.location.href.startsWith(bar)) {
    // in deep
    console.log('let\'s go!');
    try {
        // remove limit
        attrset.allowPlayRate = 1;
        attrset.ifPauseBlur = false;
        job();
        console.info('@internal: allow play rate set');
    } catch (e) {
        console.info('failure?!...', e);
    }
}

async function job() {
    try {
        // set playrate to 16x
        document.getElementsByTagName('video')[0].playbackRate = 16;
        // play (must set mute so that can be played without user interact due to google policy)
        player.videoMute();
        document.getElementsByTagName('video')[0].play();
    } catch (e) {
        console.info("@extennal: waitting for video dom");
        await sleep(300);
        job();
    }
    GM_deleteValue(k);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
