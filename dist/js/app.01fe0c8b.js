(function(t){function i(i){for(var e,o,c=i[0],a=i[1],h=i[2],p=0,l=[];p<c.length;p++)o=c[p],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&l.push(s[o][0]),s[o]=0;for(e in a)Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e]);u&&u(i);while(l.length)l.shift()();return r.push.apply(r,h||[]),n()}function n(){for(var t,i=0;i<r.length;i++){for(var n=r[i],e=!0,c=1;c<n.length;c++){var a=n[c];0!==s[a]&&(e=!1)}e&&(r.splice(i--,1),t=o(o.s=n[0]))}return t}var e={},s={app:0},r=[];function o(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=e,o.d=function(t,i,n){o.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,i){if(1&i&&(t=o(t)),8&i)return t;if(4&i&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var e in t)o.d(n,e,function(i){return t[i]}.bind(null,e));return n},o.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(i,"a",i),i},o.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=i,c=c.slice();for(var h=0;h<c.length;h++)i(c[h]);var u=a;r.push([0,"chunk-vendors"]),n()})({0:function(t,i,n){t.exports=n("56d7")},"034f":function(t,i,n){"use strict";var e=n("85ec"),s=n.n(e);s.a},"44ae":function(t,i,n){t.exports=n.p+"img/MonaLisa.f888eaab.png"},"56d7":function(t,i,n){"use strict";n.r(i);n("e623"),n("e379"),n("5dc8"),n("37e1");var e=n("a026"),s=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],o=(n("034f"),n("2877")),c={},a=Object(o["a"])(c,s,r,!1,null,null,null),h=a.exports,u=n("8c4f"),p=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"contain"},[e("div",{attrs:{id:"puzzleArea"}},[e("canvas",{ref:"can",staticClass:"can"})]),e("div",{staticClass:"btns"},[e("button",{on:{click:t.newGame}},[t._v("重新游戏")]),e("br"),t._v(" 请输入行列数："),e("input",{directives:[{name:"model",rawName:"v-model",value:t.row,expression:"row"}],attrs:{type:"text",placeholder:"请输入行数"},domProps:{value:t.row},on:{input:function(i){i.target.composing||(t.row=i.target.value)}}}),e("br"),e("button",{on:{click:t.newGame}},[t._v("确定")]),e("br"),e("button",{on:{click:t.isWinHandler}},[t._v("检验")]),e("br"),e("span",[t._v("步数："+t._s(t.step))]),e("br"),e("span",[t._v("预览：")]),e("br"),e("img",{ref:"img",staticClass:"img",attrs:{src:n("44ae"),alt:"error"}})])])},l=[],d=n("5530"),f={data:function(){return{row:3,column:3,num:100,pic:[{x:0,y:0,row:0,column:0,index:0}],sign:15,isWin:!1,step:0}},mounted:function(){var t=this;this.newGame(),this.column=this.row,document.onkeydown=function(i){var n=i.keyCode;38===n||87===n?t.moveHandler("up"):40===n||83===n?t.moveHandler("down"):37===n||65===n?t.moveHandler("left"):39!==n&&68!==n||t.moveHandler("right")}},methods:{isWinHandler:function(){for(var t=0;t<this.row*this.column;t++)if(this.pic[t].x!==this.pic[t].row||this.pic[t].y!==this.pic[t].column)return void(this.isWin=!1);confirm("游戏结束，您的分数为："+this.step+", 是否开始一句新游戏")&&this.newGame()},moveHandler:function(t){var i,n={};"up"===t&&this.pic[this.sign].x>0?i=(this.pic[this.sign].x-1)*this.row+this.pic[this.sign].y:"down"===t&&this.pic[this.sign].x<this.row-1?i=(this.pic[this.sign].x+1)*this.row+this.pic[this.sign].y:"left"===t&&this.pic[this.sign].y>0?i=this.pic[this.sign].x*this.row+this.pic[this.sign].y-1:"right"===t&&this.pic[this.sign].y<this.column-1&&(i=this.pic[this.sign].x*this.row+this.pic[this.sign].y+1),n.row=this.pic[i].row,n.column=this.pic[i].column,n.index=this.pic[i].index,this.pic[i]=Object(d["a"])(Object(d["a"])({},this.pic[i]),{},{row:this.pic[this.sign].row,column:this.pic[this.sign].column,index:this.pic[this.sign].index}),this.pic[this.sign]=Object(d["a"])(Object(d["a"])({},this.pic[this.sign]),n),this.step=this.step+1,this.drawHandler()},drawHandler:function(){var t=this,i=this.$refs.can,e=i.getContext("2d");i.width=640,i.height=640,e.clearRect(30,30,640,640);var s=i.width/this.column,r=i.width/this.row,o=new Image;o.src=n("44ae"),o.onload=function(){for(var i=0;i<t.row*t.column;i++){var n=t.pic[i].y*s,c=t.pic[i].x*r,a=t.pic[i].column*s,h=t.pic[i].row*r;e.drawImage(o,a,h,s,r,n,c,s,r),-1===t.pic[i].index&&(t.sign=i,e.clearRect(n,c,s,r))}}},randomHandler:function(){for(var t=0;t<this.row*this.column;t++){var i=parseInt(t/this.row),n=t-i*this.column,e=parseInt(t/this.row),s=t-e*this.column;this.pic[t]=Object(d["a"])(Object(d["a"])({},this.pic[t]),{},{x:e,y:s,row:i,column:n,index:t}),t===this.row*this.column-1&&(this.pic[t]=Object(d["a"])(Object(d["a"])({},this.pic[t]),{},{row:i,column:n,index:-1}))}for(var r=0;r<this.num;r++){var o=void 0,c=void 0,a={};o=parseInt((this.row*this.column-1)*Math.random()),c=parseInt((this.row*this.column-1)*Math.random()),a.row=this.pic[o].row,a.column=this.pic[o].column,this.pic[o]=Object(d["a"])(Object(d["a"])({},this.pic[o]),{},{row:this.pic[c].row,column:this.pic[c].column}),this.pic[c]=Object(d["a"])(Object(d["a"])({},this.pic[c]),a)}},newGame:function(){this.column<=1&&this.$message.error("行列数需要大于1"),this.column=this.row,this.isWin=!1,this.step=0,this.randomHandler(),this.drawHandler(),this.isWinHandler()}}},m=f,w=(n("b90e"),Object(o["a"])(m,p,l,!1,null,"ee4249aa",null)),v=w.exports;e["default"].use(u["a"]);var b=[{path:"/",name:"Index",component:v}],g=new u["a"]({mode:"history",base:"/",routes:b}),y=g,x=n("5c96"),O=n.n(x);n("0fae");e["default"].config.productionTip=!1,e["default"].use(O.a),e["default"].prototype.$message=x["Message"],new e["default"]({el:"#app",router:y,components:{App:h},template:"<App/>"})},"85ec":function(t,i,n){},"8f9b":function(t,i,n){},b90e:function(t,i,n){"use strict";var e=n("8f9b"),s=n.n(e);s.a}});
//# sourceMappingURL=app.01fe0c8b.js.map