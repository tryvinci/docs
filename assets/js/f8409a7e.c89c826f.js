"use strict";(self.webpackChunkvinci_docs=self.webpackChunkvinci_docs||[]).push([[903],{8189:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>n,toc:()=>t});const n=JSON.parse('{"id":"intro","title":"Vinci AI Studio","description":"AI-powered video and audio manipulation platform","source":"@site/docs/intro.mdx","sourceDirName":".","slug":"/intro","permalink":"/docs/intro","draft":false,"unlisted":false,"editUrl":"https://github.com/tryvinci/docs/edit/main/docs/intro.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Vinci AI Studio","description":"AI-powered video and audio manipulation platform","sidebar_position":1,"slug":"/intro"},"sidebar":"tutorialSidebar","next":{"title":"Speech to Text","permalink":"/docs/api-reference/stt"}}');var r=s(4848),a=s(8453);s(5537),s(9329),s(8069),s(2362);const c={title:"Vinci AI Studio",description:"AI-powered video and audio manipulation platform",sidebar_position:1,slug:"/intro"},d="Welcome to Vinci AI Studio",l={},t=[{value:"Core Features",id:"core-features",level:2},{value:"Available APIs",id:"available-apis",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Resources",id:"resources",level:2}];function o(e){const i={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"welcome-to-vinci-ai-studio",children:"Welcome to Vinci AI Studio"})}),"\n",(0,r.jsx)(i.p,{children:"Transform your video and audio content with our powerful AI APIs. Vinci AI Studio provides a comprehensive suite of tools for speech processing, voice conversion, and video manipulation."}),"\n",(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col col--6",children:(0,r.jsxs)("div",{className:"card",children:[(0,r.jsx)("div",{className:"card__header",children:(0,r.jsx)("h3",{children:"Quick Start"})}),(0,r.jsx)("div",{className:"card__body",children:(0,r.jsx)(i.p,{children:"Get started with Vinci AI Studio in minutes."})})]})}),(0,r.jsx)("div",{className:"col col--6",children:(0,r.jsxs)("div",{className:"card",children:[(0,r.jsx)("div",{className:"card__header",children:(0,r.jsx)("h3",{children:"API Reference"})}),(0,r.jsx)("div",{className:"card__body",children:(0,r.jsx)(i.p,{children:"Detailed API documentation for developers."})})]})})]}),"\n",(0,r.jsx)(i.h2,{id:"core-features",children:"Core Features"}),"\n",(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col col--4",children:(0,r.jsxs)("div",{className:"card",children:[(0,r.jsx)("div",{className:"card__header",children:(0,r.jsx)("h3",{children:"Speech Processing"})}),(0,r.jsx)("div",{className:"card__body",children:(0,r.jsx)(i.p,{children:"Convert speech to text and text to speech with natural-sounding voices."})})]})}),(0,r.jsx)("div",{className:"col col--4",children:(0,r.jsxs)("div",{className:"card",children:[(0,r.jsx)("div",{className:"card__header",children:(0,r.jsx)("h3",{children:"Voice Conversion"})}),(0,r.jsx)("div",{className:"card__body",children:(0,r.jsx)(i.p,{children:"Transform voices while maintaining natural intonation and emotion."})})]})}),(0,r.jsx)("div",{className:"col col--4",children:(0,r.jsxs)("div",{className:"card",children:[(0,r.jsx)("div",{className:"card__header",children:(0,r.jsx)("h3",{children:"Video Manipulation"})}),(0,r.jsx)("div",{className:"card__body",children:(0,r.jsx)(i.p,{children:"Create lip-synced videos and talking head animations."})})]})})]}),"\n",(0,r.jsx)(i.h2,{id:"available-apis",children:"Available APIs"}),"\n",(0,r.jsx)(i.p,{children:"Our REST APIs enable you to:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Speech to Text"})," - Convert audio/video to accurate text transcriptions"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Text Translation"})," - Translate content across multiple languages"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Text to Speech"})," - Generate natural-sounding speech from text"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Voice Conversion"})," - Transform voices to match target speakers"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Lip Sync"})," - Create perfectly synchronized talking head videos"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Live Portrait"})," - Generate talking animations from still images"]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsx)(i.li,{children:"Sign up for a Vinci AI Studio account"}),"\n",(0,r.jsx)(i.li,{children:"Get your API credentials"}),"\n",(0,r.jsx)(i.li,{children:"Make your first API call"}),"\n"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-python",metastring:'title="Quick example"',children:'import requests\n\n# Initialize with your credentials\nheaders = {"X-User-ID": "your-user-id"}\n\n# Convert speech to text\nfiles = {"file": open("video.mp4", "rb")}\nresponse = requests.post(\n    "https://api.tryvinci.com/vincistt",\n    headers=headers,\n    files=files\n)\n\nprint(response.json()["text"])\n'})}),"\n",(0,r.jsx)(i.h2,{id:"resources",children:"Resources"}),"\n",(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col col--6",children:(0,r.jsxs)("a",{className:"card",href:"/api-reference/stt",children:[(0,r.jsx)("div",{className:"card__header",children:(0,r.jsx)("h3",{children:"API Reference"})}),(0,r.jsx)("div",{className:"card__body",children:(0,r.jsx)(i.p,{children:"Detailed documentation for all Vinci APIs"})})]})}),(0,r.jsx)("div",{className:"col col--6",children:(0,r.jsxs)("a",{className:"card",href:"/examples",children:[(0,r.jsx)("div",{className:"card__header",children:(0,r.jsx)("h3",{children:"Examples"})}),(0,r.jsx)("div",{className:"card__body",children:(0,r.jsx)(i.p,{children:"Code examples and use cases"})})]})})]})]})}function h(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}}}]);