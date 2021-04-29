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
      title: "Equipment"
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
