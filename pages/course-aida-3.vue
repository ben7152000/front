<template>
    <div class="main-container">
        <TheHeader />
        <OffCanvasMobileMenu />
        <Breadcrumb
            :items="items"
            title="歡 迎 來 到 高 階 自 由 潛 水 課 程"
            backgroundUrl="/images/banner-2.jpg"
        />
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
            title: "Course-Aida-3"
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
                    text: "AIDA 3 課程",
                    active: true
                }
            ],
            course: {
                title: "AIDA 3",
                text:
                    "強化下潛技巧與潛水認知進階的課程將合理運用所學到的每一個技巧，建立安全快速的進步方式與習慣，使平壓技巧與身體姿勢更佳順暢，最後身理與心理都能適應，達到每一次的下潛都能輕鬆與享受",
                day: "4",
                price: "17,000",
                contents: ["室內理論課程", "泳池基本技巧課程", "開放水域課程"],
                items: ["自由潛水裝備費用", "保險費", "泳池費", "AIDA證照費"],
                url:
                    "https://docs.google.com/forms/d/e/1FAIpQLSeMdfg0b716J6v16nKodM0ukRW4jsngs7IwMHLBEHggdRF2pA/viewform"
            }
        };
    }
};
</script>
