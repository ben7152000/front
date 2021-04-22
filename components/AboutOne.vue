<template>
    <div class="section-padding-t90 section-padding-bottom-200">
        <div class="container">
            <div class="section-title text-center" data-aos="fade-up">
                <h2 class="title">龍 洞 岬 自 潛 、 浮 潛 中 心</h2>
            </div>
            <div class="row">
                <div class="col-xl-7 col-lg-6" data-aos="fade-up">
                    <div class="about-image-area">
                        <div class="about-image js-tilt">
                            <img
                                src="https://picsum.photos/370/370?random=1"
                                alt="images"
                            />
                        </div>
                        <div class="about-image js-tilt">
                            <img
                                src="https://picsum.photos/370/400?random=1"
                                alt="images"
                            />
                        </div>
                        <ShapeWithAnimation
                            addClassName="shape-1"
                            dataDepth="1"
                            imgSrc="/images/shape-animation/about-shape-1.png"
                        />
                    </div>
                </div>
                <div class="col-xl-5 col-lg-6" data-aos="fade-up">
                    <div class="about-content-area about-one">
                        <div class="section-title-two">
                            <span class="sub-title">每個人擁有挑戰自己</span>
                            <h3 class="title">
                                Creative agency focused on vision, product and
                                people
                            </h3>
                        </div>
                        <p>
                            We’re boldly individual, always original and
                            refreshingly easy-going. Our vision, passion and
                            ideas are matched with focus, expertise and flair.
                        </p>
                        <n-link
                            to="/about"
                            class="btn btn-primary btn-hover-secondary mt-4"
                            >關於我們</n-link
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ShapeWithAnimation from "@/components/ShapeWithAnimation";

export default {
    head() {
        return {
            title: "About-One"
        };
    },
    components: {
        ShapeWithAnimation
    }
};
</script>
