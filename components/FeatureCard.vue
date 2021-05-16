<template>
    <div class="col mt-30" data-aos="fade-up">
        <div class="icon-box text-center" :class="addClassName">
            <div class="icon">
                <img
                    :src="image"
                    :alt="title"
                    style="width: 250px; height: 250px"
                />
            </div>
            <div class="content">
                <h3 class="title">{{ title }}</h3>
                <div class="desc">
                    <p>{{ text }}</p>
                </div>
                <a :href="url" class="link">詳細介紹</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: "Feature-Card",
        };
    },
    props: ["addClassName", "title", "text", "image", "url"],
};
</script>
