(this["webpackJsonpreact-nba"]=this["webpackJsonpreact-nba"]||[]).push([[0],Array(26).concat([function(e,t,a){var n={"./ATL.svg":82,"./BKN.svg":83,"./BOS.svg":84,"./CHA.svg":85,"./CHI.svg":86,"./CLE.svg":87,"./DAL.svg":88,"./DEN.svg":89,"./DET.svg":90,"./GSW.svg":91,"./HOU.svg":92,"./IND.svg":93,"./LAC.svg":94,"./LAL.svg":95,"./MEM.svg":96,"./MIA.svg":97,"./MIL.svg":98,"./MIN.svg":99,"./NOP.svg":100,"./NYK.svg":101,"./OKC.svg":102,"./ORL.svg":103,"./PHI.svg":104,"./PHX.svg":105,"./POR.svg":106,"./SAC.svg":107,"./SAS.svg":108,"./TOR.svg":109,"./UTA.svg":110,"./WAS.svg":111};function c(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}c.keys=function(){return Object.keys(n)},c.resolve=r,e.exports=c,c.id=26},,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a(124)},,,,,function(e,t,a){},,,,,function(e,t,a){},,,,,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/ATL.ea153372.svg"},function(e,t,a){e.exports=a.p+"static/media/BKN.2ed481f1.svg"},function(e,t,a){e.exports=a.p+"static/media/BOS.2da9b979.svg"},function(e,t,a){e.exports=a.p+"static/media/CHA.7b8ddfdd.svg"},function(e,t,a){e.exports=a.p+"static/media/CHI.8f27eceb.svg"},function(e,t,a){e.exports=a.p+"static/media/CLE.719b6efd.svg"},function(e,t,a){e.exports=a.p+"static/media/DAL.031fe887.svg"},function(e,t,a){e.exports=a.p+"static/media/DEN.d48e68ca.svg"},function(e,t,a){e.exports=a.p+"static/media/DET.1ab03d43.svg"},function(e,t,a){e.exports=a.p+"static/media/GSW.61d57caa.svg"},function(e,t,a){e.exports=a.p+"static/media/HOU.14eb95a3.svg"},function(e,t,a){e.exports=a.p+"static/media/IND.5d8ef32e.svg"},function(e,t,a){e.exports=a.p+"static/media/LAC.06b8ab93.svg"},function(e,t,a){e.exports=a.p+"static/media/LAL.ac4bf984.svg"},function(e,t,a){e.exports=a.p+"static/media/MEM.9dfb78ae.svg"},function(e,t,a){e.exports=a.p+"static/media/MIA.1932c3dd.svg"},function(e,t,a){e.exports=a.p+"static/media/MIL.61b0a17e.svg"},function(e,t,a){e.exports=a.p+"static/media/MIN.2bb090ec.svg"},function(e,t,a){e.exports=a.p+"static/media/NOP.92fc642d.svg"},function(e,t,a){e.exports=a.p+"static/media/NYK.4780d133.svg"},function(e,t,a){e.exports=a.p+"static/media/OKC.4bf80ebe.svg"},function(e,t,a){e.exports=a.p+"static/media/ORL.d6ce602b.svg"},function(e,t,a){e.exports=a.p+"static/media/PHI.cc615a42.svg"},function(e,t,a){e.exports=a.p+"static/media/PHX.f05ca33c.svg"},function(e,t,a){e.exports=a.p+"static/media/POR.8b107430.svg"},function(e,t,a){e.exports=a.p+"static/media/SAC.05a8fdd5.svg"},function(e,t,a){e.exports=a.p+"static/media/SAS.54a252ce.svg"},function(e,t,a){e.exports=a.p+"static/media/TOR.46e2a8f7.svg"},function(e,t,a){e.exports=a.p+"static/media/UTA.271453ca.svg"},function(e,t,a){e.exports=a.p+"static/media/WAS.2fa3d27e.svg"},function(e,t,a){},,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(21),s=a.n(r),o=(a(57),a(15)),l=a(9),i=a(13),m=a(44),d="https://api.balldontlie.io/v1";function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(a,!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var g={teamData:{}};function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function v(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(a,!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var b={selectedDate:void 0},E=Object(i.c)({addTeamData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ACTION_ADD_TEAM_DATA":return f({},e,{teamData:t.payload});default:return e}},selectDayReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ACTION_SELECT_DAY":return v({},e,{selectedDate:t.payload});default:return e}}}),O=function(e){return Object(i.d)(E,e,Object(i.a)(m.a))},_=a(6),h=a(12),y=function(e){return{type:"ACTION_SELECT_DAY",payload:e}},D=(a(62),function(){return c.a.createElement("header",{className:"header"},c.a.createElement(_.a,null,c.a.createElement(_.b,{className:"header__link",to:"/"},"Home"),c.a.createElement(_.b,{className:"header__link",to:"/all-teams"},"All teams")))}),N=a(7),j=a(23),A=a.n(j),x=function(e){var t=new Date(e),a=t.getHours()<9?"0".concat(t.getHours()):t.getHours(),n=t.getMinutes()<9?"0".concat(t.getMinutes()):t.getMinutes();return"".concat(a,":").concat(n," ").concat(t.getDate()," ").concat(["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()],", ").concat(t.getFullYear())},P=(a(81),function(e){var t=Object(n.useState)(null),r=Object(N.a)(t,2),s=r[0],o=r[1],l=Object(n.useState)(null),i=Object(N.a)(l,2),m=i[0],d=i[1];return Object(n.useEffect)((function(){try{o(a(26)("./".concat(e.data.visitor_team.abbreviation,".svg")))}catch(t){console.error(t.message)}try{d(a(26)("./".concat(e.data.home_team.abbreviation,".svg")))}catch(t){console.error(t.message)}}),[e]),c.a.createElement("article",{className:"game-card"},c.a.createElement("p",{className:"game-card__starts-time"},"Game starts in ",x(e.data.date)),c.a.createElement("div",{className:"game-card__teams"},c.a.createElement("div",{className:"game-card__team"},c.a.createElement("div",{className:"game-card__scores"},e.data.visitor_team_score),c.a.createElement(_.a,null,c.a.createElement(_.b,{to:"/team="+e.data.visitor_team.id,title:e.data.visitor_team.full_name,className:"link game-card__team-name"},e.data.visitor_team.name)),s?c.a.createElement("img",{className:"game-card__team-logo",src:s,alt:"".concat(e.data.visitor_team.full_name," logo")}):null),c.a.createElement("div",{className:"game-card__scores"},c.a.createElement("div",null,"Scores")),c.a.createElement("div",{className:"game-card__team"},c.a.createElement("div",{className:"game-card__scores"},e.data.home_team_score),c.a.createElement(_.a,null,c.a.createElement(_.b,{to:"/team="+e.data.home_team.id,title:e.data.home_team.full_name,className:"link game-card__team-name"},e.data.home_team.name)),m?c.a.createElement("img",{className:"game-card__team-logo",src:m,alt:"".concat(e.data.home_team.full_name," logo")}):null)))}),w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,t=e.getFullYear(),a=e.getMonth()+1>9?e.getMonth()+1:"0".concat(Number(e.getMonth())+1),n=e.getDate()>9?e.getDate():"0".concat(e.getDate());return"".concat(t,"-").concat(a,"-").concat(n)},S=function(){var e=new Date,t=e.getFullYear(),a=e.getMonth()+1;a=a<10?"0".concat(a):a;return["".concat(t,"-").concat(a,"-01"),"".concat(t,"-").concat(a,"-").concat(function(e,t){return new Date(e,t,0).getDate()}(t,a))]},T=(a(112),function(e){var t=Object(n.useState)([]),a=Object(N.a)(t,2),r=a[0],s=a[1],o=Object(n.useState)(!1),l=Object(N.a)(o,2),i=l[0],m=l[1],u=Object(n.useState)(!1),f=Object(N.a)(u,2),g=f[0],p=f[1];return Object(n.useEffect)((function(){var t="";if(e.teamId){var a=S()[0],n=S()[1];t="".concat(d,"/games?team_ids[]=").concat(e.teamId.params.id,"&start_date=").concat(a,"&end_date=").concat(n)}else t=void 0!==e.selectedDay?"".concat(d,"/games?start_date=").concat(e.selectedDay,"&end_date=").concat(e.selectedDay):"".concat(d,"/games?start_date=").concat(w(),"&end_date=").concat(w());A.a.get(t,{headers:{Authorization:"75c2ea05-1e7b-445a-a50a-505c929106d5"}}).then((function(e){e.data.data.sort((function(e,t){return new Date(e.date)-new Date(t.date)})),s(e.data.data),m(!0)})).catch((function(e){p(e)}))}),[e]),0===(r=r.map((function(e){return c.a.createElement(P,{key:e.id,data:e})}))).length&&!0===i?"There are no games on this day":0!==r.length?void 0===e.teamId?c.a.createElement("div",{className:"game-card-content_index-page"},r):c.a.createElement("div",{className:"game-card-content"},r):g?"Error. Try to reload this page.":"Loading..."}),k=a(46),C=a(47),I=a(50),L=a(48),M=a(24),H=a(51),F=a(49),B=a.n(F),R=(a(119),a(120),function(e){function t(e){var a;return Object(k.a)(this,t),(a=Object(I.a)(this,Object(L.a)(t).call(this,e))).handleDayClick=a.handleDayClick.bind(Object(M.a)(a)),a}return Object(H.a)(t,e),Object(C.a)(t,[{key:"handleDayClick",value:function(e){this.props.history.push("date=".concat(w(e))),this.props.setSelectedDay(w(e))}},{key:"render",value:function(){return c.a.createElement(B.a,{onDayClick:this.handleDayClick,selectedDays:new Date(this.props.selectedDay),month:new Date(this.props.selectedDay)})}}]),t}(c.a.Component)),Y={setSelectedDay:y},K=Object(l.b)(null,Y)(Object(h.f)(R)),U=(a(121),function(){return c.a.createElement("footer",{className:"footer"},"for NBA API thanks"," ",c.a.createElement("a",{className:"link link_color_white footer__link",href:"https://github.com/ynnadkrap",target:"_blank",rel:"noopener noreferrer"},"Danny Park"))}),J={setSelectedDay:y},W=Object(l.b)((function(e){return{selectedDay:e.selectDayReducer.selectedDate}}),J)((function(e){var t=e.params.match.params.date,a="";a=void 0!==t&&t!==w()?"List of all ".concat(w(new Date(t))," NBA games"):"List of all today NBA games";var n="";return n="/"===e.params.match.path?w():void 0!==t?t:void 0!==e.selectedDay?e.selectedDay:w(),y(n),c.a.createElement(c.a.Fragment,null,c.a.createElement(D,null),c.a.createElement("section",{className:"content"},c.a.createElement("h1",{className:"heading"},a),c.a.createElement("div",{className:"cards-and-calendar"},c.a.createElement(T,{selectedDay:n}),c.a.createElement(K,{selectedDay:n}))),c.a.createElement(U,null))})),G=(a(122),function(e){var t=Object(n.useState)(null),r=Object(N.a)(t,2),s=r[0],o=r[1];return Object(n.useEffect)((function(){try{var t=a(26)("./".concat(e.data.abbreviation,".svg"));o(t)}catch(n){console.error(n.message)}}),[e]),c.a.createElement("article",{className:"team-card"},s?c.a.createElement("img",{className:"team-card__logo",src:s,alt:"".concat(e.data.full_name," logo")}):null,c.a.createElement("ul",{className:"team-card__info-list"},c.a.createElement("li",{className:"team-card__info-list-elem"},c.a.createElement("span",{className:"team-card__text-accent"},"Name: "),e.data.name),c.a.createElement("li",{className:"team-card__info-list-elem"},c.a.createElement("span",{className:"team-card__text-accent"},"Full name: "),e.data.full_name),c.a.createElement("li",{className:"team-card__info-list-elem"},c.a.createElement("span",{className:"team-card__text-accent"},"City: "),e.data.city),c.a.createElement("li",{className:"team-card__info-list-elem"},c.a.createElement("span",{className:"team-card__text-accent"},"Abbreviation: "),e.data.abbreviation),c.a.createElement("li",{className:"team-card__info-list-elem"},c.a.createElement("span",{className:"team-card__text-accent"},"Division: "),e.data.division),c.a.createElement("li",{className:"team-card__info-list-elem"},c.a.createElement("span",{className:"team-card__text-accent"},"Conference: "),e.data.conference)))}),z=(a(123),{addTeamData:function(e){return{type:"ACTION_ADD_TEAM_DATA",payload:e}}}),X=Object(l.b)(null,z)((function(e){var t=Object(n.useState)([]),a=Object(N.a)(t,2),r=a[0],s=a[1],o=Object(n.useState)(!1),l=Object(N.a)(o,2),i=l[0],m=l[1],u="";u=e.allTeams?"".concat(d,"/teams"):"".concat(d,"/teams/").concat(e.teamId),Object(n.useEffect)((function(){A.a.get(u,{headers:{Authorization:"75c2ea05-1e7b-445a-a50a-505c929106d5"}}).then((function(t){e.allTeams?s(t.data.data):(s([t.data]),e.addTeamData(t))})).catch((function(e){m(e)}))}),[u,e]);var f="";return r.length>0?(r=r.map((function(t){return e.allTeams?(f="all-team-content",c.a.createElement(G,{key:t.id,data:t})):c.a.createElement(G,{key:t.data.id,data:t.data})})),e.allTeams?c.a.createElement("div",{className:f},r):c.a.createElement(c.a.Fragment,null,r)):i?"Error. Try to reload this page.":"Loading..."})),q=Object(l.b)((function(e){return{team:e.addTeamData.teamData}}),null)((function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(D,null),c.a.createElement("section",{className:"content",style:{marginBottom:"0"}},c.a.createElement("h1",{className:"heading"},"Info about"," ",c.a.createElement("span",{className:"heading__team-name"},e.team.data&&e.team.data.full_name)),c.a.createElement(X,{teamId:e.params.match.params.id})),c.a.createElement("section",{className:"content"},c.a.createElement("h2",{className:"heading"},"All"," ",c.a.createElement("span",{className:"heading__team-name"},e.team.data&&e.team.data.full_name)," ","games in this month"),c.a.createElement(T,{teamId:e.params.match})),c.a.createElement(U,null))})),Q=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(D,null),c.a.createElement("section",{className:"content"},c.a.createElement("h1",{className:"heading"},"List of all NBA teams"),c.a.createElement(X,{allTeams:!0})),c.a.createElement(U,null))},V=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(D,null),c.a.createElement("section",{className:"content"},c.a.createElement("h1",{className:"heading"},"Error 404: Page not found")),c.a.createElement(U,null))};function Z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function $(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Z(a,!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Z(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ee=O(),te=function(){return c.a.createElement(l.a,{store:ee},c.a.createElement(_.a,null,c.a.createElement(h.c,null,c.a.createElement(h.a,{path:["/","/date=:date"],exact:!0,render:function(e){return c.a.createElement(W,{params:$({},e)})}}),c.a.createElement(h.a,{path:"/team=:id",render:function(e){return c.a.createElement(q,{params:$({},e)})}}),c.a.createElement(h.a,{path:"/all-teams",render:function(e){return c.a.createElement(Q,{params:$({},e)})}}),c.a.createElement(h.a,{path:"*",render:function(){return c.a.createElement(V,null)}}))))};s.a.render(c.a.createElement(te,null),document.getElementById("root"))}]),[[52,1,2]]]);
//# sourceMappingURL=main.bee21149.chunk.js.map