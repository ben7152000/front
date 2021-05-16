<template>
    <div class="section-padding">
        <div class="container">
            <div class="row">
                <div class="col-lg-6" data-aos="fade-up">
                    <div class="about-content-area">
                        <div class="section-title-two">
                            <span class="sub-title">每個人都能挑戰自己</span>
                            <h3 class="title">龍 洞 岬 自 潛 、 浮 潛 中 心</h3>
                        </div>
                        <div class="row mtn-30">
                            <div
                                class="col-md-5 col-sm-6 col-12 mt-30"
                                data-aos="fade-up"
                            >
                                <div class="about-funfact">
                                    <div class="number">
                                        <span class="counter">自潛課程</span>
                                    </div>
                                    <h6 class="text">完課學生</h6>
                                    <p>
                                        我們指導眾多自由潛水學生，協助他們提升自我能力，並完成AIDA課程需求，拿取證照
                                    </p>
                                </div>
                            </div>
                            <div
                                class="col-md-5 col-sm-6 col-12 mt-30"
                                data-aos="fade-up"
                            >
                                <div class="about-funfact">
                                    <div class="number">
                                        <span class="counter">其他資訊</span>
                                    </div>
                                    <h6 class="text">各項服務</h6>
                                    <ul>
                                        <li>浮潛裝備租售</li>
                                        <li>浮潛體驗</li>
                                        <li>更衣沖洗</li>
                                        <li>完美的置物櫃</li>
                                        <li>投幣式吹風機</li>
                                        <li>冷飲＆熱食</li>
                                        <li>東北角名產(石花凍)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6" data-aos="fade-up">
                    <div
                        class="
                            about-image-area about-two about-shape-animation
                            right-0
                            mr-0
                        "
                    >
                        <div class="about-image js-tilt">
                            <img
                                src="/images/about-1.jpg"
                                alt="images"
                                style="width: 370px; height: 370px"
                            />
                        </div>
                        <div class="about-image js-tilt">
                            <img
                                src="/images/about-2.jpg"
                                alt="images"
                                style="width: 370px; height: 400px"
                            />
                        </div>
                        <ShapeWithAnimation
                            addClassName="shape-1"
                            data-depth="1"
                            imgSrc="/images/shape-animation/video-shape-1.png"
                        />
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
            title: "About-Two",
        };
    },
    components: {
        ShapeWithAnimation,
    },
};
</script>
