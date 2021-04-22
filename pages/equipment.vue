<template>
  <div class="main-container">
    <TheHeader />
    <OffCanvasMobileMenu />
    <Breadcrumb :items="items"
                   title="We are an agency located in New York"
                   backgroundUrl="https://picsum.photos/1920/540?random=9" />
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
