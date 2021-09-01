<template>
    <div class="main-container">
        <TheHeader />
        <OffCanvasMobileMenu />
        <Breadcrumb
            :items="items"
            title="龍 洞 岬 裝 備 中 心"
            backgroundUrl="/images/banner-2.jpg"
        />
        <SnorkelDetail :course="course" />
        <TheFooter />
    </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import OffCanvasMobileMenu from "@/components/OffCanvasMobileMenu";
import Breadcrumb from "@/components/Breadcrumb";
import SnorkelDetail from "@/components/SnorkelDetail";
import TheFooter from "@/components/TheFooter";

export default {
    name: "snorkel",
    head() {
        return {
            title: "Snorkel",
            meta: [
                {
                    name: "description",
                    content:
                        "新北市,台北,北海岸,龍洞,和美國小,東北角,龍洞自由潛水,自由潛水,自由潛水課程,自由潛水教學,自由潛水體驗,小班制教學,浮潛活動,AIDA1,AIDA2,AIDA3,Snorkel",
                },
            ],
        };
    },
    components: {
        TheHeader,
        OffCanvasMobileMenu,
        Breadcrumb,
        SnorkelDetail,
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
                    text: "浮潛活動",
                    active: true,
                },
            ],
            course: {
                title: "浮潛活動",
                text: "為你揭開大海的神秘面紗，讓你體驗從未體驗過的海底世界本課程將使你有信心而且安全舒適的探索水下世界。課程中將帶你瞭解與感受自由潛水與眾不同的魅力。",
                day: "3 小時",
                price: [],
                contents: ["理論課程", "開放海域課程"],
                items: ["自由潛水裝備費用", "保險費", "AIDA證照費"],
            },
        };
    },
};
</script>

<style lang="scss" scoped></style>
