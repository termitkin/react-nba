(this["webpackJsonpreact-nba"]=this["webpackJsonpreact-nba"]||[]).push([[0],Array(26).concat([function(e,t,a){var n={"./ATL.svg":82,"./BKN.svg":83,"./BOS.svg":84,"./CHA.svg":85,"./CHI.svg":86,"./CLE.svg":87,"./DAL.svg":88,"./DEN.svg":89,"./DET.svg":90,"./GSW.svg":91,"./HOU.svg":92,"./IND.svg":93,"./LAC.svg":94,"./LAL.svg":95,"./MEM.svg":96,"./MIA.svg":97,"./MIL.svg":98,"./MIN.svg":99,"./NOP.svg":100,"./NYK.svg":101,"./OKC.svg":102,"./ORL.svg":103,"./PHI.svg":104,"./PHX.svg":105,"./POR.svg":106,"./SAC.svg":107,"./SAS.svg":108,"./TOR.svg":109,"./UTA.svg":110,"./WAS.svg":111};function c(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}c.keys=function(){return Object.keys(n)},c.resolve=r,e.exports=c,c.id=26},,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a(124)},,,,,function(e,t,a){},,,,,function(e,t,a){},,,,,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/ATL.ea153372.svg"},function(e,t,a){e.exports=a.p+"static/media/BKN.2ed481f1.svg"},function(e,t,a){e.exports=a.p+"static/media/BOS.2da9b979.svg"},function(e,t,a){e.exports=a.p+"static/media/CHA.7b8ddfdd.svg"},function(e,t,a){e.exports=a.p+"static/media/CHI.8f27eceb.svg"},function(e,t,a){e.exports=a.p+"static/media/CLE.719b6efd.svg"},function(e,t,a){e.exports=a.p+"static/media/DAL.031fe887.svg"},function(e,t,a){e.exports=a.p+"static/media/DEN.d48e68ca.svg"},function(e,t,a){e.exports=a.p+"static/media/DET.1ab03d43.svg"},function(e,t,a){e.exports=a.p+"static/media/GSW.61d57caa.svg"},function(e,t,a){e.exports=a.p+"static/media/HOU.14eb95a3.svg"},function(e,t,a){e.exports=a.p+"static/media/IND.5d8ef32e.svg"},function(e,t,a){e.exports=a.p+"static/media/LAC.06b8ab93.svg"},function(e,t,a){e.exports=a.p+"static/media/LAL.ac4bf984.svg"},function(e,t,a){e.exports=a.p+"static/media/MEM.9dfb78ae.svg"},function(e,t,a){e.exports=a.p+"static/media/MIA.1932c3dd.svg"},function(e,t,a){e.exports=a.p+"static/media/MIL.61b0a17e.svg"},function(e,t,a){e.exports=a.p+"static/media/MIN.2bb090ec.svg"},function(e,t,a){e.exports=a.p+"static/media/NOP.92fc642d.svg"},function(e,t,a){e.exports=a.p+"static/media/NYK.4780d133.svg"},function(e,t,a){e.exports=a.p+"static/media/OKC.4bf80ebe.svg"},function(e,t,a){e.exports=a.p+"static/media/ORL.d6ce602b.svg"},function(e,t,a){e.exports=a.p+"static/media/PHI.cc615a42.svg"},function(e,t,a){e.exports=a.p+"static/media/PHX.f05ca33c.svg"},function(e,t,a){e.exports=a.p+"static/media/POR.8b107430.svg"},function(e,t,a){e.exports=a.p+"static/media/SAC.05a8fdd5.svg"},function(e,t,a){e.exports=a.p+"static/media/SAS.54a252ce.svg"},function(e,t,a){e.exports=a.p+"static/media/TOR.46e2a8f7.svg"},function(e,t,a){e.exports=a.p+"static/media/UTA.271453ca.svg"},function(e,t,a){e.exports=a.p+"static/media/WAS.2fa3d27e.svg"},function(e,t,a){},,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(21),s=a.n(r),o=(a(57),a(15)),l=a(8),i=a(12),m=a(44);function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(a,!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var f={teamData:{}};function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(a,!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var v={selectedDate:void 0},b=Object(i.c)({addTeamData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ACTION_ADD_TEAM_DATA":return u({},e,{teamData:t.payload});default:return e}},selectDayReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ACTION_SELECT_DAY":return g({},e,{selectedDate:t.payload});default:return e}}}),E=function(e){return Object(i.d)(b,e,Object(i.a)(m.a))},_=a(6),O=a(11),h=function(e){return{type:"ACTION_SELECT_DAY",payload:e}},y=(a(62),function(){return c.a.createElement("header",{className:"header"},c.a.createElement(_.a,null,c.a.createElement(_.b,{className:"header__link",to:"/"},"Home"),c.a.createElement(_.b,{className:"header__link",to:"/all-teams"},"All teams")))}),D=a(13),N=a(23),j=a.n(N),A=function(e){var t=new Date(e),a=t.getHours()<9?"0".concat(t.getHours()):t.getHours(),n=t.getMinutes()<9?"0".concat(t.getMinutes()):t.getMinutes();return"".concat(a,":").concat(n," ").concat(t.getDate()," ").concat(["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()],", ").concat(t.getFullYear())},w=(a(81),function(e){return c.a.createElement("article",{className:"game-card"},c.a.createElement("p",{className:"game-card__starts-time"},"Game starts in ",A(e.data.date)),c.a.createElement("div",{className:"game-card__teams"},c.a.createElement("div",{className:"game-card__team"},c.a.createElement("div",{className:"game-card__scores"},e.data.visitor_team_score),c.a.createElement(_.a,null,c.a.createElement(_.b,{to:"/team="+e.data.visitor_team.id,title:e.data.visitor_team.full_name,className:"link game-card__team-name"},e.data.visitor_team.name)),c.a.createElement("img",{className:"game-card__team-logo",src:a(26)("./".concat(e.data.visitor_team.abbreviation,".svg")),alt:"".concat(e.data.visitor_team.full_name," logo")})),c.a.createElement("div",{className:"game-card__scores"},c.a.createElement("div",null,"Scores")),c.a.createElement("div",{className:"game-card__team"},c.a.createElement("div",{className:"game-card__scores"},e.data.home_team_score),c.a.createElement(_.a,null,c.a.createElement(_.b,{to:"/team="+e.data.home_team.id,title:e.data.home_team.full_name,className:"link game-card__team-name"},e.data.home_team.name)),c.a.createElement("img",{className:"game-card__team-logo",src:a(26)("./".concat(e.data.home_team.abbreviation,".svg")),alt:"".concat(e.data.home_team.full_name," logo")}))))}),x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,t=e.getFullYear(),a=e.getMonth()+1>9?e.getMonth()+1:"0".concat(Number(e.getMonth())+1),n=e.getDate()>9?e.getDate():"0".concat(e.getDate());return"".concat(t,"-").concat(a,"-").concat(n)},P=function(){var e=new Date,t=e.getFullYear(),a=e.getMonth()+1;return["".concat(t,"-").concat(a,"-01"),"".concat(t,"-").concat(a,"-").concat(function(e,t){return new Date(e,t,0).getDate()}(t,a))]},T=(a(112),function(e){var t=Object(n.useState)([]),a=Object(D.a)(t,2),r=a[0],s=a[1],o=Object(n.useState)(!1),l=Object(D.a)(o,2),i=l[0],m=l[1],d=Object(n.useState)(!1),u=Object(D.a)(d,2),f=u[0],p=u[1];return Object(n.useEffect)((function(){var t="https://www.balldontlie.io/api/v1",a="";if(e.teamId){var n=P()[0],c=P()[1];a="".concat(t,"/games?team_ids[]=").concat(e.teamId.params.id,"&start_date=").concat(n,"&end_date=").concat(c)}else a=void 0!==e.selectedDay?"".concat(t,"/games?start_date=").concat(e.selectedDay,"&end_date=").concat(e.selectedDay):"".concat(t,"/games?start_date=").concat(x(),"&end_date=").concat(x());j.a.get(a).then((function(e){e.data.data.sort((function(e,t){return new Date(e.date)-new Date(t.date)})),s(e.data.data),m(!0)})).catch((function(e){p(e)}))}),[e]),0===(r=r.map((function(e){return c.a.createElement(w,{key:e.id,data:e})}))).length&&!0===i?"There are no games on this day":0!==r.length?void 0===e.teamId?c.a.createElement("div",{className:"game-card-content_index-page"},r):c.a.createElement("div",{className:"game-card-content"},r):f?"Error. Try to reload this page.":"Loading..."}),S=a(46),k=a(47),C=a(50),I=a(48),L=a(24),M=a(51),H=a(49),F=a.n(H),B=(a(119),a(120),function(e){function t(e){var a;return Object(S.a)(this,t),(a=Object(C.a)(this,Object(I.a)(t).call(this,e))).handleDayClick=a.handleDayClick.bind(Object(L.a)(a)),a}return Object(M.a)(t,e),Object(k.a)(t,[{key:"handleDayClick",value:function(e){this.props.history.push("date=".concat(x(e))),this.props.setSelectedDay(x(e))}},{key:"render",value:function(){return c.a.createElement(F.a,{onDayClick:this.handleDayClick,selectedDays:new Date(this.props.selectedDay),month:new Date(this.props.selectedDay)})}}]),t}(c.a.Component)),R={setSelectedDay:h},Y=Object(l.b)(null,R)(Object(O.f)(B)),K=(a(121),function(){return c.a.createElement("footer",{className:"footer"},"for NBA API thanks"," ",c.a.createElement("a",{className:"link link_color_white footer__link",href:"https://github.com/ynnadkrap",target:"_blank",rel:"noopener noreferrer"},"Danny Park"))}),U={setSelectedDay:h},J=Object(l.b)((function(e){return{selectedDay:e.selectDayReducer.selectedDate}}),U)((function(e){var t=e.params.match.params.date,a="";a=void 0!==t&&t!==x()?"List of all ".concat(x(new Date(t))," NBA games"):"List of all today NBA games";var n="";return n="/"===e.params.match.path?x():void 0!==t?t:void 0!==e.selectedDay?e.selectedDay:x(),h(n),c.a.createElement(c.a.Fragment,null,c.a.createElement(y,null),c.a.createElement("section",{className:"content"},c.a.createElement("h1",{className:"heading"},a),c.a.createElement("div",{className:"cards-and-calendar"},c.a.createElement(T,{selectedDay:n}),c.a.createElement(Y,{selectedDay:n}))),c.a.createElement(K,null))})),W=(a(122),function(e){return c.a.createElement("article",{className:"team-card"},c.a.createElement("img",{className:"team-card__logo",src:a(26)("./".concat(e.data.abbreviation,".svg")),alt:"".concat(e.data.full_name," logo")}),c.a.createElement("ul",{className:"team-card__info-list"},c.a.createElement("li",{className:"team-card__info-list-elem"},c.a.createElement("span",{className:"team-card__text-accent"},"Name: "),e.data.name),c.a.createElement("li",{className:"team-card__info-list-elem"},c.a.createElement("span",{className:"team-card__text-accent"},"Full name: "),e.data.full_name),c.a.createElement("li",{className:"team-card__info-list-elem"},c.a.createElement("span",{className:"team-card__text-accent"},"City: "),e.data.city),c.a.createElement("li",{className:"team-card__info-list-elem"},c.a.createElement("span",{className:"team-card__text-accent"},"Abbreviation: "),e.data.abbreviation),c.a.createElement("li",{className:"team-card__info-list-elem"},c.a.createElement("span",{className:"team-card__text-accent"},"Division: "),e.data.division),c.a.createElement("li",{className:"team-card__info-list-elem"},c.a.createElement("span",{className:"team-card__text-accent"},"Conference: "),e.data.conference)))}),G=(a(123),{addTeamData:function(e){return{type:"ACTION_ADD_TEAM_DATA",payload:e}}}),X=Object(l.b)(null,G)((function(e){var t=Object(n.useState)([]),a=Object(D.a)(t,2),r=a[0],s=a[1],o=Object(n.useState)(!1),l=Object(D.a)(o,2),i=l[0],m=l[1],d="https://www.balldontlie.io/api/v1",u="";u=e.allTeams?"".concat(d,"/teams"):"".concat(d,"/teams/").concat(e.teamId),Object(n.useEffect)((function(){j.a.get(u).then((function(t){e.allTeams?s(t.data.data):(s([t.data]),e.addTeamData(t))})).catch((function(e){m(e)}))}),[u,e]);var f="";return r.length>0?(r=r.map((function(t){return e.allTeams?(f="all-team-content",c.a.createElement(W,{key:t.id,data:t})):c.a.createElement(W,{key:t.id,data:t})})),e.allTeams?c.a.createElement("div",{className:f},r):c.a.createElement(c.a.Fragment,null,r)):i?"Error. Try to reload this page.":"Loading..."})),q=Object(l.b)((function(e){return{team:e.addTeamData.teamData}}),null)((function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(y,null),c.a.createElement("section",{className:"content",style:{marginBottom:"0"}},c.a.createElement("h1",{className:"heading"},"Info about"," ",c.a.createElement("span",{className:"heading__team-name"},e.team.data&&e.team.data.full_name)),c.a.createElement(X,{teamId:e.params.match.params.id})),c.a.createElement("section",{className:"content"},c.a.createElement("h2",{className:"heading"},"All"," ",c.a.createElement("span",{className:"heading__team-name"},e.team.data&&e.team.data.full_name)," ","games in this month"),c.a.createElement(T,{teamId:e.params.match})),c.a.createElement(K,null))})),z=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(y,null),c.a.createElement("section",{className:"content"},c.a.createElement("h1",{className:"heading"},"List of all NBA teams"),c.a.createElement(X,{allTeams:!0})),c.a.createElement(K,null))},Q=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(y,null),c.a.createElement("section",{className:"content"},c.a.createElement("h1",{className:"heading"},"Error 404: Page not found")),c.a.createElement(K,null))};function V(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Z(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?V(a,!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):V(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var $=E(),ee=function(){return c.a.createElement(l.a,{store:$},c.a.createElement(_.a,null,c.a.createElement(O.c,null,c.a.createElement(O.a,{path:["/","/date=:date"],exact:!0,render:function(e){return c.a.createElement(J,{params:Z({},e)})}}),c.a.createElement(O.a,{path:"/team=:id",render:function(e){return c.a.createElement(q,{params:Z({},e)})}}),c.a.createElement(O.a,{path:"/all-teams",render:function(e){return c.a.createElement(z,{params:Z({},e)})}}),c.a.createElement(O.a,{path:"*",render:function(){return c.a.createElement(Q,null)}}))))};s.a.render(c.a.createElement(ee,null),document.getElementById("root"))}]),[[52,1,2]]]);
//# sourceMappingURL=main.92bc0bb8.chunk.js.map