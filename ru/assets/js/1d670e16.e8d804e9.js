"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[18],{1087:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var s=t(5893),o=t(1151);const i={sidebar_position:1},d="Setting Things Up - Part 1",r={id:"creating-blueprint-mods/mod-setup-1",title:"Setting Things Up - Part 1",description:"Where we left off would be Double-clicking Pal.uproject, You should see this screen",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/creating-blueprint-mods/mod-setup-1.md",sourceDirName:"creating-blueprint-mods",slug:"/creating-blueprint-mods/mod-setup-1",permalink:"/ru/docs/creating-blueprint-mods/mod-setup-1",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/creating-blueprint-mods/mod-setup-1.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Creating A Blueprint Mod",permalink:"/ru/docs/category/creating-a-blueprint-mod"},next:{title:"Asset Swapping",permalink:"/ru/docs/category/asset-swapping"}},l={},c=[{value:"ModActor Setup",id:"modactor-setup",level:2},{value:"ModActor Events",id:"modactor-events",level:2},{value:"Used Events",id:"used-events",level:3},{value:"Unused Events",id:"unused-events",level:3},{value:"ModActor Variables",id:"modactor-variables",level:2},{value:"Mod Strings",id:"mod-strings",level:3},{value:"Mod Buttons",id:"mod-buttons",level:3},{value:"Basic Example Of ModButtons &amp; PrintToModLoader",id:"basic-example-of-modbuttons--printtomodloader",level:3}];function a(e){const n={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"setting-things-up---part-1",children:"Setting Things Up - Part 1"}),"\n",(0,s.jsxs)(n.p,{children:["Where we left off would be Double-clicking ",(0,s.jsx)(n.code,{children:"Pal.uproject"}),", You should see this screen\r\n",(0,s.jsx)(n.img,{alt:"PDKNewProject",src:t(6292).Z+"",width:"1920",height:"1048"})]}),"\n",(0,s.jsx)(n.h2,{id:"modactor-setup",children:"ModActor Setup"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["In your ",(0,s.jsx)(n.code,{children:"Content Browser"})," If there isnt a folder named ",(0,s.jsx)(n.code,{children:"Content"})," make one."]}),"\n",(0,s.jsxs)(n.li,{children:["In ",(0,s.jsx)(n.code,{children:"Content"})," make a folder called ",(0,s.jsx)(n.code,{children:"Mods"})," This is where any mod we make will be at."]}),"\n",(0,s.jsxs)(n.li,{children:["Your folder structure should look similar below. (",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Ignoring dabzQOL and dabzReflex"})}),") ",(0,s.jsx)(n.img,{alt:"NewModStruct",src:t(6027).Z+"",width:"538",height:"234"})]}),"\n",(0,s.jsxs)(n.li,{children:["Create a folder in ",(0,s.jsx)(n.code,{children:"Mods"})," with the name you want your Mod's Pak file to be called. (In this case, I'll be using dabzReflex)"]}),"\n",(0,s.jsxs)(n.li,{children:["In that folder, We will be creating a new ",(0,s.jsx)(n.code,{children:"Blueprint Class"})," that is a ",(0,s.jsx)(n.code,{children:"Actor"}),". It will be called ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"ModActor"})})," ",(0,s.jsx)(n.img,{alt:"NewModActor",src:t(5384).Z+"",width:"616",height:"747"})]}),"\n",(0,s.jsxs)(n.li,{children:["Now your Content Browser should look like so, next double-click your ",(0,s.jsx)(n.code,{children:"ModActor"})," and make sure you are on the ",(0,s.jsx)(n.code,{children:"Event Graph"})," tab ",(0,s.jsx)(n.img,{alt:"NewActorMade",src:t(8450).Z+"",width:"720",height:"238"})]}),"\n",(0,s.jsx)(n.li,{children:"Now your ModActor is technically setup, there is some more information to know about it below though."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"modactor-events",children:"ModActor Events"}),"\n",(0,s.jsx)(n.h3,{id:"used-events",children:"Used Events"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"PreBeginPlay - This event is too early to use to initialize your mod. (Only Works In Mod Actor)"}),"\n",(0,s.jsxs)(n.li,{children:["PostBeginPlay - This event is fired when the Player Controller Begin Play is called (Only Works In Mod Actor)","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The suggested event to use for initializing most things in your mod."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["PrintToModLoader - Allows the ability to log to UE4SS Console through a blueprint.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["To use this event, Create a ",(0,s.jsx)(n.code,{children:"Custom Event"})," in your ",(0,s.jsx)(n.code,{children:"ModActor"})," called ",(0,s.jsx)(n.code,{children:"PrintToModLoader"})," exactly."]}),"\n",(0,s.jsxs)(n.li,{children:["Add a initial String variable to this event, called ",(0,s.jsx)(n.code,{children:"Message"}),". Leave the event alone now."]}),"\n",(0,s.jsxs)(n.li,{children:["You can now call a new function called ",(0,s.jsx)(n.code,{children:"Print To Mod Loader"})," anywhere."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"ModMenuButtonPressed - Used to enable ModButtons in UE4SS's mod list area. (Only Works In Mod Actor)"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"unused-events",children:"Unused Events"}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"These events shouldn't really be used!"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"EventBeginPlay"}),"\n",(0,s.jsx)(n.li,{children:"EventActorBeginOverlap"}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.p,{children:"Anything in the red box, should not be used."}),(0,s.jsx)(n.p,{children:"Anything in the green box, is suggested for use. (ModMenuButtonPressed is suggested for use, It's just not listed)"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"ModActorEvents",src:t(4274).Z+"",width:"716",height:"581"})}),"\n",(0,s.jsx)(n.h2,{id:"modactor-variables",children:"ModActor Variables"}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.p,{children:"ModActor variables are used to display information about your mod in UE4SS's loaded mod category."}),(0,s.jsx)(n.p,{children:"They are simply just variables added to your blueprint, that arnt used by your blueprint."}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"ModActorVars",src:t(5450).Z+"",width:"374",height:"220"})}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"ModActorVarsSetup",src:t(4675).Z+"",width:"444",height:"217"})})]}),"\n",(0,s.jsx)(n.h3,{id:"mod-strings",children:"Mod Strings"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"ModAuthor - Shows Author in UE4SS Mods panel"}),"\n",(0,s.jsx)(n.li,{children:"ModDescription - Shows Description for mod in UE4SS Mods Panel"}),"\n",(0,s.jsx)(n.li,{children:"ModVersion - Shows Version for mod in UE4SS Mods Panel"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"mod-buttons",children:"Mod Buttons"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Create a String Variable called ModButtons in your ModActor, In the properties panel change the following to the 6 squares in a box"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"ModButtonsArray",src:t(5953).Z+"",width:"468",height:"476"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Create a new custom event called ",(0,s.jsx)(n.code,{children:"ModMenuButtonPressed"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.img,{alt:"ModMenuButtonPressed",src:t(3795).Z+"",width:"304",height:"127"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Under the newly created event, Add a input variable that is a ",(0,s.jsx)(n.code,{children:"Integer"})," named ",(0,s.jsx)(n.code,{children:"Index"})," ",(0,s.jsx)(n.img,{alt:"ModMenuInt",src:t(6388).Z+"",width:"489",height:"368"})]}),"\n",(0,s.jsxs)(n.li,{children:["Next add a ",(0,s.jsx)(n.code,{children:"Switch on Int"})," action, connected to the ",(0,s.jsx)(n.code,{children:"ModMenuButtonPressed"})," event.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["For every single button you wish to have, you will add a pin to this ",(0,s.jsx)(n.code,{children:"Switch On Int"})]}),"\n",(0,s.jsxs)(n.li,{children:["Your pin's must match up to ",(0,s.jsx)(n.code,{children:"ModButtons String Array"})," ",(0,s.jsx)(n.img,{alt:"ModButtonSwitchOnInt",src:t(3479).Z+"",width:"806",height:"247"})]}),"\n",(0,s.jsxs)(n.li,{children:["When a ",(0,s.jsx)(n.code,{children:"ModButton"})," is clicked, it will send a Exec signal, through which ever integer is connected to it."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"basic-example-of-modbuttons--printtomodloader",children:"Basic Example Of ModButtons & PrintToModLoader"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Example",src:t(8661).Z+"",width:"1134",height:"543"})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},6027:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/ContentBrowserNewMod-f26aa46be4c2453963c1e8d50731fdea.png"},4274:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/ModActorEvents-440be08b0f7ef85567759b92dc5dbae9.png"},8450:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/ModActorMade-c6e33e74d0062364995acd1607f58c45.png"},5450:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/ModActorVariables-0c03b4b678e3c6fce1be35c7da8e078d.png"},4675:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/ModActorVariablesWorking-013a84ffa3a06bd95344528ce25cc476.png"},5953:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/ModButtonsArray-05d42c5c76e9911b061f93f92ff67a7c.png"},3795:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/ModMenuButtonPressed-785a0e8a070d103ed02f1f4f83223825.png"},3479:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/ModSwitchOnEvent-69bb2aeb1551a0cd531f8db1fa160d88.png"},6388:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/MonMenuButtonPRessedInt-aaedc8521031257bafc9b9543e0cc1a4.png"},5384:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/NewModActor-a569132f8f307f54f5dbd43d0faa989e.png"},6292:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/NewPMKInstance-a94408301a3a545ab83858b84c297654.png"},8661:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/example-bef74471c445053a22ec678e8506a8bc.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>d});var s=t(7294);const o={},i=s.createContext(o);function d(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);