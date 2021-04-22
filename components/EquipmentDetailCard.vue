<template>
    <div class="blog">
        <div class="thumbnail">
            <div class="image">
                <img :src="url" :alt="title" />
            </div>
        </div>
        <div class="info">
            <h3 class="title text-center">{{ title }}</h3>
            <p class="price text-center">{{ price }} TWD</p>
        </div>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: "Equipment-Detail-Card"
        };
    },
    props: ["title", "url", "price"]
};
</script>

<style scoped>
.price {
    font-weight: 900;
    color: rgb(228, 54, 54);
}
</style>
