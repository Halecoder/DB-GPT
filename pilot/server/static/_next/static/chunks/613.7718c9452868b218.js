(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[613],{31482:function(e,t,l){"use strict";l.d(t,{_z:function(){return M},ZP:function(){return T},aG:function(){return E}});var n=l(85893),a=l(41118),r=l(30208),i=l(40911),s=l(58234);function c(e){let{chart:t}=e;return(0,n.jsx)("div",{className:"flex-1 min-w-0",children:(0,n.jsx)(a.Z,{className:"h-full",sx:{background:"transparent"},children:(0,n.jsxs)(r.Z,{className:"h-full",children:[(0,n.jsx)(i.ZP,{gutterBottom:!0,component:"div",children:t.chart_name}),(0,n.jsx)(i.ZP,{gutterBottom:!0,level:"body3",children:t.chart_desc}),(0,n.jsx)("div",{className:"h-[300px]",children:(0,n.jsx)(s.k,{style:{height:"100%"},options:{autoFit:!0,type:"interval",data:t.values,encode:{x:"name",y:"value",color:"type"},axis:{x:{labelAutoRotate:!1}}}})})]})})})}function o(e){let{chart:t}=e;return(0,n.jsx)("div",{className:"flex-1 min-w-0",children:(0,n.jsx)(a.Z,{className:"h-full",sx:{background:"transparent"},children:(0,n.jsxs)(r.Z,{className:"h-full",children:[(0,n.jsx)(i.ZP,{gutterBottom:!0,component:"div",children:t.chart_name}),(0,n.jsx)(i.ZP,{gutterBottom:!0,level:"body3",children:t.chart_desc}),(0,n.jsx)("div",{className:"h-[300px]",children:(0,n.jsx)(s.k,{style:{height:"100%"},options:{autoFit:!0,type:"view",data:t.values,children:[{type:"line",encode:{x:"name",y:"value",color:"type",shape:"smooth"}},{type:"area",encode:{x:"name",y:"value",color:"type",shape:"smooth"},legend:!1,style:{fillOpacity:.15}}],axis:{x:{labelAutoRotate:!1}}}})})]})})})}var u=l(61685),d=l(96486);function h(e){var t,l;let{chart:s}=e,c=(0,d.groupBy)(s.values,"type");return(0,n.jsx)("div",{className:"flex-1 min-w-0",children:(0,n.jsx)(a.Z,{className:"h-full overflow-auto",sx:{background:"transparent"},children:(0,n.jsxs)(r.Z,{className:"h-full",children:[(0,n.jsx)(i.ZP,{gutterBottom:!0,component:"div",children:s.chart_name}),(0,n.jsx)(i.ZP,{gutterBottom:!0,level:"body3",children:s.chart_desc}),(0,n.jsx)("div",{className:"flex-1",children:(0,n.jsxs)(u.Z,{"aria-label":"basic table",stripe:"odd",hoverRow:!0,borderAxis:"bothBetween",children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:Object.keys(c).map(e=>(0,n.jsx)("th",{children:e},e))})}),(0,n.jsx)("tbody",{children:null===(t=Object.values(c))||void 0===t?void 0:null===(l=t[0])||void 0===l?void 0:l.map((e,t)=>{var l;return(0,n.jsx)("tr",{children:null===(l=Object.keys(c))||void 0===l?void 0:l.map(e=>{var l;return(0,n.jsx)("td",{children:(null==c?void 0:null===(l=c[e])||void 0===l?void 0:l[t].value)||""},e)})},t)})})]})})]})})})}var m=l(67294),p=l(5165);let x=e=>{let{charts:t,scopeOfCharts:l,ruleConfig:n}=e,a={};if(null==t||t.forEach(e=>{if(e.chartKnowledge.toSpec){let t=e.chartKnowledge.toSpec;e.chartKnowledge.toSpec=(e,l)=>({...t(e,l),dataProps:l})}else e.chartKnowledge.toSpec=(e,t)=>({dataProps:t});a[e.chartType]=e.chartKnowledge}),(null==l?void 0:l.exclude)&&l.exclude.forEach(e=>{Object.keys(a).includes(e)&&delete a[e]}),null==l?void 0:l.include){let e=l.include;Object.keys(a).forEach(t=>{e.includes(t)||delete a[t]})}let r={...l,custom:a},i={...n},s=new p.w({ckbCfg:r,ruleCfg:i});return s},v=e=>{var t;let{data:l,dataMetaMap:n,myChartAdvisor:a}=e,r=n?Object.keys(n).map(e=>({name:e,...n[e]})):null,i=null==a?void 0:a.adviseWithLog({data:l,dataProps:r});return null!==(t=null==i?void 0:i.advices)&&void 0!==t?t:[]};function f(e,t){return t.every(t=>e.includes(t))}function _(e,t){let l=t.find(t=>t.name===e);return(null==l?void 0:l.recommendation)==="date"?t=>new Date(t[e]):e}let y=[{chartType:"multi_line_chart",chartKnowledge:{id:"multi_line_chart",name:"multi_line_chart",alias:["multi_line_chart"],family:["LineCharts"],def:"multi_line_chart uses lines with segments to show changes in data in a ordinal dimension",purpose:["Comparison","Trend"],coord:["Cartesian2D"],category:["Statistic"],shape:["Lines"],dataPres:[{minQty:1,maxQty:1,fieldConditions:["Time","Ordinal"]},{minQty:1,maxQty:"*",fieldConditions:["Interval"]},{minQty:0,maxQty:1,fieldConditions:["Nominal"]}],channel:["Color","Direction","Position"],recRate:"Recommended",toSpec:(e,t)=>{let l=t.find(e=>{var t;return t=e.levelOfMeasurements,["Time","Ordinal"].some(e=>t.includes(e))}),n=t.filter(e=>f(e.levelOfMeasurements,["Interval"])),a=t.find(e=>f(e.levelOfMeasurements,["Nominal"]));if(!l||!n)return null;let r={type:"view",autoFit:!0,data:e,children:[]};return n.forEach(e=>{let n={type:"line",encode:{x:_(l.name,t),y:e.name}};a&&(n.encode.color=a.name),r.children.push(n)}),r}},chineseName:"折线图"},{chartType:"multi_measure_column_chart",chartKnowledge:{id:"multi_measure_column_chart",name:"multi_measure_column_chart",alias:["multi_measure_column_chart"],family:["ColumnCharts"],def:"multi_measure_column_chart uses lines with segments to show changes in data in a ordinal dimension",purpose:["Comparison","Distribution"],coord:["Cartesian2D"],category:["Statistic"],shape:["Lines"],dataPres:[{minQty:1,maxQty:"*",fieldConditions:["Interval"]},{minQty:1,maxQty:1,fieldConditions:["Nominal"]}],channel:["Color","Direction","Position"],recRate:"Recommended",toSpec:(e,t)=>{try{let l=null==t?void 0:t.filter(e=>f(e.levelOfMeasurements,["Interval"])),n=null==t?void 0:t.find(e=>f(e.levelOfMeasurements,["Nominal"]));if(!n||!l)return null;let a={type:"view",data:e,children:[]};return null==l||l.forEach(e=>{let t={type:"interval",encode:{x:n.name,y:e.name,color:()=>e.name,series:()=>e.name}};a.children.push(t)}),a}catch(e){return console.log(e),null}}},chineseName:"折线图"},{chartType:"multi_measure_line_chart",chartKnowledge:{id:"multi_measure_line_chart",name:"multi_measure_line_chart",alias:["multi_measure_line_chart"],family:["LineCharts"],def:"multi_measure_line_chart uses lines with segments to show changes in data in a ordinal dimension",purpose:["Comparison","Distribution"],coord:["Cartesian2D"],category:["Statistic"],shape:["Lines"],dataPres:[{minQty:1,maxQty:"*",fieldConditions:["Interval"]},{minQty:1,maxQty:1,fieldConditions:["Nominal"]}],channel:["Color","Direction","Position"],recRate:"Recommended",toSpec:(e,t)=>{try{let l=null==t?void 0:t.filter(e=>f(e.levelOfMeasurements,["Interval"])),n=null==t?void 0:t.find(e=>f(e.levelOfMeasurements,["Nominal"]));if(!n||!l)return null;let a={type:"view",data:e,children:[]};return null==l||l.forEach(e=>{let l={type:"line",encode:{x:_(n.name,t),y:e.name,color:()=>e.name,series:()=>e.name}};a.children.push(l)}),a}catch(e){return console.log(e),null}}},chineseName:"折线图"}];var j=l(32983),g=l(71230),b=l(15746);l(22138);var w=(0,m.forwardRef)((e,t)=>{let{title:l,description:a,toolbar:r}=e,i=(0,m.useRef)(null),s="auto-chart-header";return((0,m.useImperativeHandle)(t,()=>({container:i.current})),l||a||r)?(0,n.jsxs)("div",{className:s,ref:i,children:[l||r?(0,n.jsxs)(g.Z,{justify:"start",className:"".concat(s,"-main"),children:[(0,n.jsx)(b.Z,{className:"".concat(s,"-title"),children:l}),(0,n.jsx)(b.Z,{className:"".concat(s,"-toolbar"),style:{marginLeft:24},children:r})]}):null,a&&(0,n.jsx)(g.Z,{className:"".concat(s,"-desc"),children:a})]}):null}),C=l(51009),N=l(83062);let Z={stacked_column_chart:"堆叠柱状图",column_chart:"柱状图",percent_stacked_column_chart:"百分比堆叠柱状图",grouped_column_chart:"簇形柱状图",time_column:"簇形柱状图",pie_chart:"饼图",time_pie_chart:"饼图",line_chart:"折线图",line_tech_vis:"折线图",line_bar_mix:"双轴图",area_chart:"面积图",stacked_area_chart:"堆叠面积图",scatter_plot:"散点图",bubble_chart:"气泡图",stacked_bar_chart:"堆叠条形图",bar_chart:"条形图",percent_stacked_bar_chart:"百分比堆叠条形图",grouped_bar_chart:"簇形条形图",water_fall_chart:"瀑布图",table:"表格",statistic_card:"指标卡",group_column_tech_vis:"柱状图",line_bar_mix_no_time:"双轴图",indicator_line_chart:"指标趋势图",indicator_chart:"指标卡"};Object.keys(Z);var P=l(80882);let{Option:k}=C.default,S=e=>{let{optionalChartTypes:t,onChartTypeChange:l,customCharts:a,chartType:r}=e,[i,s]=(0,m.useState)(r);return(0,m.useEffect)(()=>{s(null==r?void 0:r.toLowerCase())},[r]),(0,m.useEffect)(()=>{null==t||!t.length||i&&(null==t?void 0:t.includes(i))||(s(t[0]),null==l||l(t[0]))},[t,i,l]),(0,n.jsx)(C.default,{value:i,placeholder:"切换图表类型",style:{width:"180px"},onChange:e=>{null==l||l(e)},size:"small",children:null==t?void 0:t.map(e=>{var t,l,r;let i=null!==(r=null!==(l=Z[e.toLowerCase()])&&void 0!==l?l:null===(t=null==a?void 0:a.find(t=>t.chartType.toLowerCase()===e))||void 0===t?void 0:t.chineseName)&&void 0!==r?r:e;return(0,n.jsx)(k,{value:e,children:(0,n.jsx)(N.Z,{title:i,placement:"right",children:(0,n.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,n.jsx)(P.Z,{}),(0,n.jsx)("div",{style:{marginLeft:"2px"},children:i})]})})},e)})})},O=e=>{var t,l;let{config:a,optionalChartTypes:r,onSelectChange:i,chartType:s}=e;return a?(0,n.jsx)(w,{title:null==a?void 0:a.title,toolbar:(0,n.jsxs)(n.Fragment,{children:[null==a?void 0:null===(t=a.extra)||void 0===t?void 0:t[0],(null==a?void 0:a.chartSelector)?(0,n.jsx)(S,{optionalChartTypes:r,onChartTypeChange:e=>{null==i||i({type:"chartSelector",value:e})},chartType:s}):null,null==a?void 0:null===(l=a.extra)||void 0===l?void 0:l[1]]})}):null},E=e=>"response_line_chart"===e?["multi_line_chart","multi_measure_line_chart"]:"response_bar_chart"===e?["multi_measure_column_chart"]:"response_pie_chart"===e?["pie_chart"]:"response_scatter_chart"===e?["scatter_plot"]:"response_area_chart"===e?["area_chart"]:"response_heatmap_chart"===e?["heatmap"]:[],M=e=>{let{data:t,chartType:l,scopeOfCharts:a,ruleConfig:r}=e,[i,c]=(0,m.useState)(),[o,u]=(0,m.useState)([]),[d,h]=(0,m.useState)();(0,m.useEffect)(()=>{c(x({charts:y,scopeOfCharts:void 0,ruleConfig:r}))},[r,a,y]),(0,m.useEffect)(()=>{if(t&&i){var e;let n=v({data:t,myChartAdvisor:i}),a=function(e){let{advices:t}=e;return t}({advices:n});a.sort((e,t)=>l.indexOf(t.type)-(null==l?void 0:l.indexOf(e.type))),u(a),h(null===(e=a[0])||void 0===e?void 0:e.type)}},[t,i,l]);let p=(0,m.useMemo)(()=>{if((null==o?void 0:o.length)>0){var e,t;let l=null!=d?d:o[0].type,a=null!==(t=null===(e=null==o?void 0:o.find(e=>e.type===l))||void 0===e?void 0:e.spec)&&void 0!==t?t:void 0;if(a)return(0,n.jsx)(s.k,{options:a},l)}},[o,t,d]);return p?(0,n.jsxs)("div",{children:[(0,n.jsx)(O,{chartType:d,optionalChartTypes:null==o?void 0:o.map(e=>e.type),onSelectChange:e=>{let{type:t,value:l}=e;h(l)},config:{title:"自动推荐",chartSelector:!0}}),(0,n.jsxs)("div",{className:"auto-chart-content",children:[" ",p]})]}):(0,n.jsx)(j.Z,{image:j.Z.PRESENTED_IMAGE_SIMPLE,description:"暂无合适的可视化视图"})};var T=function(e){let{chartsData:t}=e,l=(0,m.useMemo)(()=>{if(t){let e=[],l=null==t?void 0:t.filter(e=>"IndicatorValue"===e.chart_type);l.length>0&&e.push({charts:l,type:"IndicatorValue"});let n=null==t?void 0:t.filter(e=>"IndicatorValue"!==e.chart_type),a=n.length,r=0;return[[0],[1],[2],[1,2],[1,3],[2,1,2],[2,1,3],[3,1,3],[3,2,3]][a].forEach(t=>{if(t>0){let l=n.slice(r,r+t);r+=t,e.push({charts:l})}}),e}},[t]);return(0,n.jsx)("div",{className:"flex flex-col gap-3",children:null==l?void 0:l.map((e,t)=>(0,n.jsx)("div",{className:"".concat((null==e?void 0:e.type)!=="IndicatorValue"?"flex gap-3":""),children:e.charts.map(e=>"IndicatorValue"===e.chart_type?(0,n.jsx)("div",{className:"flex flex-row gap-3",children:e.values.map(e=>(0,n.jsx)("div",{className:"flex-1",children:(0,n.jsx)(a.Z,{sx:{background:"transparent"},children:(0,n.jsxs)(r.Z,{className:"justify-around",children:[(0,n.jsx)(i.ZP,{gutterBottom:!0,component:"div",children:e.name}),(0,n.jsx)(i.ZP,{children:e.value})]})})},e.name))},e.chart_uid):"LineChart"===e.chart_type?(0,n.jsx)(o,{chart:e},e.chart_uid):"BarChart"===e.chart_type?(0,n.jsx)(c,{chart:e},e.chart_uid):"Table"===e.chart_type?(0,n.jsx)(h,{chart:e},e.chart_uid):void 0)},"chart_row_".concat(t)))})}},70803:function(e,t,l){"use strict";l.d(t,{Z:function(){return O}});var n=l(85893),a=l(67294),r=l(2453),i=l(83062),s=l(31365),c=l(71577),o=l(49591),u=l(88484),d=l(29158),h=l(50489),m=l(41468),p=function(e){var t;let{convUid:l,chatMode:p,onComplete:x,...v}=e,[f,_]=(0,a.useState)(!1),[y,j]=r.ZP.useMessage(),[g,b]=(0,a.useState)([]),[w,C]=(0,a.useState)(),{model:N}=(0,a.useContext)(m.p),Z=async e=>{var t;if(!e){r.ZP.error("Please select the *.(csv|xlsx|xls) file");return}if(!/\.(csv|xlsx|xls)$/.test(null!==(t=e.file.name)&&void 0!==t?t:"")){r.ZP.error("File type must be csv, xlsx or xls");return}b([e.file])},P=async()=>{_(!0);try{let e=new FormData;e.append("doc_file",g[0]),y.open({content:"Uploading ".concat(g[0].name),type:"loading",duration:0});let[t]=await (0,h.Vx)((0,h.qn)({convUid:l,chatMode:p,data:e,model:N,config:{timeout:36e5,onUploadProgress:e=>{let t=Math.ceil(e.loaded/(e.total||0)*100);C(t)}}}));if(t)return;r.ZP.success("success"),null==x||x()}catch(e){r.ZP.error((null==e?void 0:e.message)||"Upload Error")}finally{_(!1),y.destroy()}};return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"flex items-start gap-2",children:[j,(0,n.jsx)(i.Z,{placement:"bottom",title:"File cannot be changed after upload",children:(0,n.jsx)(s.default,{disabled:f,className:"mr-1",beforeUpload:()=>!1,fileList:g,name:"file",accept:".csv,.xlsx,.xls",multiple:!1,onChange:Z,showUploadList:{showDownloadIcon:!1,showPreviewIcon:!1,showRemoveIcon:!1},itemRender:()=>(0,n.jsx)(n.Fragment,{}),...v,children:(0,n.jsx)(c.ZP,{className:"flex justify-center items-center",type:"primary",disabled:f,icon:(0,n.jsx)(o.Z,{}),children:"Select File"})})}),(0,n.jsx)(c.ZP,{type:"primary",loading:f,className:"flex justify-center items-center",disabled:!g.length,icon:(0,n.jsx)(u.Z,{}),onClick:P,children:f?100===w?"Analysis":"Uploading":"Upload"}),!!g.length&&(0,n.jsxs)("div",{className:"mt-2 text-gray-500 text-sm flex items-center",children:[(0,n.jsx)(d.Z,{className:"mr-2"}),(0,n.jsx)("span",{children:null===(t=g[0])||void 0===t?void 0:t.name})]})]})})},x=function(e){let{onComplete:t}=e,{currentDialogue:l,scene:r,chatId:i}=(0,a.useContext)(m.p);return"chat_excel"!==r?null:(0,n.jsx)("div",{className:"max-w-md h-full relative",children:l?(0,n.jsxs)("div",{className:"flex h-8 overflow-hidden rounded",children:[(0,n.jsx)("div",{className:"flex items-center justify-center px-2 bg-gray-600 text-lg",children:(0,n.jsx)(d.Z,{className:"text-white"})}),(0,n.jsx)("div",{className:"flex items-center justify-center px-3 bg-gray-100 text-xs rounded-tr rounded-br dark:text-gray-800 truncate",children:l.select_param})]}):(0,n.jsx)(p,{convUid:i,chatMode:r,onComplete:t})})};l(23293);var v=l(78045),f=l(16165),_=l(96991),y=function(){return(0,n.jsx)("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 1024 1024",version:"1.1",children:(0,n.jsx)("path",{d:"M602.24 246.72a17.28 17.28 0 0 0-11.84-16.32l-42.88-14.4A90.56 90.56 0 0 1 490.24 160l-14.4-42.88a17.28 17.28 0 0 0-32 0L428.8 160a90.56 90.56 0 0 1-57.28 57.28l-42.88 14.4a17.28 17.28 0 0 0 0 32l42.88 14.4a90.56 90.56 0 0 1 57.28 57.28l14.4 42.88a17.28 17.28 0 0 0 32 0l14.4-42.88a90.56 90.56 0 0 1 57.28-57.28l42.88-14.4a17.28 17.28 0 0 0 12.48-16.96z m301.12 221.76l-48.32-16a101.44 101.44 0 0 1-64-64l-16-48.32a19.2 19.2 0 0 0-36.8 0l-16 48.32a101.44 101.44 0 0 1-64 64l-48.32 16a19.2 19.2 0 0 0 0 36.8l48.32 16a101.44 101.44 0 0 1 64 64l16 48.32a19.2 19.2 0 0 0 36.8 0l16-48.32a101.44 101.44 0 0 1 64-64l48.32-16a19.2 19.2 0 0 0 0-36.8z m-376.64 195.52l-64-20.8a131.84 131.84 0 0 1-83.52-83.52l-20.8-64a25.28 25.28 0 0 0-47.68 0l-20.8 64a131.84 131.84 0 0 1-82.24 83.52l-64 20.8a25.28 25.28 0 0 0 0 47.68l64 20.8a131.84 131.84 0 0 1 83.52 83.84l20.8 64a25.28 25.28 0 0 0 47.68 0l20.8-64a131.84 131.84 0 0 1 83.52-83.52l64-20.8a25.28 25.28 0 0 0 0-47.68z","p-id":"3992"})})};function j(){let{isContract:e,setIsContract:t,scene:l}=(0,a.useContext)(m.p),r=l&&["chat_with_db_execute","chat_dashboard"].includes(l);return r?(0,n.jsxs)(v.ZP.Group,{value:e,defaultValue:!0,buttonStyle:"solid",onChange:()=>{t(!e)},children:[(0,n.jsxs)(v.ZP.Button,{value:!1,children:[(0,n.jsx)(f.Z,{component:y,className:"mr-1"}),"Preview"]}),(0,n.jsxs)(v.ZP.Button,{value:!0,children:[(0,n.jsx)(_.Z,{className:"mr-1"}),"Editor"]})]}):null}var g=l(81799),b=function(){return(0,n.jsx)("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4870",children:(0,n.jsx)("path",{d:"M511.875 128.125c-211.875 0-383.75 76.25-383.75 170.625 0 94.375 171.875 170.625 383.75 170.625 211.875 0 383.75-76.25 383.75-170.625C896.25 204.375 724.375 128.125 511.875 128.125M128.125 383.75l0 128.125c0 94.375 171.875 170.625 383.75 170.625 211.875 0 383.75-76.25 383.75-170.625l0-128.125c0 94.375-171.875 170.625-383.75 170.625C300 555 128.125 478.125 128.125 383.75M128.125 597.5l0 128.125c0 94.375 171.875 170.625 383.75 170.625 211.875 0 383.75-76.25 383.75-170.625l0-128.125c0 94.375-171.875 170.625-383.75 170.625C300 768.125 128.125 691.875 128.125 597.5z","p-id":"4871"})})},w=l(2093),C=l(51009),N=function(){let{scene:e,dbParam:t,setDbParam:l}=(0,a.useContext)(m.p),[r,i]=(0,a.useState)({});(0,w.Z)(async()=>{let[,t]=await (0,h.Vx)((0,h.vD)(e));i(null!=t?t:{})},[e]);let s=(0,a.useMemo)(()=>Object.entries(r).map(e=>{let[t,l]=e;return{label:t,value:l}}),[r]);return((0,a.useEffect)(()=>{s.length&&!t&&l(s[0].value)},[s,l,t]),s.length)?(0,n.jsx)(C.default,{value:t,className:"w-36",onChange:e=>{l(e)},children:s.map(e=>(0,n.jsxs)(C.default.Option,{children:[(0,n.jsx)(f.Z,{component:b,className:"mr-1"}),e.label]},e.value))}):null},Z=l(577),P=l(11163),k=l(67421),S=function(){let{push:e}=(0,P.useRouter)(),{t}=(0,k.$G)(),{agentList:l,setAgentList:r}=(0,a.useContext)(m.p),{data:i=[]}=(0,Z.Z)(async()=>{let[,e]=await (0,h.Vx)((0,h.N6)());return e&&e.length&&(null==r||r([e[0].name])),null!=e?e:[]});return i.length?(0,n.jsx)(C.default,{className:"w-60",value:l,mode:"multiple",maxTagCount:1,maxTagTextLength:12,placeholder:t("Select_Plugins"),options:i.map(e=>({label:e.name,value:e.name})),allowClear:!0,onChange:e=>{null==r||r(e)}}):(0,n.jsx)(c.ZP,{type:"primary",onClick:()=>{e("/agent")},children:t("To_Plugin_Market")})},O=function(e){let{refreshHistory:t,modelChange:l}=e,{scene:r,refreshDialogList:i}=(0,a.useContext)(m.p);return(0,n.jsxs)("div",{className:"w-full py-2 px-4 md:px-4 flex flex-wrap items-center justify-center border-b border-gray-100 gap-1 md:gap-4",children:[(0,n.jsx)(g.Z,{onChange:l}),(0,n.jsx)(N,{}),"chat_excel"===r&&(0,n.jsx)(x,{onComplete:()=>{null==i||i(),null==t||t()}}),"chat_agent"===r&&(0,n.jsx)(S,{}),(0,n.jsx)(j,{})]})}},81799:function(e,t,l){"use strict";l.d(t,{A:function(){return d}});var n=l(85893),a=l(41468),r=l(51009),i=l(19284),s=l(25675),c=l.n(s),o=l(67294),u=l(67421);function d(e,t){var l;let{width:a,height:r}=t||{};return e?(0,n.jsx)(c(),{className:"rounded-full border border-gray-200 object-contain bg-white inline-block",width:a||24,height:r||24,src:(null===(l=i.H[e])||void 0===l?void 0:l.icon)||"/models/huggingface.svg",alt:"llm"}):null}t.Z=function(e){let{onChange:t}=e,{t:l}=(0,u.$G)(),{modelList:s,model:c}=(0,o.useContext)(a.p);return!s||s.length<=0?null:(0,n.jsx)(r.default,{value:c,placeholder:l("choose_model"),className:"w-52",onChange:e=>{null==t||t(e)},children:s.map(e=>{var t;return(0,n.jsx)(r.default.Option,{children:(0,n.jsxs)("div",{className:"flex items-center",children:[d(e),(0,n.jsx)("span",{className:"ml-2",children:(null===(t=i.H[e])||void 0===t?void 0:t.label)||e})]})},e)})})}},99513:function(e,t,l){"use strict";l.d(t,{Z:function(){return u}});var n=l(85893),a=l(77119),r=l(63764),i=l(94184),s=l.n(i),c=l(67294),o=l(36782);function u(e){let{className:t,value:l,language:a="mysql",onChange:i,thoughts:u}=e,d=(0,c.useMemo)(()=>"mysql"!==a?l:u&&u.length>0?(0,o.WU)("-- ".concat(u," \n").concat(l)):(0,o.WU)(l),[l,u]);return(0,n.jsx)(r.ZP,{className:s()(t),value:d,language:a,onChange:i,theme:"vs-dark",options:{minimap:{enabled:!1},wordWrap:"on"}})}r._m.config({monaco:a})},30119:function(e,t,l){"use strict";l.d(t,{Tk:function(){return c},PR:function(){return o}});var n=l(2453),a=l(6154),r=l(83454);let i=a.Z.create({baseURL:r.env.API_BASE_URL});i.defaults.timeout=1e4,i.interceptors.response.use(e=>e.data,e=>Promise.reject(e)),l(96486);let s={"content-type":"application/json"},c=(e,t)=>{if(t){let l=Object.keys(t).filter(e=>void 0!==t[e]&&""!==t[e]).map(e=>"".concat(e,"=").concat(t[e])).join("&");l&&(e+="?".concat(l))}return i.get("/api"+e,{headers:s}).then(e=>e).catch(e=>{n.ZP.error(e),Promise.reject(e)})},o=(e,t)=>i.post(e,t,{headers:s}).then(e=>e).catch(e=>{n.ZP.error(e),Promise.reject(e)})},22138:function(){},23293:function(){}}]);