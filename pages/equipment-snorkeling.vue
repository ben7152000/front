<template>
  <div class="main-container">
    <TheHeader />
    <OffCanvasMobileMenu />
    <Breadcrumb :items="items"
                title="We are an agency located in New York"
                backgroundUrl="https://picsum.photos/1920/540?random=8" />
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
      const { data } = await context.$axios.get("http://localhost:3000/api/snorkeling")
      return { equipments: data.snorkelings }
    } catch (e) {
      console.log(e)
    }
  },
  head() {
    return {
      title: "Equipment-Snorkeling"
    }
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
      equipments: [],
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
    }
  }
}
</script>
