(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/marvel-logo.0bdb5245.png"},22:function(e,t,a){e.exports=a(74)},28:function(e,t,a){},29:function(e,t,a){},32:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),s=a.n(c),i=(a(28),a(8)),l=a(9),o=a(13),h=a(12),u=a(14);a(29);var m=function(e){return r.a.createElement("section",{className:"container"},e.children)},d=a(5),f=a.n(d),p=a(11),g=(a(32),new(function(){function e(){Object(i.a)(this,e)}return Object(l.a)(e,[{key:"getCharacters",value:function(){var e=Object(p.a)(f.a.mark(function e(t,a,n){var r,c;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/characters?nameStartsWith="+t+"&limit="+a+"&offset="+n);case 2:return r=e.sent,e.next=5,r.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}},e)}));return function(t,a,n){return e.apply(this,arguments)}}()}]),e}())),v=a(3);a(73);var E=function(e){return r.a.createElement(v.Row,null,r.a.createElement(v.Input,{name:"search",s:9,label:"SEARCH",onChange:e.handleSearchChange,onKeyPress:e.handleKeyPress}),r.a.createElement(v.Button,{className:"Button",s:3,onClick:e.handleSearch},"Search"))};var b=function(e){return r.a.createElement(v.Col,{m:6},r.a.createElement(v.Card,{header:r.a.createElement(v.CardTitle,{className:"img-responsive center-align",reveal:!0,image:e.img}),title:e.name,className:"center-align",reveal:r.a.createElement("p",null,e.description)}))},w=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(h.a)(t).call(this))).handlePagination=function(t){var a=t*e.state.limit;1===t&&(a=0),e.setState({characters:[],loader:!0,currentPage:t}),e.callToApi(a)},e.handleSearch=function(t){e.setState({characters:[],loader:!0,currentPage:1}),e.callToApi(0)},e.handleSearchChange=function(t){e.setState({search:t.target.value})},e.handleKeyPress=function(t){"Enter"===t.key&&(e.setState({characters:[],loader:!0,currentPage:1}),e.callToApi(0))},e.state={characters:[],search:"",offset:0,limit:12,loader:!0,currentPage:1,totalPages:0},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(p.a)(f.a.mark(function e(){var t;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.getCharacters(this.state.search,this.state.limit,this.state.offset);case 2:this.state.characters=e.sent,t=Math.ceil(this.state.characters.total/this.state.characters.limit),this.setState({characters:this.state.characters.result,loader:!1,totalPages:t});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"callToApi",value:function(){var e=Object(p.a)(f.a.mark(function e(t){var a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.getCharacters(this.state.search,this.state.limit,t);case 2:this.state.characters=e.sent,a=Math.ceil(this.state.characters.total/this.state.characters.limit),this.setState({characters:this.state.characters.result,loader:!1,totalPages:a});case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E,{handleSearch:this.handleSearch,handleSearchChange:this.handleSearchChange,handleKeyPress:this.handleKeyPress}),r.a.createElement(v.Row,null,this.state.loader?r.a.createElement(v.ProgressBar,{className:"red"}):null,this.state.characters.map(function(e){return r.a.createElement(b,Object.assign({key:e.id},e))})),r.a.createElement("div",{className:"center-align"},this.state.loader?null:r.a.createElement(v.Pagination,{activePage:this.state.currentPage,maxButtons:10,items:this.state.totalPages,onSelect:this.handlePagination})))}}]),t}(n.Component),y=a(18),P=a.n(y);var S=function(e){return r.a.createElement("section",{className:"Header center-align"},r.a.createElement("img",{src:P.a,alt:P.a,style:{height:235}}))},j=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement(m,null,r.a.createElement(w,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,1,2]]]);
//# sourceMappingURL=main.97952949.chunk.js.map