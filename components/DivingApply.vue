<template>
    <div class="work-btn">
        <a
            :href="url"
            class="btn btn-primary btn-hover-secondary"
            target="_blank"
            >前往報名</a
        >
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: "Diving-Apply",
        };
    },
    props: ["url"],
};
</script>
