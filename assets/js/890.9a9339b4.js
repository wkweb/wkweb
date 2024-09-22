/*! For license information please see 890.9a9339b4.js.LICENSE.txt */
"use strict";(self.webpackChunkwake_docs=self.webpackChunkwake_docs||[]).push([[890],{1389:(t,s,e)=>{e.d(s,{e:()=>n});var i=e(4440),r=e(7319);const n=(0,r.e)(class extends r.i{constructor(t){var s;if(super(t),t.type!==r.t.ATTRIBUTE||"class"!==t.name||(null==(s=t.strings)?void 0:s.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((s=>t[s])).join(" ")+" "}update(t,[s]){var e,r;if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in s)s[t]&&!(null==(e=this.nt)?void 0:e.has(t))&&this.st.add(t);return this.render(s)}const n=t.element.classList;for(const i of this.st)i in s||(n.remove(i),this.st.delete(i));for(const i in s){const t=!!s[i];t===this.st.has(i)||(null==(r=this.nt)?void 0:r.has(i))||(t?(n.add(i),this.st.add(i)):(n.remove(i),this.st.delete(i)))}return i.w}})},890:(t,s,e)=>{e.r(s),e.d(s,{CanaryContent:()=>b});var i=e(4440),r=e(2697),n=e(4715);var o=e(1389),c=e(3277),a=e(6468),h=e(9408),d=Object.defineProperty,u=Object.getOwnPropertyDescriptor,l=(t,s,e,i)=>{for(var r,n=i>1?void 0:i?u(s,e):s,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(i?r(s,e,n):r(n))||n);return i&&n&&d(s,e,n),n};let b=class extends i.s{constructor(){super(...arguments),this._query=""}render(){return i.x`
      <div class="container">
        <slot name="mode"></slot>
        <div
          class=${(0,o.e)({footer:!0,hide:!this._query||0===this._footers.length})}
        >
          <slot name="footer"></slot>
        </div>
      </div>
    `}};var p;b.styles=[h.g,h.w,i.i`
      .container {
        width: 100%;
        max-width: var(--canary-content-max-width, 550px);

        outline: none;
        padding-top: 6px;
        padding-bottom: 8px;

        border: none;
        border-radius: 8px;
        box-shadow:
          0 20px 25px -5px rgb(0 0 0 / 0.1),
          0 8px 10px -6px rgb(0 0 0 / 0.1);

        background-color: var(--canary-color-gray-100);
      }

      .footer {
        padding: 6px 0 2px 12px;
      }

      .hide {
        display: none;
      }

      @media (min-width: 50rem) {
        .container {
          width: var(--canary-content-max-width, 550px);
        }
      }
    `],l([(0,c.c)({context:a.qD,subscribe:!0}),(0,n.r)()],b.prototype,"_query",2),l([(p={slot:"footer"},(t,s)=>{const{slot:e,selector:i}=p??{},r="slot"+(e?`[name=${e}]`:":not([name])");return((t,s,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&"object"!=typeof s&&Object.defineProperty(t,s,e),e))(t,s,{get(){var t;const s=null==(t=this.renderRoot)?void 0:t.querySelector(r),e=(null==s?void 0:s.assignedElements(p))??[];return void 0===i?e:e.filter((t=>t.matches(i)))}})})],b.prototype,"_footers",2),b=l([(0,r.t)("canary-content")],b)},3277:(t,s,e)=>{e.d(s,{c:()=>r});var i=e(5793);function r({context:t,subscribe:s}){return(e,r)=>{"object"==typeof r?r.addInitializer((function(){new i.s(this,{context:t,callback:t=>{e.set.call(this,t)},subscribe:s})})):e.constructor.addInitializer((e=>{new i.s(e,{context:t,callback:t=>{e[r]=t},subscribe:s})}))}}},5793:(t,s,e)=>{e.d(s,{s:()=>r});var i=e(699);class r{constructor(t,s,e,i){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(t,s)=>{this.unsubscribe&&(this.unsubscribe!==s&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=t,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(t,s)),this.unsubscribe=s},this.host=t,void 0!==s.context){const t=s;this.context=t.context,this.callback=t.callback,this.subscribe=t.subscribe??!1}else this.context=s,this.callback=e,this.subscribe=i??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new i.s(this.context,this.t,this.subscribe))}}},699:(t,s,e)=>{e.d(s,{s:()=>i});let i=class extends Event{constructor(t,s,e){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.callback=s,this.subscribe=e??!1}}},6468:(t,s,e)=>{e.d(s,{JF:()=>d,LL:()=>n,br:()=>r,iK:()=>a,pC:()=>o,qD:()=>c,vJ:()=>h});const i=t=>Symbol(t),r=i("theme"),n=i("operation"),o=i("mode"),c=i("query"),a=i("search"),h=i("ask"),d=i("tabs")},7319:(t,s,e)=>{e.d(s,{e:()=>r,i:()=>n,t:()=>i});const i={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},r=t=>(...s)=>({_$litDirective$:t,values:s});class n{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,e){this._$Ct=t,this._$AM=s,this._$Ci=e}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}}},4715:(t,s,e)=>{e.d(s,{r:()=>r});var i=e(4676);function r(t){return(0,i.n)({...t,state:!0,attribute:!1})}}}]);