"use strict";(self.webpackChunksocket_v_2_docs=self.webpackChunksocket_v_2_docs||[]).push([[450],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),k=a,h=d["".concat(u,".").concat(k)]||d[k]||p[k]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6722:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:2},u="Query Routes",l={unversionedId:"guides/query-routes",id:"guides/query-routes",title:"Query Routes",description:"In order to execute trades using socket, we must first establish the tokens being exchanged and the path.",source:"@site/docs/guides/query-routes.md",sourceDirName:"guides",slug:"/guides/query-routes",permalink:"/guides/query-routes",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guides/query-routes.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Quick Start",permalink:"/guides/quick-start"},next:{title:"Executing a route",permalink:"/guides/execute-routes"}},c={},p=[{value:"Initialise the SDK",id:"initialise-the-sdk",level:2},{value:"Retreiving the available tokens",id:"retreiving-the-available-tokens",level:2},{value:"Creating a path",id:"creating-a-path",level:2},{value:"Querying the best route",id:"querying-the-best-route",level:2}],d={toc:p};function k(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"query-routes"},"Query Routes"),(0,o.kt)("p",null,"In order to execute trades using socket, we must first establish the tokens being exchanged and the path."),(0,o.kt)("h2",{id:"initialise-the-sdk"},"Initialise the SDK"),(0,o.kt)("p",null,"First initialise the SDK with an api key. By default the sdk will return both single and multi-transaction routes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const socket = new Socket({ apiKey: API_KEY });\n")),(0,o.kt)("p",null,"If you would like to only receive single transaction routes, set ",(0,o.kt)("inlineCode",{parentName:"p"},"singleTxOnly: true")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const socket = new Socket({\n  apiKey: API_KEY\n  defaultQuotePreferences: {\n    singleTxOnly: true,\n  }\n});\n\n")),(0,o.kt)("h2",{id:"retreiving-the-available-tokens"},"Retreiving the available tokens"),(0,o.kt)("p",null,"There are a defined set of tokens that can be traded using the socket protocol for a given ",(0,o.kt)("inlineCode",{parentName:"p"},"from")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"to")," chain. You can retrieve a list of these tokens:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const tokenList = await socket.getTokenList({\n  fromChainId: 1, // Ethereum Mainnet\n  toChainId: 137, // Polygon Mainnet\n});\n")),(0,o.kt)("p",null,"The list of tokens for each chain can be accessed as such:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"tokenList.from; // Tokens on the from chain\ntokenList.to; // Tokens on the to chain\n")),(0,o.kt)("p",null,"You can for example retrieve the native token object by doing:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const eth = tokenList.from.find(\n  (token) => token.address === 0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee\n);\nconst matic = tokenList.to.find(\n  (token) => token.address === 0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee\n);\n")),(0,o.kt)("h2",{id:"creating-a-path"},"Creating a path"),(0,o.kt)("p",null,"Now we are ready to create a path which trades a ",(0,o.kt)("inlineCode",{parentName:"p"},"fromToken")," to the destination ",(0,o.kt)("inlineCode",{parentName:"p"},"toToken"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const path = new Path({ fromToken: eth, toToken: matic });\n")),(0,o.kt)("h2",{id:"querying-the-best-route"},"Querying the best route"),(0,o.kt)("p",null,"Input the path, the amount to trade and the user's address in order to retrieve a quote."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const quote = await socket.getBestQuote({\n  path,\n  amount: "1000000000000000000", // 1 ETH\n  address: "<USER_ADDRESS_HERE",\n});\n')),(0,o.kt)("p",null,"You can also retrieve the full list of quotes from the api using ",(0,o.kt)("inlineCode",{parentName:"p"},"socket.getAllRoutes"),"."),(0,o.kt)("p",null,"If you would like to further customize the quotes that are returned, pass a ",(0,o.kt)("inlineCode",{parentName:"p"},"QuotePreferences")," object to the quote call. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const fastestQuote = await socket.getBestQuote(\n  {\n    path,\n    amount,\n    address,\n  },\n  { sort: "time" }\n);\n')))}k.isMDXComponent=!0}}]);