"use strict";(self.webpackChunkliste_naissance=self.webpackChunkliste_naissance||[]).push([[182],{5182:(P,p,a)=>{a.r(p),a.d(p,{HomeModule:()=>v});var r=a(6019),u=a(4803),t=a(3311),l=a(1915);let d=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-header"]],decls:2,vars:0,consts:[["role","banner",1,"toolbar"],["src","/assets/ban.jpeg"]],template:function(n,c){1&n&&(t.TgZ(0,"div",0),t._UZ(1,"img",1),t.qZA())},styles:[".toolbar[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:#fff;color:#fff;font-weight:600}.toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:0 auto;min-width:100%;height:auto}"]}),e})(),m=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["introduction-section"]],decls:6,vars:0,template:function(n,c){1&n&&(t.TgZ(0,"p"),t._uU(1,"Notre petit b\xe9b\xe9 pointera prochainement le bout de son nez."),t.qZA(),t.TgZ(2,"p"),t._uU(3,"Pour organiser au mieux son arriv\xe9e, nous avons ouvert cette liste de naissance."),t.qZA(),t.TgZ(4,"p"),t._uU(5,"Dans une volont\xe9 d'achats principalement en seconde main, nous vous proposons d'y participer librement en faisant un versement du montant de votre choix."),t.qZA())},styles:[""]}),e})();function g(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"div",1),t.NdJ("click",function(i){return t.CHM(n),t.oxw().emitAccountToParent(i)}),t.TgZ(1,"p",2),t._uU(2),t.qZA(),t.TgZ(3,"p"),t._uU(4,"titulaire du compte : "),t.qZA(),t.TgZ(5,"p",3),t._uU(6),t.qZA(),t.TgZ(7,"p",4),t._uU(8),t.qZA(),t.qZA()}if(2&e){const n=t.oxw();t.xp6(2),t.Oqu(n.account.title),t.xp6(4),t.Oqu(n.account.name),t.xp6(2),t.hij("IBAN : ",n.account.iban,"")}}let f=(()=>{class e{constructor(){this.cardClicked=new t.vpe}ngOnInit(){}emitAccountToParent(n){this.cardClicked.emit(this.account)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["bank-card"]],inputs:{account:"account"},outputs:{cardClicked:"cardClicked"},decls:1,vars:1,consts:[["class","bank-card",3,"click",4,"ngIf"],[1,"bank-card",3,"click"],[1,"bank-card-title"],[1,"bank-card-nom"],[1,"bank-card-iban"]],template:function(n,c){1&n&&t.YNc(0,g,9,3,"div",0),2&n&&t.Q6J("ngIf",c.account)},directives:[r.O5],styles:[".bank-card[_ngcontent-%COMP%]{background-color:#c4dfcc66;width:350px;margin:16px;padding:4px;font-size:14px;height:145px}.bank-card-title[_ngcontent-%COMP%]{font-weight:bold}.bank-card[_ngcontent-%COMP%]:hover{box-shadow:0 2px 8px 1px #00000040;cursor:pointer}"]}),e})(),C=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["product"]],inputs:{product:"product"},decls:4,vars:2,consts:[[1,"product"],[1,"product-img",3,"src"],[1,"product-name"]],template:function(n,c){1&n&&(t.TgZ(0,"div",0),t._UZ(1,"img",1),t.TgZ(2,"p",2),t._uU(3),t.qZA(),t.qZA()),2&n&&(t.xp6(1),t.s9C("src",c.product.image,t.LSH),t.xp6(2),t.Oqu(c.product.name))},styles:[".product[_ngcontent-%COMP%]{border-style:dashed;border-color:#c4dfcccc;display:flex;flex-direction:column;width:150px;height:220px;margin:6px;justify-content:space-between}.product-img[_ngcontent-%COMP%]{min-width:100%}.product-name[_ngcontent-%COMP%]{margin:2px}"]}),e})();function _(e,o){1&e&&t._UZ(0,"product",4),2&e&&t.Q6J("product",o.$implicit)}let x=(()=>{class e{constructor(){this.products=[{image:"/assets/poussette.jpeg",name:"poussette"},{image:"/assets/porte-bebe.jpeg",name:"porte-b\xe9b\xe9"},{image:"/assets/sac-a-langer.jpeg",name:"sac \xe0 langer"},{image:"/assets/lit-de-voyage.jpeg",name:"lit de voyage"},{image:"/assets/siege-auto.jpeg",name:"si\xe8ge auto"},{image:"/assets/tapis-eveil.jpeg",name:"tapis d'\xe9veil"},{image:"/assets/lit-barreaux-bebe.jpeg",name:"lit \xe0 barreaux"},{image:"/assets/gigoteuse.jpeg",name:"gigoteuses"},{image:"/assets/table-a-langer.jpeg",name:"table \xe0 langer"},{image:"/assets/biberons.jpeg",name:"biberons"},{image:"/assets/veilleuse.jpeg",name:"veilleuse"},{image:"/assets/vetements.jpeg",name:"v\xeatements..."}]}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["products-list"]],decls:6,vars:1,consts:[[1,"products-list-title"],[1,"products-container"],[3,"product",4,"ngFor","ngForOf"],[1,"products-list-footer"],[3,"product"]],template:function(n,c){1&n&&(t.TgZ(0,"p",0),t._uU(1," Exemple d'objets que nous sommes en train d'acqu\xe9rir :\n"),t.qZA(),t.TgZ(2,"div",1),t.YNc(3,_,1,1,"product",2),t.qZA(),t.TgZ(4,"p",3),t._uU(5,"\u{1f9e1} Merci \u{1f9e1}"),t.qZA()),2&n&&(t.xp6(3),t.Q6J("ngForOf",c.products))},directives:[r.sg,C],styles:["[_nghost-%COMP%]{display:flex;align-items:center;flex-direction:column}.products-list-title[_ngcontent-%COMP%]{font-size:16px;font-weight:bold}.products-list-footer[_ngcontent-%COMP%]{font-size:26px}.products-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-around}"]}),e})(),b=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["clouds-background"]],decls:4,vars:0,consts:[["id","clouds","xmlns","http://www.w3.org/2000/svg","width","2611.084","height","485.677","viewBox","0 0 2611.084 485.677"],["id","Path_39","data-name","Path 39","d","M2379.709,863.793c10-93-77-171-168-149-52-114-225-105-264,15-75,3-140,59-152,133-30,2.83-66.725,9.829-93.5,26.25-26.771-16.421-63.5-23.42-93.5-26.25-12-74-77-130-152-133-39-120-212-129-264-15-54.084-13.075-106.753,9.173-138.488,48.9-31.734-39.726-84.4-61.974-138.487-48.9-52-114-225-105-264,15a162.027,162.027,0,0,0-103.147,43.044c-30.633-45.365-87.1-72.091-145.206-58.044-52-114-225-105-264,15-75,3-140,59-152,133-53,5-127,23-130,83-2,42,35,72,70,86,49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33,61.112,8.015,113.854-5.72,150.492-29.764a165.62,165.62,0,0,0,110.861-3.236c47,94,178,113,251,33,31.385,4.116,60.563,2.495,86.487-3.311,25.924,5.806,55.1,7.427,86.488,3.311,73,80,204,61,251-33a165.625,165.625,0,0,0,120,0c51,13,108,15,157-5a147.188,147.188,0,0,0,33.5-18.694,147.217,147.217,0,0,0,33.5,18.694c49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33C2446.709,1093.793,2554.709,922.793,2379.709,863.793Z","transform","translate(142.69 -634.312)","fill","rgb(249,231,204)"]],template:function(n,c){1&n&&(t.O4$(),t.TgZ(0,"svg",0),t.TgZ(1,"title"),t._uU(2,"Clouds"),t.qZA(),t._UZ(3,"path",1),t.qZA())},styles:["svg#clouds[_ngcontent-%COMP%]{position:fixed;bottom:-160px;left:-230px;z-index:-10;width:1920px}"]}),e})(),Z=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-footer"]],decls:2,vars:0,consts:[["src","/assets/aquarelle.jpeg"]],template:function(n,c){1&n&&(t.TgZ(0,"footer"),t._UZ(1,"img",0),t.qZA())},styles:["footer[_ngcontent-%COMP%]{margin-top:8px;display:flex;align-items:center;line-height:20px}footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;align-items:center}[_nghost-%COMP%]   img[_ngcontent-%COMP%]{min-width:100%;opacity:.4}"]}),e})();const h=[{path:"",component:(()=>{class e{constructor(n){this._snackBar=n,this.frAccount={title:"Virement FRANCAIS",name:"M. OZ Turhan ou Mme LOSFELD L",iban:"FR76 4061 8803 7100 0409 0348 713"},this.beAccount={title:"Virement BELGE",name:"Laure-Anne LOSFELD",iban:"BE33 0835 8695 1346"}}ngOnInit(){}accountClicked(n){console.log("cardClicked"),navigator.clipboard.writeText(n.iban).then(()=>{console.log("Async: Copying to clipboard was successful! of ")},function(c){console.error("Async: Could not copy text: ",c)})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(l.ux))},e.\u0275cmp=t.Xpm({type:e,selectors:[["home-page"]],decls:9,vars:2,consts:[["role","main",1,"content"],[1,"accounts-container"],[3,"account","cardClicked"]],template:function(n,c){1&n&&(t._UZ(0,"app-header"),t.TgZ(1,"div",0),t._UZ(2,"introduction-section"),t.TgZ(3,"div",1),t.TgZ(4,"bank-card",2),t.NdJ("cardClicked",function(s){return c.accountClicked(s)}),t.qZA(),t.TgZ(5,"bank-card",2),t.NdJ("cardClicked",function(s){return c.accountClicked(s)}),t.qZA(),t.qZA(),t._UZ(6,"products-list"),t._UZ(7,"clouds-background"),t.qZA(),t._UZ(8,"app-footer")),2&n&&(t.xp6(4),t.Q6J("account",c.frAccount),t.xp6(1),t.Q6J("account",c.beAccount))},directives:[d,m,f,x,b,Z],styles:[".content[_ngcontent-%COMP%]{display:flex;margin:16px auto;padding:0 16px;max-width:800px;flex-direction:column;align-items:center;text-align:center}.accounts-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;width:100%;justify-content:space-around;margin-top:16px;flex-wrap:wrap}"]}),e})()}];let y=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[u.Bz.forChild(h)],u.Bz]}),e})(),v=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[r.ez,y]]}),e})()}}]);