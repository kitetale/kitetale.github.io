(self.webpackChunkashley_kim=self.webpackChunkashley_kim||[]).push([[78],{1955:function(e,t,r){var o=r(7927);e.exports={MDXRenderer:o}},7927:function(e,t,r){var o=r(861),n=r(3515),a=r(8416),l=r(7071),s=["scope","children"];function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var i=r(7294),m=r(4983).mdx,f=r(2174).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,a=l(e,s),c=f(t),p=i.useMemo((function(){if(!r)return null;var e=u({React:i,mdx:m},c),t=Object.keys(e),a=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(t,[""+r])).apply(void 0,[{}].concat(o(a)))}),[r,t]);return i.createElement(p,u({},a))}},7302:function(e,t,r){"use strict";r.r(t);var o=r(7294),n=r(1082),a=r(6296),l=r(1955),s=r(198),c=r(6028),u=r(5414),i=r(2872),m=r(3355);t.default=function(e){var t=e.data,r={color:t.mdx.frontmatter.title_color},f={color:t.mdx.frontmatter.next_color},p={color:t.mdx.frontmatter.prev_color},d=(0,o.useState)(!1),x=d[0],y=d[1],b=function(){window.pageYOffset>800?y(!0):y(!1)};(0,o.useEffect)((function(){window.addEventListener("scroll",b)}),[]);return o.createElement("div",{className:s.i8},o.createElement(u.q,null,o.createElement("link",{rel:"icon",type:"image/png",href:i.Z}),o.createElement("title",null,"Ashley Kim | ",t.mdx.frontmatter.title)),o.createElement("div",{className:s.i8},o.createElement(c.Z,null),o.createElement("h1",{className:s.oG},t.mdx.frontmatter.title),o.createElement("h2",{className:s.ib},t.mdx.frontmatter.description),o.createElement("div",{className:s.ny},o.createElement(a.G,{className:s.R7,image:(0,a.c)(t.mdx.frontmatter.hero_img),alt:t.mdx.frontmatter.hero_img_alt}),o.createElement("h1",{className:s.Nm,style:r},t.mdx.frontmatter.title)),o.createElement("div",{className:s._R},o.createElement("div",{className:s.kQ},o.createElement(l.MDXRenderer,{local:t.mdx.frontmatter.local_imgs},t.mdx.body))),o.createElement("div",{className:s.OA},o.createElement("h2",{className:s.q},"View Other Projects"),o.createElement("div",{className:s.o_},o.createElement(n.rU,{className:s.Gf,to:"/works/"+t.mdx.frontmatter.prev_link},o.createElement(a.G,{className:s.YH,image:(0,a.c)(t.mdx.frontmatter.prev_img),alt:"hero image of "+t.mdx.frontmatter.prev}),o.createElement("h3",{className:s.Yp,style:p},t.mdx.frontmatter.prev)),o.createElement(n.rU,{className:s.Gf,to:"/works/"+t.mdx.frontmatter.next_link},o.createElement(a.G,{className:s.YH,image:(0,a.c)(t.mdx.frontmatter.next_img),alt:"hero image of "+t.mdx.frontmatter.next}),o.createElement("h3",{className:s.zF,style:f},t.mdx.frontmatter.next))),o.createElement("div",{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},className:x?s.Gf:s.wP},o.createElement("div",{className:s.Qy},o.createElement("img",{src:m.Z,className:s.IM,alt:"Scroll to Top button"})))),o.createElement("footer",{className:s.Mv},"(ง˙∇˙)ว © 2023 Ashley Kim (ว˙∇˙)ง"),o.createElement("footer",{className:s.dI},"Built with Gatsby ","&"," React! Website under construction.")))}},3355:function(e,t){"use strict";t.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzQiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCAzNCAzOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE3LjE0MzEgMzYuMTQyOFYxLjg1NzExTTIuMTQzMDcgMTYuODU3MUwxNy4xNDMxIDEuODU3MTFMMzIuMTQzMSAxNi44NTcxIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"},3897:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o},e.exports.__esModule=!0,e.exports.default=e.exports},3405:function(e,t,r){var o=r(3897);e.exports=function(e){if(Array.isArray(e))return o(e)},e.exports.__esModule=!0,e.exports.default=e.exports},3515:function(e,t,r){var o=r(6015),n=r(9617);function a(t,r,l){return n()?(e.exports=a=Reflect.construct.bind(),e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=a=function(e,t,r){var n=[null];n.push.apply(n,t);var a=new(Function.bind.apply(e,n));return r&&o(a,r.prototype),a},e.exports.__esModule=!0,e.exports.default=e.exports),a.apply(null,arguments)}e.exports=a,e.exports.__esModule=!0,e.exports.default=e.exports},8416:function(e,t,r){var o=r(4062);e.exports=function(e,t,r){return(t=o(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},9617:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},9498:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},2281:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},7071:function(e){e.exports=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n},e.exports.__esModule=!0,e.exports.default=e.exports},861:function(e,t,r){var o=r(3405),n=r(9498),a=r(6116),l=r(2281);e.exports=function(e){return o(e)||n(e)||a(e)||l()},e.exports.__esModule=!0,e.exports.default=e.exports},5036:function(e,t,r){var o=r(8698).default;e.exports=function(e,t){if("object"!==o(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},4062:function(e,t,r){var o=r(8698).default,n=r(5036);e.exports=function(e){var t=n(e,"string");return"symbol"===o(t)?t:String(t)},e.exports.__esModule=!0,e.exports.default=e.exports},8698:function(e){function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},6116:function(e,t,r){var o=r(3897);e.exports=function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-pages-works-mdx-slug-js-f1e329438707e00d079f.js.map