import{C as e,D as t,n}from"./pinia-Cx4k5HIz.js";var r=[{id:`demo-1`,title:`星辰与代码`,author:`示例作者`,cover:`https://picsum.photos/seed/book1/480/640`,summary:`一个关于工程师在宇宙尺度下寻找意义的故事。`,tags:[`科幻`,`成长`],chapters:[{title:`第一章：星港晨光`,content:`在星港的清晨，空气里混着金属与咖啡的味道。林远把背包甩到肩上，抬头看见巨大的曲率引擎像一枚沉睡的鲸骨。

他今天要做的，是把一段“不可能”的代码跑起来。

“你确定要试？”同事阿楠把安全帽递给他，“如果失败，我们会把整个模拟环境推回昨天。”

林远笑了笑：“那就让昨天再来一次。”

他走进测试舱，屏幕像潮水般亮起。代码在指尖流动，像星图一样展开。`},{title:`第二章：回声走廊`,content:`回声走廊里，脚步声被拉得很长。林远听见自己的呼吸，像在和宇宙对话。

“你相信命运吗？”阿楠忽然问。

“我相信可复现的实验。”林远说，“如果命运存在，它应该有单元测试。”

阿楠笑了，笑声在走廊里碎成光点。

他们停在一扇门前。门后，是一台被遗忘的机器，像一座沉默的神。`},{title:`第三章：错误与光`,content:`第一次运行失败了。错误码像雨点一样落下。

林远没有慌。他把问题拆成小块，像在夜空里拼星座。

“这里，”他指着一行，“我们把时间当成标量，但它其实是向量。”

阿楠点头：“所以我们要给时间一个方向。”

他们重新编译，重新点燃引擎。屏幕中央，一束光缓缓升起。`}]},{id:`demo-2`,title:`雨城食记`,author:`示例作者`,cover:`https://picsum.photos/seed/book2/480/640`,summary:`在一座总是下雨的城市，用食物串起人心与记忆。`,tags:[`都市`,`治愈`],chapters:[{title:`第一章：热汤与旧友`,content:`雨城的雨，像一封没写完的信。

苏晚推开小店的门，热汤的香气把她从潮湿里捞起来。

“你还是老样子？”老板问。

“老样子。”她笑，“加葱，不要香菜。”

她把汤端到窗边，看雨滴在玻璃上写字。`},{title:`第二章：盐的重量`,content:`盐是记忆的重量。

苏晚在厨房里试新菜，手心被热油溅到。她想起母亲说：别怕疼，怕没味道。

她把盐撒下去，像把一段旧时光轻轻放回锅里。

窗外的雨停了，城市像刚醒过来。`}]}],i=`reader-theme`,a=`reader-font-size`,o=`reader-progress`,s=`reader-bookmarks`,c=n(`reader`,()=>{let n=t(localStorage.getItem(i)||`paper`),r=t(Number(localStorage.getItem(a)||18)),c=t(JSON.parse(localStorage.getItem(o)||`{}`)),l=t(JSON.parse(localStorage.getItem(s)||`{}`));e(n,e=>localStorage.setItem(i,e)),e(r,e=>localStorage.setItem(a,String(e))),e(c,e=>localStorage.setItem(o,JSON.stringify(e)),{deep:!0}),e(l,e=>localStorage.setItem(s,JSON.stringify(e)),{deep:!0});function u(e){n.value=e}function d(e){r.value=Math.min(28,Math.max(12,e))}function f(e,t,n){c.value[e]={chapterIndex:t,scrollTop:n}}function p(e){return c.value[e]||null}function m(e,t,n=``){let r=l.value[e]||[];r.unshift({chapterIndex:t,note:n,createdAt:Date.now()}),l.value[e]=r}function h(e,t){let n=l.value[e]||[];n.splice(t,1),l.value[e]=n}function g(e){return l.value[e]||[]}return{theme:n,fontSize:r,progress:c,bookmarks:l,setTheme:u,setFontSize:d,saveProgress:f,getProgress:p,addBookmark:m,removeBookmark:h,getBookmarks:g}});export{r as n,c as t};