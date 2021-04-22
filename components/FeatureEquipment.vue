<template>
  <div class="section-padding-t90-b100">
    <div class="container">
      <SectionTitle title="We create a unique action plan for brands"
                    sub-title="Get your company heading in the right direction with our digital marketing strategist"
                    add-class-name="mb-60" />
      <div class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mtn-30 justify-content-center">
        <FeatureCard v-for="(feature, index) in features"
                     :key="index"
                     :title="feature.title"
                     :text="feature.text"
                     :image="feature.image"
                     :url="feature.url" />
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from "@/components/SectionTitle";
import FeatureCard from "@/components/FeatureCard";

export default {
  head() {
    return {
        title: 'Feature-Equipment'
    }
  },
  props: ["addClassName"],
  components: {
    SectionTitle,
    FeatureCard
  },
  data() {
    return {
      features: [
        {
          title: "浮潛裝備",
          text:
            "First impressions count! Make sure your brand works for you. We offer digital marketing.",
          image: "https://picsum.photos/250/250?random=1",
          url: "/equipment-snorkeling"
        },
        {
          title: "自潛裝備",
          text:
            "First impressions count! Make sure your brand works for you. We offer digital marketing.",
          image: "https://picsum.photos/250/250?random=2",
          url: "/equipment-freediving"
        }
      ]
    };
  }
};
</script>
