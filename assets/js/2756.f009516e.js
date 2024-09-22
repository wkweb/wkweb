/*! For license information please see 2756.f009516e.js.LICENSE.txt */
"use strict";(self.webpackChunkwake_docs=self.webpackChunkwake_docs||[]).push([[2756],{2756:(t,r,a)=>{a.r(r),a.d(r,{CanaryRoot:()=>m});var e=a(4440),o=a(2697),s=a(4676),n=a(2208),c=a(9408),i=a(8030),l=a(6468);class h{constructor(t,{target:r,config:a,callback:e,skipInitial:o}){this.t=new Set,this.o=!1,this.i=!1,this.h=t,null!==r&&this.t.add(r??t),this.l=a,this.o=o??this.o,this.callback=e,window.MutationObserver?(this.u=new MutationObserver((t=>{this.handleChanges(t),this.h.requestUpdate()})),t.addController(this)):console.warn("MutationController error: browser does not support MutationObserver.")}handleChanges(t){var r;this.value=null==(r=this.callback)?void 0:r.call(this,t,this.u)}hostConnected(){for(const t of this.t)this.observe(t)}hostDisconnected(){this.disconnect()}async hostUpdated(){const t=this.u.takeRecords();(t.length||!this.o&&this.i)&&this.handleChanges(t),this.i=!1}observe(t){this.t.add(t),this.u.observe(t,this.l),this.i=!0,this.h.requestUpdate()}disconnect(){this.u.disconnect()}}var u=Object.defineProperty,y=Object.getOwnPropertyDescriptor,d=(t,r,a,e)=>{for(var o,s=e>1?void 0:e?y(r,a):r,n=t.length-1;n>=0;n--)(o=t[n])&&(s=(e?o(r,a,s):o(s))||s);return e&&s&&u(r,a,s),s};let p=class extends e.s{constructor(){super(...arguments),this.framework="starlight",this.theme="light"}connectedCallback(){super.connectedCallback(),this._handleThemeChange()}render(){return e.x`<slot></slot>`}_handleThemeChange(){const[t]=document.getElementsByTagName("html"),r="vitepress"===this.framework,a=t=>r?t.classList.contains("dark")?"dark":"light":t.getAttribute("data-theme")||this.theme;this.theme=a(t),new h(this,{target:t,config:{attributeFilter:[r?"class":"data-theme"]},callback:t=>{var r;const e=null==(r=t[0])?void 0:r.target;if(!e)return this.theme;this.theme=a(e)}})}};p.styles=[c.w,e.i`
      :host {
        font-family: var(
          --canary-font-family-base,
          Arial,
          Helvetica,
          sans-serif
        );
        --canary-font-family-mono: Consolas, Monaco, Lucida Console;
      }
    `,e.i`
      :host {
        --canary-is-light: initial;
        --canary-is-dark: ;

        --l-0: 0%;
        --l-5: 0%;
        --l-10: 10%;
        --l-20: 20%;
        --l-30: 30%;
        --l-40: 40%;
        --l-50: 50%;
        --l-60: 60%;
        --l-70: 70%;
        --l-80: 80%;
        --l-90: 90%;
        --l-95: 95%;
        --l-100: 100%;
      }

      :host([theme="dark"]) {
        --canary-is-light: ;
        --canary-is-dark: initial;

        --l-0: 100%;
        --l-5: 95%;
        --l-10: 90%;
        --l-20: 80%;
        --l-30: 70%;
        --l-40: 60%;
        --l-50: 50%;
        --l-60: 40%;
        --l-70: 30%;
        --l-80: 20%;
        --l-90: 10%;
        --l-95: 5%;
        --l-100: 0%;
      }
    `,e.i`
      :host {
        --_canary-color-primary-c: var(--canary-color-primary-c, 0.1);
        --_canary-color-primary-h: var(--canary-color-primary-h, 270);
        --canary-color-primary-ch: var(--_canary-color-primary-c) var(--_canary-color-primary-h);

        --_canary-color-gray-c: var(--canary-color-gray-c, 0);
        --_canary-color-gray-h: var(--canary-color-gray-h, 0);
        --canary-color-gray-ch: var(--_canary-color-gray-c) var(--_canary-color-gray-h);

        --canary-color-backdrop-overlay: oklch(var(--l-80) var(--_canary-color-gray-ch) / 0.66);

        --canary-color-primary-0: oklch(var(--l-0) var(--canary-color-primary-ch));
        --canary-color-primary-5: oklch(var(--l-5) var(--canary-color-primary-ch));
        --canary-color-primary-10: oklch(var(--l-10) var(--canary-color-primary-ch));
        --canary-color-primary-20: oklch(var(--l-20) var(--canary-color-primary-ch));
        --canary-color-primary-30: oklch(var(--l-30) var(--canary-color-primary-ch));
        --canary-color-primary-40: oklch(var(--l-40) var(--canary-color-primary-ch));
        --canary-color-primary-50: oklch(var(--l-50) var(--canary-color-primary-ch));
        --canary-color-primary-60: oklch(var(--l-60) var(--canary-color-primary-ch));
        --canary-color-primary-70: oklch(var(--l-70) var(--canary-color-primary-ch));
        --canary-color-primary-80: oklch(var(--l-80) var(--canary-color-primary-ch));
        --canary-color-primary-90: oklch(var(--l-90) var(--canary-color-primary-ch));
        --canary-color-primary-95: oklch(var(--l-95) var(--canary-color-primary-ch));
        --canary-color-primary-100: oklch(var(--l-100) var(--canary-color-primary-ch));
        
        --canary-color-gray-0: oklch(var(--l-0) var(--canary-color-gray-ch));
        --canary-color-gray-5: oklch(var(--l-5) var(--canary-color-gray-ch));
        --canary-color-gray-10: oklch(var(--l-10) var(--canary-color-gray-ch));
        --canary-color-gray-20: oklch(var(--l-20) var(--canary-color-gray-ch));
        --canary-color-gray-30: oklch(var(--l-30) var(--canary-color-gray-ch));
        --canary-color-gray-40: oklch(var(--l-40) var(--canary-color-gray-ch));
        --canary-color-gray-50: oklch(var(--l-50) var(--canary-color-gray-ch));
        --canary-color-gray-60: oklch(var(--l-60) var(--canary-color-gray-ch));
        --canary-color-gray-70: oklch(var(--l-70) var(--canary-color-gray-ch));
        --canary-color-gray-80: oklch(var(--l-80) var(--canary-color-gray-ch));
        --canary-color-gray-90: oklch(var(--l-90) var(--canary-color-gray-ch));
        --canary-color-gray-95: oklch(var(--l-95) var(--canary-color-gray-ch));
        --canary-color-gray-100: oklch(var(--l-100) var(--canary-color-gray-ch));
      }
    `],d([(0,s.n)({type:String})],p.prototype,"framework",2),d([function({context:t}){return(r,a)=>{const e=new WeakMap;if("object"==typeof a)return a.addInitializer((function(){e.set(this,new i.i(this,{context:t}))})),{get(){return r.get.call(this)},set(t){var a;return null==(a=e.get(this))||a.setValue(t),r.set.call(this,t)},init(t){var r;return null==(r=e.get(this))||r.setValue(t),t}};{r.constructor.addInitializer((r=>{e.set(r,new i.i(r,{context:t}))}));const o=Object.getOwnPropertyDescriptor(r,a);let s;if(void 0===o){const t=new WeakMap;s={get(){return t.get(this)},set(r){e.get(this).setValue(r),t.set(this,r)},configurable:!0,enumerable:!0}}else{const t=o.set;s={...o,set(r){e.get(this).setValue(r),null==t||t.call(this,r)}}}return void Object.defineProperty(r,a,s)}}}({context:l.br}),(0,s.n)({type:String,reflect:!0})],p.prototype,"theme",2),p=d([(0,o.t)("canary-styles")],p);var v=Object.defineProperty,b=Object.getOwnPropertyDescriptor,g=(t,r,a,e)=>{for(var o,s=e>1?void 0:e?b(r,a):r,n=t.length-1;n>=0;n--)(o=t[n])&&(s=(e?o(r,a,s):o(s))||s);return e&&s&&v(r,a,s),s};let m=class extends e.s{constructor(){super(...arguments),this.framework="starlight",this.query="",this._store=(0,n.y$)(this)}connectedCallback(){super.connectedCallback(),this.addEventListener(n.b8,(t=>{this._store.send(t.detail)}))}firstUpdated(){this.query&&(this._store.send({type:"set_query",data:"..."}),setTimeout((()=>{this._store.send({type:"set_query",data:this.query})}),200))}render(){return e.x`<canary-styles framework=${this.framework}>
      <slot></slot>
    </canary-styles>`}};m.styles=c.w,g([(0,s.n)({type:String})],m.prototype,"framework",2),g([(0,s.n)({type:String})],m.prototype,"query",2),m=g([(0,o.t)("canary-root")],m)},1089:(t,r,a)=>{a.d(r,{L:()=>s,M:()=>e,a:()=>o});const e="Search",o="Ask",s="Docs"},8030:(t,r,a)=>{a.d(r,{i:()=>n});var e=a(699);class o{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,r=!1){const a=r||!Object.is(t,this.o);this.o=t,a&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:r}]of this.subscriptions)t(this.o,r)},void 0!==t&&(this.value=t)}addCallback(t,r,a){if(!a)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:r});const{disposer:e}=this.subscriptions.get(t);t(this.value,e)}clearCallbacks(){this.subscriptions.clear()}}class s extends Event{constructor(t){super("context-provider",{bubbles:!0,composed:!0}),this.context=t}}class n extends o{constructor(t,r,a){var o,s;super(void 0!==r.context?r.initialValue:a),this.onContextRequest=t=>{const r=t.composedPath()[0];t.context===this.context&&r!==this.host&&(t.stopPropagation(),this.addCallback(t.callback,r,t.subscribe))},this.onProviderRequest=t=>{const r=t.composedPath()[0];if(t.context!==this.context||r===this.host)return;const a=new Set;for(const[o,{consumerHost:s}]of this.subscriptions)a.has(o)||(a.add(o),s.dispatchEvent(new e.s(this.context,o,!0)));t.stopPropagation()},this.host=t,void 0!==r.context?this.context=r.context:this.context=r,this.attachListeners(),null==(s=(o=this.host).addController)||s.call(o,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new s(this.context))}}},699:(t,r,a)=>{a.d(r,{s:()=>e});let e=class extends Event{constructor(t,r,a){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.callback=r,this.subscribe=a??!1}}},6468:(t,r,a)=>{a.d(r,{JF:()=>h,LL:()=>s,br:()=>o,iK:()=>i,pC:()=>n,qD:()=>c,vJ:()=>l});const e=t=>Symbol(t),o=e("theme"),s=e("operation"),n=e("mode"),c=e("query"),i=e("search"),l=e("ask"),h=e("tabs")},1660:(t,r,a)=>{a.d(r,{A:()=>l,S:()=>i,T:()=>n});var e=a(8030),o=a(4932),s=a(6468);const n={INITIAL:0,PENDING:1,COMPLETE:2,ERROR:3},c="manager";class i{constructor(t,r){this._abortController=new AbortController,this._callId=0,this._initialState={status:n.INITIAL,result:{search:[],suggestion:{questions:[]}}},this._options=r,this._ctx=new e.i(t,{context:s.iK,initialValue:this._initialState})}get ctx(){return this._ctx.value}set ctx(t){this._ctx.setValue(t)}abort(){var t;this.ctx.status===n.PENDING&&(null==(t=this._abortController)||t.abort(c))}async run(t,r){var a;if(!r.search)return;this.ctx.status===n.PENDING&&this._abortController.abort(c),this.transition({status:n.PENDING});const e=++this._callId;if(null==(a=r.beforeSearch)||a.call(r,t),await(0,o.cM)(this._options.debounceMs),e===this._callId){this._abortController=new AbortController;try{const a=await r.search({query:t},this._abortController.signal);this.transition({status:n.COMPLETE,result:a})}catch(s){if(s===c)return void this.transition({status:n.INITIAL});console.error(s),this.transition({status:n.ERROR})}}else this.transition({status:n.INITIAL})}transition(t){this.ctx={...this.ctx,...t}}}class l{constructor(t){this._abortController=new AbortController,this._initialState={status:n.INITIAL,response:"",references:[],progress:!1,query:""},this._ctx=new e.i(t,{context:s.vJ,initialValue:this._initialState})}abort(){var t;this.ctx.status===n.PENDING&&(null==(t=this._abortController)||t.abort(c))}get ctx(){return this._ctx.value}set ctx(t){this._ctx.setValue(t)}async run(t,r,a){if(a.ask&&0!==t.length){this.ctx.status===n.PENDING&&this._abortController.abort(c),this.transition({...this._initialState,status:n.PENDING,query:t}),this._abortController=new AbortController;try{await a.ask({id:crypto.randomUUID(),query:t,pattern:r},this._handleDelta.bind(this),this._abortController.signal),this.transition({status:n.COMPLETE,progress:!1})}catch(e){if(e===c)return;console.error(e),this.transition({status:n.ERROR})}}}_handleDelta(t){if("progress"===t.type){const r=this.ctx.response+t.content;this.transition({response:r,progress:!0})}"complete"===t.type&&this.transition({response:t.content,progress:!1}),"references"===t.type&&this.transition({references:t.items})}transition(t){this.ctx={...this.ctx,...t}}}},2208:(t,r,a)=>{a.d(r,{b8:()=>h,lh:()=>u,y$:()=>l});var e=a(8030),o=a(6468),s=a(1660),n=a(1089);const c="function"==typeof Symbol&&Symbol.observable||"@@observable";function i(t,r,a){let e;const o={context:t,status:"active",output:void 0,error:void 0};let s=o;const n=function(t){return(r,a)=>{let e=r.context;const o=null==t?void 0:t[a.type];if(!o)return r;if("function"==typeof o)e=(t=>Object.assign({},e,null==o?void 0:o(t,a)))(e);else{const t={};for(const r of Object.keys(o)){const s=o[r];t[r]="function"==typeof s?s(e,a):s}e=Object.assign({},e,t)}return{...r,context:e}}}(r);return{send(t){!function(t){s=n(s,t),null==e||e.forEach((t=>{var r;return null==(r=t.next)?void 0:r.call(t,s)}))}(t)},getSnapshot:()=>s,getInitialSnapshot:()=>o,subscribe(t){const r=function(t,r,a){var e,o,s;const n="object"==typeof t,c=n?t:void 0;return{next:null==(e=n?t.next:t)?void 0:e.bind(c),error:null==(o=n?t.error:r)?void 0:o.bind(c),complete:null==(s=n?t.complete:a)?void 0:s.bind(c)}}(t);return e??(e=new Set),e.add(r),{unsubscribe:()=>null==e?void 0:e.delete(r)}},[c](){return this}}}const l=t=>i({operation:new e.i(t,{context:o.LL,initialValue:{}}),mode:new e.i(t,{context:o.pC,initialValue:{options:new Set([]),default:null,current:null}}),tab:new e.i(t,{context:o.JF,initialValue:{options:[],current:0}}),query:new e.i(t,{context:o.qD,initialValue:""}),searchManager:new s.S(t,{debounceMs:100}),askManager:new s.A(t)},{register_operations:{operation:(t,{data:r})=>(t.operation.setValue({...t.operation.value,...r}),t.operation)},register_mode:{mode:(t,{data:r})=>(t.mode.setValue({options:t.mode.value.options.add(r),current:t.mode.value.current??r,default:t.mode.value.default??r}),t.mode)},register_tab:{tab:(t,{data:r})=>(t.tab.setValue({options:r,current:0}),t.tab)},set_mode:{mode:(t,{data:r})=>{var a,e;if(t.mode.setValue({...t.mode.value,current:r}),r===n.M)t.askManager.abort(),t.searchManager.run(t.query.value,t.operation.value);else if(r===n.a){t.searchManager.abort();const r=t.tab.value,o=null==(e=null==(a=r.options)?void 0:a[r.current])?void 0:e.pattern;t.askManager.run(t.query.value,o,t.operation.value)}else t.searchManager.abort(),t.askManager.abort();return t.mode}},set_tab:{tab:(t,{data:r})=>(t.tab.setValue({...t.tab.value,current:r}),t.tab)},set_query:{query:(t,{data:r})=>{var a,e;if(t.query.setValue(r),t.mode.value.current===n.M&&t.searchManager.run(r,t.operation.value),t.mode.value.current===n.a){const o=t.tab.value,s=null==(e=null==(a=o.options)?void 0:a[o.current])?void 0:e.pattern;t.askManager.run(r,s,t.operation.value)}return t.query}},_unsafe_set_ask_ctx:{askManager:(t,{data:r})=>(t.askManager.ctx={...t.askManager.ctx,...r},t.askManager)}}),h="canary-broadcast",u=t=>new CustomEvent(h,{detail:t,composed:!0,bubbles:!0})},4932:(t,r,a)=>{a.d(r,{Kl:()=>s,b2:()=>e,cM:()=>o,vx:()=>n});const e=t=>n(t).pathname.split("/").map(((t,r)=>{const a=t.replace(/[-_]/g," ");return a.charAt(0).toUpperCase()+a.slice(1)})).map((t=>t.includes("#")?t.split("#")[0]:t)).map((t=>t.endsWith(".html")?t.replace(".html",""):t)).map(decodeURIComponent).filter(Boolean).slice(-4),o=async t=>new Promise((r=>setTimeout(r,t))),s=t=>{try{const{pathname:r,search:a}=n(t);return r+a}catch{return t}},n=t=>{const r=t.startsWith("http")?t:t.startsWith("/")?`https://example.com${t}`:`https://example.com/${t}`;return new URL(r)}}}]);