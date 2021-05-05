<template>
    <div
        class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mtn-30"
    >
        <div
            class="col mt-30"
            data-aos="fade-up"
            v-for="(item, index) in socialData"
            :key="index"
        >
            <div class="contact-info">
                <div class="icon">
                    <img 
                        class="svgInject" 
                        :src="item.src" 
                        alt="Icon" 
                        style="width:64px; height: 64px"
                    />
                </div>
                <div class="info">
                    <h4 class="title">{{ item.title }}</h4>
                    <span class="info-text">{{ item.info }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: "Call-To-Action-Card"
        };
    },
    data() {
        return {
            socialData: [
                {
                    title: "地圖資訊",
                    info: "新北市貢寮區龍洞街1-5號",
                    src: "/images/svg/linea/linea-basic-map.svg"
                },
                {
                    title: "聯絡電話",
                    info: "0955-857-339",
                    src: "/images/svg/linea/linea-basic-message-txt.svg"
                },
                {
                    title: "信箱Email",
                    info: "bang92830@hotmail.com",
                    src: "/images/svg/linea/linea-basic-mail-open-text.svg"
                }
            ]
        };
    }
};
</script>
