<template>
    <div class="intro-slider">
        <swiper :options="swiperOptions">
            <swiper-slide
                class="swiper-slide"
                v-for="(banner, index) in sliderData"
                :key="index"
            >
                <div
                    class="intro-section overlay bg-cover"
                    :style="{ backgroundImage: `url(${banner.bgImgSrc})` }"
                >
                    <div class="container">
                        <div class="row row-cols-lg-1 row-cols-1">
                            <div class="col align-self-center">
                                <div
                                    class="
                                        intro-content
                                        mt-xl-8 mt-lg-8 mt-md-8 mt-sm-8 mt-xs-8
                                    "
                                >
                                    <h2 class="title">{{ banner.heading }}</h2>
                                    <a
                                        href="/course"
                                        class="
                                            btn btn-primary btn-hover-secondary
                                        "
                                        >立即報名</a
                                    >
                                    <a
                                        href="/equipment"
                                        class="
                                            btn
                                            btn-outline-white
                                            btn-hover-primary
                                        "
                                        >了解更多</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
        <div class="home-slider-prev swiper-button-prev main-slider-nav">
            <i class="fal fa-angle-left"></i>
        </div>
        <div class="home-slider-next swiper-button-next main-slider-nav">
            <i class="fal fa-angle-right"></i>
        </div>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: "Hero-Slider",
        };
    },
    data() {
        return {
            swiperOptions: {
                speed: 1000,
                loop: true,
                autoplay: 3000,
                spaceBetween: 30,
                navigation: {
                    nextEl: ".home-slider-next",
                    prevEl: ".home-slider-prev",
                },
            },
            sliderData: [
                {
                    id: 1,
                    heading: "專 業 自 由 潛 水 課 程 & 裝 備 出 租",
                    bgImgSrc: "/images/banner-1.jpeg",
                },
                {
                    id: 2,
                    heading: "專 業 自 由 潛 水 課 程 & 裝 備 出 租",
                    bgImgSrc: "/images/banner-2.jpg",
                },
            ],
        };
    },
};
</script>
