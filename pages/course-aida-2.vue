<template>
  <div class="main-container">
    <TheHeader />
    <OffCanvasMobileMenu />
    <Breadcrumb :items="items"
                title="歡 迎 來 到 中 階 自 由 潛 水 課 程"
                backgroundUrl="/images/banner-2.jpg" />
    <DivingDetail :course="course" />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import OffCanvasMobileMenu from "@/components/OffCanvasMobileMenu";
import Breadcrumb from "@/components/Breadcrumb";
import DivingDetail from "@/components/DivingDetail";
import TheFooter from "@/components/TheFooter";

export default {
  head() {
    return {
      title: "Course-Aida-2",
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
    DivingDetail,
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
          to: "/course"
        },
        {
          text: "AIDA 2 課程",
          active: true
        }
      ],
      course: {
        title: "AIDA 2",
        text:
          "課程將針對自由潛水初學者正式進入開放海域所設計的基礎課程，建立安全潛水的基本知識與能力。所有自由潛水的進步方式，練習技巧，基礎海況分析...等，都將在課堂中一一傳授與講解。",
        day: "3",
        price: "13,500",
        contents: ["室內理論課程", "泳池基本技巧課程", "開放水域課程"],
        items: ["自由潛水裝備費用", "保險費", "泳池費", "AIDA證照費"],
        url:
          "https://docs.google.com/forms/d/e/1FAIpQLSeNVw29UlZXisAqjGakCzAmT07VwNBamhEV48Nr5BUs2T2Sqg/viewform"
      }
    };
  }
};
</script>
