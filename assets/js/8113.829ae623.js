/*! For license information please see 8113.829ae623.js.LICENSE.txt */
"use strict";(self.webpackChunkwake_docs=self.webpackChunkwake_docs||[]).push([[8113],{1389:(t,e,s)=>{s.d(e,{e:()=>i});var r=s(4440),n=s(7319);const i=(0,n.e)(class extends n.i{constructor(t){var e;if(super(t),t.type!==n.t.ATTRIBUTE||"class"!==t.name||(null==(e=t.strings)?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var s,n;if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null==(s=this.nt)?void 0:s.has(t))&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const r of this.st)r in e||(i.remove(r),this.st.delete(r));for(const r in e){const t=!!e[r];t===this.st.has(r)||(null==(n=this.nt)?void 0:n.has(r))||(t?(i.add(r),this.st.add(r)):(i.remove(r),this.st.delete(r)))}return r.w}})},8113:(t,e,s)=>{s.r(e),s.d(e,{CanarySearchInput:()=>_});var r=s(4440),n=s(2697),i=s(4676),o=s(4715),a=s(1389),c=s(8857),l=s(3277),u=s(6468),h=s(9408),d=s(1660),b=Object.defineProperty,p=Object.getOwnPropertyDescriptor;let v=class extends r.s{render(){return r.x` <span class="loader"></span> `}};v.styles=r.i`
    .loader {
      width: 12px;
      height: 12px;
      border: 1px solid var(--canary-color-gray-40);
      border-bottom-color: transparent;
      border-radius: 50%;
      display: inline-block;
      box-sizing: border-box;
      animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `,v=((t,e,s,r)=>{for(var n,i=r>1?void 0:r?p(e,s):e,o=t.length-1;o>=0;o--)(n=t[o])&&(i=(r?n(e,s,i):n(i))||i);return r&&i&&b(e,s,i),i})([(0,n.t)("canary-loading-spinner")],v);var x=s(2208),f=Object.defineProperty,y=Object.getOwnPropertyDescriptor,g=(t,e,s,r)=>{for(var n,i=r>1?void 0:r?y(e,s):e,o=t.length-1;o>=0;o--)(n=t[o])&&(i=(r?n(e,s,i):n(i))||i);return r&&i&&f(e,s,i),i};let _=class extends r.s{constructor(){super(...arguments),this.autofocus=!1,this._query=""}render(){return this._search?r.x`
      <input
        type="text"
        part="input"
        value=${this._query}
        autocomplete="off"
        spellcheck="false"
        placeholder="Search for anything..."
        @input=${this._handleInput}
        onfocus="this.setSelectionRange(this.value.length,this.value.length);"
        autofocus=${(0,c.o)(this.autofocus||null)}
      />
      <span
        class=${(0,a.e)({hidden:this._search.status!==d.T.PENDING})}
      >
        <slot name="loading">
          <canary-loading-spinner></canary-loading-spinner>
        </slot>
      </span>
    `:r.T}_handleInput(t){this._query=t.target.value,this.dispatchEvent((0,x.lh)({type:"set_query",data:this._query}))}};_.styles=[h.i,r.i`
      .hidden {
        visibility: hidden;
      }
    `],g([(0,i.n)({type:Boolean})],_.prototype,"autofocus",2),g([(0,l.c)({context:u.qD,subscribe:!0}),(0,o.r)()],_.prototype,"_query",2),g([(0,l.c)({context:u.iK,subscribe:!0}),(0,o.r)()],_.prototype,"_search",2),_=g([(0,n.t)("canary-search-input")],_)},1089:(t,e,s)=>{s.d(e,{L:()=>i,M:()=>r,a:()=>n});const r="Search",n="Ask",i="Docs"},3277:(t,e,s)=>{s.d(e,{c:()=>n});var r=s(5793);function n({context:t,subscribe:e}){return(s,n)=>{"object"==typeof n?n.addInitializer((function(){new r.s(this,{context:t,callback:t=>{s.set.call(this,t)},subscribe:e})})):s.constructor.addInitializer((s=>{new r.s(s,{context:t,callback:t=>{s[n]=t},subscribe:e})}))}}},5793:(t,e,s)=>{s.d(e,{s:()=>n});var r=s(699);class n{constructor(t,e,s,r){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(t,e)=>{this.unsubscribe&&(this.unsubscribe!==e&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=t,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(t,e)),this.unsubscribe=e},this.host=t,void 0!==e.context){const t=e;this.context=t.context,this.callback=t.callback,this.subscribe=t.subscribe??!1}else this.context=e,this.callback=s,this.subscribe=r??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new r.s(this.context,this.t,this.subscribe))}}},8030:(t,e,s)=>{s.d(e,{i:()=>o});var r=s(699);class n{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,e=!1){const s=e||!Object.is(t,this.o);this.o=t,s&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:e}]of this.subscriptions)t(this.o,e)},void 0!==t&&(this.value=t)}addCallback(t,e,s){if(!s)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:e});const{disposer:r}=this.subscriptions.get(t);t(this.value,r)}clearCallbacks(){this.subscriptions.clear()}}class i extends Event{constructor(t){super("context-provider",{bubbles:!0,composed:!0}),this.context=t}}class o extends n{constructor(t,e,s){var n,i;super(void 0!==e.context?e.initialValue:s),this.onContextRequest=t=>{const e=t.composedPath()[0];t.context===this.context&&e!==this.host&&(t.stopPropagation(),this.addCallback(t.callback,e,t.subscribe))},this.onProviderRequest=t=>{const e=t.composedPath()[0];if(t.context!==this.context||e===this.host)return;const s=new Set;for(const[n,{consumerHost:i}]of this.subscriptions)s.has(n)||(s.add(n),i.dispatchEvent(new r.s(this.context,n,!0)));t.stopPropagation()},this.host=t,void 0!==e.context?this.context=e.context:this.context=e,this.attachListeners(),null==(i=(n=this.host).addController)||i.call(n,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new i(this.context))}}},699:(t,e,s)=>{s.d(e,{s:()=>r});let r=class extends Event{constructor(t,e,s){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.callback=e,this.subscribe=s??!1}}},6468:(t,e,s)=>{s.d(e,{JF:()=>u,LL:()=>i,br:()=>n,iK:()=>c,pC:()=>o,qD:()=>a,vJ:()=>l});const r=t=>Symbol(t),n=r("theme"),i=r("operation"),o=r("mode"),a=r("query"),c=r("search"),l=r("ask"),u=r("tabs")},7319:(t,e,s)=>{s.d(e,{e:()=>n,i:()=>i,t:()=>r});const r={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},n=t=>(...e)=>({_$litDirective$:t,values:e});class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},8857:(t,e,s)=>{s.d(e,{o:()=>n});var r=s(4440);const n=t=>t??r.T},1660:(t,e,s)=>{s.d(e,{A:()=>l,S:()=>c,T:()=>o});var r=s(8030),n=s(4932),i=s(6468);const o={INITIAL:0,PENDING:1,COMPLETE:2,ERROR:3},a="manager";class c{constructor(t,e){this._abortController=new AbortController,this._callId=0,this._initialState={status:o.INITIAL,result:{search:[],suggestion:{questions:[]}}},this._options=e,this._ctx=new r.i(t,{context:i.iK,initialValue:this._initialState})}get ctx(){return this._ctx.value}set ctx(t){this._ctx.setValue(t)}abort(){var t;this.ctx.status===o.PENDING&&(null==(t=this._abortController)||t.abort(a))}async run(t,e){var s;if(!e.search)return;this.ctx.status===o.PENDING&&this._abortController.abort(a),this.transition({status:o.PENDING});const r=++this._callId;if(null==(s=e.beforeSearch)||s.call(e,t),await(0,n.cM)(this._options.debounceMs),r===this._callId){this._abortController=new AbortController;try{const s=await e.search({query:t},this._abortController.signal);this.transition({status:o.COMPLETE,result:s})}catch(i){if(i===a)return void this.transition({status:o.INITIAL});console.error(i),this.transition({status:o.ERROR})}}else this.transition({status:o.INITIAL})}transition(t){this.ctx={...this.ctx,...t}}}class l{constructor(t){this._abortController=new AbortController,this._initialState={status:o.INITIAL,response:"",references:[],progress:!1,query:""},this._ctx=new r.i(t,{context:i.vJ,initialValue:this._initialState})}abort(){var t;this.ctx.status===o.PENDING&&(null==(t=this._abortController)||t.abort(a))}get ctx(){return this._ctx.value}set ctx(t){this._ctx.setValue(t)}async run(t,e,s){if(s.ask&&0!==t.length){this.ctx.status===o.PENDING&&this._abortController.abort(a),this.transition({...this._initialState,status:o.PENDING,query:t}),this._abortController=new AbortController;try{await s.ask({id:crypto.randomUUID(),query:t,pattern:e},this._handleDelta.bind(this),this._abortController.signal),this.transition({status:o.COMPLETE,progress:!1})}catch(r){if(r===a)return;console.error(r),this.transition({status:o.ERROR})}}}_handleDelta(t){if("progress"===t.type){const e=this.ctx.response+t.content;this.transition({response:e,progress:!0})}"complete"===t.type&&this.transition({response:t.content,progress:!1}),"references"===t.type&&this.transition({references:t.items})}transition(t){this.ctx={...this.ctx,...t}}}},4715:(t,e,s)=>{s.d(e,{r:()=>n});var r=s(4676);function n(t){return(0,r.n)({...t,state:!0,attribute:!1})}},2208:(t,e,s)=>{s.d(e,{b8:()=>u,lh:()=>h,y$:()=>l});var r=s(8030),n=s(6468),i=s(1660),o=s(1089);const a="function"==typeof Symbol&&Symbol.observable||"@@observable";function c(t,e,s){let r;const n={context:t,status:"active",output:void 0,error:void 0};let i=n;const o=function(t){return(e,s)=>{let r=e.context;const n=null==t?void 0:t[s.type];if(!n)return e;if("function"==typeof n)r=(t=>Object.assign({},r,null==n?void 0:n(t,s)))(r);else{const t={};for(const e of Object.keys(n)){const i=n[e];t[e]="function"==typeof i?i(r,s):i}r=Object.assign({},r,t)}return{...e,context:r}}}(e);return{send(t){!function(t){i=o(i,t),null==r||r.forEach((t=>{var e;return null==(e=t.next)?void 0:e.call(t,i)}))}(t)},getSnapshot:()=>i,getInitialSnapshot:()=>n,subscribe(t){const e=function(t,e,s){var r,n,i;const o="object"==typeof t,a=o?t:void 0;return{next:null==(r=o?t.next:t)?void 0:r.bind(a),error:null==(n=o?t.error:e)?void 0:n.bind(a),complete:null==(i=o?t.complete:s)?void 0:i.bind(a)}}(t);return r??(r=new Set),r.add(e),{unsubscribe:()=>null==r?void 0:r.delete(e)}},[a](){return this}}}const l=t=>c({operation:new r.i(t,{context:n.LL,initialValue:{}}),mode:new r.i(t,{context:n.pC,initialValue:{options:new Set([]),default:null,current:null}}),tab:new r.i(t,{context:n.JF,initialValue:{options:[],current:0}}),query:new r.i(t,{context:n.qD,initialValue:""}),searchManager:new i.S(t,{debounceMs:100}),askManager:new i.A(t)},{register_operations:{operation:(t,{data:e})=>(t.operation.setValue({...t.operation.value,...e}),t.operation)},register_mode:{mode:(t,{data:e})=>(t.mode.setValue({options:t.mode.value.options.add(e),current:t.mode.value.current??e,default:t.mode.value.default??e}),t.mode)},register_tab:{tab:(t,{data:e})=>(t.tab.setValue({options:e,current:0}),t.tab)},set_mode:{mode:(t,{data:e})=>{var s,r;if(t.mode.setValue({...t.mode.value,current:e}),e===o.M)t.askManager.abort(),t.searchManager.run(t.query.value,t.operation.value);else if(e===o.a){t.searchManager.abort();const e=t.tab.value,n=null==(r=null==(s=e.options)?void 0:s[e.current])?void 0:r.pattern;t.askManager.run(t.query.value,n,t.operation.value)}else t.searchManager.abort(),t.askManager.abort();return t.mode}},set_tab:{tab:(t,{data:e})=>(t.tab.setValue({...t.tab.value,current:e}),t.tab)},set_query:{query:(t,{data:e})=>{var s,r;if(t.query.setValue(e),t.mode.value.current===o.M&&t.searchManager.run(e,t.operation.value),t.mode.value.current===o.a){const n=t.tab.value,i=null==(r=null==(s=n.options)?void 0:s[n.current])?void 0:r.pattern;t.askManager.run(e,i,t.operation.value)}return t.query}},_unsafe_set_ask_ctx:{askManager:(t,{data:e})=>(t.askManager.ctx={...t.askManager.ctx,...e},t.askManager)}}),u="canary-broadcast",h=t=>new CustomEvent(u,{detail:t,composed:!0,bubbles:!0})},4932:(t,e,s)=>{s.d(e,{Kl:()=>i,b2:()=>r,cM:()=>n,vx:()=>o});const r=t=>o(t).pathname.split("/").map(((t,e)=>{const s=t.replace(/[-_]/g," ");return s.charAt(0).toUpperCase()+s.slice(1)})).map((t=>t.includes("#")?t.split("#")[0]:t)).map((t=>t.endsWith(".html")?t.replace(".html",""):t)).map(decodeURIComponent).filter(Boolean).slice(-4),n=async t=>new Promise((e=>setTimeout(e,t))),i=t=>{try{const{pathname:e,search:s}=o(t);return e+s}catch{return t}},o=t=>{const e=t.startsWith("http")?t:t.startsWith("/")?`https://example.com${t}`:`https://example.com/${t}`;return new URL(e)}}}]);