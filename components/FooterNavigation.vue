<template>
    <div class="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 mt-30">
        <div class="footer-widget">
            <h4 class="footer-widget-title">{{ title }}</h4>
            <div class="footer-widget-content">
                <ul>
                    <li v-for="(item, index) in items" :key="index">
                        <a :href="item.to">{{ item.title }}</a>
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
