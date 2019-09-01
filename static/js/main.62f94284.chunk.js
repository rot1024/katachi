(window.webpackJsonpkatachi=window.webpackJsonpkatachi||[]).push([[0],{135:function(e,n,t){"use strict";t.r(n);var r=t(0),c=t.n(r),a=t(67),i=t.n(a),o=t(2),u=t(7),l=t(74),s=t(1),b=t(76),d=t(70),f=t(34),m=t(49);function O(){var e=Object(o.a)(['\n  body {\n    margin: 0;\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",\n      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",\n      "Helvetica Neue", sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  html,\n  body,\n  #root {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n  }\n\n  html {\n    position: fixed;\n  }\n']);return O=function(){return e},e}f.b.add(m.b,m.a,m.c);var j={accent:"tomato",inactive:"#aaa"},v=Object(s.c)(O()),g=b.a,h=function(){return Object(r.useContext)(s.b)},p=function(e){var n=e.children;return c.a.createElement(d.a,{theme:j},n)},S=function(){return c.a.createElement(s.a,{styles:v})};function k(){var e=Object(o.a)(["\n            width: 3em;\n            height: 3em;\n            position: absolute;\n            top: 0;\n            right: 0;\n            cursor: pointer;\n            user-select: none;\n            text-align: center;\n            line-height: 3em;\n            color: #888;\n            font-size: 20px;\n          "]);return k=function(){return e},e}function x(){var e=Object(o.a)(["\n            width: 3em;\n            height: 3em;\n            position: absolute;\n            top: 0;\n            left: 0;\n            cursor: pointer;\n            user-select: none;\n            text-align: center;\n            line-height: 3em;\n            color: #888;\n            font-size: 20px;\n          "]);return x=function(){return e},e}function w(){var e=Object(o.a)(["\n        font-size: 1.2rem;\n        padding: 0 1em;\n        color: ",";\n        height: 3em;\n        line-height: 3em;\n        font-weight: bold;\n        text-align: center;\n      "]);return w=function(){return e},e}var C,y=function(e){var n=e.className,t=e.hidden,r=e.closable,c=e.onClose,a=e.backButtonVisible,i=e.onBackButtonClick,o=h();return t?null:Object(s.d)("div",{css:Object(s.c)(w(),o.accent),className:n},a&&Object(s.d)("div",{css:Object(s.c)(x()),onClick:i},"<"),"katachi",r&&Object(s.d)("div",{css:Object(s.c)(k()),onClick:c},"\xd7"))},E=t(38);function N(){var e=Object(o.a)(["\n  display: block;\n  margin: 0 auto 0.2em;\n  font-size: 1.5rem;\n"]);return N=function(){return e},e}function T(){var e=Object(o.a)(["\n  flex: auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  text-align: center;\n  font-size: 0.8rem;\n  font-weight: bold;\n  color: ",";\n  flex: 1 1 0;\n  user-select: none;\n"]);return T=function(){return e},e}function M(){var e=Object(o.a)(["\n  display: flex;\n  align-items: stretch;\n  height: 4em;\n"]);return M=function(){return e},e}!function(e){e[e.Training=0]="Training",e[e.Report=1]="Report",e[e.Setting=2]="Setting"}(C||(C={}));var L=g.div(M()),B=g.div(T(),function(e){var n=e.active,t=e.theme;return n?t.accent:t.inactive}),z=g(E.a)(N()),R=function(e){var n=e.className,t=e.selected,r=e.onSelect;return c.a.createElement(L,{className:n},c.a.createElement(B,{active:t===C.Training,onClick:function(){return r&&r(C.Training)}},c.a.createElement("div",null,c.a.createElement(z,{icon:"shapes"}),"\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0")),c.a.createElement(B,{active:t===C.Report,onClick:function(){return r&&r(C.Report)}},c.a.createElement("div",null,c.a.createElement(z,{icon:"chart-line"}),"\u30ec\u30dd\u30fc\u30c8")),c.a.createElement(B,{active:t===C.Setting,onClick:function(){return r&&r(C.Setting)}},c.a.createElement("div",null,c.a.createElement(z,{icon:"sliders-h"}),"\u8a2d\u5b9a")))};function H(){var e=Object(o.a)(["\n          display: ",";\n        "]);return H=function(){return e},e}function F(){var e=Object(o.a)(["\n          position: relative;\n          flex: auto;\n          overflow: hidden;\n          overflow-y: auto;\n        "]);return F=function(){return e},e}function U(){var e=Object(o.a)(["\n        position: relative;\n        display: flex;\n        flex-direction: column;\n      "]);return U=function(){return e},e}var I=function(e){var n=e.className,t=e.children,r=e.currentMode,c=e.navHidden,a=e.onModeChange,i=e.headerClosable,o=e.onHeaderClose,u=e.headerBackButtonVisible,l=e.onHeaderBackButtonClick;return Object(s.d)("div",{className:n,css:Object(s.c)(U())},Object(s.d)("header",null,Object(s.d)(y,{closable:i,onClose:o,backButtonVisible:u,onBackButtonClick:l})),Object(s.d)("main",{role:"main",css:Object(s.c)(F())},t),Object(s.d)("nav",{css:Object(s.c)(H(),c?"none":"block")},Object(s.d)(R,{selected:r,onSelect:a})))};function W(){var e=Object(o.a)(["\n  display: inline-block;\n  width: 100%;\n  font-size: 14px;\n  border-radius: 0.5em;\n  border: none;\n  outline: none;\n  background-color: ",";\n  color: #fff;\n  padding: 1em 3em;\n  box-shadow: 0 0.1em 0.5em #00000030;\n  cursor: pointer;\n  user-select: none;\n  transition: all ease 0.1s;\n\n  &:hover {\n    filter: brightness(120%);\n  }\n\n  &:active {\n    filter: brightness(100%);\n    transform: translateY(1px);\n  }\n"]);return W=function(){return e},e}var D=g.button(W(),function(e){return e.theme.accent}),A=function(e){var n=e.className,t=e.children,r=e.onClick;return c.a.createElement(D,{className:n,onClick:r},t?t.toUpperCase():"")};function V(){var e=Object(o.a)(["\n        padding: 1em;\n      "]);return V=function(){return e},e}var Y,G,J,K,P,X=function(e){var n=e.className,t=e.onSignIn;return Object(s.d)("div",{className:n,css:Object(s.c)(V())},Object(s.d)("h1",null,'\u5f62\u3092\u6b63\u78ba\u306b\u89b3\u308b "\u773c" \u3092\u990a\u3046\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0'),Object(s.d)(A,{onClick:t},"Twitter\u3067\u30ed\u30b0\u30a4\u30f3"))},$=function(e,n,t){return e>t?t:e<n?n:e},q=function(e,n){return e.length===n.length&&e.every(function(e,t){return e===n[t]})},Q=t(16);(G=Y||(Y={})).Legend="legend",G.Excellent="excellent",G.Good="good",G.Bad="bad",function(e){e.Easy="easy",e.Normal="normal",e.Hard="hard",e.Ultimate="ultimate"}(J||(J={})),function(e){e.VerticalLine2="verticalLine2"}(K||(K={}));var Z={title:"\u5782\u76f4\u306a\u68d2\u306e\u6bd4\u7387",paramsSize:3,stateSize:1,duration:(P={},Object(Q.a)(P,J.Easy,1/0),Object(Q.a)(P,J.Normal,1e4),Object(Q.a)(P,J.Hard,3e3),Object(Q.a)(P,J.Ultimate,1e3),P),validateParams:function(e){var n=Object(u.a)(e,3),t=n[0],r=n[1],c=n[2];return t>.3&&r>.3&&Math.abs(t-r)>=.2&&c>.1&&c<.9},judgeScore:function(e,n){if(0===e[0])return 0;var t=.3-.1*e[0];return n?1-Math.min(t,Math.abs(e[2]-n[0]))/t:0}},_=Object(Q.a)({},K.VerticalLine2,Z),ee=function(e){return Math.round(100*e)},ne=function(e){for(var n=_[e],t=0;t<100;t++){var r=new Array(n.paramsSize).fill(0).map(function(){return Math.random()}),c=n.validateParams(r);if(Array.isArray(c))return c;if(c)return r}},te=function(e,n,t){return _[e].judgeScore(n,t)},re=function(e){return _[e].title};function ce(){var e=Object(o.a)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  max-width: 200px;\n  max-height: 200px;\n  width: calc(50vw - 0.6em);\n  height: calc(50vw - 0.6em);\n  vertical-align: middle;\n  user-select: none;\n  border-radius: 0.5em;\n  box-shadow: 0 0.1em 0.5em #00000030;\n  cursor: pointer;\n  transition: all ease 0.1s;\n  background-color: ",";\n  color: #fff;\n  box-sizing: border-box;\n  margin: 0.3em;\n\n  &:hover {\n    filter: brightness(105%);\n  }\n\n  &:active {\n    filter: brightness(100%);\n    transform: translateY(1px);\n  }\n"]);return ce=function(){return e},e}var ae=g.div(ce(),function(e){return e.bgcolor||"#bbb"}),ie=function(e){var n=e.className,t=e.onSelect,c=Object(r.useCallback)(function(e){return t?function(){return t(e)}:void 0},[t]);return Object(s.d)("div",{className:n},Object.keys(_).map(function(e){return Object(s.d)(ae,{key:e,onClick:c(e)},re(e))}))},oe=function(e){var n=e.className,t=e.onSelect;return Object(s.d)("div",{className:n},Object(s.d)(ie,{onSelect:t}))};function ue(){var e=Object(o.a)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  max-width: 200px;\n  max-height: 200px;\n  width: calc(50vw - 0.6em);\n  height: calc(50vw - 0.6em);\n  vertical-align: middle;\n  user-select: none;\n  border-radius: 0.5em;\n  box-shadow: 0 0.1em 0.5em #00000030;\n  cursor: pointer;\n  transition: all ease 0.1s;\n  background-color: ",";\n  color: #fff;\n  box-sizing: border-box;\n  margin: 0.3em;\n\n  &:hover {\n    filter: brightness(105%);\n  }\n\n  &:active {\n    filter: brightness(100%);\n    transform: translateY(1px);\n  }\n"]);return ue=function(){return e},e}var le,se=[[J.Easy,"Easy"],[J.Normal,"Normal"],[J.Hard,"Hard"],[J.Ultimate,"Ultimate"]],be=g.div(ue(),function(e){return e.bgcolor||"#bbb"}),de=function(e){var n=e.className,t=e.onSelect,c=Object(r.useCallback)(function(e){return t?function(){return t(e)}:void 0},[t]);return Object(s.d)("div",{className:n},se.map(function(e){var n=Object(u.a)(e,2),t=n[0],r=n[1];return Object(s.d)(be,{key:t,onClick:c(t)},r)}))},fe=function(e){var n=e.className,t=e.onSelect;return c.a.createElement("div",{className:n},c.a.createElement(de,{onSelect:t}))},me=t(56),Oe=t(72),je=t(17),ve=t(138),ge=t(143),he=t(44),pe=t(139),Se=t(140),ke=t(141),xe=t(142),we=t(75),Ce=t(148),ye=t(144),Ee=t(145),Ne=t(146),Te=t(147),Me=function(e,n){return 200*e*n},Le=function(e){var n=e.longerLength,t=e.lineLength,r=e.x,a=e.y,i=e.ratio,o=e.answerRatio,u=e.onMouseDown,l=e.onTouchStart;return 0===n||0===t?null:c.a.createElement(je.Layer,{x:r,y:a},c.a.createElement(je.Line,{points:[0,n-t,0,n],strokeWidth:3,stroke:"#000"}),c.a.createElement(je.Line,{points:[-10,n-t,10,n-t],strokeWidth:3,stroke:"#000"}),c.a.createElement(je.Line,{points:[-10,n,10,n],strokeWidth:3,stroke:"#000"}),"number"===typeof i&&c.a.createElement(je.Line,{points:[-10,n-t*(1-i),10,n-t*(1-i)],strokeWidth:3,stroke:"#000"}),o&&c.a.createElement(je.Line,{points:[-10,n-t*(1-o),10,n-t*(1-o)],strokeWidth:3,stroke:"#f00"}),c.a.createElement(je.Line,{points:[0,-30,0,n+30],strokeWidth:200,onMouseDown:u,onTouchStart:l,stroke:"transparent"}))},Be=function(e){var n=e.className,t=e.params,a=e.state,i=e.isAnswerShown,o=e.screenSize,l=e.scaleCorrection,s=void 0===l?1:l,b=e.disableOperation,d=e.onUpdate,f=Object(r.useRef)(null),m=Me(t[0],s),O=Me(t[1],s),j=Math.max(m,O),v=t[2],g=a?a[0]:void 0,h=[d,b,Object(r.useCallback)(function(e){return $((e-((o-j)/2+(j-m)))/m,0,1)},[m,j,o]),t],p=Object(Te.a)(function(e,n,t){return Object(ve.a)(n.pipe(Object(he.a)(function(e){return Object(u.a)(e,4)[3]}),Object(pe.a)(q),Object(Se.a)(void 0)),e.pipe(Object(ke.a)(n),Object(xe.a)(function(e){var n=Object(u.a)(e,2);return!Object(u.a)(n[1],2)[1]}),Object(he.a)(function(e){var n=Object(u.a)(e,1)[0];return[n.evt instanceof TouchEvent?n.evt.targetTouches[0].pageY:n.evt.pageY,f.current?f.current.getBoundingClientRect().top:0]}),Object(he.a)(function(e){var n=Object(u.a)(e,2),t=n[0],r=n[1];return[t-r,r]}),Object(we.a)(function(e){var r=Object(u.a)(e,2),c=r[0],a=r[1];return Object(ve.a)(Object(ge.a)(document,"mousemove"),Object(ge.a)(document,"touchmove")).pipe(Object(he.a)(function(e){return(e instanceof TouchEvent?e.targetTouches[0].pageY:e.pageY)-a}),Object(Ce.a)(c),Object(ye.a)(Object(ve.a)(Object(ve.a)(Object(ge.a)(document,"mouseup"),Object(ge.a)(document,"touchend")).pipe(Object(ke.a)(t,n),Object(Ee.a)(function(e){var n=Object(u.a)(e,3),t=n[1],r=Object(u.a)(n[2],2),c=r[0],a=r[1];"number"===typeof t&&c&&!a&&c([t])})),n.pipe(Object(Ne.a)(1),Object(he.a)(function(e){return Object(u.a)(e,2)[1]}),Object(pe.a)(),Object(xe.a)(function(e){return!!e})),n.pipe(Object(Ne.a)(1),Object(he.a)(function(e){return Object(u.a)(e,4)[3]}),Object(pe.a)(q)))),Object(ke.a)(n),Object(he.a)(function(e){var n=Object(u.a)(e,2),t=n[0];return(0,Object(u.a)(n[1],3)[2])(t)}))})))},g,h),S=Object(u.a)(p,2),k=S[0],x=S[1];return c.a.createElement("div",{ref:f},c.a.createElement(je.Stage,{className:n,width:o,height:o},c.a.createElement(je.Layer,null,c.a.createElement(je.Rect,{stroke:"#eee",width:o,height:o})),c.a.createElement(Le,{x:o/3,y:(o-j)/2,lineLength:O,longerLength:j,ratio:v}),c.a.createElement(Le,{x:o/3*2,y:(o-j)/2,lineLength:m,longerLength:j,ratio:x||void 0,answerRatio:i?v:void 0,onMouseDown:k,onTouchStart:k})))},ze=function(e){var n=function(e){switch(e){case K.VerticalLine2:return Be}}(e.type);return n?c.a.createElement(n,e):null};function Re(){var e=Object(o.a)(["\n  font-size: 4rem;\n  width: 2em;\n  padding: 0.2em 0.4em;\n  display: inline-block;\n  text-align: center;\n"]);return Re=function(){return e},e}function He(){var e=Object(o.a)(["\n  width: ","%;\n  height: 3px;\n  background-color: ",";\n"]);return He=function(){return e},e}function Fe(){var e=Object(o.a)(["\n  width: 100%;\n"]);return Fe=function(){return e},e}!function(e){e[e.Bar=0]="Bar",e[e.Text=1]="Text"}(le||(le={}));var Ue=g.div(Fe()),Ie=g.div(He(),function(e){return 100*(1-e.ratio)},function(e){return e.theme.accent}),We=g.div(Re()),De=function(e){var n=e.className,t=e.duration,a=e.onTimeUp,i=e.id,o=e.enabled,l=e.displayStyle,s=void 0===l?le.Bar:l,b=Object(r.useState)(0),d=Object(u.a)(b,2),f=d[0],m=d[1],O=Object(r.useState)(t?~~(t/1e3):0),j=Object(u.a)(O,2),v=j[0],g=j[1],h=Object(r.useRef)(a);return h.current=a,Object(r.useEffect)(function(){if(o&&t){m(0),g(0);var e=Date.now(),n=setInterval(function(){var r=Math.min((Date.now()-e)/t,1);m(r),g(Math.ceil((t-(Date.now()-e))/1e3)),1===r&&(clearInterval(n),h.current&&h.current())},17);return function(){return clearInterval(n)}}},[t,o,i]),s===le.Bar?c.a.createElement(Ue,{className:n},t&&c.a.createElement(Ie,{ratio:f})):c.a.createElement(We,{className:n},v)};function Ae(){var e=Object(o.a)(["\n            text-align: center;\n          "]);return Ae=function(){return e},e}var Ve,Ye=function(e){var n=e.className,t=e.duration,c=e.onStart,a=Object(r.useState)(!1),i=Object(u.a)(a,2),o=i[0],l=i[1],b=Object(r.useCallback)(function(){l(!0)},[]);return Object(s.d)("div",{className:n},o?Object(s.d)("div",{css:Object(s.c)(Ae())},Object(s.d)(De,{duration:t,enabled:!0,onTimeUp:c,displayStyle:le.Text})):Object(s.d)(r.Fragment,null,Object(s.d)("div",null,"\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0\u3092\u59cb\u3081\u308b"),Object(s.d)(A,{onClick:b},"START")))};function Ge(){var e=Object(o.a)(["\n  display: inline-block;\n"]);return Ge=function(){return e},e}var Je=(Ve={},Object(Q.a)(Ve,Y.Legend,{color:"red"}),Object(Q.a)(Ve,Y.Excellent,{color:"red"}),Object(Q.a)(Ve,Y.Good,{color:"red"}),Object(Q.a)(Ve,Y.Bad,{color:"red"}),Ve),Ke=g.svg(Ge()),Pe=function(e){var n=e.className,t=e.score,r=e.small,a=function(e){return e>=.98?Y.Legend:e>=.9?Y.Excellent:e>=.7?Y.Good:Y.Bad}(t);return c.a.createElement(Ke,{rating:a,className:n,version:"1.1",width:r?100:170,height:r?30:50,viewBox:r?"0 0 100 30":"0 0 170 50",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},c.a.createElement("defs",null,c.a.createElement("filter",{id:"inset-shadow"},c.a.createElement("feOffset",{dx:"2",dy:"3"}),c.a.createElement("feGaussianBlur",{stdDeviation:"1",result:"offset-blur"}),c.a.createElement("feComposite",{operator:"out",in:"SourceGraphic",in2:"offset-blur",result:"inverse"}),c.a.createElement("feFlood",{"flood-color":"black","flood-opacity":"0.40",result:"color"}),c.a.createElement("feComposite",{operator:"in",in:"color",in2:"inverse",result:"shadow"}),c.a.createElement("feComposite",{operator:"over",in:"shadow",in2:"SourceGraphic"}))),c.a.createElement("text",{x:"50%",y:"50%","text-anchor":"middle","dominant-baseline":"central",fontSize:r?16:24,fontWeight:"bold",fill:Je[a].color,stroke:"#000",strokeWidth:1,filter:"url(#inset-shadow)"},a.toUpperCase()))},Xe=function(e){var n=e.className,t=e.scores,r=e.type,a=t.length>0?t.reduce(function(e,n){return e+n},0)/t.length:0;return c.a.createElement("div",{className:n},c.a.createElement("h1",null,re(r)),c.a.createElement("p",null,"Total: ",ee(a)," ",c.a.createElement(Pe,{score:a})),c.a.createElement("ul",null,t.map(function(e,n){return c.a.createElement("li",null,c.a.createElement("span",null,n+1,": ",ee(e)),c.a.createElement(Pe,{small:!0,score:e}))})," "))};function $e(){var e=Object(o.a)(["\n                margin-top: auto;\n              "]);return $e=function(){return e},e}function qe(){var e=Object(o.a)(["\n                  margin: 0 auto;\n                  width: ","px;\n                "]);return qe=function(){return e},e}function Qe(){var e=Object(o.a)(["\n                flex: auto;\n                text-align: center;\n              "]);return Qe=function(){return e},e}function Ze(){var e=Object(o.a)(["\n                text-align: center;\n                visibility: ",";\n              "]);return Ze=function(){return e},e}function _e(){var e=Object(o.a)(["\n                position: absolute;\n                top: 0;\n                left: 0;\n              "]);return _e=function(){return e},e}function en(){var e=Object(o.a)(["\n              width: 100%;\n              height: 100%;\n              display: flex;\n              flex-direction: column;\n              box-sizing: border-box;\n            "]);return en=function(){return e},e}function nn(){var e=Object(o.a)(["\n          width: 100%;\n          height: 100%;\n          box-sizing: border-box;\n        "]);return nn=function(){return e},e}function tn(){var e=Object(o.a)(["\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        padding: 1em;\n      "]);return tn=function(){return e},e}var rn=function(e){var n=e.className,t=e.type,c=e.scaleCorrection,a=e.level,i=e.onResult,o=e.onFinish,l=Object(r.useRef)(),b=Object(r.useRef)([]),d=Object(r.useMemo)(function(){return function(e,n){var t=new Array(n).fill(0).map(function(){return ne(e)});return t.every(function(e){return"undefined"!==typeof e})?t:void 0}(t,10)},[t]),f=Object(r.useState)(!1),m=Object(u.a)(f,2),O=m[0],j=m[1],v=Object(r.useState)(0),g=Object(u.a)(v,2),h=g[0],p=g[1],S=Object(r.useState)(),k=Object(u.a)(S,2),x=k[0],w=k[1],C=Object(r.useState)(!1),y=Object(u.a)(C,2),E=y[0],N=y[1],T=Object(Oe.a)(),M=Object(u.a)(T,2),L=M[0],B=M[1],z=Object(r.useCallback)(function(){if(d&&!(d.length<=h)&&x){var e=te(t,d[h],x);b.current=[].concat(Object(me.a)(b.current),[e]),N(!0)}},[x,h,d,t]),R=Object(r.useCallback)(function(){d&&(N(!1),w(void 0),p(h+1),d.length<=h&&i&&!l.current&&(l.current=new Date,i({datetime:l.current,scores:b.current,type:t,params:d})))},[h,i,d,t]),H=Object(r.useMemo)(function(){return!E&&x&&function(e,n){return n.length===_[e].stateSize}(t,x)},[x,E,t]),F=Object(r.useCallback)(function(){if(d&&!(d.length<=h)){var e=te(t,d[h],H?x:void 0);b.current=[].concat(Object(me.a)(b.current),[e]),N(!0)}},[x,h,H,d,t]),U=Object(r.useCallback)(function(){j(!0)},[]);if(!d)return null;var I=Math.min(B,500),W=function(e,n){return _[e].duration[n]}(t,a);return Object(s.d)("div",{css:Object(s.c)(tn()),className:n},Object(s.d)("div",{ref:L,css:Object(s.c)(nn())},O?d.length<=h?Object(s.d)(r.Fragment,null,Object(s.d)(Xe,{type:t,scores:b.current}),Object(s.d)(A,{onClick:function(){o&&o()}},"Finish")):Object(s.d)("div",{css:Object(s.c)(en())},Object(s.d)(De,{css:Object(s.c)(_e()),id:h,enabled:!E,duration:W,onTimeUp:F}),Object(s.d)("div",{css:Object(s.c)(Ze(),E?"visible":"hidden")},Object(s.d)(Pe,{score:b.current.length>0?b.current[b.current.length-1]:0})),Object(s.d)("div",{css:Object(s.c)(Qe())},Object(s.d)(ze,{css:Object(s.c)(qe(),I),type:t,params:d[h],screenSize:I,scaleCorrection:c,isAnswerShown:E,disableOperation:E,onUpdate:w})),Object(s.d)("div",{css:Object(s.c)($e())},H&&Object(s.d)(A,{onClick:z},"OK"),E&&Object(s.d)(A,{onClick:R},"Next"))):Object(s.d)(Ye,{duration:3e3,onStart:U})))},cn=function(e){var n=e.className;return c.a.createElement("div",{className:n})};function an(){var e=Object(o.a)([""]);return an=function(){return e},e}function on(){var e=Object(o.a)(["\n                  margin-left: 1em;\n                "]);return on=function(){return e},e}function un(){var e=Object(o.a)(["\n                  margin-left: 1em;\n                "]);return un=function(){return e},e}function ln(){var e=Object(o.a)([""]);return ln=function(){return e},e}function sn(){var e=Object(o.a)(["\n                padding: 0.5em 1em;\n                font-size: 0.9rem;\n                border-top: 1px solid #efefef;\n                display: flex;\n                align-items: center;\n\n                &:first-child {\n                  border-top: none;\n                }\n              "]);return sn=function(){return e},e}function bn(){var e=Object(o.a)(["\n        background-color: #fff;\n      "]);return bn=function(){return e},e}var dn=function(e){var n=e.className,t=e.histories;return Object(s.d)("div",{className:n,css:Object(s.c)(bn())},t&&t.map(function(e){var n=e.scores.reduce(function(e,n){return e+n},0)/e.scores.length;return Object(s.d)("div",{key:e.datetime.toISOString(),css:Object(s.c)(sn())},Object(s.d)("div",{css:Object(s.c)(ln())},e.datetime.toLocaleString()),Object(s.d)("div",{css:Object(s.c)(un())},re(e.type)),Object(s.d)("div",{css:Object(s.c)(on())},ee(n),"\u70b9"),Object(s.d)("div",{css:Object(s.c)(an())},Object(s.d)(Pe,{small:!0,score:n})))}))},fn=function(e){var n=e.className;return c.a.createElement("div",{className:n})},mn=function(e){var n=e.className;return c.a.createElement("div",{className:n})};function On(){var e=Object(o.a)(["\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background-color: #f0f0f0;\n        padding: 1em;\n      "]);return On=function(){return e},e}var jn=function(e){var n=e.className,t=e.histories;return Object(s.d)("div",{className:n,css:Object(s.c)(On())},Object(s.d)(dn,{histories:t}),Object(s.d)(cn,null),Object(s.d)(fn,null),Object(s.d)(mn,null))};function vn(){var e=Object(o.a)(["\n                  margin-top: -0.1em;\n                  margin-right: 0.7em;\n                  font-size: 1.2em;\n                  vertical-align: middle;\n                "]);return vn=function(){return e},e}function gn(){var e=Object(o.a)(["\n              display: block;\n              padding: 0.8em 1em 0.8em ",';\n              user-select: none;\n              cursor: pointer;\n              position: relative;\n              transition: all ease 0.1s;\n              font-size: 0.9rem;\n              border-top: 1px solid #efefef;\n\n              &:after {\n                content: ">";\n                float: right;\n                color: ',";\n                font-size: 0.9rem;\n              }\n\n              &:active:after {\n                color: #fff;\n              }\n\n              &:active {\n                background-color: ",";\n                color: #fff;\n              }\n            "]);return gn=function(){return e},e}function hn(){var e=Object(o.a)(["\n        margin: 0;\n        padding: 0;\n        background-color: #fff;\n      "]);return hn=function(){return e},e}var pn,Sn=function(e){var n=e.className,t=e.items,r=e.onSelect,c=h(),a=t&&t.some(function(e){return!!e.icon});return Object(s.d)("ul",{className:n,css:Object(s.c)(hn())},t&&t.map(function(e){return Object(s.d)("li",{css:Object(s.c)(gn(),a&&e.icon?"3em":"1em",c.accent,c.accent),key:e.id,onClick:(n=e.id,function(){r&&r(n)})},e.icon&&Object(s.d)(E.a,{color:e.iconColor,icon:e.icon,css:Object(s.c)(vn())}),e.label);var n}))};function kn(){var e=Object(o.a)(["\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background-color: #f0f0f0;\n      "]);return kn=function(){return e},e}!function(e){e.ScaleCorrection="scalecorrection",e.SignOut="signout"}(pn||(pn={}));var xn=[{id:pn.ScaleCorrection,label:"\u30b9\u30af\u30ea\u30fc\u30f3\u30b5\u30a4\u30ba\u306e\u88dc\u6b63"},{id:pn.SignOut,label:"\u30ed\u30b0\u30a2\u30a6\u30c8"}],wn=function(e){var n=e.className,t=e.onSelect;return Object(s.d)("div",{className:n,css:Object(s.c)(kn())},Object(s.d)(Sn,{items:xn,onSelect:function(e){t&&t(e)}}))};function Cn(){var e=Object(o.a)(["\n            width: 50%;\n            min-width: 300px;\n          "]);return Cn=function(){return e},e}function yn(){var e=Object(o.a)(["\n          text-align: center;\n          margin: 0 0 5em 0;\n        "]);return yn=function(){return e},e}function En(){var e=Object(o.a)(["\n            width: ","px;\n            height: 3px;\n            background-color: #000;\n            margin: 0 auto;\n          "]);return En=function(){return e},e}function Nn(){var e=Object(o.a)(["\n          padding: 5em 0;\n        "]);return Nn=function(){return e},e}function Tn(){var e=Object(o.a)(["\n          text-align: center;\n          margin: 0;\n          padding: 2em 0;\n        "]);return Tn=function(){return e},e}var Mn=function(e){var n=e.className,t=e.scaleCorrection,c=e.onEnter,a=Object(r.useState)("number"===typeof t?t:50),i=Object(u.a)(a,2),o=i[0],l=i[1];Object(r.useEffect)(function(){"number"===typeof t&&l(100*(t-.5))},[t]);var b=o/100+.5;return Object(s.d)("div",{className:n},Object(s.d)("p",{css:Object(s.c)(Tn())},"\u68d2\u306e\u9577\u3055\u304c ",3,"cm \u306b\u306a\u308b\u3088\u3046\u306b\u8abf\u6574\u3057\u3066\u304f\u3060\u3055\u3044"),Object(s.d)("div",{css:Object(s.c)(Nn())},Object(s.d)("div",{css:Object(s.c)(En(),150*b)})),Object(s.d)("p",{css:Object(s.c)(yn())},Object(s.d)("input",{type:"range",min:0,max:100,value:o,onChange:function(e){return l(parseFloat(e.currentTarget.value))},css:Object(s.c)(Cn())})),Object(s.d)(A,{onClick:function(){c&&c(b)}},"OK"))};function Ln(){var e=Object(o.a)(["\n        padding: 1em;\n      "]);return Ln=function(){return e},e}var Bn,zn=function(e){var n=e.className,t=e.scaleCorrection,r=e.onScaleCorrectionEnter;return Object(s.d)("div",{className:n,css:Object(s.c)(Ln())},Object(s.d)(Mn,{scaleCorrection:t,onEnter:r}))};function Rn(){var e=Object(o.a)(["\n          width: 100%;\n          height: 100%;\n        "]);return Rn=function(){return e},e}!function(e){e[e.Home=0]="Home",e[e.TrainingMenu=1]="TrainingMenu",e[e.TrainingLevel=2]="TrainingLevel",e[e.Training=3]="Training",e[e.Report=4]="Report",e[e.Setting=5]="Setting",e[e.ScaleCorrection=6]="ScaleCorrection",e[e.ScaleCorrectionFirst=7]="ScaleCorrectionFirst"}(Bn||(Bn={}));var Hn=Object(l.hot)(function(){var e=Object(r.useMemo)(function(){var e=localStorage.getItem("katachi.scaleCorrection");return e?$(1,0,parseFloat(e)):void 0},[]),n=Object(r.useState)(Bn.Home),t=Object(u.a)(n,2),c=t[0],a=t[1],i=Object(r.useState)(e||1),o=Object(u.a)(i,2),l=o[0],b=o[1],d=Object(r.useState)(),f=Object(u.a)(d,2),m=f[0],O=f[1];return Object(r.useEffect)(function(){l?localStorage.setItem("katachi.scaleCorrection",l.toString()):localStorage.removeItem("katachi.scaleCorrection")},[l]),Object(s.d)(p,null,Object(s.d)(S,null),Object(s.d)(I,{css:Object(s.c)(Rn()),currentMode:c===Bn.Training||c===Bn.TrainingMenu||c===Bn.TrainingLevel?C.Training:c===Bn.Report?C.Report:c===Bn.Setting||c===Bn.ScaleCorrection?C.Setting:void 0,navHidden:c===Bn.Home||c===Bn.Training||c===Bn.ScaleCorrectionFirst,onModeChange:function(e){e===C.Training&&a(Bn.TrainingMenu),e===C.Report&&a(Bn.Report),e===C.Setting&&a(Bn.Setting)},headerClosable:c===Bn.Training,onHeaderClose:function(){a(Bn.TrainingMenu),O(void 0)},headerBackButtonVisible:c===Bn.TrainingLevel||c===Bn.ScaleCorrection,onHeaderBackButtonClick:function(){c===Bn.TrainingLevel&&a(Bn.TrainingMenu),c===Bn.ScaleCorrection&&a(Bn.Setting)}},c===Bn.Home&&Object(s.d)(X,{onSignIn:function(){a(e?Bn.TrainingMenu:Bn.ScaleCorrectionFirst)}}),c===Bn.TrainingMenu&&Object(s.d)(oe,{onSelect:function(e){O([e,void 0]),a(Bn.TrainingLevel)}}),c===Bn.TrainingLevel&&Object(s.d)(fe,{onSelect:function(e){O(function(n){return n?[n[0],e]:void 0}),a(Bn.Training)}}),c===Bn.Training&&m&&m[1]&&Object(s.d)(rn,{type:m[0],level:m[1],scaleCorrection:l,onResult:function(){},onFinish:function(){a(Bn.TrainingMenu)}}),c===Bn.Report&&Object(s.d)(jn,null),c===Bn.Setting&&Object(s.d)(wn,{onSelect:function(e){e===pn.ScaleCorrection&&a(Bn.ScaleCorrection),e===pn.SignOut&&a(Bn.Home)}}),c===Bn.ScaleCorrection||c===Bn.ScaleCorrectionFirst&&Object(s.d)(zn,{scaleCorrection:l,onScaleCorrectionEnter:function(e){b(e),c===Bn.ScaleCorrectionFirst?a(Bn.TrainingMenu):a(Bn.Setting)}})))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(Hn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},78:function(e,n,t){e.exports=t(135)}},[[78,1,2]]]);
//# sourceMappingURL=main.62f94284.chunk.js.map