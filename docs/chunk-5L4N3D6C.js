import{a as j,c as F,h as L}from"./chunk-6P3OES2T.js";import"./chunk-6F5R2FFA.js";import{A as p,Aa as b,B as r,E as y,G as m,J as a,K as s,Ma as S,Na as k,O as u,P as c,Q as x,Qa as I,Sa as E,Xa as T,Y as w,Za as z,_a as V,k as C,m as v,ma as P,n as M,r as g,s as h,wa as O}from"./chunk-Y6LYE74S.js";function R(n,e){if(n&1){let d=u();a(0,"span",8),c("click",function(){g(d);let i=x();return h(i.us.setMode("dark"))}),w(1," dark_mode "),s()}}function q(n,e){if(n&1){let d=u();a(0,"span",8),c("click",function(){g(d);let i=x();return h(i.us.setMode())}),w(1," light_mode "),s()}}var U=(()=>{let e=class e{constructor(t,i,o,_,f,N,B,D){this.us=t,this.ui=i,this._alert=o,this._http=_,this._hash=f,this._router=N,this._form=B,this._translate=D,this.form=this._form.getForm("sign",{formId:"sign",title:"Sign In / Sign Up",components:[{name:"Email",key:"email",root:!0,focused:!0,fields:[{name:"Placeholder",value:"Enter your email"},{name:"Label",value:"Email"}]},{name:"Password",key:"password",root:!0,fields:[{name:"Placeholder",value:"Enter your password"},{name:"Label",value:"Password"}]},{name:"Text",key:"code",root:!0,fields:[{name:"Placeholder",value:"Enter code from email"},{name:"Label",value:"code"}],hidden:!0},{name:"Button",fields:[{name:"Label",value:"Let's go"},{name:"Submit",value:!0}]}]}),this.user={email:"ceo@webart.work",password:"asdasdasdasd"},this._set=l=>{l?(localStorage.setItem("waw_user",JSON.stringify(l)),this._http.set("token",l.token),this.us.setUser(l),this.us.load(),this._router.navigateByUrl("/profile")):this._alert.error({text:"Something went wrong"})}}submit(t){!this.form.components[2].hidden&&t.code?this.save():t.email||this._alert.error({text:this._translate.translate("Sign.Enter your email")}),this.ui.valid(t.email)?t.password?(this._hash.set("email",t.email),this._http.post("/api/user/status",t,i=>{i.email&&i.pass?this.login(t):i.email?this.reset(t):this.sign(t)})):this._alert.error({text:this._translate.translate("Sign.Enter your password")}):this._alert.error({text:this._translate.translate("Sign.Enter proper email")})}login(t){this._http.post("/api/user/login",t,this._set.bind(this))}sign(t){this._http.post("/api/user/sign",t,this._set.bind(this))}reset(t){this._http.post("/api/user/request",t,()=>{this.form.components[2].hidden=!1}),this._alert.info({text:"Mail will sent to your email"})}save(){}};e.\u0275fac=function(i){return new(i||e)(r(j),r(I),r(z),r(S),r(k),r(O),r(V),r(E))},e.\u0275cmp=v({type:e,selectors:[["ng-component"]],decls:9,vars:4,consts:[[1,"auth-wrapper"],[1,"auth__wrap"],[1,"auth__img"],[3,"click"],[1,"auth__form"],[1,"auth"],["class","material-icons",3,"click",4,"ngIf"],[3,"wSubmit","submition","config"],[1,"material-icons",3,"click"]],template:function(i,o){i&1&&(a(0,"div",0)(1,"div",1)(2,"div",2)(3,"icon-spider",3),c("click",function(){return o.us.setMode(o.us.mode?"":"dark")}),s()(),a(4,"div",4)(5,"div",5),y(6,R,2,0,"span",6)(7,q,2,0,"span",6),a(8,"wform",7),c("wSubmit",function(f){return o.submit(f)}),s()()()()()),i&2&&(p(6),m("ngIf",!o.us.mode),p(),m("ngIf",o.us.mode),p(),m("submition",o.user)("config",o.form))},dependencies:[P,T,F],styles:["[_ngcontent-%COMP%]:root{--c-white: #fff;--c-basic: #3558ae;--c-primary: #256eff;--c-primary-hover: #0051f1;--c-secondary: red;--c-bg-primary: #f3f4f7;--c-bg-secondary: #ffffff;--c-bg-tertiary: #fcfdfe;--c-border: #f0f1f7;--c-shadow: #f3f3f3;--c-text-primary: #666666;--c-text-secondary: #19235c;--c-placeholder: #adb8c6;--c-img-round: 50%}html.dark[_ngcontent-%COMP%]:root{--c-white: #fff;--c-basic: #333;--c-bg-primary: #282828;--c-bg-secondary: #343434;--c-bg-tertiary: #404040;--c-border: #404040;--c-shadow: #444444;--c-text-primary: #ffffff;--c-text-secondary: #ffffff;--c-placeholder: #7a7a7a}[_nghost-%COMP%]{position:fixed;width:100%;height:100%;overflow-y:auto;display:flex;flex-direction:column}.auth-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;background:var(--c-bg-primary);flex-grow:1;padding:20px;transition:all .3s}.auth[_ngcontent-%COMP%]{max-width:340px;width:100%;padding:30px;border-radius:10px;box-shadow:0 0 6px var(--c-shadow);background:var(--c-bg-secondary);display:flex;flex-flow:row wrap;position:relative}.auth[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;right:25px;top:25px;z-index:9;cursor:pointer}@media (max-width: 767.9px){.auth[_ngcontent-%COMP%]{padding:25px;flex-flow:column wrap}}.auth__title[_ngcontent-%COMP%]{font-size:24px;font-weight:700;color:var(--c-text-primary);text-align:center;margin-bottom:15px}@media (max-width: 767.9px){.auth__title[_ngcontent-%COMP%]{font-size:18px}}.auth__btn[_ngcontent-%COMP%]{text-align:center;margin-top:30px}.auth__btn[_ngcontent-%COMP%]   .w-btn[_ngcontent-%COMP%]{margin:0;width:100%}.auth__wrap[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;align-items:center;max-width:880px;width:100%}@media (max-width: 767.9px){.auth__wrap[_ngcontent-%COMP%]{padding:25px;flex-flow:column wrap}}.auth__img[_ngcontent-%COMP%]{flex:0 0 50%;max-width:50%;display:flex;position:relative;padding-right:40px}.auth__img[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{left:50%;transform:translate(-78%);font-size:320px;position:absolute;opacity:0;cursor:pointer}@media (max-width: 767.9px){.auth__img[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:70px;transform:translate(-50%)}}.auth__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:260px;width:100%;object-fit:cover}.auth__img[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{max-width:260px;width:100%;height:100%}@media (max-width: 767.9px){.auth__img[_ngcontent-%COMP%]{max-width:60px;margin:0 auto;flex:0 0 100%;padding:0 0 30px}.auth__img[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{height:100%;width:100%}}.auth__form[_ngcontent-%COMP%]{width:95%;flex:0 0 50%;max-width:50%;padding-left:40px;display:flex;justify-content:flex-end}@media (max-width: 767.9px){.auth__form[_ngcontent-%COMP%]{flex:0 0 100%;max-width:100%;justify-content:center;padding:0}}@media (max-width: 767.9px){.auth[_ngcontent-%COMP%]   .form__title[_ngcontent-%COMP%]{font-size:14px}}wform[_ngcontent-%COMP%]{flex:1 0}@media (max-width: 767.9px){wform[_ngcontent-%COMP%]{flex:0 0 100%;padding:0}}.w-forms[_ngcontent-%COMP%]{position:relative}.w-forms__level[_ngcontent-%COMP%]{top:5px;right:5px;position:absolute;display:inline-block;color:var(--c-text-secondary);font-size:22px;line-height:20px;letter-spacing:.3px;transition:.3s all ease-in-out}.w-forms__level._sky[_ngcontent-%COMP%]{color:#17a2b8}.w-forms__level._orange[_ngcontent-%COMP%]{color:#e67e22}.w-forms__level._green[_ngcontent-%COMP%]{color:#14c76e}.w-forms__input[_ngcontent-%COMP%]{padding-right:35px}.w-forms__input-block[_ngcontent-%COMP%]{position:relative}.w-forms__toggle[_ngcontent-%COMP%]{display:flex;position:absolute;right:10px;top:50%;color:var(--c-placeholder);transform:translateY(-50%);cursor:pointer}.w-forms__toggle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:21px}.w-forms[_ngcontent-%COMP%]   .icon-visibility[_ngcontent-%COMP%]{color:var(--c-primary)}@media screen and (max-width: 768px){.auth__img[_ngcontent-%COMP%]{display:none}}"]});let n=e;return n})();var A=[{path:"",component:U}],ot=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=M({type:e}),e.\u0275inj=C({imports:[b.forChild(A),L]});let n=e;return n})();export{ot as SignModule};
