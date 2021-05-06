<template>
  <div class="main-container">
    <TheHeader />
    <OffCanvasMobileMenu />
    <HeroSlider />
    <AboutOne />
    <FeatureCourse :style="{ backgroundColor: '#f8faff' }" />
    <CallToAction />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import OffCanvasMobileMenu from "@/components/OffCanvasMobileMenu";
import HeroSlider from "@/components/HeroSlider";
import AboutOne from "@/components/AboutOne";
import FeatureCourse from "@/components/FeatureCourse";
import CallToAction from "@/components/CallToAction";
import TheFooter from "@/components/TheFooter";

export default {
  head() {
    return {
      title: "Home Page",
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
    HeroSlider,
    AboutOne,
    FeatureCourse,
    CallToAction,
    TheFooter
  }
};
</script>
