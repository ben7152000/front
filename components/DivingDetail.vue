<template>
    <div class="section-padding-t90-b100">
        <DivingDetailCard
            :title="course.title"
            :text="course.text"
            :day="course.day"
            :price="course.price"
            :contents="course.contents"
            :items="course.items"
            :url="course.url"
        />
    </div>
</template>

<script>
import SectionTitle from "@/components/SectionTitle";
import DivingDetailCard from "@/components/DivingDetailCard";

export default {
    head() {
        return {
            title: "Diving-Detail",
        };
    },
    props: ["addClassName", "course"],
    components: {
        SectionTitle,
        DivingDetailCard,
    },
};
</script>
