/*! For license information please see 8865.f24323cc.js.LICENSE.txt */
"use strict";(self.webpackChunkwake_docs=self.webpackChunkwake_docs||[]).push([[8865],{8865:(t,e,s)=>{s.r(e),s.d(e,{CanaryProviderPagefind:()=>v});var r=s(4440),n=s(2697),o=s(4676),a=s(4715),i=s(2208),c=s(4932),l=s(9408);function u(t){const e=new Map;return(...s)=>{const r=JSON.stringify(s);if(e.has(r))return e.get(r);const n=t(...s);return n&&e.set(r,n),n}}var h=s(1089),p=Object.defineProperty,d=Object.getOwnPropertyDescriptor,b=(t,e,s,r)=>{for(var n,o=r>1?void 0:r?d(e,s):e,a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r?n(e,s,o):n(o))||o);return r&&o&&p(e,s,o),o};let v=class extends r.s{constructor(){super(...arguments),this.options={},this._pagefind=null,this.beforeSearch=async t=>{this._pagefind.preload(t)},this.search=async({query:t},e)=>{const s=this.options.maxPages??20,{results:r}=await this._pagefind.search(t),n=await Promise.all(r.slice(0,s).map((t=>t.data())));return e.throwIfAborted(),{search:[{name:h.L,type:"webpage",hits:this._transform(n)}]}}}async connectedCallback(){let t;super.connectedCallback();try{t=await this._importPagefind()}catch(e){return void console.info("Failed to import pagefind. This is totally fine if you are not in production mode.",e)}this._initPagefind(t),this.dispatchEvent((0,i.lh)({type:"register_operations",data:{search:u(this.search),beforeSearch:this.beforeSearch}}))}async _importPagefind(){var t;try{return import((null==(t=this.options)?void 0:t.path)??"/pagefind/pagefind.js")}catch(e){throw new Error(`Failed to import pagefind': ${e}`)}}async _initPagefind(t){try{t.init(),this.options.pagefind&&await t.options(this.options.pagefind),this._pagefind=t}catch(e){throw new Error(`Failed to initialize pagefind': ${e}`)}}render(){return r.x`<slot></slot>`}_transform(t){const e=this.options.maxSubResults??3,s=t=>this.options._base?this.options._base+(0,c.Kl)(t.replace(this.options._replace||"","")):t,r=t=>t.weighted_locations.reduce(((t,e)=>Math.max(t,e.balanced_score)),-1);return t.sort(((t,e)=>r(e.sub_results[0])-r(t.sub_results[0]))).map((t=>{const r=t.sub_results.slice(0,e).map((t=>({url:s(t.url),title:t.title,excerpt:t.excerpt})));return{title:t.meta.title,url:s(t.url),excerpt:t.excerpt,sub_results:r}}))}};v.styles=l.w,b([(0,o.n)({type:Object})],v.prototype,"options",2),b([(0,a.r)()],v.prototype,"_pagefind",2),v=b([(0,n.t)("canary-provider-pagefind")],v)},1089:(t,e,s)=>{s.d(e,{L:()=>o,M:()=>r,a:()=>n});const r="Search",n="Ask",o="Docs"},8030:(t,e,s)=>{s.d(e,{i:()=>a});var r=s(699);class n{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,e=!1){const s=e||!Object.is(t,this.o);this.o=t,s&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:e}]of this.subscriptions)t(this.o,e)},void 0!==t&&(this.value=t)}addCallback(t,e,s){if(!s)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:e});const{disposer:r}=this.subscriptions.get(t);t(this.value,r)}clearCallbacks(){this.subscriptions.clear()}}class o extends Event{constructor(t){super("context-provider",{bubbles:!0,composed:!0}),this.context=t}}class a extends n{constructor(t,e,s){var n,o;super(void 0!==e.context?e.initialValue:s),this.onContextRequest=t=>{const e=t.composedPath()[0];t.context===this.context&&e!==this.host&&(t.stopPropagation(),this.addCallback(t.callback,e,t.subscribe))},this.onProviderRequest=t=>{const e=t.composedPath()[0];if(t.context!==this.context||e===this.host)return;const s=new Set;for(const[n,{consumerHost:o}]of this.subscriptions)s.has(n)||(s.add(n),o.dispatchEvent(new r.s(this.context,n,!0)));t.stopPropagation()},this.host=t,void 0!==e.context?this.context=e.context:this.context=e,this.attachListeners(),null==(o=(n=this.host).addController)||o.call(n,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new o(this.context))}}},699:(t,e,s)=>{s.d(e,{s:()=>r});let r=class extends Event{constructor(t,e,s){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.callback=e,this.subscribe=s??!1}}},6468:(t,e,s)=>{s.d(e,{JF:()=>u,LL:()=>o,br:()=>n,iK:()=>c,pC:()=>a,qD:()=>i,vJ:()=>l});const r=t=>Symbol(t),n=r("theme"),o=r("operation"),a=r("mode"),i=r("query"),c=r("search"),l=r("ask"),u=r("tabs")},1660:(t,e,s)=>{s.d(e,{A:()=>l,S:()=>c,T:()=>a});var r=s(8030),n=s(4932),o=s(6468);const a={INITIAL:0,PENDING:1,COMPLETE:2,ERROR:3},i="manager";class c{constructor(t,e){this._abortController=new AbortController,this._callId=0,this._initialState={status:a.INITIAL,result:{search:[],suggestion:{questions:[]}}},this._options=e,this._ctx=new r.i(t,{context:o.iK,initialValue:this._initialState})}get ctx(){return this._ctx.value}set ctx(t){this._ctx.setValue(t)}abort(){var t;this.ctx.status===a.PENDING&&(null==(t=this._abortController)||t.abort(i))}async run(t,e){var s;if(!e.search)return;this.ctx.status===a.PENDING&&this._abortController.abort(i),this.transition({status:a.PENDING});const r=++this._callId;if(null==(s=e.beforeSearch)||s.call(e,t),await(0,n.cM)(this._options.debounceMs),r===this._callId){this._abortController=new AbortController;try{const s=await e.search({query:t},this._abortController.signal);this.transition({status:a.COMPLETE,result:s})}catch(o){if(o===i)return void this.transition({status:a.INITIAL});console.error(o),this.transition({status:a.ERROR})}}else this.transition({status:a.INITIAL})}transition(t){this.ctx={...this.ctx,...t}}}class l{constructor(t){this._abortController=new AbortController,this._initialState={status:a.INITIAL,response:"",references:[],progress:!1,query:""},this._ctx=new r.i(t,{context:o.vJ,initialValue:this._initialState})}abort(){var t;this.ctx.status===a.PENDING&&(null==(t=this._abortController)||t.abort(i))}get ctx(){return this._ctx.value}set ctx(t){this._ctx.setValue(t)}async run(t,e,s){if(s.ask&&0!==t.length){this.ctx.status===a.PENDING&&this._abortController.abort(i),this.transition({...this._initialState,status:a.PENDING,query:t}),this._abortController=new AbortController;try{await s.ask({id:crypto.randomUUID(),query:t,pattern:e},this._handleDelta.bind(this),this._abortController.signal),this.transition({status:a.COMPLETE,progress:!1})}catch(r){if(r===i)return;console.error(r),this.transition({status:a.ERROR})}}}_handleDelta(t){if("progress"===t.type){const e=this.ctx.response+t.content;this.transition({response:e,progress:!0})}"complete"===t.type&&this.transition({response:t.content,progress:!1}),"references"===t.type&&this.transition({references:t.items})}transition(t){this.ctx={...this.ctx,...t}}}},4715:(t,e,s)=>{s.d(e,{r:()=>n});var r=s(4676);function n(t){return(0,r.n)({...t,state:!0,attribute:!1})}},2208:(t,e,s)=>{s.d(e,{b8:()=>u,lh:()=>h,y$:()=>l});var r=s(8030),n=s(6468),o=s(1660),a=s(1089);const i="function"==typeof Symbol&&Symbol.observable||"@@observable";function c(t,e,s){let r;const n={context:t,status:"active",output:void 0,error:void 0};let o=n;const a=function(t){return(e,s)=>{let r=e.context;const n=null==t?void 0:t[s.type];if(!n)return e;if("function"==typeof n)r=(t=>Object.assign({},r,null==n?void 0:n(t,s)))(r);else{const t={};for(const e of Object.keys(n)){const o=n[e];t[e]="function"==typeof o?o(r,s):o}r=Object.assign({},r,t)}return{...e,context:r}}}(e);return{send(t){!function(t){o=a(o,t),null==r||r.forEach((t=>{var e;return null==(e=t.next)?void 0:e.call(t,o)}))}(t)},getSnapshot:()=>o,getInitialSnapshot:()=>n,subscribe(t){const e=function(t,e,s){var r,n,o;const a="object"==typeof t,i=a?t:void 0;return{next:null==(r=a?t.next:t)?void 0:r.bind(i),error:null==(n=a?t.error:e)?void 0:n.bind(i),complete:null==(o=a?t.complete:s)?void 0:o.bind(i)}}(t);return r??(r=new Set),r.add(e),{unsubscribe:()=>null==r?void 0:r.delete(e)}},[i](){return this}}}const l=t=>c({operation:new r.i(t,{context:n.LL,initialValue:{}}),mode:new r.i(t,{context:n.pC,initialValue:{options:new Set([]),default:null,current:null}}),tab:new r.i(t,{context:n.JF,initialValue:{options:[],current:0}}),query:new r.i(t,{context:n.qD,initialValue:""}),searchManager:new o.S(t,{debounceMs:100}),askManager:new o.A(t)},{register_operations:{operation:(t,{data:e})=>(t.operation.setValue({...t.operation.value,...e}),t.operation)},register_mode:{mode:(t,{data:e})=>(t.mode.setValue({options:t.mode.value.options.add(e),current:t.mode.value.current??e,default:t.mode.value.default??e}),t.mode)},register_tab:{tab:(t,{data:e})=>(t.tab.setValue({options:e,current:0}),t.tab)},set_mode:{mode:(t,{data:e})=>{var s,r;if(t.mode.setValue({...t.mode.value,current:e}),e===a.M)t.askManager.abort(),t.searchManager.run(t.query.value,t.operation.value);else if(e===a.a){t.searchManager.abort();const e=t.tab.value,n=null==(r=null==(s=e.options)?void 0:s[e.current])?void 0:r.pattern;t.askManager.run(t.query.value,n,t.operation.value)}else t.searchManager.abort(),t.askManager.abort();return t.mode}},set_tab:{tab:(t,{data:e})=>(t.tab.setValue({...t.tab.value,current:e}),t.tab)},set_query:{query:(t,{data:e})=>{var s,r;if(t.query.setValue(e),t.mode.value.current===a.M&&t.searchManager.run(e,t.operation.value),t.mode.value.current===a.a){const n=t.tab.value,o=null==(r=null==(s=n.options)?void 0:s[n.current])?void 0:r.pattern;t.askManager.run(e,o,t.operation.value)}return t.query}},_unsafe_set_ask_ctx:{askManager:(t,{data:e})=>(t.askManager.ctx={...t.askManager.ctx,...e},t.askManager)}}),u="canary-broadcast",h=t=>new CustomEvent(u,{detail:t,composed:!0,bubbles:!0})},4932:(t,e,s)=>{s.d(e,{Kl:()=>o,b2:()=>r,cM:()=>n,vx:()=>a});const r=t=>a(t).pathname.split("/").map(((t,e)=>{const s=t.replace(/[-_]/g," ");return s.charAt(0).toUpperCase()+s.slice(1)})).map((t=>t.includes("#")?t.split("#")[0]:t)).map((t=>t.endsWith(".html")?t.replace(".html",""):t)).map(decodeURIComponent).filter(Boolean).slice(-4),n=async t=>new Promise((e=>setTimeout(e,t))),o=t=>{try{const{pathname:e,search:s}=a(t);return e+s}catch{return t}},a=t=>{const e=t.startsWith("http")?t:t.startsWith("/")?`https://example.com${t}`:`https://example.com/${t}`;return new URL(e)}}}]);