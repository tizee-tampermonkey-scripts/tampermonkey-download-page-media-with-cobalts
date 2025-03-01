// ==UserScript==
// @name         download page media with cobalt.tools
// @namespace    https://github.com/tizee-tampermonkey-scripts/tampermonkey-download-page-media-with-cobalts
// @version      1.1
// @description  Download media with cobalt.tools
// @author       tizee
// @match        *://*.bilibili.com/video/*
// @match        *://*.x.com/*/status/*
// @match        *://*.x.com/*/status/*/video/*
// @match        *://*.x.com/i/spaces/*
// @match        *://*.soundcloud.com/*
// @match        *://*.tiktok.com/*
// @match        *://*.youtube.com/watch?*
// @match        *://*.youtu.be/*
// @match        *://*.youtube.com/shorts/*
// @match        *://*.instagram.com/p/*
// @match        *://*.instagram.com/reels/*
// @match        *://*.instagram.com/reel/*
// @match        *://*.reddit.com/r/*/comments/*/*
// @match        *://*.tumblr.com/post/*
// @match        *://*.tumblr.com/*/*
// @match        *://*.tumblr.com/*/*/*
// @match        *://*.tumblr.com/blog/view/*/*
// @match        *://*.vimeo.com/*
// @match        *://*.vk.com/video*
// @match        *://*.vk.com/*?w=wall*
// @match        *://*.vk.com/clip*
// @match        *://*.vine.co/*
// @match        *://*.streamable.com/*
// @match        *://*.pinterest.com/pin/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=cobalt.tools
// @grant        GM_openInTab
// @run-at       context-menu
// ==/UserScript==
(function () {
  'use strict';
  GM_openInTab(`https://cobalt.tools?u=${window.location.href}`, {
    // whether the new tab should be active (selected) or not.
    active: true,
    //  the position at which the new tab should be inserted in the tab strip.
    insert: true,
  })
})();
