"use strict";(self.webpackChunkwake_docs=self.webpackChunkwake_docs||[]).push([[6535],{6535:(e,r,s)=>{s.r(r),s.d(r,{CanarySearchResults:()=>d});var t=s(4440),a=s(2697),c=s(4676),n=s(4715),o=s(3277),i=s(6468),h=s(1660),p=(s(896),Object.defineProperty),u=Object.getOwnPropertyDescriptor,l=(e,r,s,t)=>{for(var a,c=t>1?void 0:t?u(r,s):r,n=e.length-1;n>=0;n--)(a=e[n])&&(c=(t?a(r,s,c):a(c))||c);return t&&c&&p(r,s,c),c};let d=class extends t.s{constructor(){super(...arguments),this.header="",this.group=!1}render(){if(!this._search)return t.T;const e=Object.values(this._search.result.search).flatMap((({hits:e})=>e));return 0===e.length?t.T:t.x`
      ${this._search.status===h.T.ERROR?t.x`<canary-error></canary-error>`:t.x` <div class="container">
              <canary-search-references
                .group=${this.group}
                .references=${e}
              ></canary-search-references>
            </div>`}
          </div>
      </div>
    `}};d.styles=t.i`
    .container {
      display: flex;
      flex-direction: column;
    }
  `,l([(0,c.n)({type:String})],d.prototype,"header",2),l([(0,c.n)({type:Boolean})],d.prototype,"group",2),l([(0,o.c)({context:i.iK,subscribe:!0}),(0,n.r)()],d.prototype,"_search",2),d=l([(0,a.t)("canary-search-results")],d)}}]);