"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var _lodash=require("lodash.isobject"),_lodash2=_interopRequireDefault(_lodash),_checkClassStructure=require("./check-class-structure"),_checkClassStructure2=_interopRequireDefault(_checkClassStructure),_combine=require("./combine"),_combine2=_interopRequireDefault(_combine);module.exports=function(e){var s=this,t=[];if(!this.classes)throw console.warn("Define this.classes on `"+this.constructor.name+"`");(0,_checkClassStructure2["default"])(this.classes());var r=function(e,r){s.classes()[e]?t.push(s.classes()[e]):e&&r&&r.warn===!0&&console.warn("The `"+e+"` css class does not exist on `"+s.constructor.name+"`")};r("default");for(var o in this.props){var i=this.props[o];(0,_lodash2["default"])(i)||(i===!0?(r(o),r(o+"-true")):r(i?o+"-"+i:o+"-false"))}if(this.props&&this.props.activeBounds)for(var a=0;a<this.props.activeBounds.length;a++){var c=this.props.activeBounds[a];r(c)}for(var n in e){var u=e[n];u===!0&&r(n,{warn:!0})}var l={};return this.context&&this.context.mixins&&(l=this.context.mixins),(0,_combine2["default"])(t,l)};