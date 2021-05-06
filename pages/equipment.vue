<template>
  <div class="main-container">
    <TheHeader />
    <OffCanvasMobileMenu />
    <Breadcrumb :items="items"
                   title="龍 洞 岬 裝 備 中 心"
                   backgroundUrl="/images/banner-2.jpg" />
    <FeatureEquipment />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import OffCanvasMobileMenu from "@/components/OffCanvasMobileMenu";
import Breadcrumb from "@/components/Breadcrumb";
import FeatureEquipment from "@/components/FeatureEquipment";
import TheFooter from "@/components/TheFooter";

export default {
  head() {
    return {
      title: "Equipment",
      meta: 
        [
          { 
            hid: '台北龍洞浮潛 跳水 裝備租借 和美國小 龍洞四號 體驗浮潛 龍洞岬 浮潛中心', 
            name: 'description', 
            content: '台北龍洞浮潛 跳水 裝備租借 和美國小 龍洞四號 體驗浮潛 龍洞岬 浮潛中心' 
          }
        ]
    };
  },
  components: {
    TheHeader,
    OffCanvasMobileMenu,
    Breadcrumb,
    FeatureEquipment,
    TheFooter
  },
  data() {
    return {
      items: [
        {
          text: "首頁",
          to: "/"
        },
        {
          text: "裝備租借",
          active: true
        }
      ]
    };
  }
};
</script>
