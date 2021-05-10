<template>
  <div class="main-container">
    <TheHeader />
    <OffCanvasMobileMenu />
    <Breadcrumb :items="items"
                title="龍 洞 岬 裝 備 中 心"
                backgroundUrl="/images/banner-2.jpg" />
    <CallToAction />
    <GoogleMap />
    <!-- <ContactForm /> -->
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import OffCanvasMobileMenu from "@/components/OffCanvasMobileMenu";
import Breadcrumb from "@/components/Breadcrumb";
import CallToAction from "@/components/CallToAction";
import GoogleMap from "@/components/GoogleMap";
import ContactForm from "@/components/ContactForm";
import TheFooter from "@/components/TheFooter";

export default {
  head() {
    return {
      title: "Contact-Us",
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
    CallToAction,
    GoogleMap,
    ContactForm,
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
          text: "聯絡我們",
          active: true
        }
      ]
    };
  }
};
</script>
