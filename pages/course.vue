<template>
    <div class="main-container">
        <TheHeader />
        <OffCanvasMobileMenu />
        <Breadcrumb
            :items="items"
            title="We are an agency located in New York"
            backgroundUrl="https://picsum.photos/1920/540?random=6"
        />
        <FeatureCourse />
        <TheFooter />
    </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import OffCanvasMobileMenu from "@/components/OffCanvasMobileMenu";
import Breadcrumb from "@/components/Breadcrumb";
import FeatureCourse from "@/components/FeatureCourse";
import TheFooter from "@/components/TheFooter";

export default {
    head() {
        return {
            title: "Course"
        };
    },
    components: {
        TheHeader,
        OffCanvasMobileMenu,
        Breadcrumb,
        FeatureCourse,
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
                    active: true
                }
            ]
        };
    }
};
</script>
