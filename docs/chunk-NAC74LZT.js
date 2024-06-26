import{a as Q}from"./chunk-7NC53JNR.js";import{g as K}from"./chunk-QBB5AXD6.js";import"./chunk-TNDQIX7V.js";import{C as c,D as d,H as f,J as u,Ka as A,O as s,P as l,R as F,Ra as L,S as M,T as I,U as w,Ua as B,V as h,Wa as R,Ya as g,_a as v,ca as m,db as W,ea as p,fa as P,ja as $,ka as b,l as T,la as k,lb as z,m as O,ma as D,mb as G,n as C,o as j,p as E,pb as H,qb as J,t as S,ta as V,u as y,ua as N,wa as q}from"./chunk-AEKSWFXE.js";var X=(()=>{let i=class i{new(){return{}}constructor(e,n){this.mongo=e,this.alert=n,this.orders=[],this._orders={},this.orders=e.get("order",{name:"admin"},(o,a)=>{this._orders=a})}create(e=this.new(),n=a=>{},o="order has been created."){e._id?this.save(e):this.mongo.create("order",e,a=>{n(a),this.alert.show({text:o})})}doc(e){return this._orders[e]||(this._orders[e]=this.mongo.fetch("order",{query:{_id:e}})),this._orders[e]}update(e,n=a=>{},o="order has been updated."){this.mongo.afterWhile(e,()=>{this.save(e,n,o)})}save(e,n=a=>{},o="order has been updated."){this.mongo.update("order",e,{name:"admin"},()=>{o&&this.alert.show({text:o,unique:e})})}delete(e,n=a=>{},o="order has been deleted."){this.mongo.delete("order",e,()=>{o&&this.alert.show({text:o})})}};i.\u0275fac=function(n){return new(n||i)(C(g),C(v))},i.\u0275prov=T({token:i,factory:i.\u0275fac,providedIn:"root"});let t=i;return t})();var oe=()=>["new","ordered","preparing","sent","completed"];function se(t,i){if(t&1){let r=I();s(0,"wselect",7),w("modelChange",function(n){S(r);let o=h();return y(o.setStore(n))}),l()}if(t&2){let r=h();u("clearable",!0)("items",r.stores)("select",r.store)}}function le(t,i){if(t&1&&(m(0),b(1,"mongodate"),b(2,"date")),t&2){let r=i.$implicit;p(" ",D(2,3,k(1,1,r._id),"M/d/yy, h:mm a")," ")}}function ae(t,i){if(t&1&&(s(0,"div"),m(1),l()),t&2){let r=i.$implicit;c(),P(" ",r.product.name," ",r.product.price," x ",r.quantity," \u0448\u0442 ")}}function ce(t,i){if(t&1&&f(0,ae,2,3,"div",8),t&2){let r=i.$implicit;u("ngForOf",r.products)}}function me(t,i){if(t&1){let r=I();s(0,"wselect",9),w("modelChange",function(n){let o=S(r).$implicit,a=h();return y(a.setStatus(o,n))}),l()}if(t&2){let r=i.$implicit;u("select",r.status)("items",$(2,oe))}}function de(t,i){if(t&1&&(F(0),s(1,"div"),m(2),l(),s(3,"div"),m(4),l(),s(5,"div"),m(6),l(),s(7,"div"),m(8),l(),s(9,"div"),m(10),l(),M()),t&2){let r=h().$implicit;c(2),p("Email: ",r.delivery.email,""),c(2),p("Name: ",r.delivery.name,""),c(2),p("City: ",r.delivery.city,""),c(2),p("Address: ",r.delivery.address,""),c(2),p("Phone: ",r.delivery.phone,"")}}function pe(t,i){if(t&1&&f(0,de,11,5,"ng-container",10),t&2){let r=i.$implicit;u("ngIf",r.delivery)}}function ue(t,i){if(t&1&&(s(0,"div"),m(1),l()),t&2){let r=h().$implicit;c(),p("Discount: -",r==null?null:r.discount.amount,"%")}}function he(t,i){if(t&1&&(f(0,ue,2,1,"div",10),s(1,"div"),m(2),l()),t&2){let r=i.$implicit,e=h();u("ngIf",r==null?null:r.discount),c(2),p("Total: ",e.getProductsTotal(r)-e.getProductsTotal(r)*((r==null||r.discount==null?null:r.discount.amount)||0)/100," \u0433\u0440\u043D")}}var Y=(()=>{let i=class i{setOrders(){this.orders.splice(0,this.orders.length);for(let e of this._os.orders)e.stores=e.stores||[],this.store?e.stores.includes(this.store)&&this.orders.push(e):this.orders.push(e)}setStatus(e,n){e.status=n,this.update(e)}update(e){this._os.update(e)}get stores(){return this._ss.stores}setStore(e){this.store=e,this._store.set("store",e),this.setOrders()}constructor(e,n,o,a,Z,ee,te,ie){this._os=e,this._translate=n,this._alert=o,this._form=a,this._core=Z,this._store=ee,this._ss=te,this._mongo=ie,this.columns=["date","products","information","price","status"],this.form=this._form.getForm("orders",{formId:"orders",title:"Orders",components:[{name:"Text",key:"name",focused:!0,fields:[{name:"Placeholder",value:"fill orders title"},{name:"Label",value:"Title"}]},{name:"Text",key:"description",fields:[{name:"Placeholder",value:"fill orders description"},{name:"Label",value:"Description"}]},{name:"Select",key:"stores",fields:[{name:"Placeholder",value:"fill your stores"},{name:"Label",value:"Stores"},{name:"Multiple",value:!0},{name:"Items",value:this.stores}]}]}),this.config={create:()=>{this._form.modal(this.form,{label:"Create",click:(_,x)=>{this._os.create(_,this.setOrders.bind(this)),x()}},this.store?{stores:[this.store]}:{})},update:_=>{this._form.modal(this.form,[],_).then(x=>{this._core.copy(x,_),this._os.save(_)})}},this.orders=[],this._store.get("store",this.setStore.bind(this)),this._mongo.on("order",this.setOrders.bind(this))}getProductsTotal(e){return e.products.reduce((n,o)=>n+o.product.price,0)}};i.\u0275fac=function(n){return new(n||i)(d(X),d(W),d(v),d(z),d(L),d(R),d(Q),d(g))},i.\u0275cmp=j({type:i,selectors:[["ng-component"]],decls:7,vars:4,consts:[["placeholder","Select store","style","padding-bottom: 10px;",3,"clearable","items","select","modelChange",4,"ngIf"],["title","Orders",3,"columns","config","rows"],["cell","date"],["cell","products"],["cell","status"],["cell","information"],["cell","price"],["placeholder","Select store",2,"padding-bottom","10px",3,"modelChange","clearable","items","select"],[4,"ngFor","ngForOf"],[3,"modelChange","select","items"],[4,"ngIf"]],template:function(n,o){n&1&&(f(0,se,1,3,"wselect",0),s(1,"wtable",1),f(2,le,3,6,"ng-template",2)(3,ce,1,1,"ng-template",3)(4,me,1,3,"ng-template",4)(5,pe,1,1,"ng-template",5)(6,he,3,2,"ng-template",6),l()),n&2&&(u("ngIf",o.stores.length),c(),u("columns",o.columns)("config",o.config)("rows",o._os.orders))},dependencies:[G,V,N,J,H,q,B]});let t=i;return t})();var fe=[{path:"",component:Y}],Oe=(()=>{let i=class i{};i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=E({type:i}),i.\u0275inj=O({imports:[A.forChild(fe),K]});let t=i;return t})();export{Oe as OrdersModule};
