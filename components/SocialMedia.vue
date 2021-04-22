<template>
    <div class="footer-widget-content">
        <div class="content">
            <p>
                <a :href="`886-${phone}`">0{{ phone }}</a>
            </p>
            <p>
                <a :href="`mailto:${email}`">{{ email }}</a>
            </p>
        </div>
        <div class="footer-social-inline">
            <a :href="line">
                <i class="fab fa-line"></i>
            </a>
            <a :href="facebook">
                <i class="fab fa-facebook-square"></i>
            </a>
            <a :href="instagram">
                <i class="fab fa-instagram"></i>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: "Social-Media"
        };
    },
    data() {
        return {
            email: "ben7152000@gmail.com",
            phone: "955-857-339",
            facebook: "https://www.facebook.com/dragon49/?ref=page_internal",
            line: "https://line.me/R/ti/p/%40843eetrw",
            instagram: "https://www.instagram.com/longdongjia1_7/?hl=en"
        };
    }
};
</script>
