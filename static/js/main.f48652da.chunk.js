(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{28:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),a=n(21),i=n.n(a),c=(n(28),n(7)),s=n.n(c),l=n(8),u=n(2),d=n(6),m=n(4),p=n(3),g=n(0),h=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var o;return Object(u.a)(this,n),(o=t.call(this,e)).state={showDetails:!1},o}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.props.event,n=new Date(t.start.dateTime);return Object(g.jsxs)("div",{className:"event-container",children:[Object(g.jsx)("h3",{children:t.summary}),Object(g.jsx)("p",{children:n.toString()}),Object(g.jsx)("p",{children:t.location}),Object(g.jsx)("button",{className:"details-btn",onClick:function(){return e.setState({showDetails:!e.state.showDetails})},children:"Show Details"}),this.state.showDetails&&Object(g.jsxs)("div",{className:"event-details",children:[Object(g.jsx)("p",{className:"event-description",children:t.description}),Object(g.jsx)("p",{children:Object(g.jsx)("a",{href:t.htmlLink,rel:"noreferrer",target:"_blank",children:"Event in Google Calendar"})})]})]})}}]),n}(o.Component),f=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.events,t=this.props.numEvents,n=e.slice(0,t);return Object(g.jsx)("ul",{className:"EventList",children:n.map((function(e){return Object(g.jsx)("li",{children:Object(g.jsx)(h,{event:e})},e.id)}))})}}]),n}(o.Component),y=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var o;return Object(u.a)(this,n),(o=t.call(this,e)).getStyle=function(){return{color:o.color}},o.getClassName=function(){return o.class},o.color=null,o.class="Alert",o}return Object(d.a)(n,[{key:"render",value:function(){return Object(g.jsx)("div",{className:this.getClassName(),children:Object(g.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(o.Component),b=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var o;return Object(u.a)(this,n),(o=t.call(this,e)).color="blue",o}return n}(y),v=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var o;return Object(u.a)(this,n),(o=t.call(this,e)).color="red",o}return n}(y),w=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var o;return Object(u.a)(this,n),(o=t.call(this,e)).color="blue",o.class="offline",o}return n}(y),j=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:!1,infoText:""},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var o=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==o.length)return e.setState({query:n,suggestions:o,infoText:""});e.setState({query:n,infoText:"We can not find the city you are looking for. Please try another city"})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1,infoText:""}),e.props.updateEvents(t)},e.handleClick=function(e){e.target.select()},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(g.jsxs)("div",{className:"CitySearch",children:[Object(g.jsx)(b,{text:this.state.infoText}),Object(g.jsx)("input",{type:"text",className:"cityInput",placeholder:"Search by city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})},onClick:this.handleClick}),Object(g.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(g.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(g.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(g.jsx)("b",{children:"See all cities"})},"all")]})]})}}]),n}(o.Component),k=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={inputNumEvents:32,infoText:""},e.handleInputChanged=function(t){var n=t.target.value;n>0&&n<51?(e.setState({inputNumEvents:n,infoText:""}),e.props.updateNumEvents(n)):e.setState({inputNumEvents:n,infoText:"Select a number from 1 to 50"})},e.handleClick=function(e){e.target.select()},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(g.jsxs)("div",{className:"numEvents",children:[Object(g.jsx)("p",{children:"Number of events  "}),Object(g.jsx)("input",{type:"number",className:"numInput",value:this.state.inputNumEvents,onChange:this.handleInputChanged,onClick:this.handleClick}),Object(g.jsx)(v,{text:this.state.infoText})]})}}]),n}(o.Component),T=n(23),x=JSON.parse(JSON.stringify([{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurrence:["RRULE:FREQ=WEEKLY;WKST=SU;BYDAY=FR,MO,WE"],iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurrence:["RRULE:FREQ=WEEKLY;WKST=SU;BYDAY=SA,TH,TU"],iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3187221506816000"',id:"48m09le389vijbqfs2mcr6i87q",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NDhtMDlsZTM4OXZpamJxZnMybWNyNmk4N3FfMjAyMDA2MzBUMDcwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-07-01T13:39:01.000Z",updated:"2020-07-01T13:39:13.408Z",summary:"Node Gang",description:"We meet every Tuesday to talk about Node or JavaScript in general. Node Gang is an inclusive community that tries to cater to all levels of learners during meetups. Join us if you are curious to hear about what's new in Node, patterns, interesting npm packages, and practices.",location:"Sydney NSW, Australia",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-06-30T09:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-06-30T10:00:00+02:00",timeZone:"Europe/Berlin"},recurrence:["RRULE:FREQ=WEEKLY;BYDAY=TU"],iCalUID:"48m09le389vijbqfs2mcr6i87q@google.com",sequence:1,hangoutLink:"https://meet.google.com/wdc-wutt-tji",conferenceData:{entryPoints:[{entryPointType:"video",uri:"https://meet.google.com/wdc-wutt-tji",label:"meet.google.com/wdc-wutt-tji"},{entryPointType:"more",uri:"https://tel.meet/wdc-wutt-tji?pin=3796108774207",pin:"3796108774207"},{regionCode:"DE",entryPointType:"phone",uri:"tel:+49-40-8081618974",label:"+49 40 8081618974",pin:"170634768"}],conferenceSolution:{key:{type:"hangoutsMeet"},name:"Google Meet",iconUri:"https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"},conferenceId:"wdc-wutt-tji",signature:"ACn9hYEEmgGHK9aIf7jkIzc8hijj"},reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3187221858184000"',id:"3gi3kabkm3bua5lq3jhscc8s4c",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M2dpM2thYmttM2J1YTVscTNqaHNjYzhzNGNfMjAyMDA2MjlUMjAwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-07-01T13:23:24.000Z",updated:"2020-07-01T13:42:09.092Z",summary:"Intro to AngularJS-Remote",description:"Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. Join us to get introduced to this wonderful framework and dive deep into its features. ",location:"New York, NY, USA",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-06-29T22:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-06-29T23:00:00+02:00",timeZone:"Europe/Berlin"},recurrence:["RRULE:FREQ=WEEKLY;WKST=SU;BYDAY=FR,MO,WE"],iCalUID:"3gi3kabkm3bua5lq3jhscc8s4c@google.com",sequence:2,hangoutLink:"https://meet.google.com/xcb-hfjb-psv",conferenceData:{entryPoints:[{entryPointType:"video",uri:"https://meet.google.com/xcb-hfjb-psv",label:"meet.google.com/xcb-hfjb-psv"},{entryPointType:"more",uri:"https://tel.meet/xcb-hfjb-psv?pin=4442155852117",pin:"4442155852117"},{regionCode:"DE",entryPointType:"phone",uri:"tel:+49-40-8081617300",label:"+49 40 8081617300",pin:"657955248"}],conferenceSolution:{key:{type:"hangoutsMeet"},name:"Google Meet",iconUri:"https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"},conferenceId:"xcb-hfjb-psv",signature:"ACn9hYHvjRGBCkZ5zIbnqK+zQYpH"},reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3187222416180000"',id:"6co0ojl0l0j0rbh3g56vlc2s9i",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NmNvMG9qbDBsMGowcmJoM2c1NnZsYzJzOWlfMjAyMDA3MDFUMDEwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-07-01T13:44:15.000Z",updated:"2020-07-01T13:46:48.090Z",summary:"React California",description:"React is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nReact California is a non-profit organization offering free training sessions to React enthusiasts every Wednesday and Friday.\n\nJoin us in our free React training sessions and give your career a new direction.",location:"California, USA",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-07-01T03:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-07-01T04:00:00+02:00",timeZone:"Europe/Berlin"},recurrence:["RRULE:FREQ=WEEKLY;WKST=SU;BYDAY=FR,WE"],iCalUID:"6co0ojl0l0j0rbh3g56vlc2s9i@google.com",sequence:1,hangoutLink:"https://meet.google.com/imt-kabh-cib",conferenceData:{entryPoints:[{entryPointType:"video",uri:"https://meet.google.com/imt-kabh-cib",label:"meet.google.com/imt-kabh-cib"},{entryPointType:"more",uri:"https://tel.meet/imt-kabh-cib?pin=8711708481601",pin:"8711708481601"},{regionCode:"DE",entryPointType:"phone",uri:"tel:+49-40-8081618688",label:"+49 40 8081618688",pin:"752695860"}],conferenceSolution:{key:{type:"hangoutsMeet"},name:"Google Meet",iconUri:"https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"},conferenceId:"imt-kabh-cib",signature:"ACn9hYEcub/iKAVqSA9y+1p0dVQ0"},reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3187224991890000"',id:"3glt4dve9uip7oh5g5kb2bid2s",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M2dsdDRkdmU5dWlwN29oNWc1a2IyYmlkMnNfMjAyMDA3MDJUMTYwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-07-01T14:07:59.000Z",updated:"2020-07-01T14:08:15.945Z",summary:"Fun with Node.js",description:"Do you know that Node.js is basically a server having the capability of executing JavaScript? If you are familiar with JS, Node.js will be an easy ride. \n\nJoin us if you want to learn how to build the server-side of an app using Node.js.",location:"Nairobi, Kenya",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-07-02T18:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-07-02T19:00:00+02:00",timeZone:"Europe/Berlin"},recurrence:["RRULE:FREQ=WEEKLY;WKST=SU;BYDAY=MO,TH"],iCalUID:"3glt4dve9uip7oh5g5kb2bid2s@google.com",sequence:1,hangoutLink:"https://meet.google.com/wkx-akyy-omd",conferenceData:{entryPoints:[{entryPointType:"video",uri:"https://meet.google.com/wkx-akyy-omd",label:"meet.google.com/wkx-akyy-omd"},{entryPointType:"more",uri:"https://tel.meet/wkx-akyy-omd?pin=9536747460380",pin:"9536747460380"},{regionCode:"DE",entryPointType:"phone",uri:"tel:+49-40-8081616512",label:"+49 40 8081616512",pin:"576339034"}],conferenceSolution:{key:{type:"hangoutsMeet"},name:"Google Meet",iconUri:"https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"},conferenceId:"wkx-akyy-omd",signature:"ACn9hYG5mf5FjFR36vSnjClx5345"},reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3187231386852000"',id:"7qqm95l3op6khilck5cprvbq2u",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=N3FxbTk1bDNvcDZraGlsY2s1Y3BydmJxMnVfMjAyMDA3MDFUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-07-01T15:00:58.000Z",updated:"2020-07-01T15:01:33.426Z",summary:"Fun with Angular",description:"Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. \n\nJoin us to get introduced to this wonderful framework and dive deep into its features. ",location:"Dubai - United Arab Emirates",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-07-01T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-07-01T17:00:00+02:00",timeZone:"Europe/Berlin"},recurrence:["RRULE:FREQ=WEEKLY;WKST=SU;BYDAY=SU,WE"],iCalUID:"7qqm95l3op6khilck5cprvbq2u@google.com",sequence:1,hangoutLink:"https://meet.google.com/bim-zvvi-nio",conferenceData:{entryPoints:[{entryPointType:"video",uri:"https://meet.google.com/bim-zvvi-nio",label:"meet.google.com/bim-zvvi-nio"},{entryPointType:"more",uri:"https://tel.meet/bim-zvvi-nio?pin=8340594476418",pin:"8340594476418"},{regionCode:"DE",entryPointType:"phone",uri:"tel:+49-40-8081617267",label:"+49 40 8081617267",pin:"692195842"}],conferenceSolution:{key:{type:"hangoutsMeet"},name:"Google Meet",iconUri:"https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"},conferenceId:"bim-zvvi-nio",signature:"ACn9hYGQrbnSFWd4ppMehjc6PgTF"},reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3187232047578000"',id:"013qoq4ns44cam7q4hqcf13eab",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=MDEzcW9xNG5zNDRjYW03cTRocWNmMTNlYWJfMjAyMDA2MjhUMjMwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-07-01T15:05:49.000Z",updated:"2020-07-01T15:07:03.789Z",summary:"jQuery and More",description:"Do you know jQuery is used by around 70 percent of the 10 million most popular websites as of May 2019? \n\nThough many consider it dead after Angular and Express gained popularity, jQuery is still an important part of many websites. \n\nIn our workshop, we teach basic to advanced jQuery where you will also be able to build a simple app using it. If you are familiar with JS, join us to learn probably its most popular library.",location:"Santiago, Santiago Metropolitan Region, Chile",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-06-29T01:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-06-29T02:00:00+02:00",timeZone:"Europe/Berlin"},recurrence:["RRULE:FREQ=WEEKLY;WKST=SU;BYDAY=FR,MO,WE"],iCalUID:"013qoq4ns44cam7q4hqcf13eab@google.com",sequence:1,hangoutLink:"https://meet.google.com/mqx-jyfg-uoc",conferenceData:{entryPoints:[{entryPointType:"video",uri:"https://meet.google.com/mqx-jyfg-uoc",label:"meet.google.com/mqx-jyfg-uoc"},{entryPointType:"more",uri:"https://tel.meet/mqx-jyfg-uoc?pin=9759553023326",pin:"9759553023326"},{regionCode:"DE",entryPointType:"phone",uri:"tel:+49-40-8081618734",label:"+49 40 8081618734",pin:"678190650"}],conferenceSolution:{key:{type:"hangoutsMeet"},name:"Google Meet",iconUri:"https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"},conferenceId:"mqx-jyfg-uoc",signature:"ACn9hYHqzpky2KS/TAAxZ032CEB9"},reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3187232499498000"',id:"7rclpdp8egm60g7kepei7j0bt9",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=N3JjbHBkcDhlZ202MGc3a2VwZWk3ajBidDlfMjAyMDA3MDFUMDkwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-07-01T15:10:03.000Z",updated:"2020-07-01T15:10:49.749Z",summary:"Hello JavaScript!!",description:"You know basic HTML and CSS, and interested to learn the next thing about web development? You are at the right place. Our workshop will take you to the amazing world of JavaScript. \n\nIn this workshop, you'll:- Learn JavaScript, from basics to advanced topics- Create your first app",location:"Bangkok, Thailand",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-07-01T11:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-07-01T12:00:00+02:00",timeZone:"Europe/Berlin"},recurrence:["RRULE:FREQ=WEEKLY;WKST=SU;BYDAY=FR,WE"],iCalUID:"7rclpdp8egm60g7kepei7j0bt9@google.com",sequence:1,hangoutLink:"https://meet.google.com/tbu-cgma-ikb",conferenceData:{entryPoints:[{entryPointType:"video",uri:"https://meet.google.com/tbu-cgma-ikb",label:"meet.google.com/tbu-cgma-ikb"},{entryPointType:"more",uri:"https://tel.meet/tbu-cgma-ikb?pin=5464596701700",pin:"5464596701700"},{regionCode:"DE",entryPointType:"phone",uri:"tel:+49-40-8081618071",label:"+49 40 8081618071",pin:"382271360"}],conferenceSolution:{key:{type:"hangoutsMeet"},name:"Google Meet",iconUri:"https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"},conferenceId:"tbu-cgma-ikb",signature:"ACn9hYFv1E+b34JYhD91l8ZMmuBT"},reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3187232532588000"',id:"20c51je3q99mnolr1rp06dt9jd",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=MjBjNTFqZTNxOTltbm9scjFycDA2ZHQ5amRfMjAyMDA2MzBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-07-01T14:17:12.000Z",updated:"2020-07-01T15:11:06.294Z",summary:"Use jQuery, bring in interactivity easily ",description:"Do you know jQuery is used by around 70 percent of the 10 million most popular websites as of May 2019? \n\nThough many consider it dead after Angular and Express gained popularity, jQuery is still an important part of many websites. \n\nIn our workshop, we teach basic to advanced jQuery where you will also be able to build a simple app using it. If you are familiar with JS, join us to learn probably its most popular library.",location:"Mumbai, Maharashtra, India",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-06-30T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-06-30T15:00:00+02:00",timeZone:"Europe/Berlin"},recurrence:["RRULE:FREQ=WEEKLY;WKST=SU;BYDAY=SA,TH,TU"],iCalUID:"20c51je3q99mnolr1rp06dt9jd@google.com",sequence:1,hangoutLink:"https://meet.google.com/nns-htdr-ijk",conferenceData:{entryPoints:[{entryPointType:"video",uri:"https://meet.google.com/nns-htdr-ijk",label:"meet.google.com/nns-htdr-ijk"},{entryPointType:"more",uri:"https://tel.meet/nns-htdr-ijk?pin=9302146320475",pin:"9302146320475"},{regionCode:"DE",entryPointType:"phone",uri:"tel:+49-40-8081618430",label:"+49 40 8081618430",pin:"810644618"}],conferenceSolution:{key:{type:"hangoutsMeet"},name:"Google Meet",iconUri:"https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"},conferenceId:"nns-htdr-ijk",signature:"ACn9hYGc8p6xxbn/zOCh7jsX4wgC"},reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3187232583216000"',id:"3m5n6mcl1aqrdsg6k5vkr6to5p",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M201bjZtY2wxYXFyZHNnNms1dmtyNnRvNXBfMjAyMDA2MzBUMTYzMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-07-01T13:54:32.000Z",updated:"2020-07-01T15:11:31.608Z",summary:"Build Your First App with JavaScript",description:"You know basic HTML and CSS, and interested to learn the next thing about web development? Well, you are at the right place. Our workshop will take you to the amazing world of JavaScript. \n\nIn this workshop, you'll:\n- Learn JavaScript, from basics to advanced topics\n- Create your first app",location:"Amsterdam, Netherlands",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-06-30T18:30:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-06-30T19:30:00+02:00",timeZone:"Europe/Berlin"},recurrence:["RRULE:FREQ=WEEKLY;WKST=SU;BYDAY=SA,TU"],iCalUID:"3m5n6mcl1aqrdsg6k5vkr6to5p@google.com",sequence:1,hangoutLink:"https://meet.google.com/vxc-jcvs-juv",conferenceData:{entryPoints:[{entryPointType:"video",uri:"https://meet.google.com/vxc-jcvs-juv",label:"meet.google.com/vxc-jcvs-juv"},{entryPointType:"more",uri:"https://tel.meet/vxc-jcvs-juv?pin=7178471106778",pin:"7178471106778"},{regionCode:"DE",entryPointType:"phone",uri:"tel:+49-40-8081619886",label:"+49 40 8081619886",pin:"257304091"}],conferenceSolution:{key:{type:"hangoutsMeet"},name:"Google Meet",iconUri:"https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"},conferenceId:"vxc-jcvs-juv",signature:"ACn9hYFM5eXP8VuOLe9goWNyFbC7"},reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3187234500432000"',id:"65jg7h2f96klim15fie75mj1a1",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NjVqZzdoMmY5NmtsaW0xNWZpZTc1bWoxYTFfMjAyMDA2MjlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-07-01T15:26:57.000Z",updated:"2020-07-01T15:27:30.216Z",summary:"AngularJS Workshop",description:"Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. \n\nJoin us to get introduced to this wonderful framework and dive deep into its features.",location:"Cape Town, South Africa",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-06-29T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-06-29T17:00:00+02:00",timeZone:"Europe/Berlin"},recurrence:["RRULE:FREQ=WEEKLY;WKST=SU;BYDAY=FR,MO,WE"],iCalUID:"65jg7h2f96klim15fie75mj1a1@google.com",sequence:1,hangoutLink:"https://meet.google.com/ctp-pwtc-pmq",conferenceData:{entryPoints:[{entryPointType:"video",uri:"https://meet.google.com/ctp-pwtc-pmq",label:"meet.google.com/ctp-pwtc-pmq"},{entryPointType:"more",uri:"https://tel.meet/ctp-pwtc-pmq?pin=2824243883315",pin:"2824243883315"},{regionCode:"DE",entryPointType:"phone",uri:"tel:+49-30-300195220",label:"+49 30 300195220",pin:"987090091"}],conferenceSolution:{key:{type:"hangoutsMeet"},name:"Google Meet",iconUri:"https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"},conferenceId:"ctp-pwtc-pmq",signature:"ACn9hYG8uMruF91aKgEn/cZmFFut"},reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3187234769062000"',id:"46717o686s7ibj1lp300pabro9",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NDY3MTdvNjg2czdpYmoxbHAzMDBwYWJybzlfMjAyMDA3MDFUMTgwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-07-01T15:28:56.000Z",updated:"2020-07-01T15:29:44.531Z",summary:"React Workshop",description:"React is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Toronto, ON, Canada",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-07-01T20:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-07-01T21:00:00+02:00",timeZone:"Europe/Berlin"},recurrence:["RRULE:FREQ=WEEKLY;WKST=SU;BYDAY=SU,WE"],iCalUID:"46717o686s7ibj1lp300pabro9@google.com",sequence:1,hangoutLink:"https://meet.google.com/jnj-edux-duq",conferenceData:{entryPoints:[{entryPointType:"video",uri:"https://meet.google.com/jnj-edux-duq",label:"meet.google.com/jnj-edux-duq"},{entryPointType:"more",uri:"https://tel.meet/jnj-edux-duq?pin=3356856978418",pin:"3356856978418"},{regionCode:"DE",entryPointType:"phone",uri:"tel:+49-30-300195194",label:"+49 30 300195194",pin:"599388176"}],conferenceSolution:{key:{type:"hangoutsMeet"},name:"Google Meet",iconUri:"https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"},conferenceId:"jnj-edux-duq",signature:"ACn9hYHDiJEUy3o89grfOPhYgysf"},reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3187237556010000"',id:"111vmlbl7p8gmc0fbf5u107p8u",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=MTExdm1sYmw3cDhnbWMwZmJmNXUxMDdwOHVfMjAyMDA3MDJUMDcwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-07-01T15:47:59.000Z",updated:"2020-07-01T15:52:58.005Z",summary:"React Native Tokyo",description:"We meet every Monday and Thursday to talk about React Native and native app development in general. React Native Tokyo is an inclusive community that tries to cater to all levels of learners during meetups. \n\nJoin us if you are curious to hear about what's new in the field of native app development.",location:"Tokyo, Japan",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-07-02T09:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-07-02T10:00:00+02:00",timeZone:"Europe/Berlin"},recurrence:["RRULE:FREQ=WEEKLY;WKST=SU;BYDAY=MO,TH"],iCalUID:"111vmlbl7p8gmc0fbf5u107p8u@google.com",sequence:1,hangoutLink:"https://meet.google.com/ceo-behe-ssp",conferenceData:{entryPoints:[{entryPointType:"video",uri:"https://meet.google.com/ceo-behe-ssp",label:"meet.google.com/ceo-behe-ssp"},{entryPointType:"more",uri:"https://tel.meet/ceo-behe-ssp?pin=2641490783465",pin:"2641490783465"},{regionCode:"DE",entryPointType:"phone",uri:"tel:+49-40-8081617770",label:"+49 40 8081617770",pin:"889553795"}],conferenceSolution:{key:{type:"hangoutsMeet"},name:"Google Meet",iconUri:"https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"},conferenceId:"ceo-behe-ssp",signature:"ACn9hYHtbIM5rCMwjAdD6L1WrYH8"},reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3187238088812000"',id:"7e4k9oop7bb86svd42vui37k6o",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=N2U0azlvb3A3YmI4NnN2ZDQydnVpMzdrNm9fMjAyMDA2MzBUMTUwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-07-01T15:56:05.000Z",updated:"2020-07-01T15:57:24.406Z",summary:"Angular Moscow",description:"Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. \n\n\nJoin us to get introduced to this wonderful framework and dive deep into its features.",location:"Moscow, Russia",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-06-30T17:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-06-30T18:00:00+02:00",timeZone:"Europe/Berlin"},recurrence:["RRULE:FREQ=WEEKLY;WKST=SU;BYDAY=TU"],iCalUID:"7e4k9oop7bb86svd42vui37k6o@google.com",sequence:1,hangoutLink:"https://meet.google.com/fip-gdth-tdu",conferenceData:{entryPoints:[{entryPointType:"video",uri:"https://meet.google.com/fip-gdth-tdu",label:"meet.google.com/fip-gdth-tdu"},{entryPointType:"more",uri:"https://tel.meet/fip-gdth-tdu?pin=1369000914291",pin:"1369000914291"},{regionCode:"DE",entryPointType:"phone",uri:"tel:+49-40-8081616684",label:"+49 40 8081616684",pin:"516915292"}],conferenceSolution:{key:{type:"hangoutsMeet"},name:"Google Meet",iconUri:"https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"},conferenceId:"fip-gdth-tdu",signature:"ACn9hYFAdqnzw7hPbVfhtbxTVIwr"},reminders:{useDefault:!0},eventType:"default"}])),S=n(11),Z=n.n(S),M=n(9),E=n.n(M),D="https://n1ql91m6ff.execute-api.eu-west-2.amazonaws.com/dev/api",W=function(){var e=Object(l.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},Y=function(){var e=Object(l.a)(s.a.mark((function e(t){var n,o,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch(D+"/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return o=e.sent,(r=o.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(e){var t=e.map((function(e){return e.location}));return Object(T.a)(new Set(t))},O=function(){var e=Object(l.a)(s.a.mark((function e(){var t,n,o,r,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(E.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return E.a.done(),e.abrupt("return",x);case 4:if(navigator.onLine){e.next=8;break}return t=localStorage.getItem("lastEvents"),E.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 8:return e.next=10,_();case 10:if(!(n=e.sent)){e.next=20;break}return A(),o=D+"/get-events/"+n,e.next=16,Z.a.get(o);case 16:return(r=e.sent).data&&(a=R(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(a))),E.a.done(),e.abrupt("return",r.data.events);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(l.a)(s.a.mark((function e(){var t,n,o,r,a,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,W(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return o=new URLSearchParams(window.location.search),e.next=13,o.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,Z.a.get(D+"/get-auth-url");case 17:return a=e.sent,i=a.data.authUrl,e.abrupt("return",window.location.href=i);case 20:return e.abrupt("return",r&&Y(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();n(48);var q=function(e){return e.showWelcomeScreen?Object(g.jsxs)("div",{className:"WelcomeScreen",children:[Object(g.jsx)("h1",{children:"Welcome to the Meet app"}),Object(g.jsx)("h4",{children:"Log in to see upcoming events around the world for full-stack developers"}),Object(g.jsx)("div",{className:"button_cont",align:"center",children:Object(g.jsxs)("div",{class:"google-btn",children:[Object(g.jsx)("div",{class:"google-icon-wrapper",children:Object(g.jsx)("img",{class:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"Google sign-in"})}),Object(g.jsx)("button",{onClick:function(){e.getAccessToken()},rel:"nofollow noopener",class:"btn-text",children:Object(g.jsx)("b",{children:"Sign in with google"})})]})}),Object(g.jsx)("a",{href:"https://Eloi-Perez.github.io/meet/privacy.html",rel:"nofollow noopener",children:"Privacy policy"})]}):null},U=(n(49),n(50),function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],numEvents:32,showWelcomeScreen:void 0},e.updateNumEvents=function(t){e.setState({numEvents:t})},e.updateEvents=function(t){O().then((function(n){var o="all"===t?n:n.filter((function(e){return e.location===t}));e.setState({events:o})}))},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(s.a.mark((function e(){var t,n,o,r,a=this;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.mounted=!0,t=localStorage.getItem("access_token"),e.next=4,W(t);case 4:if(!e.sent.error){e.next=8;break}e.t0=!1,e.next=9;break;case 8:e.t0=!0;case 9:n=e.t0,o=new URLSearchParams(window.location.search),r=o.get("code"),this.setState({showWelcomeScreen:!(r||n)}),(r||n)&&this.mounted&&O().then((function(e){a.mounted&&a.setState({events:e,locations:R(e)})}));case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return void 0===this.state.showWelcomeScreen?Object(g.jsx)("div",{className:"App"}):Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(j,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(g.jsx)(k,{updateNumEvents:this.updateNumEvents}),Object(g.jsx)(f,{events:this.state.events,numEvents:this.state.numEvents}),!navigator.onLine&&Object(g.jsx)(w,{text:"You are offline, so we are using cached data"}),Object(g.jsx)(q,{showWelcomeScreen:this.state.showWelcomeScreen,getAccessToken:function(){_()}})]})}}]),n}(o.Component)),C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,53)).then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),o(e),r(e),a(e),i(e)}))};n(22).config("79e25a837d754e7da6059513ad5136c8").install(),i.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(U,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");C?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):N(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):N(t,e)}))}}(),B()}},[[52,1,2]]]);
//# sourceMappingURL=main.f48652da.chunk.js.map