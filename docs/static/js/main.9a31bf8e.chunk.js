(this["webpackJsonpip-address-tracker"]=this["webpackJsonpip-address-tracker"]||[]).push([[0],{144:function(e,t,a){},145:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),s=a(40),i=a.n(s),r=a(4),l=a(5),o=a(11),j=a.n(o),p=a(42),d=a.n(p),b=a(10),m=a(1),u=function(e){return Object(m.jsx)("svg",Object(r.a)(Object(r.a)({xmlns:"http://www.w3.org/2000/svg",width:11,height:14},e),{},{children:Object(m.jsx)("path",{fill:"none",stroke:"#FFF",strokeWidth:3,d:"M2 1l6 6-6 6"})}))},O=a(16),h=a.n(O),x=a(41),f=function(){var e=Object(x.a)(h.a.mark((function e(t){var a,n,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://geo.ipify.org/api/v1?apiKey=at_jCfpV6wLN9fdKRqpcNIZp2Xnuz5Mk&ipAddress=".concat(t),e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:return c=e.sent,e.abrupt("return",{lng:c.location.lng,lat:c.location.lat,ip:c.ip,city:c.location.city,country:c.location.country,postalCode:c.location.postalCode,timeZone:c.location.timezone,isp:c.isp});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();j.a.accessToken="pk.eyJ1IjoibnltZGllZ28iLCJhIjoiY2twMjg1OTRuMDFvczJyazE5cm1pYXBycSJ9.H6XgcK8xxFhvL0WJZtTTHQ";var _={ip:"",city:"",country:"",postalCode:"",timeZone:"",isp:""},y=function(){var e=function(e){var t=Object(n.useState)(e),a=Object(l.a)(t,2),c=a[0],s=a[1];return{form:c,handleChange:function(e){var t=e.target,a=t.name,n=t.value;s(Object(r.a)(Object(r.a)({},c),{},Object(b.a)({},a,n)))}}}({ip:""}),t=e.form,a=e.handleChange,c=Object(n.useRef)(null),s=Object(n.useState)(),i=Object(l.a)(s,2)[1],o=Object(n.useState)({lng:-122.078514,lat:37.40599,zoom:15}),p=Object(l.a)(o,2),O=p[0],h=p[1],x=Object(n.useState)(_),y=Object(l.a)(x,2),g=y[0],N=y[1];Object(n.useEffect)((function(){var e=new j.a.Map({container:"map",style:"mapbox://styles/mapbox/streets-v11",center:[O.lng,O.lat],zoom:O.zoom});(new j.a.Marker).setLngLat([O.lng,O.lat]).addTo(e),i(e)}),[O]),Object(n.useEffect)((function(){f("").then((function(e){h((function(t){return Object(r.a)(Object(r.a)({},t),{},{lng:e.lng,lat:e.lat})})),N({ip:e.ip,city:e.city,country:e.country,isp:e.isp,postalCode:e.postalCode,timeZone:e.timeZone})}))}),[]);return Object(m.jsxs)("main",{children:[Object(m.jsxs)("div",{className:"banner",children:[Object(m.jsx)("h1",{className:"banner__title",children:"IP Address Tracker"}),Object(m.jsxs)("form",{className:"banner__form",children:[Object(m.jsx)("input",{className:"banner__input",placeholder:"Search for any IP address or domain ",type:"text",name:"ip",value:t.ip,onChange:a}),Object(m.jsx)("button",{className:"banner__button",onClick:function(e){e.preventDefault(),d.a.isIP(t.ip)&&f(t.ip).then((function(e){h(Object(r.a)(Object(r.a)({},O),{},{lng:e.lng,lat:e.lat})),N({ip:e.ip,city:e.city,country:e.country,isp:e.isp,postalCode:e.postalCode,timeZone:e.timeZone})})),N(_)},type:"submit",children:Object(m.jsx)(u,{})})]}),""!==g.ip&&Object(m.jsxs)("ul",{className:"banner__data-container",children:[Object(m.jsxs)("li",{className:"banner__data-item",children:[Object(m.jsx)("span",{className:"data-item__title",children:"IP ADDRESS"}),Object(m.jsx)("p",{className:"data-item__data",children:g.ip})]}),Object(m.jsxs)("li",{className:"banner__data-item",children:[Object(m.jsx)("span",{className:"data-item__title",children:"LOCATION"}),Object(m.jsxs)("p",{className:"data-item__data",children:[g.city,", ",g.country," ",g.postalCode]})]}),Object(m.jsxs)("li",{className:"banner__data-item",children:[Object(m.jsx)("span",{className:"data-item__title",children:"TIMEZONE"}),Object(m.jsxs)("p",{className:"data-item__data",children:["UTC",g.timeZone]})]}),Object(m.jsxs)("li",{className:"banner__data-item",children:[Object(m.jsx)("span",{className:"data-item__title",children:"ISP"}),Object(m.jsx)("p",{className:"data-item__data",children:g.isp})]})]})]}),Object(m.jsx)("div",{id:"map",ref:c,className:"map"})]})},g=(a(144),function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(y,{})})});i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(g,{})}),document.getElementById("root"))}},[[145,1,2]]]);
//# sourceMappingURL=main.9a31bf8e.chunk.js.map