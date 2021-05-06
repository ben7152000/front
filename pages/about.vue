<template>
    <div class="main-container">
        <TheHeader />
        <OffCanvasMobileMenu />
        <Breadcrumb
            :items="items"
            title="龍 洞 岬 裝 備 中 心"
            backgroundUrl="/images/banner-2.jpg"
        />
        <AboutTwo
            class="section-padding-top about-section-padding-bottom-200"
        />
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
                hid: '台北龍洞浮潛 跳水 自由潛水課程 裝備租借 和美國小 龍洞四號 體驗浮潛 體驗自由潛水 沖洗 石花洞 龍洞岬 浮潛中心', 
                name: 'description', 
                content: '台北龍洞浮潛 跳水 自由潛水課程 裝備租借 和美國小 龍洞四號 體驗浮潛 體驗自由潛水 沖洗 石花洞 龍洞岬 浮潛中心' 
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
