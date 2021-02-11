(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{180:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(207)),p={title:"app.ask",sidebar_label:"app.ask"},c={unversionedId:"developer/app/components/ask",id:"developer/app/components/ask",isDocsHomePage:!1,title:"app.ask",description:"This function will send message/data to the specified bot",source:"@site/docs/developer/app/components/ask.md",slug:"/developer/app/components/ask",permalink:"/docs/developer/app/components/ask",version:"current",sidebar_label:"app.ask",sidebar:"developer",previous:{title:"app.allSteps",permalink:"/docs/developer/app/components/all-steps"},next:{title:"app.BOT_ENV",permalink:"/docs/developer/app/components/bot-env"}},l=[{value:"Input Parameters",id:"input-parameters",children:[]},{value:"Output Parameters",id:"output-parameters",children:[]},{value:"Example",id:"example",children:[]}],i={toc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This function will send message/data to the specified bot"),Object(o.b)("h2",{id:"input-parameters"},"Input Parameters"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"botId"),Object(o.b)("li",{parentName:"ol"},"data")),Object(o.b)("h2",{id:"output-parameters"},"Output Parameters"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"No Output")),Object(o.b)("p",null,"(It will directly shows the data sent by the bot)"),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'app.ask("x1602139738821", {\n        "message": "testing"\n    }).then((data) => {\n        \n    }).catch(error => {\n        // do somthing on fail\n    })\n')))}s.isMDXComponent=!0},207:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),s=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=s(n),b=r,m=u["".concat(p,".").concat(b)]||u[b]||d[b]||o;return n?a.a.createElement(m,c(c({ref:t},i),{},{components:n})):a.a.createElement(m,c({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,p[1]=c;for(var i=2;i<o;i++)p[i]=n[i];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);