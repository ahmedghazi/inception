(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{142:function(e,t,n){"use strict";n.r(t);n(77),n(144);var a=n(7),r=n.n(a),i=n(0),o=n.n(i),c=n(146),s=n(33),m=n.n(s),l=(n(154),function(e){function t(t){var n;return(n=e.call(this,t)||this).state={},n.vid=null,n.stream=null,n.init=n.init.bind(m()(n)),n.camSuccess=n.camSuccess.bind(m()(n)),n.camFail=n.camFail.bind(m()(n)),n}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.init()},n.init=function(){this.vid=this.refs.video,navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia,window.URL=window.URL||window.webkitURL||window.msURL||window.mozURL,navigator.mediaDevices?navigator.mediaDevices.getUserMedia({video:!0}).then(this.camSuccess).catch(this.camFail):navigator.getUserMedia?navigator.getUserMedia({video:!0},this.camSuccess,this.camFail):alert("This demo depends on getUserMedia, which your browser does not seem to support. :(")},n.camFail=function(e){console.log(e)},n.camSuccess=function(e){this.stream=e,"srcObject"in this.vid?this.vid.srcObject=e:this.vid.src=window.URL&&window.URL.createObjectURL(e),this.vid.onloadedmetadata=function(){}},n.render=function(){return o.a.createElement("div",{className:"video-wrapper"},o.a.createElement("video",{autoPlay:!0,ref:"video",src:""}))},t}(i.Component)),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.index,t={zIndex:e,transform:"translate(-50%, -50%) scale("+(1-.07*e)+")"};return o.a.createElement("div",{className:"post",style:t},o.a.createElement("div",{className:"header"}),o.a.createElement("div",{className:"me"},o.a.createElement(l,{videoID:"web-cam-"+e})),o.a.createElement("div",{className:"footer"}))},t}(i.Component);n.d(t,"query",function(){return u}),n(155);n(156);var p=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={length:10},n}r()(t,e);var n=t.prototype;return n._renderItems=function(){var e=this.state.length;return Array.from(new Array(e),function(e,t){return t}).map(function(e){return o.a.createElement(d,{key:e,index:e,style:{animationDelay:e+"00ms"}})})},n.render=function(){var e=this.props.data.site.siteMetadata;return console.log(e),console.log(e.banner),o.a.createElement("div",{id:"wrapper"},o.a.createElement(c.Helmet,null,o.a.createElement("title",null,e.title),o.a.createElement("meta",{name:"description",content:e.description}),o.a.createElement("meta",{property:"og:type",content:"website"}),o.a.createElement("meta",{property:"og:url",content:e.url}),o.a.createElement("meta",{property:"og:title",content:e.title}),o.a.createElement("meta",{property:"og:description",content:e.description}),o.a.createElement("meta",{property:"og:image",content:"https://i.imgur.com/g4fM8KBl.jpg"}),o.a.createElement("meta",{property:"twitter:card",content:"summary_large_image"}),o.a.createElement("meta",{property:"twitter:url",content:e.url}),o.a.createElement("meta",{property:"twitter:title",content:e.title}),o.a.createElement("meta",{property:"twitter:description",content:e.description}),o.a.createElement("meta",{property:"twitter:image",content:"https://i.imgur.com/g4fM8KBl.jpg"})),o.a.createElement("main",null,this._renderItems()))},t}(i.Component),u=(t.default=p,"1733521917")},154:function(e,t,n){e.exports=n.p+"static/test-65e1db522bf9bb8ddf58209ebf4741f5.mp4"},156:function(e,t,n){e.exports=n.p+"static/banner-763792feb7e0d3918af53bed1aaa4c37.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-34c1b475ecdfdb94c81f.js.map