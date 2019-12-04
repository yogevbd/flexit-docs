/*! For license information please see ece76bd1.e0fdddd7.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[17,3],{112:function(e,t,a){"use strict";a.r(t);a(124);var n=a(0),r=a.n(n),l=a(120),c=a.n(l),o=a(133),i=a(123),s=a(119),u=a(122),d=a(113),h=a.n(d);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var f=[{title:r.a.createElement(r.a.Fragment,null,"Install FlexIt"),classes:"fad fa-box-open flx-blue",docLink:"docs/install",description:r.a.createElement(r.a.Fragment,null,"Got 5 minutes? That\u2019s all the time you\u2019ll need to download, install, and see how easy and powerful FlexIt is.")},{title:r.a.createElement(r.a.Fragment,null,"Getting Started"),classes:"fad fa-running flx-green",docLink:"docs/getting-started",description:r.a.createElement(r.a.Fragment,null,"Quick start guide to get you familiar with FlexIt. Learn how to access FlexIt and build your first report and dashboard.")},{title:r.a.createElement(r.a.Fragment,null,"Administration"),classes:"fad fa-user-cog flx-gray",docLink:"docs/administration",description:r.a.createElement(r.a.Fragment,null,"Administration is easy, but if you need a hand then you can find all you'll need to know in the Admin Guide.")}];function p(e){var t=e.classes,a=e.title,n=e.description,l=e.docLink;return r.a.createElement("div",{className:c()("col col--4 flx-gray",h.a.feature)},r.a.createElement("div",{className:"text--center"},r.a.createElement("a",{href:Object(u.a)(l)},r.a.createElement("i",{className:c()(t,h.a.featureFont),style:{fontSize:"112px"}}))),r.a.createElement("h3",null,r.a.createElement("a",{href:Object(u.a)(l)},a)),r.a.createElement("p",null,n))}t.default=function(){var e=Object(s.a)().siteConfig,t=void 0===e?{}:e;return r.a.createElement(o.a,{title:""+t.title,description:"User guides and documentation for FlexIt Analytics"},r.a.createElement("header",{className:c()("hero hero--primary",h.a.heroBanner)},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"hero__title"},t.title),r.a.createElement("p",{className:"hero__subtitle"},t.tagline),r.a.createElement("div",{className:h.a.buttons},r.a.createElement(i.a,{className:c()("button button--outline button--secondary button--lg",h.a.getStarted),to:Object(u.a)("docs/getting-started")},"Get Started")))),r.a.createElement("main",null,f&&f.length&&r.a.createElement("section",{className:h.a.features},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},f.map((function(e,t){return r.a.createElement(p,m({key:t},e))})))))))}},119:function(e,t,a){"use strict";var n=a(0),r=a(36);t.a=function(){return Object(n.useContext)(r.a)}},120:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)&&n.length){var c=r.apply(null,n);c&&e.push(c)}else if("object"===l)for(var o in n)a.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},122:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(119);function r(e){const{siteConfig:t}=Object(n.a)(),{baseUrl:a="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?a+e.slice(1):a+e}},123:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(19);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const o=/^\/(?!\/)/;t.a=function(e){const{to:t,href:a}=e,i=t||a,s=o.test(i);let u=!1;const d="undefined"!=typeof window&&"IntersectionObserver"in window;let h;return Object(n.useEffect)(()=>(!d&&s&&window.docusaurus.prefetch(i),()=>{d&&h&&h.disconnect()}),[i,d,s]),i&&s?r.a.createElement(l.b,c({},e,{onMouseEnter:()=>{u||(window.docusaurus.preload(i),u=!0)},innerRef:e=>{d&&e&&s&&((e,t)=>{(h=new window.IntersectionObserver(a=>{a.forEach(a=>{e===a.target&&(a.isIntersecting||a.intersectionRatio>0)&&(h.unobserve(e),h.disconnect(),t())})})).observe(e)})(e,()=>{window.docusaurus.prefetch(i)})},to:i})):r.a.createElement("a",c({},e,{href:i}))}},124:function(e,t,a){var n=a(51);n(n.S+n.F,"Object",{assign:a(125)})},125:function(e,t,a){"use strict";var n=a(12),r=a(34),l=a(126),c=a(127),o=a(52),i=a(53),s=Object.assign;e.exports=!s||a(33)((function(){var e={},t={},a=Symbol(),n="abcdefghijklmnopqrst";return e[a]=7,n.split("").forEach((function(e){t[e]=e})),7!=s({},e)[a]||Object.keys(s({},t)).join("")!=n}))?function(e,t){for(var a=o(e),s=arguments.length,u=1,d=l.f,h=c.f;s>u;)for(var m,f=i(arguments[u++]),p=d?r(f).concat(d(f)):r(f),v=p.length,g=0;v>g;)m=p[g++],n&&!h.call(f,m)||(a[m]=f[m]);return a}:s},126:function(e,t){t.f=Object.getOwnPropertySymbols},127:function(e,t){t.f={}.propertyIsEnumerable},132:function(e,t,a){"use strict";t.a=()=>null},133:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(35),c=a(119),o=a(122),i=a(123),s=a(134),u=a(135),d=a.n(u),h=a(120),m=a.n(h),f=a(88),p=a.n(f);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const g=()=>r.a.createElement("span",{className:m()(p.a.toggle,p.a.moon)}),b=()=>r.a.createElement("span",{className:m()(p.a.toggle,p.a.sun)});var E=function(e){return r.a.createElement(d.a,v({icons:{checked:r.a.createElement(g,null),unchecked:r.a.createElement(b,null)}},e))};var k=()=>{const[e,t]=n.useState("undefined"!=typeof document?document.querySelector("html").getAttribute("data-theme"):"");return n.useEffect(()=>{try{t(localStorage.getItem("theme"))}catch(e){console.error(e)}},[t]),[e,n.useCallback(e=>{try{localStorage.setItem("theme",e),t(e)}catch(a){console.error(a)}},[t])]},y=a(89),_=a.n(y);function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function O({to:e,href:t,label:a,position:n,...l}){const c=Object(o.a)(e);return r.a.createElement(i.a,w({className:"navbar__item navbar__link"},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{activeClassName:"navbar__link--active",to:c},l),a)}var N=function(){const e=Object(c.a)(),[t,a]=Object(n.useState)(!1),[u,d]=Object(n.useState)(!1),[h,f]=k(),{siteConfig:p={}}=e,{baseUrl:v,themeConfig:g={}}=p,{navbar:b={},disableDarkMode:y=!1}=g,{title:N,logo:j={},links:C=[]}=b,x=Object(n.useCallback)(()=>{a(!0)},[a]),S=Object(n.useCallback)(()=>{a(!1)},[a]),F=Object(n.useCallback)(e=>f(e.target.checked?"dark":""),[f]),T=Object(o.a)(j.src);return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null,r.a.createElement("html",{lang:"en","data-theme":h})),r.a.createElement("nav",{className:m()("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":t})},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:x,onKeyDown:x},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(i.a,{className:"navbar__brand",to:v},null!=j&&r.a.createElement("img",{className:"navbar__logo",src:T,alt:j.alt}),null!=N&&r.a.createElement("strong",{className:u?_.a.hideLogoText:""},N)),C.filter(e=>"right"!==e.position).map((e,t)=>r.a.createElement(O,w({},e,{key:t})))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},C.filter(e=>"right"===e.position).map((e,t)=>r.a.createElement(O,w({},e,{key:t}))),!y&&r.a.createElement(E,{className:_.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:"dark"===h,onChange:F}),r.a.createElement(s.a,{handleSearchBarToggle:d,isSearchBarExpanded:u}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:()=>{a(!1)}}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(i.a,{className:"navbar__brand",onClick:S,to:v},null!=j&&r.a.createElement("img",{className:"navbar__logo",src:T,alt:j.alt}),null!=N&&r.a.createElement("strong",null,N)),!y&&t&&r.a.createElement(E,{"aria-label":"Dark mode toggle in sidebar",checked:"dark"===h,onChange:F})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},C.map((e,t)=>r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(O,w({className:"menu__link"},e,{onClick:S}))))))))))},j=a(90),C=a.n(j);function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function S({to:e,href:t,label:a,...n}){const l=Object(o.a)(e);return r.a.createElement(i.a,x({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{to:l},n),a)}const F=({url:e,alt:t})=>r.a.createElement("img",{className:"footer__logo",alt:t,src:e});var T=function(){const e=Object(c.a)(),{siteConfig:t={}}=e,{themeConfig:a={}}=t,{footer:n}=a,{copyright:l,links:i=[],logo:s={}}=n||{},u=Object(o.a)(s.src);return n?r.a.createElement("footer",{className:m()("footer",{"footer--dark":"dark"===n.style})},r.a.createElement("div",{className:"container"},i&&i.length>0&&r.a.createElement("div",{className:"row footer__links"},i.map((e,t)=>r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((e,t)=>e.html?r.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(S,e)))):null))),(s||l)&&r.a.createElement("div",{className:"text--center"},s&&s.src&&r.a.createElement("div",{className:"margin-bottom--sm"},s.href?r.a.createElement("a",{href:s.href,target:"_blank",rel:"noopener noreferrer",className:C.a.footerLogoLink},r.a.createElement(F,{alt:s.alt,url:u})):r.a.createElement(F,{alt:s.alt,url:u})),l))):null};a(91);t.a=function(e){const{siteConfig:t={}}=Object(c.a)(),{favicon:a,tagline:n,title:i,themeConfig:{image:s},url:u}=t,{children:d,title:h,noFooter:m,description:f,image:p,keywords:v,permalink:g}=e,b=h||`${i} \xb7 ${n}`,E=p||s,k=u+Object(o.a)(E),y=Object(o.a)(a);return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null,r.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),b&&r.a.createElement("title",null,b),b&&r.a.createElement("meta",{property:"og:title",content:b}),a&&r.a.createElement("link",{rel:"shortcut icon",href:y}),f&&r.a.createElement("meta",{name:"description",content:f}),f&&r.a.createElement("meta",{property:"og:description",content:f}),v&&v.length&&r.a.createElement("meta",{name:"keywords",content:v.join(",")}),E&&r.a.createElement("meta",{property:"og:image",content:k}),E&&r.a.createElement("meta",{property:"twitter:image",content:k}),E&&r.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${b}`}),g&&r.a.createElement("meta",{property:"og:url",content:u+g}),r.a.createElement("meta",{name:"twitter:card",content:"summary"})),r.a.createElement(N,null),r.a.createElement("div",{className:"main-wrapper"},d),!m&&r.a.createElement(T,null))}},134:function(e,t,a){"use strict";var n=a(132);a.d(t,"a",(function(){return n.a}))},135:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),l=a(0),c=h(l),o=h(a(120)),i=h(a(6)),s=h(a(136)),u=h(a(137)),d=a(138);function h(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),l=(0,o.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return c.default.createElement("div",{className:l,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},c.default.createElement("div",{className:"react-toggle-track"},c.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),c.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),c.default.createElement("div",{className:"react-toggle-thumb"}),c.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(l.PureComponent);t.default=m,m.displayName="Toggle",m.defaultProps={icons:{checked:c.default.createElement(s.default,null),unchecked:c.default.createElement(u.default,null)}},m.propTypes={checked:i.default.bool,disabled:i.default.bool,defaultChecked:i.default.bool,onChange:i.default.func,onFocus:i.default.func,onBlur:i.default.func,className:i.default.string,name:i.default.string,value:i.default.string,id:i.default.string,"aria-labelledby":i.default.string,"aria-label":i.default.string,icons:i.default.oneOfType([i.default.bool,i.default.shape({checked:i.default.node,unchecked:i.default.node})])}},136:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),l=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return l.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},l.default.createElement("title",null,"switch-check"),l.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},137:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),l=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return l.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},l.default.createElement("title",null,"switch-x"),l.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},138:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}}}]);