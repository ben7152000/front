(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{381:function(e,t,n){"use strict";n.r(t);n(60);var r=n(21),o=n(338),l=n(339),c=n(341),d=n(357),f=n(340),m={asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$axios.get("http://localhost:3000/api/freediving");case 3:return n=t.sent,data=n.data,t.abrupt("return",{equipments:data.freedivings});case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},head:function(){return{title:"Equipment-Freediving"}},components:{TheHeader:o.default,OffCanvasMobileMenu:l.default,Breadcrumb:c.default,EquipmentDetail:d.default,TheFooter:f.default},data:function(){return{items:[{text:"首頁",to:"/"},{text:"裝備租借",to:"/equipment"},{text:"自潛裝備",active:!0}]}}},h=n(48),component=Object(h.a)(m,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"main-container"},[t("TheHeader"),this._v(" "),t("OffCanvasMobileMenu"),this._v(" "),t("Breadcrumb",{attrs:{items:this.items,title:"歡 迎 來 到 裝 備 租 借 中 心",backgroundUrl:"/images/banner-2.jpg"}}),this._v(" "),t("EquipmentDetail",{attrs:{equipments:this.equipments}}),this._v(" "),t("TheFooter")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{TheHeader:n(338).default,OffCanvasMobileMenu:n(339).default,Breadcrumb:n(341).default,EquipmentDetail:n(357).default,TheFooter:n(340).default})}}]);