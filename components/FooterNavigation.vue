<template>
    <div class="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 mt-30">
        <div class="footer-widget">
            <h4 class="footer-widget-title">{{ title }}</h4>
            <div class="footer-widget-content">
                <ul>
                    <li v-for="(item, index) in items" :key="index">
                        <n-link :to="item.to">{{ item.title }}</n-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: "Footer-Navigation"
        };
    },
    props: ["title", "items"]
};
</script>
