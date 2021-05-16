<template>
    <div class="section-padding-t90-b100">
        <div class="container shape-animate">
            <SectionTitle
                title="與我們聯繫"
                sub-title="想要預約課程、租借裝備、詢問下水等任何問題都歡迎聯絡我們唷！"
                add-class-name="mb-30"
            />
            <CallToActionCard />
            <ShapeWithAnimation
                add-class-name="shape-1"
                data-depth="4"
                img-src="/images/shape-animation/video-shape-1.png"
            />
        </div>
    </div>
</template>

<script>
import SectionTitle from "@/components/SectionTitle";
import CallToActionCard from "@/components/CallToActionCard";
import ShapeWithAnimation from "@/components/ShapeWithAnimation";

export default {
    head() {
        return {
            title: "Call-to-Action",
        };
    },
    components: {
        SectionTitle,
        CallToActionCard,
        ShapeWithAnimation,
    },
};
</script>
