(this.webpackJsonplfrusso=this.webpackJsonplfrusso||[]).push([[0],{128:function(e,a,t){e.exports=t.p+"static/media/reactlogo.580ffd26.png"},133:function(e,a,t){e.exports=t.p+"static/media/site2.60b495f2.png"},134:function(e,a,t){e.exports=t.p+"static/media/gepac.6c5be214.png"},135:function(e,a,t){e.exports=t.p+"static/media/grupy.067050f6.png"},136:function(e,a,t){e.exports=t.p+"static/media/life.c213f725.gif"},137:function(e,a,t){e.exports=t.p+"static/media/fractal.08dc508e.png"},138:function(e,a,t){e.exports=t.p+"static/media/quadtree.59e00ca4.png"},139:function(e,a,t){e.exports=t.p+"static/media/poo.ee3fea64.png"},140:function(e,a,t){e.exports=t(414)},144:function(e,a,t){},145:function(e,a,t){},408:function(e,a,t){},409:function(e,a,t){},410:function(e,a,t){},411:function(e,a,t){e.exports=t.p+"static/media/jojo.94d3f6b8.webp"},412:function(e,a,t){},413:function(e,a,t){},414:function(e,a,t){"use strict";t.r(a);var o=t(1),n=t.n(o),s=t(18),r=t.n(s),c=(t(144),t(145),t(23)),l=t(26),i=t(36),m=t(37),u=t(56),d=t(39),p=t(40),E=(t(86),t(22)),f=t(38),b=function(e){var a=e.children,t=e.icon,o={home:E.c,about:E.d,projects:f.c,notes:E.e}[t];return n.a.createElement("span",{className:"navitem"}," ",n.a.createElement(o,{className:"nav-icon",color:"#efefef",size:18})," ",n.a.createElement("span",{className:"nav-name"},a)," ")},g=function(e){Object(p.a)(t,e);var a=Object(d.a)(t);function t(e){var o;return Object(i.a)(this,t),(o=a.call(this,e)).toggleNavbar=o.toggleNavbar.bind(Object(u.a)(o)),o.state={collapsed:!0},o}return Object(m.a)(t,[{key:"toggleNavbar",value:function(){this.setState({collapsed:!this.state.collapsed}),console.log(this.state.collapsed)}},{key:"render",value:function(){var e=this.state.collapsed?"collapsed":"";return n.a.createElement("div",{class:"navbar"},n.a.createElement("div",{className:"sidenav "+e,onClick:this.toggleNavbar},n.a.createElement("div",{class:"navitems"},n.a.createElement(c.b,{to:"/",className:"text-link",onClick:this.toggleNavbar},n.a.createElement(b,{icon:"home"}," Home ")),n.a.createElement(c.b,{to:"/about",className:"text-link",onClick:this.toggleNavbar},n.a.createElement(b,{icon:"about"}," Sobre ")),n.a.createElement(c.b,{to:"/projects",className:"text-link",onClick:this.toggleNavbar},n.a.createElement(b,{icon:"projects"}," Projetos ")),n.a.createElement(c.b,{to:"/notes",className:"text-link",onClick:this.toggleNavbar},n.a.createElement(b,{icon:"notes"}," Notas "))),n.a.createElement("div",{className:"sidenav-foot"},n.a.createElement("span",null,n.a.createElement("a",{className:"text-link",target:"_blank",href:"https://www.youtube.com/watch?v=2MtOpB5LlUA&t=223"},"@"),"russo"))),n.a.createElement("button",{className:"btn collapse-btn "+e,onClick:this.toggleNavbar,type:"button"},n.a.createElement(f.a,{color:"#efefef",size:30})))}}]),t}(n.a.Component),v=function(e){var a=e.children;return n.a.createElement("div",{className:"post-header"},n.a.createElement("h1",null,a),n.a.createElement("hr",null))},h=t(128),N=t.n(h),j=function(){return n.a.createElement("div",null,n.a.createElement(v,null,"Site atualizado!"),n.a.createElement("div",{className:"post-content row"},n.a.createElement("img",{src:N.a}),n.a.createElement("div",{className:"col"},n.a.createElement("p",null,"Site atualizado, agora usando React. Todo o material que estava na vers\xe3o antiga vai ser reposto aos poucos (por conta da mudan\xe7a na estrutura). No caso de d\xfavidas ou para reportar problemas me mande um e-mail em ",n.a.createElement("b",null,"lf.santos@usp.br"),"."))))},C=(t(150),function(e){Object(p.a)(t,e);var a=Object(d.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){var e=[j].map((function(e){return n.a.createElement("div",{className:"post-container"},e())}));return n.a.createElement("div",null,e)}}]),t}(n.a.Component)),k=(t(408),t(409),function(){return n.a.useEffect((function(){window.scrollTo(0,0)}),[]),n.a.createElement("div",null,n.a.createElement(C,null))}),x=(t(410),t(411),t(57)),S=t.n(x),w=t(133),y=t.n(w),O=function(){n.a.useEffect((function(){window.scrollTo(0,0)}),[]);var e=["#022B3A","#EFEFEF","#C2C1C2","#DE4842","#F4B685"].map((function(e){return n.a.createElement("div",{className:"color-div",style:{backgroundColor:e}},n.a.createElement("span",{className:"color-name"},e))}));return n.a.createElement("div",{className:"row sections-wrapper"},n.a.createElement("div",{className:"section col-lg-12 col-sm-12"},n.a.createElement("span",{className:"section-title"},n.a.createElement(E.f,{className:"section-icon",color:"#DE4842",size:30})," Sobre mim"),n.a.createElement("div",{className:"section-body"},n.a.createElement("p",null,"Me chamo Luiz Fernando (aka Russo) e atualmente sou graduando do curso de ",n.a.createElement("b",null,"Bacharelado em Ci\xeancias de Computa\xe7\xe3o")," no ",n.a.createElement("b",null,"ICMC - USP"),", tendo anteriormente cursado ",n.a.createElement("b",null,"Bacharelado em F\xedsica")," no ",n.a.createElement("b",null,"IFSC - USP")," de 2018 \xe0 2020 e mudado de carreira atrav\xe9s do processo de transfer\xeancia interna da USP, depois de descobrir que apesar gostar muito das duas \xe1reas, minha maior voca\xe7\xe3o est\xe1 na computa\xe7\xe3o."),n.a.createElement("p",null,"Meus interesses variam d\xeas de teoria de otimiza\xe7\xe3o, estat\xedstica e simula\xe7\xe3o num\xe9rica at\xe9 design e aprecia\xe7\xe3o de animes (embora n\xe3o me considere especialmente talentoso em nenhum desses com exce\xe7\xe3o do \xfaltimo)."))),n.a.createElement("div",{className:"section col-lg-12 col-sm-12"},n.a.createElement("span",{className:"section-title"},n.a.createElement(E.a,{className:"section-icon",color:"#DE4842",size:30})," Sobre este site"),n.a.createElement("div",{className:"section-body row"},n.a.createElement("p",null,"Como dito na aba ",n.a.createElement("b",null,n.a.createElement(c.b,{to:"/projects",className:"text-link"},"Projetos")),", fiz esse site em 2019 para aprender um pouco sobre HTML, CSS e Javascript. Calhou que pouco depois de ter come\xe7ado com ele fui agraciado com uma vaga de monitor bolsista da disciplina ",n.a.createElement("b",null,"SMA0355 - C\xe1lculo III"),", o que me levou a come\xe7ar a usar o site tamb\xe9m para divulgar as listas e resolu\xe7\xf5es de exerc\xedcios."),n.a.createElement("p",null,"Com isso ele foi se tornando aos poucos alguma coisa entre uma p\xe1gina informativa, um portif\xf3lio e um laborat\xf3rio onde tento implementar designs e tecnologias diferentes."),n.a.createElement("div",{className:"col-sm-6 col-lg-6 col-md-6 section-img"},n.a.createElement("img",{className:"figure",src:S.a}),n.a.createElement("p",null,"Acima a primeira vers\xe3o do site. Honestamente eu n\xe3o tinha a menor ideia do que estava fazendo. Demorei algumas horas para fazer essas colunas, alinh\xe1-las em rela\xe7\xe2o \xe0 p\xe1gina e fazer o conte\xfado ficar centralizado dentro delas. Quando fui ver no celular tudo tinha quebrado.")),n.a.createElement("div",{className:"col-sm-6 col-lg-6 col-md-6 section-img"},n.a.createElement("img",{className:"figure",src:y.a}),n.a.createElement("p",null,"Segunda vers\xe3o do site, finalmente usando boostrap, responsivo, e com minha primeira barra de navega\xe7\xe3o colaps\xe1vel.")),n.a.createElement("p",null,"Atualmente o site est\xe1 hospeadado no ",n.a.createElement("b",null,"GitHub Pages")," e usando ",n.a.createElement("b",null,"ReactJS"),". Abaixo a paleta de cores que estou usando nele:"),n.a.createElement("div",{className:"palette"},e))))},F=(t(412),t(134)),z=t.n(F),P=t(135),L=t.n(P),A=t(136),I=t.n(A),M=t(137),q=t.n(M),R=t(138),B=t.n(R),T=t(139),G=t.n(T),J=function(){n.a.useEffect((function(){window.scrollTo(0,0)}),[]);var e=[{title:"Gepac",img:z.a,description:"GEPAC (Grupo de Estudos de Programa\xe7\xe3o Aplicada \xe0 Ci\xeancia) \xe9 um grupo de extens\xe3o criado por estudantes do Instituto de F\xedsica de S\xe3o Carlos - USP. Ele busca atrav\xe9s de oficinas, projetos e semin\xe1rios, aproximar os estudantes da computa\xe7\xe3o cient\xedfica.",link:"https://gepac.github.io/"},{title:"Este site",img:S.a,description:"Criei essa p\xe1gina no come\xe7o de 2019 para treinar um pouco de HTML, CSS e Javascript. Atualmente serve como alguma coisa entre um portif\xf3lio e um portal para facilitar o acesso (tanto meu quanto de terceiros) aos meus projetos e materiais de cursos, eventos e etc. Na imagem, a primeira vers\xe3o dela.",link:"https://github.com/LFRusso/russo"},{title:"Life",img:I.a,description:"Jogo 'Game of Life' bem simples feito em C++ usando SFML. Fiz para aprender os b\xe1sicos da biblioteca.",link:"https://github.com/LFRusso/Life"},{title:"grupy-sanca",img:L.a,description:"Participante do Grupo de usu\xe1rios de Python de S\xe3o Carlos (gosto bastante de Python c:). Tamb\xe9m contribu\xed para o material do curso de Introdu\xe7\xe3o ao Python do Grupo.",link:"http://curso.grupysanca.com.br/pt/latest/sobre_grupy.html"},{title:"Quadtree",img:B.a,description:"Uma quadtree para uso geral em outros projetos.",link:"https://github.com/LFRusso/Quadtree"},{title:"Introdu\xe7\xe3o \xe0 F\xedsica Computacinal",img:q.a,description:"Meu reposit\xf3rio do github contendo os projetos desenvolvidos no curso 7600017 - Introdu\xe7\xe3o \xe0 F\xedsica Computacional.",link:"https://github.com/LFRusso/Intro_Fiscomp"},{title:"Programa\xe7\xe3o Orientada a Objetos",img:G.a,description:"Meu reposit\xf3rio do github contendo os projetos desenvolvidos no curso 7600055 - Programa\xe7\xe3o Orientada a Objetos.",link:"https://github.com/LFRusso/POO"}].map((function(e){return n.a.createElement("div",{class:"col project-card"},n.a.createElement("img",{src:e.img,className:"project-img"}),n.a.createElement("span",{className:"project-title"},e.title),n.a.createElement("hr",null),n.a.createElement("div",{className:"project-content"},e.description),n.a.createElement("a",{target:"_blank",href:e.link,className:"project-btn btn text-link"},"Ver"))}));return n.a.createElement("div",{class:"container-fluid row justify-content-sm-start project-body"},e)},U=function(){return n.a.useEffect((function(){window.scrollTo(0,0)}),[]),n.a.createElement("div",null,n.a.createElement("h2",null,"Anota\xe7\xf5es a serem adicionadas"))},H=function(){return n.a.createElement(c.a,null,n.a.createElement(g,null),n.a.createElement(l.c,null,n.a.createElement(l.a,{exact:!0,path:"/",component:k}),n.a.createElement(l.a,{path:"/about",component:O}),n.a.createElement(l.a,{path:"/projects",component:J}),n.a.createElement(l.a,{path:"/notes",component:U})))};var D=function(){return n.a.createElement(H,null)},_=(t(413),function(e){Object(p.a)(t,e);var a=Object(d.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"footer"},n.a.createElement("div",{className:"footer-icon"},n.a.createElement(E.b,{size:30,color:"#022B3A"}),n.a.createElement("span",null,"| lf.santos@usp.br")),n.a.createElement("div",{className:"footer-icon"},n.a.createElement(f.b,{size:30,color:"#022B3A"}),n.a.createElement("span",null,"| LFRusso")))}}]),t}(n.a.Component));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"wrapper",id:"main"},n.a.createElement(D,null)),n.a.createElement(_,null))),document.getElementById("root"))},57:function(e,a,t){e.exports=t.p+"static/media/site.8922a03d.png"},86:function(e,a,t){}},[[140,1,2]]]);
//# sourceMappingURL=main.423374b0.chunk.js.map