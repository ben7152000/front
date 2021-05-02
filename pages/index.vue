<template>
    <div class="main-container">
        <TheHeader />
        <OffCanvasMobileMenu />
        <HeroSlider />
        <AboutOne />
        <FeatureCourse :style="{ backgroundColor: '#f8faff' }" />
        <CallToAction />
        <TheFooter />
        <div id=”fb-root”></div>
    </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import OffCanvasMobileMenu from "@/components/OffCanvasMobileMenu";
import HeroSlider from "@/components/HeroSlider";
import AboutOne from "@/components/AboutOne";
import FeatureCourse from "@/components/FeatureCourse";
import CallToAction from "@/components/CallToAction";
import TheFooter from "@/components/TheFooter";

export default {
    head() {
        return {
            title: "Home Page"
        };
    },
    components: {
        TheHeader,
        OffCanvasMobileMenu,
        HeroSlider,
        AboutOne,
        FeatureCourse,
        CallToAction,
        TheFooter
    }
};
</script>
