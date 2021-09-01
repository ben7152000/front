<template>
    <div class="section-padding-t90-b100">
        <SnorkelDetailCard
            :title="course.title"
            :text="course.text"
            :day="course.day"
            :price="course.price"
            :contents="course.contents"
            :items="course.items"
        />
    </div>
</template>

<script>
import SectionTitle from "@/components/SectionTitle";
import SnorkelDetailCard from "@/components/SnorkelDetailCard";
export default {
    head() {
        return {
            title: "Snorkel-Detail",
        };
    },
    props: ["addClassName", "course"],
    components: {
        SectionTitle,
        SnorkelDetailCard,
    },
};
</script>
