"use strict";(self.webpackChunksocket_v_2_docs=self.webpackChunksocket_v_2_docs||[]).push([[418],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),k=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=k(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=k(n),m=r,u=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(u,i(i({ref:t},s),{},{components:n})):a.createElement(u,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var k=2;k<o;k++)i[k]=n[k];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9516:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return k},toc:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={},p="Socket",k={unversionedId:"reference/sdk/Socket",id:"reference/sdk/Socket",title:"Socket",description:"The Socket represents the socket sdk. This is the starting point for interacting",source:"@site/docs/reference/sdk/Socket.md",sourceDirName:"reference/sdk",slug:"/reference/sdk/Socket",permalink:"/socket-v2-docs/reference/sdk/Socket",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/reference/sdk/Socket.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Path",permalink:"/socket-v2-docs/reference/sdk/Path"},next:{title:"SocketTx",permalink:"/socket-v2-docs/reference/sdk/SocketTx"}},s={},d=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Constructors",id:"constructors",level:3},{value:"Properties",id:"properties",level:3},{value:"Methods",id:"methods",level:3},{value:"Constructors",id:"constructors-1",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties-1",level:2},{value:"client",id:"client",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"options",id:"options",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"Methods",id:"methods-1",level:2},{value:"assertTxDone",id:"asserttxdone",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"continue",id:"continue",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"executor",id:"executor",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"getAllQuotes",id:"getallquotes",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"getBestQuote",id:"getbestquote",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"getTokenList",id:"gettokenlist",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"start",id:"start",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-9",level:4}],c={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"socket"},"Socket"),(0,o.kt)("p",null,"The Socket represents the socket sdk. This is the starting point for interacting\nwith the socket SDK. It allows you to retrieve routes and start the execution of trades based on quotes"),(0,o.kt)("p",null,"It includes direct access to the socket api."),(0,o.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,o.kt)("h3",{id:"constructors"},"Constructors"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/socket-v2-docs/reference/sdk/Socket#constructor"},"constructor"))),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/socket-v2-docs/reference/sdk/Socket#client"},"client")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/socket-v2-docs/reference/sdk/Socket#options"},"options"))),(0,o.kt)("h3",{id:"methods"},"Methods"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/socket-v2-docs/reference/sdk/Socket#asserttxdone"},"assertTxDone")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/socket-v2-docs/reference/sdk/Socket#continue"},"continue")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/socket-v2-docs/reference/sdk/Socket#executor"},"executor")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/socket-v2-docs/reference/sdk/Socket#getallquotes"},"getAllQuotes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/socket-v2-docs/reference/sdk/Socket#getbestquote"},"getBestQuote")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/socket-v2-docs/reference/sdk/Socket#gettokenlist"},"getTokenList")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/socket-v2-docs/reference/sdk/Socket#start"},"start"))),(0,o.kt)("h2",{id:"constructors-1"},"Constructors"),(0,o.kt)("h3",{id:"constructor"},"constructor"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"new Socket"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"options"),")"),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"options")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/socket-v2-docs/reference/interfaces/SocketOptions"},(0,o.kt)("inlineCode",{parentName:"a"},"SocketOptions"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Socket sdk options")))),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/socket.ts#L46"},"src/socket.ts:46")),(0,o.kt)("h2",{id:"properties-1"},"Properties"),(0,o.kt)("h3",{id:"client"},"client"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"client"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"Object")),(0,o.kt)("p",null,"API client for accessing the socket api directly"),(0,o.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"approvals")),(0,o.kt)("td",{parentName:"tr",align:"left"},"typeof ",(0,o.kt)("a",{parentName:"td",href:"/socket-v2-docs/reference/api/Approvals"},(0,o.kt)("inlineCode",{parentName:"a"},"Approvals")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"balances")),(0,o.kt)("td",{parentName:"tr",align:"left"},"typeof ",(0,o.kt)("a",{parentName:"td",href:"/socket-v2-docs/reference/api/Balances"},(0,o.kt)("inlineCode",{parentName:"a"},"Balances")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"quote")),(0,o.kt)("td",{parentName:"tr",align:"left"},"typeof ",(0,o.kt)("a",{parentName:"td",href:"/socket-v2-docs/reference/api/Quote"},(0,o.kt)("inlineCode",{parentName:"a"},"Quote")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"routes")),(0,o.kt)("td",{parentName:"tr",align:"left"},"typeof ",(0,o.kt)("a",{parentName:"td",href:"/socket-v2-docs/reference/api/Routes"},(0,o.kt)("inlineCode",{parentName:"a"},"Routes")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"server")),(0,o.kt)("td",{parentName:"tr",align:"left"},"typeof ",(0,o.kt)("a",{parentName:"td",href:"/socket-v2-docs/reference/api/Server"},(0,o.kt)("inlineCode",{parentName:"a"},"Server")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"supported")),(0,o.kt)("td",{parentName:"tr",align:"left"},"typeof ",(0,o.kt)("a",{parentName:"td",href:"/socket-v2-docs/reference/api/Supported"},(0,o.kt)("inlineCode",{parentName:"a"},"Supported")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"tokenLists")),(0,o.kt)("td",{parentName:"tr",align:"left"},"typeof ",(0,o.kt)("a",{parentName:"td",href:"/socket-v2-docs/reference/api/TokenLists"},(0,o.kt)("inlineCode",{parentName:"a"},"TokenLists")))))),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/socket.ts#L32"},"src/socket.ts:32")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"options"},"options"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"options"),": ",(0,o.kt)("a",{parentName:"p",href:"/socket-v2-docs/reference/interfaces/SocketOptions"},(0,o.kt)("inlineCode",{parentName:"a"},"SocketOptions"))),(0,o.kt)("p",null,"The api options"),(0,o.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/socket.ts#L27"},"src/socket.ts:27")),(0,o.kt)("h2",{id:"methods-1"},"Methods"),(0,o.kt)("h3",{id:"asserttxdone"},"assertTxDone"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,o.kt)("strong",{parentName:"p"},"assertTxDone"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"socketTx?"),"): ",(0,o.kt)("inlineCode",{parentName:"p"},"void")),(0,o.kt)("p",null,"Asserts that the transaction object has been marked done"),(0,o.kt)("h4",{id:"parameters-1"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"socketTx?")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/socket-v2-docs/reference/sdk/SocketTx"},(0,o.kt)("inlineCode",{parentName:"a"},"SocketTx"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"The socket transaction")))),(0,o.kt)("h4",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"void")),(0,o.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/socket.ts#L126"},"src/socket.ts:126")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"continue"},"continue"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"continue"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"activeRouteId"),"): ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"AsyncGenerator"),"<",(0,o.kt)("a",{parentName:"p",href:"/socket-v2-docs/reference/sdk/SocketTx"},(0,o.kt)("inlineCode",{parentName:"a"},"SocketTx")),", ",(0,o.kt)("inlineCode",{parentName:"p"},"void"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),">",">"),(0,o.kt)("p",null,"Continue an active route"),(0,o.kt)("h4",{id:"parameters-2"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"activeRouteId")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"number")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The active route id of the desired route to continue")))),(0,o.kt)("h4",{id:"returns-1"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"AsyncGenerator"),"<",(0,o.kt)("a",{parentName:"p",href:"/socket-v2-docs/reference/sdk/SocketTx"},(0,o.kt)("inlineCode",{parentName:"a"},"SocketTx")),", ",(0,o.kt)("inlineCode",{parentName:"p"},"void"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),">",">"),(0,o.kt)("p",null,"An iterator that will yield each transaction required in the route"),(0,o.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/socket.ts#L191"},"src/socket.ts:191")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"executor"},"executor"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,o.kt)("strong",{parentName:"p"},"executor"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"initialTx"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"activeRoute?"),"): ",(0,o.kt)("inlineCode",{parentName:"p"},"AsyncGenerator"),"<",(0,o.kt)("a",{parentName:"p",href:"/socket-v2-docs/reference/sdk/SocketTx"},(0,o.kt)("inlineCode",{parentName:"a"},"SocketTx")),", ",(0,o.kt)("inlineCode",{parentName:"p"},"void"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,o.kt)("p",null,"Returns a generator that yields each transaction for a route in sequence"),(0,o.kt)("h4",{id:"parameters-3"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"initialTx")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/socket-v2-docs/reference/interfaces/NextTxResponse"},(0,o.kt)("inlineCode",{parentName:"a"},"NextTxResponse"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"The first transaction to execute")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"activeRoute?")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/socket-v2-docs/reference/types#activerouteresponse"},(0,o.kt)("inlineCode",{parentName:"a"},"ActiveRouteResponse"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"The active route object if this executor is for an active route")))),(0,o.kt)("h4",{id:"returns-2"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"AsyncGenerator"),"<",(0,o.kt)("a",{parentName:"p",href:"/socket-v2-docs/reference/sdk/SocketTx"},(0,o.kt)("inlineCode",{parentName:"a"},"SocketTx")),", ",(0,o.kt)("inlineCode",{parentName:"p"},"void"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,o.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/socket.ts#L139"},"src/socket.ts:139")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"getallquotes"},"getAllQuotes"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"getAllQuotes"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"params"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"preferences?"),"): ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("a",{parentName:"p",href:"/socket-v2-docs/reference/interfaces/SocketQuote"},(0,o.kt)("inlineCode",{parentName:"a"},"SocketQuote")),"[]",">"),(0,o.kt)("h4",{id:"parameters-4"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"params")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/socket-v2-docs/reference/interfaces/QuoteParams"},(0,o.kt)("inlineCode",{parentName:"a"},"QuoteParams"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"The parameters of the quote")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"preferences?")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"QuotePreferences")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Additional route preferences for retrieving the quote from the api")))),(0,o.kt)("h4",{id:"returns-3"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("a",{parentName:"p",href:"/socket-v2-docs/reference/interfaces/SocketQuote"},(0,o.kt)("inlineCode",{parentName:"a"},"SocketQuote")),"[]",">"),(0,o.kt)("p",null,"All quotes found"),(0,o.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/socket.ts#L94"},"src/socket.ts:94")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"getbestquote"},"getBestQuote"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"getBestQuote"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"params"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"preferences?"),"): ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,o.kt)("a",{parentName:"p",href:"/socket-v2-docs/reference/interfaces/SocketQuote"},(0,o.kt)("inlineCode",{parentName:"a"},"SocketQuote")),">"),(0,o.kt)("h4",{id:"parameters-5"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"params")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/socket-v2-docs/reference/interfaces/QuoteParams"},(0,o.kt)("inlineCode",{parentName:"a"},"QuoteParams"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"The parameters of the quote")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"preferences?")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"QuotePreferences")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Additional route preferences for retrieving the quote from the api")))),(0,o.kt)("h4",{id:"returns-4"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,o.kt)("a",{parentName:"p",href:"/socket-v2-docs/reference/interfaces/SocketQuote"},(0,o.kt)("inlineCode",{parentName:"a"},"SocketQuote")),">"),(0,o.kt)("p",null,"The best quote if found or null"),(0,o.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/socket.ts#L83"},"src/socket.ts:83")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"gettokenlist"},"getTokenList"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"getTokenList"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"options"),"): ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<{ ",(0,o.kt)("inlineCode",{parentName:"p"},"from"),": ",(0,o.kt)("a",{parentName:"p",href:"/socket-v2-docs/reference/types#tokenasset"},(0,o.kt)("inlineCode",{parentName:"a"},"TokenAsset")),"[] = fromTokenList.result; ",(0,o.kt)("inlineCode",{parentName:"p"},"to"),": ",(0,o.kt)("a",{parentName:"p",href:"/socket-v2-docs/reference/types#tokenasset"},(0,o.kt)("inlineCode",{parentName:"a"},"TokenAsset")),"[] = toTokenList.result }",">"),(0,o.kt)("h4",{id:"parameters-6"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"options")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Object")),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"options.fromChainId")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"number")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The source chain id e.g. 0x1")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"options.toChainId")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"number")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The destination chain id e.g. 0x56")))),(0,o.kt)("h4",{id:"returns-5"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<{ ",(0,o.kt)("inlineCode",{parentName:"p"},"from"),": ",(0,o.kt)("a",{parentName:"p",href:"/socket-v2-docs/reference/types#tokenasset"},(0,o.kt)("inlineCode",{parentName:"a"},"TokenAsset")),"[] = fromTokenList.result; ",(0,o.kt)("inlineCode",{parentName:"p"},"to"),": ",(0,o.kt)("a",{parentName:"p",href:"/socket-v2-docs/reference/types#tokenasset"},(0,o.kt)("inlineCode",{parentName:"a"},"TokenAsset")),"[] = toTokenList.result }",">"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"from")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"to")," token lists"),(0,o.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/socket.ts#L59"},"src/socket.ts:59")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"start"},"start"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"start"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"quote"),"): ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"AsyncGenerator"),"<",(0,o.kt)("a",{parentName:"p",href:"/socket-v2-docs/reference/sdk/SocketTx"},(0,o.kt)("inlineCode",{parentName:"a"},"SocketTx")),", ",(0,o.kt)("inlineCode",{parentName:"p"},"void"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),">",">"),(0,o.kt)("p",null,"Start executing a socket quote/route."),(0,o.kt)("h4",{id:"parameters-7"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"quote")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/socket-v2-docs/reference/interfaces/SocketQuote"},(0,o.kt)("inlineCode",{parentName:"a"},"SocketQuote")))))),(0,o.kt)("h4",{id:"returns-6"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"AsyncGenerator"),"<",(0,o.kt)("a",{parentName:"p",href:"/socket-v2-docs/reference/sdk/SocketTx"},(0,o.kt)("inlineCode",{parentName:"a"},"SocketTx")),", ",(0,o.kt)("inlineCode",{parentName:"p"},"void"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),">",">"),(0,o.kt)("p",null,"An iterator that will yield each transaction required in the route"),(0,o.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/rugamoto/socket-v2-sdk/blob/72e8f92/src/socket.ts#L169"},"src/socket.ts:169")))}m.isMDXComponent=!0}}]);