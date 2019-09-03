(window.webpackJsonpkatachi=window.webpackJsonpkatachi||[]).push([[0],{156:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(81),i=t.n(c),o=t(65),u=t.n(o),l=t(82),s=t(2),b=t(3),f=t(91),d=t(1),m=t(93),O=t(85),j=t(41),v=t(57);function g(){var e=Object(s.a)(['\n  body {\n    margin: 0;\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",\n      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",\n      "Helvetica Neue", sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  html,\n  body,\n  #root {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n  }\n\n  html {\n    position: fixed;\n  }\n']);return g=function(){return e},e}j.b.add(v.b,v.a,v.c);var h={accent:"tomato",inactive:"#aaa"},p=Object(d.c)(g()),S=m.a,k=function(){return Object(r.useContext)(d.b)},w=function(e){var n=e.children;return a.a.createElement(O.a,{theme:h},n)},C=function(){return a.a.createElement(d.a,{styles:p})};function y(){var e=Object(s.a)(["\n            width: 3em;\n            height: 3em;\n            position: absolute;\n            top: 0;\n            right: 0;\n            cursor: pointer;\n            user-select: none;\n            text-align: center;\n            line-height: 3em;\n            color: #888;\n            font-size: 20px;\n          "]);return y=function(){return e},e}function E(){var e=Object(s.a)(["\n            width: 3em;\n            height: 3em;\n            position: absolute;\n            top: 0;\n            left: 0;\n            cursor: pointer;\n            user-select: none;\n            text-align: center;\n            line-height: 3em;\n            color: #888;\n            font-size: 20px;\n          "]);return E=function(){return e},e}function x(){var e=Object(s.a)(["\n        font-size: 1.2rem;\n        padding: 0 1em;\n        color: ",";\n        height: 3em;\n        line-height: 3em;\n        font-weight: bold;\n        text-align: center;\n      "]);return x=function(){return e},e}var z,N=function(e){var n=e.className,t=e.hidden,r=e.closable,a=e.onClose,c=e.backButtonVisible,i=e.onBackButtonClick,o=k();return t?null:Object(d.d)("div",{css:Object(d.c)(x(),o.accent),className:n},c&&Object(d.d)("div",{css:Object(d.c)(E()),onClick:i},"<"),"katachi",r&&Object(d.d)("div",{css:Object(d.c)(y()),onClick:a},"\xd7"))},T=t(48);function L(){var e=Object(s.a)(["\n  display: block;\n  margin: 0 auto 0.2em;\n  font-size: 1.5rem;\n"]);return L=function(){return e},e}function H(){var e=Object(s.a)(["\n  flex: auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  text-align: center;\n  font-size: 0.8rem;\n  font-weight: bold;\n  color: ",";\n  flex: 1 1 0;\n  user-select: none;\n"]);return H=function(){return e},e}function M(){var e=Object(s.a)(["\n  display: flex;\n  align-items: stretch;\n  height: 4em;\n"]);return M=function(){return e},e}!function(e){e[e.Training=0]="Training",e[e.Report=1]="Report",e[e.Setting=2]="Setting"}(z||(z={}));var R=S.div(M()),B=S.div(H(),function(e){var n=e.active,t=e.theme;return n?t.accent:t.inactive}),U=S(T.a)(L()),F=function(e){var n=e.className,t=e.selected,r=e.onSelect;return a.a.createElement(R,{className:n},a.a.createElement(B,{active:t===z.Training,onClick:function(){return r&&r(z.Training)}},a.a.createElement("div",null,a.a.createElement(U,{icon:"shapes"}),"\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0")),a.a.createElement(B,{active:t===z.Report,onClick:function(){return r&&r(z.Report)}},a.a.createElement("div",null,a.a.createElement(U,{icon:"chart-line"}),"\u30ec\u30dd\u30fc\u30c8")),a.a.createElement(B,{active:t===z.Setting,onClick:function(){return r&&r(z.Setting)}},a.a.createElement("div",null,a.a.createElement(U,{icon:"sliders-h"}),"\u8a2d\u5b9a")))};function I(){var e=Object(s.a)(["\n          display: ",";\n        "]);return I=function(){return e},e}function V(){var e=Object(s.a)(["\n          position: relative;\n          flex: auto;\n          overflow: hidden;\n        "]);return V=function(){return e},e}function W(){var e=Object(s.a)(["\n        position: relative;\n        display: flex;\n        flex-direction: column;\n      "]);return W=function(){return e},e}var A=function(e){var n=e.className,t=e.children,r=e.currentMode,a=e.navHidden,c=e.onModeChange,i=e.headerClosable,o=e.onHeaderClose,u=e.headerBackButtonVisible,l=e.onHeaderBackButtonClick;return Object(d.d)("div",{className:n,css:Object(d.c)(W())},Object(d.d)("header",null,Object(d.d)(N,{closable:i,onClose:o,backButtonVisible:u,onBackButtonClick:l})),Object(d.d)("main",{role:"main",css:Object(d.c)(V())},t),Object(d.d)("nav",{css:Object(d.c)(I(),a?"none":"block")},Object(d.d)(F,{selected:r,onSelect:c})))};function D(){var e=Object(s.a)(["\n  display: inline-block;\n  width: 100%;\n  font-size: 14px;\n  border-radius: 0.5em;\n  border: none;\n  outline: none;\n  background-color: ",";\n  color: #fff;\n  padding: 1em 3em;\n  box-shadow: 0 0.1em 0.5em #00000030;\n  cursor: pointer;\n  user-select: none;\n  transition: all ease 0.1s;\n\n  &:hover {\n    filter: brightness(120%);\n  }\n\n  &:active {\n    filter: brightness(100%);\n    transform: translateY(1px);\n  }\n"]);return D=function(){return e},e}var P=S.button(D(),function(e){return e.theme.accent}),X=function(e){var n=e.className,t=e.children,r=e.onClick;return a.a.createElement(P,{className:n,onClick:r},t?t.toUpperCase():"")};function Y(){var e=Object(s.a)(["\n        overflow: auto;\n        -webkit-overflow-scrolling: touch;\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        padding: 1em;\n      "]);return Y=function(){return e},e}var G,q=function(e){var n=e.className,t=e.onSignIn;return Object(d.d)("div",{className:n,css:Object(d.c)(Y())},Object(d.d)("h1",null,'\u5f62\u3092\u6b63\u78ba\u306b\u89b3\u308b "\u773c" \u3092\u990a\u3046\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0'),Object(d.d)(X,{onClick:t},"Twitter\u3067\u30ed\u30b0\u30a4\u30f3"))},J=function(e,n,t){return e>t?t:e<n?n:e},K=function(e,n){return e.length===n.length&&e.every(function(e,t){return e===n[t]})},$=t(24),Q=t(44),Z=(t(107),t(109),t(87)),_=t(92),ee=t(42),ne=t(35),te=t(88),re=t(160),ae=Q.initializeApp({apiKey:"AIzaSyBkXkX7PIAhCXvnTau7lzrb1AOWbJXoa8I",authDomain:"katachi-25f71.firebaseapp.com",databaseURL:"https://katachi-25f71.firebaseio.com",projectId:"katachi-25f71",storageBucket:"katachi-25f71.appspot.com",messagingSenderId:"1057352886357",appId:"1:1057352886357:web:5e0e73ee245b501c"}),ce=new Q.auth.TwitterAuthProvider,ie=Q.auth(ae),oe=Q.database(ae);!function(e){e[e.Loading=0]="Loading",e[e.SignedOut=1]="SignedOut"}(G||(G={}));var ue,le,se,be,fe,de=t(9);(le=ue||(ue={})).Legend="legend",le.Excellent="excellent",le.Good="good",le.Bad="bad",function(e){e.Easy="easy",e.Normal="normal",e.Hard="hard",e.Ultimate="ultimate"}(se||(se={})),function(e){e.VerticalLine1="verticalLine1",e.VerticalLine2="verticalLine2",e.HorizontalLine1="horizontailLine1",e.HorizontalLine2="horizontalLine2",e.Square="square"}(be||(be={}));var me,Oe,je,ve,ge,he={title:"\u5782\u76f4\u306a\u68d2\u306e\u6bd4\u7387 1\u70b9",paramsSize:3,stateSize:1,duration:(fe={},Object(de.a)(fe,se.Easy,1/0),Object(de.a)(fe,se.Normal,15e3),Object(de.a)(fe,se.Hard,4e3),Object(de.a)(fe,se.Ultimate,1e3),fe),validateParams:function(e){var n=Object(b.a)(e,3),t=n[0],r=n[1],a=n[2];return t>.3&&r>.3&&Math.abs(t-r)>=.2&&a>.1&&a<.9},judgeScore:function(e,n){if(0===e[0])return 0;var t=.3-.1*e[0];return n?1-Math.min(t,Math.abs(e[2]-n[0]))/t:0}},pe={title:"\u5782\u76f4\u306a\u68d2\u306e\u6bd4\u7387 2\u70b9",paramsSize:4,stateSize:2,duration:(me={},Object(de.a)(me,se.Easy,1/0),Object(de.a)(me,se.Normal,3e4),Object(de.a)(me,se.Hard,1e4),Object(de.a)(me,se.Ultimate,3e3),me),validateParams:function(e){var n=Object(b.a)(e,4),t=n[0],r=n[1],a=n[2],c=n[3];return t>.3&&r>.3&&Math.abs(t-r)>=.2&&a>.1&&a<.9&&c>.1&&c<.9&&c-a>.3},judgeScore:function(e,n){if(0===e[0])return 0;var t=.3-.1*e[0];return n?n.slice(0,2).sort().map(function(n,r){return 1-Math.min(t,Math.abs(e[2+r]-n))/t}).reduce(function(e,n){return e+n},0)/n.length:0}},Se={title:"\u6c34\u5e73\u306a\u68d2\u306e\u6bd4\u7387 1\u70b9",paramsSize:3,stateSize:1,duration:(Oe={},Object(de.a)(Oe,se.Easy,1/0),Object(de.a)(Oe,se.Normal,15e3),Object(de.a)(Oe,se.Hard,4e3),Object(de.a)(Oe,se.Ultimate,1e3),Oe),validateParams:function(e){var n=Object(b.a)(e,3),t=n[0],r=n[1],a=n[2];return t>.3&&r>.3&&Math.abs(t-r)>=.2&&a>.1&&a<.9},judgeScore:function(e,n){if(0===e[0])return 0;var t=.3-.1*e[0];return n?1-Math.min(t,Math.abs(e[2]-n[0]))/t:0}},ke={title:"\u6c34\u5e73\u306a\u68d2\u306e\u6bd4\u7387 2\u70b9",paramsSize:4,stateSize:2,duration:(je={},Object(de.a)(je,se.Easy,1/0),Object(de.a)(je,se.Normal,3e4),Object(de.a)(je,se.Hard,1e4),Object(de.a)(je,se.Ultimate,3e3),je),validateParams:function(e){var n=Object(b.a)(e,4),t=n[0],r=n[1],a=n[2],c=n[3];return t>.3&&r>.3&&Math.abs(t-r)>=.2&&a>.1&&a<.9&&c>.1&&c<.9&&c-a>.3},judgeScore:function(e,n){if(0===e[0])return 0;var t=.3-.1*e[0];return n?n.slice(0,2).sort().map(function(n,r){return 1-Math.min(t,Math.abs(e[2+r]-n))/t}).reduce(function(e,n){return e+n},0)/n.length:0}},we={title:"\u9577\u65b9\u5f62\u3092\u6b63\u65b9\u5f62\u306b",paramsSize:2,stateSize:1,duration:(ve={},Object(de.a)(ve,se.Easy,1/0),Object(de.a)(ve,se.Normal,15e3),Object(de.a)(ve,se.Hard,4e3),Object(de.a)(ve,se.Ultimate,1e3),ve),validateParams:function(e){var n=Object(b.a)(e,2),t=n[0],r=n[1];return t>.2&&r>.2&&r-t>.3},judgeScore:function(e,n){if(0===e[1])return 0;var t=.2-.1*e[1];return n?1-Math.min(t,Math.abs(1-e[0]/e[1]-n[0]))/t:0}},Ce=(ge={},Object(de.a)(ge,be.VerticalLine1,he),Object(de.a)(ge,be.VerticalLine2,pe),Object(de.a)(ge,be.HorizontalLine1,Se),Object(de.a)(ge,be.HorizontalLine2,ke),Object(de.a)(ge,be.Square,we),ge),ye=function(e){return Math.round(100*e)},Ee=function(e){for(var n=Ce[e],t=0;t<100;t++){var r=new Array(n.paramsSize).fill(0).map(function(){return Math.random()}),a=n.validateParams(r);if(Array.isArray(a))return a;if(a)return r}},xe=function(e,n,t){return Ce[e].judgeScore(n,t)},ze=function(e){return Ce[e].title};function Ne(){var e=Object(s.a)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  max-width: 200px;\n  max-height: 200px;\n  width: calc(50vw - 0.6em);\n  height: calc(50vw - 0.6em);\n  vertical-align: middle;\n  user-select: none;\n  border-radius: 0.5em;\n  box-shadow: 0 0.1em 0.5em #00000030;\n  cursor: pointer;\n  transition: all ease 0.1s;\n  background-color: ",";\n  color: #fff;\n  box-sizing: border-box;\n  margin: 0.3em;\n\n  &:hover {\n    filter: brightness(105%);\n  }\n\n  &:active {\n    filter: brightness(100%);\n    transform: translateY(1px);\n  }\n"]);return Ne=function(){return e},e}var Te=S.div(Ne(),function(e){return e.bgcolor||"#bbb"}),Le=function(e){var n=e.className,t=e.onSelect,a=Object(r.useCallback)(function(e){return t?function(){return t(e)}:void 0},[t]);return Object(d.d)("div",{className:n},Object.keys(Ce).map(function(e){return Object(d.d)(Te,{key:e,onClick:a(e)},ze(e))}))};function He(){var e=Object(s.a)(["\n        overflow: auto;\n        -webkit-overflow-scrolling: touch;\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n      "]);return He=function(){return e},e}var Me=function(e){var n=e.className,t=e.onSelect;return Object(d.d)("div",{className:n,css:Object(d.c)(He())},Object(d.d)(Le,{onSelect:t}))};function Re(){var e=Object(s.a)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  max-width: 200px;\n  max-height: 200px;\n  width: calc(50vw - 0.6em);\n  height: calc(50vw - 0.6em);\n  vertical-align: middle;\n  user-select: none;\n  border-radius: 0.5em;\n  box-shadow: 0 0.1em 0.5em #00000030;\n  cursor: pointer;\n  transition: all ease 0.1s;\n  background-color: ",";\n  color: #fff;\n  box-sizing: border-box;\n  margin: 0.3em;\n\n  &:hover {\n    filter: brightness(105%);\n  }\n\n  &:active {\n    filter: brightness(100%);\n    transform: translateY(1px);\n  }\n"]);return Re=function(){return e},e}var Be=[[se.Easy,"Easy"],[se.Normal,"Normal"],[se.Hard,"Hard"],[se.Ultimate,"Ultimate"]],Ue=S.div(Re(),function(e){return e.bgcolor||"#bbb"}),Fe=function(e){var n=e.className,t=e.onSelect,a=Object(r.useCallback)(function(e){return t?function(){return t(e)}:void 0},[t]);return Object(d.d)("div",{className:n},Be.map(function(e){var n=Object(b.a)(e,2),t=n[0],r=n[1];return Object(d.d)(Ue,{key:t,onClick:a(t)},r)}))};function Ie(){var e=Object(s.a)(["\n        overflow: auto;\n        -webkit-overflow-scrolling: touch;\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n      "]);return Ie=function(){return e},e}var Ve,We=function(e){var n=e.className,t=e.onSelect;return Object(d.d)("div",{className:n,css:Object(d.c)(Ie())},Object(d.d)(Fe,{onSelect:t}))},Ae=t(89),De=t(15),Pe=t(161),Xe=t(159),Ye=t(162),Ge=t(163),qe=t(164),Je=t(166),Ke=t(167),$e=t(168),Qe=t(169),Ze=t(158),_e=t(165),en=function(e){var n=[e.onUpdate,e.disableOperation,e.calcStateFromPos,e.params,e.useX],t=e.wrapperRef||Object(r.useRef)(null),a=Object(Pe.a)(function(e,n,r){return Object(Ze.a)(n.pipe(Object(ne.a)(function(e){return Object(b.a)(e,4)[3]}),Object(Xe.a)(K),Object(Ye.a)([])),e.pipe(Object(Ge.a)(n,r),Object(qe.a)(function(e){var n=Object(b.a)(e,2);return!Object(b.a)(n[1],2)[1]}),Object(ne.a)(function(e){var n=Object(b.a)(e,3),r=Object(b.a)(n[0],2),a=r[0],c=r[1],i=Object(b.a)(n[1],5),o=i[2],u=i[4],l=n[2];return[a.evt instanceof TouchEvent?u?a.evt.targetTouches[0].pageX:a.evt.targetTouches[0].pageY:u?a.evt.pageX:a.evt.pageY,t.current?u?t.current.getBoundingClientRect().left:t.current.getBoundingClientRect().top:0,c,l,o]}),Object(ne.a)(function(e){var n=Object(b.a)(e,5),t=n[0],r=n[1],a=n[2],c=n[3],i=n[4];return[J(i(t-r),0,1),r,a,c]}),Object(te.a)(function(e){var t=Object(b.a)(e,4),a=t[0],c=t[1],i=t[2],o=t[3];return Object(Ze.a)(Object(_e.a)(document,"mousemove"),Object(_e.a)(document,"touchmove")).pipe(Object(Je.a)(Object(Ze.a)(Object(Ze.a)(Object(_e.a)(document,"mouseup"),Object(_e.a)(document,"touchend")).pipe(Object(Ge.a)(n,r),Object(Ke.a)(function(e){var n=Object(b.a)(e,3),t=Object(b.a)(n[1],2),r=t[0],a=t[1],c=n[2];r&&!a&&r(c)})),n.pipe(Object($e.a)(1),Object(ne.a)(function(e){return Object(b.a)(e,2)[1]}),Object(Xe.a)(),Object(qe.a)(function(e){return!!e})),n.pipe(Object($e.a)(1),Object(ne.a)(function(e){return Object(b.a)(e,4)[3]}),Object(Xe.a)(K)))),Object(Ge.a)(n,r),Object(ne.a)(function(e){var n=Object(b.a)(e,3),t=n[0],r=Object(b.a)(n[1],5),a=r[2],i=r[4],o=n[2];return[J(a((t instanceof TouchEvent?i?t.targetTouches[0].pageX:t.targetTouches[0].pageY:i?t.pageX:t.pageY)-c),0,1),o]}),Object(Qe.a)([a,o]),Object(ne.a)(function(e){var n=Object(b.a)(e,2),t=n[0],r=n[1];return[].concat(Object($.a)(r.slice(0,i)),[t],Object($.a)(r.slice(i+1)))}))})))},e.firstState||[],n),c=Object(b.a)(a,2);return[c[0],c[1],t]},nn=function(e,n){return 200*e*n};!function(e){e[e.Horizontal=0]="Horizontal",e[e.Vertical=1]="Vertical"}(Ve||(Ve={}));var tn,rn=function(e){var n=e.x,t=e.y,r=e.length,c=e.direction,i=e.stroke,o=e.strokeWidth,u=e.whiskerSize;return a.a.createElement(a.a.Fragment,null,a.a.createElement(De.Line,{points:c===Ve.Horizontal?[n,t-u/2,n,t+u/2]:[n-u/2,t,n+u/2,t],stroke:i,strokeWidth:o}),a.a.createElement(De.Line,{points:c===Ve.Horizontal?[n+r,t-u/2,n+r,t+u/2]:[n-u/2,t+r,n+u/2,t+r],stroke:i,strokeWidth:o}),a.a.createElement(De.Line,{points:c===Ve.Horizontal?[n,t,n+r,t]:[n,t,n,t+r],stroke:i,strokeWidth:o}))};!function(e){e[e.Vertical=0]="Vertical",e[e.Horizontal=1]="Horizontal"}(tn||(tn={}));var an,cn=function(e){var n=e.longerLength,t=e.lineLength,r=e.x,c=e.y,i=e.ratio,o=e.answerRatio,u=e.onMouseDown,l=e.onTouchStart,s=e.direction,b=e.pointCount;if(0===n||0===t)return null;var f=function(e){return u?function(n){return u(n,e)}:void 0},d=function(e){return l?function(n){return l(n,e)}:void 0},m=i?i.length>=b?1===i.length?0:null:i.length:0,O=s===tn.Horizontal?0:n-t,j=function(e){return s===tn.Horizontal?t*e:n-t*(1-e)};return a.a.createElement(De.Layer,{x:r,y:c,rotation:s===tn.Horizontal?-90:0},a.a.createElement(rn,{x:0,y:O,length:t,stroke:"#000",strokeWidth:3,whiskerSize:40}),i&&i.map(function(e,n){return a.a.createElement(De.Line,{key:n,points:[-20,j(e),20,j(e)],strokeWidth:3,stroke:"#000"})}),o&&o.map(function(e,n){return a.a.createElement(De.Line,{key:n,points:[-20,j(e),20,j(e)],strokeWidth:3,stroke:"#f00"})}),a.a.createElement(De.Line,{points:[0,-30,0,n+30],strokeWidth:200,onMouseDown:function(e){return u&&null!==m?u(e,m):void 0},onTouchStart:function(e){return l&&null!==m?l(e,m):void 0},stroke:"transparent"}),i&&i.map(function(e,n){return a.a.createElement(De.Line,{key:n,points:[-100,j(e),100,j(e)],strokeWidth:30,onMouseDown:f(n),onTouchStart:d(n),stroke:"transparent"})}))};!function(e){e[e.Vertical=0]="Vertical",e[e.Horizontal=1]="Horizontal"}(an||(an={}));var on,un=function(e){var n=e.className,t=e.params,c=e.state,i=e.isAnswerShown,o=e.screenSize,u=e.scaleCorrection,l=void 0===u?1:u,s=e.disableOperation,f=e.onUpdate,d=e.pointCount,m=e.direction,O=nn(t[0],l),j=nn(t[1],l),v=Math.max(O,j),g=t.slice(2),h=Object(r.useCallback)(function(e){return m===an.Horizontal?(e-(o-v)/2)/O:(e-((o-v)/2+(v-O)))/O},[O,v,o,m]),p=en({firstState:c,onUpdate:f,disableOperation:s,calcStateFromPos:h,params:t,useX:m===an.Horizontal}),S=Object(b.a)(p,3),k=S[0],w=S[1],C=S[2],y=o/3*2,E=o/3,x=(o-v)/2;return a.a.createElement("div",{ref:C,className:n},a.a.createElement(De.Stage,{width:o,height:o},a.a.createElement(De.Layer,null,a.a.createElement(De.Rect,{stroke:"#eee",width:o,height:o})),a.a.createElement(cn,{x:m===an.Horizontal?x:E,y:m===an.Horizontal?E:x,lineLength:j,longerLength:v,ratio:g,direction:m,pointCount:d}),a.a.createElement(cn,{x:m===an.Horizontal?x:y,y:m===an.Horizontal?y:x,lineLength:O,longerLength:v,ratio:w,answerRatio:i?g:void 0,onMouseDown:function(e,n){return k([e,n])},onTouchStart:function(e,n){return k([e,n])},direction:m,pointCount:d})))},ln=function(e,n){return 400*e*n},sn=function(e,n){return(n-e)/2},bn=function(e){var n=e.className,t=e.params,c=e.state,i=e.isAnswerShown,o=e.screenSize,u=e.scaleCorrection,l=void 0===u?1:u,s=e.disableOperation,f=e.onUpdate,d=ln(t[0],l),m=ln(t[1],l),O=function(e,n){return(n-e)/2}(d,o),j=sn(m,o),v=function(e,n,t){return sn(n,t)+n-e}(d,m,o),g=Object(r.useCallback)(function(e){return(e-j)/m},[m,j]),h=en({firstState:c,onUpdate:f,disableOperation:s,calcStateFromPos:g,params:t}),p=Object(b.a)(h,3),S=p[0],k=p[1],w=p[2];return a.a.createElement("div",{className:n,ref:w},a.a.createElement(De.Stage,{width:o,height:o,onMouseDown:function(e){return S([e,0])},onTouchStart:function(e){return S([e,0])}},a.a.createElement(De.Layer,null,a.a.createElement(De.Rect,{stroke:"#eee",width:o,height:o}),a.a.createElement(De.Rect,{x:O,y:j,width:d,height:m,strokeWidth:3,stroke:"#000"}),!!k&&!!k[0]&&a.a.createElement(De.Line,{points:[O,j+m*k[0],O+d,j+m*k[0]],stroke:"#000",strokeWidth:3}),i&&a.a.createElement(De.Line,{points:[O,v,O+d,v],stroke:"#f00",strokeWidth:3}))))},fn=function(e){switch(e.type){case be.VerticalLine1:return a.a.createElement(un,Object.assign({},e,{pointCount:1,direction:an.Vertical}));case be.VerticalLine2:return a.a.createElement(un,Object.assign({},e,{pointCount:2,direction:an.Vertical}));case be.HorizontalLine1:return a.a.createElement(un,Object.assign({},e,{pointCount:1,direction:an.Horizontal}));case be.HorizontalLine2:return a.a.createElement(un,Object.assign({},e,{pointCount:2,direction:an.Horizontal}));case be.Square:return a.a.createElement(bn,e)}return null};function dn(){var e=Object(s.a)(["\n  font-size: 4rem;\n  width: 2em;\n  padding: 0.2em 0.4em;\n  display: inline-block;\n  text-align: center;\n"]);return dn=function(){return e},e}function mn(){var e=Object(s.a)(["\n  width: ","%;\n  height: 3px;\n  background-color: ",";\n"]);return mn=function(){return e},e}function On(){var e=Object(s.a)(["\n  width: 100%;\n"]);return On=function(){return e},e}!function(e){e[e.Bar=0]="Bar",e[e.Text=1]="Text"}(on||(on={}));var jn=S.div(On()),vn=S.div(mn(),function(e){return 100*(1-e.ratio)},function(e){return e.theme.accent}),gn=S.div(dn()),hn=function(e){var n=e.className,t=e.duration,c=e.onTimeUp,i=e.id,o=e.enabled,u=e.displayStyle,l=void 0===u?on.Bar:u,s=Object(r.useState)(0),f=Object(b.a)(s,2),d=f[0],m=f[1],O=Object(r.useState)(t?~~(t/1e3):0),j=Object(b.a)(O,2),v=j[0],g=j[1],h=Object(r.useRef)(c);return h.current=c,Object(r.useEffect)(function(){if(o&&t){m(0),g(0);var e=Date.now(),n=setInterval(function(){var r=Math.min((Date.now()-e)/t,1);m(r),g(Math.ceil((t-(Date.now()-e))/1e3)),1===r&&(clearInterval(n),h.current&&h.current())},17);return function(){return clearInterval(n)}}},[t,o,i]),l===on.Bar?a.a.createElement(jn,{className:n},t&&a.a.createElement(vn,{ratio:d})):a.a.createElement(gn,{className:n},v)};function pn(){var e=Object(s.a)(["\n            text-align: center;\n          "]);return pn=function(){return e},e}var Sn,kn=function(e){var n=e.className,t=e.duration,a=e.onStart,c=Object(r.useState)(!1),i=Object(b.a)(c,2),o=i[0],u=i[1],l=Object(r.useCallback)(function(){u(!0)},[]);return Object(d.d)("div",{className:n},o?Object(d.d)("div",{css:Object(d.c)(pn())},Object(d.d)(hn,{duration:t,enabled:!0,onTimeUp:a,displayStyle:on.Text})):Object(d.d)(r.Fragment,null,Object(d.d)("div",null,"\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0\u3092\u59cb\u3081\u308b"),Object(d.d)(X,{onClick:l},"START")))};function wn(){var e=Object(s.a)(["\n  display: inline-block;\n"]);return wn=function(){return e},e}var Cn=(Sn={},Object(de.a)(Sn,ue.Legend,{color:"red"}),Object(de.a)(Sn,ue.Excellent,{color:"red"}),Object(de.a)(Sn,ue.Good,{color:"red"}),Object(de.a)(Sn,ue.Bad,{color:"red"}),Sn),yn=S.svg(wn()),En=function(e){var n=e.className,t=e.score,r=e.small,c=function(e){return e>=.98?ue.Legend:e>=.9?ue.Excellent:e>=.7?ue.Good:ue.Bad}(t);return a.a.createElement(yn,{rating:c,className:n,version:"1.1",width:r?100:170,height:r?30:50,viewBox:r?"0 0 100 30":"0 0 170 50",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},a.a.createElement("defs",null,a.a.createElement("filter",{id:"inset-shadow"},a.a.createElement("feOffset",{dx:"2",dy:"3"}),a.a.createElement("feGaussianBlur",{stdDeviation:"1",result:"offset-blur"}),a.a.createElement("feComposite",{operator:"out",in:"SourceGraphic",in2:"offset-blur",result:"inverse"}),a.a.createElement("feFlood",{"flood-color":"black","flood-opacity":"0.40",result:"color"}),a.a.createElement("feComposite",{operator:"in",in:"color",in2:"inverse",result:"shadow"}),a.a.createElement("feComposite",{operator:"over",in:"shadow",in2:"SourceGraphic"}))),a.a.createElement("text",{x:"50%",y:"50%","text-anchor":"middle","dominant-baseline":"central",fontSize:r?16:24,fontWeight:"bold",fill:Cn[c].color,stroke:"#000",strokeWidth:1,filter:"url(#inset-shadow)"},c.toUpperCase()))},xn=function(e){var n=e.className,t=e.scores,r=e.type,c=t.length>0?t.reduce(function(e,n){return e+n},0)/t.length:0;return a.a.createElement("div",{className:n},a.a.createElement("h1",null,ze(r)),a.a.createElement("p",null,"Total: ",ye(c)," ",a.a.createElement(En,{score:c})),a.a.createElement("ul",null,t.map(function(e,n){return a.a.createElement("li",{key:n},a.a.createElement("span",null,n+1,": ",ye(e)),a.a.createElement(En,{small:!0,score:e}))})," "))};function zn(){var e=Object(s.a)(["\n                margin-top: auto;\n              "]);return zn=function(){return e},e}function Nn(){var e=Object(s.a)(["\n                  margin: 0 auto;\n                  width: ","px;\n                "]);return Nn=function(){return e},e}function Tn(){var e=Object(s.a)(["\n                flex: auto;\n                text-align: center;\n              "]);return Tn=function(){return e},e}function Ln(){var e=Object(s.a)(["\n                text-align: center;\n                visibility: ",";\n              "]);return Ln=function(){return e},e}function Hn(){var e=Object(s.a)(["\n                position: absolute;\n                top: 0;\n                left: 0;\n              "]);return Hn=function(){return e},e}function Mn(){var e=Object(s.a)(["\n              width: 100%;\n              height: 100%;\n              display: flex;\n              flex-direction: column;\n              box-sizing: border-box;\n            "]);return Mn=function(){return e},e}function Rn(){var e=Object(s.a)(["\n          width: 100%;\n          height: 100%;\n          box-sizing: border-box;\n        "]);return Rn=function(){return e},e}function Bn(){var e=Object(s.a)(["\n        overflow: auto;\n        -webkit-overflow-scrolling: touch;\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        padding: 1em;\n      "]);return Bn=function(){return e},e}var Un=function(e){var n=e.className,t=e.type,a=e.scaleCorrection,c=e.level,i=e.onResult,o=e.onFinish,u=Object(r.useRef)(),l=Object(r.useRef)([]),s=Object(r.useRef)([]),f=Object(r.useMemo)(function(){return function(e,n){var t=new Array(n).fill(0).map(function(){return Ee(e)});return t.every(function(e){return"undefined"!==typeof e})?t:void 0}(t,10)},[t]),m=Object(r.useState)(!1),O=Object(b.a)(m,2),j=O[0],v=O[1],g=Object(r.useState)(0),h=Object(b.a)(g,2),p=h[0],S=h[1],k=Object(r.useState)(),w=Object(b.a)(k,2),C=w[0],y=w[1],E=Object(r.useState)(!1),x=Object(b.a)(E,2),z=x[0],N=x[1],T=Object(Ae.a)(),L=Object(b.a)(T,2),H=L[0],M=L[1],R=Object(r.useState)(!1),B=Object(b.a)(R,2),U=B[0],F=B[1];Object(r.useEffect)(function(){if(z){var e=setTimeout(function(){F(!0)},1e3);return function(){return clearTimeout(e)}}F(!1)},[z]);var I=Object(r.useCallback)(function(){if(f&&!(f.length<=p)&&C){var e=xe(t,f[p],C);s.current=[].concat(Object($.a)(s.current),[e]),l.current=[].concat(Object($.a)(l.current),[C]),N(!0)}},[C,p,f,t]),V=Object(r.useCallback)(function(){f&&(N(!1),y(void 0),S(p+1),f.length<=p+1&&i&&!u.current&&(u.current=new Date,i({datetime:u.current,level:c,scores:s.current,type:t,params:f,state:l.current})))},[p,c,i,f,t]),W=Object(r.useMemo)(function(){return!z&&C&&function(e,n){return n.length===Ce[e].stateSize}(t,C)},[C,z,t]),A=Object(r.useCallback)(function(){if(f&&!(f.length<=p)){var e=xe(t,f[p],W?C:void 0);s.current=[].concat(Object($.a)(s.current),[e]),N(!0)}},[C,p,W,f,t]),D=Object(r.useCallback)(function(){v(!0)},[]);if(!f)return null;var P=Math.min(M,500),Y=function(e,n){return Ce[e].duration[n]}(t,c);return Object(d.d)("div",{css:Object(d.c)(Bn()),className:n},Object(d.d)("div",{ref:H,css:Object(d.c)(Rn())},j?f.length<=p?Object(d.d)(r.Fragment,null,Object(d.d)(xn,{type:t,scores:s.current}),Object(d.d)(X,{onClick:function(){o&&o()}},"Finish")):Object(d.d)("div",{css:Object(d.c)(Mn())},Object(d.d)(hn,{css:Object(d.c)(Hn()),id:p,enabled:!z,duration:Y,onTimeUp:A}),Object(d.d)("div",{css:Object(d.c)(Ln(),z?"visible":"hidden")},Object(d.d)(En,{score:s.current.length>0?s.current[s.current.length-1]:0})),Object(d.d)("div",{css:Object(d.c)(Tn())},Object(d.d)("div",{css:Object(d.c)(Nn(),P)},Object(d.d)(fn,{type:t,params:f[p],screenSize:P,scaleCorrection:a,isAnswerShown:z,disableOperation:z,onUpdate:y}))),Object(d.d)("div",{css:Object(d.c)(zn())},W&&Object(d.d)(X,{onClick:I},"OK"),U&&Object(d.d)(X,{onClick:V},f.length-1<=p?"Check Result":"Next"))):Object(d.d)(kn,{duration:3e3,onStart:D})))},Fn=function(e){var n=e.className;return a.a.createElement("div",{className:n})};function In(){var e=Object(s.a)([""]);return In=function(){return e},e}function Vn(){var e=Object(s.a)(["\n                  margin-left: 1em;\n                "]);return Vn=function(){return e},e}function Wn(){var e=Object(s.a)(["\n                  margin-left: 1em;\n                "]);return Wn=function(){return e},e}function An(){var e=Object(s.a)(["\n                  margin-left: 1em;\n                "]);return An=function(){return e},e}function Dn(){var e=Object(s.a)([""]);return Dn=function(){return e},e}function Pn(){var e=Object(s.a)(["\n                padding: 0.5em 1em;\n                font-size: 0.9rem;\n                border-top: 1px solid #efefef;\n                display: flex;\n                align-items: center;\n\n                &:first-child {\n                  border-top: none;\n                }\n              "]);return Pn=function(){return e},e}function Xn(){var e=Object(s.a)(["\n        background-color: #fff;\n      "]);return Xn=function(){return e},e}var Yn=function(e){var n=e.className,t=e.histories;return Object(d.d)("div",{className:n,css:Object(d.c)(Xn())},t&&t.map(function(e){var n=e.scores.reduce(function(e,n){return e+n},0)/e.scores.length;return Object(d.d)("div",{key:e.datetime.toISOString(),css:Object(d.c)(Pn())},Object(d.d)("div",{css:Object(d.c)(Dn())},e.datetime.toLocaleString()),Object(d.d)("div",{css:Object(d.c)(An())},ze(e.type)),Object(d.d)("div",{css:Object(d.c)(Wn())},e.level),Object(d.d)("div",{css:Object(d.c)(Vn())},ye(n),"\u70b9"),Object(d.d)("div",{css:Object(d.c)(In())},Object(d.d)(En,{small:!0,score:n})))}))},Gn=function(e){var n=e.className;return a.a.createElement("div",{className:n})},qn=function(e){var n=e.className;return a.a.createElement("div",{className:n})};function Jn(){var e=Object(s.a)(["\n        overflow: auto;\n        -webkit-overflow-scrolling: touch;\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background-color: #f0f0f0;\n        padding: 1em;\n      "]);return Jn=function(){return e},e}var Kn=function(e){var n=e.className,t=e.histories;return Object(d.d)("div",{className:n,css:Object(d.c)(Jn())},Object(d.d)(Yn,{histories:t}),Object(d.d)(Fn,null),Object(d.d)(Gn,null),Object(d.d)(qn,null))};function $n(){var e=Object(s.a)(["\n                  margin-top: -0.1em;\n                  margin-right: 0.7em;\n                  font-size: 1.2em;\n                  vertical-align: middle;\n                "]);return $n=function(){return e},e}function Qn(){var e=Object(s.a)(["\n              display: block;\n              padding: 0.8em 1em 0.8em ",';\n              user-select: none;\n              cursor: pointer;\n              position: relative;\n              transition: all ease 0.1s;\n              font-size: 0.9rem;\n              border-top: 1px solid #efefef;\n\n              &:after {\n                content: ">";\n                float: right;\n                color: ',";\n                font-size: 0.9rem;\n              }\n\n              &:active:after {\n                color: #fff;\n              }\n\n              &:active {\n                background-color: ",";\n                color: #fff;\n              }\n            "]);return Qn=function(){return e},e}function Zn(){var e=Object(s.a)(["\n        margin: 0;\n        padding: 0;\n        background-color: #fff;\n      "]);return Zn=function(){return e},e}var _n,et=function(e){var n=e.className,t=e.items,r=e.onSelect,a=k(),c=t&&t.some(function(e){return!!e.icon});return Object(d.d)("ul",{className:n,css:Object(d.c)(Zn())},t&&t.map(function(e){return Object(d.d)("li",{css:Object(d.c)(Qn(),c&&e.icon?"3em":"1em",a.accent,a.accent),key:e.id,onClick:(n=e.id,function(){r&&r(n)})},e.icon&&Object(d.d)(T.a,{color:e.iconColor,icon:e.icon,css:Object(d.c)($n())}),e.label);var n}))};function nt(){var e=Object(s.a)(["\n        overflow: auto;\n        -webkit-overflow-scrolling: touch;\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background-color: #f0f0f0;\n      "]);return nt=function(){return e},e}!function(e){e.ScaleCorrection="scalecorrection",e.SignOut="signout"}(_n||(_n={}));var tt=[{id:_n.ScaleCorrection,label:"\u30b9\u30af\u30ea\u30fc\u30f3\u30b5\u30a4\u30ba\u306e\u88dc\u6b63"},{id:_n.SignOut,label:"\u30ed\u30b0\u30a2\u30a6\u30c8"}],rt=function(e){var n=e.className,t=e.onSelect;return Object(d.d)("div",{className:n,css:Object(d.c)(nt())},Object(d.d)(et,{items:tt,onSelect:function(e){t&&t(e)}}))};function at(){var e=Object(s.a)(["\n            width: 50%;\n            min-width: 300px;\n          "]);return at=function(){return e},e}function ct(){var e=Object(s.a)(["\n          text-align: center;\n          margin: 0 0 5em 0;\n        "]);return ct=function(){return e},e}function it(){var e=Object(s.a)(["\n            width: ","px;\n            height: 3px;\n            background-color: #000;\n            margin: 0 auto;\n          "]);return it=function(){return e},e}function ot(){var e=Object(s.a)(["\n          padding: 5em 0;\n        "]);return ot=function(){return e},e}function ut(){var e=Object(s.a)(["\n          text-align: center;\n          margin: 0;\n          padding: 2em 0;\n        "]);return ut=function(){return e},e}var lt=function(e){var n=e.className,t=e.scaleCorrection,a=e.onEnter,c=Object(r.useState)("number"===typeof t?t:50),i=Object(b.a)(c,2),o=i[0],u=i[1];Object(r.useEffect)(function(){"number"===typeof t&&u(100*(t-.5))},[t]);var l=o/100+.5;return Object(d.d)("div",{className:n},Object(d.d)("p",{css:Object(d.c)(ut())},"\u68d2\u306e\u9577\u3055\u304c ",3,"cm \u306b\u306a\u308b\u3088\u3046\u306b\u8abf\u6574\u3057\u3066\u304f\u3060\u3055\u3044"),Object(d.d)("div",{css:Object(d.c)(ot())},Object(d.d)("div",{css:Object(d.c)(it(),150*l)})),Object(d.d)("p",{css:Object(d.c)(ct())},Object(d.d)("input",{type:"range",min:0,max:100,value:o,onChange:function(e){return u(parseFloat(e.currentTarget.value))},css:Object(d.c)(at())})),Object(d.d)(X,{onClick:function(){a&&a(l)}},"OK"))};function st(){var e=Object(s.a)(["\n        overflow: auto;\n        -webkit-overflow-scrolling: touch;\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        padding: 1em;\n      "]);return st=function(){return e},e}var bt,ft=function(e){var n=e.className,t=e.scaleCorrection,r=e.onScaleCorrectionEnter;return Object(d.d)("div",{className:n,css:Object(d.c)(st())},Object(d.d)(lt,{scaleCorrection:t,onEnter:r}))};function dt(){var e=Object(s.a)(["\n          width: 100%;\n          height: 100%;\n        "]);return dt=function(){return e},e}!function(e){e[e.Home=0]="Home",e[e.TrainingMenu=1]="TrainingMenu",e[e.TrainingLevel=2]="TrainingLevel",e[e.Training=3]="Training",e[e.Report=4]="Report",e[e.Setting=5]="Setting",e[e.ScaleCorrection=6]="ScaleCorrection",e[e.ScaleCorrectionFirst=7]="ScaleCorrectionFirst"}(bt||(bt={}));var mt=Object(f.hot)(function(){var e=Object(r.useMemo)(function(){var e=localStorage.getItem("katachi.scaleCorrection");return e?J(2,0,parseFloat(e)):void 0},[]),n=Object(r.useState)(e||1),t=Object(b.a)(n,2),a=t[0],c=t[1],i=Object(r.useState)(),o=Object(b.a)(i,2),s=o[0],f=o[1];Object(r.useEffect)(function(){a?localStorage.setItem("katachi.scaleCorrection",a.toString()):localStorage.removeItem("katachi.scaleCorrection")},[a]);var m=[Object(re.a)(function(){return Object(Z.a)(ie).pipe(Object(ne.a)(function(e){return e?e.uid:G.SignedOut}))},G.Loading),Object(r.useCallback)(function(){return ie.signInWithRedirect(ce)},[]),Object(r.useCallback)(function(){return ie.signOut()},[])],O=Object(b.a)(m,3),j=O[0],v=O[1],g=O[2],h=function(e){var n=Object(r.useMemo)(function(){return e?oe.ref("users/".concat(e.replace("/",""),"/histories")):void 0},[e]);return[Object(re.a)(function(e){return e.pipe(Object(te.a)(function(e){var n=Object(b.a)(e,1)[0];return n?Object(_.a)(n).pipe(Object(ne.a)(function(e){return Object($.a)(e.map(function(e){return[e.snapshot.key,e.snapshot.val()]}).map(function(e){var n=Object(b.a)(e,2)[1];return{datetime:new Date(n.datetime),level:n.leve,type:n.type,params:n.params,scores:n.scores,state:n.state}}))})):Object(ee.a)([])}))},[],[n]),Object(r.useCallback)(function(e){return n?n.push({datetime:e.datetime.getTime(),level:e.level,type:e.type,params:e.params,scores:e.scores,state:e.state}).then(function(){}):Promise.reject()},[n])]}("string"===typeof j?j:void 0),p=Object(b.a)(h,2),S=p[0],k=p[1],y=Object(r.useState)(bt.Home),E=Object(b.a)(y,2),x=E[0],N=E[1];return Object(r.useEffect)(function(){"string"===typeof j&&x===bt.Home&&N(e?bt.TrainingMenu:bt.ScaleCorrectionFirst)},[x,e,j]),Object(d.d)(w,null,Object(d.d)(C,null),Object(d.d)(A,{css:Object(d.c)(dt()),currentMode:x===bt.Training||x===bt.TrainingMenu||x===bt.TrainingLevel?z.Training:x===bt.Report?z.Report:x===bt.Setting||x===bt.ScaleCorrection?z.Setting:void 0,navHidden:x===bt.Home||x===bt.Training||x===bt.ScaleCorrectionFirst,onModeChange:function(e){e===z.Training&&N(bt.TrainingMenu),e===z.Report&&N(bt.Report),e===z.Setting&&N(bt.Setting)},headerClosable:x===bt.Training,onHeaderClose:function(){N(bt.TrainingMenu),f(void 0)},headerBackButtonVisible:x===bt.TrainingLevel||x===bt.ScaleCorrection,onHeaderBackButtonClick:function(){x===bt.TrainingLevel&&N(bt.TrainingMenu),x===bt.ScaleCorrection&&N(bt.Setting)}},x===bt.Home&&j===G.SignedOut&&Object(d.d)(q,{onSignIn:function(){v()}}),x===bt.TrainingMenu&&Object(d.d)(Me,{onSelect:function(e){f([e,void 0]),N(bt.TrainingLevel)}}),x===bt.TrainingLevel&&Object(d.d)(We,{onSelect:function(e){f(function(n){return n?[n[0],e]:void 0}),N(bt.Training)}}),x===bt.Training&&s&&s[1]&&Object(d.d)(Un,{type:s[0],level:s[1],scaleCorrection:a,onResult:function(e){k(e)},onFinish:function(){N(bt.TrainingMenu)}}),x===bt.Report&&Object(d.d)(Kn,{histories:S}),x===bt.Setting&&Object(d.d)(rt,{onSelect:function(){var e=Object(l.a)(u.a.mark(function e(n){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n===_n.ScaleCorrection&&N(bt.ScaleCorrection),n!==_n.SignOut){e.next=5;break}return e.next=4,g();case 4:N(bt.Home);case 5:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}()}),(x===bt.ScaleCorrection||x===bt.ScaleCorrectionFirst)&&Object(d.d)(ft,{scaleCorrection:a,onScaleCorrectionEnter:function(e){c(e),x===bt.ScaleCorrectionFirst?N(bt.TrainingMenu):N(bt.Setting)}})))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(mt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},95:function(e,n,t){e.exports=t(156)}},[[95,1,2]]]);
//# sourceMappingURL=main.d5acb44b.chunk.js.map