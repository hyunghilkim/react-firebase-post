(this.webpackJsonpnicolass_twitter=this.webpackJsonpnicolass_twitter||[]).push([[0],{50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(2),r=n.n(c),s=n(31),i=n.n(s),o=n(7),u=n(21),l=n(6),j=n(9),b=n.n(j),d=n(15),p=n(10),f=n(22),O=n(23);n(44),n(46),n(52);O.a.initializeApp({apiKey:"AIzaSyDHE2XvPhrr-kUL-zbfmTB_6gfOjyE9XBw",authDomain:"post-d753e.firebaseapp.com",databaseURL:"https://nwitter-e4ad7.firebaseio.com",projectId:"post-d753e",storageBucket:"post-d753e.appspot.com",messagingSenderId:"627612790833",appId:"1:627612790833:web:2356177f2b86ab2b656510"});var h=O.a,m=O.a.auth(),x=O.a.firestore(),v=O.a.storage();function g(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),i=Object(o.a)(s,2),u=i[0],l=i[1],j=Object(c.useState)(!0),p=Object(o.a)(j,2),f=p[0],O=p[1],h=Object(c.useState)(""),x=Object(o.a)(h,2),v=x[0],g=x[1],y=function(e){var t=e.target,n=t.name,a=t.value;"email"===n?r(a):"password"===n&&l(a)},w=function(){var e=Object(d.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!f){e.next=7;break}return e.next=5,m.createUserWithEmailAndPassword(n,u);case 5:e.next=9;break;case 7:return e.next=9,m.signInWithEmailAndPassword(n,u);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),g(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{children:[Object(a.jsxs)("form",{onSubmit:w,className:"container",children:[Object(a.jsx)("input",{name:"email",type:"email",placeholder:"Email",value:n,required:!0,onChange:y,className:"authInput"}),Object(a.jsx)("input",{name:"password",type:"password",placeholder:"Password",value:u,required:!0,onChange:y,className:"authInput"}),Object(a.jsx)("input",{type:"submit",value:f?"\ud68c\uc6d0\uac00\uc785":"\ub85c\uadf8\uc778",className:"authInput authSubmit"}),v&&Object(a.jsx)("span",{className:"authError",children:v})]}),Object(a.jsx)("span",{onClick:function(){O((function(e){return!e}))},className:"authSwitch",children:f?"\ub85c\uadf8\uc778":"\ud68c\uc6d0\uac00\uc785"})]})}function y(){var e=function(){var e=Object(d.a)(b.a.mark((function e(t){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?a=new h.auth.GoogleAuthProvider:"github"===n&&(a=new h.auth.GithubAuthProvider),e.next=4,m.signInWithPopup(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"authContainer",children:[Object(a.jsx)(p.a,{icon:f.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),Object(a.jsx)(g,{}),Object(a.jsxs)("div",{className:"authBtns",children:[Object(a.jsxs)("button",{onClick:e,name:"google",className:"authBtn",children:["\uad6c\uae00 \ub85c\uadf8\uc778 ",Object(a.jsx)(p.a,{icon:f.b})]}),Object(a.jsxs)("button",{onClick:e,name:"github",className:"authBtn",children:["\uae43\ud5c8\ube0c \ub85c\uadf8\uc778 ",Object(a.jsx)(p.a,{icon:f.a})]})]})]})}var w=n(33),N=n(54),S=n(18);function k(e){var t=e.userObj,n=Object(c.useState)(""),r=Object(o.a)(n,2),s=r[0],i=r[1],u=Object(c.useState)(""),l=Object(o.a)(u,2),j=l[0],f=l[1],O=function(){var e=Object(d.a)(b.a.mark((function e(n){var a,c,r,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a="",""===j){e.next=10;break}return c=v.ref().child("".concat(t.uid,"/").concat(Object(N.a)())),e.next=6,c.putString(j,"data_url");case 6:return r=e.sent,e.next=9,r.ref.getDownloadURL();case 9:a=e.sent;case 10:return o={text:s,createdAt:Date.now(),creatorId:t.uid,fileUrl:a},e.next=13,x.collection("nweets").add(o);case 13:i(""),f("");case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{children:Object(a.jsxs)("form",{onSubmit:O,className:"factoryForm",children:[Object(a.jsxs)("div",{className:"factoryInput__container",children:[Object(a.jsx)("input",{className:"factoryInput__input",value:s,onChange:function(e){var t=e.target.value;i(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),Object(a.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(a.jsxs)("label",{htmlFor:"attach-file",className:"factoryInput__label",children:[Object(a.jsx)("span",{children:"Add photos"}),Object(a.jsx)(p.a,{icon:S.b})]}),Object(a.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.readAsDataURL(t),n.onloadend=function(e){var t=e.currentTarget.result;f(t)}},style:{opacity:0}}),j&&Object(a.jsxs)("div",{className:"factoryForm__attachment",children:[Object(a.jsx)("img",{alt:"img",src:j,style:{backgroundImage:j}}),Object(a.jsxs)("div",{className:"factoryForm__clear",onClick:function(){f(null)},children:[Object(a.jsx)("span",{children:"Remove"}),Object(a.jsx)(p.a,{icon:S.c})]})]})]})})}function I(e){var t=e.postObj,n=e.isOwner,r=Object(c.useState)(!1),s=Object(o.a)(r,2),i=s[0],u=s[1],l=Object(c.useState)(t.text),j=Object(o.a)(l,2),f=j[0],O=j[1],h=function(){var e=Object(d.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("\uc815\ub9d0\ub85c \uc0ad\uc81c \ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){e.next=6;break}return e.next=4,x.doc("nweets/".concat(t.id)).delete();case 4:return e.next=6,v.refFromURL(t.fileUrl).delete();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){u((function(e){return!e}))},g=function(){var e=Object(d.a)(b.a.mark((function e(n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,x.doc("/nweets/".concat(t.id)).update({text:f});case 3:u(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{className:"nweet",children:i?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("form",{onSubmit:g,className:"container nweetEdit",children:[Object(a.jsx)("input",{onChange:function(e){var t=e.target.value;O(t)},type:"text",placeholder:"\uc218\uc815 \ud558\uc138\uc694",value:f,required:!0,autoFocus:!0,className:"formInput"}),Object(a.jsx)("input",{type:"submit",value:"\uc218\uc815\ud558\uae30",className:"formBtn"})]}),Object(a.jsx)("span",{onClick:m,className:"formBtn cancelBtn",children:"\ucde8\uc18c"})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h4",{children:t.text}),t.fileUrl&&Object(a.jsx)("img",{alt:"img",src:t.fileUrl}),n&&Object(a.jsxs)("div",{className:"nweet__actions",children:[Object(a.jsx)("span",{onClick:h,children:Object(a.jsx)(p.a,{icon:S.d})}),Object(a.jsx)("span",{onClick:m,children:Object(a.jsx)(p.a,{icon:S.a})})]})]})})}function F(e){var t=e.userObj,n=Object(c.useState)([]),r=Object(o.a)(n,2),s=r[0],i=r[1];return Object(c.useEffect)((function(){x.collection("nweets").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(w.a)({id:e.id},e.data())}));i(t)}))}),[]),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(k,{userObj:t}),Object(a.jsx)("div",{style:{marginTop:15},children:s.map((function(e,n){return Object(a.jsx)("div",{style:{marginTop:30},children:Object(a.jsx)(I,{postObj:e,isOwner:e.creatorId===t.uid},n)},n)}))})]})}function C(e){var t=e.refreshUser,n=e.userObj,r=Object(c.useState)(n.displayName),s=Object(o.a)(r,2),i=s[0],u=s[1],j=Object(l.f)(),p=function(){var e=Object(d.a)(b.a.mark((function e(a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),n.displayName===i){e.next=4;break}return e.next=4,n.updateProfile({displayName:i});case 4:t();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("form",{onSubmit:p,className:"profileForm",children:[Object(a.jsx)("input",{onChange:function(e){var t=e.target.value;u(t)},type:"text",placeholder:"\ud504\ub85c\ud544 \uba85",value:i,autoFocus:!0,className:"formInput"}),Object(a.jsx)("input",{type:"submit",value:"\uc218\uc815",className:"formBtn",style:{marginTop:10}})]}),Object(a.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){m.signOut(),j.push("/")},children:"\ub85c\uadf8\uc544\uc6c3"})]})}function _(e){var t=e.userObj;return Object(a.jsx)("nav",{children:Object(a.jsxs)("ul",{style:{display:"flex",justifyContent:"center",marginTop:50},children:[Object(a.jsx)("li",{children:Object(a.jsx)(u.b,{to:"/",style:{marginRight:10},children:Object(a.jsx)(p.a,{icon:f.c,color:"#04AAFF",size:"2x"})})}),Object(a.jsx)("li",{children:Object(a.jsxs)(u.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(a.jsx)(p.a,{icon:S.e,color:"#04AAFF",size:"2x"}),Object(a.jsx)("span",{style:{marginTop:10},children:t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile"})]})})]})})}function A(e){var t=e.refreshUser,n=e.isLoggedIn,c=e.userObj;return Object(a.jsxs)(u.a,{children:[n&&Object(a.jsx)(_,{userObj:c}),Object(a.jsx)(l.c,{children:Object(a.jsx)(a.Fragment,{children:n?Object(a.jsxs)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:[Object(a.jsx)(l.a,{exact:!0,path:"/",children:Object(a.jsx)(F,{userObj:c})}),Object(a.jsx)(l.a,{exact:!0,path:"/profile",children:Object(a.jsx)(C,{userObj:c,refreshUser:t})})]}):Object(a.jsx)(l.a,{exact:!0,path:"/",children:Object(a.jsx)(y,{})})})})]})}var U=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(!1),i=Object(o.a)(s,2),u=i[0],l=i[1],j=Object(c.useState)(null),b=Object(o.a)(j,2),d=b[0],p=b[1];return Object(c.useEffect)((function(){m.onAuthStateChanged((function(e){e?(l(!0),p({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})):l(!1),r(!0)}))}),[]),Object(a.jsx)(a.Fragment,{children:n?Object(a.jsx)(A,{refreshUser:function(){var e=m.currentUser;p({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:u,userObj:d}):"\ucd08\uae30\ud654...."})};n(50);i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(U,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.c627ebe2.chunk.js.map