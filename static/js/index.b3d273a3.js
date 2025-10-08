(()=>{"use strict";var e,t,o,a,n={5248:function(e,t,o){var a=o(4848),n=o(6540),i=o(5338),h=o(6700),r=o(5018),s=o(3048),l=o(2406),d=o(5615);let u=async()=>{try{if("caches"in window){let e=await caches.keys();await Promise.all(e.map(e=>caches.delete(e))),console.log("✅ Service worker cache cleared")}if("serviceWorker"in navigator){let e=await navigator.serviceWorker.getRegistration();if(e)e.waiting&&e.waiting.postMessage({type:"SKIP_WAITING"}),await e.update(),console.log("✅ Service worker updated");else{let e=await navigator.serviceWorker.getRegistrations();await Promise.all(e.map(e=>e.unregister())),await navigator.serviceWorker.register("/zelda-walkthroughs/sw.js"),console.log("✅ Service worker re-registered")}}window.location.reload()}catch(e){throw console.error("❌ Error clearing cache:",e),e}},c=()=>{let e=(0,n.useId)(),[t,o]=(0,n.useState)(!1),i=async()=>{try{if(!await new Promise(e=>{e(window.confirm("This will refresh the app and download the latest version. Your progress and settings will be preserved. Continue?"))}))return;o(!0),await u()}catch(e){console.error("Failed to refresh app:",e),alert("Failed to refresh the app. Please try again."),o(!1)}};return(0,a.jsx)(r.A,{variant:"dark",expand:"lg",className:"mb-4",children:(0,a.jsxs)(s.A,{children:[(0,a.jsx)(r.A.Brand,{as:h.N_,to:"/",className:"triforce-accent",children:"Zelda Walkthroughs"}),(0,a.jsx)(r.A.Toggle,{"aria-controls":e}),(0,a.jsx)(r.A.Collapse,{id:e,children:(0,a.jsxs)(l.A,{className:"ms-auto",children:[(0,a.jsx)(l.A.Link,{as:h.N_,to:"/",children:"Home"}),(0,a.jsx)(l.A.Link,{href:"#games",children:"Games"}),(0,a.jsx)(l.A.Link,{href:"#guides",children:"Guides"}),(window.matchMedia("(display-mode: standalone)").matches||!0===window.navigator.standalone||document.referrer.includes("android-app://"))&&(0,a.jsx)(l.A.Item,{className:"d-flex align-items-center",children:(0,a.jsx)(d.A,{variant:"outline-light",size:"sm",onClick:i,disabled:t,className:"ms-2",title:"Refresh app and download updates",children:t?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:"spinner-border spinner-border-sm me-1","aria-hidden":"true"}),"Refreshing..."]}):(0,a.jsx)(a.Fragment,{children:"\uD83D\uDD04 Refresh"})})})]})})]})})};var g=o(7471),p=o(1249),y=o(6052),w=o(4407),m=o(7220),f=o(4479),b=o(1105),k=o(3790),v=o.n(k);let T=e=>{let{gameTitle:t,sections:o}=e,{checkedSections:i,toggleSection:h,clearProgress:r,downloadProgress:l,uploadProgress:u,isLoading:c}=(e=>{let[t,o]=(0,n.useState)(new Set),[a,i]=(0,n.useState)(!0),h=(0,n.useCallback)(e=>e.toLowerCase().replace(/[^a-z0-9]+/g,"_")+"_progress",[]),r=(0,n.useCallback)(async()=>{try{let t=h(e),a=await v().getItem(t);(null==a?void 0:a.checkedSections)&&o(new Set(a.checkedSections))}catch(e){console.error("Failed to load progress from IndexedDB:",e)}finally{i(!1)}},[e,h]),s=(0,n.useCallback)(async t=>{try{let o=h(e),a={checkedSections:Array.from(t),lastUpdated:Date.now()};await v().setItem(o,a)}catch(e){console.error("Failed to save progress to IndexedDB:",e)}},[e,h]),l=(0,n.useCallback)(e=>{o(t=>{let o=new Set(t);return o.has(e)?o.delete(e):o.add(e),s(o),o})},[s]),d=(0,n.useCallback)(async()=>{try{let t=h(e);await v().removeItem(t),o(new Set)}catch(e){console.error("Failed to clear progress from IndexedDB:",e)}},[e,h]),u=(0,n.useCallback)(()=>{try{let o={checkedSections:Array.from(t),lastUpdated:Date.now()},a=JSON.stringify(o,null,2),n=new Blob([a],{type:"application/json"}),i=URL.createObjectURL(n),r=document.createElement("a");r.href=i,r.download=`${h(e)}.json`,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(i)}catch(e){console.error("Failed to download progress:",e)}},[t,e,h]),c=(0,n.useCallback)(async e=>{try{let t=await e.text(),a=JSON.parse(t);if(a.checkedSections&&Array.isArray(a.checkedSections)){let e=new Set(a.checkedSections);return o(e),await s(e),!0}throw Error("Invalid progress file format")}catch(e){return console.error("Failed to upload progress:",e),!1}},[s]);return(0,n.useEffect)(()=>{r()},[r]),{checkedSections:t,toggleSection:l,clearProgress:d,downloadProgress:u,uploadProgress:c,isLoading:a}})(t),g=(0,n.useId)(),k=()=>{let e=0,t=0,a=o=>{for(let n of o)e++,i.has(n.id)&&t++,n.subsections&&a(n.subsections)};return a(o),e>0?Math.round(t/e*100):0};return c?(0,a.jsx)("div",{className:"guide-content",children:(0,a.jsx)(s.A,{className:"py-4",children:(0,a.jsx)("div",{className:"d-flex justify-content-center align-items-center",style:{minHeight:"200px"},children:(0,a.jsxs)("div",{className:"text-center",children:[(0,a.jsx)("div",{className:"spinner-border text-primary",children:(0,a.jsx)("span",{className:"visually-hidden",children:"Loading..."})}),(0,a.jsx)("p",{className:"mt-2 text-muted",children:"Loading your progress..."})]})})})}):(0,a.jsx)("div",{className:"guide-content",children:(0,a.jsxs)(s.A,{className:"py-4",children:[(0,a.jsxs)("div",{className:"d-flex justify-content-between align-items-center mb-4",children:[(0,a.jsxs)("h1",{className:"triforce-accent mb-0",children:[t," Walkthrough"]}),(0,a.jsxs)(y.A,{bg:"primary",className:"fs-6",children:["Progress: ",k().toString(),"%"]})]}),(0,a.jsxs)(f.A,{children:[(0,a.jsx)(b.A,{lg:3,children:(0,a.jsx)("div",{style:{position:"sticky",top:"20px"},children:(0,a.jsxs)(p.A,{className:"mb-4",children:[(0,a.jsxs)(p.A.Header,{className:"d-flex justify-content-between align-items-center",children:[(0,a.jsx)("span",{children:"Table of Contents"}),(0,a.jsxs)("div",{children:[(0,a.jsxs)(y.A,{bg:"secondary",className:"me-2",children:[o.length.toString()," sections"]}),(0,a.jsxs)(y.A,{bg:"primary",children:[k().toString(),"% complete"]})]})]}),(0,a.jsx)(p.A.Body,{children:o.map(e=>(0,a.jsxs)("div",{className:"mb-2",children:[(0,a.jsxs)("div",{className:"d-flex align-items-center",children:[(0,a.jsx)(w.A.Check,{type:"checkbox",id:`toc-${e.id}`,checked:i.has(e.id),onChange:()=>h(e.id),className:"me-2"}),(0,a.jsx)("span",{className:"fw-bold",children:e.title})]}),e.subsections&&(0,a.jsx)("div",{className:"ms-4 mt-1",children:e.subsections.map(e=>(0,a.jsxs)("div",{className:"d-flex align-items-center mb-1",children:[(0,a.jsx)(w.A.Check,{type:"checkbox",id:`toc-${e.id}`,checked:i.has(e.id),onChange:()=>h(e.id),className:"me-2"}),(0,a.jsx)("span",{className:"text-muted",children:e.title})]},e.id))})]},e.id))})]})})}),(0,a.jsxs)(b.A,{lg:9,children:[o.map(e=>(0,a.jsx)("div",{className:"mb-4",children:(0,a.jsx)(p.A,{children:(0,a.jsx)(m.A,{children:(0,a.jsxs)(m.A.Item,{eventKey:e.id,children:[(0,a.jsx)(m.A.Header,{children:(0,a.jsxs)("div",{className:"d-flex align-items-center w-100 me-3",children:[(0,a.jsx)(w.A.Check,{type:"checkbox",id:`section-${e.id}`,checked:i.has(e.id),onChange:t=>{t.stopPropagation(),h(e.id)},className:"me-3",onClick:e=>e.stopPropagation()}),(0,a.jsx)("span",{className:"flex-grow-1",children:e.title}),i.has(e.id)&&(0,a.jsx)(y.A,{bg:"success",className:"ms-2",children:"✓ Complete"})]})}),(0,a.jsxs)(m.A.Body,{children:[e.content&&(0,a.jsx)("div",{className:"mb-3",children:(0,a.jsx)("div",{style:{whiteSpace:"pre-wrap",lineHeight:"1.6"},children:e.content})}),e.subsections&&(0,a.jsx)("div",{children:(0,a.jsx)(m.A,{children:e.subsections.map((t,o)=>(0,a.jsxs)(m.A.Item,{eventKey:`${e.id}-${o}`,children:[(0,a.jsx)(m.A.Header,{children:(0,a.jsxs)("div",{className:"d-flex align-items-center w-100 me-3",children:[(0,a.jsx)(w.A.Check,{type:"checkbox",id:`subsection-${t.id}`,checked:i.has(t.id),onChange:e=>{e.stopPropagation(),h(t.id)},className:"me-3",onClick:e=>e.stopPropagation()}),(0,a.jsx)("span",{className:"flex-grow-1",children:t.title}),i.has(t.id)&&(0,a.jsx)(y.A,{bg:"success",className:"ms-2",children:"✓"})]})}),(0,a.jsx)(m.A.Body,{id:t.id,children:(0,a.jsx)("div",{style:{whiteSpace:"pre-wrap",lineHeight:"1.6"},children:t.content})})]},t.id))})})]})]})})})},e.id)),(0,a.jsx)("div",{className:"mt-5 pt-4 border-top",children:(0,a.jsxs)("div",{className:"text-center",children:[(0,a.jsxs)("div",{className:"d-flex flex-column flex-md-row gap-3 justify-content-center align-items-center",children:[(0,a.jsx)(d.A,{variant:"outline-primary",size:"lg",onClick:l,className:"px-4",children:"\uD83D\uDCE5 Download Progress"}),(0,a.jsxs)("div",{children:[(0,a.jsx)("input",{type:"file",accept:".json",onChange:e=>{var t;let o=null==(t=e.target.files)?void 0:t[0];o&&(u(o).then(e=>{e?alert("Progress uploaded successfully!"):alert("Failed to upload progress. Please check the file format.")}),e.target.value="")},style:{display:"none"},id:g}),(0,a.jsx)(d.A,{variant:"outline-success",size:"lg",onClick:()=>{var e;return null==(e=document.getElementById(g))?void 0:e.click()},className:"px-4",children:"\uD83D\uDCE4 Upload Progress"})]}),(0,a.jsx)(d.A,{variant:"outline-danger",size:"lg",onClick:()=>{window.confirm(`Are you sure you want to clear all progress for ${t}? This action cannot be undone.`)&&r()},className:"px-4",children:"\uD83D\uDDD1️ Clear Progress"})]}),(0,a.jsx)("p",{className:"text-muted text-light mt-3 mb-0",children:"Download your progress as a backup, upload a previous save, or reset everything"})]})})]})]})]})})},I=[{title:"The Legend of Zelda",subtitle:"The Original Adventure",description:"Begin the legend with the original quest to save Princess Zelda and defeat Ganon.",platform:"NES",year:"1986",category:"Classic"},{title:"Zelda II: The Adventure of Link",subtitle:"Side-Scrolling Action",description:"A unique side-scrolling adventure with RPG elements and challenging combat.",platform:"NES",year:"1987",category:"Classic"},{title:"A Link to the Past",subtitle:"Light & Dark World",description:"Travel between two worlds in this beloved SNES masterpiece with dungeons and puzzles.",platform:"SNES",year:"1991",category:"Classic"},{title:"Link's Awakening",subtitle:"Dream Island Adventure",description:"Explore Koholint Island and awaken the Wind Fish in this charming portable adventure.",platform:"GB/Switch",year:"1993/2019",category:"Portable"},{title:"Ocarina of Time",subtitle:"Master Quest",description:"Link's epic journey through time with revolutionary 3D gameplay and unforgettable music.",platform:"N64",year:"1998",category:"Classic"},{title:"Majora's Mask",subtitle:"Three-Day Cycle",description:"Race against time to stop the moon from crashing into Termina in this dark tale.",platform:"N64",year:"2000",category:"Classic"},{title:"Oracle of Seasons",subtitle:"Power of the Seasons",description:"Manipulate the seasons to solve puzzles and save Holodrum from Onox.",platform:"GBC",year:"2001",category:"Portable"},{title:"Oracle of Ages",subtitle:"Time Travel Mystery",description:"Travel through time to restore peace to Labrynna and rescue Nayru.",platform:"GBC",year:"2001",category:"Portable"},{title:"Four Swords",subtitle:"Multiplayer Adventure",description:"Team up with friends in this cooperative multiplayer Zelda experience.",platform:"GBA",year:"2002",category:"Multiplayer"},{title:"The Wind Waker",subtitle:"Great Sea Adventure",description:"Sail the vast Great Sea in cel-shaded style, exploring islands and ancient secrets.",platform:"GameCube",year:"2002",category:"Modern"},{title:"Four Swords Adventures",subtitle:"Co-op Quest",description:"Continue the Four Swords saga with enhanced multiplayer gameplay.",platform:"GameCube",year:"2004",category:"Multiplayer"},{title:"The Minish Cap",subtitle:"Shrink & Explore",description:"Shrink to tiny size and explore a world of miniature wonders with Ezlo.",platform:"GBA",year:"2004",category:"Portable"},{title:"Twilight Princess",subtitle:"Wolf Transformation",description:"Transform into a wolf to save Hyrule from the Twilight Realm in this darker adventure.",platform:"Wii/GameCube",year:"2006",category:"Modern"},{title:"Phantom Hourglass",subtitle:"Touch Screen Navigation",description:"Continue Wind Waker's story with innovative touch controls on the DS.",platform:"DS",year:"2007",category:"Portable"},{title:"Spirit Tracks",subtitle:"Train Conductor Link",description:"Drive a train across Hyrule and team up with Zelda's spirit in this unique adventure.",platform:"DS",year:"2009",category:"Portable"},{title:"Skyward Sword",subtitle:"Origin Story",description:"Discover the origins of the Master Sword in this motion-controlled sky adventure.",platform:"Wii/Switch",year:"2011/2021",category:"Modern"},{title:"A Link Between Worlds",subtitle:"Wall-Merge Mechanic",description:"Merge into walls and explore dual worlds in this spiritual successor to A Link to the Past.",platform:"3DS",year:"2013",category:"Modern"},{title:"Tri Force Heroes",subtitle:"Three-Player Co-op",description:"Join forces with two other heroes to solve totem puzzles and save fashion.",platform:"3DS",year:"2015",category:"Multiplayer"},{title:"Breath of the Wild",subtitle:"Open World Revolution",description:"Explore Hyrule like never before in this groundbreaking open-world adventure.",platform:"Switch/Wii U",year:"2017",category:"Latest"},{title:"Tears of the Kingdom",subtitle:"Sky & Depths",description:"Navigate the skies and depths of Hyrule with new building and fusion abilities.",platform:"Switch",year:"2023",category:"Latest"},{title:"Echoes of Wisdom",subtitle:"Play as Zelda",description:"For the first time, play as Princess Zelda herself with the power of echoes.",platform:"Switch",year:"2024",category:"Latest"}],S=[{id:"00_toc",title:"Table of Contents",content:`         "This is but one of the legends of which the people speak..."

                                       /\\
                                      /  \\
                                     /    \\
                                    /      \\
                                   /________\\

    /\\                                                                   /\\
   /  \\                       The Legend of Zelda:                      /  \\
  /    \\                         The Wind Waker                        /    \\
 /      \\                                                             /      \\
/________\\                                                           /________\\

FAQ/Walkthru
Written by: Matt "Biff Slamkovich" Murray
Version 2.25
===============================================================================
                       Table of Contents
===============================================================================
 1.  Version History
 2.  Introduction
 3.  Items/Spoils
 4.  General tips/tricks
 5.  Basic enemies
    a. Land/dungeon enemies
    b. Sea enemies
 6.  Walkthru
    a. Outset (on Outset Island)
    b. Storming the Forsaken Fortress
    c. Windfall Island and the "quest" for a sail
    d. The Rito tribe and Dragon Roost Island
    e. Dungeon #1: Dragon Roost Cavern (Fire)
    f. Forest Haven
    g. Dungeon #2: Forbidden Woods (Wood)
    h. Return to Windfall Island and more pirate fun
    i. Getting the third pearl and raising the tower
    j. Dungeon #3: Tower of the Gods (Water)
    k. A lost castle and a legendary sword
    l. Return to the Forsaken Fortress and a destiny revealed
    m. Upgrading and collection run
    n. Power bracelets and Fire Mountain
    o. Iron boots and Ice Ring Isle
    p. Enlisting Medli's help
    q. Dungeon #4: Earth Temple (Earth)
    r. Makar lends a hand
    s. Dungeon #5: Wind Temple (Wind)
    t. Link's world tour #1: Exploring the globe
    u. Tingle proves useful
    v. Link's world tour #2: Treasure and Triforce
    w. Return to Hyrule
    x. Final Dungeon: Ganon's Tower
    y. The Ultimate Showdown
    z. Ending
 7.  Reference lists
    a. Wind Waker songs
    b. Locations of bottles
    c. Arrow/bomb/magic/wallet upgrades
    d. Triforce maps
    e. Treasure maps
    f. Heart pieces
 8.  Missing things
 9.  Contact information
 10.  Credits, contributors, and acknowledgements
 11. Copyright information`},{id:"01_version-history",title:"Version History",content:`===============================================================================
1.       Version History         
===============================================================================

Version 2.25: April 1, 2003
              No jokes here. Added an enemies section. Look for more tomorrow. 

Version 2.10: March 30, 2003 (second update today)
              The updates will be coming fast and furious now. I basically want 
              to do some organizational things. This particular update has 
              sections on the upgrades, heart pieces, and some reader tips 
              mixed into the walkthru. I also finished redoing what I finished 
              yesterday but inadvertently lost. Over the next couple days, look 
              for updates with stuff on Tingle/GBA, the enemies, the Nintendo 
              Gallery, and a section on the side/mini-quests.

              Also, I am contemplating changing the way I refer to islands. The 
              (x,y) coordinate system has been confusing people. I am thinking 
              of switching to the letter-number system that is so popular 
              (e.g., A7, B6). E-mail me with any thoughts you have on the 
              issue.

Version 2.01: March 31, 2003
              Crap, and I just realized I uploaded a half-finished version 2.0 
              Yesterday. I've gotta fix that right away.

Version 2.00: March 30, 2003
              MAJOR update. Americanized the guide. Added multiple things, 
              including the remaining heart pieces and maps (charts, whatever).
              There are some things I'd like to do still that I haven't gotten 
              around to (i.e., adding more sections), but this guide will now 
              help you get everything in the game. So, the walkthru is 
              complete, but unfinished. I also changed the introduction 
              completely.

Version 1.00: March 13, 2003
              The first version of the guide. The walkthru is complete in the 
              sense that it contains everything you need to get through the 
              game. I am missing a lot of things still, heart pieces and the 
              like. That stuff probably won't be remedied until the English 
              version comes out in 11 days or so.`},{id:"02_intro",title:"Introduction",content:`===============================================================================
2.         Introduction
===============================================================================

Alright, so I scrapped the original intro. Now that the American version is out, 
the fact that I can't read Japanese doesn't mean squat.

This guide was written with the intent of being a full walkthru, one that would 
help you COMPLETE, not just beat the game. If you're looking for the quickest 
way through, this is not the guide for you. If you want to enjoy your Zelda 
experience fully, then read on.

At the time of this writing, there are four FAQs on gamefaqs.com, and there are 
at least three strategy guides available on the market. I believe this guide is 
better than all of them because it integrates all the parts of the game 
together, and in a cohesive manner. You don't have to look at the end of the 
guide for the side-quests that give you hearts, treasure charts, etc.. I 
personally always hated having to flip back and forth. For quick reference, 
though, or for people who only want to know where to find treasure chart #41, 
there are also lists at the end.

This guide is organized in the way I find it easiest to do things. Zelda games 
in general are fairly loose. That is, you have a general order in which you 
should do things, but you can wander around too. Because that is the case, some 
people may prefer to get things in a different order. That is their choice, and 
hey, good for them. This is the way I like to do things, and I hope you find it 
easiest this way too. I generally try to minimize running around and do things 
in one fell swoop.

Lastly, I try to call things by their correct names, but sometimes I don't. 
Zunari is Iceman to me, because he looks like the enemy from Megaman. Miniblins 
are imps because I find the name "miniblin" stupid. You may find other instances 
where I've taken similar liberties. It shouldn't be too confusing, I hope.`},{id:"03_items-spoils",title:"Items/Spoils",content:`===============================================================================
3.         Items/Spoils
===============================================================================

As with every Zelda game, you slowly build an arsenal of various weapons and 
items as you complete tasks and clear dungeons. Here is a brief description of 
things you will come across:

ALL PURPOSE BAIT: Purchased from Beedle or via the Knuckle Hand-me-down tuner. 
When thrown on the ground, animals and even some enemies swarm to it to eat it. 
VERY useful in taking pictures for the Gallery. It is also used when near the 
Merman to get him to fill in your sea chart. If used on the Merman a second 
time, he plays a little target game with you.

BAGS: There are three bags in the game, each is obtained in different ways. You 
win the spoils bag from Niko while you are sailing to the Forsaken Fortress the 
first time. It holds various items dropped by enemies. The bait bag is bought 
from Beedle, and it holds all purpose bait and hyoi pears. The delivery bag is 
given to you by Quill on Dragon Roost Island, and it holds letters and other 
miscellaneous things you pick up. Each bag can hold 8 "sets" of items.

BOMBS: Won from Niko in between dungeon #2 and dungeon #3. Bombs, uh, blow 
things up. They are also used as ammo for a cannon when on King. When you first 
get them, you can hold 30 max, but you can upgrade to 99 bombs max.

BOOMERANG: Won in dungeon #2. Aside from the sword, the most useful item in the 
game, hands down. Use it to stun enemies, pick up items, hit switches, or cut 
strings. I cannot overstate how useful the boomerang is.

BOTTLE: You can hold up to four. Each is found in a different place. Medli gives 
you the first right outside of dungeon #1.

DEKU LEAF: You get this from the Great Deku Tree right before the second 
dungeon. It is most useful as a sort of glider/parachute, though using it that 
way consumes magic. You can also use it to blow a gust of wind, which is also 
useful in various situations.

GRAPPLING HOOK: Won in the first dungeon. It can be attached to certain poles so 
you can either swing or climb, depending on what is needed. If used on King, it 
serves as a crane. Use it to pull treasure out of the sea.

HERO'S BOW: Won in dungeon #3. You start with regular arrows, useful as weapons 
or to hit switches (either from afar or certain eye switches that only arrows 
can trigger). Later, you get fire and ice arrows, used to burn/melt or freeze 
things/enemies, respectively. Near the end of the game, you win light arrows, 
the most powerful weapon in the game. Any non-boss dies in one shot. Fire, ice, 
and light arrows cost magic to use, and you have a limited supply of arrows in 
general (that starts at 30 but can be upgraded to 99).

HERO'S CHARM: Given to you by Miss Marie after you give her 50 joy pendants. It 
is on the quest menu, under the shield and whatnot. If equipped, you see a life 
bar for enemies (and Link is wearing a mask, but that is purely cosmetic).

HOOKSHOT: Won in dungeon #5. Used to pull one thing to another. You can pull 
yourself to a ledge or a tree or lamp, OR you can pull enemies, items, or even 
statues to you.

HYOI PEARS: Bought from Beedle. When used, you place it on your head. If there 
are any seagulls in range, one will swoop down and take it off your head. You 
then have control of the bird until you either cancel it or the bird is hit by 
an enemy.

IRON BOOTS: Found inside Ice Island. When worn, they weigh you down, which means 
wind can't blow you. They're also used to weigh down certain spring platforms 
and switches, and, when used with the hookshot, lets you pull Maoi heads off the 
wall.

MAGIC ARMOR: Given to you by Iceman (Zunari) after you get two more products for 
his shop (sea flower and exotic flower). It protects you from a lot of attacks 
(and from floormasters).

PICTO BOX: Found in Tingle's cell. It is used to take pictures. Easy enough. If 
you complete several tasks for Lenzo, he will upgrade it to a Deluxe Picto Box, 
which takes color pictures. 

POWER BRACELETS: Found inside the volcano. They let you pick up huge boulders. 
That's about it.

SAIL: Purchased on Windfall Island. You use it to sail King. That's it.

SHIELD: The wooden shield is given to you by your grandmother as you leave to 
find Aryll. It is used to block projectiles and can even bounce some back. In 
dungeon #4, the shield is upgraded to the mirror shield. In addition to normal 
uses for a shield, it can also reflect light.

SKULL HAMMER: Won the second time you go to the Forsaken Fortress. It is used to 
pound things. It's a hammer.

SWORD: Used to cut things (and bounce certain projectiles back at enemies). 
There are four levels to the sword:
     Level 1: The wooden sword. Given to you by Orca on Outset Island before 
              you rescue Tetra. The weakest sword.
     Level 2: The Master Sword. Pulled from a stone in Hyrule Castle. 
     Level 3: A powered up Master Sword. Won at the end of dungeon #4.
     Level 4: A fully powered up Master Sword. Won at the end of dungeon #5.

TELESCOPE: Given to you by Aryll in the first 5 minutes of the game. You use it 
to see things that are far away.

TINGLE TUNER: Tingle gives this to you when you rescue him from his cell. It can 
only be used in areas with maps (you don't actually have to have the map, 
though), and it "summons" Tingle to help you. Basically, it allows your GBA to 
be used to do various things. There is a more detailed section later in the 
guide.

WIND WAKER: King gives it to you when you land at Dragon Roost Island. Like the 
ocarina from Ocarina of Time, it is used to conduct songs. The Wind Waker itself 
doesn't do much, but the songs you play have various effects.

                                  - SPOILS -

First, ALL spoils can be sold to Beedle if you need some cash. Secondly, the 
easiest way to get them by far is to use the grappling hook. See the next 
section for details. I list the easiest places to get each spoil, but you can 
find them other places too (even in chests sometimes).

BLUE CHU JELLY: Won from blue chuchus. You give them to Doc Bandam, the potion 
master on Windfall Island, and he will make you blue potion.

BOKO BABA SEED: Won from boko babas. You can give them to Hollo, the korok who 
lives in a cave near the Great Deku Tree (i.e., it's in the same room, look 
around). He will give you blue potion for every 4 seeds you give him.

GOLDEN FEATHER: Won from peahats and kargarocs. Hoskit, who is on Dragon Roost 
Island, will buy them from you.

GREEN CHU JELLY: Won from green chuchus. You give them to Doc Bandam, the potion 
master on Windfall Island, and he will make you green potion.

JOY PENDANT: Shaped like a butterfly, you win them from bokoblins. THE most 
important spoil in the game. You give them to Miss Marie, the teacher on 
Windfall Island, and various things happen (detailed in the walkthru).

KNIGHT'S CREST: Won from darknuts. Orca loves these, and if you bring him 10, he 
will teach you a special sword technique (an upgraded spin attack).

RED CHU JELLY: Won from red chuchus. You give them to Doc Bandam, the potion 
master on Windfall Island, and he will make you red potion.

SKULL NECKLACE: Won from moblins. You give them to a pirate near the bomb shop 
on Windfall Island and he plays a mini-game with you.`},{id:"04_general-tips",title:"General tips/tricks",content:`===============================================================================
4.      General tips/tricks
===============================================================================

Here are some general strategies you should think of while you play the game. 
With only one exception (boomerang fighting), I don't really go into detail on 
any of these in the walkthru. None of these strategies are necessary to beat the 
game, but they will make your quest a lot easier.

GRAPPLING FOR FUN AND PROFIT: As you may have noticed, some enemies drop various 
spoils, things that don't really help you directly in any way, but can prove 
useful nonetheless (red drops from red chuchus or joy pendants from bokoblins, 
for example). It is in your best interest to collect as many of these as you 
can, because certain characters will barter for them (joy pendants especially, 
as you need 20 of them to beat the game). Once you get the grappling hook, 
however (which is rather early in the game, luckily), it becomes much easier. 
When used on any enemy that drops a spoil, it steals that item 100% of the time 
(the first time you use it, that is; you can't get an infinite amount from just 
one enemy). I wouldn't suggest doing this in a huge melee, but if there are only 
one or two enemies, go for it.

BOOMERANG FIGHTING: After you get the boomerang, it should be equipped 100% of 
the time. It is your best friend in this game. As any Zelda veteran knows, it is 
one of the most useful items anyway, but here it really shines. Whenever you 
encounter any enemy, with very few exceptions, your tactic should be: stun with 
the boomerang, attack with the sword. Darknuts, for example, need to be made 
vulnerable first (by cutting off the helmet), but they too will fall to the 
mighty boomerang. Some enemies, like stalfos knights, require a different 
strategy, but this is a very good general tactic.

COUNTER-STRIKE: In the heat of battle, sometimes you will hear a noise and your 
sword will glow green for a second. This is your chance to perform the parry 
attack. Basically, you hit A and Link does a counterattack. It is generally a 
wise move to do this, especially when fighting darknuts, but not always. If the 
boomerang attack I described above works on what you are fighting, it is usually 
a better attack. Also, there are other times it might not be prudent. Fighting 
magtails comes to mind. If you just want to kill the bugs, go for it, but often 
you need them to place on a switch. In these cases, the parry attack is too 
powerful and the magtail will die instead of roll into a ball.

CANNONBALL RUN: As you travel the high seas, you will encounter all kinds of 
enemies. You can technically go through the game without fighting most of them 
(though it's easier to fight than dodge), but you HAVE to fight warships at 
least once. If you don't have bombs, you have no chance, so run away. If you do 
have bombs (you need 3 per ship at the very least), these can be really easy 
fights. The AI that controls the ships is very poor at close range, so I like to 
sail right up to them and attack point-blank. Also, if you are very close, the 
water rolling (you know, going up and down) doesn't have as great an impact as 
it does from far away. If you get a hit, fire two shots more as fast as you can 
to put the boat away. Also of note, if you hold R, you can actually move King 
with the cannon still drawn. You move too slowly to be effective at dodging, or 
even pursuit, but it is still useful at times. 

GONE FISHING: Besides the warships and turrets you may encounter on the high 
seas, there are several other enemies you will face. While the cannon works, it 
is too slow to serve as a useful weapon. Arrows are effective too, but my weapon 
of choice is the boomerang. It's fast and doesn't have a limited number of 
shots. If you encounter something, lower your sail (hit A) and lock onto the 
enemy ASAP. Gyorgs (sharks) and kargarocs (birds) are simple, they take two hits 
each. The things that really annoy me at the seahats (huge turnip-looking 
things). You need quick reflexes to lock on and hit them before they can get to 
you. Sadly, there is no other tactic I can really give. Just be quick, get back 
on King if you are knocked off, and avoid them altogether if possible.`},{id:"05_enemies",title:"Enemies",content:`===============================================================================
5.          Enemies         
===============================================================================

This is a list of the basic, everyday enemies you will face. For the bosses, 
look in their respective dungeons. The spoils lists are to the best of my 
knowledge, but feel free to correct me.

---------------------------------------------------------------
A) LAND/DUNGEON ENEMIES
---------------------------------------------------------------

ARMOS
Description: Small bouncy statue with spikes
Spoils dropped: None
Strategy: You need to hit the crystal on the back of the Armos. You can either 
strafe around it until you have an opening, or shoot the "eye" on the front with 
and arrow to stun the Armos and attack then.

ARMOS KNIGHT
Description: Large bouncy statue with spikes
Spoils dropped: None
Strategy: Lock on and shoot an arrow into the eye of the statue, then chuck a 
bomb into its open maw.

BLACK CHUCHU
Description: Black blob
Spoils dropped: Random chuchu jellies
Strategy: These are the trickiest of all. You need to get the chuchu to step 
into light (or shine light on them with the mirror shield) to turn them into 
statues. Then you can throw the statues or hit them with the hammer to kill the 
chuchu. Like magtails, they are often used on switches, though.

BLUE BUBBLE
Description: Flying skull covered in blue flames
Spoils dropped: None
Strategy: If you get touched by the flames, you can't use any weapons/items 
(much like the bubbles from Zelda 1), so avoid getting hit at all costs. Use 
either the Deku Leaf or an ice arrow to put out the blue fire (the weapons are 
each useful in certain situations). When the flames are out, kill the skull with 
your sword.

BLUE CHUCHU
Description: Blue blob
Spoils dropped: Blue chuchu jellies
Strategy: They are usually electrified, so stun with the boomerang, then attack 
with the sword.

BOKO BABA
Description: Think "Little Shop of Horrors"
Spoils dropped: Baba seeds
Strategy: One blow from a boomerang will kill it. If you don't have the 
boomerang yet, use the grappling hook to stun the plant for a second and wail on 
it with your sword.

BOKOBLIN
Description: The smaller pig-nosed guys
Spoils dropped: Joy pendants
Strategy: No real strategy needed, these guys are a cinch. Just whack them with 
the sword until they die. Use the boomerang to make an easy task even easier.

DARKNUT
Description: Armored knight, kinda looks like a dog underneath
Spoils dropped: Knight's crests
Strategy: Use the parry attack. Always the parry attack. When you have the 
helmet off, you can stun with the boomerang. Run behind and cut the straps 
holding the rest of the armor on. Then use the boomerang attack described above 
in section 4.

FLOOR MASTER
Description: Strange bodiless arm
Spoils dropped: None
Strategy: Stun with the boomerang, then attack. Or use fire arrows. Or, use an 
ice arrow, then a fire arrow while frozen. Just be quick with whatever you 
decide to do, or you'll be sucked back to the beginning of the dungeon (or 
somewhere else that isn't where you were).

GREEN CHUCHU
Description: Green blob
Spoils dropped: Green chuchu jellies
Strategy: Hit them with the sword. That's it. The boomerang stuns them.

KARGAROC
Description: Multi-colored bird (also found on the sea)
Spoils dropped: Golden feathers
Strategy: Use the sword. Or two hits with the boomerang. Or one arrow. Or a 
bomb. Or... These guys are easy, go away.

KEESE
Description: Bats
Spoils dropped: None
Strategy: Boomerang, grappling hook, sword, arrow... Also very easy. They come 
on fire sometimes. If you get hit, roll on the ground to put out the flames.

MAGTAIL
Description: Giant centipede
Spoils dropped: None
Strategy: To kill, use the parry attack. More often, though, you want them alive 
(but in ball form). In that case, throw a jar of water at them, or hit them with 
the sword/boomerang. But NOT the parry attack.

MINIBLIN ("Imp")
Description: Little, well, imp guys
Spoils dropped: None
Strategy: Sword, boomerang, arrows... They're easy; they just like to swarm you.

MOBLIN
Description: The big pig-nosed guys
Spoils dropped: Skull necklaces
Strategy: Use the parry attack or just the sword. The boomerang makes these guys 
a lot easier. They're not all that tough anyway, though.

MORTH ("Spiny/spiky guys")
Description: Little balls of spines with an eye
Spoils dropped: None
Strategy: They don't do damage, just slow you down. A spin attack will clear 
them off of you and often kill them. The boomerang kills them too.

MOTHULA
Description: Giant bug
Spoils dropped: None
Strategy: Fire arrows kill them in one hit. The boomerang is nice too, or the 
parry attack. They fly sometimes too. Just cut off the wings and they're regular 
mothulas.

OCTOROK
Description: Giant octopus (also found on the sea)
Spoils dropped: None
Strategy: You can't use your sword on them (they won't let you get close 
enough), but any projectile weapon works. Or, just use your shield to reflect 
the rocks they shoot at you.

PEAHAT
Description: Whirly flying plant guys
Spoils dropped: Golden feathers
Strategy: Use the Deku Leaf or the boomerang to force them to land, then kill 
them with the sword. Easy.

POE
Description: Translucent ghost with lantern.
Spoils dropped: None
Strategy: You can't attack them until they are solid. Make them that way by 
either shining light on them with the mirror shield or getting them to follow 
you into light elsewhere. Once solid, they are susceptible to the boomerang 
attack above or fire arrows. OR, you can just wait for them to possess you 
(while translucent, but after they drop the lanterns) and they'll be effectively 
dead.

RE-DEAD
Description: Zombie with hoop earrings
Spoils dropped: None
Strategy: Wail on them with the sword. You can freeze them for a few seconds by 
shining light on them.

RED BUBBLE
Description: Flying skull covered in red flames
Spoils dropped: None
Strategy: You can use the Deku Leaf to put out the flames, but why? Just hit 
them with an arrow (a regular one) or the sword.

RED CHUCHU
Description: Red blob
Spoils dropped: Red chuchu jellies
Strategy: 

STALFOS KNIGHT
Description: Giant skeleton
Spoils dropped: None
Strategy: First, you need to blow them apart with a bomb. When the pieces of the 
skeleton are on the ground, attack the skull with your sword or the hammer.

WIZZROBE
Description: Flying wizard
Spoils dropped: None
Strategy: If they are low enough, use the sword. It's generally easier to use 
fire/ice arrows, though.

YELLOW CHUCHU
Description: Yellow blob
Spoils dropped: Green/red chuchu jellies
Strategy: Same as the blue chuchu. Stun with the boomerang, then attack with the 
sword.

---------------------------------------------------------------
B) SEA ENEMIES
---------------------------------------------------------------

BIG OCTO ("Squids")
Description: Giant squids with 4, 8, or 12 eyes
Spoils dropped: None
Strategy: Take out the eyes with the boomerang. It takes three hits per eye.

GYORG
Description: Shark
Spoils dropped: None
Strategy: Hit them two times with the boomerang. Easy.

SEAHAT
Description: Giant turnip helicopter things
Spoils dropped: None
Strategy: Hit them twice with the boomerang. These guys are easy, but VERY 
annoying.

WARSHIP
Description: Pirate ships
Spoils dropped: None
Strategy: Three cannonball hits. Try to get in close, they are easier at point-
blank range.`},{id:"06_0a-intro",title:"Walkthru",content:`===============================================================================
6.          Walkthru
===============================================================================

I hope you read the sections before this. They have some useful info that isn't 
completely spelled out in the walkthru. I'd go check them out.

Let's get this show on the road. Start a new game and watch the intro (which 
features my new favorite Zelda music).`},{id:"06_a-outset",title:"Outset (from Outset Island)",content:`---------------------------------------------------------------
A) OUTSET (FROM OUTSET ISLAND)
---------------------------------------------------------------

Now the game really begins. You're asleep at the top of a watchtower when your 
little sister, Aryll, comes to wake you up. She tells you to go see your 
grandmother (and points out her house to you), so we'd better not keep her 
waiting. Head down the ladder, turn west, and jump into the water. Swim over to 
the shore directly in front of you, and head west along the beach until you see 
a path. Turn south and follow the path. Turn right at the first fork, right at 
the second fork, and go into the first house on your right.

As soon as you enter, take a step forward and hit L. Get used to this, you'll 
need to do it in almost every house you enter to readjust the camera. There's a 
ladder to the left, climb it and approach the little old lady (your 
grandmother). A scene will begin where she hands you some snazzy new threads. 
After all, what kind of Link wouldn't have his trademark green tunic and hat? 
After you put them on (it's done automatically, don't worry), she tells you to 
go show Aryll. So, leave the house and head back to the little watchtower (head 
east down the path, take the first left, a right, go across the bridge, up the 
path directly in front of you, take a left at the fork, and head down the dock 
to the ladder).  Approach Aryll for another scene. She is so thoroughly 
impressed by your new duds that she gives you a telescope (it's actually a 
birthday present, but I like my way better). Not bad, about 3 minutes into the 
game and we've already gotten two items.

As soon as the scene is over, press start and equip the telescope to a button 
(it doesn't matter which, Y is what I use). Take a few steps forward (so you're 
next to sis at the railing) and use it. Tilt the C-stick up until the little 
zoom meter says 4X, then pan down a little. It should stop on a birdman at the 
mailbox. Zoom in all the way, and watch as he looks around and then takes 
flight. Zoom back out to 4X and pan straight up to the sky. You'll stop at a 
giant bird and another event will happen. He's holding a girl until he gets 
clocked in the face by a cannonball and drops her into the forest. You're a 
hero, right? Let's go save her!

Oh, wait. Heroes usually have swords, don't they? Let's go get us one. Down the 
ladder again, turn west, into the water and to the shore just like before. Take 
the same path, but this time when you reach the first fork, go straight into the 
house in front of you, ignoring the little old man (Sturgeon) who calls at you 
when you approach (use the door directly below the aforementioned little old 
man). There's an old man inside the house, this one not so little and with a bit 
of a gut (Orca). Talk to him. He'll sense that you're anxious about something 
and ask if you need some sword training. He will briefly describe what he wants 
you to do. We'll take this in steps, as he does.

1) Hit him once with the B button.
2) Hit him 8 more times with the B button.
3) Hold down L and hit him with B.
4) Repeat 8 more times.
5) Hold down L, hold up, and hit him with B.
6) You guessed it, 8 more times.
7) Hold down B until your spin attack is charged (Link should be holding his 
sword behind him) and hit him with that.
8) Do it again, only once this time.
9) This technique is IMPORTANT! Pay attention! Hold down L to lock onto the old 
man. Wait until he is about to attack you. Your sword will turn green and you 
will hear a little noise. Hit A. You will do a counter attack. Learn it. Live 
it. Love it.
10) Just to make sure you understand, do it again.
11) Use L to lock on, then hit A (not waiting for the green this time) to do a 
jumping slash.
12) Do it one more time.

Training is now over, and you go back to a dialogue. Basically, he says 
something in traditional Zelda old man fashion, like "Master using it and you 
can have this," and he gives you a sword. Huzzah! Turn around and leave the 
house. Use the L button to reposition the camera again (from now on, do that any 
time it is not facing the same direction as Link is). Head straight ahead, back 
onto the path (which is actually the second little patch of brown, the first 
being some dirt in front of the house, and turn right. Down the path, across the 
bridge, back onto the path, and turn right at the fork this time. Follow the 
path up the hill and around the bend to some trees. Cut them down with your 
sword and keep going. Turn left at the fork and go across the rope bridge and 
into the cave there (run as you approach the hole in the bridge to jump across 
it).

You're in the forest, and look, there's the girl we're looking for. Go forward, 
hugging the right wall so you go up the little path there. Jump down from the 
little ledge and continue forward to our first enemy, a bokoblin! This guy is a 
piece of cake, but he still takes a few hits. Just lock onto him and mash the B 
button. If he falls down, let him get back up and then hit him again. He'll die. 
Climb onto the stump you see (it was next to the bokoblin), and jump from it 
onto the ledge in front of it. Head forward and you'll see a fallen tree trunk. 
It's lying remarkably like a ramp, so let's use it as one. Up and over, and 
after a few steps, some birds (kargarocs) will drop two more bokoblins. Take 
them one at a time, the same way as the first. If you're lucky, you might even 
hit both with one attack. If so, good for you. Have a cookie.

After they're dead, the girl falls from her precarious perch, and you 
automatically run over to talk to her. Her name is Tetra, and she's a pirate. 
She's actually the leader of the pirates, despite being the same age as Link. 
While you're talking, one of her crew runs up. More talking, and everyone leaves 
the forest. Back at the rope bridge, Aryll is waiting for her hero big brother. 
She runs over to congratulate you, only to be snatched by the giant bird. Link 
is apparently a moron, as he runs right off the cliff while chasing the bird. 
Luckily, Tetra catches you and pulls you back to safety. Cut down to the beach, 
where Tetra and one of the crew are waiting. They're about to leave and you ask 
to come along. Tetra says no way, but the birdman (Quill, a mailman) shows up 
and lays a major guilt trip on her. Reluctantly, Tetra agrees to give you a lift 
to get your sister if you can find a shield. But, before you can leave, you'd 
better go tell your grandmother, so head back to her house (you should know the 
way). Before you talk to her, head up the ladder. The shield from the wall is 
gone. Now go talk to granny and she'll give it to you. You can use it in battle 
by pressing R while you have a weapon drawn.

Before you leave the island, you might want to pick up some rupees. There are a 
total of three pigs running around (2 near Granny's house, and one near the 
house furthest east). There is a lady who lives up the path from Granny's house, 
she is standing in a fenced in pen. If you throw the pigs into the pen, she will 
give you 20 rupees each. You need to sneak up on the pigs by crawling (hold R, 
but not while you have any weapon/item drawn). I find it easiest to crawl next 
to them, as opposed to in front or behind. Also, you can cut down trees and 
grass for all kinds of goodies. 

Fully equipped and ready now, Head back to Tetra, talk to her, and choose the 
top option so you can sail off to adventure!

After watching some more scenes, you'll find yourself on the boat. Turn around 
and then head forward into the door there. Go down the stairs you see. Walk 
forward until a bucktoothed pirate (Niko) starts talking to you. He wants you to 
do this little puzzle, so let's humor him. Besides, the plot won't advance 
unless you do. Jump across the platforms, swinging from lamp to lamp (using the 
d-stick up and down to gain momentum (though you won't need to here, just for 
future reference) and the A button to let go), until you reach the end. Simple 
stuff, really, and since there's no penalty for screwing up, you can figure it 
out on your own. If you take too long, or hit the left button, the platforms 
will lower. Just hit the same button (by jumping onto it) that he did (the right 
one) to raise them again. He's shocked you made it, and lets you pass to a 
treasure chest containing the spoils bag. It holds some special items enemies 
drop, but it's not important now. Grab it, and Tetra will yell for you. Head 
back up to the deck. Tetra is in the crow's nest, so climb the ladder to join 
her.`},{id:"06_b-storming-ff",title:"Storming the Forsaken Fortress",content:`---------------------------------------------------------------
B) STORMING THE FORSAKEN FORTRESS
---------------------------------------------------------------

Another scene will follow. You've arrived at an enemy fort, and the giant bird 
is there, so Aryll probably is too. We should check it out. Tetra has a plan on 
how to get you in there, a fairly humorous one at that. Sadly, you lose your 
sword in the process. We worked hard to get that thing, too. Even worse, you're 
in no condition to fight enemies now, so you need to be stealthy. When I think 
stealth in gaming, I think Metal Gear. When I think Metal Gear, I think of 
sneaking around in cardboard boxes. We don't have any of those on hand, though. 
What to do? Turn to your right and approach the stairs. Your pendant (that you 
didn't know you had) will talk to you. It's a way for Tetra to communicate with 
you. Walk up the stairs to the first landing where we find barrels. These will 
do nicely. Pick one up with the A button, and start walking. Go up the next set 
of stairs to another landing. This one is larger and has spotlights roaming on 
it. When one approaches you, stop until it passes you by, the lookout no doubt 
going "Ho-hum, just another barrel." Use this method to gather rupees if you 
wish, and when you're done, enter the door (there's only one you can reach).

Screw stealth for the moment and head left from this room. Continue until you 
see some huge moblins with lanterns, and let one of them see you. You'll get 
caught and thrown into a jail cell. Get on the table, and then jump over to the 
top of the bookshelf. Get rid of the vase there to expose a hole. Crawl into it 
(move while holding R), and follow this little tunnel to the end, which is 
conveniently outside of the cell. Go the only way you can, around the corner and 
down to a chest containing the map. Yay. Turn to the right and use that lantern 
to swing across to the other platform. Take the left door. If at any point your 
controller starts vibrating, hit A because the amulet wants to talk some more. 
Luckily this isn't as frequent as Navi from Ocarina. In this hallway, go into 
the little alcove on the left and climb the ladder there. 
Around to the left is a jar. Try and stay out of sight of the bokoblin until you 
can get to it (the easiest way is to go to the right and then come back around). 
Pick it up and smash it, and there are staves inside. Pick one up with A, and 
now you have a makeshift weapon. Use it just like a sword to kill the bokoblin 
controlling the lights. If he hits you, you will drop your staff and need to 
pick it up again, which can't be done while you're locked onto him. Just so you 
know. Go back down the ladder and back into the room you just left.

This time, take the other door. This is a little hallway that has openings to 
the left and right. Take the left one, and turn left again to head up a ramp. At 
the top of the ramp are a landing and a ladder. Climb it. Another bokoblin, 
light, and jar. Do the same as before. That's two of the big lights down. Head 
back down the ladder, down the ramp again, and when you reach the hall, turn 
left (so you're heading in the direction you were back when you first entered) 
and go through the door at the end. Over to your right and behind two barrels is 
a chest with a compass. Swing across to the other side and take that door. 
Another hall. Again, go to the left, up the ramp and the ladder, and kill the 
bokoblin. No more lights. Go back down the way you came, and go almost straight 
into the hall, again going in the same direction you were when you first got 
here.

Now you're actually in the very first room again, except up top this time. Swing 
over to the other side and through that door. Neither branch in this hall is 
important, so continue through the door in front of you. More stealth. There's a 
barrel to your left, so grab it and sneak past the buff moblin up the little set 
of stairs there and out the door. Almost there now. Follow this staircase around 
until you reach a landing with a barrel. Grab it and play the sneak-past-the-
moblin game one last time. Go to the left and up the ramp. Eventually you'll 
come to a break in the path. That's too far to jump, but we're not stuck yet. 
Get Link against the wall and facing it, and using the L button to position the 
camera so you are looking right at him. Hold up and hit A and he should get flat 
against the wall. Keep holding A, and now go left along that narrow little ledge 
to the other side. Around the corner, there is another ledge so do the same 
thing. Go up the stairs to a bokoblin... and your sword! Grab it and wail on him 
(the A counter attack where your sword turns green works nicely). Enter the door 
he was guarding and you find Aryll! And some other girls that don't really 
matter much (yet). Sadly, this rescue and tearful reunion are cut short by that 
stupid giant bird! I hate him so very very much. He carries you off to a 
mysterious man with red hair (Hmm...) who apparently doesn't think you are good 
enough, because he tells the bird to throw you back. Right into the ocean!`},{id:"06_c-windfall-island",title:'Windfall Island and the "Quest" for a Sail',content:`
---------------------------------------------------------------
C) WINDFALL ISLAND AND THE "QUEST" FOR A SAIL
---------------------------------------------------------------

You wake up on a boat. A talking boat. You will be seeing a lot of this boat, 
but you don't usually have to talk to him if you don't want to. His name is 
"King of Red Lions," but that is long and unwieldy, so we'll change that to 
King. Your boat's name is "King." King babbles on and on about some stuff. The 
only thing of interest is that he confirms what many of you may have thought, 
that the mysterious man was none other than Ganon himself. He also tells you 
that he needs a sail, so if you want to go anywhere, you'd better get one in 
this town you're conveniently at (Windfall Island). A sail costs 80 rupees, 
which you may or may not have, depending on what enemies dropped, etc. If you're 
short, run around town cutting up pots and things to get the dough. Flowers work 
nicely too. Don't pick on the pigs, please. You'll die. In the town, there is a 
man dressed as an Eskimo (he reminds me of Iceman from Megaman 1, but his name 
is Zunari). He sells the sail, so talk to him and choose the top option to buy 
it. Equip it to one of your buttons. Let's go look around town a little more 
before we leave, though. Directly above your boat is a cliff with a grave and an 
Elvis impersonator (Tott) on it. On the wall behind them is a door, enter that. 
This is some kind of jail cell with a little Christmas elf guy in it. Smash the 
jars to your left to find a switch. Use it to open the door and let him out. 
It's Tingle. He gives you a map to his island (drawn in crayon, did Aryll do 
this?) and the Tingle Tuner (GBA dealie). If you have a Game Boy Advance, this 
comes in handy sometimes. If not, oh well. You need to let him out anyway. Now 
go into the cell he just left, and you'll see a large crate. Push it to the left 
or right (hold the R button to push/pull things), and go into the little hole 
there. Go into first person mode by pushing the C-stick up (it makes navigating 
holes easier), and take the following path at the intersections: left, right, 
left, right, straight, straight, straight, right, straight, straight, straight, 
right. You'll be in a room with a chest containing the Picto Box (camera). 
Follow the little tunnels back to the cell, then leave through the door you came 
in. Turn left and go around the side and up a wooden ramp. At the top, turn left 
and go through the archway. Along the left wall is a door with a camera above 
it. Go inside. Talk to the bearded man here (Lenzo) and then walk past him to 
some stairs. Go up them and you'll be in Lenzo's photo gallery. He will come up 
and talk to you. Look at each picture, then leave.

Turn right around and go back inside, and talk to Lenzo again. He wants you to 
become his assistant, but you need to pass a little test first. He wants you to 
take a picture of someone mailing a love letter. The mailbox is back near the 
entrance to town. There are some docks there, stand on them and use your camera. 
Center the viewfinder on the mailbox and wait for a man wearing red (Garrickson) 
to approach (it takes a WHILE). There are two tricks here. First, make sure you 
get the mailbox and the man's whole body in the shot. Also, you need to take the 
picture while he has the letter in his hand, right as he's putting it in the 
box. When you get it, go back to Lenzo. Show him the picture (lock onto him and 
use the camera, select the picture, and hit A). If you got it right, you hear 
the good old Zelda "A-ha!" music (as opposed to 80's A-ha music, "Take On Me"). 
Talk to him again and he gives you a second test. You need to find someone who 
is scared. In town, right next to Iceman (Zunari), there are some stairs you can 
go up that lead to like a bar. There is one man sitting at a table with a 
pitcher and some cups. Grab a jar and throw it at him, then take his picture 
while he is shaking (make sure you get his whole body in it). Show Lenzo the 
picture, then talk to him again for the final test. Leave the store and turn 
right. Walk past the first arch and go into the second. Turn right back around 
and aim at the lady in orange. Eventually a man with red hair will talk to her. 
Take their picture (full bodies!) to pass the third test. This one is annoying 
because the damn kids are marching around and screw up the shot. For your 
trouble, he gives you a joy pendant. He wants you to get him a firefly, but we 
can't do that yet.

That's enough for now; we'll be back here later. Go to King. He'll talk to you, 
choose the top option then hop in (get around to the side and hit A). Use the 
sail and you'll be off. 

Turn to the right until you're going in the direction the arrow is pointing (the 
direction of the wind). After that, just go straight. You should see a tall 
structure in the distance, aim for that. You won't encounter any enemies yet, 
because you have no way of fending them off. It'll take a few minutes. If you 
get bored, hit R and you'll jump. That usually amuses me enough. Once you get 
close enough, you'll automatically land.`},{id:"06_d-rito-dragon-roost",title:"The Rito Tribe and Dragon Roost Island",content:`
---------------------------------------------------------------
D) THE RITO TRIBE AND DRAGON ROOST ISLAND
---------------------------------------------------------------

I particularly like the music here. Anyway, you see various shots of this new 
island, including one of a dragon on top of a mountain (volcano, whatever). He's 
useful later. As you leave to check the place out, King gives you the Wind 
Waker. This is a little conductor's baton that functions much like the ocarina 
from Ocarina of Time. He teaches you how to use it with some practice songs. Use 
the C-stick to mimic the notes as the little metronome dealie at the top ticks 
back and forth. Also, a basic song has 3 notes, but if you hold the D-stick to 
the left, you can enter 4. Hold it to the right, and you can now use 6. Various 
songs have various lengths. Coincidentally, if you hold the D-stick up, the 
notes are louder, down for softer. It doesn't affect the game any, but just 
worth pointing out. Lastly, if you screw up a song, you have to wait until all 
the notes are completed to redo it, BUT, if you hit left or right on the D-stick 
and change the number of notes, then change it back, it resets everything. Save 
a little bit of time, and a lot of frustration that way. The Wind Waker is very 
useful, so equip it right now.

From where you are, leave King and head forward and slightly to the right into a 
little cave that leads through to the other side of the island. Once here, you 
will see a tiny island with an arch. You may also see a boat. That's the 
traveling salesman. We'll see him later, not now. Swim over to the island and 
examine the left tablet there (the intact one). Hmm, those symbols look 
familiar. Use your Wind Waker and play Up, Left, Right. This is the Wind's 
Requiem. Play it whenever you need to change the direction of the winds (which 
is ridiculously often). A little frog guy (Zephos) comes up to see you, and he 
tells you what I just said. He also tells you that his brother, Cyclos, is upset 
because his monument is broken and is going around the sea starting cyclones. 
Head back to shore, through the little cave, and head right. Use the bomb plants 
you see to blow up boulders and go up and around the ramp (going right at the 
fork). They get progressively trickier, but nothing too difficult. At one point 
there is a ledge you have to cross, go across it and then drop back down a level 
to the last boulder (this one has two green blocks on it. Step on the green 
blocks, drop down a level, and pull the bottom one out. This makes it easier to 
get in and out of here. Hop back up on top, and continue through another little 
cave to the birdman from the beginning of the game. He talks, then go up the 
ramp some more and into a cave.

Welcome to the city of the Rito. You talk to their chieftain, and he tells you 
about Valoo, the dragon. Apparently, he's been kinda moody lately and that 
screws up their society. See, the dragon is involved in like a Rito bar mitzvah, 
and his son (Prince Komali) can't grow wings until Valoo gives him a scale. As a 
result, Komali has been really depressed. He asks you to try and cheer Komali 
up. Quill also gives you the delivery bag. This one holds random things, letters 
and such, that people give you. Being a good hero, we will help out. But we need 
to check this place out first. Head up the ramp to the first door and go in. 
Talk to the little bird girl there. Her name is Medli. She's relatively 
important. She wants you to give a letter to Komali, and you put it in your new 
bag. Go back out and continue up to a little desk with a mail sorter guy. The 
first mini-game. Yay. Talk to him and choose the top option twice. Basically, 
you need to sort the mail. Pretty straightforward. First you have to get 10 
right, then 20, then 25, and you are given 30 seconds each time. Keep playing 
until you get 25. It might take a bit, but even if you're bad, eventually you'll 
get lucky with like 5 of a kind in a row. You get rupees for doing a good job. 
Do that, then go out the little door to the left of him. Come right back in, and 
there is a different person there. He's in awe of your mad mail sorting skillz, 
so show off and get 25 again. He will be so blown away that... he wants you to 
run an errand for him. He wants you to put a letter in a mailbox. Head down the 
ramp to the very first door you came in (directly to the right of the bottom of 
the ramp). Head down and eventually you will see a mailbox on your left. Go to 
the menu, equip his letter (by hitting X, Y, or Z on the bag, then again on the 
letter, his is the blue one), then use it on the mailbox. It costs 5 rupees 
postage. Some reward. Back into the bird town, and go into the door almost 
directly across from the entrance. There's a little path that leads to another 
door. Go in and give this kid Medli's letter. Go back out to bird town and go 
into the only door on this floor you haven't gone in yet (it has feathers 
hanging from the arch and a guard next to it).

Lovely weather out here, huh? Take note of these red plants and go left and down 
into the area below. Look, it's Medli. Talk to her and choose the top option. 
Apparently she isn't very good at her bird-dom and needs help getting up to the 
area in front of you. Your job is to pick her up and throw her up there. Back up 
a little and onto the rock formation there. Use the dust as a guide and throw 
her when the wind is blowing towards where she wants to go. You can try multiple 
times if needed. When she makes it up, she gives you a bottle. Gotta love these 
things. Equip it, wade in the water you see, and use it to fill it up. Head back 
to those red plants you saw before (by climbing the broken rope bridge) and use 
the bottle to water one and make it grow into a bomb flower. Use that to blow up 
the boulder in the lower area and flood it. Now swim across to where Medli just 
went. There are two statues on either side of the lava. Pretend you're Kareem 
Abdul-Jabaar and sink a bomb flower in the pot the right one is holding. Then 
jump onto the platform it creates and do the same to the left. Stay out of the 
lava (duh). Continue right on into the first real dungeon. Whee.
`},{id:"06_e-dragon-roost-cavern",title:"Dungeon #1: Dragon Roost Cavern (Fire)",content:`

---------------------------------------------------------------
E) DUNGEON #1: DRAGON ROOST CAVERN (FIRE)
---------------------------------------------------------------

Easy enough puzzle. Pull the left statue towards you, then the center one left. 
Go through the newly exposed door into the first proper room. Kill two 
bokoblins, pick up a dropped staff, hopefully still on fire. If not, walk near a 
torch, stand so the end of the staff is in the fire and it will ignite. Use that 
to light the other torches and make a chest containing a key appear. Use that to 
open the door and go into the next room.

Cut through the crappy wood bars with your sword and go left. Skip the first 
door you see (it's locked and continue along the wood path. Jump across the 
first gap, and at the second, drop a level and pull a box out of the wall. Climb 
on that to jump to the other side and keep going. Wait for the flames to die 
down and jump across to the next platform. Fight some keese (the bats), but 
don't cut the strands on the rope bridge. That would be bad. Run across said 
rope bridge and blow up the boulder you see. Next room.

The jugs on this table are special. If you throw these pots into the lava, the 
water inside solidifies it and gives you a platform to stand on. Use that to 
your advantage and try to place one that allows you to jump onto it and then 
over to the left. Don't take your sweet time, though, they don't last forever. 
Grab the chest here (the map) and head back to the table. Make another platform 
and use it to get to the other side. That whole trip can be easily made with one 
platform, but if you don't think you could make it, there you go. Go up the 
ladder and fight your very first red chuchu. They come in several colors, but 
this one is red. Hit him once or twice, he will die. Next room.

Walk towards the wooden bars in front of you and a bokoblin will break loose. 
Kill him and pick up his sword. Smash the other set of bars with it. Go through 
and hop up on the ledge to fight 2 red chuchus, then use the bokoblin sword to 
break these bars. Get a key. Head down and continue the way you were going to 
another door (guarded by two more red chuchus, they come in packs). Kill and go 
through.

You're back in the second room (with the keese and rope bridge). To your left is 
a boulder and some bomb flowers growing in a wall. Throw a stone or something 
and hit the flowers to make them explode. Go across and take the second door, 
the one we skipped back at the beginning because it was locked.

Skip the stuff on your right and fight some more red chuchus. If they weren't 
easy, they'd get old REAL fast. Smash the left bars, kill the bokoblin, and take 
his staff. Light it with the torch, and set the right bars on fire. Then run 
back to the turn near the door I told you to skip, still with the burning staff. 
Get as close to the edge as you can, aim towards the bars, and throw the staff 
with A. They'll light too. Head back to the first set of bars you burnt, step on 
the switch, and go through the door.

We're outside. Pick up the pot to the right of you and carry it. Go across the 
rope bridge, hitting the bokoblin in the head once you get in range. You don't 
want to mess around with the rope bridges. That should get him clear enough to 
wail on him. Do so. Climb the ladder paying attention to the flame spurt. Once 
up there, kill the bird, and go across the ledge, again being careful of the 
flame spurt. Go around the boulder and find a ledge just above your head. Hang 
from it and shimmy to the other side of the chasm, pulling yourself up once the 
room is adequate. Hope onto the stone, then up, grab the bomb, blow up the 
boulder. Go into that new door.

Here you see a stack of blocks. Pull the middle one out completely. Then stand 
on it and pull the block in front of you out one notch. That's enough to climb 
on it, then the third one and go in that entryway. Kill the rats, or ignore 
them, they're just a nuisance, and pull the block out of the wall. Climb up and 
open the chest near the torch. Compass. Yay. Smash the jar and light and throw a 
staff to burn the boards opposite you. Get that chest for a key. Through the 
locked door.

Back outside. Run up the stairs and kill the kargaroc. Then steal its baby, a 
silver key. They're so cute when they're young. Open the door and go in.

Ooh. Dark. I'm scared. Smash a jar, grab a staff, light it. Run through, 
lighting a torch and some boards. Drop the staff and kill the keese. On the 
ledge here, there's a chest with a joy pendant. Pick the staff back up, relight 
it from this new torch, and continue through the smoldering boards. Light two 
more torches and go through the door.

Grab the bomb flower and blow the boulder off the top of the jar. That's a warp 
jar. Useful sometimes. Best to open them up in case you die or something. You 
never know. Across the rope bridge and into the door.

Kill the bokoblin and start smashing every pot you see. There are two more 
bokoblins hiding in them. Climb on things to make sure you get them all. The jar 
bokoblins will each drop a staff, use one to light the unlit torch and make a 
chest appear. Your first treasure map (which is actually #39). We'll worry about 
it later, but each one of these is worth at least 200 rupees. So they're good 
stuff. Go out the door up top.

Try and kill the magtail over on the platform, or at least get him to move. I 
find it easiest to kill him with the parry attack, but if you have trouble, 
throw a water jug at him. Head back, grab a water jug, and hop back to the 
platform. Wait until the flames die down, throw the jug to where they were, and 
hop on. Instant elevator. Jump over to the wood and through the door.

Blow up both boulders here using the bomb flower near the door. One is another 
warp jar, the other is a door. Go through it.

Outside one more time. Run up the stairs. They fall, so keep moving. Medli's 
been captured! Let's see if you can mount this rescue without being tossed into 
the ocean by a giant bird. Kill these two bokoblins, then the big ugly moblin. 
The big one turns into a weird glowing sphere. Hit it with your sword and 
various things will come out, rupees, hearts, etc. It's like a jackpot. Talk to 
Medli and get a grappling hook. Go up the stairs you see, and use it. You'll get 
a little targeting thing, aim it at the bar Medli is standing on, the brownish 
part. When you can fire, it changes to a yellow starburst kind of mark. Then 
it's just like swinging on those lanterns. Swing over the next one, then cut 
through the boards and drop a level. This is the door you just came in. Use it. 
Run to the warp jar and hop in. You're back at the beginning. Kill these two 
bokoblins (again) and go through the door. Go into the first door on the left, 
then turn right. Remember here? Swing across and get another treasure map (#11). 
Swing back, go back out the door, into the first room, and back into the warp 
jar. This takes you to the second warp jar, but we don't want to be here, so hop 
back in again. Go through the door that led to the grappling hook and turn left. 
More grapple poles. Swing like Tarzan down to the door and go in. Also, if you 
get stuck at an awkward angle while swinging, hold R. That'll stop you. Turn a 
bit, then let go of R and start swinging again. You can also climb up and down 
while holding R.

Go across the rope bridge, killing the obvious bokoblin and then the one that 
pops out of a jar. Remember what I said about respecting the bridge? Forget it. 
Cut all the vertical strands, or, what I find more fun, grab a bokoblin staff, 
light it, and then burn them. You'll fall to a lower level. Grab the chest (joy 
pendant) and go out the door.

Okay, hop into this birdcage thing on your left. You want to stand in the center 
and cut all three ropes and once. The easiest way is the charged B spin attack. 
Done right, the bottom will fall and land on another flame geyser, so you have 
an elevator. Once you are down bottom, jump into the little archway and 
continue. Jump across wood platforms then go up a ladder to a big mouth with a 
door in it. Turn around and look up at the ceiling to find a grapple dealie. 
Swing on it, and it will pull down, because this is actually a switch as well. 
Hold in R, stop, turn around, swing back, and go into the door.

**GBA note** If you have the GBA, use the Tingle Tuner and bomb the little 
alcove right across from you (there will be a question mark where you should 
bomb). A chest will appear with a golden Tingle statue inside. There are 5 
total, one in each dungeon. You CAN'T get it without the Tingle Tuner (even if 
you come back later with bombs). **end GBA note**

Grapple, stop, turn right (or left if you got the Tingle statue), and swing over 
that way. Jump across platforms and grapple to the door.

Okay, here you want to take one of the magtails and hit it, but not kill it. If 
you hit it twice with a normal attack, it will roll into a ball. Pick it up and 
drop it on the switch so you can get at the chest with the boss key. Now, if 
you're lazy, you can save, quit, and then you'll be back at the beginning of the 
dungeon where you can use the warp urn twice to get to where we're going. Or you 
can backtrack the long way. Your choice. Me, I'll backtrack. Get a few more 
rupees, and it's not like it's hard. Besides, it's what you "should" do. 

Leave through the door you came in. Grapple across, hop to the next grapple 
pole, then grapple, turn left, climb up a little so you are level with the 
ledge, and swing to that door. Exit. This is tricky, but can be done. Grapple 
onto the switch we pulled down before. Hold R, turn so you're facing the exact 
center of the bridge, and climb down a little. We need as wide a swinging arc as 
possible while still being able to reach the bridge. When you have it, swing and 
let go, and if done right, you will catch onto the bridge. If you have too much 
trouble, just do what I described before about saving, quitting, and using the 
urn twice. Assuming you made it, turn right on the bridge. Jump across the gap, 
follow the path, jumping where need be. Take the second right turn and voila, 
you're back at the warp urn room. Kill the bokoblins, use it, then use it again.

Finally. Near the lava is a grapple pole that you can use to swing across. Kill 
the magtail if you wish, and run up the stairs to the door, grabbing the chests 
on the way. Each of the top jars has a fairy, which you should catch in your 
bottle (use it near the fairy). Unlock this mean looking door and enter... if 
you dare.
 
                                BOSS: Gohma

I remember back when this guy used to be just a stupid crab. Make sure you have 
your grappling hook equipped and walk towards the lava to make the boss appear. 
His name is Gohma. Say hello to him. Shake his hand... err, claw if you wish. 
Then kill him. How do I do that? Directly above his head is a tail (belonging to 
the dragon who resides on top of this volcano). You can grapple onto it. Do so 
and swing across to the other side. This will bring the ceiling down, cracking 
Gohma in the head. Gohma will fling the ceiling back up where it belongs, at 
which point you can repeat the process. After hitting him three times, his 
carapace is shattered, allowing you to hurt him. Lock onto his head and use the 
grappling hook on it. This will pull it close enough for you to poke him in the 
eye a couple times. Do that until he is dead. If you're good, it'll only take 
two head grapples. Get your heart container and enter the glowing spot in the 
middle of the room.

You're teleported outside. Medli and Komali come over to talk to you. The prince 
gives you Din's Pearl. Yay.

Remember the traveling salesman? Get into his boat now. If you don't see it, 
wait, he'll be around (he circles the island). Time for some shopping. What we 
want to buy is something that looks like a pig's head. This is the bait bag. It 
costs 20 rupees. He also has things that look like pears and little specks of 
something. Buy 3 pears (hyoi pears) and 5 sets of the specks (all-purpose bait) 
if you can afford them, but pears are the priority. Get at least one of those 
(if you somehow don't have 30 rupees for the bag and a pear, I pity you). 

A note on Beedle from Jarel Jones:

"Beedle (the guy that runs those floating shops around certain islands) has a 
membership program where you can buy 30 items to get a Silver Membership and 60 
to get a Gold.  Getting a Silver nets you a Complimentary ID through the mail.  
If you show him the Complimentary ID, he... wait for it.. compliments you.  How 
lame.  The Gold nets you a Fill-Up Coupon, which will fill most of your items to 
their max values when you show it to Beedle.  You can only use it once though."

I haven't gotten 60 yet, but I did get the Complimentary ID. It's HILARIOUS. 
This is, hands down, the funniest Zelda installment yet.

Leave and go back to King.

Equip the Wind Waker and the sail. Talk to King, then go back to shore and use 
the Wind Waker and play the Wind's Requiem. A little compass will pop up. Push 
the D-stick in the direction you want the wind to blow, south in this case, and 
hit A. Get into King, raise your sail, and go south (the direction of the arrow 
behind you, remember).

Hit up on the D-PAD (not the stick). This brings up the world map, and one 
square will have a glowing mark on it. That's our destination. From now on, I 
will use (X,Y) coordinates in reference to the map (that is horizontal then 
vertical, for the math impaired). Likewise, I will treat the map as a graph. It 
looks so much like one anyway. (1,1) is the furthest west and furthest south 
square. Windfall Island is located at (4,6), the island we just left is (6,6), 
and the island we are headed to is (6,2). It's not so important now, but later 
on I will be heavily dependent on that notation to tell you where to go. Try to 
get used to it.

Speaking of the map, before you get too far, a little fish will pop up. He is a 
master cartographer, apparently. He fills in your map at this square, then takes 
off. He appears in every square on the world map, near whatever the main island 
of the square is. You call him with food (that we haven't gotten yet), and he 
will fill in that respective square. By game's end, you will have filled them 
all in, simply because we will visit each square at least once. We will not 
worry about it right now, however, because we have more pressing matters to 
attend to.

You still aren't equipped to fight and enemies probably won't bother you (key 
word: probably). If you see anything, avoid it. You may get smacked in the head 
by some cannonballs, most likely after passing a watchtower. It shouldn't 
happen, but you might get unlucky. If so, hop back on King and keep going. 
Again, you are not equipped to fight anything at sea, not yet. After quite a 
while, you will end up at the next island. It is made up of several very large 
formations, so when you see it on the horizon, aim for it. Like the last, King 
will automatically land.
`},{id:"06_f-forest-haven",title:"Forest Haven",content:`
---------------------------------------------------------------
F) FOREST HAVEN
---------------------------------------------------------------

This is Forest Haven. Climb up the ledges, watching for the giant plants (boko 
babas). They're not too hard to defeat, just strike quickly. Head right at the 
fork and continue. At the top you will see a grapple pole, use it to swing 
across the gap, then quickly turn right and hold up your shield. An octorok will 
be firing at you. His shots will bounce of your shield and kill him. Jump to the 
left, then over to the right, then forward. Swing to the very highest level of 
water (there was an octorok there at one point) and enter the cave.

Head right and climb around. On the back side of the big tree in the center is a 
giant face. As you get close, red and green chuchus will appear on it. Run 
towards the tree and hit A so you roll into it. The impact will knock off the 
chuchus so you can kill them. After they are all dead, the head will talk to 
you. I think he sounds like a cross between Barry White and the teacher from 
Charlie Brown, personally. His little leaf friends (children?), the koroks, will 
talk to you as well. Basically, The tree painfully makes a leaf appear fairly 
high up. Now, quickly, I want you to empty your bottle (assuming it is full) and 
try and grab a firefly. You want a big blue/white one. Look close to the walls, 
the ones you want will shine lots of light on them. When you get one, wander 
around looking for a purple bud (baba bud) in the ground. You can jump into it, 
and it will fire you into the air. While in the air, you can aim towards 
another, and then another, climbing into the sky. From the fourth bud, land on a 
treetop, then swing over to the fifth with the grappling hook. From the 9th, you 
can get to the treetop with the deku leaf. Get it. It is a very interesting and 
useful item. It uses magic (and a magic meter will appear when you get it), and 
has two main uses. First, if used from the ground, it sends out a powerful gust 
of air. Second, it can be used like a parachute/handglider if you activate it 
while in the air. While gliding, if you hit the button again (the one you have 
it equipped to) you can do an attack where you billow out the leaf. It doesn't 
do much, but it keeps pesky enemies away. Now, from where you are, you can see 
another bud you can jump to (you'll have to glide to make it). It'll shoot you 
up in the air, and then you can glide (from the highest point of your "jump") to 
a ledge. Cut down weeds to get your magic bar full again, then go through the 
cave back outside.

You can see an island out here. Set the wind to NW by playing the Wind's Requiem 
and glide down to it with the leaf. There is a crazy hatch here and a guy. Look 
back where you just jumped from, and to the right and below that ledge, you can 
make out a crystal switch. Remember those pear things you bought? Use one. A 
seagull will take it off of your head and you take control of it. Fly up and 
into the switch (use A to flap your wings). The valve hatch will open. A ladder 
will also drop. Hit R to switch back to Link and jump into the hole. You can't 
do anything here, so get back out. King will now be waiting at the base of the 
ladder (the only reason we went into the hole). We're going to take our first 
sidetrack (the side-QUEST part is here, but we need to do some prep work). Use 
the Wind's Requiem to set the wind N and sail back to (6,6). There, set the wind 
W and sail to (4,6), Windfall Island. Yes, just going NW would seem faster, but 
you can't do that. King won't let you.

Land at Windfall Island (you have to do it manually, just get to the dock and 
jump off King). Go give Lenzo his firefly and he'll give you a better Picto Box. 
This one takes color photos and is necessary for the HUGE Gallery side-quest. We 
can actually do some things with it now. Head around town and look for the 
potion shop (it has a sign outside with a potion on it). There is a woman 
standing there with a green shirt and orange vest. Talk to her, then take her 
picture (full body, pictures must always be full body!). Show her the picture 
and she will give you a treasure map (#33). There's more you can do here, but 
we'll be back later. It's nothing pressing anyway. Now go find Iceman (Zunari). 
Talk to him, but not behind the little stand. Instead, move a little to the left 
and he'll follow you. Talk to him there. He'll say some stuff, then talk to him 
again. Choose the top option twice. He'll give you a flower (in your delivery 
bag). We'll do more with that in a bit too. Lastly, go find the Elvis 
impersonator. Talk to him, then use the Wind Waker. Play Center, Center, Center 
twice (i.e., do nothing) and he will talk to you. Now play Right, Left, Down. 
You've learned the Song of Passing. It will change day into night and vice 
versa. Go back to King, and sail back to Deku Island (E to (6,6), then S to 
(6,2)).

You don't want to land on the main island; instead, we're shooting for where the 
hatch was, it's over to the left as you come in, and it's actually before the 
main island anyway. Go up the ladder and drop into the hatch. Take a full body 
picture of the kid there and show it to the guy behind the desk. Go back 
outside, play the Song of Passing twice (i.e., fast forward a day), and go back 
in. You've just got your first figurine. Welcome to the Nintendo Gallery. This 
INSANE mini-quest will take you at least two games to compete. Basically, there 
is a figure for everything in the game, and you get it by taking a picture (99% 
of the time) and giving it to the guy behind the desk. I will detail some 
specific ones in the walkthru, but if you don't really care, I don't blame you. 
This is for the most dedicated of fans. OH, and to get a COMPLETE set, you need 
the GBA. Sorry. Before you go, I suggest you go into the door to the right of 
the desk and look at your figurine. You can examine it closely, and if you do, 
you'll see an 8-bit octorok on the lower-left corner of his bag. Tres cool. You 
can leave now. Go back to the main island and get up to the room with the Deku 
Tree.

Finally, back here. Using the pods, shoot up in the air to where you got the 
leaf (the second landing). Now, jump and glide your way to the lowest ledge that 
isn't on ground floor, it has plants growing in the shape of an arrow on it.

Head up to the highest part of the cliff, then look at the island towards your 
left. Use the Wind Waker to play the Wind's Requiem, and set it to SW. This is 
important for the use of the leaf: always set the wind where you want to go. 
Jump of the cliff and use the leaf to get to that island. Cut up shrubs to 
refill your meter, then use the Wind's Requiem again, this time we want NW. DO 
NOT JUMP YET! Take note of a tornado circling the island you are on. Use the D-
pad to set the mini-map in the corner to close up. Wait until the tornado is at 
the southeast position of the island, and then jump east, using the leaf. You 
should land in it and be blown high in the air. Use the boost to float to the 
ugly looking island. If the flying guys (peahats) get too close, use the billow 
attack. Enter the cave... Dungeon #2!
`},{id:"06_g-forbidden-woods",title:"Dungeon #2: Forbidden Woods (Wood)",content:`
---------------------------------------------------------------
G) DUNGEON #2: FORBIDDEN WOODS (WOOD)
---------------------------------------------------------------

This room is full of green chuchus. Don't beware, but be aware. Go up the ramp 
to the right to get the map. Over on the left side of the room is a giant nut. 
Pick it up and head toward the door. Throw the nut at the plant there and kill 
it. You may need to try several times. Enter the next room.

Basically, you want to get around by going from platform to platform using the 
leaf. But first, let's drop to the bottom of the floor. It's pretty far, so 
here's the technique I use: use the leaf, then hit A, then leaf again, hit A, so 
on. It lets you land softly without using up too much magic. Also, as you 
haven't really gotten a chance to notice yet, the little baba buds that shoot 
you up in the air refill a bit of your magic each time you enter. If you get 
low, hop in one, and don't move at all. It'll shoot you straight up and you'll 
land right back in it, getting more magic. Repeat until you're topped off again. 
Alright, we're on the floor. Kill the enemies: a few green chuchus and some boko 
babas. You can get a staff by killing boko babas. Pick it up, light it with the 
torch, and use that to subsequently light the plant on top of the chest. It's 
nothing great, just a belt (knight's crest) that some later enemies drop, much 
like the drops from the various chuchus. We'll want 10 of these eventually, but 
for now it's no biggie. Now use the baba buds and the leaf to climb and glide 
your way to the top of the room (opposite where you entered). From the second 
bud, you don't want to go to the one closest to you, you actually want to glide 
over to the roof of the room that had the chest in it. Other than that, it's 
rather straightforward. When you get up to the ledge with the door (the one you 
haven't entered yet), there is a bomb flower in the grass (guarded by two green 
chuchus) you can use to blow up the plant on the door. You can keep climbing, 
but we won't. Not right now. Leave through the newly cleared door.

To your immediate left is a little wind switch thingy. It looks like a weather 
vane or something. Blow a gust of air at it with the leaf, and a gondola will 
come over to you. Hop onto it, then blow a gust at the door you just entered. 
That'll give you the momentum to get across the chasm. Enter the door.

You have no idea how much trouble this room gave me the first time I played, and 
I'll tell you why: I had no idea how to kill the stupid peahats. I've always 
hated them, even in Zelda 1. I eventually got through with pure luck and only 
later realized what to do. Luckily for you, you can learn from my mistakes. What 
you do is lock onto the little bugger, and blow a gust of wind at him. He'll 
land, stunned for a second, which is your chance to kill him. Take out the two 
down here, then the 3 boko babas. The one on the right turns into a baba bud, 
use it and then the next one you see to get up to the second floor. Use the wind 
switch to your right, then move the gondola (the same way) to the other side. 
Cut through the boards to get a ball. Bring it on the gondola, put it down, and 
move the gondola back to the other side (be careful not to blow the ball, it 
will fall). Use the ball to kill the door plant and go through.

Use a leaf to blow the ball from its current spot (you can't pick it up, 
tentacles surround it), then use it to clear the door. 

Head to the right using the grappling hook where needed. Get to the ledge with 
the locked door. First, get the rupees inside the little room hanging from the 
ceiling, then get the ball and continue to the right, where there is a door to 
be cleared. Enter.

Fall in the little chasm in the floor, and kill these spiny guys with the spin 
attack. Get the chest, climb out, and go on.

Be careful in this next room, it's completely filled with those floor tentacles. 
Just go slow and you'll be fine. Work your way around to the left first, using a 
bomb plant to blow up the bars and get the compass. Grab another one and throw 
it at the bars you can see but can't reach (tentacles in the way). Once that's 
gone, work back to where you entered and then around the other side. Open the 
chest for a key, then get back to the door (using the baba buds as a shortcut). 
Go back two rooms to the one with the giant plant hanging from the ceiling. Go 
to the left and enter the locked door there.

Use the wind switch and the gondola to get to the other side. Ignore the peahat 
for now. Enter this door. 

Kill some boko babas, a mothula (giant bug, these are new, no real tricks 
involved) and some peahats as you work your way up two levels to a set of doors. 
One is covered with plants, so go in the other one.

Mini-boss fight. It's just a flying mothula. This guy is kinda hard with the way 
we're equipped, but you can still take him. When he does his flying charge 
thing, you have an opportunity for a parry attack. Also, you can target him and 
blow gusts at him with the leaf, which will stun him. Eventually, you'll cut his 
wings off and then he's just a mothula. Get the chest for the boomerang. The 
game just got a billion times easier. Let's discuss.

If you hold the Gamecube controller the way it was built to be held, your left 
thumb is on the d-stick, left index finger on the L-button, right thumb on the 
B-button, and right index finger on the R-button. If you hold the controller 
that way, equip the boomerang to the Z-button and leave it there. You will play 
99% of the rest of the game with it there. From now on, I will not describe how 
to kill enemies in any detail, with a few exceptions. It should be assumed that 
you use the following tactic on EVERYTHING: lock on with L, hit with boomerang, 
pound with sword while vulnerable, repeat until dead. As always, it won't work 
on some enemies... at first. But even those that aren't susceptible to the 
attack can be made to be (usually). This is why you want it set to Z, because Z 
allows the quickest transition between boomerang and sword (simply because Y and 
X use the thumb, the same as the sword, so you'd need to get it back in 
position). Besides this combat usage, the boomerang is useful for other things, 
so we'd like it to be at our fingertips anyway. 

Back to the game. Above the door we entered, there is a pair of crystal 
switches. Hold in Z (if you listened to me) and move the cursor over each of 
them. You should see the same little starburst you see with the grappling hook 
if done right. Once you've targeted both, let go of Z and the boomerang will 
home in on them. You can target up to 5 things (switches, rupees, enemies, etc.) 
in one throw. Always target as much as possible. Leave the room.

Remember the pesky peahats? Not a problem with that technique I just told you. 
In fact, hitting them with the boomerang knocks off the propellers, rendering 
them flightless. Head over to the right side of the room (from this door) and 
you'll see a grapple pole. Hook on, then use R to climb up your rope and get on 
top of the pole. Grapple to the next one, and Hit R again until you are hanging 
straight down, then drop onto the platform below you. Use the moving platforms 
to climb even higher, finding a chest with a joy pendant in it. Drop down to the 
level we were just on and go to the door with two plants on it. Target them with 
the boomerang and they'll die. Enter.

Kill all these hanging tentacles with the boomerang (5 at a time), and use the 
leaf to float to the other side. This chest has another joy pendant. Enter the 
next room.

Target all 5 vines at once (important) to cut down the big flower. Drop down to 
where it landed (you may see a door with vines on it on the middle level, but 
we're not going there yet) using the leaf intermittently to slow your fall. Go 
in the door here.

Kill the peahat then kill the spiny guys from afar with the boomerang. Go to the 
right (can't go left) and kill the green chuchus. The blue tentacles regenerate 
infinitely, so get them out of your way and keep moving. Enter the door.

Jump across the flower hanging in front of you to get a chest (10 rupees). Cut 
down the flower and drop down to it. Kill the octorok like before (or with the 
boomerang). Grab the bomb flower and use it to blow up the boards. Enter that 
room.

**GBA note** The piece of land to your right as you enter the room has a 
question mark. Blow it up with a Tingle bomb to get another Tingle statue. **end 
GBA note**

Kill the peahats. Go around the room killing boko babas and spiny guys (both die 
after one boomerang attack). The furthest boko baba from the entrance turns into 
a baba bud, use it to get up a level. Use the wind switches to make the gondola 
come and carry you over to a bomb flower. Pick it up and hop to the edge of the 
gondola. Throw it into the hole in the ceiling of the room below. Eventually 
you'll get it and it'll kill the plant there that was blocking the chest. Drop 
through the same way and open it for another treasure map (#15). Crawl out the 
little hole in the back and leave this room the way you came in.

As soon as you enter, you're at a perfect angle to hit all 4 vines and cut the 
flower down again. Do it. Hop on the center and kill the octorok again. Use the 
leaf to propel your way downriver (it takes more than one gust, unlike the 
gondolas). At the bend are two octoroks you should kill, then keep moving the 
flower to the ledge. Kill three green chuchus and go through the door.

Go to the top of the hill, then while facing the door you came in from, turn to 
your right. Target this switch first, then the other four, moving clockwise 
around the room. Done correctly, you'll hit all at once and open the bars below. 
Get the chest for the boss key, then kill the two moblins that show up. The 
easiest way is what I call the modified boomerang strategy. Stun one with it, 
then the other, then attack either one. Repeat. Climb back up the hill where you 
can grapple over to another door. Leave.

Head forward and enter the door there. We're back at the huge flower that fell 
to the ground. From where you enter, use the wind switch to your left to create 
a tornado. Hop into the baba bud, then glide to the tornado using the leaf to 
rise up a level. Kill the two door plants and enter that door.

Kill the mothulas, get the chest (joy pendant), and go forward into the next 
room.

Kill any balls on the floor with the boomerang, you'll get stuff. One on the 
left side has a fairy you can bottle if you wish. Some have spiny guys or green 
chuchus, but they're simple. On the right side, you can grab a staff which you 
can light and burn the lid off the warp jar. Do it and get in. We're back in the 
first room. Go through the door to the second room. Use baba buds to work your 
way all the way up to the very top to that chest we couldn't get before. 
Boomerang the plant and get another treasure map (#1). Drop back to where you 
came in, return to the first room, and use the warp pot. Rekill any balls you 
wish and then enter the boss door.

                            BOSS: Kalle Demos

First of all, if you're going for a complete Gallery, take a picture. You won't 
be able to fit everything in the viewfinder, just center on the huge bulb.

The trick is to keep moving, running in circles around the room, as tentacles 
follow you and pop out of the floor. Wait until they do (behind you, if you're 
doing it right), and that is your chance to stop and take out 5 of the tentacles 
holding the boss up. They'll regenerate, so you want to do this as quickly as 
possible. After cutting them all down, it falls, exposing a core you can hit 
with the sword. Run in and do so. You're supposed to try and escape before it 
closes up, but it's not worth it. Do the extra damage that couple seconds will 
allow, and take the half heart or whatever penalty you get for still being 
inside. Repeat until dead (after about 3 falls).  Get your heart and enter the 
glowing spot.

Deku tree will talk to you a bit and give you Farore's Pearl. One left. Leave 
where we originally came in, and kill anything that gets in the way as you head 
back to King. Down by him, though, there's a mailbox that should be dancing 
around. If so, hit A by it and collect your mail, a heart piece. King will talk, 
hop in, use the Wind Waker to go NW (if need be, it should actually be set that 
way), and head to (2,4) (it's marked on your map).

You may get attacked on the way. If attacked by seahats (giant helicopter 
things), kargarocs, or gyorgs (sharks), 2 boomerang attacks will do the trick. 
Run from pirate ships. It's best to try and escape the helicopter things too. I 
hate them. You'll automatically land at this island too. We're not staying long. 
Quill talks to you. There's still a little to do. First, run through the little 
path to the other side of this tiny island and turn right. There is a little 
raft there with a guy on it. Talk to him, then give him the flower we got from 
Iceman earlier. In return, he'll give you a weirder looking flower. Now, give 
him this flower, and you'll get an even weirder one. Go back to King, but don't 
get on yet. Look directly behind him and you'll see a tiny island with a hill. 
Get on King and go there. Run around the side up to the top, then jump off and 
glide NW with your leaf. There are two islands separated by a little bit of 
water, and you want to aim towards the right one. On the wall is a little alcove 
you can land on with a chest you can get a heart piece from. Swim back to King 
and get on.

Head to Windfall Island (4,7), which is northeast, so set the wind that way.
`},{id:"06_h-return-windfall-pirate-fun",title:"Return to Windfall Island and More Pirate Fun",content:`
---------------------------------------------------------------
H) RETURN TO WINDFALL ISLAND AND MORE PIRATE FUN
---------------------------------------------------------------

For some reason, you stop as you enter the square, just raise your sail and 
continue on to the island. You'll land automatically again. You see Tetra's ship 
as you enter. From your landing point, turn around and head towards the building 
you see (the bomb shop). To the left of the building is a ledge you can shimmy 
across to gain access to the back. On the back wall of the building is some ivy 
you can climb to enter a little hole. Go forward and you'll see a scene with the 
pirates. They're robbing the shopkeeper. Oh well. PAY ATTENTION! Tetra will 
leave at one point, and the two remaining pirates will mention a password (3 
times). You should be able to remember it long enough, but if not, go talk to 
King and he'll tell you again. When the pirates leave, you leave too.

Go to the pirate ship (it's over by the gravestone) and talk to the door. Enter 
the password exactly as it was said (case matters), and if right, you can get 
in. Head down to where you got the bag earlier, and there will be another game 
for you. Step on the right switch to open the bars, then just swing across, 
using R to change angles when needed, and you will get bombs as a reward. Nice.

Go back to King. He's moved to the docks, just head for the red triangle on the 
minimap. Now you're saying "Let's go fight a dungeon to get that third pearl," 
right? Wrong. We're headed back to Outset Island, where we started way back at 
the beginning. Hop on boat, set the wind southwest, and use your map to plot a 
course for (2,1).
`},{id:"06_i-third-pearl-raising-tower",title:"Getting the Third Pearl and Raising the Tower",content:`
---------------------------------------------------------------
I) GETTING THE THIRD PEARL AND RAISING THE TOWER
---------------------------------------------------------------

We could do a few other things now, pick up some upgrades and stuff, but we'll 
wait, and I'll explain why later. For now, we just want to get to Outset Island. 
Again, you land automatically. 

**GBA note** Turn on the Tingle Tuner here and wander around the isle. 
Eventually, Knuckle, Tingle's blue brother, will show up on the GBA. He will 
yell at Tingle for putting a sign on the Tingle Tower (which Knuckle carved) and 
will only forgive him if Link does what he says (and you can't open any doors in 
the meantime). So, first, go to the bath which is behind Grandma's house. Hop in 
and Knuckle will tell you to go to a ladder no one uses: the one that leads from 
the pier into the sea, right under the watchtower you started the game on. Next, 
you need to go to the biggest rock on top of the hill, which is back up near 
where we found Tetra. Luckily it is on the near side, because the bridge is out 
(damn giant bird). Just go around the hill and get onto each of the three rocks 
there. It's easier than trying to describe it. Lastly, walk off the broken 
bridge. He'll say you win and do two things. A) He goes home (which means you 
can take his picture for the Gallery); and, B) he gives you the "hand-me-down 
Tingle Tuner." Where the Tingle Tuner is a Game Boy Advance, the HMD Tingle 
Tuner is a Game Boy Color/Pocket. It takes the place of one of Tingle's 
functions and is basically a store. It makes buying bait easier later, you won't 
need to find another shop for it. **end GBA note**

Head to grandma's house real quick if you have a fairy in a bottle. On the way, 
check the mailbox. I had 3 letters: a map of the traveling salesman's locations, 
20 rupees, and another heart piece. Yay. Grandma's in the kitchen/bedroom on the 
bottom floor. Get close, lock on, and use the fairy on her. She was sick, now 
she's better. She gives you soup for helping her, it refills hearts/magic and 
you get two doses per bottle. Plus, it's free. You can get more when you've 
drunk it all, too. Too bad you can only have one bottle of it at a time.

I'd skip this like the other upgrades, but we're already here, so might as well 
get it. Plus, when I explain why I didn't want you to get the others, this 
doesn't fall under that category. Head up to where we saved Tetra. Little imps 
and chuchus will attack you on the way. Kill them or run, it doesn't matter. The 
rope bridge is broken, so you'll need to set the wind W and jump from the 
highest point on this side and float over. Head into the cave, and go around the 
way we did to get Tetra. At one point, you'll see a large boulder. Blow it up 
with your new bombs and drop into the hole you find. Go to the giant shell and a 
fairy will make it so you can hold more rupees. If you didn't have a fairy to 
save grandma, you can grab one now and go back to the house. Otherwise, make 
your way back to King.

Hop in, equip your bombs to one button and sail around the island, staying 
relatively close to it. Eventually, you'll be sucked into a whirlpool. While 
going around, if you look at the cliff wall, you'll see a portion that is 
obviously out of place. Shoot it with your bombs (a cannon when on the boat). 
There are three sections, top, middle, and bottom, blow them all up, from top 
down. We're not made of bombs, so be conservative. You'll enter the new cave 
automatically, and a giant fish (Jabun) will say hi. He gives you the third 
pearl. That was easy. Now we need to put them in place.

If you look at your map, three spots are now highlighted. At each, there is a 
very small island with a statue. You put a pearl in each one. The only 
"difficult" part is getting there. Just avoid any enemies and you'll be fine. My 
suggested course is NE from here to (4,3), then N to (4,5), and lastly SE to 
(6,4). While you are at (6,4), look around for a boat with some people on it 
wearing diving helmets. That's Salvage Corp. Sail up to them and the head guy 
will give you treasure map #34. Not too shabby. Thanks to DarqKnyght for the 
info. Avoid whatever enemies you can, kill whatever you can't. Also of note, you 
want to avoid the giant tornado. When you see it, you'll be able to tell the 
difference between it and a regular one. If you get sucked up, you'll be 
randomly teleported and need to correct your course accordingly.

After you put all three orbs in place, you get a cool cutscene. Our next 
destination is the tower we've just unlocked. Luckily, the cutscene took care of 
our travel arrangements for us. Sail in.
`},{id:"06_j-tower-of-gods",title:"Dungeon #3: Tower of the Gods (Water)",content:`
---------------------------------------------------------------
J) DUNGEON #3: TOWER OF THE GODS (WATER)
---------------------------------------------------------------

The first part of this dungeon requires the use of King. First, you have to 
realize there is no wind inside of the tower. How do we get King to move then? 
Simple. There are actually two ways to do it. If you raise the sail and hold up 
on the D-stick, you'll move. Likewise, if you hold down R, then hold up on the 
D-stick you'll also more. The other thing about this dungeon is that the water 
level rises up and down periodically. Some areas need a high water level, others 
like it low.

That being said, head directly to your right upon entering. In the lower right 
corner of the room, you'll find a door (when the water is low). Enter.

Here you meet yellow chuchus. They're easy enough, the only thing about them is 
that you need to stun them first with the boomerang, then attack, or else you'll 
get electrocuted (similar to the green ones from Link to the Past). When the 
water raises, you can get access to the upper part of the room. Several of the 
wall panels are bombable, namely the center and far panels on the left side and 
the center panel on the right. The important one is the right-center one, which 
when bombed, reveals the map. Move the crates around to get at it, if need be 
(you don't have to, though). Leave where you entered.

Head to the upper right corner of this room now. There is a ledge you can get at 
once the water level is high. Hop up there. You'll see a door with bars on it. 
To solve the simplest puzzle ever, pick up the statue slightly to the right of 
the door and place it on the glowing spot. Enter.

Kill the yellow chuchu. Wait for the water to lower, then jump down into the 
little pit here. You want to move a crate so it is on the glowing spot, then 
climb out. When the water is down, the crate will be on the switch, creating a 
bridge. When it is high, the crate will float, making the bridge disappear. 
Using that knowledge, run across the bridge while it is there, grab the weird 
statue, then run back across. Leave the room (still with the statue).

Turn left, and you'll see a little place where you can put the statue (it looks 
exactly like where you took it from). Doing so lowers a gate. Hop in King and 
head to where it was (the center of the right side of the room). Go around the 
bend, hop up on the ledge, and put the statues where they so obviously belong. 
Enter the door.

There's a crate puzzle here. Wait for the water to lower, and hop down. Walk 
straight forward, skipping the first and second crate. Grab the third one you 
see on the left, and pull to the right so it is in line with the first two. Then 
pull it two steps towards the back of thee room. Wait for the water to raise, 
then use the crates to get back to the ledge you started on. Done correctly, you 
should have the crates set up as 4 equally spaced stepping stones to the other 
side of the room. Grab a staff, light it, hop across, and light the two torches 
there. Grab the chest for a key. Leave, killing the yellow chuchus.

Hop into King and go to the left side of this room now. You should see three 
large panels that you can blow with your cannon. Do so. Go across to the area 
you just exposed (you'll need to get out of King). Kill the yellow chuchu and 
head upstairs. Kill another, grab a staff, make a torch, and head back down 
(with low water). Light the two torches here. Run back up and claim your new 
chest, a joy pendant. Enter the door up here.

Kill the red bubble (two sword swings, you don't need to boomerang him) and grab 
the compass in the chest. There's a second chest here too, but we can't get it 
yet, so leave.

Go back downstairs and into the door here.

Kill all the chuchus to make light stairs appear. Use them to get up top, grab 
the weird statue, and run out the door when the water is low.

Bring the statue up top and put it where it belongs. Finally, we can enter the 
dungeon proper. Hop in King, sail over to where you just opened (center-top part 
of the room), and go into the door there.

I HATE this room. It's not difficult, it just rubs me the wrong way, I guess. 
Besides, I've never liked these beam guys (beamos). Look at the center of the 
room (but don't step on the gold floor) and kill the two rats with the 
boomerang. Then grab one of the statues on either side of the door. Hug the wall 
and work your way to the other side of the room, where you can put it on a 
switch. Repeat. If you are more than one step from the wall, the beamos will fry 
you. Be careful. There are only two statues, so stand on the third switch 
yourself to activate the platforms. Hop from one to the other to get to the top 
of the room. **GBA note** The last platform goes higher than you need to because 
it lets you reach another (stationary) one. Tingle bomb a question mark there 
for another gold statue. **end GBA note** Enter the door.

There's not much to do here (yet), so head over to the right door and enter.

Kill the yellow chuchu and hop on the floating platform. Ride on it to the other 
side, but don't get off yet. Let it go back and forth one more time before you 
do, that way the yellow chuchus on the other side will make like lemmings and 
you won't need to bother with them. Go through the door.

Go up the light stairs and run to the other side of the room. Look at the black 
tablet, then hit R. This will lower the platform and this black statue will 
follow you. Go slowly around the little maze, not cutting corners, and make your 
way back to the beginning of the room. You will need to pick up the statue and 
jump across the gap once you pass the maze. Carry it through the door.

Fairly straightforward. While carrying the statue, ride the platform to the 
other side and go through the door.

You will automatically drop the statue and a scene will happen. In the center of 
the room, a tablet will appear. Go up to it, read it, then crack out the Wind 
Waker. Play Left, Center, Right, Center to learn a new song. This lets you take 
control of certain people and things. Important now and in the two next 
dungeons. Go into the left door now.
Kill the red bubble, then grapple across to the other side of the room (straight 
across, not left). Kill the other red bubble and go in the door. Grapple across, 
walk up to the statue and hit R. Pick it up and put it down to get it to stop 
following you. Walk to the switch and stand on it to make a path appear. While 
doing that, play the Command Melody. You are now the statue. Move across the 
bridge, then hit either R or Start to switch back to Link. Grapple back across, 
pick up the statue, and go through the door.

Place the statue on the switch, then grapple over to the right side of the room. 
Enter.

This is a mini-boss, but you should pay a lot of attention to this fight. You 
fight about a million of these guys later in the game. There are two ways to 
fight this knight (a Darknut, BTW, another member of the Zelda 1 reunion): the 
easy, safe way, and the easy, slightly risky way. They're very similar and start 
out exactly the same. Draw your sword, lock onto him, and use the parry attack. 
You will cut off a piece of his armor. Now, for the easy, safe way,  repeat 
until he is dead. For the other way, repeat until his helmet is off. Now he's 
susceptible to our standard tactic of boomerang-then-attack. If he still has his 
chest plate on, though, you will need to sneak around behind him to attack until 
it gets cut off. The second way is slightly faster because you can get multiple 
hits in, and it's also invaluable when fighting multiple darknuts (the parry 
attack becomes less useful when three guys are swinging at you). Anyway, pick 
whichever tactic you like best, then kill him. You will get the bow and arrows. 
Yay. Leave.

Right in front of you is an eye switch. Shoot it with an arrow. Kill the red 
bubbles too if you can. Grapple back to the statue, pick him up, carry him 
across the moving platforms and through the door. Ignore the little guys that 
start hopping around.

The statue will automatically hop away again. Head back into the right door (the 
first one we entered in this room).

Kill the yellow chuchu, then shoot the flying guy (wizzrobe) with an arrow twice 
to kill him. Hop onto the floating platform and face right. Shoot the eye switch 
when you see it, then hop over to the new platform that appears. Ride it up and 
enter the door.

There are two giant hopping statues here (Armos knights). The trick is to shoot 
them in the eye, then throw a bomb in their open mouths. Kill both to make a 
chest appear (joy pendant). Leave, ride the platforms again, and go back to the 
room where you learned the Command Melody.

Go into the only door you haven't yet, the top one.

Kill the keese with the boomerang. There are two platforms here suspended by a 
chain. Hop onto the left one and turn left. Blow up the wall and enter the door 
here.

There are two circles on the floor. One has a Triforce emblem, the other has 
something different. Stand on the different one and play the Wind's Requiem. A 
chest will appear and the Armos knights will come to life. Kill them and take a 
treasure map from the chest (#30). Leave.

Go straight across from where you are now to another door. Enter it.

Shoot two red bubbles with arrows. On a platform to your upper right, you can 
barely make out an eye switch. Shoot it. There is another to your lower left, 
shoot that too. Now hop from platform to platform, working your way up to a 
chest in the upper left with a key. You can keep climbing to find an eye switch 
above the door, which creates a chest with a joy pendant. Using the leaf, you 
can glide back to the door and leave.

Climb the ladder to your left, and pick up a statue. Hop to the right suspended 
platform and drop it there. Take another and do the same thing. Now if you hop 
on the left platform, it won't sink and you can continue across to the locked 
door. Enter it.

Climb on top of the gold block you see in front of you. Use the leaf to glide 
over the beams, press R, and get the statue. Play the Command Melody and have it 
hop onto the switch. Switch back to Link and run past the stopped beams. Pick up 
the statue and head out the door.

Drop the statue and kill the wizzrobe. Leave the statue where it is, and get to 
the other side. This time, you'll need 3 statues to weigh down the right side, 
hop back, get the black statue, get across, and go out the door.

With the third statue in place, a beam appears in the center of the room. Enter 
it to go up to the third floor.

In front of you are two statues. You're going to need to put each on a switch. 
Avoid the beamos by walking on the raised part of the floor close to the 
elevator thing we just arrived from. Step on the third switch to turn off the 
lasers and get the boss key. The statues are alive now (they are Armos, the 
little brother to Armos knights) and we need to kill them. Shoot them with an 
arrow to stop them, then hit the purple crystal on their backs with your sword 
twice to kill them. Once they're dead, you can leave through the only door in 
the room.

You want to climb these stairs, but you'll need to kill stuff. Two boomerangs 
will kill the birds, and an arrow shot will kill the beamos (but only while 
they're firing, and then it only takes out the blue ones; roll past the red 
ones). Make your way to the boss door at top. Smash the jars here to refill life 
and ammo, bottle a fairy if you need it, and go in.

                              BOSS: Gohdan

This boss is pair of floating hands and a head. He says he is going to test you. 
Again, take a picture if you're going for a complete gallery. Just make sure the 
head part is in it. It has several attacks. The head likes to rapidly fire 
fireballs at you, which you should roll out of the way of. The hands try and 
knock you onto the electric floor to the side, or clap together and smash you in 
the middle. What you want to do is hit each hand with two arrows, then each eye 
with two arrows, then toss a bomb in its mouth. If you run out of arrows, it 
will drop some for you. Why, I don't know. Seems to me it would be smarter to 
keep a weapon you're vulnerable to out of the hands of your enemy. Three bombs 
in the mouth will kill it. Get the heart and get out of here.

You're at the top of the tower. Climb the ladder here to a bell tower, and 
grapple onto the bell. As you swing, you will ring it, creating a little glowing 
spot in the water you and King automatically enter.
`},{id:"06_k-lost-castle-legendary-sword",title:"A Lost Castle and a Legendary Sword",content:`
---------------------------------------------------------------
K) A LOST CASTLE AND A LEGENDARY SWORD
---------------------------------------------------------------

You're teleported under the sea to Hyrule Castle. Good old Hyrule. The first 
thing you'll notice is that everything is black and white (except for you). Head 
into the castle.

A bunch of big moblins and darknuts were apparently raiding the castle. They are 
frozen in time, though, so ignore them. Down some stairs are three huge 
triangles. You want to try and get them onto the Triforce mark on the floor by 
pushing and pulling. It's hard to describe exactly what to do, so I'll leave it 
up to you. It's not difficult. Once you do that, the Link statue will move, 
revealing some stairs. Go down them.

Climb down the stairs here and go to the center of the room. King talks, and 
then you see... the Master Sword! Yank that baby out! Not only do we have a 
better sword now (twice as strong), but we've also restored color to the castle. 
No greyscale for us! Of course, nothing comes without a downside. All those 
darknuts and moblins are alive now. 

Head back upstairs and kill them all. Yes, ALL. This is the hardest thing you've 
done yet, but there is no real strategy to offer. Try and isolate the enemies. 
Kill the moblins first, as they are easier. And USE YOUR BOOMERANG! It should be 
second nature by now, but I can't emphasize enough how much it will help you. 
Once they are all dead, head up the stairs and out of the castle back to King.

Sail into the glowing spot and get back to the world. Once you do, turn around 
and sail right back into the tower. Head over to the left and go to the room at 
the top of the stairs. Shoot the eye switch to open the way to a chest 
containing a treasure map (#6)). Get back to King and leave the tower.
`},{id:"06_l-return-forsaken-fortress-destiny",title:"Return to the Forsaken Fortress and a Destiny Revealed",content:`
---------------------------------------------------------------
 L) RETURN TO THE FORSAKEN FORTRESS AND A DESTINY REVEALED
---------------------------------------------------------------

Our next destination is (1,7), the fortress from back at the very beginning of 
the game. You may run into the giant tornado on the way. If so, get caught in it 
and then shoot the pink guy (Cyclos) at the top three times with your arrows. Do 
it quickly or you'll be teleported. He'll teach you the Ballad of Gales for your 
troubles... Sort of. He doesn't give it to you as blatantly as some of the other 
songs, he gives you a hint, though. The song you want to play is Down, Right, 
Left, Up. Personally, I encountered him on this trip in square (2,6). You may 
have different results, I dunno. Whatever the case, if you get the song, ignore 
it for now. It's just one of those "if you see him, you might as well get it 
now" things. Plus, once you do it, he doesn't appear anymore, so no more random 
teleports. Yay.

In the center of the south wall of the island is a giant wooden door. We've got 
the Master Sword now, stealth is for suckers. Watch out for fire from the 
turrets surrounding the door and blow it up with the cannon (two or three 
shots). Head inside.

King drops you off at much the same place you started the last time you were 
here. Like I said, stealth has gone the way of the dodo (or Gleeok for a Zelda 
reference), so don't worry about barrels. Besides, there aren't any to be found 
out here. Head up the stairs to the big courtyard dealie and a mini-boss.

If you fought Ganondorf in Ocarina of Time or Aghanim in Link to the Past, this 
will be a piece of cake. This black floaty guy (Phantom Ganon) is a big pong 
fan, so let's play with him. Use your sword to bounce his fireballs back at him 
(he may bounce them back at you too, so stay alert). Eventually, one will hit 
him, which stuns him. Run over to him (take off your lock-on targeting while 
running, you move faster) and whack the hell out of him with the sword. Repeat 
until dead. Open the chest for the hammer. Yay. Head in the only door you can 
reach.

Head in the door on your right.

Walk through the little hall to the end where there are these spiky post things. 
In case it wasn't obvious, whack them with the hammer to pass. Take the door 
ahead of you and to the right.

If you get caught by moblins this time, it isn't necessarily your demise, so 
kill these guys and continue. At the end is a jail cell. Move the barrels to 
find the switch that will open it and get the chest for a heart piece. We've got 
4 now, which makes a complete extra heart. Yay. Head back through the door, 
smack the posts, and back through that door to the first room.

This time take the other door, which is past some posts and a trio of moblins. 
Head around the corner and watch out for what appears to be a black hole in the 
floor. These are floormasters (cousins of the wallmasters from previous games), 
and they are nasty. As you walk close, they will grab you and pull you into the 
hole. If they do so, you get warped somewhere, usually the beginning of the 
dungeon. The trick here is the same you use for every other enemy, boomerang 
then sword. You can only get in one sword hit safely before they need to be 
stunned, though, so be on your toes. After six or seven hits it will die. 
Continue around, kill a moblin, and go into the door.

There is a moblin bust above the door that will fire lasers at you, so hug the 
right wall. Get the chest on one of the bunks, then climb up. Head through the 
door on the right. 

By the way, you could have gotten the heart and the rupees the last time you 
were here, but why? It's much easier with the sword. If you want tactical 
espionage action, go play Metal Gear Solid instead, okay?

As you pass through the hall, there will be an alcove on the right. Inside is a 
ladder. Climb up and take out the light bokoblin. Yes, we have to do this again. 
After you do that, look to the right of the ladder before you climb down. There 
is a break in the wall here that lets us jump to a ledge below and get at 
another light bokoblin. Two in one shot! Nice! Climb back down the ladder and 
head down the little ramp here. Enter the hallway when you get a chance, and 
take the door to the left.

Kill the bokoblin. The last time we were here, we could swing to the other side 
on a light. Apparently they wised up and took the light out. No matter. Use the 
leaf to make the jump across, pound the posts, and continue. If you don't make 
it, there is a ladder on the bottom that will let you climb back up and jump 
right to the target ledge anyway.

What's a hall without alcoves? Take the left, up the ramp, ladder, take out the 
last light bokoblin. Yay. Back down both ladder and ramp, left into the hall, 
take the door.

Again, the light we were friends with has gone AWOL, so glide across and take 
the door.

Neither alcove is of particular importance, so take the door.

Head around, killing the moblins if you care to, and take the stairs to the same 
door we took the last time we were here.

Up the sets of stairs which are now infested with imps (miniblins, really, but I 
call them imps). Kill any that get in your way, but they spawn infinitely, so 
keep moving. Go left at the landing and continue up. Pound the posts and move 
on. Shimmy across two ledges, go up some stairs, smack the post there, and into 
the door.

Finally! With the help of Tetra (who takes particular note of your sword (and it 
takes note of her too, apparently)), we've saved Aryll! After only about 22 
pages of walkthru. And that stupid bird didn't stop us! Oh wait, he must have 
heard me, because here he comes now. Luckily, Aryll and the other girls are 
safe, because the room starts flooding and they probably would have drowned. 
There are a series of ramps along the walls of the room. Run up them. The bird 
will both attack you and the ramps periodically. If the way becomes smashed and 
you can't cross, wait for the water to rise high enough for you to swim across. 
Work your way to the top of the room, ignoring all the bokoblins. If need be, 
boomerang them and get away. If you stay and fight, the bird will have time to 
break more ramps, which is bad. If you see him getting ready to attack, roll out 
of the way. It's faster. At the very top of the ramp, the bird will land and not 
let you pass. I'm getting sick of this guy, aren't you? Smack him in the face 
with the hammer to knock him down in the water. Go up the last bit of ramp and 
climb out onto the roof. Boss fight!

                           BOSS: Helmaroc King

We owe this guy some payback. And a free portrait if you're going for a complete 
Gallery. Take note of the spikes on the walls. Is there any game where touching 
these is GOOD for you? Same here. The bird will fly around and eventually do one 
of two things. Hopefully, he'll land. Run up close to him, then run away and 
he'll chase you. After about four steps, he tries to peck at you and his beak 
gets stuck in the concrete. Stupid bird. Smack him in the head with the hammer 
while he is prone. You want to do this four times to break his helmet. The other 
attack (which he does much more often after the third time you hit him) is a 
diving attack. Roll out of the way. Simple enough. Alright, once the helmet 
comes off, you want to entice him to get his head stuck again. While he's stuck, 
smack him as much as you can with the sword. After breaking the helmet off, if 
you use the grappling hook on his head, he'll do the peck attack right away. He 
also likes to flap his wings now to try and push you into the spikes. Just keep 
rolling towards him to stay out of danger (you can't roll while locked on, 
remember that). After you hit him enough (usually three sword barrages), he will 
DIE. Throw ME into the ocean, will you? Chump. Take the tastiest heart in the 
game and go up the ramp. Go in the door you see.

Prepare for some MAJOR plot exposition. If you don't like spoilers, skip the 
next two paragraphs.

At last, Ganon. Nobody but NOBODY kidnaps our sister and gets away with it. 
Plus, he's the one who told that bird to toss us into the sea. We need 
vengeance! We've got the Master Sword, and Ganon is fazed a little by just its 
presence. Charge! Oh, wait, we suck. After getting slapped clear across the room 
(literally), Ganon pulls out his own sword to finish us off. Ganon tells Link 
that by pulling the Master Sword, he completely unlocked Ganon's power. Things 
look grim for our hero! Just as he's about to deal the final blow, Tetra shows 
up to distract him. It works long enough for a temporary reprieve, but he grabs 
Tetra by the arm. The Triforce of Power (that Ganon has, ALWAYS) reacts, and he 
is shocked. He calls Tetra "Zelda" and cackles evilly. That can't be a good 
omen. Quill and Komali swoop in and save you both. And not a second too soon. 
Hey, look, it's Valoo! He torches Ganon's place. Well, looks like we won't be 
seeing him again. Right.

You're back at the tower (you know, the last level). You and Tetra sail into the 
shining spot again. Lead her into the castle (take her picture here if you're 
going for the Gallery) and then down to where you got the Master Sword. There's 
somebody here. Evil music plays... Oh, wait; it's just the King of Hyrule. He 
explains how Hyrule was sealed under the sea by the gods to protect it from 
Ganon. He also tells you that he is King. Then he reveals Tetra's destiny. She's 
been carrying a large chunk of the Triforce of Wisdom around with her and she 
didn't even know it. The King pulls out the missing piece, puts them together, 
and Tetra is revealed to be Princess Zelda herself! You are charged with two 
quests. The first is to power up the Master Sword so you can fight Ganon. The 
second is to find your own Triforce, the Triforce of Courage. Zelda will wait 
here until you're done. Make it snappy. Go back to King and get out of here.
`},{id:"06_m-upgrading-collection-run",title:"Upgrading and Collection Run",content:`
---------------------------------------------------------------
M) UPGRADING AND COLLECTION RUN
---------------------------------------------------------------

First thing first, if you haven't found a huge tornado and learned the Ballad of 
Gales yet, do so (see it detailed above, right after the getting the master 
sword). I BELIEVE (not sure, so don't quote me on this) he can be found in the 
following locations: (2,1), (2,4), (2,6), (3,5), (4,2), (4,6), (5,4), (6,2), 
(6,6). Those are all the places you can warp to once it's learned, so it would 
make sense that he be there. Once you learn it, play it (or for those who 
learned earlier, play it now). Warp to (2,6). This is the only thing you 
technically need the song for in the game. You will end up in a little pond 
inside the island. A scene will occur, and a little girl fairy will give you the 
fire and ice arrows (and then hits on you!). To switch, hit the R button while 
the bow is drawn.

Okay, I mentioned a little while ago that there were some upgrades we could go 
get, but I said to skip them. I did for a two reasons: A) We'd need to sail 
around the world, which is much easier to do with the help of the Ballad of 
Gales (and without having to worry about random teleports); and, B) To get ALL 
of them, you need the hammer, which we just got now. That being said, let's go 
get a bunch of stuff. Teleport out of this place with the song, and choose (2,1) 
as your landing point (the first island). 

Land on the island and go see Orca. He'll ask you if you want to practice 
swordplay, say yes. You have three hearts, you have to hit him as much as you 
can. The trick is to lock on, hit in four-slash bursts, and USE YOUR SHIELD. 
Don't back him into a corner, and don't use the parry attack (it does only one 
hit, and it is safer to block than dodge). Don't try to hit him after he starts 
a swing. If you have trouble, take it slow, just hit and run away. You need to 
get in... 500 hits. I know, it's insane. Cut me some slack. Actually, the goal 
is 1,000 blows, but STOP after you hit 500. You get a heart piece. Then, if you 
wish, you can go back and shoot for the moon. If you do 4-hit bursts, he 
counters after the 2nd set (8th hit overall) 99% of the time. If he blocks an 
attack, he will counter 100% of the time. So be ready to use your shield. It is 
not difficult; if you lose, it's because you get impatient. Trust me. Get 1,000 
blows in and Orca will call you master. When you're done here, go back to King.

Set the wind NW and sail to (1,2). Once you get there, take out your telescope 
and look around the sky (slightly above the water, not like straight up). When 
you see a flock of seagulls ("And I raaaan, I ran so far awaaaay"), sail towards 
them. I'd give you more detailed directions, but this is one of those random 
things. As I said when you first got it, the boomerang should always be 
equipped. As you get close, you will be sucked into a whirlpool by a giant squid 
with 8 eyes. Your job is to take his eyes out with your boomerang. Target 5 each 
time, and you need to hit them each 3-4 times to close them permanently. This is 
time sensitive, so don't be a slacker. If you take too long, he'll spit you out 
and you need to go find him again (in another random spot in this square). Once 
you take out all the eyes, a small glowing spot will appear where he died. 
Approach it (don't use the sail, hold R and up on the D-stick to approach it 
slowly), and use your grappling hook (by holding the button down until you hit 
bottom) where you think it was. This is tedious because it disappears as you get 
close, but you'll get it. Try playing with the camera angles to make it easier 
to guesstimate. When you do it right, you'll pull up a treasure chest with 100 
rupees in it. Time to move on. Warp to (4,2).

Right in front of you when you land is a small island with a seashell building 
on it. Go there, hop off King, and swim to the island (which will be shortened 
to "Go there" from now on). Head around to the door. I also had mail in the 
mailbox (20 rupees and 1 rupee), so get that if you do too. This is a fairy 
island, there are several in the game. Each one gives you an upgrade of some 
sort, and we'll hit them all. Use a bomb to blow up the planks on the door and 
hop into the hole. This is just like where you got a bigger wallet, so run up to 
the fairy and get more bombs (you can hold 60 now). Leave through the shining 
light and get back on King. On this island, you might also encounter blue 
chuchus. Treat them the same as yellow ones, stun first then attack. They have 
an electric shock sometimes, so it's better to be safe that way.

Set the wind S. When you get to square (4,1), look for the seagulls and engage 
another squid. This one is easier because he only has four eyes. Kill him to 
make a fairy appear. She more than doubles your magic meter, which is always 
helpful (and necessary in this game). Now, you can sail back to (4,2), or just 
teleport. I teleport because it is safer. Set the wind NE and go to (5,3).

(5,3) has another 8-eyed squid. Kill him and take your 100 rupees. Set the wind 
E and sail to (6,3).

Use your map to get to almost the exact center of the square. There you should 
find a raft and a submarine. Go inside the submarine, and you'll fight 3 
bokoblins and two mice. Kill them all and you'll get a chest with another bottle 
in it. Yay. Leave and get ready for something kinda tedious. Just outside of the 
submarine is a raft with a bokoblin on it. I want you to do the following: lock 
onto him, use the grappling hook to grab a joy pendant off of him, kill him 
(that one's optional), walk in and out of the sub again, repeat. We need to get 
at least 50 joy pendants total (you already have some, so you don't have to do 
it 50 times, but how many you have already depends on what enemies dropped, 
etc.; personally, I needed 20 more). If you are fairly confident in your 
abilities, you can also steal some from the bokoblins in the sub, speeding up 
the process. The bokoblins aren't the threat, though: the rats are. They can 
clear out your wallet mighty fast if you don't pay attention. It's up to you, 
though. When you are done that, get back on King. Set the wind NE again and go 
to (7,4).

Slightly to the SE of the center of the square, you'll find another fairy 
island. I had mail when I got here, too. The first cost 201 rupees and was a 
green map that tells me where the Triiforce maps are (more on that later). The 
second was free and gave me 20 rupees. To open this one, you need to pound the 
switches with the hammer. Do so and go down to get more arrows. You can also 
grab a fairy here for your new bottle, which is a good idea. Head back to King, 
set the wind NW, and go to (6,5).

We're looking for the last 8-eyed squid here. Take him out for another hundred 
rupees. It'll help recoup the losses from that Triforce map map. Set the wind W 
and go to (5,5).

Also slightly SE of center, you'll find a fairy island. This door is blocked by 
a boulder. Inside is a bomb upgrade, now we can hold 99. You may be wondering 
why anyone would ever need so many. I did at first. You'll be thankful when you 
get into some heated naval battles. Those are a bit later, though. Head back to 
King and warp to (6,6).

When you arrive, land on the island and look along the cliff walls. Eventually, 
you'll see a string of bomb flowers leading up to a boulder. Hit one with a fire 
arrow to blow up the boulder and get a chest with 200 rupees in it. Go back to 
King, set the wind N and go up a square to (6,7). Look around for the seagulls 
and engage a squid. This one has 12 eyes. It may take a couple tries, but you 
can kill him. Just don't dilly-dally and make sure you hit at least 5 eyes in 
each throw. The glowing spot doesn't yield rupees this time; instead we get a 
piece of heart. Wasn't that worth it? Warp to (4,6).

Land on the island, we have several fun things to do here. Time to play with the 
moon. Using the Song of Passing, set the time to night. Look up at the sky for 
the moon. If it is full, stop. If not, play the song again twice to get to the 
next day. Repeat until you have a full moon. Take a picture of it you're your 
picto box. Make sure there are no clouds in front. Wander through the town until 
you see a blonde girl (Mila) standing around. Talk to her, and she'll yell at 
you. Continue up the path, and you'll see her move. Follow her. If she spots 
you, she'll run away, so the trick is to not get spotted (if you are, enter any 
building and leave again to get her back to the starting point). If you stay at 
wherever she stopped last, that's usually the easiest. She'll go all around 
town, ending up near Iceman's store (where you got the sail way back when). 
She's trying to break into a safe. Run up to her and talk to her. She gives you 
this huge sob story. Just choose the top option 6 times and she'll change her 
thieving ways and give you a bottle as a reward.

Now (still night) go to the red door next to where you found Mila and go inside. 
Talk to Iceman and he'll tell you about an auction. Go to it. This is the most 
bizarre auction ever, so listen up. What you want to do is mash the A button. 
There is a little meter, and when it hits the top, you make a bid. Now, you want 
to make the last bid, so here's how to do it. Iceman calls out things with 30, 
10, and 5 seconds left. After the 30 second warning ("Time is running out, dear 
friends"), get your meter up 1/2 of the way real quick and just leave it there 
(don't get it up too high, because it slowly goes up on its own to discourage 
poachers like us). After the 5 second warning ("Only 5 seconds remain!"), make 
your bid, and make sure it is at least 20 rupees higher than the highest bid. 
The people are all stunned (they get stars, like you whacked them with the 
boomerang) and you've got a guaranteed victory. You can win 2 treasure maps (#38 
and 18) and a piece of heart here, assuming you have the rupees (you should, so 
I'll assume you do; if you don't, come back here later and you can do it then, 
the auction runs every night). After you get those three, he sells joy pendants, 
which are NOT worth buying.

Still at night, there is a windmill in the center of town. Find that building, 
and wander around the left side. There is a little path that leads to a ladder. 
Climb it. Stand on the switch there, and if the wind is set N (it should still 
be), the windmill will start turning. Climb down the ladder and go into this 
building. Go up the stairs to the left and through the door up top. Walk up the 
walkway until you get to the end. From here, you can jump into little cars 
hanging from the windmill. Get into one and ride to the top (but don't get off). 
At the top is a crazy turning thing. Shoot a fire arrow into the hole, and you 
will light a lighthouse beacon. This will create a chest on a tiny little 
island. Ride the car back down to the walkway, and talk to the guy here. He'll 
give you a piece of heart. Four pieces again! Yay. Go inside and back 
downstairs. Talk to the pirate guy (this guy is HILARIOUS) and choose the top 
option twice. He wants to play a game of Battleship for 10 rupees. You have 24 
shots to sink 3 squid (one each of two squares, three squares, and four squares, 
and they were ships in the Japanese one). Win once to get a piece of heart, win 
again to get a treasure map (#7). Beat the record of 20 bombs to win treasure 
map #23. The only real hint I can offer is they like to put at least two of the 
squid touching each other. Not always, but like 80% of the time. Good luck.

Head over to the left side of the bomb shop. You can float to the little island 
with your chest on it if you set the wind to S and use the leaf. It has a heart 
piece in it.

Set the time to day now. Head into town and you'll see a guy wearing purple 
sitting on some stairs. Talk to him and he'll say "You don't understand me." 
Talk to him again and he'll tell you to prove you understand him by showing him 
a picture of his favorite thing. Show the moon picture we took and he'll be 
impressed and reward you with treasure map #31. Continue up the steps and you'll 
see two women talking to each other. Talk to them (you really just eavesdrop) 
and they scold you. Do it again and they mention Lenzo and a mystery woman. 
Hmm... 

Talk to Iceman now (not the store part, on the other side where you first got 
his flower), and he will reward you with the Magic Armor. I don't find it useful 
at all, but we're going for completeness.

Go back up to the walkway and hop on a windmill car. When you're on the opposite 
side of the wheel as you started, you can jump off and onto a little balcony. 
Inside the door here, you can find a treasure map (#29), 50 rupees in a chest, 
and several more in the pots. Crawl through the hole between the chests and 
you'll drop down into Lenzo's shop. Over by the door, Lenzo is chatting up the 
lady who is outside the potion shop a lot. He'll yell at you for scaring him, 
then take a picture of him and his "lady friend" together. Show it to the 
gossiping women and they'll reward you with a treasure map (#24).

Go now to the building to the left of Lenzo's shop. It is a school (has a 
chalkboard hanging out front). Talk to the lady inside here (Miss Marie) twice 
and choose the top option (twice). Go outside and talk to the little kids here 
(specifically, the one in the hat). Choose the top option. They want to play 
hide 'n' seek or something. Head down the path through the town and through the 
gate. There is a tall tree here (we're near the docks). Roll into it to knock 
down a kid. Chase him around (the roll attack is fast, keep using it) until you 
catch him. Another kid is behind the bomb shop, where you snuck in to find the 
pirates. Catch him too. The third kid is behind the tombstone. Lastly, head up 
the ramp near the gravestone. Head through the arch here and turn right. Head 
through that arch and turn left along the ledge. The last kid is behind the 
bush. Catch him (looks like a girl, but it's a guy). Once all four are caught, 
they give you a heart piece. Talk to the Miss Marie, choose the top option, and 
she'll reward you with 50 rupees. When you leave, hat kid will talk to you 
again. They need a birthday present for Miss Marie, and she loves joy pendants. 
There is one in the tree near the bomb shop they want to give her. Roll into it 
to get it. They talk to you some more. It's in your spoils bag, equip it and 
give it to the Miss Marie. She'll give you 20 more rupees. Now, if you have 20 
or more joy pendants (I told you to get 50, so you should), give those to her 
and she'll give you a piece of paper (the deed to a cabana). That's important 
later, but we were here already. Lastly, give her the rest of your pendants (at 
least 30), and she will give you the Hero's Charm. This item gives you a life 
bar indicator for enemies (Go into your menu, hit R so you are on the quest 
screen and select it. Hit A, and it will bring up a screen, select "Equip" and 
hit A again. If it annoys you, just de-equip it.), which can come in handy.

Leave the school and go talk to the lady in the orange dress (Linda) who you 
needed to take a picture of to get the color picto box. She'll say something, 
then talk to her again. She'll say she needs to send a picture to her true love. 
Take a picture of her (full body) and go look for the guy she was with the first 
time you took her picture. He is walking around town somewhere. Show him the 
picture and he'll ask her out on a date. Talk to him again and he'll say they're 
going for coffee. Skip a day with the Song of Passing and go into the place 
above Iceman's shop. You can talk to the two on their date and they reward you 
with a heart piece. ANOTHER 4! Wooo! 

Now go to the wooden stairs Linda usually stands near. Go up them and into a 
door. A man in a top hat will yell at you (because he thinks you're a mailman... 
Hmm...). Go over to the huge bay window and talk to Maggie, his daughter. She is 
upset because her love, a MOBLIN, is still back at the Forsaken Fortress. She 
gives you a letter, so go mail it. It costs 5 rupees. Skip another day with the 
Song of Passing, and go back to Maggie's house. Quill is there, but Maggie's dad 
is giving him a hard way to go (he's a mailman!). Quill leaves, so go to the 
coffee shop to find him. He'll give you the letter to deliver to Maggie. Do so 
and she'll be so happy, she gives you another heart piece. Also, if you have 20 
skull necklaces (from moblins), give them to her father and he will give you a 
treasure map (#2).

That's it. Set the wind NW and sail to (3,7). There is a fairy island here. Hop 
into the hole (no tricks necessary) to get an even bigger wallet (5000 rupees 
now).

Use the Ballad of Gales and go to (3,5). There is another 12-eyed squid here 
somewhere. Set the wind whichever way you need to to get to him and kill him. 
That's the last one. You get another heart piece for beating him. Set the wind 
NW and sail to (2,6).

To the E of center, you'll find a pair of islands. On the smaller one is another 
trader (like we did with the flowers before). Give him your exotic flower and he 
will give you a pinwheel. Set the wind S and go to (2,5).

In the NW corner of the square, there is an island. Sailing around it is the 
traveling salesman. Hop off of King, swim to his boat, and go inside. Buy the 
bottle for 500 rupees. We'll get the rest later (and if you don't have 500 
rupees, you can get the bottle later too). Sail W again to (1,5).

At (1,5), there is another fairy island. Pound the switch to gain access and get 
more arrows. Also, fill both of your new bottles with fairies. Go back to King.
`},{id:"06_n-power-bracelets-fire-mountain",title:"Power Bracelets and Fire Mountain",content:`
---------------------------------------------------------------
N) POWER BRACELETS AND FIRE MOUNTAIN
---------------------------------------------------------------

Our little collection run is almost done, but we need to go get two items. 
Teleport to (6,6). Set the wind S and go to (6,5). Slight NW of center, there is 
a volcano. Fire an ice arrow into the lava spewing from the top to freeze it. A 
5 minute timer will start, so hurry up. Hop off of King and climb to the top of 
the volcano, where you should jump inside. To get to the top, go right at the 
first fork, then shimmy across a ledge to keep going. Once inside, kill the 
keese you see with the boomerang. Hop across the platforms in the lava (to the 
left), killing more keese. At the end, there are two magtails. Kill them to make 
a chest appear containing the power bracelets. Once you get them, the timer will 
stop. Pick up the giant stone head and pass through to the shining light that 
will take you back outside. Get back to King and teleport to (4,2).
`},{id:"06_o-iron-boots-ice-ring-isle",title:"Iron Boots and Ice Island",content:`
---------------------------------------------------------------
O) IRON BOOTS AND ICE ISLAND
---------------------------------------------------------------

Set the wind E and sail to (5,2). SW of center is another island. This is an 
iceberg with a dragon's head (stone) spewing frost. Shooting a fire arrow 
through the frost will do wonders (and start another 5 minute timer). Hop off 
King and onto the shore. There is a chest here encased in ice. Shoot it with a 
fire arrow and open it for a treasure map (#36). Run around until you can climb 
up onto the ledge, and then run around the ledge until you can jump to the 
platforms in the water. Ice is slippery, so you may find crawling easier on the 
narrower parts. I do. Jump across the three platforms to the dragon's head and 
go in. Go across the ledge to your right (the icy one), kill the keese, and keep 
going. Slide down the little slide (don't go off the side) and open the chest. 
That'll stop the timer and give you iron boots. Equip them and use them to put 
them on. Walk around the non-icy ledge. When you get to the point with the wind, 
turn right and drop into the hole. It's a little hard to see here. Use fire 
arrows to thaw out the moblins (there are 2), bokoblins (2 of those also) and a 
darknut (don't thaw them all out at once!). After killing them all, a chest will 
appear with 100 rupees. The light will teleport you back outside. Get to King.
`},{id:"06_p-enlisting-medli-help",title:"Enlisting Medli's Help",content:`
---------------------------------------------------------------
P) ENLISTING MEDLI'S HELP
---------------------------------------------------------------

Time to get back to our quest. There are two dungeons we need to go to, and the 
order doesn't really matter. I prefer to do the earth level first, because I 
find the boss easier and the level more fun on a whole. I just really like 
shining the lights. I'm a freak that way. Teleport to (2,1) and land on the 
island. Did I say we were getting back to our quest? Almost. One quick thing 
here. Remember where you dropped off the pigs before? Well, one of them got 
obesely fat. Go pick it up and take it out of the pen. We needed power bracelets 
to pick this guy up, that's how big he is. Take him down the path and across the 
bridge. After you cross, walk straight ahead to a little wall there. You'll see 
two spots of black soil on the ground. Drop the pig and spread some all-purpose 
bait on the right hand one. He'll eat it, dig down, and a piece of heart will 
pop out. Bring him back to his pen and go get on King.

Sail E to (3,1). At almost dead center is an island. Put a hyoi pear on your 
head and take control of a bird. Fly to the top of this mountain and there is a 
piece of heart you can fly through. Switch back to Link and you'll have hit four 
pieces again. Nice. 11 hearts now. Pick up the stone head to go inside the cave. 
Check out the tablet, then play the Wind Waker. A song will pop up, Down, Down, 
Center, Right, Left, Center. A zora (from Ocarina of Time, not Joe Millionaire) 
will appear and talk to you. She says you need to find someone with a harp like 
hers. Go to King and teleport to (6,6).

First, head back to near where you learned the Wind's Requiem. As you pass 
through the little cave that leads there, turn right. Pick up the boulder you 
see and jump into the hole. Go through the door here into a room with 6 doors: 
the one you just came through, one with bars, and four with torches above them. 
As you go into each torch door, you will appear in a nearly identical room, 
except with enemies. Kill them and the torch will light, then go through an 
unlit torch door. Repeat until all are lit and the bar door will open. Go into 
it to get a chest with 50 rupees. Hey, every little bit helps! Leave this room, 
then go through the door directly across from you to get to the light pillar. 
It'll take you outside. Now head to the bird town.

Go up the ramps to the door directly left of the mail sorting guy. Turn right 
and grapple across. Climb up some ledges and a ladder to find Medli. Look, she 
has a harp. Talk to her, then play the new song (Down, Down, Center, Right, 
Left, Center) on the Wind Waker. You work your midget elf charm on her and she 
agrees to come with you. Yay. Okay, actually, she faints and the zora convinces 
her to go. You're back in King, so get back to that other island. As you 
approach, you'll automatically land. King tells you you can use R to call Medli 
and have her follow you, or use A to pick her up (just like those statues from 
the tower...). You're inside the cave, so go up to the tablet and play the song. 
Medli joins in and the tablet shatters. You hop into the hole and the shadow 
dungeon.
`},{id:"06_q-earth-temple",title:"Dungeon #4: Earth Temple (Earth)",content:`
---------------------------------------------------------------
Q) DUNGEON #4: EARTH TEMPLE (EARTH)
---------------------------------------------------------------

This is easy enough. Pick up Medli, and jump off the ledge towards the door. 
She'll flap her wings and you'll glide over to it. Pick her up and go through.

As soon as you enter the room, drop Medli and go on ahead. You'll want to do 
this in every room, clear out all the enemies before solving the puzzles. So, 
kill the three moblins, then grab Medli again. Go up the stairs on the left and, 
holding Medli, glide over to the pillar you can reach from up here. Put her down 
and stand on the switch. That remark earlier about Medli being like the tower 
statues wasn't random. Crack out the Wind Waker and play the Command Melody 
(Left, Center, Right, Center). Now you're Medli. If you hit A, you'll start 
flying. Fly over to the next pillar and stand on the switch. The bars will open. 
Fly down to the door. Switch back to Link and jump down to join her. Pick her up 
and use the new door.

Drop Medli and kill the red and green chuchus. To kill the black ones, you need 
to get them to walk (ooze?) into the light. They'll turn to stone and you can 
smash them good with your hammer. Shoot a fire arrow at the top of the warp jar 
to open it. If you so desire, you can also burn the banners with fire arrows to 
get a joy pendant and 5 rupees (you'll need to use your boomerang to snag them). 
Time to learn the most important technique in this dungeon. Switch to Medli and 
have her step in the light. When you do, her harp will react. If you hit A now, 
you hold the harp in front of you and shine light (hit B to stop). You can aim a 
little, but you need to be looking in the general direction of what you want to 
shine at. First, there is a faint frame of a treasure chest you can see back by 
the warp jar. Focus light on it for a second or two, and it'll turn into a real 
chest. Now turn around and focus light on the two statues that sit between the 
doors. They'll disappear. Switch back to Link and snag the map (in the chest) 
and the magic bottle (behind one of the statues). Grab Medli and go through the 
door (the one you didn't just come from).

There are no enemies here, so you don't need to drop Medli. Instead, carry her 
into the light on the right, put her down, and switch to her. Shine the light 
into the fog in front of you to find a switch. Shine it so there is a path to 
it, and, while still shining, switch back to Link. Have him pound the switch 
with the hammer (if you get fog on you, you can't use items, so stay out of the 
fog). Pick Medli up and go into the new room.

Drop her and look around. Two red bubbles will come out of coffins. Kill them. 
At the back of the room, on the left hand wall, there is a ladder. Climb it. 
Pull the huge block there as far towards you as you can. Switch down to Medli 
and, using the new light, make the chest appear. Have Medli run to the corner by 
the switch. Switch back to Link and open the chest for a key. Two floormasters 
will appear. The one back by the chest doesn't care about you, just Medli. Keep 
her away from it. There is another up by the door that is much more "friendly." 
Kill it. Grab Medli and (avoiding the floormaster) head back to the fog room 
(we'll do the other room here later).

Run straight across to the locked door and enter.

Drop Medli. Kill the red and green chuchus, then burn all of the flags on the 
walls. One will expose light. Use that to turn two black chuchus to stone. Put 
them on the switches to make stairs appear. Run up (ignoring any more chuchus 
that appear) and push the huge block over the edge. Go back and kill all the 
chuchus. Switch to Medli and have her fly up to the door. Switch back to Link 
and use the huge block to get up there too. Grab her and go through the door.

Drop her and kill the floormaster. 

Mike 'hobbit' Macnamara:

"Also when fighting floormasters 'rang then to stun them then fire an ice
arrow then as soon as possible(while the floormaster is iced) fire a fire
arrow. it will kill him faster(the same goes for any multiple hit creature
that can get frozen solid)"

If you are in trouble, use that method, but I'd rather save the magic. Up to 
you.

Push the first block all the way to the left. It will click in place. That will 
open some light. Switch to Medli and stand in it. On the walls, there are little 
emblems. "Sun spots," if you will. Shine the light on them (there are 4) and the 
statue that is sitting on a block until they all disappear. Switch back to Link. 
Pull/push the blocks into place. Climb up and get the chest (a compass). Switch 
to Medli, have her fly up, then switch back. Grab her and go through the door.

Drop her and go up the stairs. Kill the two moblins. The ghosts (poes) will give 
you trouble. Get them to drop their lanterns (try hitting them with the 
grappling hook, it works sometimes) and they'll possess you. It screws up your 
controls for a few seconds (or until you get hit). Either way, once everything 
is dead, stairs will appear. Don't go up them yet. Switch to Medli and have her 
fly up to the right side of the room, where there is light. Use it to fry the 
statues across the way, then hop back down. Switch to Link and grab the 
butterfly from the chest. Grab Medli, go up the stairs and into the left door. 
Drop her and jump down into the pit. There are five coffins here. As you 
approach each, the lids will fall down (and do damage, so don't approach head 
on). Three have re-deads (zombies with huge hoop earrings). They scream and 
latch onto you if you're not fast, so, um, be fast (and for god's sake, take 
them one at a time). 

Pius has this tip:

"Also, about redeads, remember at the beginning when he makes you crouch to 
sneak up on the pig? you can do that with redeads, get right next to them, stand 
up and smack'em hard. =)"

One more has a 10 rupee piece, and the last has a key. Once all the re-deads are 
just deads, the ladder will drop and you can climb out (with the key). Grab 
Medli and go back through the door.

Go into the locked door. You can't bring Medli in here.

After a step, a stalfos knight will appear. These guys are a cinch once you know 
what to do. Stay away and throw a bomb at him. It will explode, blowing him 
apart. Wail on the skull with your sword. Repeat until dead (if you're lucky, 
you can kill him the first time). After he dies, two more will appear. Take them 
one at a time.

Mike 'hobbit' Macnamara offers this strategy: 

"I found out the easiest way to kill a Stalfos Knight. Make sure you have Bombs, 
The Bomerang and the Hammer all set then target Him and throw a bomb(making sure 
it lands infront of him) and when he blows up boomerang his head then use the 
hammer on his head. Instant kill."

After they are dead, stairs will appear leading up to the mirror shield. Grab it 
and a light will appear in the center of the room run down and stand in it. Use 
your shield like Medli's harp to shine a light on the mask above the door (you 
need to have your sword or another one-handed weapon (i.e. boomerang, but not 
the hammer, etc.) drawn to use your shield, remember). Leave.

Medli is to your right, but ignore her for now. Go kill the moblins (again). You 
can kill the poes the right way, but it's not worth it. Let them possess you. If 
they don't drop their lanterns, climb up to where the light is and shine it on 
them until they turn solid, then kill them with your sword. Once everything is 
gone, switch to Medli. Fly up into the light and shine it down into the center 
of the room. While still shining, switch to Link. Stand in the light beam that 
she is shining and use it to break the sun spot below her. Switch back to Medli. 
Go into the new corridor Link opened and use the light to break the statue. 
While still shining light where it was, switch back to Link. Use the beam to 
break the sun spot and get more rupees. Grab Medli and go through the door here.

We're back in this room. You can use Medli to glide down out of the fog. Go into 
the door on your left (the first room we entered from here).

Drop Medli and kill the red bubbles and "your" floormaster. Pick her up and 
bring her back to the switch, avoiding "her" floormaster. Drop her on the switch 
and go into the door (without her).

Break the sun spots for a joy pendant. Leave.

Medli is back by the other door, grab her and leave.

Drop her and switch to her. Have Medli stand in either light and shine it at the 
nearest eye of the huge mask. While still shining, switch to Link and have him 
shine on the other, activating the sun mask, lighting up the room, killing the 
fog, and most importantly, creating stairs. Grab Medli and go down them and 
through the door.

Drop her and go down these stairs. Meet the blue bubbles. Shoot an ice arrow or 
blow a gust at them with the leaf to put out the flames, then kill them with 
your sword. Try not to fall down. **GBA note** From the side of the room you 
start on (i.e., before crossing the bridge), use the deku leaf to glide over to 
the platform on the left. Glide to the next platform, then use Tingle to bomb 
the question mark on the little ledge here. Hop over to it, kill the red bubble, 
then open the chest for the fourth golden statue. **end GBA note** After the 
bubbles are dead, run back and grab Medli. Bring her to the tablet, drop her, 
and play the dungeon's song (Down, Down, Center, Right, Left, Center). She will 
join in (again) and the tablet will shatter (again). Grab her and go through the 
new door.

Drop her and kill the re-deads (if you shine light on them, they get stunned, 
making it easier). Shine light on both mirrors to break the large statues, and 
then shine on the small statue directly to break it. Now grab Medli and go into 
the door that was on your right as you came in (though it was behind a statue).

Drop her and go down. This part is a little difficult. You have to run through 
the fog to the other side, but this place is full of floormasters. Avoid them as 
best you can. You want to go to the left side immediately, move up until a 
floormaster blocks your way, run across to the right side, then move up to the 
back wall, go left a little and you'll be at the end where there is a chest. 
Open it for a key and to make the fog disappear. Kill the floormasters one at a 
time (there are 6) to make another chest appear (with a treasure map inside, 
#12). Go back to the door, grab Medli and leave.

Drop Medli and go into the other door on this level (not the one you need to 
climb on a block to reach, and yes, we are leaving her here).

As you approach the fog, a floormaster will rise up. Shoot it three times with a 
fire arrow to kill it. There is still one in that fog, so be alert as you run 
across to the other side. Pull the statue into place. Burn the flags for a joy 
pendant. Hit the switch with the hammer to make light shine into the mirror and 
then the other room. Before jumping back into the fog, kill the second 
floormaster just like you did the first. Go back across and leave.

Switch to Medli and have her fly up to the higher door here. Switch back to Link 
and push the block up against the wall so you can climb up too. Grab her and go 
through the door.

Drop Medli and kill the enemies. Here, lure the poes into the light. They'll 
turn solid for easy disposal. Once they're dead, switch to Medli. If you stand 
in the light but at the right wall, you can shine onto the two statues that are 
next to each other. The third is trickier. Shine where the left-most statue was, 
then switch to Link. Stand in Medli's beam and use it to shine onto the third 
statue for a door. Grab her and go through it. 

Drop Medli and boomerang the keese. You want to go through this room (straight 
ahead first, then back to the right fork) slowly, opening each coffin and either 
killing or taking whatever is inside. The straight path has 2 re-deads and 20 
rupees at the end. The right path has a stalfos and a tablet at the end. Run 
back, grab Medli, and bring her to the tablet. Play the song to open it, grab 
her, and go through the door.

Carry her down the stairs, then drop her and blow open the warp pot on your 
right. Go to the left where there are some vines. Climb across and down them to 
the next set of stairs. Stop and switch to Medli. Fly down to Link then switch 
back. Pick up Medli, carry her down the stairs, to the door, and through it.

Drop Medli and switch to her. Fly to the ledge directly across from you and 
stand on the button. Switch back to Link. Drop down a level and start on the 
right side. Pull the first mirror until it drops into place. It will shine light 
right over a platform. Switch to Medli. Fly over to that platform and shine 
light to both break a statue and create a chest. Keep shining it at the chest 
(towards the front side) and switch back to Link. Open the chest for 50 rupees, 
then use Medli's beam to break four sun spots on the right-hand side. Pull/push 
the mirrors that were behind the sun spots and the statues into place. Now run 
over to the left side of the room. Pull the mirror that you can into place. 
Again, the beam is shining right over a platform. Switch to Medli, fly over, 
break the statue and create the chest. Shine the light to the left of the chest 
(from Medli's point of view) and switch to Link. Grab the chest (joy pendant), 
then break not only the 4 sun spots behind Medli, but also the one on the left 
wall next to the chest. Pull the two mirrors into place and watch the magic. 
Now, switch to Medli. Again, the light is shining over two platforms back near 
the giant mask. Go to one and while shining on the eye, switch to Link. Have him 
get on the other platform and shine into the other eye. The mask will activate 
and a new door will appear. Grab Medli and go into it.

Drop her. There are two blue bubbles here (remember, use ice arrows/leaf to make 
them vulnerable) and a knight. Kill them all. The way to the boss key will be 
opened, so grab it, then Medli, and leave.

You broke a total of 9 sun spots in this room. Four on either side exposed 
mirrors, leaving one more. Go to where that was and you'll find a door. Enter 
it.

Drop Medli and shine the light onto ONE of the coffins. A stalfos will come out. 
Drop down and fight him. Pull a block out of the wall to climb back up. Repeat. 
Once all three coffins are open and the stalfos are all dead, a chest will 
appear. Open it (treasure map #20), grab Medli, and leave.

Drop her and then switch to her so she can fly up to the door we first entered 
this room from. Switch back to Link and climb up there via the ladder. Grab her 
and leave.

Run up to where the stairs end and the vines start. Drop Medli and climb 
up/across the vines to the other side. Continue up the stairs to the first 
landing, then switch to Medli. Fly up to where Link is and switch back. Grab 
Medli and glide over to the boss door. Use the pots to restock and go in (Medli 
will stay outside).

                               BOSS: Jalhalla

This boss is relatively easy. He's a giant poe. You want to find the light and 
shine it on him until he is solid. Then you pick him up and throw him at one of 
the spiked columns along the walls. He will break into a bunch of little poes. 
Kill as many as you can until he reforms, then repeat. When all the little poes 
are dead, so is he. Grab your heart and walk to the shining spot (in the center, 
not just the light). Medli will come in, and with the help of the zora, they 
will play a little ditty and power up the Master Sword. Nice. You will be 
teleported back to King and it's time to go power this baby up one more time.
`},{id:"06_r-makar-lends-hand",title:"Makar Lends a Hand",content:`
---------------------------------------------------------------
R) MAKAR LENDS A HAND
---------------------------------------------------------------

The second sword dungeon starts a lot like the first. Teleport to (4,6) and sail 
N to (4,7) and an island there. Land and put on the iron boots. Walk through the 
wind and smack the weird boulder there with the hammer. Go inside the cave. 
Examine the tablet, then play your Wind Waker. The song is Up, Up, Down, Right, 
Left, Right. A weird boy will talk to you. He needs you to find someone with a 
fiddle. That fiddle looks a lot like the koroks. Hmm... Go back to King and 
teleport to (6,2). You'll be right at the island, so land. I had mail, a letter 
that cost 10 rupees, but gave me 20. Climb up the ledges and go left at the 
first fork. In the right waterfall, you can see musical notes. Hmm... Go back 
and take the right fork this time. Continue up to the first grapple point. 
Attach, but don't swing across. Instead, use R to climb down as far as you can, 
then swing into the right waterfall. You'll be in a little cave. Climb down the 
ladder and talk to Makar. Play your new song and there will be a little jam 
session. The leaf agrees to come with you. You're automatically back in King, so 
get baack to the island (follow the directions at the beginning of the 
paragraph).

Again, you'll automatically land, and, also again, you'll want to walk up to the 
tablet and play the song. Makar will play too, and the tablet will shatter. 
`},{id:"06_s-wind-temple",title:"Dungeon #5: Wind Temple (Wind)",content:`
---------------------------------------------------------------
S) DUNGEON #5: WIND TEMPLE (WIND)
---------------------------------------------------------------

Welcome to the second sword dungeon. Makar works much like Medli. He follows you 
if you hit R near him, and you can pick him up and carry him (he's not strong 
enough to be a glider, though). You can switch to him using the Command Melody, 
and he can fly or plant seeds in sandy patches. More on that second bit in a 
minute. Pick him up and go through the door.

Drop Makar and explore. There are some important things here you want to take 
note of. In front of you is a spring platform. What you do is climb on top and 
use your iron boots to weigh it down. Take them off again and you go flying. Got 
it? Now drop to the floor. First, kill the wizzrobe. These guys are all over the 
place here. Take this one out with your sword. You'll see two brown patches 
here, those are the sandy spots I mentioned. Walk forward under the tornados to 
fight a stalfos. There is also a warp jar here, burn the top off with a fire 
arrow. Go back by the sandy patches and use the spring to get back up top. 
Switch to Makar and drop down. Step on the each sandy patch and hit A to make a 
plant grow. After both are planted, a chest appears. Walk under the tornados and 
fly up to the ledge. Stand on the button to stop the tornados and switch back to 
Link. Drop down and get the chest (100 rupees), then use the spring to get back 
up. Use this spring here, and at the height of your jump, use the leaf to glide 
over to Makar. Pick him up and go through the door.

Drop Makar and kill the two Armos here. Use the leaf to power the switch and 
open a gate. Roll past the trap (that's the official name of the sharp thing, 
from way back in the first Zelda) then switch to Makar. Fly over the trap and 
plant two trees. The bars will open, so switch back to Link. Grab Makar and go 
through the door.

Drop Makar and switch to him. Fly to the right platform, plant a tree, then the 
left, plant a tree. Fly to the top and plant one more and the bars will open. 
The bad side effect of this is that 4 inescapable floormasters will appear and 
grab Makar. You automatically switch back to Link. **GBA note** If you drop to 
the floor, you can find a question mark. Tingle bomb it for the last golden 
statue. **end GBA note** Go into the door on your right.

Run to the center of the room and kill the two peahats (as you fight peahats in 
this dungeon, use the grappling hook on them; we need as many golden feathers as 
possible). You will see Makar, but he is in a jail cell you can't break quite 
yet, so leave him. Kill the two Armos knights and go through the door they were 
guarding.

Kill the peahats and roll past the trap. Don't drop down over the edge. Instead, 
stand on the weird tile you see here and put on iron boots. You'll break through 
and fall. Kill the floormaster and use the wind switch to open the gate. Kill 
the floormaster on the other side and use the spring form the first side to get 
back up (and for god's sake, aim towards the gate when you land or the trap'll 
smack you. Walk across the raised gate, grabbing the chest on the left (a joy 
pendant). Roll past the trap, kill two more peahats, and go through the door on 
the right.

What you want to do is use the leaf to glide into the tornado and then use the 
boost to reach the platform on the left. Step on the switch, to lower a gate, 
then use the leaf to get on top of it. A wizzrobe here will give you trouble, so 
take him out with a fire arrow (he's too far away to lock on, you'll have to 
aim). Use the leaf to glide into the tornado and then straight across through 
the hole in the gate there and onto a ledge with a chest (map). Drop to the 
floor and run back to the beginning of this room, and climb up the vines there 
to get back up top. Use the tornado and the leaf to get on top of the gate you 
opened again. Go through and jump to the ledge on your left. Use the leaf to 
jump to the next ledge. Now turn to your right and use the tornado and the leaf 
to glide through the other gate here (the one we haven't used yet). As you go 
through, keep gliding to the next tornado for another boost up to an open gate. 
Land on top and kill the nearby peahat. Ignore the wizzrobe and glide into the 
next tornado. It'll give you the boost you need to reach the wizzrobe and kill 
him. The other two peahats will probably attack you, so kill them too and go 
through the door.

First, burn the lid off of the warp jar with an arrow. Then step on the weird 
switch here. Doesn't do much, huh? Put on the iron boots. The added weight is 
enough to push it down and open up the huge metal gate in the center of the 
room. Jump into the center and fall all the way down to the bottom using the 
periodic float technique from way back when. Kill any peahats that follow you 
down and go through the door without a lock.

Pick a tile and use the boots to drop down. I like the second tile from the 
left. You'll see a couple statues, a box, a box with a spring platform, and a 
lot of spikes. Spikes are bad, so don't touch them. In the back of the room, 
there is a tile on the floor that is different. If you look right above it, 
you'll see a hole. You want to push the spring box on top of that tile. Next, 
take the other box and push it next to the spring box so you can climb on top. 
Do so and spring back up. Open the chest for a key and to stop the spikes. Go 
back to the other side of the room and drop through any tile. You'll fight 
either red chuchus, floormasters, armos, or green chuchus. Hop back up and 
repeat until all the tiles are broken and all the monsters are dead. Hop back up 
one more time to grab the shiny new chest that appeared (treasure map #5), and 
leave this room.

Run across and into the locked door for a mini-boss fight. It's a red wizzrobe 
that summons other enemies. He'll fly around the top of the room, you'll want to 
shoot ice arrows at him when you can (the better ones don't like ice). Take out 
the enemies he throws at you to make it easier. Once he's dead, kill any 
leftover summoned enemies to get a chest with the hookshot in it. You can 
grapple onto lots of things, but in this dungeon, you want to look for the 
bull's-eye mark. Speaking of, there is one in this room. Hookshot up to it and 
pound the switch with the hammer to open the door back out of here. Use it.

Hookshot your way up the walls. When you can't go any higher, if you look, there 
should be a ledge across the way with a chest. Glide over to it with the leaf, 
grab it (compass), and use the spring to go even higher. Continue climbing until 
eventually you reach Makar 's cell. Almost forgot about him, huh? Stand slightly 
to the side of the giant maoi statue (Easter Island head) and put on the iron 
boots, then hookshot the target. Instead of you going to it, the statue comes to 
you, leaving the cell open. Grab the chest for a joy pendant and then grab 
Makar. Head back to the center of the room and drop to the platform below and to 
the right of where you are. Drop Makar here and hookshot up to the next alcove, 
the one you first entered this room from a million years ago. Switch to Makar 
and fly up to Link. Switch back, grab Makar and go through the door.

Drop Makar and kill the wizzrobe. Hookshot your way up to the top using Makar's 
trees. Switch to Makar and fly up to Link. Switch back, grab him, and go through 
the door.

Drop him and kill the blue bubble. What you want to do now is switch back and 
forth, having Makar fly to the closest platform, planting a tree, Link hookshots 
to it and kills the closest bubble. Do that until you get to the top. Be 
careful, at the very top is a floormaster. Once you're up there, grab Makar and 
go through the door.

Put Makar on one switch and stand on the other to open a bunch of stuff. Grab 
him and go right back through the door you just left.

Work your way back down to the door you first entered this room from and go 
through it (with Makar, of course).

Work your way back down here too, going into the door that is straight ahead, 
not to the left.

Drop Makar. Roll past the trap, get up to the gate (if it's open, step on one of 
the switches to close it), then turn around and look up. You can grapple your 
way up to the top. Use the wind switch here to open the gate and make a floor 
for you. Over on the other side are some maoi heads you can pull down (boots and 
hookshot) for a joy pendant and some rupees. Break through the tile to get back 
down, fight some Armos, and get back to Makar. Grab him and go back into the 
room you were just in.

Go into the room on the right.

Back here again. Take note of the room across from you, the door that the Armos 
knights guard. Drop Makar and kill the peahat. Switch to Makar. Float down to 
the floor by slowly tapping A. Eventually you'll fall, but it'll be less. You 
don't actually want to go all the way down, just to the level where you got the 
hookshot. Here you can find two sandy patches, plant trees. A giant fan should 
start up. It goes on and off periodically. Fly into the tornado to get to the 
door I told you to take note of. Switch to Link before the enemies hit you. 
Glide across to Makar with the leaf using the tornado as a boost. Kill the Armos 
knights and the peahat that follows you. Don't go through the door just yet, 
though. Just above where you are now is an alcove you can reach with the leaf 
and the tornado. Up there is a chest with a joy pendant in it. Turn back to face 
the center of the room and look up and to the left. There is another alcove 
there. Use the leaf and tornado to get up there. Switch to Makar, fly up there, 
and switch back. Grab Makar and go through the door.

Drop Makar and kill the horde of armos. When they are dead, a gate will open. 
Grab the chest inside for a key, pick up MAKAR and leave.

Get back down to the door I told you to take note of (go one at a time), have 
Link pick up Makar and enter.

Remember this room? Drop Makar and take out the two peahats. Roll past the trap 
and drop through the hole on the left where a tile used to be. Kill the 
floormaster. Activate the wind switch and kill the other floormaster. Use the 
spring platform to get back up. Roll past the next trap and kill the two 
peahats. Switch to Makar. Fly over the traps (one at a time is safer) and stand 
in front of the tablet. Switch back to Link. Get in front of the tablet and play 
the dungeon's song (Up, Up, Down, Right, Left, Right). Grab Makar and go through 
the new door.

Drop Makar and kill the darknuts. It's tough because there are three, but not 
impossible. Try to separate one from the pack and pick on him. Also, if you cut 
the chest plate off, you can shoot fire or ice arrows at them. Once they are 
gone, a gate opens. The chest has the boss key inside, so take it. Grab Makar 
and get out of here.

Drop Makar and activate the wind switch. Get across to the other side, either 
one at a time or together, it doesn't matter. Go through the door back to that 
central room.

What I do is, while still holding Makar, jump right off to the bottom floor. 
You'll take a quarter heart damage, but that's nothing and it's quicker and 
easier. Hug the wall as you jump so you don't land in the fan (you'll land on 
the hookshot level instead). Wait for the fan to stop and jump through the hole 
to the area below it. Go into the locked door.

Drop Makar and kill the 2 stalfos and the wizzrobe. I kill the stalfos first, 
but it doesn't really matter. Then hoookshot your way up the sides of the room 
to the top, where there is a switch for you to activate (the kind you step on 
with the boots). Work your way back down using the boots to pull down any maoi 
heads. Some drop rupees and stuff, but 2 have bokoblins inside for you to kill. 
Once those two are dead (as well as everything else in the room), a chest will 
appear with a treasure map inside (#35). Grab Makar and go through the new door.

Drop Makar and kill the bokoblins and Armos knights. Walk to the edge, right 
before the tornados, and switch to Makar. Get to where Link is, and then fly 
across (above the tornados). Land on the other side and plant a tree, being 
careful not to be taken by the floormaster. Switch back to Link and hookshot 
across. Kill the floormaster and the flying plants. Grab Makar and go through 
the door.

Drop Makar and put on your iron boots. Don't take them off until I tell you to. 
There are three boxes, three traps, and a pit here. You want to use the boxes to 
block the first two traps, and then go get Makar. If you look along the walls, 
there are some brown outcroppings. Take Makar past the first two traps and put 
him down next to one of the walls, so when the wind blows him, he stops at the 
outcropping. Grab the third box and push it into the pit to make a bridge. Now 
go back and grab the box that is blocking the first trap, and pull it towards 
the chasm. We need this, and we don't want to get hit by the trap while moving 
it, so pulling is the way to go. One you're clear of the trap, move the box so 
you can push it across your makeshift bridge to block the third trap. Grab Makar 
and run across the bridge, past the third trap, and into the room. Once you're 
in the little room, you are clear of the fans and can take off your boots. Drop 
Makar by the tablet and play the dungeon's song. Restock, burn the lid off the 
warp jar, and enter the boss room.

                              BOSS: Molgera

This is a giant sand worm, but he's not that hard. You want to pull his tongue 
out with your hookshot and attack it with your sword. Be careful not to get 
sucked in (while tracking the tongue, do back flips (down on the D-stick and A)) 
and watch out for the little worms he sends at you. He also flies around the 
room sometimes, but he is slow and easy to dodge. That's basically it. The 
hardest part is locking onto the tongue with all the baby worms in the way. It 
took me four tongue pulls to kill him. Take your heart and walk to the center. 
Weird boy and Makar will jam again and the Master Sword will be fully powered 
up. Nice. You'll be teleported back out to King who will remind you of your 
other quest: to get the Triforce of Courage. In a move that hasn't been done 
since the very first Zelda, we need to go assemble 8 pieces. We'll do that and 
collect items all at the same time. Let's rock.



`},{id:"06_t-world-tour-exploring-globe",title:"Link's World Tour #1: Exploring the Globe",content:`---------------------------------------------------------------
T) LINK'S WORLD TOUR #1: EXPLORING THE GLOBE
---------------------------------------------------------------

We're almost fully equipped now, so we can tackle just about anything the game 
throws at us. What we're going to do is go to each square in the world and do 
what we can there.

One thing would get tedious if I typed it all of the time, though, so I'm only 
going to describe it once. EVERY square has three things: a buried treasure 
found via map, an island or island formation, and a map fish. The map fish can 
always be found relatively close to the island/island formation. You can see him 
jumping in and out of the water from far away. You want to approach him, lock 
on, and use all-purpose bait on him. He will return the favor by drawing you a 
detailed map of that square. We want to map every square. Therefore, you need to 
find and feed the fish in each one. I will call this "get your map", and it will 
be the first thing to do in every square (save the four you already have mapped, 
of course). Take note of the places you can warp to with the Ballad of Gales. 
Each time you are in one of those squares, check to make sure you have enough 
bait to make it to the next one. If not, warp to (6,6), buy some, then warp 
back.

Are you ready? Teleport to (3,5). Sail NW and then W to (1,6) (as you may have 
noticed, I stopped telling you to set the wind as I think it should be obvious 
by now). We don't need to go to (1,7) because A) it is mapped already; and, B) 
we've done everything we need to do there (at the moment). So, get to (1,6). The 
island is in the NE corner. Get your map, then prepare for battle. This is Four-
eye Reef. It looks like the face of a die, and all 5 other faces are represented 
in other squares. Inside are warships and cannon turrets. You want to kill them 
all. Do so and a chest will appear. This particular fort has 4 turrets (one on 
each "dot") and two ships. Once you make the chest appear, sail back to the 
entrance. Use your hookshot to hook up to a flag along the wall. Run all the way 
around the wall to the W face of it (you started on the N face). Get to the 
highest point close to the chest (which is on the upper left "dot"), set the 
wind to NE, and use the leaf to glide over to the chest, which has a treasure 
map in it (#19). Get back to King and sail S to (1,5).

We've been here before (it's a fairy island; Western Fairy Island to be exact). 
The island is slightly NW of center. Simply get your map and continue S to 
(1,4).

Three-eye Reef is located SW of center. Get your map and clear the fort (each 
dot has two turrets, one on either side, and there are two ships though one may 
come out of the fort). A chest will appear on the lower-left "dot." Get up on 
the wall (you always get up the exact same way, using the hookshot on a flag 
that is to the left as you enter) and go to the W face. Find the nice high 
point, set the wind E, and glide on over. Grab the chest for another treasure 
map (#32). Get back to King. We can dig up a map treasure here. Bring up your 
map screen, then hit Y. This goes to the treasure map screen. Select a world 
square, then hit R to select a map to compare it to. Obviously, we want (1,4), 
and we want treasure map #38. You can see a huge pillar of light shooting out of 
the water inside the reef, but I prefer to use the map as my guide. When you 
(the little triangle) are right over the X, drop your grappling hook. You get a 
chest with a piece of heart! Sail S to (1,3).

This place (Needle Rock Isle) is exciting. The island is to the SE of center, so 
get your map. There are three warships (one of which is gold and has a mohawk) 
near the island. Sink them all, and one will drop a special treasure chest (you 
need to haul it up from a glowing spot like when you fought the squids). Inside 
is a Triforce Map (#5). This is very important. Trust me. Land on the island, 
there's even more stuff to do. Now, there is a block of ice on top of a hole. 
Melt it with a fire arrow and drop down. There are a bunch of torches you need 
to light here (6, to be exact) using fire arrows. Look all around and use your 
telescope, that's the best advice I can offer because it is kinda hard to 
describe. You get 100 rupees for your efforts. Take the shining spot back out of 
here. A bird will attack you, so kill it. Run to where there is a fire. Use a 
pear to gain control of a bird. You want to fly up to the top of the spire here, 
avoiding the other birds. The easiest way I found is to spiral around it. You 
can also try to take out the birds beforehand with arrows, but I never have any 
luck. Anyway, at the top of the spire is a crystal. Fly through it to shut off 
the flames, then switch back to Link. Open the chest for a piece of heart. 
Finally, we can leave. Sail S to (1,2).

Diamond Steppe Island is dead center. Get your map. A few things here. First, 
there is some treasure to be found. Use treasure map #23. The chest you pull up 
has a piece of heart. Yay! Now, you can't "land", per se, on the island, but you 
can get close and grapple onto it. Do so and get up to the top. Jump into the 
hole. This is a maze of warp jars. Jump into the first one you see and it will 
take you to an area with four more (with lids that must be burnt off). Now, one 
is the one you just came through, one is wrong (and warps you back to the 
beginning), one takes you to a joy pendant, and one is right and will take you 
to another area of four jars (except the one that had a joy pendant is "wrong" 
now and takes you back). Continue until you get to the end where you grab a 
ghost ship map. Watch out for floormasters, especially the one at the end. He 
grabs you as soon as you land, so you need to be quick. Once you get it, leave 
and go back to King. Go to your treasure map screen and look at it. It's a chart 
that correlates moon phases to islands. One of them is the diamond island we're 
on. Basically, play the Song of Passing repeatedly so it cycles night-day-night-
day until that moon phase. When it is, sail around the island and you'll find a 
ghost ship. Sail into it. Drop down and fight a bunch of enemies (ghosts, a 
stalfos, a wizzrobe or two, and a re-dead). Kill them all to make a ladder drop. 
Climb up it and open the chest for another Triforce map (#4). Too bad you can't 
read it... yet. You'll be teleported back to King, and now it's day. Sail S to 
(1,1).

The island here is slightly W of center. Get your map, then land on Horseshoe 
Island. Ever played mini golf? Well, we're gonna play now, Zelda style. As you 
try to walk up, tentacles will pop up out of the ground. Behind them you can 
make out a flag. You want to take the balls here and get one into a hole that is 
in front of the flag. Do so and the tentacles will disappear. Do this for two 
more holes to get to the top and make a chest appear. Ignore it for now and drop 
into the hole. Kill the mothulas for treasure map #8. Use the pillar of light to 
get back out. Now, from up here, set the wind E and use the leaf to glide to 
your chest, treasure map #28. Hop in King and sail to (2,1).

Home again, home again, jiggety-jig. We don't need a map of here, so ignore the 
fish. You want to land and head up to the broken rope bridge area. There is a 
man there with a telescope, and if you follow his line of sight, you can see a 
giant stone head. Climb up to the highest point here, set the wind NW and glide 
to it. Once you land, pick it up and drop into the hole. This is a LONG mini-
dungeon. You have to go through 30 floors, killing enemies on each one. They 
don't drop items (though there are refills after each 10 levels). This is your 
last chance to back out, though you shouldn't need to. To continue, go into the 
hole. To leave, use the pillar of light. 

Here's a tip sent in from Ray Strife that may make your life easier:

"I have another bit of info I'd say it's more of a glitch than an info. Im 
taking credit for this and but I don't know if some one else has found this 
out.  Im guessing that your going to be the first one to post this info on a faq 
if you decide to post it.  You know on the mini dungeon on Link's home island 
where you keep going down the holes to advance and the enemies get harder as 
they go along?  Well, as you said that when you kill the badies they don't drop 
anything to help refill you magic meter or give you any hearts.  But I found out 
that if you use your grappling hook on them the grappling hook still steals 
hearts, magic jars, and rupees from the enemies."

If you're fighting hordes of enemies, it's not that wise of an idea, but when 
you only have a couple left, hey, give it a shot. Thanks for the tip!

Alright, here's what you'll fight, floor by floor:
1) A bunch of keese
2) A couple imps
3) Some bokoblins
4) Red chuchus
5) Magtails
6) Keese AND imps
7) Fire keese AND magtails
8) Fire keese AND bokoblins
9) 2 moblins
10) REFILL LEVEL (use the light to leave, hole to continue)
11) Peahats
12) 4 green chuchus
13) 5 boko babas
14) Bokoblins
15) A bunch of mothulas
16) Peahats AND boko babas
17) Green chuchus AND bokoblins (in jars)
18) Mothulas AND bokoblins
19) 2 Flying mothulas
20) REFILL LEVEL
21) 3 wizzrobes
22) Armos
23) 2 Armos knights
24) 6 or 7 yellow chuchus (in jars)
25) 4 red bubbles
26) 2 bokoblins AND a darknut
27) Wizzrobe AND 3 armos
28) 2 red bubbles AND 2 Armos knights
29) 2 darknuts
30) The end... ?

Stand on the blue mark on the floor and play the Wind's Requiem to create a 
chest. Open it for another Triforce map (#6). Now, for the astute observer, you 
can make the statue disappear and continue down using the light that shines 
after you open the chest. Only continue if you made it through here relatively 
unscathed, and if your 4 bottles are full (I suggest Granny's soup and 3 
fairies).

31) 6 Re-deads
32) 5 Blue bubbles
33) 6 Black chuchus
34) 5 Poes
35) 3 Flying mothulas
36) Moblins AND Re-deads
37) Flying mothula AND black chuchus
38) Moblins AND Poes
39) Blue bubbles AND Stalfos knights
40) REFILL LEVEL (except with no refills(!?!?), just rupees)
41) A CRAPLOAD of imps (at least 20)
42) A CRAPLOAD of chuchus (red, green, and yellow; use bombs/hammer to stun a 
    lot at once)
43) 5 Wizzrobes (hit the switch)
44) A CRAPLOAD of bokoblins (in the dark, too!)
45) Stalfos knights AND Re-deads
46) Moblins AND darknuts
47) Wizzrobes AND darknuts
48) 3 Stalfos knights
49) 4 Darknuts
50) Heart piece!

In the Japanese game, the bottom level was a stupid 10 rupees. Here, it's a 
piece of heart. Be happy. And that makes 4.

Use the pillar of light to get back out. Go to Orca's house. Give him 10 
knight's crests (you should have that many) and he will teach you the Hurricane 
Spin. It is an upgraded spin attack that uses magic. It isn't useful at all. But 
we're going for completeness.

Go down to King and sail N to (2,2).

NW of center, you'll find Five-eye Reef. Get your map, then clear out the fort. 
You should be getting good at this by now (no ships this time, just several 
pairs of wall turrets). Now, before you hookshot on top of the wall to get your 
chest, sail around to the upper right "dot" and use treasure map #12 to get 200 
rupees. Now get on top of the wall. Of course, they had to put the chest on the 
center "dot." Getting this will be a little more complicated than before, but 
not really since I am telling you what to do and all. There is a spot on the E 
wall that looks tempting to start from, but no. We want the S wall. Near the end 
is a high point you can use to glide to the lower left "dot" (you want the wind 
to be blowing N, but it should be anyway). Now set the wind NE and glide to the 
center "dot." Grab the chest for a treasure map (#41). Hop back in King and sail 
N to (2,3).

In the NE corner, you'll find our "island." As always, you'll want the map, but 
you may or may not want to wait, depending on where the fish is. See, Islet of 
Steel is really a metal fort, guarded by about 4 ships and 2 turrets. You may 
need to kill them all to get at the fish. Regardless of when you do it, you'll 
want to kill everything. Before you go inside, use treasure map #35 to find 200 
rupees right around the island. After that, head inside. Get over to the steps, 
walk up them, and play the Wind's Requiem on the blue emblem. Open the chest for 
another Triforce map (#1). After that, you can leave the fort and sail N to 
(2,4).

We were here briefly once before, if you recall, and our stop will be brief 
again. Greatfish Isle, is dead center. Stop to get your map, then continue N to 
(2,5).

We were also here briefly, too. On the way to the island, there are some pirate 
ships (S of the island) you can fight. One drops 100 rupees, the other drops a 
piece of heart. Both are very nice prizes. Just E of center, there are 3 
watchtowers. You have probably seen these on your journey. The two outer ones 
have 4 turrets each on them. Kill them to create chests. Now the matter of 
getting to the chests. The center tower has a weird ladder thing you need to 
hookshot onto (aim at least halfway up) to climb up top. The center and east 
towers each have stupid prizes (a golden feather and a skull necklace, maybe), 
but the west one has 100 rupees. You need to set the wind W, glide over, and use 
the tornado for a boost to get onto the tower. When you're done, back in the 
boat with you. Rock Spire Island is NW of center, get your map. You can use 
treasure map #2 to get another piece of heart. Sailing around the island is the 
traveling salesman. Stop inside to buy the treasure map (#4) and piece of heart 
(that's three from this single dinky island!) you couldn't get before. It'll 
leave us just about broke, but oh well. Now get to the island itself. This is 
pretty easy, you want to throw bombs at the boulders, timing them so they will 
blow up and take the boulders with them. Get past them to a hole, and drop in. 
Use fire arrows to light two torches here, then fight about a billion keese. 
Kill them all and get a chest with a treasure map inside (#37). Get back 
outside, hop into King, and sail N to (2,6).

We've been here several times. This is where we got the fire/ice arrows, but you 
can't reach that area from where we are. In fact, from where we are, there is 
very little to do. Get your map (the Mother & Child Isles are E of center). 
Using this and treasure map #29, get a 200 rupee piece. Continue N to (2,7).

Finally, somewhere new. Sail N of center to find the Star Island and get your 
map. Use it, in conjunction with treasure map #7, to get 200 more rupees. Land 
on the island. There are several large boulders, which you can either pick up 
and throw or blow up with bombs. It doesn't really matter either way. One has a 
hole under it. Naturally, drop into it. Kill 3 magtails, then 2 bokoblins, then 
2 more bokoblins (with shields), then 2 moblins, and you'll get a chest with a 
piece of heart inside (four again!). Leave, get on King, and go E to (3,7).

This is the Northern Fairy Island from earlier. It is SE of center. Get your 
map. W of center, there is a sub you can (and should) enter. There are 4 big 
moblins inside. Kill them and nothing will happen. Climb back up to the ledge 
you were on when you entered, and use the lanterns to swing across to a little 
door. Inside is a chest with a treasure map inside (#22). Grab it and leave. 
Around the island, you can pull up 200 rupees with treasure map #24. Sail S to 
(3,6).

Spectacle Island is SW of center. Get your map, and you can use it with treasure 
map #22 (the one we just got a second ago) for 200 rupees. Land on the island, 
and climb up to the guy on the little building. He's only awake during the day, 
so play the Song of Passing if need be. He's a lot like the guy from the 
Battleship game back at Windfall Island, but this is slightly different. You use 
the cannon to blow up targets. You get 10 shots to hit 5. Win and you get a 
piece of heart the first time and a treasure map (#17) the second time. The only 
downside is that it costs 50 rupees each try. Just take it slow. That's the only 
tip I can offer. Get back onto King and sail to (3,5). Or use the Ballad of 
Gales, it doesn't really matter.

S of center, you'll find Tingle Island. Get your map and then land. Climb up the 
tower to talk to Tingle. He'll translate Triforce maps at 398 rupees a piece. 
Get one done, but we'll come back for more later. **GBA note** If you found 
Knuckle, he'll be dancing around in some flowers. If you got the golden Tingle 
statues, they'll be here. Talk to the guy in pink (Ankle) and he will pay you 50 
rupees per statue, and a bonus 500 rupees for all 5. **end GBA note** Sail S to 
(3,4).

Another one of these. Cyclops Reef is located SE of center. You know the drill, 
get your map then clear the fort. Again, hookshot onto the wall. This time, we 
want to be on the E wall and glide W to the lone middle "dot." Open the chest 
for a treasure map (#21). Hop into King, but don't leave quite yet. If you 
noticed, we can get that treasure, the one from our brand new map, right here! 
So, go find it and pull up a chest with the light ring map. When there is a full 
moon, special glowing spots (the kind you pull treasures from) appear that 
aren't around when it isn't a full moon. This map tells you which squares have 
those. Not worth worrying about, but we're trying to be complete here. Sail S to 
(3,3).

Very slightly SE of center is a watchtower. Kill all the turrets (there are a 
lot), to make a chest appear. Hookshot up and kill 2 bokoblins. One chest has 20 
rupees, and the other (the one you made appear) has a piece of heart. Whee. W of 
center is Stone Watcher Island. As always, get your map. Land on the island and 
climb up to the top where there is a giant stone head. Pick it up, chuck it, and 
drop into the hole you find. This is another one of those places where you need 
to go into each room, kill the enemies inside, then come out and clear the next 
room. Not hard. Going clockwise around the center room, starting with the first 
door on your left as you first enter (which is the order I always clear these 
places in, for some reason): 4 armos, 2 moblins, bar door, 3 wizzrobes, 5 
bokoblins. After you clear the four enemy rooms, the center room will have 2 
darknuts. Kill them and the bar door will open (it's the one with the Triforce 
emblem above it if you get disoriented in the heat of battle). Enter it to find 
a blue emblem. Play the Wind's Requiem on it to create a chest with another 
Triforce map (#7). Leave, get on King, and sail S to (3,2).

We want to go S of center to find Shark Island. It's shaped like a shark, see? 
Anyway, get your map, then use it (with treasure map #16) to pull up a chest 
with another treasure map in it (#28). Land on the island. We've got a little 
switch puzzle here. First, clear out all the weeds, trees, and bushes. Now hit 
all the switches. Order may or may not matter, I did them in this order: gold 
switch, crystal switch, hammer switch, iron boot switch. The flames will die, 
giving you access to a hole. Go inside and fight imps, bokoblins with shields, 
moblins, wizzrobes, and darknuts. If you can beat this fight, you will have no 
problem with the rest of the game. For your trouble, you get 200 rupees. Leave 
and go S one more time to (3,1).

There is a sub located barely N of center. If you enter and kill a bunch of 
rats, you can get a treasure map (#14). The island itself we've visited a few 
times, it's Headstone Island (the earth dungeon). It's located SE of center. Get 
your map, then sail E to (4,1).

Two-eye Reef is N of center. As if I had to tell you, get your map and clear the 
fort. This is the easiest reef in one respect. Get on the wall and get to the 
highest point on the E wall (the one you start on). Glide W over to the lower 
right "dot" for a treasure map (#13). Sail N to (4,2).

Dead center is a trio of watchtowers. They form like an L, with a westernmost 
one, a southernmost one, and one in the middle. Kill all the turrets you see to 
create two chests (both on the center watchtower). Climb onto the W tower and 
glide over to the center one. Open the two chests here to get a skull necklace 
and treasure map #40. The other attraction here is Southern Fairy Island. This 
will be short. The island is NW of center, so get your map. Now, use treasure 
map #4 to get a piece of heart. Sail N to (4,3).

We've been here before; this is one of the islands where we placed a pearl to 
raise the Tower (Southern Triangle Island). It is located dead center. Get your 
map and continue N to (4,4).

Another sub can be found SW of center. Clear it to get a piece of heart (which 
makes four and yet another complete heart). Six-eye Reef, the last reef, is 
located NE of center. Get your map and clear it. Before you get off of King, use 
treasure map #6 for 200 more rupees. Now climb up on the wall and run to the 
highest point on the S wall (again, the one you start on). Glide N to get the 
chest, a treasure map (#26). Sail N to (4,5).

Another one of those pearl islands (Northern Triangle Isle). It is located dead 
center. Get your map, then use your brand new treasure map (#26) to pull up a 
map of all the giant squids (big octos, but they're not octoroks, they're 
squids, because they have pointed heads), which we killed already. Sail or 
teleport N to (4,6).

Use treasure map #18 to pull up the biggest haul in the game: ONE FREAKING 
RUPEE! I bet the ink and parchment to make that map cost at least 10 times as 
much. Land and make sure it is daytime. You SHOULD be rich, unless you went out 
spending without me telling you to. Go to Iceman's shop and buy two town flowers 
(because you can only hold 3 of his goods and you already have a pinwheel). Go 
talk to Miss Marie in the school about volunteering. Notice the little metal 
platforms she has in her classroom (they're all over the island, too). Put town 
flowers in them. Repeat until every platform on the island (inside and outside) 
has them. There are 14 outside, 4 in Miss Marie's school, 2 in Lenzo's shop, 4 
in the battleship game, 4 in Maggie's house, 4 in the auction house (including 2 
on stage you need to jump to from Maggie's house (the second floor of the 
auction building)), and 2 in the potion shop. That makes 34 total (340 rupees). 
There is a man on a bench near Iceman's shop. Talk to him twice when you are 
done to get a piece of heart. 

Sail N to (4,7).

Gale Isle (the wind dungeon) is NE of center. Get your map, then sail E to 
(5,7).

N (and slightly E) of center is a sub. Inside are about a bazillion imps. You 
can tell your progress because 4 lanterns light up as you go. Clear it to get a 
treasure map (#9). Crescent Moon Island itself is located at dead center. Get 
your map and then use treasure map #11 to get a piece of heart. Now land on the 
island and get the easy chest for another treasure map (#10). Sail S to (5,6).

This island is found SW of center and is guarded by a lone pirate ship. Kill it 
and get your map. Now use treasure map #30 to snag another piece of heart. Land 
on the island. Welcome to Pawprint Isle (called that for obvious reasons). On 
the side of the turtle shell thing is a hole you can crawl through to get 
inside. Drop into the hole there and you'll be in a maze. From where you land, 
go straight into the first area and kill some chuchus. Now take the right 
passage and destroy the boulder you see to open a little alcove. In the alcove 
is a chest with a joy pendant. Go back to where you found the boulder and 
continue the way you were going. Here you can find another chest, this one with 
a piece of heart (and makes four!). Now go back to the very first area and take 
the passage you haven't yet. Lift the boulder blocking the way and grab a chest 
with 50 rupees. Go back to the first area one more time, and on one wall, you 
can see grapple poles. Use the grappling hook to pull yourself up to a ledge up 
there for one last chest with 20 rupees. You can leave this place now. On the 
"toes" of the paw are trees. One is really weird looking (like a cactus). Get 
into King, sail near it, and hookshot up. There is a hole here to drop into. 
Kill some wizzrobes and you'll get 200 rupees. Go back to King and sail S to 
(5,5).

Eastern Fairy island. It is SE of center. Get your map and keep going S to 
(5,4).

The Tower of the Gods. This place is freaking huge, you can see it from squares 
and squares away. As if you couldn't find it, it is dead center. Get a map, then 
use treasure map #14 to get 200 more rupees. Quite the stockpile you should have 
going. We need it for all those Triforce maps, remember. Sail S to (5,3).

Quite a while ago (section m), I told you of a quest with the teacher and 
students at Windfall Island. At the end, you give the teacher 20 joy pendants 
and she gives you a piece of paper. If you haven't done that, go back and do it, 
then come back here. The island is SE of center. Get your map, then use treasure 
map #1 to get 200 rupees. Land on the island. Behind the house is a ledge. Use 
the hookshot to get on top of it, then get a chest here for treasure map #27. Go 
to the door of the house (which looks like a butler) and use the cabana deed on 
it (it's in the delivery bag). Now you can open the door and go inside. Look up 
to see a grapple switch. Activate it and the fireplace will go out, exposing a 
hole. Drop down. This is a maze, so pay attention. You need to keep your 
bearings, even through some (simple) battles. From where you start, go forward 
and take the first right. Follow this path to the fork, and go right. Take the 
ladder here down. Crawl into the little hole on the same wall as the ladder. 
Take the first right (there is no choice). As the forks come up, go straight, 
straight, left. Take the next right (again, no choice) to enter a room of pots. 
Smash them for quite a few rupees. Crawl back into the hole and go left (no 
choice), left, and right (no choice) to find another ladder. Climb up it. Hit 
both switches here with the hammer and take the left door to find another 
ladder. Climb down it. If you are facing the ladder, there are two holes, one to 
your right and one directly behind you. Take the one to your right and follow it 
(there are no forks here). Open the chest at the end for 100 rupees, then crawl 
back to the ladder room. Take the other hole. Again, there are no choices, so 
follow it to the end: another ladder. Climb up. Go out into the big room. Hit 
the switch you can, but don't go through the door. Instead, jump down the hole 
here. Fight two re-deads. There are two pots on one wall. Smash them to expose a 
hole. Crawl in. Follow the path to the end (no forks), where there is one last 
ladder. Climb up to find the familiar blue seal. Play the Wind's Requiem for 
another Triforce map (#2). Hit the switch, and go through the door. Turn left 
and go straight until you hit a wall, then turn left again. Step through the 
door, turn right, right, and then left to get back out. Leave the house, get 
into King, and sail S to (5,2).

This is Ice Ring Isle, the giant iceberg where we got the iron boots. Not too 
much to do here. Get your map (the island is SW of center). Kill the boat 
patrolling the island. Now, with the help of treasure map #17, pull up a chest 
with 200 rupees inside. Sail S to (5,1).

This is a pair of small islands, the Angular Isles, and they're located S of 
center. Get your map, then use treasure map #15 to find a piece of heart. Sail 
to the islands, though you can't exactly "land." There's a block puzzle on each 
island, start with the bigger one. Run around to the side opposite of where you 
start, and you'll see a discolored block in the wall. Pull it out one step. 
That's the trick with these puzzles, knowing when to pull things out all the way 
or just partially. Anyway, that's enough for you to climb on it and then up to 
the next ledge. Go around to the other side and push the block off the ledge. 
Drop down to it and pull it as far as it can go (in the direction you were 
pushing earlier). Now climb on it and up to the ledge you can reach. Pull the 
block you can out one step and you can climb up to the very top for a piece of 
heart. Get in King and sail near the small island. Use the hookshot on the tree 
to get up and drop into the hole. There is a column of blocks here, with one 
pushable block on the floor (on the left side). Pull that around to the right 
side, so it is exactly opposite of where it was before. Hop on top and you can 
pull a block out one step. Now hop down and you can pull the bottom block back 
one step. Get back up and pull this block one more step. The column will drop by 
one. Get on top of the second box and climb up, pulling things out at one step 
intervals as needed. You'll eventually make it to the top with two spotlights 
shining at you. Use them and your mirror shield to create a chest in the niche 
opposite where you first entered this place (the trick is that you can't shine 
directly on it, you have to be facing to the left or right and then aim your 
shield back at it). Use the leaf to get to it and open it for 200 rupees. You 
can leave here now. Sail E to (6,1).

We're looking for NW of center here. Get your map and use treasure map #32 for a 
map of treasure maps that give you hearts (there are 11 total, 5 of which alone 
are found on Windfall Island). The island is a game, the Boating Course; 
basically, you pilot your boat around an obstacle course gathering rupees. So 
far that's the only purpose I know of, but it's a good way to make easy money. 
I've gotten over 100 without even trying, which, given the price of 30 rupees, 
is a good deal. Take note of this place, you might need it later. Once you're 
done playing, get into King and sail over to the other side. Use your hookshot 
to get up top where you can find a hole. Drop in. Now, if you can, ignore the 
imps. What you really want to do is hit the three switches with the boomerang 
(luckily, it can be one at a time). That will create a chest with a map of the 
submarines inside. Leave (you can't kill the imps, they spawn infinitely) and 
get back to King. Sail N to (6,2).

Forest Haven. It's just E of center. Get your map, use treasure map #31 for 
another heart piece, then land. Work your way back up to the giant tree and use 
the floor pods to work your way up to where you got the leaf. Right across from 
you is another pod. Use the leaf to reach it, then shoot up to the ledge there 
(where you leave to get to the Gallery). There is another floor pod here you can 
use (with the leaf) to get all the way to the other side of this huge room (you 
need to stop on the tree branch in the middle). Go into the door there. Set the 
wind SE and float to the little island that you see as you enter. The chest has 
treasure map #3. Now float from here back to where King is and then sail N to 
(6,3).

The island is NE of center. Get your map, then use treasure map #20 to get a 
piece of heart (four again, only 8 pieces left). Land on the Bomb Island (it 
looks like a bomb) and get rid of the boulder at the top (why waste bombs, pick 
it up and chuck it) to open a hole. Drop in and use magtails on the switches to 
get to a chest (in the second room, you need to step on a switch over to the 
left first). Inside is a piece of heart. 

Time for a little mini-quest action. There is another trading guy on this 
island, which, with the ones on the Mother & Child Isles and back at Greatfish 
Isle, makes three. We're going to start a huge trade between them. To get to 
Greatfish Isle, you can teleport directly there. For the Mother & Child Isles, 
teleport to (3,5) (Tingle Island) and sail NW to get there. To get back here, 
teleport to Forest Haven (6,2) and sail N. You shouldn't have to change the wind 
at all. Okay, you have a pinwheel in your inventory. Do the following.

1) Trade it to the guy on Bomb Island for a Sickle Moon Flag (cost: 40 rupees)
2) Trade that to the Greatfish Isle guy for a Fountain Idol (cost: 65 rupees)
3) Bring it to the guy on the M&C Isles for a Big Sale Flag (cost: 35 rupees)
4) Back to Bomb Island. Give it to the guy for a Hero's Flag (cost: 75 rupees, 
   because our FLAG has some cracks in it... I think this guy knows a lot about 
   crack alright)
5) The Greatfish Isle guy will trade you a Postman Statue (cost: 100 rupees)
6) Go to the M&C Isles to trade for a Shop Guru Statue (cost: 200 rupees)
7) Give it to the Greatfish Isle guy and he will reward you with a piece of 
   heart (priceless)

After that, teleport to (5,4). Sail E to (6,4).

The third pearl island, Eastern Triangle Island, is here, located dead center. 
Get your map, use treasure map #34 to get 200 rupees, and then just sail N to 
(6,5).

NW of center is the volcano we got our power bracelets from, Fire Island. First, 
get your map. Now, use the map and treasure map #37 to get yourself 200 rupees. 
Sail or teleport N to (6,6).

Dragon Roost Island. Treasure map #39's booty is here, 200 rupees. Get it and 
land on the island. Go into the bird town and talk to the guar outside the room 
you first met Medli in. He'll say something about golden feathers. Give him 20 
and he will reward you with a 100 rupee piece. Go back outside and fast-forward 
a day. You'll have a letter from his girlfriend with a heart piece in it. Score! 
Continue N to (6,7).

This square has a lot to do, but not on the island. Islands, actually. The 
Seven-star Isles are NE of center. Get your map. Slightly SE of center, there 
are three watchtowers. No turrets this time, lucky us. Hookshot up to the middle 
one, and kill the wizzrobe there. That will create a chest with 20 rupees in it. 
Another wizzrobe will attack you. Kill him to create a chest on the northernmost 
tower. Two more wizzrobes will attack. Dispatch them to create a chest on the 
southern tower. Jump to the other towers to collect your booty, a golden feather 
and treasure map #16, respectively. Go E to (7,7).

Dead center is where you'll find Overlook Island. Get your map. Treasure map #13 
will help you get a map of all the holes you can jump into. Get near the island 
(kill the boat if you wish) and use the hookshot to get up onto the black 
pillar. Hookshot your way from pillar to pillar until you reach the one with the 
hole. Drop in. It's another one of these places, the kind where you clear each 
room. From the one directly to your left as you enter the main room, going 
clockwise: 3 Armos knights, 2 stalfos knights, bar door, 2 wizzrobes (the kind 
that summons enemies), 5 bokoblins (with shield, inside the pots). When they're 
all cleared, you have to fight FOUR darknuts in the main room. The best I can 
offer is try to get the chest plate off of one and use fire arrows on him until 
he dies. Fighting 4 darknuts is going to be tough no matter how you slice it. 
Kill them to open the bar door. Inside is another blue emblem. Play the Wind's 
Requiem on it to get a Triforce map (#8). Leave. Get into King and go S to 
(7,6).

Our next island is located dead center as well. Get your map and then treasure 
map #19's treasure, a map of the heart pieces on land. Land on the Flight 
Control Platform where we can play a little game. Talk to the first bird who 
will charge you 10 rupees to play. Your goal is to jump off the dock and, using 
the tornados and the wind (set it NW), glide to the end. This is a LOT tougher 
than it seems, namely because your magic runs out before the end, usually. So, 
you need cracker-jack timing and reflexes to make it. OR, you need a GBA and 
connector cable. See, you can use Tingle to refill your magic as you go (use 
blue potions, 80 rupees a pop, but full refill). That's what I have to do. But 
if you can make it legitimately, more power to you. You get a heart piece for 
doing it (which makes 4 again, huzzah!). After you win, you can leave (the prize 
for doing it twice is only 50 rupees). S of center is a sub. Inside is all dark 
until you step on a switch in the floor. Then wizzrobes, chuchus, and imps 
attack you. Kill them all to get a chest with a map in it (of the various 
watchtowers). Sail S to (7,5).

This place (Star Belt Archipelago) is pretty stupid. The island is W of center. 
Get your map, then find a 200 rupee piece with treasure map #27. Sail S to 
(7,4).

The last fairy island (Thorn Fairy Island) is here. It is SE of center. Get your 
map and use it to get the treasure from map #5, a piece of heart. Sail S to 
(7,3).

Dead center is where we're going. Get your map, then get treasure map #36's 
booty, 200 rupees. We should be loaded by now. Land on Bird's Peak Rock. The 
puzzle here is virtually the same as the one at (1,3). You need to hit all the 
switches with a seagull while dodging the enemy birds. Try to pick them off with 
arrows before you even start. You should have 2 pears or 3 pairs, so, if you 
want, you can call a gull, get all the birds behind you, and lure them down to 
Link for easy killing. Once all the switches are hit, a gate will open, leading 
to a hole. Drop down. This one's easy; just stand on the blue emblem for your 
Triforce map (#3). That's all of them. Go back to King and sail S to (7,2).

The islands, the Cliff Plateau Isles, are NW. Get your map, then land. Work your 
way around to the hole and go in. This place looks a lot more complicated than 
it is. Just start with the platform on your left and work your way around. Get 
to the other side, and work through the maze of tentacles. At the end is a giant 
plant that, when you kill it, turns into a baba bud. Use it to get up. Across 
from you, you can see a boarded up place. Burn them with fire arrows. Before you 
go across, though, drop to the chest below you. When you open it (it's a joy 
pendant), a lot of the tentacles will disappear (not all, though). Now get back 
up and glide over to where you opened. Step into the light to be teleported to 
the top. Open the chest here for a treasure map (#25). Get back to King and sail 
S to (7,1).

The LAST square! FINALLY! And it's one of the crappy archipelagos, no less! 
You'll find the Five-star Isles NE of center. Get your very last map. Kill the 
birds and boats around the island. Use treasure map #33 to pull up a piece of 
heart. Lastly, go SE of center and find a sub. Inside are some moblins and 
keese. Kill them to get a chest with a piece of heart in it (one left!). Now you 
can leave and go back to King. Our first world tour is almost over. Teleport to 
(6,2).

Now, during your travels, you probably noticed some koroks standing next to 
pretty pathetic looking trees. They went off to plant more Deku Trees, but 
without the water from Forest Haven to nourish them, they won't grow. Your 
mission: get water to the trees.

This is trickier than it sounds, because you only have 20 minutes to get to all 
8 trees. After that, the forest water becomes regular water. Read ahead to see 
what you have to do, then go to it. Don't dilly-dally or try to get treasures we 
haven't gotten yet. I have no plans on skipping anything, be patient. Also, you 
can check how much time you have left by going to the water in the menu and 
hitting A. Let's go.

1) Land on Forest Haven. Set the wind E (why waste time doing it when we're on 
   the clock?) and go up to the Deku Tree. Inside his little room, fill a 
   bottle with water (you need to be in the "stream" part, not the "pond" at 
   his base, because you need to be deep enough). Run back out to King and sail 
   E to (7,2).
2) We were just here. Get back up to the chest you got map #25 from (you need 
   to go through the hole again). The tree is up there. Pour water on it and 
   hop back to King. Teleport to (2,4).
3) Get to the little hill you jumped from for a heart piece earlier (reset the 
   wind so you go faster). Up on top is the second tree. Water it, get back to 
   King, and sail SW to (1,3).
4) Land on the island and water the tree (it's back by where a chest was on 
   fire earlier. Get back to King and teleport to (4,2).
5) Sail W to (3,2). The tree is back near the iron boot switch. Teleport to 
   (5,4).
6) Sail S to (5,3). The tree is on the side of the pool opposite your house. 
   Teleport back to (5,4).
7) Now sail N to (5,5). Water the tree on the island and teleport to (3,5).
8) Sail NW to (2,6). The tree is on the little island, near the trader. Sail N 
   to (2,7).
9) The last tree is here. Water it and watch the magic.

After you water the last tree, they will all grow and a heart piece will fall. 
That's the last one! Let's go get us some Triforce. Teleport to (3,5).
`},{id:"06_u-tingle-proves-useful",title:"Tingle Proves Useful",content:`---------------------------------------------------------------
U) TINGLE PROVES USEFUL
---------------------------------------------------------------

Start by pulling up the treasure from map #10 (200 rupees). Now land on the 
island. You should have a LOT of money saved up. We need at least 2800 rupees 
(well, 2786 to be exact). If you don't have it, you can go back to (6,1) and 
play the game there. Or you could read ahead where I detail how to find more 
rupees with treasure maps. Or go kill a lot of stuff. Whatever. But this 
shouldn't even be an issue. Go up to Tingle and get the remaining 7 Triforce 
maps decoded. I don't mind getting the maps. The fact that I have to pay 3200 
rupees total to use them, that's just plain stupid. And how can Tingle read them 
when we can't? He drew the map to his island with a FREAKING CRAYON! Maybe if 
the fish did it, that would make sense. But Tingle?! Anyway, I'm done griping. 
Time to hit the road again. Luckily, we don't need to go to every square this 
time. Just a lot of them. On the bright side, you won't need to get off of King 
at all (well, almost). We're just getting buried treasure.
`},{id:"06_v-world-tour-treasure-triforce",title:"Link's World Tour #2: Treasure and Triforce",content:`---------------------------------------------------------------
V) LINK'S WORLD TOUR #2: TREASURE AND TRIFORCE
---------------------------------------------------------------

Let's do this. Teleport to (2,4).

Use Triforce map #1 to pull up your first piece of Triforce. Sail SW to (1,3). 
Here, use treasure map #28 to get 200 rupees. Teleport back to (2,4).

Now, you want to go NW to (1,5). Use treasure map #8 here to get 200 rupees. 
Land on the island and drop into the hole for another fairy (to put in the 
bottle you used for the Deku Tree quest). Go N to (1,6).

You don't need to clear the reef, but it makes things a lot easier. It's up to 
you. Either way, treasure map #41 will give you a map of the great fairies 
(useless to us now). Go N again to (1,7).

Treasure map #25 will give you 200 rupees here. Teleport to (2,1).

Use Triforce map #4 to get another shard. Then you want to sail W to (1,1).

Treasure map #9 is the guest of honor here. Use it to get 200 rupees, then 
teleport back to (2,1).

Now you want to sail NE to (3,2). The prize there, 200 rupees, is gotten with 
treasure map #16. Sail S to (3,1).

Treasure map #40 will give you ANOTHER 200 rupees. Hey big spender. Dig this 
blender. Sail E to (4,1).

Another reef. Clear it if you want, but make sure you use Triforce map #8 to get 
a piece of the Triforce here. Teleport to (5,4).

Sail SW to get to (4,3). Triforce map #6 comes in handy in getting you another 
shard. Sail W to (3,3).

Two squares adjacent to each other with Triforce. Triforce map #3 gives you this 
piece. Teleport back to (5,4).

Sail N now to (5,5). Treasure map #3 will give you 200 more rupees (and marks 
the end of the treasure maps). Teleport to (4,6).

Sail N to (4,7). Triforce map #2 gives you a piece here. Teleport to (6,6).

Sail N here too, and you'll be at (6,7). This place is more useful now. Triforce 
map #7 gives you a piece here. Teleport to (6,2).

Sail E and use Triforce map #5 to get the very last piece. The golden triangle 
will assemble and you will be taken to the Quest Screen to see the Triforce of 
Courage in all its glory.

We're about to enter the last dungeon. Make sure your bottles are completely 
full (Granny's soup and 3 fairies) and that you have 99 bombs and arrows. When 
you're ready, teleport to (5,4).
`},{id:"06_w-return-to-hyrule",title:"Return to Hyrule",content:`
---------------------------------------------------------------
W) RETURN TO HYRULE
---------------------------------------------------------------

Sail into the "courtyard" of the Tower to start a scene. I LOVE this music. All 
the Zelda 1 remixes are awesome. Anyway, back to the game: the Triforce of 
Courage opens up the gate back to Hyrule Castle. You and King go through. Hop 
off and enter the castle. Head down to where you got the Master Sword (and left 
Zelda). That smashed Link statue can't be a good omen. Zelda is waiting for 
you... Or is she? What the heck? A TRAP! Flames come up and two darknuts attack 
you. Two? Please. We've taken on four of their brethren at once. The only trick 
is that you need to burn their capes off with a fire arrow, but you can hit them 
anywhere on their bodies to do that (because the flames engulf them). Take them 
to school. After they die, so do the flames. Head back upstairs to the main 
hall.

Now, there are two doors here, and we've only ever taken one. The time has come 
to take the other (which ends up being right in front of you, actually, because 
there is a very short scene as you enter the hall). Walk straight down this 
bridge to start another scene. Link, using the fully charged Master Sword, 
breaks the seal around the castle. Keep going. This is all straightforward. 
You'll encounter some peahats, red chuchus, moblins, and a darknut. After the 
knight is an area you need to hookshot across (and after the first gap there are 
2 keese that attack). Head into the cave here and enter Ganon's Tower (complete 
with more remixed Zelda 1 music!).
`},{id:"06_x-final-dungeon-ganons-tower",title:"Final Dungeon: Ganon's Tower",content:`
---------------------------------------------------------------
X) FINAL DUNGEON: GANON'S TOWER
---------------------------------------------------------------

This first room serves no purpose other than to be forbidding. Go through the 
door to the next room.

This is the main chamber, and it's a lot like those places we've been in before, 
the ones where you have to clear rooms to light torches. No torches here, 
though. Just like those rooms, I take this place clockwise, starting to the 
left. Each door leads to an area reminiscent of a dungeon we've already been 
through. Like I said, we'll start with the one to our left, which coincidentally 
happens to be the room based on the first dungeon. As you get to the door, be 
careful not to cut the rope bridge while fighting the bokoblin. Anyway, go 
inside.

You see a series of spiked poled you can grapple on, some red bubbles, and some 
lava geysers. Ignore the bubbles and grapple your way to the first platform 
floating in the lava. Quickly attach to the next pole and swing to the next 
platform (DON'T hold up as you swing or you will overshoot it). As you land, 
turn right and shoot a fire arrow at the lava where the geyser appears (wait for 
it to be down, though). That will create a platform you should quickly jump 
onto. The geyser will shoot you up in the air. Use the leaf to float to the 
ledge. Kill the bubbles if you wish and then enter the door.

Ah, black and white. It's like the Wizard of Oz in reverse. And look who came to 
join us! Our old pal Gohma. We're stronger, but he's not, so he's a piece of 
cake. Kill him the same way as before. The only thing you need to realize is 
that your equipment has been cleared, so you need to re-equip the grappling 
hook. Also of note, none of your other dungeon spoils are available for use. 
When you win, you'll be teleported to the main chamber.

Re-equip things, smash the skulls for refills, and then go into the next door 
(remember, we're going clockwise).

Welcome to the wood level. There is a switch to your left, activate it with your 
leaf to get a gondola. Hop on, then blow your way across. Well, as far across as 
this gondola goes. Hop over to the moving platform (it needs to be down for you 
to make it). While it is in the down position, there is another wind switch you 
can activate. Do so. Go go Gadget Gondola! You need to float to reach it, and 
then blow this gondola back, too. Float to the right moving platform (the one 
that moves between low and middle). Wait for it to go up, then jump across to 
the other moving platform. Now wait for this one to go up, then float to the 
ledge with the door. Kill the peahats and go through.

Again, a boss revisited in greyscale. And, again, you're limited to what you had 
by the time you cleared this dungeon. Kill him the same way as before to be 
teleported back to the main chamber.

Two down, two to go. Restock, re-equip, and enter the next door.

Earth dungeon. I HATE this room. But, alas, we have no choice. Slowly work your 
way through, taking one coffin at a time. Go up some stairs (taking notice of 
the light and the switch you pass), then do the same thing. Eventually a poe and 
a black chuchu will show up. Go back to the light and use it to freeze the 
chuchu and kill the poe. Pick up the chuchu and put him on the switch. Go stand 
back in the light and wait for him to "thaw." Freeze him again, put him back on 
the switch, and run to the end of the hall and up the stairs, ignoring anything 
that might attack you. Rolling is faster, so roll all you can. If you don't make 
it, go refreeze the chuchu and try again until you do. Up the stairs, you have 
to do the same thing, except the light is nowhere near the switch. Keep the 
chuchus as close to the switch as you can, then shine the light down the hall. 
Run back, put one on the switch, then run back and up the stairs. Tough, yes. 
But not impossible. I suggest killing all but one or two of the chuchus (and 
that stupid stalfos at the end) before even tryinng. When you make it up those 
stairs, go inside the door.

Jalhalla, piece of cake. Have fun. You'll be taken to the main chamber again.

One door left, so after you've grabbed refills and re-equipped, go through.

The wind dungeon. Luckily, this is the easiest room of all. First, kill the 
wizzrobe with a fire arrow. Now, hop on the spring and shoot yourself up in the 
air. Move forward and either right or left, then use the leaf so that you glide 
over the spikes and through the gate. As you land, hop on this spring. Shoot up 
and forward, then glide over the first trap, in between the tornados, then over 
the second trap. When you land, two moblins will come out of jars to attack you. 
Big whoop. Kill them, then use the hookshot to get up to the ledge. Into the 
door we go.

Kill Molgera and get yourself teleported back to the main chamber.

Like those rooms before, the bar door is now open. Equip yourself, save, and 
enter.

Run up the stairs. Imps will come at you, kill them if you wish. Enter the door 
at the top.

This is a wide-open room. There are doors to the right and left and a brick wall 
in front of you. Go into the right door first.

As you enter, you'll be given a sort of code. Remember the order the candles are 
shown to you. Go back through the door and into the door that was on the left 
(which is now right in front of you).

In case you forgot, the order is shown to you again. Now take out your boomerang 
and target the switches in that order. King will appear. This is your way out, 
if need be. You shouldn't need it, though. Go back to the room with the candles.

There is a pit here, and you're going to jump into it, but WAIT. When you land, 
you will be attacked by the same boss you won the hammer from. You can fight him 
if you wish, but I strongly urge against it. This is a maze, and if you fight, 
you will become disoriented (rendering my directions useless). So, DO NOT FIGHT. 
Ignore him completely. With that preface, jump into the pit.

From where you land, go into the door directly behind you. Now, go through doors 
in the following order: left, straight ahead, left, right, straight ahead. As 
you go through them correctly, you will get the classic Zelda chime. Get to the 
end and it will be a different room. Bars will appear behind you, and that boss 
will show up. You have no choice this time, kill him. He likes to make six of 
himself this time and surround you. Roll out of the way of their attack. Five 
will disappear, attack the one that is left. He disappears too, so be quick 
about it. That's the easiest way to kill him. Get the chest: light arrows. AWW 
YEAH! You don't understand yet. You will. Go into the door that opens and you'll 
be teleported back to the room with a brick wall and 3 doors.

That stupid thing will attack again. Let's see how he likes light arrows. One 
shot, he goes down. Nice, eh? Grab the sword he drops and throw it at the brick 
wall. No more brick wall. Enter the new door.

Go up the stairs. Enemies will meet you at each landing: a moblin, a darknut, 2 
moblins, and 2 darknuts. Kill them all with light arrows (one shot kills any 
non-boss, you don't even need to take the armor off the darknuts). When they are 
all dead, the door at the top will open. Go back and claim anything they dropped 
to refill your hearts, arrows, and magic. SAVE. Then go through the door.

Zelda is sleeping in a bed, and Ganondorf is kneeling by her side. He says a 
lot, then summons a huge monster! Actually he calls on a marionette of his 
alter-ego, Ganon. Boss time. Depending on how you look at it, this is one boss 
with three forms, or three bosses. Either way, there are three battles to be 
fought here with no break in between.

                        BOSS: Three-form shadow thing

The first is the puppet. He is really easy. Just keep moving and his lumbering 
swings will miss you. You want to cut the strings (you need to hit each twice) 
with the boomerang. Easy enough. When he is down, get behind him and shoot the 
blue orb on his tail with a light arrow. He'll raise up and regenerate his 
strings. Repeat. Three arrows and we move on.

Now he turns into a spider. Pig puppet to spider, doesn't make sense to me. Oh 
well. This is simple. He raises up, then drops down with his legs flailed out. 
Just look up and make sure you are on the same side as the blue ball when he 
lands. 3 more arrows to bring up the third phase.

Moldorm. I HATE this stupid thing. In Zelda 1, he was just another enemy you met 
in Death Mountain. No big deal. But in Link to the Past, he became the most 
annoying thing ever. His annoyingness carried over to this game too, plus some 
extra difficulty. Ideally, you hit him in the head with the sword, then shoot 
the tail with the light arrows. Sadly, the time he is stunned is so short, it is 
almost impossible. Instead, you can try and take out the ball from a distance, 
just trusting your skill with the bow. That isn't a breeze either. If you run 
out of magic, kill the little spiky guys for refills. Do not be afraid to use 
soup or even fairies here. Eventually you will kill him.

Ganondorf appears at the top of the room with Zelda. He floats away, leaving us 
to chase him. Climb up the rope in the center of the room (you need to use the 
little raised platform to jump onto it, then hold R to climb) and you will be on 
a chandelier very high up. Be careful on these platforms. We're in no hurry. 
Look up and around and you'll see a pole you can grapple onto. Do so and climb 
up to the top. In the center of this area are jars with refills. Collect them, 
then look up for another grapple pole. Hook on and climb up again. In the center 
of this area are some jars, spiky guys, and warp jar. If you need to, burn the 
lid off the warp jar to be taken back down where you can climb up and recollect 
everything. Repeat until fully stocked. If you look along the outer wall, there 
is a blue door. Hookshot up to it and walk through for the final battle.
`},{id:"06_y-ultimate-showdown",title:"The Ultimate Showdown",content:`---------------------------------------------------------------
Y) THE ULTIMATE SHOWDOWN
---------------------------------------------------------------

Ganondorf is standing over Zelda's lifeless body. There is some dialogue between 
you and him and he charges... and completely pummels you. He holds you up and 
activates all three Triforces. They combine to form THE Triforce, the one that 
grants wishes to its holder. Ganondorf throws you down and goes to claim his 
prize, only to be stopped by the King of Hyrule. See, the King touches the 
Triforce first and wishes that you have hope, and that Hyrule be sealed away 
forever. That serves as enough of a distraction for you and Zelda to wake up. 
Time to end this. Zelda hands Link the Master Sword and the final battle begins.

You and Zelda are double-teaming Ganondorf, so the trick is to get her to hit 
him with the light arrows she's firing. The easiest way to do that is line it up 
so he is between the two of you. Just keep backing (or backflipping) away from 
him until he gets hit (he HURTS, so don't get hit). He'll be stunned, which is 
your chance to wail on him. After a while, he gets mad and slaps Zelda. You're 
on your own now.

He comes at you with a slash, spin slash, then a jumping attack. As he jumps, 
you'll be able to do the parry attack. If it hits, he'll be stunned and you can 
get a couple hits in on his back. Repeat until Zelda wakes back up.

She'll fire light arrows at him, but he'll dodge. All you can do now is try and 
keep from getting hit. Eventually, Zelda wises up. She comes up with a new 
tactic. She'll shoot an arrow at you, and you bounce it back at Ganondorf with 
your mirror shield. He'll be stunned, but only for a second. Quickly lock onto 
him, draw your sword, and run up to him. DON'T ATTACK! Instead, he will attack 
you, and you can use the parry attack to deal the final blow. Huzzah!
`},{id:"06_z-ending",title:"Ending",content:`---------------------------------------------------------------
Z) ENDING
---------------------------------------------------------------

As if I would ruin the ending. Not a chance. Once the credits roll and 
everything is said and done, the game will ask you if you want to save a special 
game slot. If you do, the next game you start will have some differences. Link 
will be in his pajamas, for one thing. It's up to you. If you want to complete 
the Nintendo Gallery, you have to. Congratulations of beating The Legend of 
Zelda: The Wind Waker!

`},{id:"07_reference-list",title:"I've tried to compile some lists for easy reference. Everything found here can",content:`===============================================================================
7.        Reference Lists
===============================================================================

I've tried to compile some lists for easy reference. Everything found here can 
be found in the main walkthru, but if you want to know real quick what the 
Ballad of Gales is or something, here's where you can look.

---------------------------------------------------------------
A) WIND WAKER SONGS
---------------------------------------------------------------

Wind's Requiem:     Up, Left, Right
                    --Learned at the wind shrine on Dragon Roost Island
Song of Passing:    Right, Left, Down
                    --Learned from Tott, the Elvis guy, on Windfall Island
Ballad of Gales:    Down, Right, Left, Up
                    --Shoot Cyclos three times with an arrow and he will teach 
                    you the song
Command Melody:     Left, Center, Right, Center
                    --Learned in the Tower of the Gods dungeon after putting 
                    the first black statue in place
Earth God's Lyric:  Down, Down, Center, Right, Left, Center
                    --Learned from a tablet in the Earth Temple
Wind God's Aria:    Up, Up, Down, Right, Left, Right
                    --Learned from a tablet in the Wind Temple

---------------------------------------------------------------
B) LOCATIONS OF BOTTLES
---------------------------------------------------------------

Bottle #1
Square: (6,6)
How you get it: Medli gives it to you outside of the first dungeon. You need 
this bottle to progress in the game.

Bottle #2:
Square: (6,3)
How you get it: Inside a sub at the center of the square. Kill 3 moblins and 
some mice to get a chest with the bottle inside.

Bottle #3:
Square: (4,6)
How you get it: First, you need to have beaten the Forsaken Fortress a second 
time (otherwise this girl is still locked up). At night, she can be found in 
town. Talk to her and she'll yell at you. When you leave, she will sneak away. 
Follow her without being seen and she will eventually end up at a safe. Talk to 
her and choose the top option 6 times to get the bottle.

Bottle #4:
Square: (2,5)
How you get it: Buy it from the traveling salesman. Simple enough.

---------------------------------------------------------------
C) ARROW/BOMB/MAGIC/WALLET UPGRADES
---------------------------------------------------------------

These are in the order in which I list them in the FAQ (and the order I find 
them easiest to get).

Wallet Upgrade #1 (1000 rupees):
Location: Outset Island (2,1)
How: Go up to the forest where you met Tetra. Go around just like you did the 
first time (there are mothulas and moblins here now) and eventually you'll see a 
large boulder. Use bombs to blow it up and drop down for the upgrade fairy.

Bomb Upgrade #1 (60 bombs):
Location: Southern Fairy Island (4,2)
How: Simple. Blow up the boards blocking the entrance to the little shell house. 
The upgrade fairy is inside.

Fire/Ice Arrows:
Location: Mother & Child Isles (2,6)
How: You need to use the Ballad of Gales to teleport inside the island. Other 
than that, you don't need to do anything. The fairy queen automatically appears.

Magic Upgrade:
Location: Two-eye Reef (4,1)
How: You need to kill a squid (big octo) to get this. When you get to the 
square, use your telescope to scan the skies looking for a flock of seagulls. 
Sail to wherever they are and you'll automatically be pulled into battle with 
the squid. Hit his eyes (this is the easiest one, he only has four) with the 
boomerang until he dies. The fairy will appear and more than double your magic 
meter.

Arrow Upgrade #1 (60 arrows):
Location: Thorned Fairy Island (7,4)
How: Simple too. Just pound the switches on the island using the hammer, then go 
into the shell house.

Bomb Upgrade #2 (99 bombs):
Location: Eastern Fairy Island (5,5)
How: Basically the same as the last one. Blow up a boulder on the island and go 
into the shell house.

Wallet Upgrade #2 (5000 rupees):
Location: Northern Fairy Island (3,7)
How: Easiest one of all. You don't need to do anything other than walk into the 
shell house. There's not so much as a boulder in the way.

Arrow Upgrade #2 (99 arrows):
Location: Western Fairy Island (1,5)
How: This one is very similar to the last arrow upgrade too. Hit the switch with 
the hammer and go inside.

---------------------------------------------------------------
D) TRIFORCE MAPS
---------------------------------------------------------------

For details on how to get the maps, see the walkthru.

Triforce map #1:
Found: (2,3)
Triforce location: (2,4)

Triforce map #2:
Found: (5,3)
Triforce location: (4,7)

Triforce map #3:
Found: (7,3)
Triforce location: (3,3)

Triforce map #4:
Found: On the ghost ship (varies)
Triforce location: (2,1)

Triforce map #5:
Found: (1,3)
Triforce location: (7,2)

Triforce map #6:
Found: (2,1)
Triforce location: (4,3)

Triforce map #7:
Found: (3,3)
Triforce location: (6,7)

Triforce map #8:
Found: (7,7)
Triforce location: (4,1)

---------------------------------------------------------------
E) TREASURE MAPS
---------------------------------------------------------------

For better details on how to get the maps, look in the walkthru.

Map #1:
Found: Forbidden Woods (6,2)
How: In chest
Treasure location: (5,3)
Treasure: 200 rupees

Map #2:
Found: Windfall Island (4,6)
How: Give 20 skull necklaces to Maggie's father (after saving her)
Treasure location: (2,5)
Treasure: Piece of Heart

Map #3:
Found: Forest Haven
How: Jump from ledge at top of Deku Tree
Treasure location: (5,5)
Treasure: 200 rupees

Map #4:
Found: (2,5)
How: Buy from traveling salesman
Treasure location: (4,2)
Treasure: Piece of heart

Map #5:
Found: Wind Temple (4,7)
How: In chest
Treasure location: (7,4)
Treasure: Piece of heart

Map #6:
Found: Tower of Gods (5,4)
How: In chest
Treasure location: (4,4)
Treasure: 200 rupees

Map #7:
Found: Windfall Island (4,6)
How: Battleship game
Treasure location: (2,7)
Treasure: 200 rupees

Map #8:
Found: (1,1)
How: Chest inside hole on island
Treasure location: (1,5)
Treasure: 200 rupees

Map #9:
Found: (5,7)
How: Chest inside of submarine
Treasure location: (1,1)
Treasure: 200 rupees

Map #10:
Found: (5,7)
How: In chest
Treasure location: (3,5)
Treasure: 200 rupees

Map #11:
Found: Dragon Roost Cavern (6,6)
How: In chest
Treasure location: (5,7)
Treasure: Piece of heart

Map #12:
Found: Earth Temple (3,1)
How: In chest
Treasure location: (2.2)
Treasure: 200 rupees

Map #13:
Found: Two-eye Reef (4,1)
How: Clear fort for chest
Treasure location: (7,7)
Treasure: Map of secret holes

Map #14:
Found: (3,1)
How: Chest inside of submarine
Treasure location: (5,4)
Treasure: 200 rupees

Map #15:
Found: Forbidden Woods (6,2)
How: In chest
Treasure location: (5,1)
Treasure: Piece of heart

Map #16:
Found: (6,7)
How: Clear watchtowers
Treasure location: (3,2)
Treasure: 200 rupees

Map #17:
Found: (3,6)
How: Cannon target game
Treasure location: (5,2)
Treasure: 200 rupees

Map #18:
Found: Windfall Island (4,6)
How: Auction
Treasure location: (4,6)
Treasure: 1 FREAKING RUPEE

Map #19:
Found: Four-eye Reef (1,6)
How: Clear fort for chest
Treasure location: (7,6)
Treasure: Map of heart pieces (on land)

Map #20:
Found: Earth Temple (3,1)
How: In chest
Treasure location: (6,3)
Treasure: Piece of heart

Map #21:
Found: Cyclops Reef (3,4)
How: Clear fort for chest
Treasure location: (3,4)
Treasure: Map of full moon glowing spots

Map #22:
Found: (3,7)
How: Chest inside of submarine
Treasure location: (3,6)
Treasure: 200 rupees

Map #23:
Found: Windfall Island (4,6)
How: Battleship game
Treasure location: (1,2)
Treasure: Piece of heart

Map #24:
Found: Windfall Island (4,6)
How: Give ladies a picture of Lenzo and his female friend
Treasure location: (3,7)
Treasure: 200 rupees

Map #25:
Found: (7,2)
How: In chest
Treasure location: (1,7)
Treasure: 200 rupees

Map #26:
Found: Six-eye Reef (4,4)
How: Clear fort for chest
Treasure location: (4,5)
Treasure: Map of squids

Map #27:
Found: (5,3)
How: In chest
Treasure location: (7,5)
Treasure: 200 rupees

Map #28:
Found: (1,1)
How: Playing mini-golf
Treasure location: (1,3)
Treasure: 200 rupees

Map #29:
Found: Windfall Island (4,6)
How: Chest in Lenzo's house
Treasure location: (2,6)
Treasure: 200 rupees

Map #30:
Found: Tower of Gods (5,4)
How: In chest
Treasure location: (5,6)
Treasure: Piece of heart

Map #31:
Found: Windfall Island (4,6)
How: Show depressed guy picture of full moon
Treasure location: (6,2)
Treasure: Piece of heart

Map #32:
Found: Three-eye Reef (1,4)
How: Clear fort for chest
Treasure location: (6,1)
Treasure: Map of treasure maps to heart pieces

Map #33:
Found: Windfall Island (4,6)
How: Show Lenzo's friend a picture of herself
Treasure location: (7,1)
Treasure: Piece of heart

Map #34:
Found: Salvage Corp. (6,4)
How: Freely given
Treasure location: (6,4)
Treasure: 200 rupees

Map #35:
Found: Wind Temple (4,7)
How: In chest
Treasure location: (2,3)
Treasure: 200 rupees

Map #36:
Found: Ice Ring Isle (5,2)
How: In chest
Treasure location: (7,3)
Treasure: 200 rupees

Map #37:
Found: (2,5)
How: Chest in hole on island
Treasure location: (6,5)
Treasure: 200 rupees

Map #38:
Found: Windfall Island (4,6)
How: Auction
Treasure location: (1,4)
Treasure: Piece of heart

Map #39:
Found: Dragon Roost Cavern (6,6)
How: In chest
Treasure location: (6,6)
Treasure: 200 rupees

Map #40:
Found: (4,2)
How: Clear watchtowers
Treasure location: (3,1)
Treasure: 200 rupees

Map #41:
Found: Five-eye reef (2,2)
How: Clear fort for chest
Treasure location: (1,6)
Treasure: Map of upgrade fairies

---------------------------------------------------------------
F) HEART PIECES
---------------------------------------------------------------

Again, I listed these in the order I get them in the FAQ (and the numbers 
reflect that; there is no official "heart piece #7," for example). There are 44 
pieces total. My descriptions of how to get them are brief, VERY brief in some 
cases. Look in the walkthru for more specific details.

Heart Piece #1:
Location: Forest Haven/Any mailbox
How: You receive it with a letter after you beat Kalle Demos (the 2nd dungeon 
boss).

Heart Piece #2:
Location: Greatfish Isle (2,4)
How: On a ledge. Jump from a hill and float to it with the leaf.

Heart Piece #3:
Location: Dragon Roost Island/Any mailbox
How: Play the mail sorting game in the Rito town and get 25 letters. Wait until 
the 2nd employee shows up, and get 25 letters again. He'll give you a letter to 
mail to his mother. Do so and you get the piece of heart the next day.

Heart Piece #4:
Location: Forsaken Fortress (1,7)
How: In a chest.

Heart Piece #5:
Location: Outset Island (2,1)
How: Take sword training with Orca. Hit him 500 times before he hits you 3 and 
it's your reward.

Heart Piece #6:
Location: (6,7)
How: Kill the 12-eyed squid. Pull it up from the sea where he was.

Heart Piece #7:
Location: Windfall Island (4,6)
How: Win it at the auction.

Heart Piece #8:
Location: Windfall Island (4,6)
How: Get the windmill moving again, then shoot a fire arrow into the turning 
thing up top. The man on the walkway leading to the windmill will give it to 
you.

Heart Piece #9:
Location: Windfall Island (4,6)
How: Win the Battleship game at least once.

Heart Piece #10:
Location: Windfall Island (4,6)
How: Start the windmill and relight the lighthouse (see heart #8). A chest will 
appear. Jump/glide to it from the bomb shop.

Heart Piece #11:
Location: Windfall Island (4,6)
How: Play hide-and-seek with the "Killer Bees" (the kids that go to Miss Marie's 
school). Catch all four and they give you the heart.

Heart Piece #12:
Location: Windfall Island (4,6)
How: Help set up the lady in the orange dress and the guy that wanders around 
town. Show up on their date and they will rewards you (see section M for more 
details).

Heart Piece #13:
Location: Windfall Island (4,6)
How: Mail a letter for Maggie, then deliver the response for Quill (who can't 
get into the house). She'll give you the heart.

Heart Piece #14:
Location: (3,5)
How: Kill another 12-eyed squid here. Pull it up from the glowing spot.

Heart Piece #15:
Location: Outset Island (2,1)
How: Place the large pig (Lucky, I think his name is) on some black soil and 
spread bait on the ground. He'll dig up the heart piece.

Heart Piece #16:
Location: Headstone Island (3,1)
How: Take control of a seagull with a Hyoi Pear. Fly through the piece of heart 
(it's at the top of the mountain) and switch back to Link.

Heart Piece #17:
Location: (1,4)
How: Pull it up with treasure map #38.

Heart Piece #18:
Location: Needle Rock Isle (1,3)
How: Take control of a seagull with a Hyoi pear. Hit the switch on top of the 
Needle Rock to stop the flames that surround the chest.

Heart Piece #19:
Location: (1,2)
How: Pull it up with treasure map #23.

Heart Piece #20:
Location: Outset Island (2,1)
How: The prize after going through 50 floors in the "dungeon" here (where you 
get Triforce map #6).

Heart Piece #21:
Location: (2,5)
How: There are two warships S of the island. Kill them both and one drops the 
piece of heart.

Heart Piece #22:
Location: (2,5)
How: Pull it up with treasure map #2.

Heart Piece #23:
Location: (2,5)
How: Buy it from Beedle.

Heart Piece #24:
Location: Star Island (2,7)
How: Clear all the enemies inside the hole (it's under one of the boulders on 
the island).

Heart Piece #25:
Location: Spectacle Island (3,6)
How: Win the target shooting game.

Heart Piece #26:
Location: (3,3)
How: Clear the watchtowers and a chest will appear.

Heart Piece #27:
Location: (4,2)
How: Pull it up with treasure map #4.

Heart Piece #28:
Location: (4,4)
How: Clear the sub (located SW of center).

Heart Piece #29:
Location: Windfall Island (4,6)
How: Talk to Miss Marie about volunteering. Put a total of 34 town flowers in 
the various platforms on the island, inside and out. Talk to a man sitting on a 
bench when you are done (you need to talk twice) and he gives it to you.

Heart Piece #30:
Location: (5,7)
How: Pull it up with treasure map #11.

Heart Piece #31:
Location: (5,6)
How: Pull it up with treasure map #30.

Heart Piece #32:
Location: Pawprint Isle (5,6)
How: In a chest inside the cave on the island.

Heart Piece #33:
Location: (5,1)
How: Pull it up with treasure map #15.

Heart Piece #34:
Location: Angular Isles (5,1)
How: Pull out blocks on the large island to get to the chest at the top. 

Heart Piece #35:
Location: (6,2)
How: Pull it up with treasure map #31.

Heart Piece #36:
Location: (6,3)
How: Pull it up with treasure map #20.

Heart Piece #37:
Location: Bomb Island (6,3)
How: Clear the cave on the island (it's under a boulder) to get a chest with the 
heart inside.

Heart Piece #38:
Location: Greatfish Isle (2,4)
How: Complete the trading mini-quest (look in the walkthru).

Heart Piece #39:
Location: Dragon Roost Island/Any mailbox
How: There is a guard who wants to give golden feathers to his girlfriend. Give 
him 20 and she will send you a letter with the heart.

Heart Piece #40:
Location: Flight Control Platform (7,6)
How: Win the mini-game here (glide all the way to the end).

Heart Piece #41:
Location: (7,4)
How: Pull it up with treasure map #5.

Heart Piece #42:
Location: (7,1)
How: Pull it up with treasure map #33.

Heart Piece #43:
Location: Five Star Isles (7,1)
How: Clear the sub (located S of the island).

Heart Piece #44:
Location: Various
How: Water all 8 mini Deku Trees with forest water and the last one drops it 
(see the walkthru).
`},{id:"08_missing",title:"Nothing, as far as I know. Fill me in if you have something that isn't in here.",content:`===============================================================================
8.        Missing things
===============================================================================

Nothing, as far as I know. Fill me in if you have something that isn't in here.
`},{id:"09_contact",title:'Put "Zelda FAQ" or something similar in the subject line so I know it\'s a',content:`===============================================================================
9.      Contact Information
===============================================================================

Pretty much the only way you can reach me is by e-mail. My address is:

                   biffslamkovich@hotmail.com

Put "Zelda FAQ" or something similar in the subject line so I know it's a 
question and not spam. Everything I know about the game is written here, though, 
so unless you're asking for clarification, I won't be much help.

Also, please be patient. I got 80 e-mails yesterday alone. It might take me a 
little while to respond. I read and reply to everything I get, though.
`},{id:"10_credits",title:"Since the last version, I've had a LOT of people send in contributions. Some of",content:`===============================================================================
10. Credits, contributors, etc.
===============================================================================

Since the last version, I've had a LOT of people send in contributions. Some of 
the stuff I had already, but I think they deserve thanks anyway for trying to 
help (I don't know what you are comfortable with me crediting you as; I mean, by 
e-mail addy or whatever, so I tried to do my best):

Ray Strife, Jarel Jones, Mike 'hobbit' Macnamara, Pius, Bert, Solo, 
possumwrangler, Samus Aron, Jared, Derrick Miles... (this is incomplete, I'm 
gonna fix it next update because Hotmail is slow as hell today)

I'd also like to thank:

--Nintendo, for making such a great game
--Ephemeral Fantasia, for being bad enough to trade in and get and extra $2 
towards my Game Cube
--Most importantly, Kelly, for being the best girlfriend ever. And for sending 
the game from Japan.
`},{id:"11_copyright",title:'All the text here is the intellectual property of ME, Matt "Biff Slamkovich"',content:`===============================================================================
12.    Copyright Information
===============================================================================

All the text here is the intellectual property of ME, Matt "Biff Slamkovich" 
Murray. You may reprint this document for personal use, but NOT for distribution 
or profit. It may only be hosted on gamefaqs.com, zeldauniverse.net, and 
SPOnG.com. Any other website that steals this document is in violation of the 
Berne Convention and is subject to legal action. If you are confused on 
copyright law, check out http://www.templetons.com/brad/copymyths.html sometime 
and become informed.

All trademarks and copyrights contained in this document are owned by their 
respective trademark and copyright holders.

Copyright 2003 by Matthew Murray, All Rights Reserved.
Restore Page

NOTE:
The original guide for this is here:
https://gamefaqs.gamespot.com/gamecube/469050-the-legend-of-zelda-the-wind-waker/faqs/22209

I (the creator of this web app) have no affiliation with GameSpot or GameFAQs.
I tried reaching out to Matt Murray (the original creator of the guide) 
to get permission to use it, but he never responded and his email address is no longer valid.
I am not making any money from this guide and it is not a commercial product.
This is a labor of love and a way to give back to the Zelda community.
If you are the original creator of the guide and would like me to remove it, please contact me.

tsapdeveloper@gmail.com
`}],A=()=>{let{gameSlug:e}=(0,h.g)(),t=I.find(t=>t.title.toLowerCase().replace(/[^a-z0-9]+/g,"-")===e);return t?t.title.toLowerCase().includes("wind waker")?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.A,{className:"py-4",children:(0,a.jsxs)(g.A,{children:[(0,a.jsx)(g.A.Item,{linkAs:h.N_,linkProps:{to:"/"},children:"Home"}),(0,a.jsx)(g.A.Item,{active:!0,children:t.title})]})}),(0,a.jsx)(T,{gameTitle:t.title,sections:S})]}):(0,a.jsxs)(s.A,{className:"py-4",children:[(0,a.jsxs)(g.A,{children:[(0,a.jsx)(g.A.Item,{linkAs:h.N_,linkProps:{to:"/"},children:"Home"}),(0,a.jsx)(g.A.Item,{active:!0,children:t.title})]}),(0,a.jsxs)(p.A,{children:[(0,a.jsx)(p.A.Header,{children:t.title}),(0,a.jsx)(p.A.Body,{children:(0,a.jsx)("p",{className:"text-muted",children:"Coming soon..."})})]})]}):(0,a.jsxs)(s.A,{className:"py-4",children:[(0,a.jsxs)(g.A,{children:[(0,a.jsx)(g.A.Item,{linkAs:h.N_,linkProps:{to:"/"},children:"Home"}),(0,a.jsx)(g.A.Item,{active:!0,children:"Game Not Found"})]}),(0,a.jsx)("h1",{children:"Game Not Found"}),(0,a.jsx)("p",{children:"The game you're looking for doesn't exist."})]})},H=e=>{let{game:t}=e,o=t.title.toLowerCase().replace(/[^a-z0-9]+/g,"-");return(0,a.jsxs)(p.A,{className:"h-100",children:[(0,a.jsx)(p.A.Header,{children:t.title}),(0,a.jsxs)(p.A.Body,{className:"d-flex flex-column",children:[(0,a.jsx)("strong",{children:t.subtitle}),(0,a.jsx)(p.A.Text,{className:"flex-grow-1",children:t.description}),(0,a.jsxs)("div",{className:"mb-3",children:[(0,a.jsx)(y.A,{bg:"primary",className:"me-2",children:t.platform}),(0,a.jsx)(y.A,{bg:"secondary",className:"me-2",children:t.category}),(0,a.jsx)(y.A,{bg:"dark",children:t.year})]}),(0,a.jsx)("div",{children:(0,a.jsx)(d.A,{as:h.N_,to:`/game/${o}`,variant:"primary",size:"sm",children:"View Guide"})})]})]})},G=e=>{let{games:t}=e;return(0,a.jsx)("div",{className:"row g-4",children:t.map(e=>(0,a.jsx)("div",{className:"col-md-6 col-lg-4",children:(0,a.jsx)(H,{game:e})},`${e.title}-${e.year}`))})},N=e=>{let{gameCount:t}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{className:"mb-4 triforce-accent",children:"Welcome to Zelda Walkthroughs"}),(0,a.jsxs)("p",{className:"lead mb-4",children:["Your ultimate guide to navigating the legendary adventures of Hyrule. Browse through ",t," amazing Zelda games!"]})]})},W=()=>(0,a.jsxs)(s.A,{className:"py-4",children:[(0,a.jsx)(N,{gameCount:I.length}),(0,a.jsx)(G,{games:I})]});var L=o(3505);let j=()=>{let[e,t]=(0,n.useState)(null),[o,i]=(0,n.useState)(!1),[h,r]=(0,n.useState)(!1),[s,l]=(0,n.useState)(!1);(0,n.useEffect)(()=>{let o=e=>{console.log("beforeinstallprompt event fired"),e.preventDefault(),t(e),i(!0)},a=()=>{console.log("PWA was installed"),i(!1),t(null),r(!0)};window.matchMedia("(display-mode: standalone)").matches&&(r(!0),1)||(window.addEventListener("beforeinstallprompt",o),window.addEventListener("appinstalled",a));let n=setTimeout(()=>{e||h||l(!0)},1e4);return()=>{clearTimeout(n),window.removeEventListener("beforeinstallprompt",o),window.removeEventListener("appinstalled",a)}},[e,h]);let u=async()=>{if(e){try{await e.prompt();let{outcome:o}=await e.userChoice;"accepted"===o?(console.log("User accepted the install prompt"),i(!1),t(null)):(console.log("User dismissed the install prompt"),l(!0))}catch(e){console.error("Install prompt failed:",e),l(!0)}t(null),i(!1)}};return h?null:s?(0,a.jsxs)("div",{className:"install-prompt position-fixed bottom-0 start-0 end-0 p-3 bg-dark text-light",children:[(0,a.jsxs)(L.A,{variant:"info",className:"mb-3",children:[(0,a.jsx)("h6",{className:"mb-2",children:"\uD83D\uDCF1 Install on Android"}),(0,a.jsxs)("ol",{className:"mb-0 small",children:[(0,a.jsxs)("li",{children:["Tap the ",(0,a.jsx)("strong",{children:"three dots menu"})," (⋮) in your browser"]}),(0,a.jsxs)("li",{children:["Select ",(0,a.jsx)("strong",{children:'"Add to Home screen"'})," or"," ",(0,a.jsx)("strong",{children:'"Install app"'})]}),(0,a.jsxs)("li",{children:["Tap ",(0,a.jsx)("strong",{children:'"Add"'})," to confirm"]})]})]}),(0,a.jsx)("div",{className:"d-flex gap-2",children:(0,a.jsx)(d.A,{variant:"outline-light",size:"sm",onClick:()=>l(!1),children:"Close"})})]}):o?(0,a.jsx)("div",{className:"install-prompt position-fixed bottom-0 start-0 end-0 p-3 bg-dark text-light",children:(0,a.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h6",{className:"mb-1",children:"Install Zelda Walkthroughs"}),(0,a.jsx)("small",{className:"text-muted",children:"Get quick access to your guides"})]}),(0,a.jsxs)("div",{className:"d-flex gap-2",children:[(0,a.jsx)(d.A,{variant:"outline-light",size:"sm",onClick:()=>i(!1),children:"Not now"}),(0,a.jsx)(d.A,{variant:"outline-light",size:"sm",onClick:()=>{l(!0),i(!1)},children:"Manual"}),(0,a.jsx)(d.A,{variant:"success",size:"sm",onClick:u,children:"Install"})]})]})}):null},M=document.getElementById("root");M&&i.createRoot(M).render((0,a.jsx)(n.StrictMode,{children:(0,a.jsx)(()=>(0,a.jsxs)(h.I9,{children:[(0,a.jsx)(c,{}),(0,a.jsxs)(h.BV,{children:[(0,a.jsx)(h.qh,{path:"/",element:(0,a.jsx)(W,{})}),(0,a.jsx)(h.qh,{path:"/game/:gameSlug",element:(0,a.jsx)(A,{})})]}),(0,a.jsx)(j,{})]}),{})}))}},i={};function h(e){var t=i[e];if(void 0!==t)return t.exports;var o=i[e]={exports:{}};return n[e](o,o.exports,h),o.exports}h.m=n,h.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return h.d(t,{a:t}),t},h.d=(e,t)=>{for(var o in t)h.o(t,o)&&!h.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},h.g=(()=>{if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}})(),h.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e=[],h.O=(t,o,a,n)=>{if(o){n=n||0;for(var i=e.length;i>0&&e[i-1][2]>n;i--)e[i]=e[i-1];e[i]=[o,a,n];return}for(var r=1/0,i=0;i<e.length;i++){for(var[o,a,n]=e[i],s=!0,l=0;l<o.length;l++)(!1&n||r>=n)&&Object.keys(h.O).every(e=>h.O[e](o[l]))?o.splice(l--,1):(s=!1,n<r&&(r=n));if(s){e.splice(i--,1);var d=a();void 0!==d&&(t=d)}}return t},t={410:0},h.O.j=e=>0===t[e],o=(e,o)=>{var a,n,[i,r,s]=o,l=0;if(i.some(e=>0!==t[e])){for(a in r)h.o(r,a)&&(h.m[a]=r[a]);if(s)var d=s(h)}for(e&&e(o);l<i.length;l++)n=i[l],h.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return h.O(d)},(a=self.webpackChunkzelda_walkthroughs=self.webpackChunkzelda_walkthroughs||[]).forEach(o.bind(null,0)),a.push=o.bind(null,a.push.bind(a));var r=h.O(void 0,["783","535","452"],function(){return h(5248)});r=h.O(r)})();