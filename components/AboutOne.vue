<template>
  <div class="section-padding-t90 section-padding-bottom-200">
    <div class="container">
      <div class="section-title text-center"
           data-aos="fade-up">
        <h2 class="title">龍 洞 岬 自 潛 、 浮 潛 中 心</h2>
      </div>
      <div class="row">
        <div class="col-xl-7 col-lg-6"
             data-aos="fade-up">
          <div class="about-image-area">
            <div class="about-image js-tilt">
              <img src="/images/about-1.jpg"
                   alt="images"
                   style="width: 370px; height: 370px" />
            </div>
            <div class="about-image js-tilt">
              <img src="/images/about-2.jpg"
                   alt="images"
                   style="width: 370px; height: 400px" />
            </div>
            <ShapeWithAnimation addClassName="shape-1"
                                dataDepth="1"
                                imgSrc="/images/shape-animation/about-shape-1.png" />
          </div>
        </div>
        <div class="col-xl-5 col-lg-6"
             data-aos="fade-up">
          <div class="about-content-area about-one">
            <div class="section-title-two">
              <span class="sub-title">每個人都能挑戰自己</span>
              <h3 class="title">
                ✦ 本中心服務項目 ✦
              </h3>
            </div>
            <ul>
              <li>浮潛裝備出租,販售</li>
              <li>自由潛水裝備出租,販售</li>
              <li>自由潛水AIDA課程</li>
            </ul>
            <a href="/about"
               class="btn btn-primary btn-hover-secondary mt-4">關於我們</a>
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
