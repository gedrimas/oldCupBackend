(this.webpackJsonpoldcupfrontend=this.webpackJsonpoldcupfrontend||[]).push([[0],{108:function(e,t,n){},142:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(12),i=n.n(a),o=(n(108),n(35),n(10)),s=n(50),l=n(14),u=n(18),d=n(25),j=n(15),p=n.n(j),b=n(20),f=n(88),h=n(89),O=n(62),m=n.n(O);function v(e){return 200===e.status}var x=function(){function e(t,n,r,c){Object(f.a)(this,e),this.method=t,this.url=n,this.payload=r,this.options=c}return Object(h.a)(e,[{key:"sendRequest",value:function(){var e=this;return Object(b.a)(p.a.mark((function t(){var n,r,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=e.method,t.next="get"===t.t0?3:"post"===t.t0?13:"put"===t.t0?23:33;break;case 3:return t.prev=3,t.next=6,m.a[e.method]("http://localhost:3001/".concat(e.url));case 6:return n=t.sent,t.abrupt("return",n);case 10:return t.prev=10,t.t1=t.catch(3),t.abrupt("return",{message:t.t1.message,endpoint:e.url,method:e.method});case 13:return t.prev=13,t.next=16,m.a[e.method]("http://localhost:3001/".concat(e.url),e.payload,e.options);case 16:return r=t.sent,t.abrupt("return",r);case 20:return t.prev=20,t.t2=t.catch(13),t.abrupt("return",{message:t.t2.message,endpoint:e.url,method:e.method,body:e.payload});case 23:return t.prev=23,t.next=26,m.a[e.method]("http://localhost:3001/".concat(e.url),e.payload,e.options);case 26:return c=t.sent,t.abrupt("return",c);case 30:return t.prev=30,t.t3=t.catch(23),t.abrupt("return",{message:t.t3.message,endpoint:e.url,method:e.method,body:e.payload});case 33:case"end":return t.stop()}}),t,null,[[3,10],[13,20],[23,30]])})))()}}]),e}(),g=Object(u.b)({name:"errorSlice",initialState:{errorInfo:{message:null,endpoint:null,method:null},isError:!1},reducers:{setError:function(e,t){e.errorInfo=t.payload,e.isError=!0},clearError:function(e){e.errorInfo={message:null,endpoint:null,method:null},e.isError=!1}}}),y=g.actions,w=y.setError,S=(y.clearError,g.reducer),k=Object(u.b)({name:"sectionSlice",initialState:{allsections:[],pending:!1,activeSection:""},reducers:{setSections:function(e,t){e.allsections=t.payload},setPending:function(e,t){e.pending=t.payload},setActiveSection:function(e,t){e.activeSection=t.payload}}}),C=k.actions,I=C.setSections,A=C.setPending,E=C.setActiveSection,L=k.reducer,P=Object(u.b)({name:"contactSlice",initialState:{contacts:[],pending:!1},reducers:{setContacts:function(e,t){e.contacts=t.payload},setPending:function(e,t){e.pending=t.payload}}}),T=P.actions,R=T.setContacts,q=T.setPending,F=P.reducer,N=Object(u.b)({name:"langSlice",initialState:{lang:"ru"},reducers:{changeLang:function(e){e.lang="ru"===e.lang?"ee":"ru"}}}),_=N.actions.changeLang,M=N.reducer,z=Object(u.b)({name:"advertsSlice",initialState:{allAdverts:[],pending:!1},reducers:{setAllAdverts:function(e,t){e.allAdverts=t.payload},setPending:function(e,t){e.pending=t.payload}}}),W=z.actions,U=W.setAllAdverts,B=W.setPending,D=z.reducer,J=Object(u.b)({name:"modalSlice",initialState:{isOpen:!1,modalContentType:null},reducers:{openModal:function(e){e.isOpen=!0},closeModal:function(e){e.isOpen=!1},setModalContentType:function(e,t){e.modalContentType=t.payload}}}),K=J.actions,G=K.openModal,H=K.closeModal,Q=K.setModalContentType,V=J.reducer,X=Object(u.b)({name:"loginSlice",initialState:{isLogin:!1},reducers:{setLogin:function(e){e.isLogin=!0},dropLogin:function(e){e.isLogin=!1}}}),Y=X.actions,Z=Y.setLogin,$=(Y.dropLogin,X.reducer),ee=Object(d.c)({contacts:F,sections:L,error:S,language:M,advertisements:D,modal:V,login:$}),te=Object(u.a)({reducer:ee}),ne=n(180),re=n(91),ce=n.n(re),ae=n(92),ie=n.n(ae),oe=n(90),se=n.n(oe),le=n(2),ue=function(e){var t=e.login;return Object(le.jsx)(ne.a,{item:!0,id:"loginIcon",onClick:t,children:Object(le.jsx)(se.a,{fontSize:"large",style:{cursor:"pointer"}})})},de=n.p+"static/media/ru.c89ed68a.svg",je=n.p+"static/media/ee.dafcc141.svg",pe=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.language.lang}));return Object(le.jsx)(ne.a,{item:!0,id:"langIcon",onClick:function(){e(_())},children:Object(le.jsx)("img",{src:"ru"===t?de:je,alt:"ru"})})},be=n(193),fe=n(46),he=n(28),Oe=n(191),me=n(145),ve=n(184),xe=function(){var e=Object(r.useState)({name:"",password:""}),t=Object(he.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(!1),i=Object(he.a)(a,2),s=i[0],l=i[1],u=Object(o.b)(),d=function(e){c(Object(fe.a)(Object(fe.a)({},n),e))},j=function(){var e=Object(b.a)(p.a.mark((function e(t){var r,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,r=sessionStorage.getItem("ExpressGeneratorTs"),console.log("token",r),e.next=6,new x("post","login",n).sendRequest();case 6:if(v(c=e.sent)){e.next=9;break}throw c;case 9:u(Z()),u(H()),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),l(!0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(le.jsx)("form",{onSubmit:j,children:Object(le.jsxs)(ne.a,{container:!0,direction:"column",alignItems:"center",children:[Object(le.jsx)("h4",{children:"Stuff only"}),Object(le.jsx)(Oe.a,{error:s,label:"Login",value:n.name,onChange:function(e){return d({name:e.target.value})}}),Object(le.jsx)(Oe.a,{error:s,style:{marginTop:"0.5rem"},label:"Password",type:"password",value:n.password,onChange:function(e){return d({password:e.target.value})}}),Object(le.jsxs)(ve.a,{size:"small",style:{marginTop:"1rem"},children:[Object(le.jsx)(me.a,{type:"submit",children:"Ok"}),Object(le.jsx)(me.a,{onClick:function(){return u(H())},children:"Close"})]})]})})},ge=function(){var e=Object(o.c)((function(e){return e.contacts.contacts}))[0],t=e.email,n=e.phone,c=e.ee,a=e.ru,i=e._id,s=Object(r.useState)({email:t,phone:n,ee:c,ru:a,_id:i}),l=Object(he.a)(s,2),u=l[0],d=l[1],j=Object(o.b)(),f=function(e){d(Object(fe.a)(Object(fe.a)({},u),e))},h=function(){var e=Object(b.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,new x("put","contacts",u).sendRequest();case 4:if(v(n=e.sent)){e.next=7;break}throw n;case 7:j(H()),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(1);case 12:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(le.jsx)("form",{onSubmit:h,children:Object(le.jsxs)(ne.a,{container:!0,direction:"column",alignItems:"center",children:[Object(le.jsx)("h4",{children:"Contacts & Info"}),Object(le.jsx)(Oe.a,{label:"Phone",value:u.phone,onChange:function(e){return f({phone:e.target.value})}}),Object(le.jsx)(Oe.a,{style:{marginTop:"0.5rem"},label:"Email",value:u.email,onChange:function(e){return f({email:e.target.value})}}),Object(le.jsx)(Oe.a,{style:{marginTop:"0.5rem"},label:"info(Ru)",value:u.ru,onChange:function(e){return f({ru:e.target.value})}}),Object(le.jsx)(Oe.a,{style:{marginTop:"0.5rem"},label:"info(Ee)",value:u.ee,onChange:function(e){return f({ee:e.target.value})}}),Object(le.jsxs)(ve.a,{size:"small",style:{marginTop:"1rem"},children:[Object(le.jsx)(me.a,{type:"submit",children:"Ok"}),Object(le.jsx)(me.a,{onClick:function(){return j(H())},children:"Close"})]})]})})},ye={loginForm:Object(le.jsx)(xe,{}),contactsInfoForm:Object(le.jsx)(ge,{})};function we(e){var t,n=e.open,r=Object(o.b)(),c=Object(o.c)((function(e){return e.modal.modalContentType}));c&&(t=ye[c]);return Object(le.jsx)(be.a,{onClose:function(){r(H())},"aria-labelledby":"simple-dialog-title",open:n,children:Object(le.jsx)(ne.a,{container:!0,justify:"center",style:{padding:"1rem"},children:t})})}var Se=n(93),ke=n.n(Se),Ce=function(){var e=Object(o.b)();Object(r.useEffect)((function(){e(function(){var e=Object(b.a)(p.a.mark((function e(t){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(q(!0)),e.next=4,new x("get","contacts").sendRequest();case 4:if(v(n=e.sent)){e.next=7;break}throw n;case 7:r=n.data.contacts,t(R(r)),t(q(!1)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),t(w(e.t0));case 15:return e.prev=15,t(q(!1)),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[0,12,15,18]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);var t=Object(o.c)((function(e){return e.contacts.contacts})),n=Object(o.c)((function(e){return e.language.lang})),c=t.length?{info:t[0][n],phone:t[0].phone,email:t[0].email}:null,a=Object(o.c)((function(e){return e.modal.isOpen}));return Object(le.jsxs)("div",{className:"InfoContact-wrapper",children:[Object(le.jsx)(we,{open:a}),Object(le.jsxs)(ne.a,{container:!0,justify:"space-between",wrap:"nowrap",children:[Object(le.jsx)(pe,{}),Object(le.jsx)(ne.a,{container:!0,alignItems:"center",justify:"center",children:Object(le.jsx)("span",{style:{textAlign:"center"},children:null===c||void 0===c?void 0:c.info})}),Object(le.jsx)(ue,{login:function(){e(Q("loginForm")),e(G())}})]}),Object(le.jsxs)(ne.a,{container:!0,justify:"center",children:[Object(le.jsx)(ne.a,{item:!0,children:Object(le.jsxs)(ne.a,{container:!0,children:[Object(le.jsx)(ce.a,{}),Object(le.jsx)("span",{children:null===c||void 0===c?void 0:c.phone})]})}),Object(le.jsx)(ne.a,{item:!0,style:{marginLeft:"0.5rem"},children:Object(le.jsxs)(ne.a,{container:!0,children:[Object(le.jsx)(ie.a,{style:{marginRight:"0.2rem"}}),Object(le.jsx)("span",{children:null===c||void 0===c?void 0:c.email}),Object(le.jsx)(ke.a,{style:{marginLeft:"0.3rem",color:"ff4d76",cursor:"pointer"},onClick:function(){e(Q("contactsInfoForm")),e(G())}})]})})]})]})},Ie=n(194),Ae=n(185),Ee=Object(Ae.a)({customChip:function(){return{borderWidth:"3px",color:"#5d5d5f"}},advertPaper:function(){return{margin:"1rem"}},advertInfoPaper:function(){return{padding:"0.5rem",color:"#5d5d5f"}},advertInfoContent:function(){return{margin:"0 1rem","& span":{fontSize:"1.3rem"}}},price:function(){return{marginLeft:"0.5rem"}}}),Le=function(){var e=Object(o.b)(),t=Ee();Object(r.useEffect)((function(){e(function(){var e=Object(b.a)(p.a.mark((function e(t){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(A(!0)),e.next=4,new x("get","allsections").sendRequest();case 4:if(v(n=e.sent)){e.next=7;break}throw n;case 7:r=n.data.allsections,t(I(r)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t(w(e.t0));case 14:return e.prev=14,t(A(!1)),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);var n=Object(o.c)((function(e){return e.sections.allsections})),c=Object(o.c)((function(e){return e.language.lang})),a=Object(o.c)((function(e){return e.sections.activeSection}));Object(r.useEffect)((function(){var t;if(n){var r=null===(t=n[0])||void 0===t?void 0:t._id;!function(){c.apply(this,arguments)}(),e(E(r))}function c(){return(c=Object(b.a)(p.a.mark((function t(){var n,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e(B(!0)),t.next=4,new x("get","adverts/".concat(r)).sendRequest();case 4:if(v(n=t.sent)){t.next=7;break}throw n;case 7:c=n.data.allAdverts,e(U(c)),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),e(w(t.t0));case 14:return t.prev=14,e(B(!1)),t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[0,11,14,17]])})))).apply(this,arguments)}}),[n,e]);var i=Object(r.useRef)(!1);return Object(r.useEffect)((function(){function t(){return(t=Object(b.a)(p.a.mark((function t(){var n,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,new x("get","adverts/".concat(a)).sendRequest();case 3:if(v(n=t.sent)){t.next=6;break}throw n;case 6:r=n.data.allAdverts,e(U(r)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),e(w(t.t0));case 13:return t.prev=13,e(B(!1)),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[0,10,13,16]])})))).apply(this,arguments)}i.current?function(){t.apply(this,arguments)}():i.current=!0}),[a,e]),Object(le.jsx)("div",{className:"SectionMenu-wrapper",children:n.map((function(n){return Object(le.jsx)(Ie.a,{onClick:function(){return t=n._id,void e(E(t));var t},label:n[c],variant:"outlined",style:(r=n._id,r===a?{borderColor:"rgba(0, 204, 255, 0.77)",borderWidth:"3px",boxShadow:"1px 2px 31px -4px rgba(31,232,239,0.92)"}:{borderWidth:"3px"}),className:"".concat(t.customChip)},n._id);var r}))})},Pe=n(71),Te=n(186),Re=n(187),qe=n(188),Fe=n(189),Ne=n(68),_e=function(e){var t=e.photoUrl,n=e.width;return Object(le.jsx)(Ne.IKContext,{urlEndpoint:"https://ik.imagekit.io/scqtro3md",children:Object(le.jsx)(Ne.IKImage,{style:{marginTop:"10px",marginLeft:"auto",marginRight:"auto",display:"block"},path:t,transformation:[{height:n,width:n}]})})},Me=function(e){var t=e.mainPhotoUrl,n=e.advertId,r=e.photoWidth;return Object(le.jsx)(s.b,{to:"/advert/".concat(n),children:Object(le.jsx)(Te.a,{children:Object(le.jsxs)(Re.a,{children:[r&&Object(le.jsx)(_e,{photoUrl:t,width:r}),Object(le.jsxs)(qe.a,{children:[Object(le.jsx)(Fe.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Lizard"}),Object(le.jsx)(Fe.a,{variant:"body2",color:"textSecondary",component:"p",children:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"})]})]})})})},ze=function(){var e=Object(o.c)((function(e){return e.advertisements.allAdverts})),t=Object(r.useState)(null),n=Object(he.a)(t,2),c=n[0],a=n[1],i=Object(r.createRef)();Object(r.useEffect)((function(){if(i.current){var e=i.current.clientWidth;a(e)}}),[i]);return Object(le.jsx)("div",{className:"AdvertBlock-wrapper",children:function(){var t=[];e.length%3>0&&(t=[1,2].map((function(e){return Object(le.jsx)("div",{className:"Advert-column"},e)})));var n=e.map((function(e){return Object(le.jsx)(ne.a,{className:"Advert-column",ref:i,children:c&&Object(le.jsx)(Me,{mainPhotoUrl:e.mainPhoto,advertId:e._id,photoWidth:c-20})},e._id)}));return[].concat(Object(Pe.a)(n),Object(Pe.a)(t))}()})},We=n(144),Ue=n(94),Be=n.n(Ue),De=n(190),Je=function(){var e=Object(l.f)().advertId,t=Ee(),n=Object(o.c)((function(e){return e.advertisements.allAdverts})),c=Object(o.c)((function(e){return e.language.lang})),a=n.filter((function(t){return t._id===e}))[0],i=Object(le.jsx)(We.a,{elevation:3,className:"".concat(t.advertPaper," ").concat(t.advertInfoPaper),children:Object(le.jsxs)(ne.a,{container:!0,justify:"space-between",alignItems:"center",wrap:"nowrap",children:[Object(le.jsx)(ne.a,{item:!0,xs:9,children:a?a[c]:null}),Object(le.jsx)(ne.a,{item:!0,xs:3,children:Object(le.jsxs)(ne.a,{container:!0,justify:"flex-end",children:[Object(le.jsx)(De.a,{orientation:"vertical",flexItem:!0}),Object(le.jsx)(ne.a,{item:!0,children:Object(le.jsxs)(ne.a,{container:!0,wrap:"nowrap",justify:"space-evenly",alignItems:"center",children:[Object(le.jsxs)("span",{className:"".concat(t.price),children:[" ",a?a.price:null," "]}),Object(le.jsx)(Be.a,{fontSize:"small"})]})})]})})]})},"123"),s=Object(r.useState)(null),u=Object(he.a)(s,2),d=u[0],j=u[1],p=Object(r.createRef)();Object(r.useEffect)((function(){if(p.current){var e=p.current.clientWidth;if(e>700)j(600);else j(e/1.2)}}),[]);return Object(le.jsx)(ne.a,{container:!0,justify:"center",ref:p,children:Object(le.jsx)(ne.a,{container:!0,direction:"column",alignItems:"center",children:Object(le.jsx)(ne.a,{item:!0,children:a?a.allPhotos.map((function(e,t){return e?0===t?i:Object(le.jsx)(le.Fragment,{children:d&&Object(le.jsx)(_e,{photoUrl:e,width:d})}):null})):null})})})};var Ke=function(){return Object(le.jsx)("div",{className:"App-wrapper",children:Object(le.jsxs)(o.a,{store:te,children:[Object(le.jsx)(Ce,{}),Object(le.jsx)(s.a,{children:Object(le.jsxs)(l.c,{children:[Object(le.jsx)(l.a,{path:"/advert/:advertId",children:Object(le.jsx)(Je,{})}),Object(le.jsxs)(l.a,{path:"/",children:[Object(le.jsx)(Le,{}),Object(le.jsx)(ze,{})]})]})})]})})},Ge=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,196)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};i.a.render(Object(le.jsx)(c.a.StrictMode,{children:Object(le.jsx)(Ke,{})}),document.getElementById("root")),Ge()},35:function(e,t,n){}},[[142,1,2]]]);
//# sourceMappingURL=main.0b4c4bc4.chunk.js.map