if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,i,n)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const c={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return r;case"module":return c;default:return e(s)}}))).then((e=>{const s=n(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-1ca495a9"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Lighthouse.PNG",revision:"176af6643f052f78a9c39e916d827289"},{url:"/PISB.jfif",revision:"5fac86fb90c8cb922d48e0266de1dd53"},{url:"/Picto.jfif",revision:"f584c0612a91af17fb31c88ba4fdd63c"},{url:"/_next/static/chunks/0e226fb0-8229b42c6d34d184.js",revision:"j1P8ZrIxcXUR0-AHqFhYb"},{url:"/_next/static/chunks/486-5e2156e6596d92c4.js",revision:"j1P8ZrIxcXUR0-AHqFhYb"},{url:"/_next/static/chunks/framework-0d72f87c7081bf6b.js",revision:"j1P8ZrIxcXUR0-AHqFhYb"},{url:"/_next/static/chunks/main-95c1ad1b6ecb9308.js",revision:"j1P8ZrIxcXUR0-AHqFhYb"},{url:"/_next/static/chunks/pages/_app-cf07aa6c15db7c0b.js",revision:"j1P8ZrIxcXUR0-AHqFhYb"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"j1P8ZrIxcXUR0-AHqFhYb"},{url:"/_next/static/chunks/pages/index-260aebb0fce11c77.js",revision:"j1P8ZrIxcXUR0-AHqFhYb"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"j1P8ZrIxcXUR0-AHqFhYb"},{url:"/_next/static/chunks/webpack-fd0e596698318641.js",revision:"j1P8ZrIxcXUR0-AHqFhYb"},{url:"/_next/static/j1P8ZrIxcXUR0-AHqFhYb/_buildManifest.js",revision:"j1P8ZrIxcXUR0-AHqFhYb"},{url:"/_next/static/j1P8ZrIxcXUR0-AHqFhYb/_middlewareManifest.js",revision:"j1P8ZrIxcXUR0-AHqFhYb"},{url:"/_next/static/j1P8ZrIxcXUR0-AHqFhYb/_ssgManifest.js",revision:"j1P8ZrIxcXUR0-AHqFhYb"},{url:"/about.svg",revision:"6a3966fb7a834f454712c4596dd67d99"},{url:"/about.txt",revision:"16e8d178f8abe60047aeff8b7a829ec9"},{url:"/apple-touch-icon.png",revision:"cb9ee121e34a6fbc0fbba97eb8dc6040"},{url:"/experience.svg",revision:"e018df5592ccda0cb1bed79b4382f916"},{url:"/favicon-16x16.png",revision:"5a37ae407d3b45de2c7be06205af0b72"},{url:"/favicon-32x32.png",revision:"c9dec77c01dbd6f46151a41ccf810ff4"},{url:"/favicon.ico",revision:"98e8a7e9040fa5cd961690a1a7cf9747"},{url:"/hexxus_logo.png",revision:"eaf2e83ebafd01581baf6932294dca15"},{url:"/icon-192x192.png",revision:"a61cc3b350b070307583a80e4060a61b"},{url:"/icon-256x256.png",revision:"d5c3352568aab57ad56f4d0a84963e58"},{url:"/icon-384x384.png",revision:"8b5a852c0cfc5173397a44aef156eb3a"},{url:"/icon-512x512.png",revision:"5d0d0f617bfdd06c147302bde4b22811"},{url:"/landing.svg",revision:"6edb1a99e74e31a7a3f3f0eeb6250d64"},{url:"/manifest.webmanifest",revision:"714026f725c76b0481467f5c065639f1"},{url:"/next-resume//_next/server/middleware-manifest.json",revision:"j1P8ZrIxcXUR0-AHqFhYb"},{url:"/profile.jpg",revision:"d1cd123433b1f1d1a63662d6f1b870d4"},{url:"/projects.svg",revision:"1d6f5005e24ee7774f8a6280d75d661d"},{url:"/skill.svg",revision:"44f72ed9ce281d77f1459e47660e6c58"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
