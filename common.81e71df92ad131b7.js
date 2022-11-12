"use strict";(self.webpackChunktask_control=self.webpackChunktask_control||[]).push([[592],{5123:(d,p,l)=>{l.d(p,{G:()=>u});var t=l(4650),e=l(7991),r=l(3841);let u=(()=>{class o{constructor(c,a){this.loginService=c,this.router=a}logout(){this.loginService.logout(),this.router.navigate(["login"])}}return o.\u0275fac=function(c){return new(c||o)(t.Y36(e.r),t.Y36(r.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-header"]],decls:5,vars:0,consts:[[1,"header"],["routerLink","/dashboard",1,"header__title"],["type","button",3,"click"]],template:function(c,a){1&c&&(t.TgZ(0,"header",0)(1,"a",1),t._uU(2,"Dashboard"),t.qZA(),t.TgZ(3,"button",2),t.NdJ("click",function(){return a.logout()}),t._uU(4,"Logout"),t.qZA()())},dependencies:[r.yS],styles:[".header[_ngcontent-%COMP%]{position:relative;height:3rem;background-color:#026aa7;display:flex;justify-content:space-between;align-items:center;padding-block:.6rem;padding-inline:.6rem .8rem}.header__title[_ngcontent-%COMP%]{font-weight:700;text-decoration:none;color:#fff;font-size:1.4rem;line-height:1}button[_ngcontent-%COMP%]{font-weight:700;text-decoration:none;color:#fff;font-size:1.2rem;line-height:1}"]}),o})()},5968:(d,p,l)=>{l.d(p,{n:()=>e});var t=l(4650);let e=(()=>{class r{constructor(){this.isButtonLight=!0,this.clickEmitter=new t.vpe}setButtonTheme(){return this.isButtonLight?"button-more button-more--theme--light":"button-more button-more--theme--dark"}}return r.\u0275fac=function(o){return new(o||r)},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-button-more"]],inputs:{isButtonLight:"isButtonLight"},outputs:{clickEmitter:"clickEmitter"},decls:3,vars:2,consts:[["type","button",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16","fill","#6b778c",1,"bi","bi-three-dots"],["d","M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"]],template:function(o,n){1&o&&(t.TgZ(0,"button",0),t.NdJ("click",function(a){return n.clickEmitter.emit(a)}),t.O4$(),t.TgZ(1,"svg",1),t._UZ(2,"path",2),t.qZA()()),2&o&&t.Tol(n.setButtonTheme())},styles:[".button-more[_ngcontent-%COMP%]{width:28px;height:28px;border-radius:5px;color:#fff;display:grid;place-content:center}.button-more[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:21px;height:21px}.button-more--theme--dark[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#6b778c}.button-more--theme--dark[_ngcontent-%COMP%]:hover{background-color:#091e4214}.button-more--theme--light[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#fff}.button-more--theme--light[_ngcontent-%COMP%]:hover{background-color:#0000001a}"]}),r})()},119:(d,p,l)=>{l.d(p,{N:()=>o});var t=l(4650),e=l(6895);const r=function(n){return{"background-color":n}};function u(n,c){if(1&n){const a=t.EpF();t.TgZ(0,"li",1)(1,"input",2),t.NdJ("change",function(){const m=t.CHM(a).$implicit,_=t.oxw();return t.KtG(_.setColor(m.code))}),t.qZA(),t._UZ(2,"label",3),t.qZA()}if(2&n){const a=c.$implicit,s=t.oxw();t.xp6(1),t.Q6J("id",a.name)("checked",s.currentColor===a.code),t.xp6(1),t.Q6J("for",a.name)("ngStyle",t.VKq(4,r,a.code))}}let o=(()=>{class n{constructor(){this.colors=[{name:"blue",code:"#0079bf"},{name:"caramel",code:"#d29034"},{name:"fern",code:"#519839"},{name:"brick",code:"#b04632"},{name:"wisteria",code:"#89609e"},{name:"magenta",code:"#cd5a91"}],this.size="large",this.currentColor=this.colors[0].code,this.clickEmitter=new t.vpe}setColor(a){this.currentColor=a,this.clickEmitter.emit(a)}getClass(){return`colors ${this.size}`}}return n.\u0275fac=function(a){return new(a||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-color-select"]],inputs:{size:"size",currentColor:"currentColor"},outputs:{clickEmitter:"clickEmitter"},decls:2,vars:3,consts:[["class","color",4,"ngFor","ngForOf"],[1,"color"],["name","color","type","radio",1,"color__input",3,"id","checked","change"],[1,"color__label",3,"for","ngStyle"]],template:function(a,s){1&a&&(t.TgZ(0,"ul"),t.YNc(1,u,3,6,"li",0),t.qZA()),2&a&&(t.Tol(s.getClass()),t.xp6(1),t.Q6J("ngForOf",s.colors))},dependencies:[e.sg,e.PC],styles:[".colors[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:.6rem}.colors.large[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr);grid-auto-rows:5rem}.colors.small[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr);grid-auto-rows:3rem}.color[_ngcontent-%COMP%]{width:100%;height:100%;position:relative}.color__input[_ngcontent-%COMP%]{position:absolute;visibility:hidden}.color__input[_ngcontent-%COMP%]:checked + .color__label[_ngcontent-%COMP%]{position:relative}.color__input[_ngcontent-%COMP%]:checked + .color__label[_ngcontent-%COMP%]:before{content:url(check-mark.920ea7a340e3973e.png);width:100%;height:100%;position:absolute;top:0;left:0;display:grid;place-content:center;border-radius:5px;font-size:2rem;color:#fff;background-color:#0003}.color__label[_ngcontent-%COMP%]{width:100%;height:100%;display:block;border-radius:5px;cursor:pointer}"]}),n})()},6345:(d,p,l)=>{l.d(p,{_:()=>e});var t=l(4650);let e=(()=>{class r{constructor(o){this.host=o}ngOnInit(){const o=this.host.nativeElement;this.className&&o.classList.add(this.className),o.style.setProperty("--skeleton-rect-width",this.width??"100%"),o.style.setProperty("--skeleton-rect-height",this.height??"105.6px")}}return r.\u0275fac=function(o){return new(o||r)(t.Y36(t.SBq))},r.\u0275cmp=t.Xpm({type:r,selectors:[["skeleton-rect"]],hostAttrs:[1,"pulse"],decls:0,vars:0,template:function(o,n){},styles:["[_nghost-%COMP%]{display:block;width:var(--skeleton-rect-width);height:var(--skeleton-rect-height);background:rgb(239,241,246) no-repeat;border-radius:3px;animation:pulse 1.5s cubic-bezier(.4,0,.2,1) infinite;animation-delay:.5s}@keyframes pulse{0%{opacity:1}50%{opacity:.5}to{opacity:1}}"]}),r})()},7368:(d,p,l)=>{l.d(p,{n:()=>s});var t=l(4627),e=l(4650),r=l(2997),u=l(6895),o=l(433);function n(i,m){1&i&&e.GkF(0)}function c(i,m){1&i&&(e.TgZ(0,"optgroup",16)(1,"option",17),e._uU(2,"Name"),e.qZA(),e.TgZ(3,"option",18),e._uU(4,"Date"),e.qZA()(),e.TgZ(5,"optgroup",19)(6,"option",20),e._uU(7,"New"),e.qZA(),e.TgZ(8,"option",21),e._uU(9,"In progress"),e.qZA(),e.TgZ(10,"option",22),e._uU(11,"Done"),e.qZA()())}function a(i,m){1&i&&(e.TgZ(0,"optgroup",19)(1,"option",17),e._uU(2,"Name"),e.qZA(),e.TgZ(3,"option",18),e._uU(4,"Date"),e.qZA()())}let s=(()=>{class i{constructor(_){this.store=_,this.title=""}updateSearchValue(_){this.store.dispatch((0,t.GP)({value:_}))}updateSortValue(_){this.store.dispatch((0,t.mJ)({value:_}))}updateOrderValue(_){this.store.dispatch((0,t.Cs)({value:_}))}}return i.\u0275fac=function(_){return new(_||i)(e.Y36(r.yh))},i.\u0275cmp=e.Xpm({type:i,selectors:[["toolbar"]],inputs:{title:"title",isDashboardPage:"isDashboardPage"},decls:31,vars:4,consts:[[1,"toolbar"],[1,"toolbar__title"],[1,"toolbar__items"],[1,"toolbar__item"],[1,"toolbar__item-label"],[1,"toolbar__item-title"],["type","text","placeholder","Search...",1,"toolbar__item-field",3,"keyup"],["input",""],["name","select",1,"toolbar__item-field",3,"change"],["sortSelect",""],[4,"ngIf","ngIfThen","ngIfElse"],["orderSelect",""],["value","asc"],["value","desc"],["dashboardTemplate",""],["boardTemplate",""],["label","Board"],["value","name","selected",""],["value","created_date"],["label","Task"],["value","new"],["value","progress"],["value","done"]],template:function(_,g){if(1&_){const h=e.EpF();e.TgZ(0,"div",0)(1,"h2",1),e._uU(2),e.qZA(),e.TgZ(3,"ul",2)(4,"li",3)(5,"label",4)(6,"h3",5),e._uU(7,"Search"),e.qZA(),e.TgZ(8,"input",6,7),e.NdJ("keyup",function(){e.CHM(h);const f=e.MAs(9);return e.KtG(g.updateSearchValue(f.value))}),e.qZA()()(),e.TgZ(10,"li",3)(11,"label",4)(12,"h3",5),e._uU(13,"Sort by"),e.qZA(),e.TgZ(14,"select",8,9),e.NdJ("change",function(){e.CHM(h);const f=e.MAs(15);return e.KtG(g.updateSortValue(f.value))}),e.YNc(16,n,1,0,"ng-container",10),e.qZA()()(),e.TgZ(17,"li",3)(18,"label",4)(19,"h3",5),e._uU(20,"Order by"),e.qZA(),e.TgZ(21,"select",8,11),e.NdJ("change",function(){e.CHM(h);const f=e.MAs(22);return e.KtG(g.updateOrderValue(f.value))}),e.TgZ(23,"option",12),e._uU(24,"Ascending"),e.qZA(),e.TgZ(25,"option",13),e._uU(26,"Descending"),e.qZA()()()()()(),e.YNc(27,c,12,0,"ng-template",null,14,e.W1O),e.YNc(29,a,5,0,"ng-template",null,15,e.W1O)}if(2&_){const h=e.MAs(28),C=e.MAs(30);e.xp6(2),e.Oqu(g.title),e.xp6(14),e.Q6J("ngIf",g.isDashboardPage)("ngIfThen",h)("ngIfElse",C)}},dependencies:[u.O5,o.YN,o.Kr],styles:[".toolbar[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:2rem}.toolbar[_ngcontent-%COMP%]   .toolbar__items[_ngcontent-%COMP%]{display:flex;gap:1rem}.toolbar[_ngcontent-%COMP%]   .toolbar__item-label[_ngcontent-%COMP%]{font-size:.75rem;color:#5e6c84}.toolbar[_ngcontent-%COMP%]   .toolbar__item-title[_ngcontent-%COMP%]{margin-bottom:.3rem;margin-left:5px}.toolbar__item-field[_ngcontent-%COMP%]{width:13rem;height:2.5rem;padding-inline:.2rem;border:2px solid lightgray;border-radius:5px}.toolbar__item-field[_ngcontent-%COMP%]:focus{border-color:#87cefa}input.toolbar__item-field[_ngcontent-%COMP%]{padding-left:.37rem}"]}),i})()},213:(d,p,l)=>{l.d(p,{C:()=>e});var t=l(4650);let e=(()=>{class r{transform(o,n,c){return null!==o&&n&&c?"board"===c?[...o].filter(i=>i.name.toLocaleLowerCase().includes(n.toLocaleLowerCase())):"task"===c?[...o].filter(s=>s.name.toLocaleLowerCase().includes(n.toLocaleLowerCase())):void 0:o}}return r.\u0275fac=function(o){return new(o||r)},r.\u0275pipe=t.Yjl({name:"search",type:r,pure:!0}),r})()},5747:(d,p,l)=>{l.d(p,{U:()=>e});var t=l(4650);let e=(()=>{class r{transform(o,n,c="asc"){if(null===o||!n)return o;const a=["new","progress","done"],s=[...o];return s.sort("name"===n||"created_date"===n?(i,m)=>i[n].toLocaleLowerCase().localeCompare(m[n].toLocaleLowerCase()):(i,m)=>{let _=i.lists[a.indexOf(n)].tasks.length;return m.lists[a.indexOf(n)].tasks.length-_}),"asc"===c?s:s.reverse()}}return r.\u0275fac=function(o){return new(o||r)},r.\u0275pipe=t.Yjl({name:"sort",type:r,pure:!0}),r})()}}]);