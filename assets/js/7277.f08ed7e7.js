/*! For license information please see 7277.f08ed7e7.js.LICENSE.txt */
"use strict";(self.webpackChunkwake_docs=self.webpackChunkwake_docs||[]).push([[7277,51],{896:(t,e,r)=>{var s=r(4440),n=r(2697),i=r(9408),a=r(4676),o=r(8857),c=r(4932),l=r(1389),u=r(51),h=r(7319);class d extends h.i{constructor(t){if(super(t),this.it=s.T,t.type!==h.t.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===s.T||null==t)return this._t=void 0,this.it=t;if(t===s.w)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}d.directiveName="unsafeHTML",d.resultType=1;const p=(0,h.e)(d);var b=Object.defineProperty,g=Object.getOwnPropertyDescriptor,y=(t,e,r,s)=>{for(var n,i=s>1?void 0:s?g(e,r):e,a=t.length-1;a>=0;a--)(n=t[a])&&(i=(s?n(e,r,i):n(i))||i);return s&&i&&b(e,r,i),i};let v=class extends s.s{constructor(){super(...arguments),this.value="",this._maxLength=110}render(){const t=this._strip(this._sanitize(this.value),this._maxLength);return s.x` <span class="excerpt">${p(t)}</span> `}_sanitize(t){return t.replace(/<mark>/g,"__MARK_START__").replace(/<\/mark>/g,"__MARK_END__").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/__MARK_START__/g,"<mark>").replace(/__MARK_END__/g,"</mark>")}_strip(t,e){const r=t.match(/<mark>(.*?)<\/mark>/);if(!r)return t.slice(0,e);const s=r.index,n=r[0].length,i=Math.max(0,s-Math.floor((e-n)/2)),a=Math.min(t.length,i+e);return t.slice(i,a)}};v.styles=s.i`
    span {
      white-space: nowrap;
      color: var(--canary-snippet-color, var(--canary-color-gray-20));
      font-size: var(--canary-snippet-font-size, 0.875rem);
      font-weight: var(--canary-snippet-font-weight, normal);
    }

    mark {
      border-radius: 2px;
      background-color: var(--canary-is-light, var(--canary-color-primary-30))
        var(--canary-is-dark, var(--canary-color-primary-20));
      color: var(--canary-color-gray-90);
    }
  `,y([(0,a.n)({type:String})],v.prototype,"value",2),v=y([(0,n.t)("canary-snippet")],v);var x=Object.defineProperty,f=Object.getOwnPropertyDescriptor,m=(t,e,r,s)=>{for(var n,i=s>1?void 0:s?f(e,r):e,a=t.length-1;a>=0;a--)(n=t[a])&&(i=(s?n(e,r,i):n(i))||i);return s&&i&&x(e,r,i),i};let w=class extends s.s{constructor(){super(...arguments),this.last=!1}render(){return s.x`
      <svg viewBox="0 0 24 54">
        <g
          stroke="currentColor"
          fill="none"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          ${this._paths()}
        </g>
      </svg>
    `}_paths(){return this.last?s.b`<path d="M8 6v21M20 27H8.3"></path>`:s.b`<path d="M8 6v21M20 27H8.3"></path>
      <path d="M8 6v42M20 27H8.3"></path>`}};w.styles=s.i`
    :host {
      display: contents;
    }

    svg {
      width: 1.4em;
      color: var(--canary-is-light, var(--canary-color-gray-80))
        var(--canary-is-dark, var(--canary-color-gray-50));
    }
  `,m([(0,a.n)({type:Boolean})],w.prototype,"last",2),w=m([(0,n.t)("canary-icon-tree")],w);var k=Object.defineProperty,_=Object.getOwnPropertyDescriptor,$=(t,e,r,s)=>{for(var n,i=s>1?void 0:s?_(e,r):e,a=t.length-1;a>=0;a--)(n=t[a])&&(i=(s?n(e,r,i):n(i))||i);return s&&i&&k(e,r,i),i};let C=class extends s.s{constructor(){super(...arguments),this.url="",this.title="",this.excerpt="",this.selected=!1,this.mode="none",this.last=!1}updated(t){t.get("selected")&&this.scrollIntoView({behavior:"smooth",block:"center"})}render(){return s.x`
      <button
        @click=${this._handleClick}
        class=${(0,l.e)({container:!0,selected:this.selected})}
      >
        ${"child"===this.mode?s.x`<canary-icon-tree ?last=${this.last}></canary-icon-tree>`:s.T}
        <div class="content">
          ${"child"!==this.mode?this.depth():s.T}
          <canary-snippet class="title" .value=${this.title}></canary-snippet>
          ${this.excerpt?s.x`<canary-snippet class="excerpt" .value=${this.excerpt}>
              </canary-snippet>`:s.T}
        </div>
        <div class=${(0,l.e)({arrow:!0,selected:this.selected})}>
          <div class="i-heroicons-chevron-right"></div>
        </div>
      </button>
    `}_handleClick(){this.dispatchEvent(new CustomEvent(u.MODAL_CLOSE_EVENT,{bubbles:!0,composed:!0})),window.location.href=this.url}depth(){const t=(0,c.b2)(this.url);return s.x`
      ${0==t.length?s.T:s.x`<div class="paths">
            ${t.map(((e,r)=>r<t.length-1?s.x`
                    <span class="path">${e}</span>
                    <span class="icon i-heroicons-chevron-right"></span>
                  `:s.x`<span class="path">${e}</span>`))}
          </div>`}
    `}};C.styles=[i.g,s.i`
      /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: icons */
.i-heroicons-chevron-right{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' color='var(--canary-color-gray-20)' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m8.25 4.5l7.5 7.5l-7.5 7.5'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:var(--canary-color-gray-20);width:1em;height:1em;}
/* layer: shortcuts */
.container{width:100%;}
@media (min-width: 640px){
.container{max-width:640px;}
}
@media (min-width: 768px){
.container{max-width:768px;}
}
@media (min-width: 1024px){
.container{max-width:1024px;}
}
@media (min-width: 1280px){
.container{max-width:1280px;}
}
@media (min-width: 1536px){
.container{max-width:1536px;}
}
/* layer: default */
.absolute{position:absolute;}
.relative{position:relative;}
.static{position:static;}
.block{display:block;}
.hidden{display:none;}
.flex{display:flex;}
.border{border-width:1px;};
    `,s.i`
      .container {
        position: relative;
        cursor: pointer;

        display: flex;
        flex-direction: row;
        align-items: center;

        width: 100%;
        padding: 6px 9px;
        border: 1px solid var(--canary-color-gray-90);
        border-radius: 8px;
        background-color: var(--canary-is-light, var(--canary-color-gray-95))
          var(--canary-is-dark, var(--canary-color-gray-80));
      }

      .container:hover,
      .selected {
        background-color: var(--canary-is-light, var(--canary-color-primary-95))
          var(--canary-is-dark, var(--canary-color-primary-70));
      }

      .selected .arrow,
      .container:hover .arrow {
        opacity: 0.5;
      }

      .arrow {
        position: absolute;
        top: 45%;
        right: 8px;
        opacity: 0;
      }

      .content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2px;

        overflow: hidden;
        text-overflow: ellipsis;
      }

      .paths {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 2px;
        margin-bottom: 2px;

        color: var(--canary-color-gray-30);
        font-size: 0.75rem;
      }

      .path {
        max-width: 120px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      button {
        cursor: pointer;
        width: 100%;
      }

      span.i-heroicons-document {
        width: 1.2em;
        margin-right: 6px;
        color: var(--canary-is-light, var(--canary-color-gray-80))
          var(--canary-is-dark, var(--canary-color-gray-50));
      }

      canary-snippet.title {
        --canary-snippet-color: var(--canary-color-gray-10);
        --canary-snippet-font-size: 0.875rem;
        --canary-snippet-font-weight: 500;
      }

      canary-snippet.excerpt {
        --canary-snippet-color: var(--canary-color-gray-20);
        --canary-snippet-font-size: 0.75rem;
        --canary-snippet-font-weight: 400;
      }
    `],$([(0,a.n)({type:String})],C.prototype,"url",2),$([(0,a.n)({type:String})],C.prototype,"title",2),$([(0,a.n)({type:String})],C.prototype,"excerpt",2),$([(0,a.n)({type:Boolean})],C.prototype,"selected",2),$([(0,a.n)({type:String})],C.prototype,"mode",2),$([(0,a.n)({type:Boolean})],C.prototype,"last",2),C=$([(0,n.t)("canary-reference")],C);var A=Object.defineProperty,E=Object.getOwnPropertyDescriptor;let T=class extends s.s{render(){return s.x`
      <div class="container">
        <div class="icon i-heroicons-exclamation-triangle"></div>
        <span>Sorry, something went wrong. Please try again later.</span>
      </div>
    `}};T.styles=[i.g,s.i`
      /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: icons */
.i-heroicons-exclamation-triangle{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' color='var(--canary-color-gray-20)' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0zM12 15.75h.007v.008H12z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:var(--canary-color-gray-20);width:1em;height:1em;}
/* layer: shortcuts */
.container{width:100%;}
@media (min-width: 640px){
.container{max-width:640px;}
}
@media (min-width: 768px){
.container{max-width:768px;}
}
@media (min-width: 1024px){
.container{max-width:1024px;}
}
@media (min-width: 1280px){
.container{max-width:1280px;}
}
@media (min-width: 1536px){
.container{max-width:1536px;}
}
/* layer: default */
.static{position:static;}
.flex{display:flex;}
.border{border-width:1px;};
    `,s.i`
      div.container {
        display: flex;
        gap: 8px;
        align-items: center;

        padding: 8px 16px;

        border-radius: 8px;
        border: 1px solid var(--canary-color-gray-95);

        color: var(--canary-color-gray-10);
        font-size: 0.875rem;
      }
    `],T=((t,e,r,s)=>{for(var n,i=s>1?void 0:s?E(e,r):e,a=t.length-1;a>=0;a--)(n=t[a])&&(i=(s?n(e,r,i):n(i))||i);return s&&i&&A(e,r,i),i})([(0,n.t)("canary-error")],T);var O=Object.defineProperty,M=Object.getOwnPropertyDescriptor,I=(t,e,r,s)=>{for(var n,i=s>1?void 0:s?M(e,r):e,a=t.length-1;a>=0;a--)(n=t[a])&&(i=(s?n(e,r,i):n(i))||i);return s&&i&&O(e,r,i),i};let z=class extends s.s{constructor(){super(...arguments),this.group=!1,this.references=[]}render(){return s.x`<div class="container">
      ${this.group?this._renderGroup():this._render()}
    </div>`}_render(){return s.x`${this.references.flatMap((({sub_results:t})=>t.map((({title:t,url:e,excerpt:r})=>s.x`
          <canary-reference
            url=${e}
            title=${t}
            excerpt=${(0,o.o)(r)}
            ?selected=${!1}
          ></canary-reference>
        `))))}`}_renderGroup(){return this.references.map((t=>null===t.title||t.sub_results.length<2?s.x`
          <div class="group single">
            ${t.sub_results.map((({url:t,title:e,excerpt:r})=>s.x`
                <canary-reference
                  mode="none"
                  url=${t}
                  title=${e}
                  excerpt=${(0,o.o)(r)}
                  ?selected=${!1}
                ></canary-reference>
              `))}
          </div>
        `:s.x`
        <div class="group multiple">
          <canary-reference
            mode="parent"
            url=${(0,c.Kl)(t.url)}
            title=${t.title}
            excerpt=${(0,o.o)(null==t?void 0:t.excerpt)}
          ></canary-reference>
          ${t.sub_results.map((({url:e,title:r,excerpt:n},i)=>s.x`
              <canary-reference
                mode="child"
                url=${e}
                title=${r}
                excerpt=${(0,o.o)(n)}
                ?selected=${!1}
                ?last=${i===t.sub_results.length-1}
              ></canary-reference>
            `))}
        </div>
      `))}};z.styles=s.i`
    .container {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .group {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .group.multiple {
      margin: 2px 0;
    }
  `,I([(0,a.n)({type:Boolean})],z.prototype,"group",2),I([(0,a.n)({type:Array})],z.prototype,"references",2),z=I([(0,n.t)("canary-search-references")],z)},1389:(t,e,r)=>{r.d(e,{e:()=>i});var s=r(4440),n=r(7319);const i=(0,n.e)(class extends n.i{constructor(t){var e;if(super(t),t.type!==n.t.ATTRIBUTE||"class"!==t.name||(null==(e=t.strings)?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var r,n;if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null==(r=this.nt)?void 0:r.has(t))&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const s of this.st)s in e||(i.remove(s),this.st.delete(s));for(const s in e){const t=!!e[s];t===this.st.has(s)||(null==(n=this.nt)?void 0:n.has(s))||(t?(i.add(s),this.st.add(s)):(i.remove(s),this.st.delete(s)))}return s.w}})},51:(t,e,r)=>{r.r(e),r.d(e,{CanaryModal:()=>y,MODAL_CLOSE_EVENT:()=>g});var s=r(4440),n=r(2697),i=r(4676),a=r(1674),o=r(9408),c=Object.defineProperty,l=Object.getOwnPropertyDescriptor,u=(t,e,r,s)=>{for(var n,i=s>1?void 0:s?l(e,r):e,a=t.length-1;a>=0;a--)(n=t[a])&&(i=(s?n(e,r,i):n(i))||i);return s&&i&&c(e,r,i),i};let h=class extends s.s{constructor(){super(...arguments),this.ref=(0,a.e)()}render(){return s.x`
      <dialog ${(0,a.n)(this.ref)} @click=${this.handleClick}>
        <slot></slot>
      </dialog>
    `}handleClick(t){const e=this.ref.value;(null==e?void 0:e.open)&&"DIALOG"===t.target.nodeName&&e.close()}};h.styles=[s.i`
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
    `],u([(0,i.n)({attribute:!1})],h.prototype,"ref",2),h=u([(0,n.t)("canary-dialog")],h);var d=Object.defineProperty,p=Object.getOwnPropertyDescriptor,b=(t,e,r,s)=>{for(var n,i=s>1?void 0:s?p(e,r):e,a=t.length-1;a>=0;a--)(n=t[a])&&(i=(s?n(e,r,i):n(i))||i);return s&&i&&d(e,r,i),i};const g="modal-close";let y=class extends s.s{constructor(){super(...arguments),this.open=!1,this._ref=(0,a.e)()}render(){return s.x`
      <slot name="trigger" @click=${this._handleOpen}></slot>
      <canary-dialog .ref=${this._ref}>
        <slot name="content" @modal-close=${this._handleModalClose}></slot>
      </canary-dialog>
    `}_handleOpen(){var t;null==(t=this._ref.value)||t.showModal()}_handleModalClose(){var t;null==(t=this._ref.value)||t.close()}};y.styles=[o.w,s.i`
      ::slotted([slot="trigger"]) {
        cursor: pointer;
      }
    `],b([(0,i.n)({type:Boolean})],y.prototype,"open",2),y=b([(0,n.t)("canary-modal")],y)},3277:(t,e,r)=>{r.d(e,{c:()=>n});var s=r(5793);function n({context:t,subscribe:e}){return(r,n)=>{"object"==typeof n?n.addInitializer((function(){new s.s(this,{context:t,callback:t=>{r.set.call(this,t)},subscribe:e})})):r.constructor.addInitializer((r=>{new s.s(r,{context:t,callback:t=>{r[n]=t},subscribe:e})}))}}},5793:(t,e,r)=>{r.d(e,{s:()=>n});var s=r(699);class n{constructor(t,e,r,s){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(t,e)=>{this.unsubscribe&&(this.unsubscribe!==e&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=t,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(t,e)),this.unsubscribe=e},this.host=t,void 0!==e.context){const t=e;this.context=t.context,this.callback=t.callback,this.subscribe=t.subscribe??!1}else this.context=e,this.callback=r,this.subscribe=s??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new s.s(this.context,this.t,this.subscribe))}}},8030:(t,e,r)=>{r.d(e,{i:()=>a});var s=r(699);class n{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,e=!1){const r=e||!Object.is(t,this.o);this.o=t,r&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:e}]of this.subscriptions)t(this.o,e)},void 0!==t&&(this.value=t)}addCallback(t,e,r){if(!r)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:e});const{disposer:s}=this.subscriptions.get(t);t(this.value,s)}clearCallbacks(){this.subscriptions.clear()}}class i extends Event{constructor(t){super("context-provider",{bubbles:!0,composed:!0}),this.context=t}}class a extends n{constructor(t,e,r){var n,i;super(void 0!==e.context?e.initialValue:r),this.onContextRequest=t=>{const e=t.composedPath()[0];t.context===this.context&&e!==this.host&&(t.stopPropagation(),this.addCallback(t.callback,e,t.subscribe))},this.onProviderRequest=t=>{const e=t.composedPath()[0];if(t.context!==this.context||e===this.host)return;const r=new Set;for(const[n,{consumerHost:i}]of this.subscriptions)r.has(n)||(r.add(n),i.dispatchEvent(new s.s(this.context,n,!0)));t.stopPropagation()},this.host=t,void 0!==e.context?this.context=e.context:this.context=e,this.attachListeners(),null==(i=(n=this.host).addController)||i.call(n,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new i(this.context))}}},699:(t,e,r)=>{r.d(e,{s:()=>s});let s=class extends Event{constructor(t,e,r){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.callback=e,this.subscribe=r??!1}}},6468:(t,e,r)=>{r.d(e,{JF:()=>u,LL:()=>i,br:()=>n,iK:()=>c,pC:()=>a,qD:()=>o,vJ:()=>l});const s=t=>Symbol(t),n=s("theme"),i=s("operation"),a=s("mode"),o=s("query"),c=s("search"),l=s("ask"),u=s("tabs")},7319:(t,e,r)=>{r.d(e,{e:()=>n,i:()=>i,t:()=>s});const s={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},n=t=>(...e)=>({_$litDirective$:t,values:e});class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},8857:(t,e,r)=>{r.d(e,{o:()=>n});var s=r(4440);const n=t=>t??s.T},1660:(t,e,r)=>{r.d(e,{A:()=>l,S:()=>c,T:()=>a});var s=r(8030),n=r(4932),i=r(6468);const a={INITIAL:0,PENDING:1,COMPLETE:2,ERROR:3},o="manager";class c{constructor(t,e){this._abortController=new AbortController,this._callId=0,this._initialState={status:a.INITIAL,result:{search:[],suggestion:{questions:[]}}},this._options=e,this._ctx=new s.i(t,{context:i.iK,initialValue:this._initialState})}get ctx(){return this._ctx.value}set ctx(t){this._ctx.setValue(t)}abort(){var t;this.ctx.status===a.PENDING&&(null==(t=this._abortController)||t.abort(o))}async run(t,e){var r;if(!e.search)return;this.ctx.status===a.PENDING&&this._abortController.abort(o),this.transition({status:a.PENDING});const s=++this._callId;if(null==(r=e.beforeSearch)||r.call(e,t),await(0,n.cM)(this._options.debounceMs),s===this._callId){this._abortController=new AbortController;try{const r=await e.search({query:t},this._abortController.signal);this.transition({status:a.COMPLETE,result:r})}catch(i){if(i===o)return void this.transition({status:a.INITIAL});console.error(i),this.transition({status:a.ERROR})}}else this.transition({status:a.INITIAL})}transition(t){this.ctx={...this.ctx,...t}}}class l{constructor(t){this._abortController=new AbortController,this._initialState={status:a.INITIAL,response:"",references:[],progress:!1,query:""},this._ctx=new s.i(t,{context:i.vJ,initialValue:this._initialState})}abort(){var t;this.ctx.status===a.PENDING&&(null==(t=this._abortController)||t.abort(o))}get ctx(){return this._ctx.value}set ctx(t){this._ctx.setValue(t)}async run(t,e,r){if(r.ask&&0!==t.length){this.ctx.status===a.PENDING&&this._abortController.abort(o),this.transition({...this._initialState,status:a.PENDING,query:t}),this._abortController=new AbortController;try{await r.ask({id:crypto.randomUUID(),query:t,pattern:e},this._handleDelta.bind(this),this._abortController.signal),this.transition({status:a.COMPLETE,progress:!1})}catch(s){if(s===o)return;console.error(s),this.transition({status:a.ERROR})}}}_handleDelta(t){if("progress"===t.type){const e=this.ctx.response+t.content;this.transition({response:e,progress:!0})}"complete"===t.type&&this.transition({response:t.content,progress:!1}),"references"===t.type&&this.transition({references:t.items})}transition(t){this.ctx={...this.ctx,...t}}}},1674:(t,e,r)=>{r.d(e,{e:()=>d,n:()=>g});var s=r(4440),n=r(7319);const i=(t,e)=>{var r;const s=t._$AN;if(void 0===s)return!1;for(const n of s)null==(r=n._$AO)||r.call(n,e,!1),i(n,e);return!0},a=t=>{let e,r;do{if(void 0===(e=t._$AM))break;r=e._$AN,r.delete(t),t=e}while(0===(null==r?void 0:r.size))},o=t=>{for(let e;e=t._$AM;t=e){let r=e._$AN;if(void 0===r)e._$AN=r=new Set;else if(r.has(t))break;r.add(t),u(e)}};function c(t){void 0!==this._$AN?(a(this),this._$AM=t,o(this)):this._$AM=t}function l(t,e=!1,r=0){const s=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(e)if(Array.isArray(s))for(let o=r;o<s.length;o++)i(s[o],!1),a(s[o]);else null!=s&&(i(s,!1),a(s));else i(this,t)}const u=t=>{t.type==n.t.CHILD&&(t._$AP??(t._$AP=l),t._$AQ??(t._$AQ=c))};class h extends n.i{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,r){super._$AT(t,e,r),o(this),this.isConnected=t._$AU}_$AO(t,e=!0){var r,s;t!==this.isConnected&&(this.isConnected=t,t?null==(r=this.reconnected)||r.call(this):null==(s=this.disconnected)||s.call(this)),e&&(i(this,t),a(this))}setValue(t){if(void 0===this._$Ct.strings)this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}const d=()=>new p;class p{}const b=new WeakMap,g=(0,n.e)(class extends h{render(t){return s.T}update(t,[e]){var r;const n=e!==this.Y;return n&&void 0!==this.Y&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.Y=e,this.ht=null==(r=t.options)?void 0:r.host,this.rt(this.ct=t.element)),s.T}rt(t){if(this.isConnected||(t=void 0),"function"==typeof this.Y){const e=this.ht??globalThis;let r=b.get(e);void 0===r&&(r=new WeakMap,b.set(e,r)),void 0!==r.get(this.Y)&&this.Y.call(this.ht,void 0),r.set(this.Y,t),void 0!==t&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){var t,e;return"function"==typeof this.Y?null==(t=b.get(this.ht??globalThis))?void 0:t.get(this.Y):null==(e=this.Y)?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})},4715:(t,e,r)=>{r.d(e,{r:()=>n});var s=r(4676);function n(t){return(0,s.n)({...t,state:!0,attribute:!1})}},4932:(t,e,r)=>{r.d(e,{Kl:()=>i,b2:()=>s,cM:()=>n,vx:()=>a});const s=t=>a(t).pathname.split("/").map(((t,e)=>{const r=t.replace(/[-_]/g," ");return r.charAt(0).toUpperCase()+r.slice(1)})).map((t=>t.includes("#")?t.split("#")[0]:t)).map((t=>t.endsWith(".html")?t.replace(".html",""):t)).map(decodeURIComponent).filter(Boolean).slice(-4),n=async t=>new Promise((e=>setTimeout(e,t))),i=t=>{try{const{pathname:e,search:r}=a(t);return e+r}catch{return t}},a=t=>{const e=t.startsWith("http")?t:t.startsWith("/")?`https://example.com${t}`:`https://example.com/${t}`;return new URL(e)}}}]);