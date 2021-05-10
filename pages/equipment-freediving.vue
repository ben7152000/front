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
        "http://localhost:8081/api/freediving"
      );
      return { equipments: data.freedivings };
    } catch (e) {
      console.log(e);
    }
  },
  head() {
    return {
      title: "Equipment-Freediving",
      meta: [
        {
          name: "description",
          content: "新北市,台北,北海岸,龍洞,和美國小,東北角,龍洞自由潛水,自由潛水,自由潛水課程,自由潛水教學,自由潛水體驗,小班制教學,AIDA1,AIDA2,AIDA3"
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
          text: "自潛裝備",
          active: true
        }
      ]
    };
  }
};
</script>
