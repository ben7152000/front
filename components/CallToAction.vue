<template>
    <div class="section-padding-t90-b100">
        <div class="container shape-animate">
            <SectionTitle
                title="We are a full-service creative agency"
                sub-title="Our team of designers, developers and creatives are perfectionists who love what they do and love where they work"
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
            title: "Call-to-Action"
        };
    },
    components: {
        SectionTitle,
        CallToActionCard,
        ShapeWithAnimation
    }
};
</script>
