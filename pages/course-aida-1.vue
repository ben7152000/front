<template>
    <div class="main-container">
        <TheHeader />
        <OffCanvasMobileMenu />
        <Breadcrumb
            :items="items"
            title="歡 迎 來 到 初 階 自 由 潛 水 課 程"
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
            title: "Course-Aida-1",
            meta: [
                {
                    name: "description",
                    content:
                        "新北市,台北,北海岸,龍洞,和美國小,東北角,龍洞自由潛水,自由潛水,自由潛水課程,自由潛水教學,自由潛水體驗,小班制教學,AIDA1,AIDA2,AIDA3",
                },
            ],
        };
    },
    components: {
        TheHeader,
        OffCanvasMobileMenu,
        Breadcrumb,
        DivingDetail,
        TheFooter,
    },
    data() {
        return {
            items: [
                {
                    text: "首頁",
                    to: "/",
                },
                {
                    text: "課程介紹",
                    to: "/course",
                },
                {
                    text: "AIDA 1 課程",
                    active: true,
                },
            ],
            course: {
                title: "AIDA 1",
                text: "為你揭開大海的神秘面紗，讓你體驗從未體驗過的海底世界本課程將使你有信心而且安全舒適的探索水下世界。課程中將帶你瞭解與感受自由潛水與眾不同的魅力。",
                day: "1 天",
                price: "5,500",
                contents: ["理論課程", "開放海域課程"],
                items: ["自由潛水裝備費用", "保險費", "AIDA證照費"],
                url: "https://docs.google.com/forms/d/e/1FAIpQLSespM5musgNc23m0syiGZTtW4bYvGlVozhJn_mZKzwu0BtbTA/viewform",
            },
        };
    },
};
</script>
