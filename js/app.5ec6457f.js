(function(e){function t(t){for(var a,l,o=t[0],i=t[1],c=t[2],d=0,f=[];d<o.length;d++)l=o[d],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&f.push(r[l][0]),r[l]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);u&&u(t);while(f.length)f.shift()();return n.push.apply(n,c||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],a=!0,o=1;o<s.length;o++){var i=s[o];0!==r[i]&&(a=!1)}a&&(n.splice(t--,1),e=l(l.s=s[0]))}return e}var a={},r={app:0},n=[];function l(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.m=e,l.c=a,l.d=function(e,t,s){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(l.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(s,a,function(t){return e[t]}.bind(null,a));return s},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/worth-your-time/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=i;n.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"56d7":function(e,t,s){"use strict";s.r(t);var a=s("2b0e"),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("section",{staticClass:"section container"},[e._m(0),s("div",{staticClass:"columns is-centered has-text-left"},[s("div",{staticClass:"column is-6"},[s("div",{staticClass:"field"},[e._m(1),s("div",{staticClass:"field-body"},[s("div",{staticClass:"field"},[s("p",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model.number",value:e.years,expression:"years",modifiers:{number:!0}}],staticClass:"input",attrs:{id:"years",type:"text"},domProps:{value:e.years},on:{input:function(t){t.target.composing||(e.years=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})])])])])])]),s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-8 is-offset-2"},[s("div",{staticClass:"table-container"},[s("table",{staticClass:"table is-striped is-fullwidth"},[e._m(2),s("tr",[s("th"),e._l(this.y,(function(t){return s("th",{domProps:{innerHTML:e._s(t.label)}})}))],2),e._l(e.table_data,(function(t,a){return s("tr",[s("th",{domProps:{innerHTML:e._s(e.x[a].label)}}),e._l(t,(function(t){return s("td",{domProps:{innerHTML:e._s(t.label)}})}))],2)}))],2)])])])]),e._m(3)])},n=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"columns is-centered"},[s("div",{staticClass:"column is-6"},[s("h1",{staticClass:"title is-3"},[e._v("Worth your time?")]),s("h3",{staticClass:"subtitle is-5"},[e._v("How long can you work on making a routine task more efficient before spending more time than you save?")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"field-label is-normal has-text-left"},[s("label",{staticClass:"label"},[e._v("How many years")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("tr",[s("td",{staticClass:"has-text-centered",staticStyle:{position:"relative","min-width":"2rem"},attrs:{rowspan:"10"}},[s("div",{staticClass:"label vertical"},[e._v(" How long it takes you ")])]),s("td",{staticClass:"has-text-centered",attrs:{colspan:"7"}},[s("div",{staticClass:"label"},[e._v(" How often you do the task ")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("footer",{staticClass:"footer"},[s("small",[e._v("Relevant xkcd: "),s("a",{attrs:{href:"https://xkcd.com/1205/"}},[e._v("Is It Worth the Time?")])])])}],l={data(){return{table_data:[],years:null,y:[{label:"50/day",per_year:18250},{label:"5/day",per_year:1825},{label:"Daily",per_year:365},{label:"Weekly",per_year:52},{label:"Monthly",per_year:12},{label:"Yearly",per_year:1}],x:[{label:"1 second",seconds:1},{label:"5 seconds",seconds:5},{label:"30 seconds",seconds:30},{label:"1 minute",seconds:60},{label:"30 minutes",seconds:1800},{label:"1 hour",seconds:3600},{label:"6 hours",seconds:21600},{label:"1 day",seconds:86400}]}},mounted(){let e=window.localStorage.getItem("time_period");this.years=e||5},watch:{years(e){window.localStorage.setItem("time_period",e),this.table()}},methods:{friendly_time(e){return"string"===typeof e||e instanceof String?e:e<60?Math.floor(e)+" sec":e<3600?Math.floor(e/60)+" min":e<86400?Math.floor(e/60/60)+" h":e<604800?Math.floor(e/60/60/24)+" d":e<2592e3?Math.floor(e/60/60/24/7)+" wk":e<31536e3?Math.floor(e/60/60/24/30)+" mn":Math.floor(e/60/60/24/365)+" yr"},table(){this.table_data=[];for(let e of this.x){let t=[];for(let s of this.y){let a=e.seconds*s.per_year*this.years;e.seconds*s.per_year>31536e3&&(a="n/a"),t.push({label:this.friendly_time(a),task_seconds:a})}this.table_data.push(t)}}}},o=l,i=(s("5c0b"),s("2877")),c=Object(i["a"])(o,r,n,!1,null,null,null),u=c.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,s){"use strict";var a=s("9c0c"),r=s.n(a);r.a},"9c0c":function(e,t,s){}});
//# sourceMappingURL=app.5ec6457f.js.map