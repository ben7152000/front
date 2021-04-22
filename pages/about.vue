<template>
    <div class="main-container">
        <TheHeader />
        <OffCanvasMobileMenu />
        <Breadcrumb
            :items="items"
            title="We are an agency located in New York"
            backgroundUrl="https://picsum.photos/1920/540?random=1"
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
            title: "About-Us"
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
