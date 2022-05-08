<template>
    <div class="footer-widget-content">
        <div class="content">
            <p>
                <a :href="`tel:+886-${phone}`">0{{ phone }}</a>
            </p>
            <p>
                <a :href="`mailto:${email}`" target="_blank">{{ email }}</a>
            </p>
        </div>
        <div class="footer-social-inline">
            <a :href="line" target="_blank">
                <i class="fab fa-line"></i>
            </a>
            <a :href="facebook" target="_blank">
                <i class="fab fa-facebook-square"></i>
            </a>
            <a :href="instagram" target="_blank">
                <i class="fab fa-instagram"></i>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: "Social-Media",
        };
    },
    data() {
        return {
            email: "bang92830@gmail.com",
            phone: "939-098-057",
            facebook: "https://www.facebook.com/dragon49/?ref=page_internal",
            line: "https://line.me/R/ti/p/%40843eetrw",
            instagram: "https://www.instagram.com/longdongjia1_7/?hl=en",
        };
    },
};
</script>
