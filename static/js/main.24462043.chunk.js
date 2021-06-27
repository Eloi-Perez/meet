(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{28:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n.n(o),r=n(21),c=n.n(r),s=(n(28),n(7)),i=n.n(s),l=n(8),u=n(2),h=n(6),d=n(4),f=n(3),v=n(0),p=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var o;return Object(u.a)(this,n),(o=t.call(this,e)).state={showDetails:!1},o}return Object(h.a)(n,[{key:"render",value:function(){var e=this,t=this.props.event,n=new Date(t.start.dateTime);return Object(v.jsxs)("div",{className:"event-container",children:[Object(v.jsx)("h3",{children:t.summary}),Object(v.jsx)("p",{children:n.toString()}),Object(v.jsx)("p",{children:t.location}),Object(v.jsx)("button",{className:"details-btn",onClick:function(){return e.setState({showDetails:!e.state.showDetails})},children:"Show Details"}),this.state.showDetails&&Object(v.jsxs)("div",{className:"event-details",children:[Object(v.jsx)("p",{className:"event-description",children:t.description}),Object(v.jsx)("p",{children:Object(v.jsx)("a",{href:t.htmlLink,rel:"noreferrer",target:"_blank",children:"Event in Google Calendar"})})]})]})}}]),n}(o.Component),g=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props.events,t=this.props.numEvents,n=e.slice(0,t);return Object(v.jsx)("ul",{className:"EventList",children:n.map((function(e){return Object(v.jsx)("li",{children:Object(v.jsx)(p,{event:e})},e.id)}))})}}]),n}(o.Component),j=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var o;return Object(u.a)(this,n),(o=t.call(this,e)).getStyle=function(){return{color:o.color}},o.getClassName=function(){return o.class},o.color=null,o.class="Alert",o}return Object(h.a)(n,[{key:"render",value:function(){return Object(v.jsx)("div",{className:this.getClassName(),children:Object(v.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(o.Component),b=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var o;return Object(u.a)(this,n),(o=t.call(this,e)).color="blue",o}return n}(j),m=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var o;return Object(u.a)(this,n),(o=t.call(this,e)).color="red",o}return n}(j),w=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var o;return Object(u.a)(this,n),(o=t.call(this,e)).color="blue",o.class="offline",o}return n}(j),O=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={query:"",suggestions:[],showSuggestions:!1,infoText:""},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var o=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==o.length)return e.setState({query:n,suggestions:o,infoText:""});e.setState({query:n,infoText:"We can not find the city you are looking for. Please try another city"})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1,infoText:""}),e.props.updateEvents(t)},e.handleClick=function(e){e.target.select()},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return Object(v.jsxs)("div",{className:"CitySearch",children:[Object(v.jsx)(b,{text:this.state.infoText}),Object(v.jsx)("input",{type:"text",className:"cityInput",placeholder:"Search by city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})},onClick:this.handleClick}),Object(v.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(v.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(v.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(v.jsx)("b",{children:"See all cities"})},"all")]})]})}}]),n}(o.Component),x=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={inputNumEvents:32,infoText:""},e.handleInputChanged=function(t){var n=t.target.value;n>0&&n<51?(e.setState({inputNumEvents:n,infoText:""}),e.props.updateNumEvents(n)):e.setState({inputNumEvents:n,infoText:"Select a number from 1 to 50"})},e.handleClick=function(e){e.target.select()},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(v.jsxs)("div",{className:"numEvents",children:[Object(v.jsx)("p",{children:"Number of events  "}),Object(v.jsx)("input",{type:"number",className:"numInput",value:this.state.inputNumEvents,onChange:this.handleInputChanged,onClick:this.handleClick}),Object(v.jsx)(m,{text:this.state.infoText})]})}}]),n}(o.Component),k=n(23),S=n(11),y=n.n(S),C=n(9),N=n.n(C),E="https://n1ql91m6ff.execute-api.eu-west-2.amazonaws.com/dev/api",L=function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},W=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,o,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch(E+"/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return o=e.sent,(a=o.access_token)&&localStorage.setItem("access_token",a),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(e){var t=e.map((function(e){return e.location}));return Object(k.a)(new Set(t))},_=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,o,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(N.a.start(),navigator.onLine){e.next=5;break}return t=localStorage.getItem("lastEvents"),N.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 5:return e.next=7,A();case 7:if(!(n=e.sent)){e.next=17;break}return I(),o=E+"/get-events/"+n,e.next=13,y.a.get(o);case 13:return(a=e.sent).data&&(r=T(a.data.events),localStorage.setItem("lastEvents",JSON.stringify(a.data)),localStorage.setItem("locations",JSON.stringify(r))),N.a.done(),e.abrupt("return",a.data.events);case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,o,a,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,L(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return o=new URLSearchParams(window.location.search),e.next=13,o.get("code");case 13:if(a=e.sent){e.next=20;break}return e.next=17,y.a.get(E+"/get-auth-url");case 17:return r=e.sent,c=r.data.authUrl,e.abrupt("return",window.location.href=c);case 20:return e.abrupt("return",a&&W(a));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();n(48);var U=function(e){return e.showWelcomeScreen?Object(v.jsxs)("div",{className:"WelcomeScreen",children:[Object(v.jsx)("h1",{children:"Welcome to the Meet app"}),Object(v.jsx)("h4",{children:"Log in to see upcoming events around the world for full-stack developers"}),Object(v.jsx)("div",{className:"button_cont",align:"center",children:Object(v.jsxs)("div",{className:"google-btn",children:[Object(v.jsx)("div",{className:"google-icon-wrapper",children:Object(v.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"Google sign-in"})}),Object(v.jsx)("button",{onClick:function(){e.getAccessToken()},rel:"nofollow noopener",className:"btn-text",children:Object(v.jsx)("b",{children:"Sign in with google"})})]})}),Object(v.jsx)("a",{href:"https://Eloi-Perez.github.io/meet/privacy.html",rel:"nofollow noopener",children:"Privacy policy"})]}):null},P=(n(49),n(50),function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={events:[],locations:[],numEvents:32,showWelcomeScreen:void 0},e.updateNumEvents=function(t){e.setState({numEvents:t})},e.updateEvents=function(t){_().then((function(n){var o="all"===t?n:n.filter((function(e){return e.location===t}));e.setState({events:o})}))},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,o,a,r=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("1 "+navigator.onLine),this.mounted=!0,console.log("2 "+navigator.onLine),t=localStorage.getItem("access_token"),console.log("3 "+navigator.onLine),e.next=7,L(t);case 7:if(e.t0=e.sent.error,"invalid_token"!==e.t0){e.next=12;break}e.t1=!1,e.next=13;break;case 12:e.t1=!0;case 13:n=e.t1,console.log("4 "+navigator.onLine),o=new URLSearchParams(window.location.search),console.log("5 "+navigator.onLine),a=o.get("code"),console.log("6 "+navigator.onLine),this.setState({showWelcomeScreen:!(a||n)}),console.log("7 "+navigator.onLine),(a||n)&&this.mounted?(console.log("getting events!"),_().then((function(e){r.mounted&&r.setState({events:e,locations:T(e)})}))):!navigator.onLine&&this.mounted?(console.log("getting events! (second if)"),_().then((function(e){r.mounted&&r.setState({events:e,locations:T(e)})}))):navigator.onLine||(console.log("getting events! (third if)"),_().then((function(e){r.mounted&&r.setState({events:e,locations:T(e)})})));case 22:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(O,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(v.jsx)(x,{updateNumEvents:this.updateNumEvents}),Object(v.jsx)(g,{events:this.state.events,numEvents:this.state.numEvents}),!navigator.onLine&&Object(v.jsx)(w,{text:"You are offline, so we are using cached data"}),Object(v.jsx)(U,{showWelcomeScreen:this.state.showWelcomeScreen,getAccessToken:function(){A()}})]})}}]),n}(o.Component)),D=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function q(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,53)).then((function(t){var n=t.getCLS,o=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),o(e),a(e),r(e),c(e)}))};n(22).config("79e25a837d754e7da6059513ad5136c8").install(),c.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(P,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");D?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):q(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):q(t,e)}))}}(),F()}},[[52,1,2]]]);
//# sourceMappingURL=main.24462043.chunk.js.map