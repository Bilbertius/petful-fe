(this["webpackJsonppetful-client"]=this["webpackJsonppetful-client"]||[]).push([[0],{22:function(e,t,n){e.exports=n.p+"static/media/searchpets.b93bb496.png"},23:function(e,t,n){e.exports=n(34)},24:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);n(24);var a=n(0),r=n.n(a),o=n(19),c=n.n(o),l=n(4),i=n(5),u=n(7),s=n(6),p=n(8),h=n(10),m=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement(h.b,{to:"/"},r.a.createElement("h1",null,"Petful - An Adoption Agency")))}}]),t}(a.Component),d=n(22),f=n.n(d),E=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Welcome to Petful where we pride ourselves as being the friendliest pet center in the world"),r.a.createElement("p",null,"We have lovable pets for adoption. Search through our database and see which furry friend will touch your heart."),r.a.createElement("span",null,r.a.createElement("img",{src:f.a,alt:"search for your new pet"})),r.a.createElement("form",{onSubmit:this.setUser,className:"submit-Name"},r.a.createElement("input",{type:"text",name:"person-name",placeholder:"Enter Your Name Here"}),r.a.createElement(h.b,{id:"start",type:"submit",to:"/pets"},"Start")))}}]),t}(a.Component),b="http://localhost:8080/api",g={getPets:function(){return fetch("".concat(b,"/pets"),{method:"GET",headers:{"content-type":"application/json",mode:"no-cors"}}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e.statusText)}))}))},dequeuePet:function(e){return fetch("".concat(b,"/pets/").concat(e),{method:"DELETE",headers:{"content-type":"application/json",mode:"no-cors"}}).then((function(e){return e.ok?Promise.resolve("Adoption successful"):Promise.reject("Cannot complete adoption at this time")})).then((function(e){return JSON.stringify(e)})).catch((function(e){return console.log(e)}))}},j=r.a.createContext({dog:{},cat:{},error:null,adoptDog:function(){},adoptCat:function(){},setError:function(){},clearError:function(){}}),O=j,v=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={dog:{},cat:{},error:null},n.adoptDog=function(){g.dequeuePet("dog").then(g.getPets)},n.adoptCat=function(){g.dequeuePet("cat").then(g.getPets)},n.setError=function(e){n.setState({error:e})},n.clearError=function(){n.setError({error:null})},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.getPets().then((function(t){return e.setState({dog:t.nextDog,cat:t.nextCat})}))}},{key:"render",value:function(){var e={dog:this.state.dog,cat:this.state.cat,error:this.state.error,adoptDog:this.adoptDog,adoptCat:this.adoptCat,setError:this.setError,clearError:this.clearError};return r.a.createElement(j.Provider,{value:e},this.props.children)}}]),t}(r.a.Component);function y(e){var t=e.info,n=t.name,a=t.sex,o=t.breed,c=t.age,l=t.imageURL,i=t.description;return r.a.createElement("div",{className:"pet"},r.a.createElement("h2",{id:"pet-name"},n),r.a.createElement("h5",{id:"more-info"},c," year old ",a," ",o),r.a.createElement("img",{id:"pet-img",src:l,alt:i}),r.a.createElement("button",{id:"adopt-button",onClick:function(){return e.handleClick}},"Adopt ",n))}var C=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.context,t=e.cat,n=e.dog,a=e.adoptCat,o=e.adoptDog;return r.a.createElement("section",{className:"Pets"},r.a.createElement("h2",null,"Our Available Pet Friends"),r.a.createElement("h3",null,"Please choose a dog or cat"),r.a.createElement("span",null,r.a.createElement(y,{info:t,handleClick:function(){return a}}),r.a.createElement(y,{info:n,handleClick:function(){return o}})))}}]),t}(a.Component);C.contextType=O;var P=C,k=n(11),x=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h.a,null,r.a.createElement(m,null),r.a.createElement(k.c,null,r.a.createElement(k.a,{exact:!0,path:"/"},r.a.createElement(E,null)),r.a.createElement(k.a,{exact:!0,path:"/pets"},r.a.createElement(P,null)))))}}]),t}(a.Component);c.a.render(r.a.createElement(h.a,null,r.a.createElement(v,null,r.a.createElement(x,null))),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.726bfc7e.chunk.js.map