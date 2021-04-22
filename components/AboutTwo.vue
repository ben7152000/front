<template>
    <div class="section-padding">
        <div class="container">
            <div class="row">
                <div class="col-lg-6" data-aos="fade-up">
                    <div class="about-content-area">
                        <div class="section-title-two">
                            <span class="sub-title"
                                >Web design and digital marketing</span
                            >
                            <h3 class="title">
                                We think strategy, UX design, <br />
                                and web development
                            </h3>
                        </div>
                        <div class="row mtn-30">
                            <div
                                class="col-md-5 col-sm-6 col-12 mt-30"
                                data-aos="fade-up"
                            >
                                <div class="about-funfact">
                                    <div class="number">
                                        <span class="counter">110</span>+
                                    </div>
                                    <h6 class="text">Happy Clients</h6>
                                    <p>
                                        We help our clients increase profits by
                                        increasing their visibility online.
                                    </p>
                                </div>
                            </div>
                            <div
                                class="col-md-5 col-sm-6 col-12 mt-30"
                                data-aos="fade-up"
                            >
                                <div class="about-funfact">
                                    <div class="number">
                                        <span class="counter">130</span>+
                                    </div>
                                    <h6 class="text">Completed projects</h6>
                                    <p>
                                        We help our clients increase profits by
                                        increasing their visibility online.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6" data-aos="fade-up">
                    <div
                        class="about-image-area about-two about-shape-animation right-0 mr-0"
                    >
                        <div class="about-image js-tilt">
                            <img
                                src="https://picsum.photos/370/370?random=1"
                                alt="image"
                            />
                        </div>
                        <div class="about-image js-tilt">
                            <img
                                src="https://picsum.photos/370/400?random=1"
                                alt="image"
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
            title: "About-Two"
        };
    },
    components: {
        ShapeWithAnimation
    }
};
</script>
