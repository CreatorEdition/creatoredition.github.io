(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a6c042c"],{"02f4":function(t,e,n){var a=n("4588"),r=n("be13");t.exports=function(t){return function(e,n){var i,c,o=String(r(e)),u=a(n),s=o.length;return u<0||u>=s?t?"":void 0:(i=o.charCodeAt(u),i<55296||i>56319||u+1===s||(c=o.charCodeAt(u+1))<56320||c>57343?t?o.charAt(u):i:t?o.slice(u,u+2):c-56320+(i-55296<<10)+65536)}}},"0390":function(t,e,n){"use strict";var a=n("02f4")(!0);t.exports=function(t,e,n){return e+(n?a(t,e).length:1)}},"0bfb":function(t,e,n){"use strict";var a=n("cb7c");t.exports=function(){var t=a(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"16e4":function(t,e,n){t.exports=n.p+"static/img/tong-active.46c8dd0a.png"},"214f":function(t,e,n){"use strict";n("b0c5");var a=n("2aba"),r=n("32e9"),i=n("79e5"),c=n("be13"),o=n("2b4c"),u=n("520a"),s=o("species"),l=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var p=o(t),v=!i((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),h=v?!i((function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[s]=function(){return n}),n[p](""),!e})):void 0;if(!v||!h||"replace"===t&&!l||"split"===t&&!f){var d=/./[p],b=n(c,p,""[t],(function(t,e,n,a,r){return e.exec===u?v&&!r?{done:!0,value:d.call(e,n,a)}:{done:!0,value:t.call(n,e,a)}:{done:!1}})),g=b[0],x=b[1];a(String.prototype,t,g),r(RegExp.prototype,p,2==e?function(t,e){return x.call(t,this,e)}:function(t){return x.call(t,this)})}}},"30e6":function(t,e,n){"use strict";n("af10")},4866:function(t,e,n){t.exports=n.p+"static/img/tong-inactive.f98be18f.png"},"520a":function(t,e,n){"use strict";var a=n("0bfb"),r=RegExp.prototype.exec,i=String.prototype.replace,c=r,o="lastIndex",u=function(){var t=/a/,e=/b*/g;return r.call(t,"a"),r.call(e,"a"),0!==t[o]||0!==e[o]}(),s=void 0!==/()??/.exec("")[1],l=u||s;l&&(c=function(t){var e,n,c,l,f=this;return s&&(n=new RegExp("^"+f.source+"$(?!\\s)",a.call(f))),u&&(e=f[o]),c=r.call(f,t),u&&c&&(f[o]=f.global?c.index+c[0].length:e),s&&c&&c.length>1&&i.call(c[0],n,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(c[l]=void 0)})),c}),t.exports=c},"5f1b":function(t,e,n){"use strict";var a=n("23c6"),r=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var i=n.call(t,e);if("object"!==typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==a(t))throw new TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},"6b48":function(t,e,n){"use strict";n.r(e);n("7f7f"),n("a481");var a,r=function(){var t=this,e=t._self._c;return e("van-tabbar",{staticStyle:{"z-index":"1999"},attrs:{border:!1,route:"","safe-area-inset-bottom":""},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[t._l(t.tabbar,(function(n,a){return e("van-tabbar-item",{key:a,attrs:{to:n.path,dot:n.dot,info:n.info,replace:n.replace},scopedSlots:t._u([{key:"icon",fn:function(a){return[n.customizedIcon?e("div",{staticStyle:{position:"relative",bottom:"-18px"}},[a.active?e("img",{style:n.size&&{width:n.size,height:n.size},attrs:{src:n.icon}}):t._e(),a.active?t._e():e("img",{style:n.size&&{width:n.size,height:n.size},attrs:{src:n.iconInactive}})]):e("van-icon",{attrs:{name:n.icon}})]}}],null,!0)},[n.hideText?t._e():e("span",{staticClass:"van-tabbar-item__text"},[t._v(t._s(n.name))])])}))],2)},i=[],c=n("bd86"),o=(n("ac6a"),n("f3e2"),n("ac28")),u=n("2ed4"),s={data:function(){return{active:0,tabbar:[{name:"筛查二维码",path:"/shai",pathName:"shai",icon:"qr",dot:!1,info:"",replace:!0},{name:"核酸报告",path:"/hesuan",pathName:"hesuan",icon:"orders-o",dot:!1,info:"",replace:!0},{name:"通",path:"/one",pathName:"one",icon:n("16e4"),iconInactive:n("4866"),customizedIcon:!0,hideText:!0,dot:!1,info:"",size:"18vw",replace:!1},{name:"常用筛查点",path:"/map",pathName:"map",icon:"location-o",dot:!1,info:"",replace:!0},{name:"我的",path:"/my",pathName:"my",icon:"contact",dot:!1,info:"",replace:!0}]}},watch:{},created:function(){},methods:{changeActive:function(t){var e=t.name;this.setActive(e)},setActive:function(t){var e=this;this.tabbar.forEach((function(n,a){if(n.pathName==t)return e.active=a,!1}))}},components:(a={},Object(c["a"])(a,o["a"].name,o["a"]),Object(c["a"])(a,u["a"].name,u["a"]),a)},l=s,f=(n("30e6"),n("2877")),p=Object(f["a"])(l,r,i,!1,null,"7be80b55",null);e["default"]=p.exports},a481:function(t,e,n){"use strict";var a=n("cb7c"),r=n("4bf8"),i=n("9def"),c=n("4588"),o=n("0390"),u=n("5f1b"),s=Math.max,l=Math.min,f=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,v=/\$([$&`']|\d\d?)/g,h=function(t){return void 0===t?t:String(t)};n("214f")("replace",2,(function(t,e,n,d){return[function(a,r){var i=t(this),c=void 0==a?void 0:a[e];return void 0!==c?c.call(a,i,r):n.call(String(i),a,r)},function(t,e){var r=d(n,t,this,e);if(r.done)return r.value;var f=a(t),p=String(this),v="function"===typeof e;v||(e=String(e));var g=f.global;if(g){var x=f.unicode;f.lastIndex=0}var m=[];while(1){var y=u(f,p);if(null===y)break;if(m.push(y),!g)break;var w=String(y[0]);""===w&&(f.lastIndex=o(p,i(f.lastIndex),x))}for(var S="",E=0,_=0;_<m.length;_++){y=m[_];for(var k=String(y[0]),z=s(l(c(y.index),p.length),0),A=[],I=1;I<y.length;I++)A.push(h(y[I]));var R=y.groups;if(v){var $=[k].concat(A,z,p);void 0!==R&&$.push(R);var N=String(e.apply(void 0,$))}else N=b(k,p,z,A,R,e);z>=E&&(S+=p.slice(E,z)+N,E=z+k.length)}return S+p.slice(E)}];function b(t,e,a,i,c,o){var u=a+t.length,s=i.length,l=v;return void 0!==c&&(c=r(c),l=p),n.call(o,l,(function(n,r){var o;switch(r.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,a);case"'":return e.slice(u);case"<":o=c[r.slice(1,-1)];break;default:var l=+r;if(0===l)return n;if(l>s){var p=f(l/10);return 0===p?n:p<=s?void 0===i[p-1]?r.charAt(1):i[p-1]+r.charAt(1):n}o=i[l-1]}return void 0===o?"":o}))}}))},af10:function(t,e,n){},b0c5:function(t,e,n){"use strict";var a=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:a!==/./.exec},{exec:a})}}]);