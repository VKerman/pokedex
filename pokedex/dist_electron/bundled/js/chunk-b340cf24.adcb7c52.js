(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b340cf24"],{3923:function(t,e,c){"use strict";c("f701")},f701:function(t,e,c){},f820:function(t,e,c){"use strict";c.r(e);var l=c("7a23");const b=t=>(Object(l["t"])("data-v-abc59d3c"),t=t(),Object(l["r"])(),t),n=b(()=>Object(l["f"])("link",{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css",integrity:"sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu",crossorigin:"anonymous"},null,-1)),s={class:"about"},a={class:"table table-bordered",style:{width:"50%"}},o=b(()=>Object(l["f"])("thead",null,[Object(l["f"])("tr",null,[Object(l["f"])("th",{scope:"col",style:{width:"15%"}},"Pokedex ID"),Object(l["f"])("th",{scope:"col"},"Name"),Object(l["f"])("th",{scope:"col"},"Sprite")])],-1)),O=["src"],j=b(()=>Object(l["f"])("td",null,"Types",-1)),u={colspan:"2"},d=b(()=>Object(l["f"])("h2",null,"Stats",-1)),f={class:"table table-bordered",style:{width:"50%"}},r=b(()=>Object(l["f"])("thead",null,[Object(l["f"])("tr",null,[Object(l["f"])("th",null,"Stat name"),Object(l["f"])("th",null,"Stat value")])],-1)),i=b(()=>Object(l["f"])("td",null,"height",-1)),p=b(()=>Object(l["f"])("td",null,"weight",-1)),h=b(()=>Object(l["f"])("h2",null,"Moves",-1)),m={class:"table table-bordered",style:{width:"50%"}},k=b(()=>Object(l["f"])("thead",null,[Object(l["f"])("tr",null,[Object(l["f"])("th",null,"Moves")])],-1));function y(t,e,c,b,y,w){const g=Object(l["x"])("row");return Object(l["q"])(),Object(l["e"])(l["a"],null,[n,Object(l["f"])("div",s,[Object(l["f"])("h1",null,"This is a page about "+Object(l["z"])(y.name),1),Object(l["f"])("table",a,[o,Object(l["f"])("tbody",null,[Object(l["f"])("tr",null,[Object(l["f"])("td",null,Object(l["z"])(y.pokemon.id),1),Object(l["f"])("td",null,Object(l["z"])(y.pokemon.name),1),Object(l["f"])("td",null,[Object(l["f"])("img",{src:this.sprites["front_default"],alt:""},null,8,O)])]),Object(l["f"])("tr",null,[j,Object(l["f"])("td",u,[(Object(l["q"])(!0),Object(l["e"])(l["a"],null,Object(l["w"])(y.pokemon.types,t=>(Object(l["q"])(),Object(l["d"])(g,{style:{display:"inline-block",float:"none"},class:"col-sm-10",key:t},{default:Object(l["C"])(()=>[Object(l["g"])(Object(l["z"])(t.type.name),1)]),_:2},1024))),128))])])])]),d,Object(l["f"])("table",f,[r,Object(l["f"])("tbody",null,[Object(l["f"])("tr",null,[i,Object(l["f"])("td",null,Object(l["z"])((y.pokemon.height/10).toString()+" m"),1)]),Object(l["f"])("tr",null,[p,Object(l["f"])("td",null,Object(l["z"])((y.pokemon.weight/10).toString()+" kg"),1)]),(Object(l["q"])(!0),Object(l["e"])(l["a"],null,Object(l["w"])(y.pokemon.stats,t=>(Object(l["q"])(),Object(l["e"])("tr",{key:t},[Object(l["f"])("td",null,Object(l["z"])(t.stat.name),1),Object(l["f"])("td",null,Object(l["z"])(t.base_stat),1)]))),128))])]),h,Object(l["f"])("table",m,[k,Object(l["f"])("tbody",null,[(Object(l["q"])(!0),Object(l["e"])(l["a"],null,Object(l["w"])(y.moves,t=>(Object(l["q"])(),Object(l["e"])("tr",{key:t},[Object(l["f"])("td",null,Object(l["z"])(t.move.name),1)]))),128))])])])],64)}var w={name:"about",data(){return{name:this.$route.params.pokeName,url:this.$route.params.pokeUrl,pokemon:[],sprites:[],types:[],moves:[]}},created:function(){const t=c("bc3a");t.get(this.$route.params.pokeLink).then(t=>{this.pokemon=t.data,this.sprites=t.data.sprites,this.types=t.data.types,this.moves=t.data.moves})},mounted:function(){},methods:{}},g=(c("3923"),c("6b0d")),v=c.n(g);const z=v()(w,[["render",y],["__scopeId","data-v-abc59d3c"]]);e["default"]=z}}]);
//# sourceMappingURL=chunk-b340cf24.adcb7c52.js.map