/*! For license information please see 51.b720208f.js.LICENSE.txt */
"use strict";(self.webpackChunkwake_docs=self.webpackChunkwake_docs||[]).push([[51],{51:(t,e,s)=>{s.r(e),s.d(e,{CanaryModal:()=>v,MODAL_CLOSE_EVENT:()=>$});var i=s(4440),o=s(2697),r=s(4676),n=s(1674),l=s(9408),a=Object.defineProperty,h=Object.getOwnPropertyDescriptor,c=(t,e,s,i)=>{for(var o,r=i>1?void 0:i?h(e,s):e,n=t.length-1;n>=0;n--)(o=t[n])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&a(e,s,r),r};let d=class extends i.s{constructor(){super(...arguments),this.ref=(0,n.e)()}render(){return i.x`
      <dialog ${(0,n.n)(this.ref)} @click=${this.handleClick}>
        <slot></slot>
      </dialog>
    `}handleClick(t){const e=this.ref.value;(null==e?void 0:e.open)&&"DIALOG"===t.target.nodeName&&e.close()}};d.styles=[i.i`
      dialog::backdrop {
        background-color: var(--canary-color-backdrop-overlay);
        -webkit-backdrop-filter: blur(0.25rem);
        backdrop-filter: blur(0.25rem);
      }

      dialog {
        margin: 0 auto;
        top: 60px;
        padding: 0;
        border: none;
        outline: none;
        border-radius: 8px;
        box-shadow:
          0 20px 25px -5px rgb(0 0 0 / 0.1),
          0 8px 10px -6px rgb(0 0 0 / 0.1);
      }
    `],c([(0,r.n)({attribute:!1})],d.prototype,"ref",2),d=c([(0,o.t)("canary-dialog")],d);var u=Object.defineProperty,_=Object.getOwnPropertyDescriptor,p=(t,e,s,i)=>{for(var o,r=i>1?void 0:i?_(e,s):e,n=t.length-1;n>=0;n--)(o=t[n])&&(r=(i?o(e,s,r):o(r))||r);return i&&r&&u(e,s,r),r};const $="modal-close";let v=class extends i.s{constructor(){super(...arguments),this.open=!1,this._ref=(0,n.e)()}render(){return i.x`
      <slot name="trigger" @click=${this._handleOpen}></slot>
      <canary-dialog .ref=${this._ref}>
        <slot name="content" @modal-close=${this._handleModalClose}></slot>
      </canary-dialog>
    `}_handleOpen(){var t;null==(t=this._ref.value)||t.showModal()}_handleModalClose(){var t;null==(t=this._ref.value)||t.close()}};v.styles=[l.w,i.i`
      ::slotted([slot="trigger"]) {
        cursor: pointer;
      }
    `],p([(0,r.n)({type:Boolean})],v.prototype,"open",2),v=p([(0,o.t)("canary-modal")],v)},7319:(t,e,s)=>{s.d(e,{e:()=>o,i:()=>r,t:()=>i});const i={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},o=t=>(...e)=>({_$litDirective$:t,values:e});class r{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},1674:(t,e,s)=>{s.d(e,{e:()=>u,n:()=>$});var i=s(4440),o=s(7319);const r=(t,e)=>{var s;const i=t._$AN;if(void 0===i)return!1;for(const o of i)null==(s=o._$AO)||s.call(o,e,!1),r(o,e);return!0},n=t=>{let e,s;do{if(void 0===(e=t._$AM))break;s=e._$AN,s.delete(t),t=e}while(0===(null==s?void 0:s.size))},l=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(void 0===s)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),c(e)}};function a(t){void 0!==this._$AN?(n(this),this._$AM=t,l(this)):this._$AM=t}function h(t,e=!1,s=0){const i=this._$AH,o=this._$AN;if(void 0!==o&&0!==o.size)if(e)if(Array.isArray(i))for(let l=s;l<i.length;l++)r(i[l],!1),n(i[l]);else null!=i&&(r(i,!1),n(i));else r(this,t)}const c=t=>{t.type==o.t.CHILD&&(t._$AP??(t._$AP=h),t._$AQ??(t._$AQ=a))};class d extends o.i{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,s){super._$AT(t,e,s),l(this),this.isConnected=t._$AU}_$AO(t,e=!0){var s,i;t!==this.isConnected&&(this.isConnected=t,t?null==(s=this.reconnected)||s.call(this):null==(i=this.disconnected)||i.call(this)),e&&(r(this,t),n(this))}setValue(t){if(void 0===this._$Ct.strings)this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}const u=()=>new _;class _{}const p=new WeakMap,$=(0,o.e)(class extends d{render(t){return i.T}update(t,[e]){var s;const o=e!==this.Y;return o&&void 0!==this.Y&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.Y=e,this.ht=null==(s=t.options)?void 0:s.host,this.rt(this.ct=t.element)),i.T}rt(t){if(this.isConnected||(t=void 0),"function"==typeof this.Y){const e=this.ht??globalThis;let s=p.get(e);void 0===s&&(s=new WeakMap,p.set(e,s)),void 0!==s.get(this.Y)&&this.Y.call(this.ht,void 0),s.set(this.Y,t),void 0!==t&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){var t,e;return"function"==typeof this.Y?null==(t=p.get(this.ht??globalThis))?void 0:t.get(this.Y):null==(e=this.Y)?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})}}]);