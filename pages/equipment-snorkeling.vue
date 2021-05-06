<template>
  <div class="main-container">
    <TheHeader />
    <OffCanvasMobileMenu />
    <Breadcrumb :items="items"
                title="歡 迎 來 到 裝 備 租 借 中 心"
                backgroundUrl="/images/banner-2.jpg" />
    <EquipmentDetail :equipments="equipments" />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import OffCanvasMobileMenu from "@/components/OffCanvasMobileMenu";
import Breadcrumb from "@/components/Breadcrumb";
import EquipmentDetail from "@/components/EquipmentDetail";
import TheFooter from "@/components/TheFooter";

export default {
  async asyncData(context) {
    try {
      const { data } = await context.$axios.get(
        "http://localhost:8081/api/snorkeling"
      );
      return { equipments: data.snorkelings };
    } catch (e) {
      console.log(e);
    }
  },
  head() {
    return {
      title: "Equipment-Snorkeling",
      meta: [
        {
          hid:
            "台北龍洞浮潛 裝備租借 和美國小 龍洞四號 體驗浮潛 龍洞岬 浮潛中心",
          name: "description",
          content:
            "台北龍洞浮潛 裝備租借 和美國小 龍洞四號 體驗浮潛 龍洞岬 浮潛中心"
        }
      ]
    };
  },
  components: {
    TheHeader,
    OffCanvasMobileMenu,
    Breadcrumb,
    EquipmentDetail,
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
          to: "/equipment"
        },
        {
          text: "浮潛裝備",
          active: true
        }
      ]
    };
  }
};
</script>
