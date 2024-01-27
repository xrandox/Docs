"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[228],{7028:(e,A,o)=>{o.r(A),o.d(A,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>r});var n=o(5893),t=o(1151);const s={sidebar_position:4},a="Exporting The Project",i={id:"palworld-modding-kit/congratulations",title:"Exporting The Project",description:"Make Sure These Two Settings Have Been Enabled EditorPrefExp ProjectSettingsPackaging",source:"@site/docs/palworld-modding-kit/congratulations.md",sourceDirName:"palworld-modding-kit",slug:"/palworld-modding-kit/congratulations",permalink:"/docs/palworld-modding-kit/congratulations",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/palworld-modding-kit/congratulations.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Launching The PDK - Part 3",permalink:"/docs/palworld-modding-kit/launching-the-pdk"},next:{title:"Creating A Blueprint Mod",permalink:"/docs/category/creating-a-blueprint-mod"}},d={},r=[];function g(e){const A={admonition:"admonition",code:"code",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,t.a)(),...e.components},{Details:s}=A;return s||function(e,A){throw new Error("Expected "+(A?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(A.h1,{id:"exporting-the-project",children:"Exporting The Project"}),"\n",(0,n.jsx)(A.admonition,{type:"note",children:(0,n.jsxs)(A.p,{children:["Make Sure These Two Settings Have Been Enabled ",(0,n.jsx)(A.img,{alt:"EditorPrefExp",src:o(5899).Z+"",width:"1099",height:"718"})," ",(0,n.jsx)(A.img,{alt:"ProjectSettingsPackaging",src:o(8006).Z+"",width:"1103",height:"557"})]})}),"\n",(0,n.jsxs)(A.ol,{children:["\n",(0,n.jsx)(A.li,{children:"Create a Data Asset ( Primary Asset Label ) named after your mod name in your Contents folder. Set the priority to 1, and the Chunk ID to a memorable ID."}),"\n",(0,n.jsx)(A.li,{children:"Set your Mods  (ModActor and any other Assets you are going to include in your mod) Chunk ID to the same you used above."}),"\n",(0,n.jsxs)(A.li,{children:["Go into ",(0,n.jsx)(A.strong,{children:"Project Settings -> Assets Manager"})," and verify your settings are similar below ( Make sure the rules match the primary asset label you made ) ",(0,n.jsx)(A.img,{alt:"AssetsManagerSettings",src:o(1904).Z+"",width:"1211",height:"764"})]}),"\n",(0,n.jsxs)(A.li,{children:["Once all Chunk ID's match on each mod file you are including, you can package your project ",(0,n.jsx)(A.img,{alt:"Package button",src:o(4825).Z+"",width:"764",height:"554"})]}),"\n",(0,n.jsxs)(A.li,{children:["You should have ",(0,n.jsx)(A.code,{children:"pakchunk{Your Chunk ID}-Windows.pak"})," in the Paks output folder. Rename that to the mod name. There's your packaged mod!"]}),"\n"]}),"\n",(0,n.jsxs)(s,{children:[(0,n.jsx)("summary",{children:"If you only get 'pakchunk0-Windows.pak' instead of your memorable ID"}),(0,n.jsx)("div",{children:(0,n.jsxs)(A.p,{children:["Go into ",(0,n.jsx)(A.strong,{children:"Project Settings -> Packaging"}),(0,n.jsx)("br",{}),'\r\nThen tick "Cook everything in the project content directory(ignore list of maps below)"',(0,n.jsx)("br",{}),"\r\n",(0,n.jsx)(A.img,{src:"https://github.com/localcc/PalworldModdingKit/assets/10259891/c06cb6c6-8e2c-4560-bb1d-22f10f7563ad",alt:"image (5)"})]})})]}),"\n",(0,n.jsxs)(A.admonition,{type:"tip",children:[(0,n.jsxs)(A.p,{children:["Remember to enable BPModLoader in the ",(0,n.jsx)(A.code,{children:"Palworld\\Pal\\Binaries\\Win64\\Mods\\mods.txt"})," for UE4SS"]}),(0,n.jsx)(A.p,{children:(0,n.jsx)(A.img,{alt:"BPModLoader",src:o(2616).Z+"",width:"282",height:"238"})})]})]})}function c(e={}){const{wrapper:A}={...(0,t.a)(),...e.components};return A?(0,n.jsx)(A,{...e,children:(0,n.jsx)(g,{...e})}):g(e)}},1904:(e,A,o)=>{o.d(A,{Z:()=>n});const n=o.p+"assets/images/AssetsManagerSettings-19c07c03b8cf5fb0929ec313b798b0e1.png"},2616:(e,A,o)=>{o.d(A,{Z:()=>n});const n="data:image/png;base64,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"},5899:(e,A,o)=>{o.d(A,{Z:()=>n});const n=o.p+"assets/images/EditorPrefrencesExperimental-3178125ee31d0052c6249e9a81a78b37.png"},8006:(e,A,o)=>{o.d(A,{Z:()=>n});const n=o.p+"assets/images/ProjectSettingsPackaging-b2034e2db28070a1f0d54f4aefeebf84.png"},4825:(e,A,o)=>{o.d(A,{Z:()=>n});const n=o.p+"assets/images/UEPackageButton-86ce119d7494de215fdf612e66e12404.png"},1151:(e,A,o)=>{o.d(A,{Z:()=>i,a:()=>a});var n=o(7294);const t={},s=n.createContext(t);function a(e){const A=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(A):{...A,...e}}),[A,e])}function i(e){let A;return A=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),n.createElement(s.Provider,{value:A},e.children)}}}]);