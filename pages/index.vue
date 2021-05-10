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
          name: "description",
          content: "新北市,台北,北海岸,龍洞,和美國小,東北角,龍洞自由潛水,自由潛水,自由潛水課程,自由潛水教學,自由潛水體驗,小班制教學,AIDA1,AIDA2,AIDA3"
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
