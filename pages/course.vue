<template>
  <div class="main-container">
    <TheHeader />
    <OffCanvasMobileMenu />
    <Breadcrumb :items="items"
                title="龍 洞 岬 裝 備 中 心"
                backgroundUrl="/images/banner-2.jpg" />
    <FeatureCourse />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import OffCanvasMobileMenu from "@/components/OffCanvasMobileMenu";
import Breadcrumb from "@/components/Breadcrumb";
import FeatureCourse from "@/components/FeatureCourse";
import TheFooter from "@/components/TheFooter";

export default {
  head() {
    return {
      title: "Course",
      meta: [
        {
          hid:
            "台北龍洞浮潛,跳水,自由潛水課程,自由潛水教學,裝備租借,和美國小,龍洞四號,體驗浮潛,體驗自由潛水,沖洗,石花洞,龍洞岬,浮潛中心, freediving,,長蛙,課程,教學,台灣,北海岸自由潛水教學,龍洞自由潛水課程,租借長蛙,最好的長蛙,買自由潛水長蛙,買長蛙,哪裡買長蛙,長蛙,蛙鞋,自由潛水蛙鞋,學自由潛水,學自潛,買蛙鞋,蛙鞋哪裡買,好的長蛙,浮潛,龍洞第一排,最佳位置,裝備哪裡借,哪裡可以沖身體,最佳環境,北海岸自由潛,自由潛水,龍洞自由潛水,新北市自由潛水,台北自由潛水,北部自由潛水,專業教練小班制教學,小班教學,東北角龍洞灣,龍洞灣,龍洞灣自由潛水,極限運動,AIDA1,AIDA2,AIDA3,國際證照,AIDA,自由潛水AIDA,自由潛水課程報名",
          name: "description",
          content:
            "台北龍洞浮潛,跳水,自由潛水課程,自由潛水教學,裝備租借,和美國小,龍洞四號,體驗浮潛,體驗自由潛水,沖洗,石花洞,龍洞岬,浮潛中心, freediving,,長蛙,課程,教學,台灣,北海岸自由潛水教學,龍洞自由潛水課程,租借長蛙,最好的長蛙,買自由潛水長蛙,買長蛙,哪裡買長蛙,長蛙,蛙鞋,自由潛水蛙鞋,學自由潛水,學自潛,買蛙鞋,蛙鞋哪裡買,好的長蛙,浮潛,龍洞第一排,最佳位置,裝備哪裡借,哪裡可以沖身體,最佳環境,北海岸自由潛,自由潛水,龍洞自由潛水,新北市自由潛水,台北自由潛水,北部自由潛水,專業教練小班制教學,小班教學,東北角龍洞灣,龍洞灣,龍洞灣自由潛水,極限運動,AIDA1,AIDA2,AIDA3,國際證照,AIDA,自由潛水AIDA,自由潛水課程報名"
        }
      ]
    };
  },
  components: {
    TheHeader,
    OffCanvasMobileMenu,
    Breadcrumb,
    FeatureCourse,
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
          text: "課程介紹",
          active: true
        }
      ]
    };
  }
};
</script>
