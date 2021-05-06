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
          hid:
            "台北龍洞浮潛,跳水,自由潛水課程,自由潛水教學,裝備租借,和美國小,龍洞四號,體驗浮潛,體驗自由潛水,沖洗,石花洞,龍洞岬,浮潛中心, freediving,,長蛙,課程,教學,台灣,北海岸自由潛水教學,龍洞自由潛水課程,租借長蛙,最好的長蛙,買自由潛水長蛙,買長蛙,哪裡買長蛙,長蛙,蛙鞋,自由潛水蛙鞋,學自由潛水,學自潛,買蛙鞋,蛙鞋哪裡買,好的長蛙,浮潛,龍洞第一排,最佳位置,裝備哪裡借,哪裡可以沖身體,最佳環境,北海岸自由潛,自由潛水,龍洞自由潛水,新北市自由潛水,台北自由潛水,北部自由潛水",
          name: "description",
          content:
            "台北龍洞浮潛,跳水,自由潛水課程,自由潛水教學,裝備租借,和美國小,龍洞四號,體驗浮潛,體驗自由潛水,沖洗,石花洞,龍洞岬,浮潛中心, freediving,,長蛙,課程,教學,台灣,北海岸自由潛水教學,龍洞自由潛水課程,租借長蛙,最好的長蛙,買自由潛水長蛙,買長蛙,哪裡買長蛙,長蛙,蛙鞋,自由潛水蛙鞋,學自由潛水,學自潛,買蛙鞋,蛙鞋哪裡買,好的長蛙,浮潛,龍洞第一排,最佳位置,裝備哪裡借,哪裡可以沖身體,最佳環境,北海岸自由潛,自由潛水,龍洞自由潛水,新北市自由潛水,台北自由潛水,北部自由潛水"
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
