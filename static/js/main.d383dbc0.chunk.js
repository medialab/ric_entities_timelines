(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,t,a){},112:function(e,t,a){},119:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(26),c=a.n(r),o=(a(79),a(10)),l=a(24),s=a(70),u=a(23),m=a(25),d=a(38),h=a(18),f=a(72),p=a(71),b=(a(80),a(7)),y=a(37),g=a(33),E=a(35),v=a(6),O=a(64),j=a(34),_=a.n(j),k=a(41),w=a(73),H=a(51),P=a(42),G=a(66),N=a(65),x={links:[],entities:[],status:{}},C=Object(n.createContext)({state:x,dispatch:function(e){console.log("not la bonne fonction poto",e)}}),M=Object(k.a)(function(e){return e.GPH_code}),S=function(e,t){var a=new N.MultiMap;for(var n in e)if(e.hasOwnProperty(n)){var i=e[n],r=t[n];if(void 0===r)continue;for(var c=0;c<i.length;c++){var o=i[c];a.set(r,o)}}return a},L=function(e,t){switch(t.type){case"LOADED":var a=t.payload[0],n=t.payload[1],i=a.map(function(e){var t={id:_()(),GPH_code:e.GPH_code,GPH_name:e.GPH_name,end_year:new Date(e.end_year),start_year:new Date(e.start_year),status:n[e.GPH_status],sovereign:{GPH_code:e.sovereign_GPH_code,GPH_name:e.sovereign_GPH_name}};return t.status||console.error("unknown link type",e),t}),r=M(i),c=Object(G.a)(function(e,t){var a=Object(P.a)(Object(H.a)(function(e){return Object(g.a)(e.GPH_code,t)}),Object(k.a)(function(e){return e.sovereign.GPH_code||t})),n=Object(P.a)(Object(H.a)(function(e){return Object(g.a)(e.sovereign.GPH_code,t)}),M),c=a(e),o=n(i),l=Object(k.a)(function(e){return e.status.slug},Object(w.a)(Object(v.k)(o)));return{id:t,name:r[t][0].GPH_name,start:Object(v.e)(e,function(e){return e.start_year}),end:Object(v.d)(e,function(e){return e.end_year}),occupations:c,campains:o,campainsMap:l}},r),l=Object(s.a)(function(e){return Object(o.a)({},e,{occupations:S(e.occupations,c),campains:S(e.campains,c)})},c);return i.forEach(function(e){e.sovereign=l[e.sovereign.GPH_code]}),{links:i,entities:Object(v.k)(l),status:n}}return e},D=function(e){return Object(O.action)("LOADED",e)},T=Object(v.c)("./data/GeoPolHist_entities_status_in_time.csv"),A=fetch("./data/GPH_status.json").then(function(e){return e.json()}),W=Promise.all([T,A]),I=function(e){var t=Object(n.useReducer)(L,x),a=Object(b.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)(function(){W.then(Object(P.a)(D,c))},[]),i.a.createElement(C.Provider,{value:{state:r,dispatch:c}},e.children)},B=a(67),F=a(40),z=a.n(F),R=function(e,t){return"translate(".concat(e,", ").concat(t,")")},q=(a(111),0),J=0,U=50,V=0,Y=Object(v.j)("%Y"),$=function(e){var t=e.xScale,a=e.data,r=e.nbLines,c=e.colorScale,o=Object(n.useMemo)(_.a,[]),s=e.width-V-J,u=r*e.lineHeight+q+U,m=u-q-U,d=e.hideGroupLabels?0:200,h=m/a.length;t.range([d,s-15]);var f=Object(v.f)().domain([0,r]).range([0,m]),p=Object(v.b)(t),g=Object(v.a)(t),E=.8*h,O=(h-E)/2,j=Object(n.useState)(),k=Object(b.a)(j,2),w=k[0],H=k[1],P=Object(n.useState)(),G=Object(b.a)(P,2),N=G[0],x=G[1],C=Object(y.a)(function(e){return e.priority+e.GPH_status})(Object(B.a)(a.reduce(function(e,t){var a=Object(b.a)(t,2)[1];return[].concat(Object(l.a)(e),Object(l.a)(a))},[]).reduce(function(e,t){return e[t.status.slug]=t.status,e},{}))).reverse();return Object(n.useEffect)(function(){return function(){H(null),x(null)}},[e.data]),i.a.createElement("div",{className:"timelines-container",style:{width:s},onMouseLeave:function(){return H(null)}},i.a.createElement("div",{className:"legend"},i.a.createElement("div",{className:"legend-container"},C.map(function(e){return i.a.createElement("span",{key:e.slug,onClick:function(){N===e.slug?x(null):x(e.slug)},className:z()({"legend-item":!0,"legend-item--hidden":N&&N!==e.slug})},i.a.createElement("div",{className:"colorLegendItem",style:{backgroundColor:c(e.slug)}}),i.a.createElement("span",null,e.GPH_status))})),i.a.createElement("svg",{height:20,width:e.width},i.a.createElement("g",{transform:R(V,q)},i.a.createElement("g",{transform:R(0,17),ref:function(e){e&&Object(v.i)(e).call(p)}})))),i.a.createElement("div",{className:"timeline"},i.a.createElement("svg",{height:u,width:e.width},i.a.createElement("g",{transform:R(V,q)},i.a.createElement("defs",null,i.a.createElement("pattern",{id:"diagonalHatch-".concat(o),patternUnits:"userSpaceOnUse",width:"4",height:"4"},i.a.createElement("path",{d:"M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2",style:{stroke:"black",strokeWidth:1}})),i.a.createElement("clipPath",{id:"name-area-".concat(o)},i.a.createElement("rect",{x:0,y:0,height:m,width:d}))),i.a.createElement("g",{transform:R(0,m),ref:function(e){e&&Object(v.i)(e).call(g)}}),i.a.createElement("g",{className:z()({group:!0,has_status:!!N},N)},a.map(function(a,n){var r=Object(b.a)(a,2),l=r[0],u=r[1];return i.a.createElement("g",{key:l.name,className:l.name,transform:R(0,f(n))},i.a.createElement("line",{className:"group-separator",x1:0,x2:s,y1:0,y2:0,stroke:"black",strokeOpacity:.1}),i.a.createElement("text",{className:"entity-label",style:{clipPath:"url(#name-area-".concat(o,")"),cursor:"pointer"},fontSize:"1em",dy:"1em",width:d,onClick:function(){return e.onEntityClick(l.id)}},l.name.length<=22?l.name:l.name.slice(0,22)+"\u2026",i.a.createElement("title",null,l.name)),i.a.createElement("g",null,u.map(function(a){var r,s=(r=a,Math.max(e.intervalMinWidth,t(r.end_year)-t(r.start_year)));return i.a.createElement("g",{key:a.id,transform:R(t(a.start_year),O)},i.a.createElement("rect",{rx:"5",className:z()("link-rect",a.status.slug),onClick:function(){return e.onEntityClick(l.id)},onMouseEnter:function(){return H({link:a,index:n})},fill:isNaN(s)?"url(#diagonalHatch-".concat(o,")"):c(a.status.slug),stroke:w&&w.link===a?"white":"black",strokeOpacity:w&&w.link===a?1:.2,strokeWidth:w&&w.link===a?2:1,width:isNaN(s)?"100%":s,height:E,y:0,x:0}))})))})))),w&&i.a.createElement("div",{className:"tooltip-container",style:{transform:"translate(".concat(t(w.link.start_year),"px, ").concat(f(w.index)-e.lineHeight,"px)")}},i.a.createElement("span",{className:"tooltip"},w.link.GPH_name," - ",w.link.status.GPH_status," - ",Y(w.link.start_year)," to ",Y(w.link.end_year)))))},K=(a(112),function(e){e.country;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"topMenu"},i.a.createElement("span",{className:"appTitle"},i.a.createElement(u.Link,{to:"/"},"GeoPolHist"))))}),Q=Object(h.a)(function(e,t){return e>t}),X=Object(E.a)(function(e,t){return+t.end_year-+t.start_year+e},0),Z={duration:Object(h.a)(function(e,t){var a=Object(b.a)(e,2)[1],n=Object(b.a)(t,2)[1];return X(n)-X(a)}),year:Object(h.a)(function(e,t){var a=Object(b.a)(e,2)[1],n=Object(b.a)(t,2)[1];return+Q(a.map(function(e){return e.start_year}))[0]-+Q(n.map(function(e){return e.start_year}))[0]}),name:Object(y.a)(function(e){return Object(b.a)(e,1)[0].name})},ee=Object(h.a)(function(e,t){return e.start_year>t.start_year}),te=function(e){return e.map(function(e){return[e[0],ee(e[1]).reduce(function(e,t){if(e&&0!==e.length){var a=e[e.length-1];if(a.end_year>t.start_year)if(a.status.priority>=t.status.priority){var n=a.end_year;+n===+a.end_year&&+t.end_year===+a.end_year||+n>+t.end_year?console.warn("one overlapping status removed",t):e.push(Object(o.a)({},t,{start_year:n}))}else a.end_year=t.start_year,e.push(Object(o.a)({},t));else e.push(Object(o.a)({},t));return e}return[Object(o.a)({},t)]},[])]})},ae=function(e){var t=e.history,a=e.country,r=Object(n.useCallback)(function(e){t.push("/country/".concat(e))},[t]),c=te(Array.from(a.occupations.associations())),s=te(Array.from(a.campains.associations())),u=Object(n.useMemo)(function(){return[].concat(Object(l.a)(c),Object(l.a)(s))},[c,s]),m=Object(v.e)(u,function(e){return Object(b.a)(e,1)[0].start}),h=Object(v.d)(u,function(e){return Object(b.a)(e,1)[0].end}),f=Object(v.h)().domain([m,h]),p=Object(n.useContext)(C).state,y=Object(v.g)(["#cd7f3d","#af49d8","#65da57","#d84397","#cbe240","#6c6cd4","#a3ca63","#ad63ab","#489046","#d74433","#6cdaaf","#c15b67","#86c5d8","#d8b94f","#6779a8","#787938","#d4a8cc","#4f8178","#cdcea7","#997462"]).domain(Object.keys(p.status).map(function(e){return p.status[e].slug})),g=Object(n.useState)(),E=Object(b.a)(g,2),O=E[0],j=E[1],_=Z[O||"year"](s);return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",null,i.a.createElement(K,{country:a}),i.a.createElement("h1",{className:"stickyTitle"},a.name),i.a.createElement("p",null,"GPH_code : ",a.id),i.a.createElement("h2",null,"Political status"),i.a.createElement($,{onEntityClick:r,intervalMinWidth:5,data:c,nbLines:a.occupations.dimension,lineHeight:20,width:1e3,xScale:f,colorScale:y}),i.a.createElement("div",null,i.a.createElement("h2",null,"Sovereign of ",a.campains.dimension," entities"),i.a.createElement("span",null,"sort by"," ",i.a.createElement(d.a,{className:"inlineSelect",onChange:function(e){return j(e.value)},defaultValue:{value:"year",label:"first date"},theme:function(e){return Object(o.a)({},e,{borderRadius:5,colors:Object(o.a)({},e.colors,{primary25:"lightgrey",primary:"grey",background:"white",color:"black"})})},isSearchable:!1,options:[{value:"year",label:"first date"},{value:"duration",label:"duration"},{value:"name",label:"entity name"}]}))),i.a.createElement($,{onEntityClick:r,intervalMinWidth:5,data:_,nbLines:a.campains.dimension,lineHeight:20,width:1e3,xScale:f,colorScale:y})))},ne=function(e){var t=e.match.params.id,a=Object(n.useContext)(C).state.entities.find(function(e){return Object(g.a)(e.id,t)});return void 0===a?i.a.createElement("div",null,"Loading"):i.a.createElement(ae,Object.assign({},e,{country:a}))},ie=a(50),re=Object(s.a)(function(e){return{value:e.id,label:e.name}}),ce=Object(h.a)(function(e,t){return t.occupations.size-e.occupations.size}),oe=Object(p.a)(0,["campainsMap","col","length"]),le=Object(h.a)(function(e,t){return oe(t)-oe(e)}),se=Object(f.a)(5),ue=function(e){var t=se(ce(e.entities)),a=se(le(e.entities)),n=se(function(e){var t=Object(h.a)(function(e,t){return t.end_year>e.end_year});return Object(h.a)(function(e,t){return t.end>e.end})(e.filter(function(e){return"dis"===t(Object(l.a)(e.occupations.values()))[0].status.slug}))}(e.entities)),r=new Intl.DateTimeFormat("en-GB",{year:"numeric"});return i.a.createElement("div",null,i.a.createElement("div",{className:"line"},i.a.createElement("div",{className:"grow"},i.a.createElement("h3",null,"Biggest number of sovereigns"),i.a.createElement("ol",null,t.map(function(e){return i.a.createElement("li",{key:e.id},i.a.createElement(u.Link,{to:"/country/".concat(e.id)},e.name," - ",e.occupations.size," sovereigns"))}))),i.a.createElement("div",{className:"grow"},i.a.createElement("h3",null,"Biggest number of colonies"),i.a.createElement("ol",null,a.map(function(e){return i.a.createElement("li",{key:e.id},i.a.createElement(u.Link,{to:"/country/".concat(e.id)},e.name," - ",oe(e)," colonies"))}))),i.a.createElement("div",{className:"grow"},i.a.createElement("h3",null,"Most recently dissolved"),i.a.createElement("ol",null,n.map(function(e){return i.a.createElement("li",{key:e.id},i.a.createElement(u.Link,{to:"/country/".concat(e.id)},e.name," - ",r.format(e.end)))})))))},me=function(e){var t=Object(n.useContext)(C).state,a=Object(n.useCallback)(function(t){e.history.push("/country/".concat(t.value))},[e.history]);return i.a.createElement(i.a.Fragment,null,i.a.createElement(K,null),i.a.createElement("div",{className:"container container--home"},i.a.createElement("h1",null,"Geopolitical entities of the world",i.a.createElement("br",null),"by political status since 1816"),i.a.createElement("p",null,"GeoPolHist is a quantitative tool that focuses on the questions \u201cwhat are?\u201d and \u201chow many?\u201d countries in the world. Created from the lists of national political units built by the Correlates of War project (mettre lien vers States et Entities si possible), GeoPolHist provides a comprehensive dataset and visual documentation that identifies the political status of each of the geopolitical entities that existed in the world since 1816. It allows for an approach of the political history of the world based on the dichotomy between sovereign and non-sovereign entites."),i.a.createElement("p",null,"See the ",i.a.createElement(ie.HashLink,{to:"#methodology"},"methodology")," and"," ",i.a.createElement(ie.HashLink,{to:"#dataset"},"data set")," sections to learn more."),i.a.createElement("h2",{id:"explore"},"Explore Geopolitical entities"),i.a.createElement(d.a,{placeholder:t.entities.length?"Search for a Geopolitical entity":"Still loading",onChange:a,options:re(t.entities),theme:function(e){return Object(o.a)({},e,{borderRadius:5,colors:Object(o.a)({},e.colors,{primary25:"lightgrey",primary:"grey",background:"white",color:"black"})})}}),t.entities.length?i.a.createElement(ue,{entities:t.entities}):i.a.createElement("p",null,"Data is still loading..."),i.a.createElement("h2",null,"Three periods in the political history of the world since 1816"),i.a.createElement("p",null,"Over the last two centuries, the political structure of the world went through three distinct periods during which one status predominated. From 1816 to the Berlin Conference in 1884/85, 13 % of the geopolitical entities of the world were sovereign (unrecognised); from 1886 to 1949, 20 % were \u2018colony\u2019, \u2018possession or \u2018protectorate\u2019\u2019; since 1950, 16 % are \u2018sovereign\u2019 (in the strict sense)."),i.a.createElement("iframe",{title:"GPH status evolutions in 1816,1885,1950 and 2020",src:"./sankey.html"}),i.a.createElement("p",{style:{textAlign:"center"}},i.a.createElement("a",{href:"./sankey.html"},"open the diagram in full screen")),i.a.createElement("h2",{id:"methodology"},"Methodology"),i.a.createElement("p",null,"A geopolitical entity is any form of human social community or territory. It may be geographically based or not, inhabited or not, sovereign and independent or not. It is \u2018political\u2019 in the Aristotelian sense of the political order, whose ultimate goal is peace through justice inside the entity, war and conflicts remaining a potential option outside the limits of the entity. Through history, political entities of the type \u2018human social community\u2019 have taken the form of tribe, chiefdom, city-state, kingdom, empire, caste, seigneury or nation. In the GPH database, political entities of the type \u2018territory\u2019 are uninhabited islands, atolls or reefs."),i.a.createElement("p",null,"The GeoPolHist dataset will be fully described in the paper"," ",i.a.createElement("i",null,'"How many countries in the world? The geopolitical entities of the world and their political status from 1816 to the present"')," ","which is currently under review"),i.a.createElement("h2",{id:"dataset"},"GeoPolHist data set"),i.a.createElement("p",null,"The GeoPolHist data set is published under ODbl licence:",i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("a",{href:"/data/GeoPolHist_status.csv"},"GeoPolHist_status.csv")," - list of political status and their definitions;"),i.a.createElement("li",null,i.a.createElement("a",{href:"/data/GeoPolHist_entities.csv"},"GeoPolHist_entities.csv")," ","- list of GPH entities;"),i.a.createElement("li",null,i.a.createElement("a",{href:"/data/GeoPolHist_entities_status_in_time.csv"},"GeoPolHist_entities_status_in_time.csv")," ","- list of political dependencies between GPH entities in time;"))),i.a.createElement("p",null,"The data set is versionned and fully documented in the"," ",i.a.createElement("a",{href:"https://github.com/medialab/GeoPolHist"},"GeoPolHist datapackage repository"))))},de=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(I,null,i.a.createElement(u.HashRouter,{basename:"/GeoPolHist"},i.a.createElement(m.d,{path:"/",exact:!0,component:me}),i.a.createElement(m.d,{path:"/country/:id",component:ne}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(de,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},74:function(e,t,a){e.exports=a(119)},79:function(e,t,a){},80:function(e,t,a){}},[[74,1,2]]]);
//# sourceMappingURL=main.d383dbc0.chunk.js.map