(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(2),r=n.n(c),s=n(31),i=n.n(s),o=n(9),u=n(21),l=n(6),j=n(7),d=n.n(j),b=n(14),p=n(11),f=n(22),O=n(23);n(44),n(46),n(52);O.a.initializeApp({apiKey:"AIzaSyDEv4-4_9bKxZ5444yHPWvaVdHXvmrmOlU",authDomain:"nwitter-c16f4.firebaseapp.com",projectId:"nwitter-c16f4",storageBucket:"nwitter-c16f4.appspot.com",messagingSenderId:"662397264079",appId:"1:662397264079:web:5c5bf351bd0096e5add7ba"});var h=O.a,m=O.a.auth(),x=O.a.firestore(),g=O.a.storage(),v=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),i=Object(o.a)(s,2),u=i[0],l=i[1],j=Object(c.useState)(!0),p=Object(o.a)(j,2),f=p[0],O=p[1],h=Object(c.useState)(""),x=Object(o.a)(h,2),g=x[0],v=x[1],y=function(e){var t=e.target,n=t.name,a=t.value;"email"===n?r(a):"password"===n&&l(a)},w=function(){var e=Object(b.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!f){e.next=8;break}return e.next=5,m.createUserWithEmailAndPassword(n,u);case 5:a=e.sent,e.next=11;break;case 8:return e.next=10,m.signInWithEmailAndPassword(n,u);case 10:a=e.sent;case 11:console.log(a),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0),v(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("form",{onSubmit:w,className:"container",children:[Object(a.jsx)("input",{type:"email",name:"email",placeholder:"Email",required:!0,value:n,onChange:y,className:"authInput"}),Object(a.jsx)("input",{type:"password",name:"password",placeholder:"Password",required:!0,value:u,onChange:y,className:"authInput"}),Object(a.jsx)("input",{type:"submit",className:"authInput authSubmit",value:f?"Create Account":"Log In",onSubmit:w}),g&&Object(a.jsx)("span",{className:"authError",children:g})]}),Object(a.jsxs)("span",{onClick:function(){return O((function(e){return!e}))},className:"authSwitch",children:[f?"Sign In.":"Create Account"," "]})]})},y=function(){var e=function(){var e=Object(b.a)(d.a.mark((function e(t){var n,a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?a=new h.auth.GoogleAuthProvider:"github"===n&&(a=new h.auth.GithubAuthProvider),e.next=4,m.signInWithPopup(a);case 4:c=e.sent,console.log(c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"authContainer",children:[Object(a.jsx)(p.a,{icon:f.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),Object(a.jsx)(v,{}),Object(a.jsxs)("div",{className:"authBtns",children:[Object(a.jsxs)("button",{onClick:e,name:"google",className:"authBtn",children:["Continue with Google ",Object(a.jsx)(p.a,{icon:f.b})]}),Object(a.jsxs)("button",{onClick:e,name:"github",className:"authBtn",children:["Continue with Github ",Object(a.jsx)(p.a,{icon:f.a})]})]})]})},w=n(33),N=n(18),S=function(e){var t=e.nweetObj,n=e.isOwner,r=Object(c.useState)(!1),s=Object(o.a)(r,2),i=s[0],u=s[1],l=Object(c.useState)(t.text),j=Object(o.a)(l,2),f=j[0],O=j[1],h=function(){var e=Object(b.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this nweet?")){e.next=7;break}return console.log(t.id),e.next=5,x.doc("nweets/".concat(t.id)).delete();case 5:return e.next=7,g.refFromURL(t.attachmentUrl).delete();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){return u((function(e){return!e}))},v=function(){var e=Object(b.a)(d.a.mark((function e(n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),console.log(t,f),e.next=4,x.doc("nweets/".concat(t.id)).update({text:f});case 4:u(!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{className:"nweet",children:i?Object(a.jsx)(a.Fragment,{children:n&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("form",{onSubmit:v,className:"container nweetEdit",children:[Object(a.jsx)("input",{onChange:function(e){var t=e.target.value;O(t)},type:"text",placeholder:"Edit your nweet",value:f,required:!0,autoFocus:!0,className:"formInput"}),Object(a.jsx)("input",{type:"submit",value:"Update Nweet",className:"formBtn"})]}),Object(a.jsx)("span",{onClick:m,className:"formBtn cancelBtn",children:"Cancel"})]})}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h4",{children:t.text}),t.attachmentUrl&&Object(a.jsx)("img",{src:t.attachmentUrl,alt:""}),n&&Object(a.jsxs)("div",{class:"nweet__actions",children:[Object(a.jsx)("span",{onClick:h,children:Object(a.jsx)(p.a,{icon:N.d})}),Object(a.jsx)("span",{onClick:m,children:Object(a.jsx)(p.a,{icon:N.a})})]})]})})},I=n(54),k=function(e){var t=e.userObj,n=Object(c.useState)(""),r=Object(o.a)(n,2),s=r[0],i=r[1],u=Object(c.useState)(""),l=Object(o.a)(u,2),j=l[0],f=l[1],O=function(){var e=Object(b.a)(d.a.mark((function e(n){var a,c,r,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a="",""===j){e.next=10;break}return c=g.ref().child("".concat(t.uid,"/").concat(Object(I.a)())),e.next=6,c.putString(j,"data_url");case 6:return r=e.sent,e.next=9,r.ref.getDownloadURL();case 9:a=e.sent;case 10:return o={text:s,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:a},e.next=13,x.collection("nweets").add(o);case 13:i(""),f("");case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("form",{onSubmit:O,className:"factoryForm",children:[Object(a.jsxs)("div",{className:"factoryInput__container",children:[Object(a.jsx)("input",{className:"factoryInput__input",value:s,onChange:function(e){var t=e.target.value;i(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),Object(a.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(a.jsxs)("label",{for:"attach-file",className:"factoryInput__label",children:[Object(a.jsx)("span",{children:"Add photos"}),Object(a.jsx)(p.a,{icon:N.b})]}),Object(a.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){console.log(e.target.files);var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;f(t)},n.readAsDataURL(t)},style:{opacity:0}}),j&&Object(a.jsxs)("div",{className:"factoryForm__attachment",children:[Object(a.jsx)("img",{src:j,style:{backgroundImage:j},alt:""}),Object(a.jsxs)("div",{className:"factoryForm__clear",onClick:function(e){f(null)},children:[Object(a.jsx)("span",{children:"Remove"}),Object(a.jsx)(p.a,{icon:N.c})]})]})]})},C=function(e){var t=e.userObj,n=Object(c.useState)([]),r=Object(o.a)(n,2),s=r[0],i=r[1];return Object(c.useEffect)((function(){x.collection("nweets").onSnapshot((function(e){console.log(e.docs);var t=e.docs.map((function(e){return Object(w.a)({id:e.id},e.data())}));i(t)}))}),[]),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(k,{userObj:t}),Object(a.jsx)("div",{style:{marginTop:30},children:s.map((function(e){return Object(a.jsx)(S,{nweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},A=function(e){var t=e.userObj,n=e.refreshUser,r=Object(l.f)(),s=Object(c.useState)(t.displayName),i=Object(o.a)(s,2),u=i[0],j=i[1],p=function(){var e=Object(b.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.collection("nweets").where("creatorId","==",t.uid).orderBy("createdAt").get();case 2:n=e.sent,console.log(n.docs.map((function(e){return e.data()})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){p()}),[]);var f=function(){var e=Object(b.a)(d.a.mark((function e(a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),t.displayName===u){e.next=6;break}return console.log(t.updateProfile),e.next=5,t.updateProfile({displayName:u});case 5:n();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("form",{onSubmit:f,className:"profileForm",children:[Object(a.jsx)("input",{onChange:function(e){var t=e.target.value;j(t)},type:"text",placeholder:"Display name",autoFocus:!0,className:"formInput"}),Object(a.jsx)("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})]}),Object(a.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){m.signOut(),r.push("/")},children:"Log Out"})]})},F=function(e){var t=e.userObj;return Object(a.jsx)("nav",{children:Object(a.jsxs)("ul",{style:{display:"flex",justifyContent:"center",marginTop:50},children:[Object(a.jsx)("li",{children:Object(a.jsx)(u.b,{to:"/",style:{marginRight:10},children:Object(a.jsx)(p.a,{icon:f.c,color:"#04AAFF",size:"2x"})})}),Object(a.jsx)("li",{children:Object(a.jsxs)(u.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(a.jsx)(p.a,{icon:N.e,color:"#04AAFF",size:"2x"}),Object(a.jsx)("span",{style:{marginTop:10},children:t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile"})]})})]})})},P=function(e){var t=e.isLoggedIn,n=e.userObj,c=e.refreshUser;return console.log(n),Object(a.jsxs)(u.a,{children:[t&&Object(a.jsx)(F,{userObj:n}),Object(a.jsx)(l.c,{children:t?Object(a.jsxs)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:[Object(a.jsx)(l.a,{exact:!0,path:"/",children:Object(a.jsx)(C,{userObj:n})}),Object(a.jsx)(l.a,{exact:!0,path:"/profile",children:Object(a.jsx)(A,{userObj:n,refreshUser:c})})]}):Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(l.a,{exact:!0,path:"/",children:Object(a.jsx)(y,{})})})})]})};var U=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(null),i=Object(o.a)(s,2),u=i[0],l=i[1];return Object(c.useEffect)((function(){m.onAuthStateChanged((function(e){console.log(e),l(e?{displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}:null),r(!0)}))}),[]),Object(a.jsx)(a.Fragment,{children:n?Object(a.jsx)(P,{isLoggedIn:Boolean(u),userObj:u,refreshUser:function(){var e=m.currentUser;l({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})}}):"Initializing...."})};n(50);i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(U,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.198e69d8.chunk.js.map