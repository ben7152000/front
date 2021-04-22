<template>
    <div class="custom-layout-gallery mt-60">
        <div class="row mtn-30">
            <div class="col-lg-6 col-md-6 col-12 mt-30">
                <div class="thumbnail" data-aos="fade-up">
                    <img
                        class="w-100"
                        src="https://picsum.photos/500/600?random=1"
                        alt="Agency"
                    />
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-12 mt-30">
                <div class="thumbnail" data-aos="fade-up">
                    <img
                        class="w-100"
                        src="https://picsum.photos/500/600?random=2"
                        alt="Agency"
                    />
                </div>
            </div>
            <div class="col-lg-12 mt-30">
                <div class="thumbnail" data-aos="fade-up">
                    <img
                        class="w-100"
                        src="https://picsum.photos/1170/600?random=1"
                        alt="Agency"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: "Diving-Gallery"
        };
    }
};
</script>
