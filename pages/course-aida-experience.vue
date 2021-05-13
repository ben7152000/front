<template>
  <div class="main-container">
    <TheHeader />
    <OffCanvasMobileMenu />
    <Breadcrumb :items="items"
                title="歡 迎 來 到 自 由 潛 水 體 驗 課 程"
                backgroundUrl="/images/banner-2.jpg" />
    <DivingDetailExperience :course="course" />
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
      title: "Course-Aida-Experience",
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
          text: "AIDA 體驗",
          active: true
        }
      ],
      course: {
        title: "AIDA 體驗",
        text:
          "你還在猶豫嗎？害怕踩不到底的海域又不太會游泳嗎？對自由潛水有興趣但又怕報名後才發現和自己想像的不一樣？那就快來參加體驗！體驗完全不需要有壓力，帶著輕鬆的心情來玩吧！",
        day: "2 小時",
        price: "800",
        contents: ["平壓練習", "蛙鞋使用", "裝備認知"],
        items: ["保險費", "教練費", "場地費", "盥洗費"],
        url:
          "https://docs.google.com/forms/d/e/1FAIpQLSdPixtdsvfGYrmuXZjw-qqA1YejdqcVcannUz_OfL8K5CmMdg/viewform"
      }
    };
  }
};
</script>
