"use strict";(self.webpackChunkvinci_docs=self.webpackChunkvinci_docs||[]).push([[794],{6132:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>x,frontMatter:()=>a,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"api-reference/tts","title":"Text to Speech","description":"Generate natural speech from text using Vinci\'s TTS API","source":"@site/docs/api-reference/tts.mdx","sourceDirName":"api-reference","slug":"/api-reference/tts","permalink":"/api-reference/tts","draft":false,"unlisted":false,"editUrl":"https://github.com/tryvinci/docs/edit/main/docs/api-reference/tts.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"Text to Speech","description":"Generate natural speech from text using Vinci\'s TTS API","sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"Text Translation","permalink":"/api-reference/translate"},"next":{"title":"Voice Conversion","permalink":"/api-reference/voice"}}');var t=s(4848),r=s(8453),c=s(5537),d=s(9329);s(8069),s(2362);const a={title:"Text to Speech",description:"Generate natural speech from text using Vinci's TTS API",sidebar_position:4},o="Text to Speech",l={},h=[{value:"Overview",id:"overview",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Endpoint",id:"endpoint",level:3},{value:"Headers",id:"headers",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response",id:"response",level:3},{value:"Code Examples",id:"code-examples",level:2},{value:"Voice Options",id:"voice-options",level:2},{value:"Best Practices",id:"best-practices",level:2}];function p(e){const i={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components},{Details:s}=i;return s||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"text-to-speech",children:"Text to Speech"})}),"\n",(0,t.jsx)(i.p,{children:"Convert text into natural-sounding speech with customizable voices and emotional delivery."}),"\n",(0,t.jsxs)("div",{className:"card",children:[(0,t.jsx)("div",{className:"card__header",children:(0,t.jsx)("h3",{children:"Try it out"})}),(0,t.jsx)("div",{className:"card__body",children:(0,t.jsx)(i.p,{children:"Test the Text to Speech API directly in your browser with our interactive playground."})})]}),"\n",(0,t.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(i.p,{children:"The Text to Speech API converts text into high-quality audio using advanced neural voice models. It supports multiple languages, voices, and emotional styles."}),"\n",(0,t.jsx)(i.h2,{id:"api-reference",children:"API Reference"}),"\n",(0,t.jsx)(i.h3,{id:"endpoint",children:"Endpoint"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-http",children:"POST https://api.tryvinci.com/vincitts\n"})}),"\n",(0,t.jsx)(i.h3,{id:"headers",children:"Headers"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Name"}),(0,t.jsx)(i.th,{children:"Type"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsx)(i.tbody,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"X-User-ID"}),(0,t.jsx)(i.td,{children:"string"}),(0,t.jsx)(i.td,{children:"Required. Your user ID"})]})})]}),"\n",(0,t.jsx)(i.h3,{id:"request-parameters",children:"Request Parameters"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Parameter"}),(0,t.jsx)(i.th,{children:"Type"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"text"}),(0,t.jsx)(i.td,{children:"string"}),(0,t.jsx)(i.td,{children:"The text to convert to speech"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"voice_id"}),(0,t.jsx)(i.td,{children:"string"}),(0,t.jsx)(i.td,{children:"The ID of the voice to use"})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"response",children:"Response"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-typescript",children:'{\n  url: string,        // URL to the generated audio file\n  media_type: string, // "audio/wav"\n  user_id: string    // The user ID used for the request\n}\n'})}),"\n",(0,t.jsx)(i.h2,{id:"code-examples",children:"Code Examples"}),"\n",(0,t.jsxs)(c.A,{children:[(0,t.jsx)(d.A,{value:"python",label:"Python",default:!0,children:(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-python",children:'import requests\n\nurl = "https://api.tryvinci.com/vincitts"\nheaders = {"X-User-ID": "your-user-id"}\ndata = {\n    "text": "Welcome to Vinci AI Studio!",\n    "voice_id": "voice_1"\n}\n\nresponse = requests.post(url, headers=headers, data=data)\nresult = response.json()\nprint(f"Audio URL: {result[\'url\']}")\n'})})}),(0,t.jsx)(d.A,{value:"javascript",label:"JavaScript",children:(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-javascript",children:"const response = await fetch('https://api.tryvinci.com/vincitts', {\n  method: 'POST',\n  headers: {\n    'X-User-ID': 'your-user-id',\n    'Content-Type': 'application/json',\n  },\n  body: JSON.stringify({\n    text: 'Welcome to Vinci AI Studio!',\n    voice_id: 'voice_1',\n  }),\n});\n\nconst result = await response.json();\nconsole.log(`Audio URL: ${result.url}`);\n"})})})]}),"\n",(0,t.jsx)(i.h2,{id:"voice-options",children:"Voice Options"}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Available Voices"}),(0,t.jsx)("div",{children:(0,t.jsx)(i.p,{children:"Choose from our library of pre-trained voices or use custom voice cloning."})})]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Language Support"}),(0,t.jsx)("div",{children:(0,t.jsx)(i.p,{children:"Supports 32+ languages with native-speaking voices."})})]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Voice Customization"}),(0,t.jsx)("div",{children:(0,t.jsx)(i.p,{children:"Control speech rate, pitch, and emotional style."})})]}),"\n",(0,t.jsx)(i.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col col--6",children:(0,t.jsxs)("div",{className:"card",children:[(0,t.jsx)("div",{className:"card__header",children:(0,t.jsx)("h3",{children:"Text Formatting"})}),(0,t.jsx)("div",{className:"card__body",children:(0,t.jsx)(i.p,{children:"Use punctuation to control pacing and intonation."})})]})}),(0,t.jsx)("div",{className:"col col--6",children:(0,t.jsxs)("div",{className:"card",children:[(0,t.jsx)("div",{className:"card__header",children:(0,t.jsx)("h3",{children:"Audio Quality"})}),(0,t.jsx)("div",{className:"card__body",children:(0,t.jsx)(i.p,{children:"Higher quality options available for professional use."})})]})})]}),"\n",(0,t.jsx)(i.admonition,{title:"Performance",type:"tip",children:(0,t.jsx)(i.p,{children:"For real-time applications, use our optimized streaming endpoint with 75ms latency."})})]})}function x(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}}}]);