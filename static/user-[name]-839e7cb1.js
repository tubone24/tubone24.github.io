import{a as e,y as s,H as t}from"./header-85451828.js";const r=s=>{const t=s.username;return e("img",{src:`https://github-readme-stats.vercel.app/api?username=${t}&count_private=true&show_icons=true`,alt:t+"'s stats"})},a=s=>{const t=s.username;return e("img",{src:`https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${t}&theme=vue`,alt:t+"'s stats"})},u=s=>{const t=s.username;return e("img",{src:`https://github-readme-stats.vercel.app/api/top-langs/?username=${t}&layout=compact`,alt:t+"'s stats"})},n=s=>{const t=s.username;return e("img",{src:"https://github-readme-streak-stats.herokuapp.com/?user="+t,alt:t+"'s stats"})},l=s=>{const t=s.username;return e("img",{src:"https://github-profile-trophy.vercel.app/?username="+t,alt:t+"'s stats"})},m=t=>{let m;return console.log(t),m=Array.isArray(t.username)?t.username[0]:t.username,console.log(m),e(s,null,e(r,{username:m}),e(a,{username:m}),e(n,{username:m}),e(u,{username:m}),e(l,{username:m}))};export default s=>{console.log(s);const r=s.route?.name??"";return console.log(r),e("div",{class:"mx-auto max-w-screen-md px-6 sm:px-6 md:px-8"},e(t,null),e("main",null,e("div",{class:"flex flex-wrap items-stretch w-full relative"},e("h2",null,"This is the GitHub Stats for ",r),e(m,{username:r})),e("p",null,e("a",{href:"/"},"Go home"))))};//# sourceMappingURL=user-[name]-839e7cb1.js.map