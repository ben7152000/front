<template>
  <div class="section-padding-t90-b100">
    <div class="container">
      <SectionTitle title="相關裝備租借"
                    sub-title="擁有齊全、安全、專業的裝備，應有盡有"
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
      title: "Feature-Equipment"
    };
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
          text: "救生衣、浮潛面鏡、防寒衣褲、蛙鞋、浮標、救生圈、陽傘",
          image: "/images/equipment-1.jpg",
          url: "/equipment-snorkeling"
        },
        {
          title: "自潛裝備",
          text: "自潛面鏡、呼吸管、防寒衣褲、蛙鞋、浮球、鉛帶、鉛塊",
          image: "/images/equipment-2.png",
          url: "/equipment-freediving"
        }
      ]
    };
  }
};
</script>
