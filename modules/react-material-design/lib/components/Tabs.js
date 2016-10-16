"use strict";(function(){var t,e,r,o,n,a,s,l,i=function(t,e){return function(){return t.apply(e,arguments)}},c=function(t,e){function r(){this.constructor=t}for(var o in e)p.call(e,o)&&(t[o]=e[o]);return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t},p={}.hasOwnProperty;r=require("react"),s=require("reactcss"),l=require("lodash.isstring"),o=require("./Tab"),e=require("./Link"),t=require("./Ink"),a={primaryColor:"#2196F3",accentColor:"#E91E63",theme:"light"},n=function(n){function p(t){this.handleClick=i(this.handleClick,this);var e;p.__super__.constructor.call(this,t),this.state={selectedTab:this.props.selectedTab<(null!=(e=this.props.tabs)?e.length:void 0)?this.props.selectedTab:0}}return c(p,n),p.prototype.css=s.inline,p.propTypes={tabs:r.PropTypes.array,align:r.PropTypes.oneOf(["none","justify","left","center"]),children:r.PropTypes.array,background:r.PropTypes.string},p.propExamples={tabs:{type:"array",like:[[{label:"cool",callback:function(){return console.log("cool")}},{label:"tabs",callback:function(){return console.log("tabs")}}],["cool","tabs"],["foo","bar","longer"],["foo","bar","way longer","even","still"]]},align:{type:"oneOf",like:["none","justify","left","center"]},background:{type:"string",like:["transparent","#4A90E2"]},color:{type:"string",like:["#fff","#FFEB3B"]}},p.defaultProps={selectedTab:0,background:"transparent",color:"#fff"},p.prototype.classes=function(){var t;return{"default":{tabs:{position:"relative",background:this.props.background},tabWrap:{display:"flex"},tab:{justifyContent:"flex-start",minWidth:"68px",maxWidth:"240px"},Tab:{color:this.props.color},indicator:{height:"2px",position:"absolute",bottom:"0",left:"0",background:this.props.color,transition:"all 200ms linear, transform 100ms 300ms linear",transform:"translateY(2px)"}},scrollable:{tabs:{overflowX:"scroll"},tabWrap:{paddingLeft:"60px",justifyContent:"flex-start",width:"400%"},tab:{width:"auto"}},"align-justify":{tabWrap:{justifyContent:"space-between"},tab:{width:100/(null!=(t=this.props.tabs)?t.length:void 0)+"%"}},"align-left":{tabWrap:{paddingLeft:"60px",justifyContent:"flex-start"},tab:{width:"auto"}},"align-center":{tabWrap:{justifyContent:"center"},tab:{width:"auto"}}}},p.prototype.styles=function(){var t;return this.css({scrollable:this.props.width/(null!=(t=this.props.tabs)?t.length:void 0)<72})},p.prototype.handleClick=function(t){return this.setState({selectedTab:t})},p.prototype.slide=function(){var t,e,r,o,n,a;return e=this.refs.tabs,t=e.scrollLeft,r=e.offsetWidth+e.scrollLeft,n=this.refs["tab-"+this.state.selectedTab],o=n.getBoundingClientRect().left-e.getBoundingClientRect().left+e.scrollLeft,a=o+n.offsetWidth,a>r&&(e.scrollLeft+=a-r),o<t&&(e.scrollLeft-=t-o),this.refs.indicator.style.left=o,this.refs.indicator.style.width=n.offsetWidth,this.refs.indicator.style.webkitTransform="translateY(0)",this.refs.indicator.style.transform="translateY(0)"},p.prototype.componentDidMount=function(){return this.slide()},p.prototype.componentWillUpdate=function(t,e){var r,o;if(e.selectedTab>=(null!=(r=t.tabs)?r.length:void 0))return e.selectedTab=(null!=(o=t.tabs)?o.length:void 0)-1},p.prototype.componentDidUpdate=function(){return this.slide()},p.prototype.render=function(){var n,s,i,c,p,f;return r.createElement("div",{is:"tabs",ref:"tabs"},r.createElement("div",{is:"tabWrap",className:"flexbox-fix"},function(){var u,b,d,h;for(d=this.props.tabs,h=[],i=u=0,b=d.length;u<b;i=++u)f=d[i],l(f)?(c=f,n=null):(c=f.label,n=f.onClick,s=f.callbackValue,p=f.newTab),h.push(r.createElement("div",{is:"tab",ref:"tab-"+i,key:i},r.createElement(t,{color:a.theme},r.createElement(e,{onClick:n,callbackValue:s,newTab:p},r.createElement(o,{is:"Tab",tab:i,selected:this.state.selectedTab===i,selectable:f.selectable,onClick:this.handleClick},c)))));return h}.call(this)),r.createElement("div",{is:"indicator",ref:"indicator"}))},p}(r.Component),module.exports=n}).call(void 0);