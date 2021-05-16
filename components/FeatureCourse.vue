<template>
    <div class="section-padding-t90-b100">
        <div class="container">
            <SectionTitle
                title="自 由 潛 水 AIDA 課 程"
                sub-title="擁有專業教練、齊全裝備、最佳據點位置"
                add-class-name="mb-60"
            />
            <div
                class="
                    row row-cols-lg-2 row-cols-md-2 row-cols-sm-2 row-cols-1
                    mtn-30
                "
            >
                <FeatureCard
                    v-for="(feature, index) in features"
                    :key="index"
                    :title="feature.title"
                    :text="feature.text"
                    :image="feature.image"
                    :url="feature.url"
                    :price="feature.price"
                    :day="feature.day"
                />
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
            title: "Feature-Course",
        };
    },
    props: ["addClassName"],
    components: {
        SectionTitle,
        FeatureCard,
    },

    data() {
        return {
            features: [
                {
                    title: "AIDA 體驗",
                    text: "你還在猶豫嗎？害怕踩不到底的海域又不太會游泳嗎？對自由潛水有興趣但又怕報名後才發現和自己想像的不一樣？那就快來參加體驗！體驗完全不需要有壓力，帶著輕鬆的心情來玩吧！",
                    image: "/images/體驗.png",
                    url: "/course-aida-experience",
                    price: "800 TWD",
                    day: "2 小時",
                },
                {
                    title: "AIDA 1 課程",
                    text: "為你揭開大海的神秘面紗，讓你體驗從未體驗過的海底世界。本課程將使你有信心而且安全舒適的探索水下世界。課程中將帶你瞭解與感受自由潛水與眾不同的魅力。",
                    image: "/images/AIDA1.png",
                    url: "/course-aida-1",
                    price: "5500 TWD",
                    day: "1 天",
                },
                {
                    title: "AIDA 2 課程",
                    text: "課程將針對自由潛水初學者正式進入開放海域所設計的基礎課程建立安全潛水的基本知識與能力。所有自由潛水的進步方式，練習技巧，基礎海況分析...等，都將在課堂中一一傳授與講解。",
                    image: "/images/AIDA2.png",
                    url: "/course-aida-2",
                    price: "13500 TWD",
                    day: "3 天",
                },
                {
                    title: "AIDA 3 課程",
                    text: "強化下潛技巧與潛水認知進階的課程將合理運用所學到的每一個技巧，建立安全快速的進步方式與習慣，使平壓技巧與身體姿勢更佳順暢，最後身理與心理都能適應，達到每一次的下潛都能輕鬆與享受",
                    image: "/images/AIDA3.png",
                    url: "/course-aida-3",
                    price: "17000 TWD",
                    day: "4 天",
                },
            ],
        };
    },
};
</script>
