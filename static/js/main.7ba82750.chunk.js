(this.webpackJsonpclickygameii=this.webpackJsonpclickygameii||[]).push([[0],[,,,,,,,,,function(e,a,t){e.exports=t(19)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(2),c=t.n(i),o=(t(14),t(6)),s=t(3),l=t(4),m=t(7),u=t(5),g=t(8);t(15);var d=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"navbar"},r.a.createElement("div",{className:"label"},r.a.createElement("img",{src:"/images/logo.png",id:"logosize"})),r.a.createElement("div",{className:"label"},r.a.createElement("h2",null,"JD's \"Batman '66\" click game!")),r.a.createElement("div",{className:"label"},r.a.createElement("h2",null,"Your score:  ",e.score)),r.a.createElement("div",{className:"label"},r.a.createElement("h2",null,"Top score:  ",e.topScore," ")),r.a.createElement("div",{className:"babel"},r.a.createElement("h2",null,r.a.createElement("center",null,"Click all 12 characters without repeating yourself!")))))},p=(t(16),[{id:1,img:"/images/batusi.jpg",name:"Adam West as Batman"},{id:2,img:"/images/robin.jpg",name:"Burt Ward as Robin"},{id:3,img:"/images/catwomankitt.jpg",name:"Eartha Kitt as Catwoman"},{id:4,img:"/images/joker.jpg",name:"Cesar Romero as Joker"},{id:5,img:"/images/penguin.jpg",name:"Burgess Meredith as Penguin"},{id:6,img:"/images/riddler.jpg",name:"Frank Gorshin as Riddler"},{id:7,img:"/images/batgirl.jpg",name:"Batgirl"},{id:8,img:"/images/batmobile.jpg",name:"Batmobile"},{id:9,img:"/images/kapow.jpg",name:"Kapow!"},{id:10,img:"/images/egghead.jpg",name:"Egghead"},{id:11,img:"/images/kingtut.jpg",name:"King Tut"},{id:12,img:"/images/catwomannewmar.jpg",name:"Julie Newmar as Catwoman"}]);t(17);var h=function(e){var a={background:"center / contain no-repeat url(".concat(e.image,")")};return r.a.createElement("div",{style:a,onClick:function(){return e.shufflePictures(e.id)},className:"col-3 card"})};var f=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"row"},p.map((function(a,t){return r.a.createElement(h,{className:"col-md-3",shufflePictures:e.shufflePictures,id:a.id,name:a.name,image:a.img})}))))},v=(t(18),function(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),n=[e[t],e[a]];e[a]=n[0],e[t]=n[1]}return e}),E=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={characters:p,previousIDs:[0],score:0,topScore:0},t.restart=function(){alert("game over"),t.setState({characters:p,previousIDs:[0],score:0,topScore:t.state.topScore}),console.log("this.state endgame",t.state)},t.incrementScore=function(){var e=t.state.score+1,a=e>t.state.topScore?e:t.state.topScore;return e>8&&(alert("congrats you won."),t.restart()),{newScore:e,newTopScore:a}},t.shufflePictures=function(e){var a=v(t.state.characters);if(t.state.previousIDs.includes(e))return t.restart();var n=t.incrementScore();t.setState({characters:a,previousIDs:[].concat(Object(o.a)(t.state.previousIDs),[e]),score:n.newScore,topScore:n.newTopScore})},t}return Object(g.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,{score:this.state.score,topScore:this.state.topScore}),r.a.createElement("div",{className:"container"},r.a.createElement(f,{shufflePictures:this.shufflePictures})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.7ba82750.chunk.js.map