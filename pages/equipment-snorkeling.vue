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
            "台北龍洞浮潛,跳水,自由潛水課程,自由潛水教學,裝備租借,和美國小,龍洞四號,體驗浮潛,體驗自由潛水,沖洗,石花洞,龍洞岬,浮潛中心, freediving,,長蛙,課程,教學,台灣,北海岸自由潛水教學,龍洞自由潛水課程,租借長蛙,最好的長蛙,買自由潛水長蛙,買長蛙,哪裡買長蛙,長蛙,蛙鞋,自由潛水蛙鞋,學自由潛水,學自潛,買蛙鞋,蛙鞋哪裡買,好的長蛙,浮潛,龍洞第一排,最佳位置,裝備哪裡借,哪裡可以沖身體,最佳環境",
          name: "description",
          content:
            "台北龍洞浮潛,跳水,自由潛水課程,自由潛水教學,裝備租借,和美國小,龍洞四號,體驗浮潛,體驗自由潛水,沖洗,石花洞,龍洞岬,浮潛中心, freediving,,長蛙,課程,教學,台灣,北海岸自由潛水教學,龍洞自由潛水課程,租借長蛙,最好的長蛙,買自由潛水長蛙,買長蛙,哪裡買長蛙,長蛙,蛙鞋,自由潛水蛙鞋,學自由潛水,學自潛,買蛙鞋,蛙鞋哪裡買,好的長蛙,浮潛,龍洞第一排,最佳位置,裝備哪裡借,哪裡可以沖身體,最佳環境"
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
