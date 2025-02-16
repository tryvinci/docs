"use strict";(self.webpackChunkvinci_docs=self.webpackChunkvinci_docs||[]).push([[401],{5296:(e,t,n)=>{n.r(t),n.d(t,{default:()=>st});var s=n(6540),a=n(1769),i=n(6849),l=n(4848);const o=s.createContext(null);function r(e){let{children:t,content:n}=e;const a=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,l.jsx)(o.Provider,{value:a,children:t})}function c(){const e=(0,s.useContext)(o);if(null===e)throw new i.dV("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:n}=c();return(0,l.jsx)(a.be,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var u=n(4164),m=n(6682),h=n(539),x=n(6289);function p(e){const{permalink:t,title:n,subLabel:s,isNext:a}=e;return(0,l.jsxs)(x.A,{className:(0,u.A)("pagination-nav__link",a?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[s&&(0,l.jsx)("div",{className:"pagination-nav__sublabel",children:s}),(0,l.jsx)("div",{className:"pagination-nav__label",children:n})]})}function b(e){const{previous:t,next:n}=e;return(0,l.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,h.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,l.jsx)(p,{...t,subLabel:(0,l.jsx)(h.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,l.jsx)(p,{...n,subLabel:(0,l.jsx)(h.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function f(){const{metadata:e}=c();return(0,l.jsx)(b,{previous:e.previous,next:e.next})}var v=n(797),g=n(6942),j=n(204),A=n(6351),N=n(1858);const C={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,l.jsx)(h.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,l.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,l.jsx)(h.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,l.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function _(e){const t=C[e.versionMetadata.banner];return(0,l.jsx)(t,{...e})}function L(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,l.jsx)(h.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,l.jsx)("b",{children:(0,l.jsx)(x.A,{to:n,onClick:s,children:(0,l.jsx)(h.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function T(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:s}}=(0,v.A)(),{pluginId:a}=(0,g.vT)({failfast:!0}),{savePreferredVersionName:i}=(0,A.g1)(a),{latestDocSuggestion:o,latestVersionSuggestion:r}=(0,g.HW)(a),c=o??(d=r).docs.find((e=>e.id===d.mainDocId));var d;return(0,l.jsxs)("div",{className:(0,u.A)(t,j.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,l.jsx)("div",{children:(0,l.jsx)(_,{siteTitle:s,versionMetadata:n})}),(0,l.jsx)("div",{className:"margin-top--md",children:(0,l.jsx)(L,{versionLabel:r.label,to:c.path,onClick:()=>i(r.name)})})]})}function y(e){let{className:t}=e;const n=(0,N.r)();return n.banner?(0,l.jsx)(T,{className:t,versionMetadata:n}):null}function k(e){let{className:t}=e;const n=(0,N.r)();return n.badge?(0,l.jsx)("span",{className:(0,u.A)(t,j.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,l.jsx)(h.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}const H={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function w(e){let{permalink:t,label:n,count:s,description:a}=e;return(0,l.jsxs)(x.A,{href:t,title:a,className:(0,u.A)(H.tag,s?H.tagWithCount:H.tagRegular),children:[n,s&&(0,l.jsx)("span",{children:s})]})}const U={tags:"tags_jXut",tag:"tag_QGVx"};function M(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(h.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,u.A)(U.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,l.jsx)("li",{className:U.tag,children:(0,l.jsx)(w,{...e})},e.permalink)))})]})}const B={iconEdit:"iconEdit_Z9Sw"};function E(e){let{className:t,...n}=e;return(0,l.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,u.A)(B.iconEdit,t),"aria-hidden":"true",...n,children:(0,l.jsx)("g",{children:(0,l.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function I(e){let{editUrl:t}=e;return(0,l.jsxs)(x.A,{to:t,className:j.G.common.editThisPage,children:[(0,l.jsx)(E,{}),(0,l.jsx)(h.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}function V(e){void 0===e&&(e={});const{i18n:{currentLocale:t}}=(0,v.A)(),n=function(){const{i18n:{currentLocale:e,localeConfigs:t}}=(0,v.A)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:n,...e})}function S(e){let{lastUpdatedAt:t}=e;const n=new Date(t),s=V({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(n);return(0,l.jsx)(h.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,l.jsx)("b",{children:(0,l.jsx)("time",{dateTime:n.toISOString(),itemProp:"dateModified",children:s})})},children:" on {date}"})}function D(e){let{lastUpdatedBy:t}=e;return(0,l.jsx)(h.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,l.jsx)("b",{children:t})},children:" by {user}"})}function O(e){let{lastUpdatedAt:t,lastUpdatedBy:n}=e;return(0,l.jsxs)("span",{className:j.G.common.lastUpdated,children:[(0,l.jsx)(h.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t?(0,l.jsx)(S,{lastUpdatedAt:t}):"",byUser:n?(0,l.jsx)(D,{lastUpdatedBy:n}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const G={lastUpdated:"lastUpdated_JAkA"};function P(e){let{className:t,editUrl:n,lastUpdatedAt:s,lastUpdatedBy:a}=e;return(0,l.jsxs)("div",{className:(0,u.A)("row",t),children:[(0,l.jsx)("div",{className:"col",children:n&&(0,l.jsx)(I,{editUrl:n})}),(0,l.jsx)("div",{className:(0,u.A)("col",G.lastUpdated),children:(s||a)&&(0,l.jsx)(O,{lastUpdatedAt:s,lastUpdatedBy:a})})]})}function R(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s,tags:a}=e,i=a.length>0,o=!!(t||n||s);return i||o?(0,l.jsxs)("footer",{className:(0,u.A)(j.G.docs.docFooter,"docusaurus-mt-lg"),children:[i&&(0,l.jsx)("div",{className:(0,u.A)("row margin-top--sm",j.G.docs.docFooterTagsRow),children:(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(M,{tags:a})})}),o&&(0,l.jsx)(P,{className:(0,u.A)("margin-top--sm",j.G.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s})]}):null}var F=n(3535),z=n(3115);function q(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t}));const s=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):s.push(a)})),s}function W(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return t.flatMap((e=>{const t=W({toc:e.children,minHeadingLevel:n,maxHeadingLevel:s});return function(e){return e.level>=n&&e.level<=s}(e)?[{...e,children:t}]:t}))}function Z(e){const t=e.getBoundingClientRect();return t.top===t.bottom?Z(e.parentNode):t}function $(e,t){let{anchorTopOffset:n}=t;const s=e.find((e=>Z(e).top>=n));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(Z(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function Y(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,z.p)();return(0,s.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function J(e){const t=(0,s.useRef)(void 0),n=Y();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:a,minHeadingLevel:i,maxHeadingLevel:l}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),o=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const s=[];for(let a=t;a<=n;a+=1)s.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:i,maxHeadingLevel:l}),r=$(o,{anchorTopOffset:n.current}),c=e.find((e=>r&&r.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===c)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}function Q(e){let{toc:t,className:n,linkClassName:s,isChild:a}=e;return t.length?(0,l.jsx)("ul",{className:a?void 0:n,children:t.map((e=>(0,l.jsxs)("li",{children:[(0,l.jsx)(x.A,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,l.jsx)(Q,{isChild:!0,toc:e.children,className:n,linkClassName:s})]},e.id)))}):null}const X=s.memo(Q);function K(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:i,minHeadingLevel:o,maxHeadingLevel:r,...c}=e;const d=(0,z.p)(),u=o??d.tableOfContents.minHeadingLevel,m=r??d.tableOfContents.maxHeadingLevel,h=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,s.useMemo)((()=>W({toc:q(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:u,maxHeadingLevel:m});return J((0,s.useMemo)((()=>{if(a&&i)return{linkClassName:a,linkActiveClassName:i,minHeadingLevel:u,maxHeadingLevel:m}}),[a,i,u,m])),(0,l.jsx)(X,{toc:h,className:n,linkClassName:a,...c})}const ee={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function te(e){let{collapsed:t,...n}=e;return(0,l.jsx)("button",{type:"button",...n,className:(0,u.A)("clean-btn",ee.tocCollapsibleButton,!t&&ee.tocCollapsibleButtonExpanded,n.className),children:(0,l.jsx)(h.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const ne={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function se(e){let{toc:t,className:n,minHeadingLevel:s,maxHeadingLevel:a}=e;const{collapsed:i,toggleCollapsed:o}=(0,F.u)({initialState:!0});return(0,l.jsxs)("div",{className:(0,u.A)(ne.tocCollapsible,!i&&ne.tocCollapsibleExpanded,n),children:[(0,l.jsx)(te,{collapsed:i,onClick:o}),(0,l.jsx)(F.N,{lazy:!0,className:ne.tocCollapsibleContent,collapsed:i,children:(0,l.jsx)(K,{toc:t,minHeadingLevel:s,maxHeadingLevel:a})})]})}const ae={tocMobile:"tocMobile_ITEo"};function ie(){const{toc:e,frontMatter:t}=c();return(0,l.jsx)(se,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.A)(j.G.docs.docTocMobile,ae.tocMobile)})}const le={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},oe="table-of-contents__link toc-highlight",re="table-of-contents__link--active";function ce(e){let{className:t,...n}=e;return(0,l.jsx)("div",{className:(0,u.A)(le.tableOfContents,"thin-scrollbar",t),children:(0,l.jsx)(K,{...n,linkClassName:oe,linkActiveClassName:re})})}function de(){const{toc:e,frontMatter:t}=c();return(0,l.jsx)(ce,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:j.G.docs.docTocDesktop})}var ue=n(9303),me=n(8453),he=n(7143),xe=n(8069);function pe(e){return(0,l.jsx)("code",{...e})}var be=n(5246),fe=n(9136);const ve="details_lb9f",ge="isBrowser_bmU9",je="collapsibleContent_i85q";function Ae(e){return!!e&&("SUMMARY"===e.tagName||Ae(e.parentElement))}function Ne(e,t){return!!e&&(e===t||Ne(e.parentElement,t))}function Ce(e){let{summary:t,children:n,...a}=e;(0,be.A)().collectAnchor(a.id);const i=(0,fe.A)(),o=(0,s.useRef)(null),{collapsed:r,setCollapsed:c}=(0,F.u)({initialState:!a.open}),[d,m]=(0,s.useState)(a.open),h=s.isValidElement(t)?t:(0,l.jsx)("summary",{children:t??"Details"});return(0,l.jsxs)("details",{...a,ref:o,open:d,"data-collapsed":r,className:(0,u.A)(ve,i&&ge,a.className),onMouseDown:e=>{Ae(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;Ae(t)&&Ne(t,o.current)&&(e.preventDefault(),r?(c(!1),m(!0)):c(!0))},children:[h,(0,l.jsx)(F.N,{lazy:!1,collapsed:r,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{c(e),m(!e)},children:(0,l.jsx)("div",{className:je,children:n})})]})}const _e="details_b_Ee";function Le(e){let{...t}=e;return(0,l.jsx)(Ce,{...t,className:(0,u.A)("alert alert--info",_e,t.className)})}function Te(e){const t=s.Children.toArray(e.children),n=t.find((e=>s.isValidElement(e)&&"summary"===e.type)),a=(0,l.jsx)(l.Fragment,{children:t.filter((e=>e!==n))});return(0,l.jsx)(Le,{...e,summary:n,children:a})}function ye(e){return(0,l.jsx)(ue.A,{...e})}const ke="containsTaskList_mC6p";function He(e){if(void 0!==e)return(0,u.A)(e,e?.includes("contains-task-list")&&ke)}const we="img_ev3q";var Ue=n(2362),Me=n(205);const Be={Head:he.A,details:Te,Details:Te,code:function(e){return function(e){return void 0!==e.children&&s.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))}(e)?(0,l.jsx)(pe,{...e}):(0,l.jsx)(xe.A,{...e})},a:function(e){return(0,l.jsx)(x.A,{...e})},pre:function(e){return(0,l.jsx)(l.Fragment,{children:e.children})},ul:function(e){return(0,l.jsx)("ul",{...e,className:He(e.className)})},li:function(e){return(0,be.A)().collectAnchor(e.id),(0,l.jsx)("li",{...e})},img:function(e){return(0,l.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(t=e.className,(0,u.A)(t,we))});var t},h1:e=>(0,l.jsx)(ye,{as:"h1",...e}),h2:e=>(0,l.jsx)(ye,{as:"h2",...e}),h3:e=>(0,l.jsx)(ye,{as:"h3",...e}),h4:e=>(0,l.jsx)(ye,{as:"h4",...e}),h5:e=>(0,l.jsx)(ye,{as:"h5",...e}),h6:e=>(0,l.jsx)(ye,{as:"h6",...e}),admonition:Ue.A,mermaid:Me.A};function Ee(e){let{children:t}=e;return(0,l.jsx)(me.x,{components:Be,children:t})}function Ie(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return(0,l.jsxs)("div",{className:(0,u.A)(j.G.docs.docMarkdown,"markdown"),children:[n&&(0,l.jsx)("header",{children:(0,l.jsx)(ue.A,{as:"h1",children:n})}),(0,l.jsx)(Ee,{children:t})]})}var Ve=n(3751),Se=n(214),De=n(9030);function Oe(e){return(0,l.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,l.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const Ge={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function Pe(){const e=(0,De.Ay)("/");return(0,l.jsx)("li",{className:"breadcrumbs__item",children:(0,l.jsx)(x.A,{"aria-label":(0,h.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,l.jsx)(Oe,{className:Ge.breadcrumbHomeIcon})})})}const Re={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function Fe(e){let{children:t,href:n,isLast:s}=e;const a="breadcrumbs__link";return s?(0,l.jsx)("span",{className:a,itemProp:"name",children:t}):n?(0,l.jsx)(x.A,{className:a,href:n,itemProp:"item",children:(0,l.jsx)("span",{itemProp:"name",children:t})}):(0,l.jsx)("span",{className:a,children:t})}function ze(e){let{children:t,active:n,index:s,addMicrodata:a}=e;return(0,l.jsxs)("li",{...a&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,u.A)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,l.jsx)("meta",{itemProp:"position",content:String(s+1)})]})}function qe(){const e=(0,Ve.OF)(),t=(0,Se.Dt)();return e?(0,l.jsx)("nav",{className:(0,u.A)(j.G.docs.docBreadcrumbs,Re.breadcrumbsContainer),"aria-label":(0,h.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,l.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,l.jsx)(Pe,{}),e.map(((t,n)=>{const s=n===e.length-1,a="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,l.jsx)(ze,{active:s,index:n,addMicrodata:!!a,children:(0,l.jsx)(Fe,{href:a,isLast:s,children:t.label})},n)}))]})}):null}function We(){return(0,l.jsx)(h.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function Ze(){return(0,l.jsx)(h.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function $e(){return(0,l.jsx)(he.A,{children:(0,l.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function Ye(){return(0,l.jsx)(h.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function Je(){return(0,l.jsx)(h.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}function Qe(e){let{className:t}=e;return(0,l.jsx)(Ue.A,{type:"caution",title:(0,l.jsx)(Ye,{}),className:(0,u.A)(t,j.G.common.draftBanner),children:(0,l.jsx)(Je,{})})}function Xe(e){let{className:t}=e;return(0,l.jsx)(Ue.A,{type:"caution",title:(0,l.jsx)(We,{}),className:(0,u.A)(t,j.G.common.unlistedBanner),children:(0,l.jsx)(Ze,{})})}function Ke(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)($e,{}),(0,l.jsx)(Xe,{...e})]})}function et(e){let{metadata:t}=e;const{unlisted:n,frontMatter:s}=t;return(0,l.jsxs)(l.Fragment,{children:[(n||s.unlisted)&&(0,l.jsx)(Ke,{}),s.draft&&(0,l.jsx)(Qe,{})]})}const tt={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function nt(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=c(),n=(0,m.l)(),s=e.hide_table_of_contents,a=!s&&t.length>0;return{hidden:s,mobile:a?(0,l.jsx)(ie,{}):void 0,desktop:!a||"desktop"!==n&&"ssr"!==n?void 0:(0,l.jsx)(de,{})}}(),{metadata:s}=c();return(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:(0,u.A)("col",!n.hidden&&tt.docItemCol),children:[(0,l.jsx)(et,{metadata:s}),(0,l.jsx)(y,{}),(0,l.jsxs)("div",{className:tt.docItemContainer,children:[(0,l.jsxs)("article",{children:[(0,l.jsx)(qe,{}),(0,l.jsx)(k,{}),n.mobile,(0,l.jsx)(Ie,{children:t}),(0,l.jsx)(R,{})]}),(0,l.jsx)(f,{})]})]}),n.desktop&&(0,l.jsx)("div",{className:"col col--3",children:n.desktop})]})}function st(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,l.jsx)(r,{content:e.content,children:(0,l.jsxs)(a.e3,{className:t,children:[(0,l.jsx)(d,{}),(0,l.jsx)(nt,{children:(0,l.jsx)(n,{})})]})})}}}]);