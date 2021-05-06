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
            "台北龍洞浮潛 跳水 自由潛水課程 裝備租借 和美國小 龍洞四號 體驗浮潛 體驗自由潛水 沖洗 石花洞 龍洞岬 浮潛中心",
          name: "description",
          content:
            "台北龍洞浮潛 跳水 自由潛水課程 裝備租借 和美國小 龍洞四號 體驗浮潛 體驗自由潛水 沖洗 石花洞 龍洞岬 浮潛中心"
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
