(this.webpackJsonpritualhub=this.webpackJsonpritualhub||[]).push([[0],{106:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(8),i=a.n(r),c=(a(97),a(71)),o=(a(98),a(80)),s=a(11),m=a(16),u=(a(99),a(72)),d=a(73),E=function(){function e(t,a,n){Object(u.a)(this,e),this.username=t,this.repo=a,this.branch=n}return Object(d.a)(e,[{key:"get",value:function(e,t){if(-1===e.indexOf(".json"))return t("File type not supported.");fetch("https://raw.githubusercontent.com/"+this.username+"/"+this.repo+"/"+this.branch+"/"+e).then((function(e){return e.json()})).then((function(a){t(void 0,{name:e,content:a})}),(function(e){return t(e,void 0)}))}},{key:"getUpdates",value:function(e,t){if(-1===e.indexOf(".json"))return t("File type not supported.");fetch("https://api.github.com/repos/"+this.username+"/"+this.repo+"/commits?path="+e).then((function(e){return e.json()})).then((function(a){t(void 0,{name:e,content:a})}),(function(e){return t(e,void 0)}))}}]),e}(),f=a(157),h=a(152),p=a(175),g=a(179),b=a(161),v=a(155),y=a(60),x=a(174),S=a(176),j=a(178),w=a(158),N=a(173),O=a(162),C=a(165),k=a(163),F=a(164),I=a(166),R=a(77),B=a.n(R),H=a(74),A=a.n(H),L=a(75),U=a.n(L),T=a(76),q=a.n(T),D=Object(h.a)((function(e){return{summary:{backgroundColor:"#343A40"},heading:{fontSize:e.typography.pxToRem(18),color:"white"},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:"white"},column:{flexBasis:"20.33%"},formControl:{minWidth:120}}})),M=function(e){var t=l.a.useState(void 0),a=Object(m.a)(t,2),n=a[0],r=a[1],i=l.a.useState([]),c=Object(m.a)(i,2),o=c[0],s=c[1],u=l.a.useState(!1),d=Object(m.a)(u,2),h=d[0],R=d[1],H=l.a.useState(1),L=Object(m.a)(H,2),T=L[0],M=L[1],P=l.a.useState(10),J=Object(m.a)(P,2),W=J[0],_=J[1],z="RitualSites/ritualSites.json",G=D(),V=function(e,t){M(t),Z()},K=function(e){_(e.target.value)};function Q(t){var a=e.query,n=a.get("site"),l=a.get("start"),r=a.get("end"),i=a.get("location"),c=[];c=h?t.data.sites&&t.data.sites.length>0?t.data.sites.sort((function(e,t){return e.start-t.start})):[]:t.data.sites&&t.data.sites.length>0?t.data.sites.sort((function(e,t){return t.start-e.start})):[];var o=t.data.sites&&t.data.sites.length>0?c.filter((function(e){return!(null!=n&&""!==n&&!String(e.site).includes(String(n)))&&((null==l||""===l||e.start>=Number(l))&&((null==r||""===r||e.end<=Number(r))&&!(null!=i&&""!==i&&!String(e.location).includes(String(n)))))})):[];s(o)}function X(e){R(e),Q(n),Z()}function Y(){var e=JSON.stringify(o),t=document.createElement("a");t.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(e)),t.setAttribute("download","ritualHub_results.json"),t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)}function Z(){return 0==o.length?void 0!=n.error?l.a.createElement(l.a.Fragment,null,l.a.createElement(v.a,{container:!0,spacing:1,justify:"center"},l.a.createElement(v.a,{item:!0,xs:12},l.a.createElement("h1",null,"Uh oh, Something went wrong..."),l.a.createElement("hr",null)))):l.a.createElement(l.a.Fragment,null,l.a.createElement(v.a,{container:!0,spacing:1,justify:"center"},l.a.createElement(v.a,{item:!0,xs:12},l.a.createElement("h1",null," No results found..."),l.a.createElement("hr",null)))):l.a.createElement(l.a.Fragment,null,l.a.createElement(v.a,{container:!0,spacing:1,justify:"center"},l.a.createElement(v.a,{item:!0,xs:12},l.a.createElement("h1",null," ",o.length," Sites found..."),l.a.createElement("hr",null)),l.a.createElement(v.a,{item:!0,xs:3},l.a.createElement(f.a,{color:"inherit",onClick:function(){X(!h)},endIcon:h?l.a.createElement(A.a,null):l.a.createElement(U.a,null)},"Filter by date")),l.a.createElement(v.a,{item:!0,xs:3},l.a.createElement(w.a,{variant:"outlined",className:G.formControl},l.a.createElement(S.a,{id:"demo-simple-select-outlined-label"},"Items per page"),l.a.createElement(N.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:W,onChange:K,label:"Items"},l.a.createElement(j.a,{value:10},"10"),l.a.createElement(j.a,{value:20},"20"),l.a.createElement(j.a,{value:30},"30")))),l.a.createElement(v.a,{item:!0,xs:3},l.a.createElement(f.a,{color:"inherit",onClick:function(){X(Y)},endIcon:l.a.createElement(q.a,null)},"Download results")),o.slice((T-1)*W,T*W).map((function(e){var t=e.bibliography&&e.bibliography.length>0?e.bibliography.join(", "):null;return l.a.createElement(v.a,{item:!0,xs:12},l.a.createElement(p.a,null,l.a.createElement(g.a,{expandIcon:l.a.createElement(B.a,{color:"disabled"}),"aria-controls":"panel1bh-content",id:"panel1bh-header",align:"left",backgroundColor:"black",classes:{root:G.summary}},l.a.createElement("div",{className:G.column},l.a.createElement(y.a,{className:G.heading},e.site)),l.a.createElement("div",{className:G.column},l.a.createElement(y.a,{className:G.secondaryHeading},"From ",e.start," to ",e.end))),l.a.createElement(b.a,null,l.a.createElement(O.a,null,l.a.createElement(k.a,{"aria-label":"simple table"},l.a.createElement(F.a,null,l.a.createElement(C.a,null,l.a.createElement(I.a,{component:"th",scope:"row"},l.a.createElement("b",null,"Location")),l.a.createElement(I.a,{align:"left"},e.location)),l.a.createElement(C.a,null,l.a.createElement(I.a,{component:"th",scope:"row"},l.a.createElement("b",null,"Description")),l.a.createElement(I.a,{align:"left"},e.description)),l.a.createElement(C.a,null,l.a.createElement(I.a,{component:"th",scope:"row"},l.a.createElement("b",null,"Bibliography")),l.a.createElement(I.a,{align:"left"},t))))))))})),l.a.createElement(v.a,{item:!0,xs:12},l.a.createElement(x.a,{count:Math.ceil(o.length/W),variant:"outlined",shape:"rounded",onChange:V}))))}return l.a.createElement("div",null,null!==n&&void 0!==n?Z():l.a.createElement(l.a.Fragment,null,void new E("8BitSensei","Datasets","master").get(z,(function(e,t){if(e){console.log(e);var a={path:z,error:e.message};r(a)}else{null!==t&&void 0!==t&&""!==t||(t={description:"Config description",name:"my config",sites:[]});var n={path:z,data:t.content};Q(n),r(n)}}))))},P=a(180),J=a(59),W=a.n(J),_=Object(h.a)((function(e){return{field:{"& .MuiTextField-root":{margin:e.spacing(1),width:"100%"},width:"100%"}}})),z=function(){var e=_();return l.a.createElement("form",{autoComplete:"off"},l.a.createElement(v.a,{container:!0,spacing:1,justify:"center"},l.a.createElement(v.a,{item:!0,xs:10,className:e.field},l.a.createElement(P.a,{label:"Site",id:"filled-secondary",name:"site",variant:"filled",color:"secondary"})),l.a.createElement(v.a,{item:!0,xs:10},l.a.createElement("div",{className:e.field},l.a.createElement(P.a,{label:"Location",id:"filled-secondary",name:"location",variant:"filled",color:"secondary"}))),l.a.createElement(v.a,{item:!0,xs:5},l.a.createElement("div",{className:e.field},l.a.createElement(P.a,{label:"Start (e.g -50)",id:"filled-secondary",name:"start",type:"number",variant:"filled",color:"secondary"}))),l.a.createElement(v.a,{item:!0,xs:5},l.a.createElement("div",{className:e.field},l.a.createElement(P.a,{label:"Start (e.g -50)",id:"filled-secondary",name:"start",type:"number",variant:"filled",color:"secondary"}))),l.a.createElement(v.a,{item:!0,xs:10},l.a.createElement(f.a,{type:"submit",variant:"contained",color:"secondary",endIcon:l.a.createElement(W.a,null)},"Search"))))},G=a(167),V=a(169),K=a(168),Q=a(181),X=Object(h.a)((function(e){return{root:{minWidth:275},title:{fontSize:14,color:"white",backgroundColor:"#343A40",textAlign:"left"},pos:{marginBottom:12},large:{width:e.spacing(7),height:e.spacing(7)}}})),Y=function e(t){var a=X(),n=l.a.useState(""),r=Object(m.a)(n,2),i=r[0],c=r[1],o=l.a.useState(""),s=Object(m.a)(o,2),u=s[0],d=s[1],f=l.a.useState(""),h=Object(m.a)(f,2),p=h[0],g=h[1],b=l.a.useState(""),x=Object(m.a)(b,2),S=x[0],j=x[1],w=l.a.useState(""),N=Object(m.a)(w,2),O=N[0],C=N[1],k=l.a.useState(""),F=Object(m.a)(k,2),I=F[0],R=F[1];return new E("8BitSensei","Datasets","master").getUpdates("RitualSites/ritualSites.json",(function(t,a){if(t)return console.log(t),l.a.createElement(e,{title:"Updates",text:"Uh oh, something went wrong getting updates."});null!==a&&void 0!==a&&""!==a||(a={description:"Config description",name:"my config",updates:[]}),c(a.content[0].commit.message),d(a.content[0].author.avatar_url),g(a.content[0].author.login),j(a.content[0].sha.substring(0,7)),C(a.content[0].html_url),R(a.content[0].commit.author.date)})),l.a.createElement(G.a,{className:a.root},l.a.createElement(K.a,{className:a.title,title:t.title}),l.a.createElement(V.a,null,l.a.createElement(v.a,{container:!0,spacing:2,align:"left",justify:"center"},l.a.createElement(v.a,{item:!0,xs:2},l.a.createElement(Q.a,{"aria-label":"icon",src:u,className:a.large})),l.a.createElement(v.a,{item:!0,xs:10},l.a.createElement(y.a,{variant:"body1",color:"secondary"},l.a.createElement("b",null,p)," (",l.a.createElement("a",{href:O,target:"_blank"},S),") ",i,l.a.createElement("br",null),I)))))},Z=a(170),$=a(171),ee=a(78),te=a.n(ee),ae=a(79),ne=a.n(ae),le=a(81),re=a.n(le),ie=Object(h.a)((function(e){return{body:{display:"flex",flexDirection:"column",alignItems:"center",minHeight:"95vh"},content:{flex:"1",width:"60%"},footer:{width:"100%",display:"inline-block"},footerButton:{"&:hover":{backgroundColor:"transparent"},float:"left",paddingLeft:"30px"},footerText:{float:"right",paddingRight:"30px"},title:Object(c.a)({flexGrow:0,display:"none",paddingRight:"20px"},e.breakpoints.up("sm"),{display:"block"})}}));var ce=function(){var e=ie();return l.a.createElement("div",{className:"App"},l.a.createElement(Z.a,{position:"static",color:"secondary"},l.a.createElement($.a,null,l.a.createElement(y.a,{className:e.title,variant:"h4",href:"/"},"RitualHub"),l.a.createElement(f.a,{color:"inherit",startIcon:l.a.createElement(W.a,null),href:"/RitualHub/"},"Search"),l.a.createElement(f.a,{color:"inherit",startIcon:l.a.createElement(te.a,null),href:"/RitualHub/?/about"},"About"),l.a.createElement(f.a,{color:"inherit",startIcon:l.a.createElement(ne.a,null),href:"/RitualHub/?/edit"},"Contribute"))),l.a.createElement(o.a,{basename:"/RitualHub"},l.a.createElement("div",{className:e.body},l.a.createElement("div",{className:e.content},l.a.createElement(s.c,null,l.a.createElement(s.a,{path:"/"},function(){var e=(window.location+"").split("/")[4]+(window.location+"").split("/")[5],t=window.location.search,a=new URLSearchParams(t);return""==e||"undefined"==e?l.a.createElement(l.a.Fragment,null,l.a.createElement(v.a,{container:!0,spacing:6,justify:"center"},l.a.createElement(v.a,{item:!0,xs:10},l.a.createElement("h1",null,"Welcome to RitualHub"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque elementum lorem sed eleifend. Proin ornare, velit eget feugiat suscipit, justo metus auctor urna, quis egestas odio purus eget tortor. Nulla nec consequat dui, sed pretium erat. Vivamus sagittis leo eu velit maximus aliquam. Maecenas convallis, urna sed ultrices efficitur, massa felis consectetur nulla, sed gravida velit diam et dolor. Proin ac turpis at dui faucibus convallis. Maecenas condimentum sem ac consectetur fringilla. Morbi dapibus mauris ultrices odio sodales feugiat."),l.a.createElement("hr",null)),l.a.createElement(v.a,{item:!0,xs:10},l.a.createElement(z,null)),l.a.createElement(v.a,{item:!0,xs:10},l.a.createElement(Y,{title:"Updates"})))):"?about"==e?l.a.createElement("p",null,"About"):"?edit"==e?l.a.createElement("p",null,"Edit"):l.a.createElement(M,{query:a})}()))),l.a.createElement("footer",{className:e.footer},l.a.createElement("hr",{className:e.introBorder}),l.a.createElement(f.a,{className:e.footerButton,color:"inherit",startIcon:l.a.createElement(re.a,null),href:"https://github.com/8BitSensei/RitualHub/issues/new"},"Report a problem"),l.a.createElement("a",{className:e.footerText,rel:"license",href:"http://creativecommons.org/licenses/by-nc/4.0/"},l.a.createElement("img",{alt:"Creative Commons License",style:{borderWidth:"0"},src:"https://i.creativecommons.org/l/by-nc/4.0/88x31.png"})),l.a.createElement("br",null)))))},oe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,183)).then((function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),l(e),r(e),i(e)}))},se=a(172),me=a(82),ue=Object(me.a)({palette:{primary:{main:"#F5EFE4"},secondary:{main:"#343A40"}}});i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(se.a,{theme:ue},l.a.createElement(ce,null))),document.getElementById("root")),oe()},97:function(e,t,a){},98:function(e,t,a){},99:function(e){e.exports=JSON.parse("{}")}},[[106,1,2]]]);
//# sourceMappingURL=main.499feb67.chunk.js.map