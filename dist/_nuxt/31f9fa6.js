(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{311:function(t,e,r){"use strict";r.r(e);var n={head:function(){return{title:"Breadcrumb"}},props:["items","title","backgroundUrl"]},l=r(47),component=Object(l.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-title-section section-padding-top bg-cover",style:{backgroundImage:"url("+this.backgroundUrl+")"},attrs:{"data-overlay":"0.7"}},[e("div",{staticClass:"page-title"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"title"},[this._v(this._s(this.title))])])]),this._v(" "),e("div",{staticClass:"page-breadcrumb position-static"},[e("div",{staticClass:"container"},[e("b-breadcrumb",{staticClass:"page-breadcrumb",attrs:{items:this.items}})],1)])])}),[],!1,null,null,null);e.default=component.exports},334:function(t,e,r){"use strict";r.r(e);var n=r(312),l=r(323),o={head:function(){return{title:"Feature-Equipment"}},props:["addClassName"],components:{SectionTitle:n.default,FeatureCard:l.default},data:function(){return{features:[{title:"浮潛裝備",text:"First impressions count! Make sure your brand works for you. We offer digital marketing.",image:"https://picsum.photos/250/250?random=1",url:"/equipment-snorkeling"},{title:"自潛裝備",text:"First impressions count! Make sure your brand works for you. We offer digital marketing.",image:"https://picsum.photos/250/250?random=2",url:"/equipment-freediving"}]}}},c=r(47),component=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"section-padding-t90-b100"},[e("div",{staticClass:"container"},[e("SectionTitle",{attrs:{title:"We create a unique action plan for brands","sub-title":"Get your company heading in the right direction with our digital marketing strategist","add-class-name":"mb-60"}}),this._v(" "),e("div",{staticClass:"row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mtn-30 justify-content-center"},this._l(this.features,(function(t,r){return e("FeatureCard",{key:r,attrs:{title:t.title,text:t.text,image:t.image,url:t.url}})})),1)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SectionTitle:r(312).default,FeatureCard:r(323).default})},351:function(t,e,r){"use strict";r.r(e);var n=r(308),l=r(309),o=r(311),c=r(334),d=r(310),m={head:function(){return{title:"Equipment"}},components:{TheHeader:n.default,OffCanvasMobileMenu:l.default,Breadcrumb:o.default,FeatureEquipment:c.default,TheFooter:d.default},data:function(){return{items:[{text:"首頁",to:"/"},{text:"裝備租借",active:!0}]}}},f=r(47),component=Object(f.a)(m,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main-container"},[e("TheHeader"),this._v(" "),e("OffCanvasMobileMenu"),this._v(" "),e("Breadcrumb",{attrs:{items:this.items,title:"We are an agency located in New York",backgroundUrl:"https://picsum.photos/1920/540?random=9"}}),this._v(" "),e("FeatureEquipment"),this._v(" "),e("TheFooter")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TheHeader:r(308).default,OffCanvasMobileMenu:r(309).default,Breadcrumb:r(311).default,FeatureEquipment:r(334).default,TheFooter:r(310).default})}}]);