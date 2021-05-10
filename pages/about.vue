<template>
  <div class="main-container">
    <TheHeader />
    <OffCanvasMobileMenu />
    <Breadcrumb :items="items"
                title="龍 洞 岬 裝 備 中 心"
                backgroundUrl="/images/banner-2.jpg" />
    <AboutTwo class="section-padding-top about-section-padding-bottom-200" />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import OffCanvasMobileMenu from "@/components/OffCanvasMobileMenu";
import Breadcrumb from "@/components/Breadcrumb";
import AboutTwo from "@/components/AboutTwo";
import TheFooter from "@/components/TheFooter";

export default {
  head() {
    return {
      title: "About-Us",
      meta: [
        {
          name: "description",
          content: "新北市,台北,北海岸,龍洞,和美國小,龍洞自由潛水,自由潛水,自由潛水課程,自由潛水教學,自由潛水體驗,小班制教學,AIDA1,AIDA2,AIDA3"
        }
      ]
    };
  },
  components: {
    TheHeader,
    OffCanvasMobileMenu,
    Breadcrumb,
    AboutTwo,
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
          text: "關於我們",
          active: true
        }
      ]
    };
  }
};
</script>
